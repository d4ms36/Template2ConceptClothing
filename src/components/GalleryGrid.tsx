import React, { useState } from 'react';
import { Artwork } from '../data/artworks';
import { ImagePlaceholder } from './ImagePlaceholder';

interface GalleryGridProps {
  artworks: Artwork[];
  onArtworkClick: (artworkId: string) => void;
  customImageMap: Record<string, string>;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  artworks,
  onArtworkClick,
  customImageMap,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Pintura', 'Dibujo', 'Escultura', 'Fotografía'];

  const filteredArtworks =
    selectedCategory === 'Todas'
      ? artworks
      : artworks.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 border-b border-[#E5DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E5DDCF] gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8C8070] font-mono block mb-1">
              Catálogo de Obras
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] font-normal">
              Colección Seleccionada
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0E8DC] border border-[#E0D7C9]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1C1A17] text-[#FAF6EE] shadow-xs'
                    : 'text-[#5C5346] hover:text-[#1C1A17]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="flex flex-col bg-[#FAF6EE] border border-[#E5DDCF] p-4 transition-all duration-300 hover:border-[#C4B399] hover:shadow-sm"
            >
              <div className="mb-4">
                <ImagePlaceholder
                  label={art.imageLabel}
                  subtext={`${art.technique} · ${art.dimensions}`}
                  aspectRatioClass="aspect-[4/5]"
                  onClick={() => onArtworkClick(art.id)}
                  customImageSrc={customImageMap[art.id]}
                />
              </div>

              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-serif text-xl font-medium text-[#1C1A17] truncate">
                  {art.title}
                </h3>
                <span className="text-xs font-mono text-[#8C8070]">
                  {art.year}
                </span>
              </div>

              <p className="text-xs text-[#6B6153] mb-3 truncate">
                {art.technique}
              </p>

              <div className="mt-auto pt-3 border-t border-[#EFE7D8] flex items-center justify-between text-xs">
                <span className="text-[#8C8070] font-mono text-[11px]">{art.dimensions}</span>
                <span className={`font-medium text-[11px] ${art.available ? 'text-[#3E7B44]' : 'text-[#8C8070]'}`}>
                  {art.available ? 'Obra disponible' : 'Colección privada'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Helper Callout */}
        <div className="mt-12 p-6 bg-[#F4EDE2] border border-[#E2D8C7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#5D554A] leading-relaxed">
            <span className="font-semibold text-[#1C1A17]">Para el artista: </span>
            Cada tarjeta muestra claramente dónde se colocará cada pieza de tu obra (Imagen 1, Imagen 2...).
            Puedes hacer clic en cualquier tarjeta para abrir los detalles técnicos y simular la carga de tus fotos en esta demo.
          </div>
        </div>
      </div>
    </section>
  );
};
