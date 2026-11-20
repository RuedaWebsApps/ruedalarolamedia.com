import React, { useState } from 'react';
import { Language, ContactFormData, ContactSubmissionStatus } from '../types';
import { clientLogos, siteMetadata } from '../content/siteContent';
import { submitContactForm } from '../adapters/contactAdapter';
import { SMS_CONSENT, legalPath } from '../legal/legalDocs';
import { Sparkles, Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

interface ClientFormSectionProps {
  lang: Language;
}

export const ClientFormSection: React.FC<ClientFormSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const sectionId = isEs ? 'formulario' : 'contact';

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'wrap',
    message: '',
    website_hp: '', // Honeypot
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
    <section id={sectionId} className="py-20 lg:py-28 bg-[#141c27] relative scroll-mt-24">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Carousel / Trust Bar */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-8">
            {isEs ? 'EMPRESAS Y MARCAS QUE CONFÍAN EN NOSOTROS' : 'TRUSTED BY LEADING BUSINESSES & BRANDS'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-center">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="h-20 sm:h-24 p-4 rounded-2xl bg-black/30 border border-white/10 hover:border-purple-500/40 flex items-center justify-center transition-all group"
              >
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  width={300}
                  height={150}
                  className="max-h-12 w-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Appointment & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#ec186a]" />
              <span>{isEs ? 'Hablemos Hoy' : "Let's Connect"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {isEs ? (
                <>
                  ¿Listo para hacer <span className="text-gradient-brand">crecer tu marca</span>?
                </>
              ) : (
                <>
                  Ready to take your <span className="text-gradient-brand">brand to the next level</span>?
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {isEs
                ? 'Agenda una cita con nuestro equipo en Austin, TX. Te asesoramos en el diseño de tu marca, rotulación vehicular comercial o desarrollo web con una propuesta a la medida de tu presupuesto.'
                : 'Schedule a consultation with our Austin creative team. We will guide you through brand identity, vehicle wraps, or high-performance web development with a solution tailored to your goals.'}
            </p>

            <div className="space-y-4 pt-4 w-full">
              <a
                href={`tel:${siteMetadata.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-[#ec186a] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {isEs ? 'Llámanos o envíanos un WhatsApp' : 'Direct Line & Support'}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300">
                    {siteMetadata.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteMetadata.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {isEs ? 'Correo Electrónico' : 'Email Us'}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 break-all">
                    {siteMetadata.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-yellow-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {isEs ? 'Ubicación' : 'Location'}
                  </p>
                  <p className="text-base font-bold text-white">
                    {siteMetadata.address.city}, {siteMetadata.address.state} &middot; {siteMetadata.address.area}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-[#0b0f17] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-white mb-2">
              {isEs ? 'Agendar Cita o Solicitar Cotización' : 'Schedule Consultation / Request Quote'}
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {isEs
                ? 'Completa el formulario y te responderemos en menos de 24 horas hábiles.'
                : 'Fill out this brief form and our team will get back to you within 24 business hours.'}
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">
                  {isEs ? '¡Mensaje Enviado con Éxito!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-sm text-emerald-200">{feedbackMessage}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
                >
                  {isEs ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Website</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {isEs ? 'Nombres *' : 'First Name *'}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder={isEs ? 'Tu nombre' : 'Your first name'}
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#141c27] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] focus:ring-1 focus:ring-[#6a35ff] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {isEs ? 'Apellidos' : 'Last Name'}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder={isEs ? 'Tu apellido' : 'Your last name'}
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#141c27] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] focus:ring-1 focus:ring-[#6a35ff] transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#141c27] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] focus:ring-1 focus:ring-[#6a35ff] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      {isEs ? 'Teléfono / Celular *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(512) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#141c27] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] focus:ring-1 focus:ring-[#6a35ff] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    {isEs ? 'Servicio de Interés' : 'Service of Interest'}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#141c27] border border-white/10 text-white focus:outline-none focus:border-[#6a35ff] focus:ring-1 focus:ring-[#6a35ff] transition-all text-sm"
                  >
                    <option value="wrap">{isEs ? 'Rotulación Vehicular / Wrap Comercial' : 'Vehicle Wrap / Commercial Fleet'}</option>
                    <option value="brand">{isEs ? 'Diseño de Marca / Logotipo' : 'Brand Identity / Logo Design'}</option>
                    <option value="web">{isEs ? 'Diseño & Desarrollo Web' : 'Web Design & Development'}</option>
                    <option value="merch">{isEs ? 'Merchandising & Uniformes' : 'Custom Apparel & Merch'}</option>
                    <option value="marketing">{isEs ? 'Marketing Digital & Anuncios' : 'Digital Marketing & Ads'}</option>
                    <option value="other">{isEs ? 'Otro Servicio' : 'Other Inquiries'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    {isEs ? 'Cuéntanos sobre tu proyecto *' : 'Tell us about your project *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder={
                      isEs
                        ? 'Describe tu empresa, tipo de vehículo o visión de diseño...'
                        : 'Describe your business, vehicle type, or branding goals...'
                    }
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#141c27] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6a35ff] focus:ring-1 focus:ring-[#6a35ff] transition-all text-sm resize-none"
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
                  className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#6a35ff] to-[#ec186a] hover:from-[#7c4dff] hover:to-[#f0327f] shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 transition-all flex items-center justify-center gap-2"
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
      </div>
    </section>
  );
};
