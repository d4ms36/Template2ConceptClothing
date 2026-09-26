import React from 'react';
import { GalleryLogo, WireframeCoil } from './SVGMotifs';

interface FooterProps {
  artistName: string;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ artistName, onNavigate }) => {
  return (
    <footer className="bg-[#F4EDE2] border-t border-[#E5DDCF] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E3DACB]">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <GalleryLogo size={42} />
              <span className="font-serif text-2xl font-medium tracking-tight text-[#1C1A17]">
                {artistName}
              </span>
            </div>
            <p className="text-xs text-[#6E6455] max-w-sm leading-relaxed">
              Espacio dedicado a la divulgación de arte contemporáneo, curaduría reflexiva y conexión directa entre creadores y amantes del arte.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8C8070] font-mono block mb-2">
              Secciones
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#4E473D]">
              <button
                onClick={() => onNavigate('hero')}
                className="text-left hover:text-[#1C1A17] transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => onNavigate('inspired')}
                className="text-left hover:text-[#1C1A17] transition-colors"
              >
                Inspiración
              </button>
              <button
                onClick={() => onNavigate('exhibitions')}
                className="text-left hover:text-[#1C1A17] transition-colors"
              >
                Exposiciones
              </button>
              <button
                onClick={() => onNavigate('curator')}
                className="text-left hover:text-[#1C1A17] transition-colors"
              >
                Sobre el Artista
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-left hover:text-[#1C1A17] transition-colors"
              >
                Catálogo de Obras
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-[#1C1A17] transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* Col 3: Decorative motif & Studio note */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <WireframeCoil size={48} className="opacity-40 mb-3" />
            <div className="text-[11px] text-[#8C8070] md:text-right">
              <div>Plantilla Demo Editorial</div>
              <div className="font-mono mt-0.5">Versión para Artista Independiente</div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8070] gap-4">
          <p>© {new Date().getFullYear()} {artistName}. Todos los derechos reservados.</p>
          <p className="text-[11px] font-light">
            Diseño editorial concebido para destacar el valor y la sensibilidad de tu arte.
          </p>
        </div>
      </div>
    </footer>
  );
};
