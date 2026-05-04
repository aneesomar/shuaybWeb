import { Star, Quote } from "lucide-react";

const googleRating = "4.9";

const testimonials = [
  {
    name: "Sandee Jacobs",
    role: "Knee Rehabilitation",
    content:
      "Shuayb Omar has been assisting me with rehabilitating my knee injury over the past few weeks. I have seen huge improvements in my strength and mobility, and my pain has reduced significantly since starting treatment. He explains everything clearly, listens to my concerns, and tailors each session to what my knee actually needs. Shuayb is professional, friendly, and genuinely caring. I highly recommend his services!",
    rating: 5,
  },
  {
    name: "Liam Metcalfe",
    role: "Shoulder Injury",
    content:
      "Shuayb is a fantastic physio. He helped me work through my shoulder injury. I appreciate his willingness to listen to your feedback and provide you with an understanding of the issue. His rehab plans helped me get back to my best. Would definitely recommend his services.",
    rating: 5,
  },
  {
    name: "Ma-aveyah Moos",
    role: "Recurring Back Issues",
    content:
      "I use Shuayb often as I have recurring back issues. He is always flexible and finds a way to accommodate me when I am in pain, and usually sorts me out in one session! He also provides advice against future injuries as well as preventative exercises and stretches as maintenance. I would not go anywhere else. I would highly recommend Shuayb for any physio related matters.",
    rating: 5,
  },
  {
    name: "Taz Jai",
    role: "Patient",
    content:
      "Extremely knowledgeable, professional and skilled, with a genuine interest in patient recovery. Explained everything clearly and helped me recover faster than expected.",
    rating: 5,
  },
  {
    name: "Simone Williams",
    role: "Patient",
    content:
      "I had a great session at Shuayb Omar Physiotherapy! The care and expertise were exceptional, and I left feeling well-supported and on the right track with my recovery. The room was spacious, accessible, and that made the experience even more comfortable. Highly recommend for professional and attentive care in a welcoming environment.",
    rating: 5,
  },
  {
    name: "Shiraz Hoosen",
    role: "Lower Back Treatment",
    content:
      "Shuayb managed to adjust my lower back with a few little adjustments where I am able to at least pick things up and stand up without any lower back pain. Great results!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm mb-3">Google Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">What Patients Say</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real Google reviews for Shuayb Omar Physiotherapy (Pty) Ltd.
          </p>

          <div className="mt-8 inline-flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm sm:flex-row sm:px-8">
            <img
              src="/images/review-google.png"
              alt="Google Reviews"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <div className="hidden h-12 w-px bg-slate-200 sm:block" />
            <div className="flex min-w-[116px] flex-col items-center justify-center">
              <span className="text-4xl font-bold text-slate-900">{googleRating}</span>
              <p className="mt-1 text-sm font-medium text-slate-500">Overall Google rating</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote size={28} className="text-teal-100 absolute top-5 right-5" />

              <div className="mb-5 flex gap-1 pr-8">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-bold text-slate-800">{testimonial.name}</p>
                <p className="text-sm text-teal-600 font-medium mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
