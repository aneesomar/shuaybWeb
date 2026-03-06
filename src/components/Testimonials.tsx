import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Recovery from ACL Surgery",
    content:
      "After my ACL surgery, I was nervous about my recovery. The team at PhysioFlow provided exceptional care and guidance. I'm back to playing tennis within 6 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Chronic Back Pain Relief",
    content:
      "Years of back pain that seemed hopeless. The personalized treatment plan and professional guidance transformed my life. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Post-Pregnancy Rehabilitation",
    content:
      "The team's expertise in postpartum recovery was incredible. They helped me regain my strength and confidence. Thank you!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Shoulder Injury Recovery",
    content:
      "Professional, caring, and results-driven. My shoulder mobility has improved tremendously. Best physiotherapy experience I've had.",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    role: "Stroke Recovery",
    content:
      "The neurological specialists here are outstanding. Their specialized approach helped me recover mobility and regain independence.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "Sports Performance Enhancement",
    content:
      "As an athlete, I needed expert guidance to improve my performance and prevent injuries. They delivered beyond expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real patients. See how we've helped hundreds achieve their recovery goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-blue-600 font-semibold">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
