import React from 'react';
import { AngledArrow, WireframeCoil } from './SVGMotifs';
import { ImagePlaceholder } from './ImagePlaceholder';

interface CuratorSectionProps {
  artistName: string;
  onArtworkClick: (artworkId: string) => void;
  customImageMap: Record<string, string>;
}

export const CuratorSection: React.FC<CuratorSectionProps> = ({
  artistName,
  onArtworkClick,
  customImageMap,
}) => {
  return (
    <section id="curator" className="py-16 md:py-24 border-b border-[#E5DDCF] bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Statement from reference image */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="opacity-70">
                <AngledArrow />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#8C8070] font-mono">
                Declaración Curatorial
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A17] font-normal tracking-tight leading-tight">
              A word from the curator
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A443A] leading-relaxed font-light">
              <p>
                As a gallery, our mission is to create a captivating narrative through the deliberate
                juxtaposition of artworks. We believe that art is not merely an object for visual appreciation,
                but a living catalyst for interior dialogue.
              </p>

              <p>
                Each exhibition is meticulously curated to convey a certain theme or narrative that
                resonates with our audience. The goal is to evoke a wide spectrum of emotions and stimulate
                thought-provoking dialogues throughout each piece.
              </p>

              <p>
                Our artists are selected based on their ability to articulate emotion and perspective. We establish
                deep collaborative relations with them to understand their artistic voice and elevate their creative
                journey to audiences worldwide.
              </p>

              <p>
                The physical and virtual presence of this gallery space is curated to foster contemplation,
                curiosity, and aesthetic revelation for visitors, allowing every work to breathe with its own dignity.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5DDCF] flex items-center justify-between">
              <div>
                <span className="block font-serif text-xl font-medium text-[#1C1A17]">
                  {artistName === 'Gallery' ? 'Elena Rostova' : artistName}
                </span>
                <span className="text-xs text-[#8C8070] uppercase tracking-wider">
                  Directora Artística &amp; Fundadora
                </span>
              </div>
              <div className="font-serif italic text-sm text-[#9A7428]">
                &ldquo;El arte como puente de empatía.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: Portrait of the artist/curator */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Wireframe Coil in the corner as in the image */}
            <div className="absolute -top-8 -right-6 z-10 opacity-70">
              <WireframeCoil size={68} />
            </div>

            <div className="relative shadow-lg border border-[#DDD3C0] bg-[#FAF6EE] p-3">
              <ImagePlaceholder
                label="Imagen 11"
                subtext="Retrato del Artista / Curador"
                aspectRatioClass="aspect-[4/5]"
                onClick={() => onArtworkClick('art-1')}
                customImageSrc={customImageMap['curator-portrait']}
              />
              <div className="mt-3 flex justify-between items-center text-xs text-[#7A6F60]">
                <span className="font-serif italic">Fotografía editorial del taller</span>
                <span className="font-mono text-[10px] text-[#8C8070]">Luz natural · 35mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
