import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Recover Stronger
              </h1>
              <p className="text-2xl text-blue-600 font-semibold">
                Professional Physiotherapy for a Better Life
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Expert physiotherapy services tailored to your recovery needs. Whether you're managing pain, recovering from injury, or enhancing athletic performance, we're here to guide you back to wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hi! I'd like to book a consultation for physiotherapy services."
                  )
                }
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              >
                Book on WhatsApp
                <ArrowRight size={20} />
              </button>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-600 transition-colors"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-700">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-gray-700">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg"
              alt="Physiotherapy session"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
