import React, { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ExhibitionsSectionProps {
  onArtworkClick: (artworkId: string) => void;
  customImageMap: Record<string, string>;
}

export const ExhibitionsSection: React.FC<ExhibitionsSectionProps> = ({
  onArtworkClick,
  customImageMap,
}) => {
  const [activeArtistIndex, setActiveArtistIndex] = useState(0);

  const artists = [
    {
      name: 'Ophelia Stone',
      exhibition: 'Echoes in Solitude',
      dates: '20 May — 15 Jul',
      curation: 'Sala Principal · 18 Obras',
      artIds: ['art-7', 'art-8', 'art-9'],
    },
    {
      name: 'Julius Syne',
      exhibition: 'Architectures of Silence',
      dates: '01 Aug — 30 Sep',
      curation: 'Espacio Este · 12 Obras',
      artIds: ['art-1', 'art-2'],
    },
    {
      name: 'Diana Clark',
      exhibition: 'Geometries of Dawn',
      dates: '10 Oct — 28 Nov',
      curation: 'Galería Alta · 15 Obras',
      artIds: ['art-4', 'art-5'],
    },
    {
      name: 'Jonathan Grant',
      exhibition: 'Terra Incognita',
      dates: '05 Dec — 20 Ene',
      curation: 'Pabellón Sur · 20 Obras',
      artIds: ['art-3', 'art-6'],
    },
  ];

  const currentArtist = artists[activeArtistIndex];

  return (
    <section id="exhibitions" className="py-16 md:py-24 border-b border-[#E5DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#E5DDCF]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8C8070] mb-2 font-medium">
              Calendario de Galería · Temporada 2026
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1A17] font-normal tracking-tight">
              Current Exhibitions
            </h2>
          </div>
          <p className="text-xs text-[#7A6F60] font-sans mt-3 md:mt-0 max-w-xs">
            Selección curatorial de artistas y series individuales abiertas al público.
          </p>
        </div>

        {/* Mosaic Grid of Artwork Slots (as in top-right of image) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="space-y-2">
            <ImagePlaceholder
              label="Imagen 7"
              subtext="Ritmo Vertical"
              aspectRatioClass="aspect-[3/4]"
              onClick={() => onArtworkClick('art-7')}
              customImageSrc={customImageMap['art-7']}
            />
            <span className="text-[10px] text-[#8C8070] uppercase font-mono block text-center">
              Fotografía / Textura
            </span>
          </div>

          <div className="space-y-2">
            <ImagePlaceholder
              label="Imagen 8"
              subtext="Rostro en Tinta"
              aspectRatioClass="aspect-[3/4]"
              onClick={() => onArtworkClick('art-8')}
              customImageSrc={customImageMap['art-8']}
            />
            <span className="text-[10px] text-[#8C8070] uppercase font-mono block text-center">
              Grabado / Retrato
            </span>
          </div>

          <div className="space-y-2">
            <ImagePlaceholder
              label="Imagen 9"
              subtext="Equilibrio Silente"
              aspectRatioClass="aspect-[3/4]"
              onClick={() => onArtworkClick('art-9')}
              customImageSrc={customImageMap['art-9']}
            />
            <span className="text-[10px] text-[#8C8070] uppercase font-mono block text-center">
              Escultura orgánica
            </span>
          </div>

          <div className="space-y-2">
            <ImagePlaceholder
              label="Imagen 10"
              subtext="Cámara Cálida"
              aspectRatioClass="aspect-[3/4]"
              onClick={() => onArtworkClick('art-10')}
              customImageSrc={customImageMap['art-10']}
            />
            <span className="text-[10px] text-[#8C8070] uppercase font-mono block text-center">
              Estudio cromático
            </span>
          </div>
        </div>

        {/* Featured Artist Typography Roster & Spotlight Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F2E6] border border-[#E3DACB] p-8 md:p-12">
          {/* Left Column: Big Artistic Names (matching image typography) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#9A7428] font-medium mb-3">
              Artistas en Residencia
            </div>
            {artists.map((artist, idx) => (
              <button
                key={artist.name}
                onClick={() => setActiveArtistIndex(idx)}
                className={`block w-full text-left font-serif text-3xl sm:text-4xl md:text-5xl transition-all duration-300 cursor-pointer ${
                  activeArtistIndex === idx
                    ? 'text-[#C59740] font-medium translate-x-2'
                    : 'text-[#8C8070] hover:text-[#1C1A17] font-normal opacity-80'
                }`}
              >
                {artist.name}
              </button>
            ))}
          </div>

          {/* Right Column: Active Exhibition Information Card */}
          <div className="lg:col-span-6 bg-[#FAF6EE] border border-[#DDD3C2] p-8 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1A17] text-[#FAF6EE] text-[11px] uppercase tracking-widest font-medium mb-4">
              <span>Spotlight</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] mb-2">
              {currentArtist.exhibition}
            </h3>

            <p className="text-xs text-[#8C8070] uppercase tracking-widest font-mono mb-4">
              Por {currentArtist.name} · {currentArtist.dates}
            </p>

            <p className="text-sm text-[#5C5346] leading-relaxed mb-6 font-light">
              Una cuidada exploración de las tensiones entre la quietud formal y la vitalidad del trazo.
              {currentArtist.curation}. Obras seleccionadas en exhibición abierta.
            </p>

            <div className="pt-4 border-t border-[#EAE1D3] flex items-center justify-between text-xs">
              <span className="text-[#8C8070]">Fechas de sala:</span>
              <span className="font-medium text-[#1C1A17]">{currentArtist.dates}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
