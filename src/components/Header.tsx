import React, { useState } from 'react';
import { GalleryLogo } from './SVGMotifs';
import { Edit3, Check, Menu, X } from 'lucide-react';

interface HeaderProps {
  artistName: string;
  onUpdateArtistName: (name: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  artistName,
  onUpdateArtistName,
  onNavigate,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(artistName);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdateArtistName(tempName.trim());
    }
    setIsEditingName(false);
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E5DDCF]">
      {/* Subtle Demo Assistant Banner for the artist */}
      <div className="bg-[#F0E8DA] border-b border-[#E3DACB] px-4 py-1.5 text-xs text-[#6E6455] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C59740]" />
          <span className="font-medium text-[#1C1A17]">Plantilla Demo de Galería de Arte</span>
          <span className="text-[#8C8070] hidden sm:inline">|</span>
          <span className="text-[#6E6455] hidden sm:inline">
            Espacios marcados como Imagen 1, Imagen 2... para montar tu portafolio
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isEditingName ? (
            <form onSubmit={handleSaveName} className="flex items-center gap-1.5">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Escribe tu nombre"
                className="bg-white border border-[#D0C5B3] px-2 py-0.5 text-xs text-[#1C1A17] focus:outline-none focus:ring-1 focus:ring-[#C59740]"
                autoFocus
              />
              <button
                type="submit"
                className="px-2 py-0.5 bg-[#1C1A17] text-white text-[11px] hover:bg-[#38332C]"
              >
                <Check className="w-3 h-3" />
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsEditingName(true)}
              className="text-[11px] underline hover:text-[#1C1A17] flex items-center gap-1 text-[#8C8070]"
              title="Haz clic para personalizar el nombre del artista en esta plantilla demo"
            >
              <Edit3 className="w-3 h-3" />
              <span>Personalizar nombre ({artistName})</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Navigation Bar conforming to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single Brand Lockup with concentric wireframe 'A' logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3.5 group text-left"
          aria-label="Ir al inicio"
        >
          <GalleryLogo size={48} className="group-hover:opacity-85 transition-opacity" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1A17]">
              {artistName === 'Gallery' ? 'Gallery' : `${artistName}`}
            </span>
            {artistName !== 'Gallery' && (
              <span className="text-[10px] tracking-widest uppercase text-[#8C8070] font-sans -mt-1">
                Contemporary Studio & Gallery
              </span>
            )}
          </div>
        </button>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A453D]">
          <button
            onClick={() => handleNavClick('hero')}
            className="hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('inspired')}
            className="hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            Inspiración
          </button>
          <button
            onClick={() => handleNavClick('exhibitions')}
            className="hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            Exposiciones
          </button>
          <button
            onClick={() => handleNavClick('curator')}
            className="hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            Sobre el Artista
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            Catálogo
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-[#1C1A17] transition-colors cursor-pointer"
          >
            Contacto
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 border border-[#1C1A17] text-xs uppercase tracking-widest font-medium text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF6EE] transition-all whitespace-nowrap cursor-pointer"
          >
            Consultar Obra
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1A17] hover:bg-[#F0E8DA] rounded-sm"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#E5DDCF] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('hero')}
            className="block w-full text-left py-2 text-base font-medium text-[#1C1A17] border-b border-[#EBE3D5]"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('inspired')}
            className="block w-full text-left py-2 text-base font-medium text-[#1C1A17] border-b border-[#EBE3D5]"
          >
            Inspiración
          </button>
          <button
            onClick={() => handleNavClick('exhibitions')}
            className="block w-full text-left py-2 text-base font-medium text-[#1C1A17] border-b border-[#EBE3D5]"
          >
            Exposiciones
          </button>
          <button
            onClick={() => handleNavClick('curator')}
            className="block w-full text-left py-2 text-base font-medium text-[#1C1A17] border-b border-[#EBE3D5]"
          >
            Sobre el Artista
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="block w-full text-left py-2 text-base font-medium text-[#1C1A17] border-b border-[#EBE3D5]"
          >
            Catálogo
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 text-base font-medium text-[#1C1A17]"
          >
            Contacto
          </button>
        </div>
      )}
    </header>
  );
};
