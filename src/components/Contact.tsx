import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your recovery journey? Reach out to us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:info@physioflow.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  info@physioflow.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-700">
                  123 Healthcare Avenue
                  <br />
                  Wellness City, ST 12345
                  <br />
                  United States
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <MessageCircle size={20} />
              Message us on WhatsApp
            </button>
          </div>

          <div className="relative">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 md:h-full min-h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1484950227024!2d-74.00601592345!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7f6f3%3A0x5e6dd5e6c5d5d5d5!2s123%20Healthcare%20Avenue%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
