import { ArrowRight, MessageCircle, ChevronDown, MapPin } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/physio-room-1.webp"
          alt="Physiotherapy clinic"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-teal-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Move Better.
            <br />
            <span className="text-teal-400">Feel Stronger.</span>
            <br />
            Live Pain-Free.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
            Evidence-based physiotherapy tailored to you. From sports injuries and chronic pain to post-surgical rehabilitation and performance recovery.
          </p>

          <div className="mb-10 inline-flex max-w-xl items-start gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-left text-sm font-medium text-slate-200 backdrop-blur-sm">
            <MapPin size={18} className="mt-0.5 flex-shrink-0 text-teal-300" />
            <span>Room 305, Summit House, Rondebosch Medical Center</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                openWhatsApp(
                  "Hi! I'd like to book a consultation with Shuayb Omar Physiotherapy."
                )
              }
              className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              <MessageCircle size={21} />
              Book on WhatsApp
            </button>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border border-white/20 transition-all"
            >
              Our Services
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold text-white">8+</p>
              <p className="text-slate-400 text-sm mt-0.5">Services Offered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">UCT</p>
              <p className="text-slate-400 text-sm mt-0.5">Qualified</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">Medical</p>
              <p className="text-slate-400 text-sm mt-0.5">Aid Rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
