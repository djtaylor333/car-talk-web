/**
 * Generates CarTalk PWA icons without any image-processing dependencies.
 * Outputs: public/icon-192.png, public/icon-512.png, public/favicon.ico
 *
 * The icon is a solid #1565C0 (blue) rounded square with a white stylised
 * car silhouette composed of simple rectangles, drawn pixel-by-pixel.
 *
 * Run with:  node scripts/generate-icons.mjs
 */

import { deflateSync } from 'zlib';
import { writeFileSync } from 'fs';

// ─── CRC32 table ──────────────────────────────────────────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c;
  }
  return t;
})();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = CRC_TABLE[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function uint32BE(n) {
  const b = Buffer.allocUnsafe(4);
  b.writeUInt32BE(n, 0);
  return b;
}

function pngChunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const crcInput  = Buffer.concat([typeBytes, data]);
  return Buffer.concat([
    uint32BE(data.length),
    typeBytes,
    data,
    uint32BE(crc32(crcInput)),
  ]);
}

// ─── Draw functions ───────────────────────────────────────────────────────────
/**
 * Returns an RGBA Uint8ClampedArray representing a `size×size` CarTalk icon.
 * Background: #1565C0 (blue). Foreground (car): white.
 */
function drawIcon(size) {
  const pixels = new Uint8ClampedArray(size * size * 4);
  const s = size;

  // Fill background
  const BG = [21, 101, 192, 255]; // #1565C0
  for (let i = 0; i < s * s; i++) {
    pixels.set(BG, i * 4);
  }

  // Round corners (transparent)
  const r = Math.round(s * 0.15);
  const cx = s / 2, cy = s / 2;
  for (let y = 0; y < s; y++) {
    for (let x = 0; x < s; x++) {
      const inCorner =
        (x < r && y < r && (x - r) ** 2 + (y - r) ** 2 > r * r) ||
        (x > s - 1 - r && y < r && (x - (s - 1 - r)) ** 2 + (y - r) ** 2 > r * r) ||
        (x < r && y > s - 1 - r && (x - r) ** 2 + (y - (s - 1 - r)) ** 2 > r * r) ||
        (x > s - 1 - r && y > s - 1 - r && (x - (s - 1 - r)) ** 2 + (y - (s - 1 - r)) ** 2 > r * r);
      if (inCorner) {
        pixels[(y * s + x) * 4 + 3] = 0; // transparent
      }
    }
  }

  // Helper: fill a rectangle with white
  function fillRect(xFrom, yFrom, width, height) {
    for (let dy = 0; dy < height; dy++) {
      for (let dx = 0; dx < width; dx++) {
        const px = Math.round(xFrom) + dx;
        const py = Math.round(yFrom) + dy;
        if (px >= 0 && px < s && py >= 0 && py < s) {
          const idx = (py * s + px) * 4;
          pixels[idx]     = 255;
          pixels[idx + 1] = 255;
          pixels[idx + 2] = 255;
          pixels[idx + 3] = 255;
        }
      }
    }
  }

  // Scale factor
  const f = s / 100;

  // ── Car silhouette (centered, proportional to icon size) ──────────────────
  // Chassis / body base (wide flat rectangle)
  fillRect(10 * f, 65 * f, 80 * f, 14 * f);
  // Cabin roof (narrower, on top of chassis)
  fillRect(22 * f, 45 * f, 56 * f, 22 * f);
  // Wheels (dark cutouts — draw background colour circles into the white)
  const wheelR = 7 * f;
  const wheelY = 77 * f;
  function drawCircle(cx, cy, radius, r, g, b) {
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (dx * dx + dy * dy <= radius * radius) {
          const px = Math.round(cx + dx);
          const py = Math.round(cy + dy);
          if (px >= 0 && px < s && py >= 0 && py < s) {
            const idx = (py * s + px) * 4;
            pixels[idx]     = r;
            pixels[idx + 1] = g;
            pixels[idx + 2] = b;
            pixels[idx + 3] = 255;
          }
        }
      }
    }
  }
  // Wheel arches (white outer) then hub (blue inner)
  drawCircle(27 * f, wheelY, wheelR, 255, 255, 255);
  drawCircle(27 * f, wheelY, Math.round(wheelR * 0.55), 21, 101, 192);
  drawCircle(73 * f, wheelY, wheelR, 255, 255, 255);
  drawCircle(73 * f, wheelY, Math.round(wheelR * 0.55), 21, 101, 192);
  // Windscreen slot (dark – blue)
  fillRect(26 * f, 48 * f, 20 * f, 14 * f);
  // Recolor windscreen blue
  for (let dy = 0; dy < Math.round(14 * f); dy++) {
    for (let dx = 0; dx < Math.round(20 * f); dx++) {
      const px = Math.round(26 * f) + dx;
      const py = Math.round(48 * f) + dy;
      if (px >= 0 && px < s && py >= 0 && py < s) {
        const idx = (py * s + px) * 4;
        pixels[idx]     = 21;
        pixels[idx + 1] = 101;
        pixels[idx + 2] = 192;
        pixels[idx + 3] = 220;
      }
    }
  }
  // Rear window slot (blue)
  for (let dy = 0; dy < Math.round(14 * f); dy++) {
    for (let dx = 0; dx < Math.round(20 * f); dx++) {
      const px = Math.round(54 * f) + dx;
      const py = Math.round(48 * f) + dy;
      if (px >= 0 && px < s && py >= 0 && py < s) {
        const idx = (py * s + px) * 4;
        pixels[idx]     = 21;
        pixels[idx + 1] = 101;
        pixels[idx + 2] = 192;
        pixels[idx + 3] = 220;
      }
    }
  }

  return pixels;
}

// ─── PNG encoder ─────────────────────────────────────────────────────────────
function encodePNG(size, pixels) {
  const PNG_SIG = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR: width, height, bitdepth=8, colortype=6 (RGBA), compress=0, filter=0, interlace=0
  const ihdrData = Buffer.allocUnsafe(13);
  ihdrData.writeUInt32BE(size, 0);
  ihdrData.writeUInt32BE(size, 4);
  ihdrData[8] = 8;   // bit depth
  ihdrData[9] = 6;   // RGBA
  ihdrData[10] = 0;  // compression
  ihdrData[11] = 0;  // filter
  ihdrData[12] = 0;  // interlace

  // Build raw image data (filter byte + row data)
  const stride = size * 4;
  const rawRows = Buffer.allocUnsafe(size * (1 + stride));
  for (let y = 0; y < size; y++) {
    rawRows[y * (1 + stride)] = 0; // filter type None
    Buffer.from(pixels.buffer, pixels.byteOffset + y * stride, stride)
      .copy(rawRows, y * (1 + stride) + 1);
  }

  const compressed = deflateSync(rawRows, { level: 6 });

  return Buffer.concat([
    PNG_SIG,
    pngChunk('IHDR', ihdrData),
    pngChunk('IDAT', compressed),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ─── ICO encoder (single 32x32 RGBA BMP embedded in ICO wrapper) ─────────────
function drawIconSimple(size) {
  return drawIcon(size);
}

function encodeICO(size) {
  const pixels = drawIconSimple(size);

  // BMP header for ICO (BITMAPINFOHEADER = 40 bytes)
  const bmpHeaderSize = 40;
  const rowSize = size * 4;
  // XOR mask (RGBA rows, bottom-up)
  const xorSize = size * rowSize;
  // AND mask (1-bit, padded to 4-byte boundary per row)
  const andRowBytes = Math.ceil(size / 8);
  const andRowPadded = Math.ceil(andRowBytes / 4) * 4;
  const andSize = size * andRowPadded;

  const bmpTotalSize = bmpHeaderSize + xorSize + andSize;

  const bmp = Buffer.allocUnsafe(bmpTotalSize);
  let off = 0;

  // BITMAPINFOHEADER
  bmp.writeInt32LE(40, off);           off += 4;  // biSize
  bmp.writeInt32LE(size, off);         off += 4;  // biWidth
  bmp.writeInt32LE(size * 2, off);     off += 4;  // biHeight (double for XOR+AND)
  bmp.writeUInt16LE(1, off);           off += 2;  // biPlanes
  bmp.writeUInt16LE(32, off);          off += 2;  // biBitCount
  bmp.writeUInt32LE(0, off);           off += 4;  // biCompression (BI_RGB)
  bmp.writeUInt32LE(xorSize, off);     off += 4;  // biSizeImage
  bmp.writeInt32LE(0, off);            off += 4;  // biXPelsPerMeter
  bmp.writeInt32LE(0, off);            off += 4;  // biYPelsPerMeter
  bmp.writeUInt32LE(0, off);           off += 4;  // biClrUsed
  bmp.writeUInt32LE(0, off);           off += 4;  // biClrImportant

  // XOR mask: BGRA, bottom-up
  for (let y = size - 1; y >= 0; y--) {
    for (let x = 0; x < size; x++) {
      const src = (y * size + x) * 4;
      bmp[off++] = pixels[src + 2]; // B
      bmp[off++] = pixels[src + 1]; // G
      bmp[off++] = pixels[src + 0]; // R
      bmp[off++] = pixels[src + 3]; // A
    }
  }

  // AND mask: all zeros (fully opaque via alpha channel)
  bmp.fill(0, off);

  // ICO file header (6 bytes) + ICONDIRENTRY (16 bytes) + BMP data
  const ico = Buffer.allocUnsafe(6 + 16 + bmpTotalSize);
  let ioff = 0;

  ico.writeUInt16LE(0, ioff);          ioff += 2; // reserved
  ico.writeUInt16LE(1, ioff);          ioff += 2; // type: 1 = ICO
  ico.writeUInt16LE(1, ioff);          ioff += 2; // count: 1 image

  // ICONDIRENTRY
  ico[ioff++] = size > 255 ? 0 : size; // width (0 = 256)
  ico[ioff++] = size > 255 ? 0 : size; // height
  ico[ioff++] = 0;                     // color count (0=true color)
  ico[ioff++] = 0;                     // reserved
  ico.writeUInt16LE(1, ioff);          ioff += 2; // planes
  ico.writeUInt16LE(32, ioff);         ioff += 2; // bit count
  ico.writeUInt32LE(bmpTotalSize, ioff); ioff += 4; // size of image data
  ico.writeUInt32LE(22, ioff);         ioff += 4; // offset to image data (6+16=22)

  bmp.copy(ico, ioff);
  return ico;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const PUBLIC = join(dirname(__filename), '..', 'public') + '/';

[192, 512].forEach((size) => {
  const pixels = drawIcon(size);
  const png = encodePNG(size, pixels);
  const path = `${PUBLIC}icon-${size}.png`;
  writeFileSync(path, png);
  console.log(`✓ Written ${path} (${png.length} bytes)`);
});

// 32×32 favicon
const icoData = encodeICO(32);
const icoPath = `${PUBLIC}favicon.ico`;
writeFileSync(icoPath, icoData);
console.log(`✓ Written ${icoPath} (${icoData.length} bytes)`);
