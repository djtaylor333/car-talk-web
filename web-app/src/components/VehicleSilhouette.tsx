import React, { useState } from 'react';

interface VehicleSilhouetteProps {
  color: string;
  make?: string;
  model?: string;
  size?: number;
  className?: string;
}

/** Map our colour names to hex codes (without the #). */
const COLOR_HEX: Record<string, string> = {
  White: 'f5f5f5',
  Black: '1a1a1a',
  Silver: 'c0c0c0',
  Grey: '808080',
  Red: 'cc0000',
  Blue: '1565c0',
  Green: '2d6a2d',
  Yellow: 'ffd700',
  Orange: 'ff6600',
  Brown: '7b3f00',
  Beige: 'f5f0dc',
  Gold: 'cfb53b',
};

/** Used for the fallback SVG fill. */
const COLOR_FILL: Record<string, string> = {
  White: '#FFFFFF',
  Black: '#1A1A1A',
  Silver: '#C0C0C0',
  Grey: '#808080',
  Red: '#CC0000',
  Blue: '#0047AB',
  Green: '#2D6A2D',
  Yellow: '#FFD700',
  Orange: '#FF6600',
  Brown: '#7B3F00',
  Beige: '#F5F0DC',
  Gold: '#CFB53B',
};

/** Slugify a make/model string for the Imagin Studios API. */
const toSlug = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Build the Imagin Studios URL for a realistic car photo.
 *  Falls back gracefully when make/model aren't known to the CDN. */
const imaginUrl = (make: string, model: string, colorHex: string): string => {
  const params = new URLSearchParams({
    customer: 'img',
    make: toSlug(make),
    modelFamily: toSlug(model),
    paintId: `colourpicker-${colorHex}`,
    angle: '23',
    width: '400',
    zoomType: 'fullscreen',
  });
  return `https://cdn.imagin.studio/getimage?${params.toString()}`;
};

/** Simple SVG silhouette — used as a fallback when no photo is available. */
const SilhouetteSvg: React.FC<{ fill: string; stroke: string; width: number; height: number }> = ({
  fill,
  stroke,
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 80 40"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Body */}
    <rect x="4" y="20" width="72" height="16" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
    {/* Roof */}
    <path d="M18 20 L24 8 L56 8 L62 20 Z" fill={fill} stroke={stroke} strokeWidth="1.5" />
    {/* Windscreen */}
    <path d="M27 19 L30 9 L50 9 L53 19 Z" fill="#AAD4F0" opacity="0.7" />
    {/* Rear window */}
    <path d="M18 19 L23 9 L29 9 L24 19 Z" fill="#AAD4F0" opacity="0.5" />
    {/* Front wheel */}
    <circle cx="60" cy="36" r="6" fill="#333" />
    <circle cx="60" cy="36" r="3" fill="#999" />
    {/* Rear wheel */}
    <circle cx="22" cy="36" r="6" fill="#333" />
    <circle cx="22" cy="36" r="3" fill="#999" />
    {/* Headlight */}
    <rect x="70" y="24" width="5" height="4" rx="1" fill="#FFFAAA" />
    {/* Tail light */}
    <rect x="5" y="24" width="5" height="4" rx="1" fill="#FF4444" />
  </svg>
);

const VehicleSilhouette: React.FC<VehicleSilhouetteProps> = ({
  color,
  make,
  model,
  size = 80,
  className,
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const hex = COLOR_HEX[color] ?? 'c0c0c0';
  const fill = COLOR_FILL[color] ?? color;
  const stroke = color === 'White' || color === 'Beige' ? '#888' : '#222';
  const w = size * 2;   // photo is wider than the old SVG
  const h = size;

  const showPhoto = make && model && !imgFailed;

  return (
    <div
      className={className}
      style={{ width: w, height: h, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
      aria-label={`${color}${make ? ` ${make}` : ''}${model ? ` ${model}` : ''}`}
      role="img"
    >
      {showPhoto && (
        <>
          {/* Loading placeholder */}
          {!imgLoaded && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 8,
                background: 'linear-gradient(90deg, #e8e8e8 25%, #f4f4f4 50%, #e8e8e8 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.4s infinite',
              }}
            />
          )}
          <img
            src={imaginUrl(make, model, hex)}
            alt={`${make} ${model} in ${color}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgFailed(true)}
            style={{
              width: w,
              height: h,
              objectFit: 'contain',
              borderRadius: 8,
              opacity: imgLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        </>
      )}

      {/* Fallback SVG silhouette */}
      {!showPhoto && (
        <SilhouetteSvg fill={fill} stroke={stroke} width={w} height={h / 1.2} />
      )}
    </div>
  );
};

export default VehicleSilhouette;

