import React from 'react';
import { X, Upload, RotateCcw, Check, Sparkles, Send } from 'lucide-react';
import { Artwork } from '../data/artworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onSelectForInquiry: (artworkTitle: string) => void;
  customImageMap: Record<string, string>;
  onUploadImage: (artworkId: string, dataUrl: string) => void;
  onResetImage: (artworkId: string) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  onClose,
  onSelectForInquiry,
  customImageMap,
  onUploadImage,
  onResetImage,
}) => {
  if (!artwork) return null;

  const customSrc = customImageMap[artwork.id];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUploadImage(artwork.id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1A17]/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF6EE] border border-[#DDD4C5] shadow-2xl p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#797166] hover:text-[#1C1A17] transition-colors rounded-sm hover:bg-[#F0E8DA]"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Artwork / Image slot */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square w-full bg-[#EFE8DC] border border-[#DDD4C5] flex flex-col items-center justify-center overflow-hidden">
              {customSrc ? (
                <img
                  src={customSrc}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E2D5BE] flex items-center justify-center text-[#7A6E5D] mb-3">
                    <Sparkles className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="font-serif text-2xl font-semibold text-[#1C1A17]">
                    {artwork.imageLabel}
                  </span>
                  <span className="text-xs text-[#8C8070] uppercase tracking-wider mt-1">
                    Espacio reservado para tu obra
                  </span>
                  <span className="text-xs text-[#9B8F80] mt-2 font-serif italic">
                    Proporción sugerida: {artwork.dimensions}
                  </span>
                </div>
              )}
            </div>

            {/* Demo test: upload preview */}
            <div className="bg-[#F3EDE2] border border-[#E0D7C9] p-3 text-xs text-[#5D554A]">
              <div className="font-medium text-[#1C1A17] mb-1 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                <span>Modo Demo: Prueba con tu propia foto</span>
              </div>
              <p className="text-[11px] text-[#797166] mb-2 leading-relaxed">
                Sube una imagen de tu archivo para visualizar cómo lucirá tu obra en este espacio de la plantilla.
              </p>
              <div className="flex items-center gap-2">
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1A17] text-[#FAF6EE] text-[11px] font-medium hover:bg-[#332F2A] transition-colors">
                  <Upload className="w-3 h-3" />
                  <span>Cargar imagen local</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
                {customSrc && (
                  <button
                    onClick={() => onResetImage(artwork.id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-[#CFC5B4] text-[11px] text-[#797166] hover:text-[#1C1A17] hover:bg-[#EAE1D2] transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Restablecer</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Artwork Metadata & Inquiries */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#9A7428] font-medium mb-1">
                {artwork.category} · {artwork.year}
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#1C1A17] mb-2">
                {artwork.title}
              </h3>

              <div className="text-xs text-[#7A6E5D] font-mono mb-4">
                Slot de maqueta: <strong className="text-[#1C1A17]">{artwork.imageLabel}</strong>
              </div>

              <div className="space-y-2 py-4 border-y border-[#E5DDCF] text-sm text-[#4A443B]">
                <div className="flex justify-between">
                  <span className="text-[#8C8070]">Técnica:</span>
                  <span className="font-medium text-right text-[#1C1A17]">{artwork.technique}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8070]">Dimensiones:</span>
                  <span className="font-mono text-[#1C1A17]">{artwork.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8070]">Estado:</span>
                  <span className={`font-medium flex items-center gap-1 ${artwork.available ? 'text-[#3E7B44]' : 'text-[#8C8070]'}`}>
                    {artwork.available && <Check className="w-3.5 h-3.5" />}
                    {artwork.available ? 'En sala / Disponible para exposición' : 'Colección privada'}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs leading-relaxed text-[#6B6256] italic font-serif text-base">
                  &ldquo;{artwork.description}&rdquo;
                </p>
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="mt-6 pt-4 border-t border-[#E5DDCF]">
              <button
                onClick={() => {
                  onSelectForInquiry(artwork.title);
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-[#1C1A17] text-[#FAF6EE] text-xs uppercase tracking-widest font-medium hover:bg-[#38332C] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Consultar por esta obra</span>
              </button>
              <p className="text-[10px] text-center text-[#8C8070] mt-2">
                Dirige tu consulta directamente al formulario de contacto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
