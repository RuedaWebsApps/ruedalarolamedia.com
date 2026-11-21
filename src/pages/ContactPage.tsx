import React, { useState } from 'react';
import { Language, ContactFormData, ContactSubmissionStatus } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { submitContactForm } from '../adapters/contactAdapter';
import { SMS_CONSENT, legalPath } from '../legal/legalDocs';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const currentPath = isEs ? '/contacto' : '/contact';

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'general',
    message: '',
    website_hp: '',
  });

  const [status, setStatus] = useState<ContactSubmissionStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');

    const res = await submitContactForm(formData, lang);
    if (res.ok) {
      setStatus('success');
      setFeedback(res.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'general',
        message: '',
        website_hp: '',
      });
    } else {
      setStatus('error');
      setFeedback(res.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Navbar lang={lang} currentPath={currentPath} />

      {/* Exact WPBakery Page 835 Row: Full-bleed diagonal gradient rgba(52,82,255,0.93) -> rgba(255,16,83,0.92) */}
      <main
        id="main"
        className="flex-grow flex items-center"
        style={{
          background:
            'linear-gradient(135deg, rgba(52, 82, 255, 0.95) 0%, rgba(138, 45, 185, 0.94) 48%, rgba(255, 16, 83, 0.93) 100%)',
        }}
      >
        <section className="w-full max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-[90px] py-20 lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (width="1/2" -> 6 cols, centered_text="true") */}
            <div className="lg:col-span-6 text-center flex flex-col items-center">
              {/* White Vinyl Logo (133x143) */}
              <a
                href={isEs ? '/es' : '/'}
                className="inline-block mb-6 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/images/wp/408_logo-en-blanco-e1745966879628.png"
                  alt="Rueda La Rola Media"
                  width={133}
                  height={143}
                  className="w-[115px] sm:w-[133px] h-auto mx-auto object-contain"
                />
              </a>

              {/* split_line_heading letter-reveal-bottom H1 "Contacto" (6vw, max 108px) */}
              <h1
                className="font-gloock text-white font-normal tracking-normal mb-5 overflow-hidden"
                style={{
                  fontSize: 'clamp(52px, 6vw, 108px)',
                  lineHeight: 1.0,
                }}
              >
                <span className="inline-block animate-rev-line-1">
                  Contacto
                </span>
              </h1>

              <h2 className="font-gloock text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.18] text-white font-normal mb-5 max-w-[560px]">
                {isEs ? (
                  <>
                    ¿Tienes algún proyecto en mente?
                    <br />
                    ¡cuéntanos tu idea!
                  </>
                ) : (
                  <>
                    Have a project in mind?
                    <br />
                    Tell us your idea!
                  </>
                )}
              </h2>

              <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-white/95 font-normal max-w-[520px]">
                {isEs ? (
                  <>
                    En Rueda la Rola creemos en las conexiones que nacen del movimiento.
                    <br />
                    Si esta idea te vibra, estás a un paso de rodar con nosotros. Escríbenos!
                  </>
                ) : (
                  <>
                    At Rueda la Rola we believe in connections born from movement.
                    <br />
                    If this idea resonates with you, you&apos;re one step away from rolling with us. Write to us!
                  </>
                )}
              </p>
            </div>

            {/* Middle Spacer Column (width="1/12" -> 1 col) */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Right Column (width="1/3" -> 4 cols): Centered H3 + Fluent Form #1 */}
            <div className="lg:col-span-4 w-full max-w-[440px] mx-auto lg:mx-0">
              <h3 className="font-gloock text-[20px] sm:text-[22px] leading-[1.3] font-bold text-white text-center mb-7">
                {isEs ? 'Agenda una cita con nosotros' : 'Schedule an appointment with us'}
              </h3>

              {status === 'success' ? (
                <div className="p-6 rounded-lg bg-white/15 border border-white/30 text-center space-y-4">
                  <p className="font-gloock text-xl text-white">
                    {isEs ? '¡Gracias por tu mensaje!' : 'Thank you for your message!'}
                  </p>
                  <p className="font-dm text-sm text-white/90">{feedback}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-white text-[#6a35ff] font-dm text-sm font-semibold rounded-[4px] hover:bg-[#e2dddd] hover:text-white transition-colors"
                  >
                    {isEs ? 'Enviar otro mensaje' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-[18px]">
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_hp}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="ff_contact_firstName" className="sr-only">
                      Nombres
                    </label>
                    <input
                      id="ff_contact_firstName"
                      type="text"
                      name="firstName"
                      required
                      placeholder="Nombres"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-[4px] font-dm text-[15px] text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="ff_contact_email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="ff_contact_email"
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-[4px] font-dm text-[15px] text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="ff_contact_phone" className="sr-only">
                      Celular
                    </label>
                    <input
                      id="ff_contact_phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="Celular"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-[4px] font-dm text-[15px] text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="ff_contact_message" className="sr-only">
                      Mensaje
                    </label>
                    <textarea
                      id="ff_contact_message"
                      name="message"
                      rows={3}
                      required
                      placeholder="Mensaje"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/15 border border-white/30 rounded-[4px] font-dm text-[15px] text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors resize-y"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-white bg-black/30 p-2 rounded text-center">
                      {feedback}
                    </p>
                  )}

                  {/* Discrete TCPA & US Privacy Disclosure */}
                  <p className="text-[10px] leading-snug text-white/75 text-center px-1">
                    {SMS_CONSENT[lang].before}
                    <a href={legalPath('privacy', lang)} className="underline hover:text-white">
                      {SMS_CONSENT[lang].privacy}
                    </a>
                    {SMS_CONSENT[lang].and}
                    <a href={legalPath('terms', lang)} className="underline hover:text-white">
                      {SMS_CONSENT[lang].terms}
                    </a>
                    {SMS_CONSENT[lang].after}
                  </p>

                  {/* Exact Fluent Form #1 Centered White Button */}
                  <div className="text-center pt-1">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center min-w-[151px] h-[54px] px-7 bg-[#ffffff] text-[#6a35ff] border border-white rounded-[4px] font-dm text-[16px] font-medium hover:bg-[#e2dddd] hover:text-white transition-colors duration-200 cursor-pointer disabled:opacity-60"
                    >
                      {status === 'submitting'
                        ? isEs
                          ? 'Enviando...'
                          : 'Sending...'
                        : 'Agendar cita'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};
