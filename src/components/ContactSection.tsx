import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { AngledArrow } from './SVGMotifs';

interface ContactSectionProps {
  prefilledArtworkTitle?: string;
  artistName: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledArtworkTitle,
  artistName,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(
    prefilledArtworkTitle ? `Consulta sobre: ${prefilledArtworkTitle}` : 'Consulta general'
  );
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledArtworkTitle) {
      setSubject(`Consulta sobre: ${prefilledArtworkTitle}`);
      setIsSubmitted(false);
    }
  }, [prefilledArtworkTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate responsive submission feedback
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="opacity-70">
              <AngledArrow />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#8C8070] font-mono block">
              Contacto Directo
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A17] font-normal tracking-tight">
              Hablemos de Arte
            </h2>

            <p className="text-sm sm:text-base text-[#554E43] leading-relaxed font-light">
              Si deseas conocer más sobre una obra, solicitar información sobre colaboraciones o exposiciones,
              o agendar una visita privada al taller, completa el siguiente formulario.
            </p>

            <div className="pt-6 border-t border-[#E5DDCF] space-y-4 text-xs sm:text-sm text-[#4E473D]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59740] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#1C1A17]">Estudio &amp; Taller</div>
                  <div className="text-[#7A6F60]">Carrer de l&apos;Art Contemporani, 14 · Madrid / Barcelona</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C59740] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#1C1A17]">Correo Electrónico</div>
                  <div className="text-[#7A6F60]">hola@{artistName.toLowerCase().replace(/\s+/g, '')}gallery.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C59740] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#1C1A17]">Atención a Coleccionistas</div>
                  <div className="text-[#7A6F60]">Lunes a Viernes · Respuesta en 24 horas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#F7F2E6] border border-[#E3DACB] p-6 sm:p-10 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#E3DACB] text-[#2F6B38] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-2xl text-[#1C1A17]">
                  ¡Consulta enviada con éxito!
                </h3>

                <p className="text-sm text-[#5D554A] max-w-md mx-auto leading-relaxed">
                  Gracias por tu mensaje. En una web real, el artista o la galería recibirán esta notificación inmediatamente en su correo electrónico.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                      setName('');
                      setEmail('');
                    }}
                    className="px-6 py-2 border border-[#1C1A17] text-xs uppercase tracking-widest text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#FAF6EE] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#4A443A] uppercase tracking-wider mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full bg-[#FAF6EE] border border-[#DDD3C0] px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#C59740] focus:ring-1 focus:ring-[#C59740] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A443A] uppercase tracking-wider mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full bg-[#FAF6EE] border border-[#DDD3C0] px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#C59740] focus:ring-1 focus:ring-[#C59740] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A443A] uppercase tracking-wider mb-1.5">
                    Asunto u Obra de Interés
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ej. Consulta sobre Imagen 1 / Visita privada"
                    className="w-full bg-[#FAF6EE] border border-[#DDD3C0] px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#C59740] focus:ring-1 focus:ring-[#C59740] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4A443A] uppercase tracking-wider mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe tu consulta sobre la obra, medidas especiales, o propuesta de colaboración..."
                    className="w-full bg-[#FAF6EE] border border-[#DDD3C0] px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#C59740] focus:ring-1 focus:ring-[#C59740] transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 bg-[#1C1A17] text-[#FAF6EE] text-xs uppercase tracking-widest font-medium hover:bg-[#353029] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? 'Enviando...' : 'Enviar consulta'}</span>
                  </button>

                  <span className="text-[11px] text-[#8C8070] text-center sm:text-right">
                    Se responderá directamente a tu dirección de correo
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
