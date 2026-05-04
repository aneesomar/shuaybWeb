import { ArrowRight, Home } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

const services = [
  {
    title: "Sports Massage",
    image: "/images/massage-2.webp",
    description:
      "A targeted form of massage therapy designed to relieve muscle tension, improve circulation, and support recovery after physical activity. Combines deep tissue massage, stretching, scraping, needling and cupping to reduce soreness and improve athletic performance.",
  },
  {
    title: "Strapping & Taping",
    image: "/images/strapping-1.webp",
    imagePosition: "object-[40%]",
    description:
      "Used to support injured muscles and joints while they heal. Helps stabilise the affected area, reduce strain during movement, and provide protection during sports or daily activities.",
  },
  {
    title: "Myofascial Release",
    image: "/images/scraping-1.webp",
    description:
      "A hands-on therapy that focuses on releasing tightness and tension in the connective tissue surrounding muscles. Improves flexibility, reduces pain, and restores normal movement patterns.",
  },
  {
    title: "Dry Needling",
    image: "/images/needling-1.webp",
    description:
      "Fine needles are inserted into specific areas of muscle tension to release trigger points, improve blood flow, and relieve pain. An effective technique for persistent muscle tightness.",
  },
  {
    title: "Cupping Therapy",
    image: "/images/cupping-1.webp",
    description:
      "An ancient therapy using suction cups to stimulate blood flow, reduce muscle tension, and promote natural healing. Widely used in physiotherapy and sports recovery to relieve pain and improve circulation.",
  },
  {
    title: "Pulmonary Rehabilitation",
    image: "/images/pulmonary-rehab-1.webp",
    description:
      "Designed for individuals with breathing difficulties or lung conditions. Combines breathing exercises, physical activity, and education to improve respiratory function and overall quality of life.",
  },
  {
    title: "Post-Injury and Surgical Rehabilitation",
    image: "/images/rehab-1.webp",
    description:
      "Restores strength, mobility, and function after an injury or surgery. Through personalised exercise programs and guided therapy, we help patients recover safely and return to their activities.",
  },
  {
    title: "Home Visits",
    image: "/images/reception-shuayb-2.webp",
    description:
      "Convenient home visit physiotherapy for patients unable to travel to our practice, or who prefer treatment in the comfort of their own home. Contact us to arrange a visit.",
    homeVisit: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services tailored to your recovery, performance, and long-term physical wellbeing. We charge medical aid rates for all services.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${service.imagePosition ?? "object-center"}`}
                />
                {service.homeVisit && (
                  <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Home size={12} />
                    Home Visit
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{service.description}</p>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hi! I'd like to make a booking for a physiotherapy appointment."
                    )
                  }
                  className="mt-5 flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors group/btn"
                >
                  Book this service
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-teal-50 rounded-2xl p-8 md:p-12 border border-teal-100">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Not sure which service you need?</h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            Contact us and we'll help you find the right treatment plan for your specific needs.
          </p>
          <button
            onClick={() =>
              openWhatsApp("Hi! I'm not sure which service I need. Could you help?")
            }
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-lg font-bold transition-colors"
          >
            Get in Touch
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

