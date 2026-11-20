import React, { useState } from 'react';
import { Language, ContactFormData, ContactSubmissionStatus } from '../types';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { siteMetadata } from '../content/siteContent';
import { submitContactForm } from '../adapters/contactAdapter';
import { SMS_CONSENT, legalPath } from '../legal/legalDocs';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

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
    service: 'wrap',
    message: '',
    website_hp: '',
  });

  const [status, setStatus] = useState<ContactSubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    const res = await submitContactForm(formData, lang);
    if (res.ok) {
      setStatus('success');
      setFeedbackMessage(res.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'wrap',
        message: '',
        website_hp: '',
      });
    } else {
      setStatus('error');
      setFeedbackMessage(res.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-white">
      <Navbar lang={lang} currentPath={currentPath} />

      <main id="main" className="flex-grow">
        {/* Full-bleed Header Banner recreating original gradient overlay #3452ff -> #ff1053 */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#3452ff] via-[#6a35ff] to-[#ff1053] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Turntable Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
              <img
                src="/images/logo.webp"
                alt="Rueda La Rola Media"
                width={96}
                height={96}
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {isEs ? 'Hablemos de Tu Próximo Proyecto' : "Let's Build Something Exceptional"}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
              {isEs
                ? 'Agencia de branding, rotulación de vehículos y desarrollo web en Austin, TX. Diseñamos soluciones creativas para hacer despegar tu negocio.'
                : 'Austin creative agency specializing in branding, commercial vehicle wraps, and high-performance web development.'}
            </p>
          </div>
        </section>

        {/* Contact Form & Information Details */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ec186a]">
                  {isEs ? 'Contacto Directo' : 'Direct Line'}
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-1">
                  {isEs ? 'Estamos Listos Para Ayudarte' : 'We Are Ready to Assist You'}
                </h2>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {isEs
                    ? '¿Tienes preguntas sobre tiempos de entrega, materiales para wraps o presupuesto para tu nueva marca? Llámanos o agenda tu cita directamente.'
                    : 'Questions regarding turnaround times, vinyl materials, or pricing for your new brand identity? Call us directly or submit your project details.'}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${siteMetadata.phoneRaw}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#141c27] hover:bg-[#1a2433] border border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-[#ec186a] group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {isEs ? 'Teléfono Directo' : 'Phone Number'}
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-purple-300">
                      {siteMetadata.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#141c27] hover:bg-[#1a2433] border border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {isEs ? 'Correo Electrónico' : 'Email Address'}
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-purple-300 break-all">
                      {siteMetadata.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#141c27] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-yellow-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {isEs ? 'Área de Cobertura' : 'Service Area'}
                    </p>
                    <p className="text-base font-bold text-white">
                      Austin, Round Rock, Cedar Park, Buda, Kyle, San Marcos & Central Texas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#141c27] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-emerald-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {isEs ? 'Horario de Atención' : 'Business Hours'}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {isEs ? 'Lunes a Viernes: 8:00 AM – 6:00 PM' : 'Monday – Friday: 8:00 AM – 6:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Appointment Form */}
            <div className="lg:col-span-7 bg-[#141c27] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                {isEs ? 'Envíanos un Mensaje' : 'Send Us a Message'}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {isEs
                  ? 'Recibirás respuesta personalizada de nuestro equipo creativo.'
                  : 'You will receive a personalized response from our creative team.'}
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-4">
                  <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h4 className="text-2xl font-bold text-white">
                    {isEs ? '¡Mensaje Enviado con Éxito!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-sm text-emerald-200">{feedbackMessage}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
                  >
                    {isEs ? 'Enviar otro mensaje' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c_firstName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        {isEs ? 'Nombres *' : 'First Name *'}
                      </label>
                      <input
                        type="text"
                        id="c_firstName"
                        name="firstName"
                        required
                        placeholder={isEs ? 'Tu nombre' : 'First name'}
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="c_lastName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        {isEs ? 'Apellidos' : 'Last Name'}
                      </label>
                      <input
                        type="text"
                        id="c_lastName"
                        name="lastName"
                        placeholder={isEs ? 'Tu apellido' : 'Last name'}
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c_email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        id="c_email"
                        name="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="c_phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        {isEs ? 'Teléfono *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        id="c_phone"
                        name="phone"
                        required
                        placeholder="(512) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c_service" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {isEs ? 'Servicio Requerido' : 'Service Needed'}
                    </label>
                    <select
                      id="c_service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-white/10 text-white focus:outline-none focus:border-[#6a35ff] text-sm"
                    >
                      <option value="wrap">{isEs ? 'Rotulación Vehicular (Wrap)' : 'Commercial Vehicle Wrap'}</option>
                      <option value="brand">{isEs ? 'Diseño de Marca / Logotipo' : 'Brand Identity / Logo Design'}</option>
                      <option value="web">{isEs ? 'Diseño Web de Alto Rendimiento' : 'High-Performance Web Design'}</option>
                      <option value="merch">{isEs ? 'Merchandising & Ropa Corporativa' : 'Custom Apparel & Merch'}</option>
                      <option value="marketing">{isEs ? 'Marketing Digital & Anuncios' : 'Digital Marketing & Ads'}</option>
                      <option value="animation">{isEs ? 'Animación 2D y 3D' : '2D/3D Animation'}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c_message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {isEs ? 'Detalles de tu Solicitud *' : 'Project Details *'}
                    </label>
                    <textarea
                      id="c_message"
                      name="message"
                      rows={5}
                      required
                      placeholder={
                        isEs
                          ? 'Explícanos tu necesidad, vehículo o proyecto...'
                          : 'Describe your vehicle, brand goals, or timeline...'
                      }
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] text-sm resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{feedbackMessage}</span>
                    </div>
                  )}

                  <p className="text-[11px] leading-relaxed text-gray-400">
                    {SMS_CONSENT[lang].before}
                    <a href={legalPath('privacy', lang)} className="underline text-purple-300 hover:text-white">
                      {SMS_CONSENT[lang].privacy}
                    </a>
                    {SMS_CONSENT[lang].and}
                    <a href={legalPath('terms', lang)} className="underline text-purple-300 hover:text-white">
                      {SMS_CONSENT[lang].terms}
                    </a>
                    {SMS_CONSENT[lang].after}
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6a35ff] to-[#ec186a] hover:from-[#7c4dff] hover:to-[#f0327f] shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {status === 'submitting'
                        ? isEs
                          ? 'Enviando...'
                          : 'Sending...'
                        : isEs
                        ? 'Agendar cita'
                        : 'Schedule Appointment'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};
