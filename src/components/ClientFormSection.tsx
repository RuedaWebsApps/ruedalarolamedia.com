import React, { useState } from 'react';
import { Language, ContactFormData, ContactSubmissionStatus } from '../types';
import { clientLogos } from '../content/siteContent';
import { submitContactForm } from '../adapters/contactAdapter';
import { SMS_CONSENT, legalPath } from '../legal/legalDocs';

interface ClientFormSectionProps {
  lang: Language;
}

export const ClientFormSection: React.FC<ClientFormSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';

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

  // Duplicate client sample cards for seamless infinite Flickity ticker loop
  const tickerItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section
      id="formulario"
      className="relative w-full bg-[#141c27] text-white py-[8vw] px-6 sm:px-10 lg:px-[90px] overflow-hidden scroll-mt-[90px] lg:scroll-mt-[136px]"
    >
      <div id="contact" className="sr-only" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* 1/12 Left Offset on Desktop */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Left Column (width="1/2" -> 6 cols): Heading + Paragraph + Continuous Flickity Ticker Carousel */}
        <div className="lg:col-span-6 lg:pr-8">
          <h2 className="font-gloock text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.18] text-white font-normal mb-6">
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

          <p className="font-dm text-[15px] sm:text-[16px] leading-[28px] text-white/90 font-normal mb-10 max-w-[540px]">
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

          {/* Continuous Flickity Ticker Carousel (5 Client Sample Cards: ONUT, UNIEMPRESAS, ANCOVI, JERONIMOS, INFRARROJO) */}
          <div className="relative w-full overflow-hidden pt-2">
            <div className="animate-flickity-ticker flex items-center gap-[10px]">
              {tickerItems.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="w-[155px] sm:w-[175px] shrink-0 overflow-hidden"
                >
                  <img
                    src={logo.image}
                    alt={`${logo.name} Brand Sample`}
                    width={320}
                    height={180}
                    className="w-full h-auto object-cover block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (width="1/3" -> 4 cols): Centered Title + Fluent Form #1 */}
        <div className="lg:col-span-4 w-full max-w-[440px] mx-auto lg:mx-0">
          <h3 className="font-gloock text-[20px] sm:text-[22px] leading-[1.3] font-bold text-white text-center mb-7">
            {isEs ? 'Agenda una cita con nosotros' : 'Schedule an appointment with us'}
          </h3>

          {status === 'success' ? (
            <div className="p-6 rounded-lg bg-white/10 border border-white/25 text-center space-y-4">
              <p className="font-gloock text-xl text-white">
                {isEs ? '¡Gracias por tu mensaje!' : 'Thank you for your message!'}
              </p>
              <p className="font-dm text-sm text-white/85">{feedback}</p>
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
              {/* Honeypot anti-spam field */}
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
                <label htmlFor="ff_home_firstName" className="sr-only">
                  Nombres
                </label>
                <input
                  id="ff_home_firstName"
                  type="text"
                  name="firstName"
                  required
                  placeholder="Nombres"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-[4px] font-dm text-[15px] text-white placeholder-white/65 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="ff_home_email" className="sr-only">
                  Email
                </label>
                <input
                  id="ff_home_email"
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-[4px] font-dm text-[15px] text-white placeholder-white/65 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="ff_home_phone" className="sr-only">
                  Celular
                </label>
                <input
                  id="ff_home_phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Celular"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-[4px] font-dm text-[15px] text-white placeholder-white/65 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="ff_home_message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="ff_home_message"
                  name="message"
                  rows={3}
                  required
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-[4px] font-dm text-[15px] text-white placeholder-white/65 focus:outline-none focus:border-white transition-colors resize-y"
                />
              </div>

              {status === 'error' && (
                <p className="text-xs text-rose-300 text-center">{feedback}</p>
              )}

              {/* Discrete TCPA & US Privacy Disclosure */}
              <p className="text-[10px] leading-snug text-white/55 text-center px-1">
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

              {/* Exact Fluent Form #1 Centered White Button: 151x59px, bg #ffffff, color #6a35ff, hover bg #e2dddd color #ffffff */}
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
  );
};
