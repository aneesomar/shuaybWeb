import { Phone, Mail, Clock, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = form;
    const text = `Hi! I'd like to request an appointment.\n\nName: ${name}\nPhone: ${phone}${message ? `\nMessage: ${message}` : ""}`;
    openWhatsApp(text);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Contact Us</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ready to start your recovery journey? Reach out to book an appointment or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact info + map */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  content: (
                    <a href="tel:+27832867055" className="text-slate-300 hover:text-teal-400 transition-colors">
                      083 286 7055
                    </a>
                  ),
                  sub: "WhatsApp preferred",
                },
                {
                  icon: Mail,
                  label: "Email",
                  content: (
                    <a href="mailto:shuaybomar@gmail.com" className="text-slate-300 hover:text-teal-400 transition-colors break-all">
                      shuaybomar@gmail.com
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  label: "Hours",
                  content: (
                    <div className="text-slate-300 text-sm space-y-0.5">
                      <p>Mon – Fri: 08:00 – 16:00</p>
                      <p>Sat – Sun: By appointment</p>
                    </div>
                  ),
                },
                {
                  icon: MapPin,
                  label: "Location",
                  content: (
                    <p className="text-slate-300 text-sm leading-snug">
                      Room 305, 3rd Floor, Summit House<br />
                      Rondebosch Medical Center<br />
                      85 Klipfontein Road, Cape Town
                    </p>
                  ),
                },
              ].map(({ icon: Icon, label, content, sub }) => (
                <div key={label} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-teal-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-teal-400" />
                    </div>
                    <span className="font-semibold text-white text-sm">{label}</span>
                  </div>
                  {content}
                  {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg h-64">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9127823756!2d18.4729!3d-33.9626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d249fde5a299d76!2sShuayb%20Omar%20Physiotherapy!5e0!3m2!1sen!2sza!4v1"
                title="Shuayb Omar Physiotherapy location"
              />
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={() => openWhatsApp()}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              <MessageCircle size={22} />
              Message Us on WhatsApp
            </button>
          </div>

          {/* Appointment form */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-2">Request an Appointment</h3>
            <p className="text-slate-400 text-sm mb-7">Fill in the form below and we'll get back to you as soon as possible.</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-teal-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Request Sent!</h4>
                <p className="text-slate-400">Your WhatsApp has been opened with your details. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Name <span className="text-teal-400">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone <span className="text-teal-400">*</span></label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 082 123 4567"
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Message <span className="text-slate-500 font-normal">(optional)</span></label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your condition or what you'd like help with..."
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-slate-500 text-center">Clicking "Send" will open WhatsApp with your details pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
