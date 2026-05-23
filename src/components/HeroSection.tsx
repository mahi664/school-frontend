import heroImage from "../assets/images/hero-school.jpg"
import { useSchoolConfig } from "../context/SchoolConfigContext";
import { contactInfo } from "../data/contactData";

function HeroSection() {
  
  const { config } = useSchoolConfig();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium text-sm mb-6">
              Admissions Open 2026–27
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Empowering Young Minds
              <span className="block text-secondary">
                For A Better Tomorrow
              </span>
            </h1>

            <p className="text-slate-600 text-lg mt-6 leading-relaxed max-w-xl">
              Nathsagar English Medium School, Ghotan provides
              quality education with activity-based learning,
              strong values, and holistic student development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a href={`https://wa.me/${config?.phoneNumber}`} className="w-full sm:w-auto no-underline">  
                <button className="bg-secondary hover:bg-accent transition text-white px-7 py-4 rounded-full font-semibold shadow-lg">
                    Apply for Admission
                </button>
              </a>

              <a href={contactInfo.googleMapLink} className="w-full sm:w-auto no-underline">
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition px-7 py-4 rounded-full font-semibold">
                    Explore Campus
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  200+
                </h3>
                <p className="text-slate-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">
                  10+
                </h3>
                <p className="text-slate-500">
                  Teachers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary">
                  15+
                </h3>
                <p className="text-slate-500">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 h-40 w-40 bg-secondary/20 rounded-full blur-3xl" />

            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary/20 rounded-full blur-3xl" />

            <img
              src={heroImage}
              alt="Students Learning"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;