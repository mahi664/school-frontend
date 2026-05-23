import founderImage from "../../../../assets/images/founder/dadasaheb-garje-sir.jpg"

function FounderVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] blur-2xl" />

            <div className="relative bg-white p-4 rounded-[2rem] shadow-xl border border-orange-100">
              <img
                src={founderImage}
                alt="Late Shri Dadasaheb Garje Sir"
                className="rounded-[1.5rem] w-full max-h-[650px] object-contain bg-gradient-to-b from-orange-50 to-white p-4"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Our Founder’s Vision
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 leading-tight">
              A Vision That
              <span className="text-secondary">
                {" "}Continues To Inspire
              </span>
            </h2>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary">
                Late Shri Dadasaheb Garje Sir
              </h3>

              <p className="text-secondary font-medium mt-1">
                Founder & Visionary Educator
              </p>
            </div>

            <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
              <p>
                Founded in 2009 with a powerful vision by
                <span className="font-semibold text-primary">
                  {" "}Late Shri Dadasaheb Garje Sir
                </span>
                , a respected M.A. English professor and educator,
                Nathsagar English Medium School began its journey
                in just two classrooms.
              </p>

              <p>
                Passionate about English education and teacher
                development, he conducted multiple English
                language training programs and contributed
                significantly to teacher training initiatives.
              </p>

              <p>
                His dream was simple yet powerful:
                <span className="font-semibold text-primary">
                  {" "}to provide quality English education to
                  rural students at affordable fees.
                </span>
              </p>

              <p>
                Today, from a humble beginning, the school has
                grown into a thriving institution with classrooms,
                transport facilities, a spacious playground, and a
                commitment to holistic student development.
              </p>
            </div>

            <button className="mt-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition px-6 py-3 rounded-full font-semibold">
              Read Full Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderVision;