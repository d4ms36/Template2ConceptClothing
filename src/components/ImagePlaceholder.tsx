import React from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string; // e.g. "Imagen 1"
  subtext?: string; // e.g. "Óleo sobre lienzo · 120 × 90 cm"
  aspectRatioClass?: string; // e.g. "aspect-[4/5]", "aspect-square"
  className?: string;
  onClick?: () => void;
  customImageSrc?: string | null;
  accentColor?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  subtext = 'Espacio para obra',
  aspectRatioClass = 'aspect-[4/5]',
  className = '',
  onClick,
  customImageSrc,
}) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative overflow-hidden bg-[#F3EDE2] border border-[#DDD4C5] transition-all duration-300 ${aspectRatioClass} ${
        onClick ? 'cursor-pointer hover:border-[#BFA882] hover:shadow-md' : ''
      } ${className}`}
      aria-label={`Espacio reservado para ${label}`}
    >
      {customImageSrc ? (
        // Render custom uploaded preview if artist tested their own image
        <div className="relative w-full h-full">
          <img
            src={customImageSrc}
            alt={label}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-2 left-2 bg-[#1C1A17]/80 text-[#FAF6EE] text-[11px] font-medium px-2 py-0.5 backdrop-blur-xs tracking-wider uppercase">
            {label}
          </div>
        </div>
      ) : (
        // Editorial museum mounting board placeholder
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-b from-[#F7F2E8] to-[#EFE7D8]">
          {/* Subtle archival framing grid / corner marks */}
          <div className="absolute inset-2 border border-[#E3DACB] pointer-events-none" />
          <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-[#C8B89E] pointer-events-none" />
          <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-[#C8B89E] pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-[#C8B89E] pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-[#C8B89E] pointer-events-none" />

          {/* Center icon and prominent label */}
          <div className="z-10 flex flex-col items-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="w-9 h-9 rounded-full bg-[#EADEC9] border border-[#DDD0BC] flex items-center justify-center text-[#7A6E5D] group-hover:text-[#1C1A17] group-hover:bg-[#DFD2BC] transition-colors">
              <ImageIcon className="w-4 h-4 stroke-[1.5]" />
            </div>

            <div className="font-serif text-lg md:text-xl font-semibold tracking-wide text-[#1C1A17]">
              {label}
            </div>

            <p className="text-[11px] tracking-widest uppercase text-[#8C8070] font-medium max-w-[85%] truncate">
              {subtext}
            </p>
          </div>

          {/* Hover interactive overlay */}
          {onClick && (
            <div className="absolute inset-0 bg-[#1C1A17]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
              <span className="text-[12px] bg-[#FAF6EE] text-[#1C1A17] px-3 py-1 border border-[#DDD4C5] shadow-xs font-serif italic flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Explorar obra
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
