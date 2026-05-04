import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { navigateTo } from "../utils/navigation";
import { openWhatsApp } from "../utils/whatsapp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "About Us", href: "/about-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/75 shadow-sm shadow-slate-200/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="flex items-center flex-shrink-0"
            aria-label="Shuayb Omar Physiotherapy home"
          >
            <img
              src="/logo.png"
              alt="Shuayb Omar Physiotherapy"
              className="h-20 w-auto max-w-[290px] object-contain md:h-24 md:max-w-[390px]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(item.href);
                }}
                className="text-slate-600 hover:text-teal-600 transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+27832867055"
              className="flex items-center gap-1.5 text-slate-600 hover:text-teal-600 transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              083&nbsp;286&nbsp;7055
            </a>
            <button
              onClick={() => openWhatsApp()}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <MessageCircle size={17} />
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 space-y-4 border-t border-white/50 mt-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(item.href);
                  setIsMenuOpen(false);
                }}
                className="block text-slate-700 hover:text-teal-600 font-medium py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+27832867055"
              className="flex items-center gap-2 text-slate-600 py-1"
            >
              <Phone size={16} />
              083 286 7055
            </a>
            <button
              onClick={() => {
                openWhatsApp();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-semibold"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
