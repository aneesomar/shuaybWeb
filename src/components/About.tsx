import { CheckCircle2, GraduationCap, Heart, ShieldCheck } from "lucide-react";

const treatments = [
  "Manual therapy, joint mobilisation and stretches",
  "Exercise rehabilitation",
  "Sports injury treatment and prevention",
  "Post-surgical rehabilitation",
  "Posture correction and movement analysis",
  "Pain management strategies",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Meet Shuayb Omar
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            BSc Physiotherapy graduate from the University of Cape Town, dedicated to helping you move better, feel stronger, and live pain-free.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/reception-shuayb-1.webp"
              alt="Shuayb Omar at reception"
              className="rounded-2xl w-full h-64 object-cover shadow-md col-span-2"
            />
            <img
              src="/images/consult-1.webp"
              alt="Patient consultation"
              className="rounded-2xl w-full h-48 object-cover shadow-md"
            />
            <img
              src="/images/physio-room-1.webp"
              alt="Physiotherapy room"
              className="rounded-2xl w-full h-48 object-cover shadow-md"
            />
          </div>

          {/* Text */}
          <div className="space-y-7">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Our mission is simple: to help you move better, feel stronger, and live pain-free. We provide evidence-based physiotherapy treatments designed to restore movement, reduce pain, and support long-term physical health.
              </p>
            </div>
            <div>
              <p className="text-slate-600 leading-relaxed">
                Whether you're recovering from surgery, dealing with a sports injury, or struggling with everyday aches and pains, we create personalised treatment plans tailored to your needs.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: GraduationCap, label: "BSc Physio", sub: "University of Cape Town" },
                { icon: ShieldCheck, label: "Medical Aid", sub: "Rates accepted" },
                { icon: Heart, label: "Patient-First", sub: "Personalised care" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon size={20} className="text-teal-600" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm">{label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Approach</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe effective physiotherapy goes beyond treating symptoms. Our approach focuses on identifying the root cause of your problem and providing hands-on treatment combined with specific individualised rehabilitation programs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By combining clinical expertise with modern rehabilitation techniques, we aim to help you recover faster and prevent future injuries.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-5">Our treatments may include:</h4>
              <ul className="space-y-3">
                {treatments.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
