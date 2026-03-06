import { Activity, Zap, Heart, TrendingUp, AlertCircle, Smile } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";

const services = [
  {
    icon: Activity,
    title: "Sports Injury Recovery",
    description:
      "Specialized treatment for athletes and active individuals recovering from sports-related injuries.",
    features: ["Injury assessment", "Rehabilitation protocols", "Performance optimization"],
  },
  {
    icon: AlertCircle,
    title: "Chronic Pain Management",
    description:
      "Effective strategies to manage and reduce chronic pain conditions with personalized treatment plans.",
    features: ["Pain assessment", "Manual therapy", "Lifestyle modifications"],
  },
  {
    icon: Heart,
    title: "Post-Surgery Rehabilitation",
    description:
      "Comprehensive recovery programs following surgical procedures to restore mobility and strength.",
    features: ["Wound care", "Mobility training", "Strength building"],
  },
  {
    icon: TrendingUp,
    title: "Posture & Ergonomics",
    description:
      "Correct postural issues and prevent workplace injuries through ergonomic assessments and exercises.",
    features: ["Posture analysis", "Ergonomic training", "Prevention exercises"],
  },
  {
    icon: Zap,
    title: "Neurological Therapy",
    description:
      "Specialized treatment for neurological conditions affecting movement and function.",
    features: ["Stroke recovery", "Neurological assessment", "Gait training"],
  },
  {
    icon: Smile,
    title: "General Wellness",
    description:
      "Preventative care and wellness programs to maintain optimal physical health and mobility.",
    features: ["Fitness assessment", "Wellness planning", "Health coaching"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services designed to help you recover, rehabilitate, and achieve your wellness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openWhatsApp(`I'm interested in ${service.title}`)}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Book a consultation with our experienced physiotherapists. We'll assess your needs and create a personalized treatment plan.
          </p>
          <button
            onClick={() =>
              openWhatsApp("I'd like to book a consultation and discuss my needs.")
            }
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
