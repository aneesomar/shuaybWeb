import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">PhysioFlow</h3>
            <p className="text-gray-400">
              Your trusted partner in recovery and wellness. Professional physiotherapy services for better health.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@physioflow.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@physioflow.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span className="text-gray-400">
                  123 Healthcare Avenue
                  <br />
                  Wellness City, ST 12345
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-semibold">Mon - Fri</span>
                <br />
                7:00 AM - 7:00 PM
              </li>
              <li>
                <span className="font-semibold">Saturday</span>
                <br />
                9:00 AM - 5:00 PM
              </li>
              <li>
                <span className="font-semibold">Sunday</span>
                <br />
                Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} PhysioFlow. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors">
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
