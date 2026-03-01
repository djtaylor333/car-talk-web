import React from 'react';

interface VehicleSilhouetteProps {
  color: string;
  size?: number;
  className?: string;
}

const COLOR_MAP: Record<string, string> = {
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

const VehicleSilhouette: React.FC<VehicleSilhouetteProps> = ({ color, size = 80, className }) => {
  const fill = COLOR_MAP[color] ?? color;
  const stroke = color === 'White' || color === 'Beige' ? '#888' : '#222';
  const w = size;
  const h = size * 0.5;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 80 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`${color} vehicle`}
      role="img"
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
};

export default VehicleSilhouette;
