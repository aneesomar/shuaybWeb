import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Licensed Physiotherapists with extensive expertise",
  "State-of-the-art treatment facilities and equipment",
  "Personalized treatment plans for every patient",
  "Evidence-based therapeutic approaches",
  "Compassionate and patient-centered care",
  "Holistic wellness approach to recovery",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-blue-100 rounded-2xl blur-2xl opacity-60"></div>
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg"
              alt="Modern physiotherapy clinic"
              className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                With over a decade of experience in physiotherapy, we've helped thousands of patients recover, rehabilitate, and reclaim their quality of life.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 text-lg">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">10+</p>
                <p className="text-gray-700 text-sm">Years Serving</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">15+</p>
                <p className="text-gray-700 text-sm">Specialists</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">98%</p>
                <p className="text-gray-700 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
