import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { navigateTo } from "../utils/navigation";
import { openWhatsApp } from "../utils/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="favicon.png"
                alt="Logo"
                className="h-9 w-9 rounded-full object-contain"
              />
              <div>
                <p className="text-sm font-bold text-white">Shuayb Omar</p>
                <p className="text-xs text-teal-400 tracking-wider uppercase">Physiotherapy</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Evidence-based physiotherapy in Cape Town. BSc Physiotherapy, University of Cape Town.
            </p>
            <p className="text-sm mt-3 text-teal-400 font-medium">Medical aid rates accepted.</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Services", href: "/#services" },
                { label: "About Us", href: "/about-us" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(link.href);
                    }}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal-500 flex-shrink-0" />
                <a href="tel:+27832867055" className="hover:text-teal-400 transition-colors">083 286 7055</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-teal-500 flex-shrink-0" />
                <a href="mailto:shuaybomar@gmail.com" className="hover:text-teal-400 transition-colors break-all">shuaybomar@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span>Room 305, Summit House<br />85 Klipfontein Rd, Rondebosch</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide flex items-center gap-2">
              <Clock size={14} className="text-teal-500" /> Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-300 font-medium">Mon – Fri</span><br />08:00 – 16:00</li>
              <li><span className="text-slate-300 font-medium">Sat – Sun</span><br />By appointment</li>
            </ul>
            <button
              onClick={() => openWhatsApp()}
              className="mt-5 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p className="text-slate-600">&copy; {currentYear} Shuayb Omar Physiotherapy. All rights reserved.</p>
          <p className="text-slate-600">Room 305, Summit House, Rondebosch Medical Center</p>
        </div>
      </div>
    </footer>
  );
}
