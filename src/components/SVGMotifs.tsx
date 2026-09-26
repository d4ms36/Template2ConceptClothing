import React from 'react';

/**
 * Concentric wireframe stacked rings with serif italic 'A' in center.
 * Faithful reproduction of the distinctive brand mark from the reference image.
 */
export const GalleryLogo: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 46,
}) => {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 100 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Gallery Logo"
    >
      {/* 4 tilted concentric elliptical wireframe rings */}
      <ellipse cx="50" cy="18" rx="42" ry="12" stroke="#1C1A17" strokeWidth="2" strokeDasharray="none" />
      <ellipse cx="50" cy="32" rx="42" ry="12" stroke="#1C1A17" strokeWidth="2" />
      <ellipse cx="50" cy="46" rx="42" ry="12" stroke="#1C1A17" strokeWidth="2" />
      <ellipse cx="50" cy="58" rx="40" ry="11" stroke="#1C1A17" strokeWidth="2" />

      {/* Italic Serif 'A' positioned through the concentric wireframes */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="44"
        fontStyle="italic"
        fontWeight="600"
        fill="#1C1A17"
      >
        A
      </text>
    </svg>
  );
};

/**
 * Coiled wireframe spring / spiral motif seen in the corners of the reference image.
 */
export const WireframeCoil: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="20" rx="35" ry="10" stroke="#1C1A17" strokeWidth="1.2" opacity="0.45" />
      <ellipse cx="40" cy="34" rx="35" ry="10" stroke="#1C1A17" strokeWidth="1.2" opacity="0.45" />
      <ellipse cx="40" cy="48" rx="35" ry="10" stroke="#1C1A17" strokeWidth="1.2" opacity="0.45" />
      <ellipse cx="40" cy="62" rx="34" ry="9" stroke="#1C1A17" strokeWidth="1.2" opacity="0.45" />
    </svg>
  );
};

/**
 * Architectural angled arrow seen in the top-left and editorial headers of the reference image.
 */
export const AngledArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      width="72"
      height="24"
      viewBox="0 0 72 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Horizontal stroke with 45-degree angle rise */}
      <path d="M2 18H54L68 6" stroke="#1C1A17" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 6H68V14" stroke="#1C1A17" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
