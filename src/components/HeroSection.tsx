import React from 'react';
import { AngledArrow, WireframeCoil } from './SVGMotifs';
import { ImagePlaceholder } from './ImagePlaceholder';

interface HeroSectionProps {
  onExploreClick: () => void;
  onArtworkClick: (artworkId: string) => void;
  customImageMap: Record<string, string>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onArtworkClick,
  customImageMap,
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#E5DDCF]">
      {/* Decorative background vectors from the reference image */}
      <div className="absolute top-6 left-6 hidden lg:block opacity-60">
        <AngledArrow />
      </div>
      <div className="absolute top-6 right-8 hidden lg:block opacity-40">
        <WireframeCoil size={72} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* COMPOSITION 1: "A Visual Compass in Time" Asymmetrical Showcase */}
        <div className="relative mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left float artwork */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="w-full max-w-[280px] mx-auto lg:mx-0 shadow-sm">
                <ImagePlaceholder
                  label="Imagen 3"
                  subtext="Estudio de Dibujo y Tinta"
                  aspectRatioClass="aspect-[3/4]"
                  onClick={() => onArtworkClick('art-3')}
                  customImageSrc={customImageMap['art-3']}
                />
              </div>
              <p className="text-[11px] font-serif italic text-[#797166] text-center lg:text-left">
                Fig. 01 — Boceto gestual y estudio de espacio
              </p>
            </div>

            {/* Center: Title & Ochre Pill Backdrop */}
            <div className="lg:col-span-6 relative flex flex-col items-center text-center py-8">
              {/* Distinctive warm ochre pill element from the image */}
              <div
                className="absolute w-28 h-56 -top-4 left-1/4 -translate-x-1/2 bg-[#E3B24F]/75 rounded-full -z-10 blur-[0.5px]"
                aria-hidden="true"
              />

              <div className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-widest text-[#8C8070]">
                <span>Exhibición Principal</span>
                <span>·</span>
                <span>Temporada Actual</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A17] font-normal leading-[1.15] text-balance max-w-xl">
                A Visual <br />
                <span className="italic font-light">Compass</span> in Time
              </h1>

              {/* Artwork floating below title (Monochrome ink wash slot) */}
              <div className="mt-8 w-48 sm:w-56 shadow-sm">
                <ImagePlaceholder
                  label="Imagen 6"
                  subtext="Gesto y Materia"
                  aspectRatioClass="aspect-[4/3]"
                  onClick={() => onArtworkClick('art-6')}
                  customImageSrc={customImageMap['art-6']}
                />
              </div>

              {/* Exact TAKE A LOOK button from the image */}
              <div className="mt-8">
                <button
                  onClick={onExploreClick}
                  className="group relative inline-flex items-center justify-center px-8 py-2.5 text-xs font-medium tracking-widest uppercase text-[#1C1A17] border border-[#C5A358] bg-[#FAF6EE]/80 hover:bg-[#F2E5C9] transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span className="relative z-10">TAKE A LOOK</span>
                  {/* Subtle corner architectural notches matching the design */}
                  <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#A68337]" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#A68337]" />
                </button>
              </div>
            </div>

            {/* Right float artworks (Landscape & warm abstract) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="w-full max-w-[260px] mx-auto lg:ml-auto shadow-sm">
                <ImagePlaceholder
                  label="Imagen 4"
                  subtext="Horizonte Líquido"
                  aspectRatioClass="aspect-[16/10]"
                  onClick={() => onArtworkClick('art-4')}
                  customImageSrc={customImageMap['art-4']}
                />
              </div>

              <div className="w-full max-w-[260px] mx-auto lg:ml-auto shadow-sm">
                <ImagePlaceholder
                  label="Imagen 5"
                  subtext="Frecuencia Ocre"
                  aspectRatioClass="aspect-square"
                  onClick={() => onArtworkClick('art-5')}
                  customImageSrc={customImageMap['art-5']}
                />
              </div>
            </div>
          </div>
        </div>

        {/* COMPOSITION 2: "Get inspired!" Editorial Block (from top-left of reference image) */}
        <div id="inspired" className="pt-12 border-t border-[#E5DDCF]/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Dual visual slots "Imagen 1" and "Imagen 2" */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <ImagePlaceholder
                  label="Imagen 1"
                  subtext="Óleo sobre lino"
                  aspectRatioClass="aspect-[3/4]"
                  onClick={() => onArtworkClick('art-1')}
                  customImageSrc={customImageMap['art-1']}
                />
                <span className="block text-[10px] text-[#8C8070] text-center font-mono">
                  Obra Destacada 01
                </span>
              </div>
              <div className="space-y-2 pt-6">
                <ImagePlaceholder
                  label="Imagen 2"
                  subtext="Técnica mixta"
                  aspectRatioClass="aspect-square"
                  onClick={() => onArtworkClick('art-2')}
                  customImageSrc={customImageMap['art-2']}
                />
                <span className="block text-[10px] text-[#8C8070] text-center font-mono">
                  Obra Destacada 02
                </span>
              </div>
            </div>

            {/* Right: "Get inspired!" Text and Button */}
            <div className="lg:col-span-7 lg:pl-8">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1A17] tracking-tight mb-6">
                Get inspired!
              </h2>

              <p className="text-base sm:text-lg text-[#554E43] leading-relaxed max-w-2xl mb-8 font-light">
                Now&apos;s the time to immerse yourself in the diverse perspectives that make up humanity,
                splendid artists from near and far. Whether you&apos;re a seasoned art enthusiast or curious
                to simply explore, there&apos;s something here to inspire and captivate you.
              </p>

              <div>
                <button
                  onClick={onExploreClick}
                  className="group relative inline-flex items-center justify-center px-8 py-2.5 text-xs font-medium tracking-widest uppercase text-[#1C1A17] border border-[#C5A358] bg-[#FAF6EE] hover:bg-[#F2E5C9] transition-all duration-300 shadow-xs cursor-pointer"
                >
                  <span className="relative z-10">TAKE A LOOK</span>
                  <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#A68337]" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#A68337]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
