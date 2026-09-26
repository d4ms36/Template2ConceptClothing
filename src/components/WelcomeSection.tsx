import React from 'react';
import { AngledArrow } from './SVGMotifs';

interface WelcomeSectionProps {
  onPlanVisitClick: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onPlanVisitClick }) => {
  return (
    <section className="py-16 md:py-24 border-b border-[#E5DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: "Welcome!" Title, statement and PLAN YOUR VISIT link */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A17] font-normal tracking-tight mb-6">
              Welcome!
            </h2>

            <p className="text-base sm:text-lg text-[#554E43] leading-relaxed max-w-xl mb-8 font-light">
              Feel free to immerse yourself in the diverse perspectives presented by our splendid artists
              from near and far. Whether you&apos;re a seasoned art enthusiast or simply curious,
              there&apos;s something here to inspire and captivate you.
            </p>

            <div>
              <button
                onClick={onPlanVisitClick}
                className="text-xs uppercase tracking-widest font-semibold text-[#1C1A17] border-b border-[#1C1A17] pb-1 hover:text-[#9A7428] hover:border-[#9A7428] transition-colors cursor-pointer"
              >
                PLAN YOUR VISIT
              </button>
            </div>
          </div>

          {/* Right Column: Opening Hours & Studio visits (reproduced from image) */}
          <div className="lg:col-span-5 bg-[#F6F0E4] border border-[#E3DACB] p-8 relative">
            <div className="absolute top-4 right-4 opacity-50">
              <AngledArrow />
            </div>

            <h3 className="font-serif text-2xl font-medium text-[#1C1A17] mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4 text-sm text-[#4E473D]">
              <div className="flex justify-between py-2 border-b border-[#E6DDD0]">
                <span>Lunes a Viernes</span>
                <span className="font-mono text-[#1C1A17]">10:00 — 19:00</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E6DDD0]">
                <span>Sábados y Festivos</span>
                <span className="font-mono text-[#1C1A17]">11:00 — 18:00</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Domingos</span>
                <span className="text-[#8C8070] italic">Citas privadas</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6DDD0] text-xs text-[#7A6F60]">
              <span className="font-semibold text-[#1C1A17]">Visitas al taller:</span> Si deseas conocer el proceso creativo en persona, reserva una cita a través del formulario de contacto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
