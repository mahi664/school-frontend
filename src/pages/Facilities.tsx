import AdmissionCTA from "../components/AdmissionsCTA";
import schoolBuilding from "../assets/images/school-building.jpg";
import schoolBus from "../assets/images/school-bus.jpg"
import schoolMoments from "../assets/images/school-moments.jpg"
import studentAssembly from "../assets/images/student-assembly.jpg"
import { useEffect } from "react";

const facilities = [
  {
    title: "Quality Education",
    description:
      "Strong English medium education focused on academics, discipline and confidence.",
    icon: "📚",
  },
  {
    title: "Transport Facility",
    description:
      "Safe and convenient school transportation for students.",
    icon: "🚌",
  },
  {
    title: "Sports & Activities",
    description:
      "Sports, physical activities and competitions for holistic development.",
    icon: "🏏",
  },
  {
    title: "Cultural Programs",
    description:
      "Celebrations, annual functions and co-curricular activities.",
    icon: "🎭",
  },
  {
    title: "Safe Environment",
    description:
      "Disciplined and student-friendly learning atmosphere.",
    icon: "🛡️",
  },
  {
    title: "Holistic Development",
    description:
      "Focus on academics, discipline, values and confidence building.",
    icon: "🌱",
  },
];


function Facilities() {
  useEffect(() => {
    document.title = "Facilities | Nathsagar English Medium School, Ghotan";
  }, []);

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50 to-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <span className="text-secondary uppercase tracking-wider font-semibold">
              Facilities
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 leading-tight">
              Everything Your Child Needs
              <span className="text-secondary">
                {" "}To Learn & Grow
              </span>
            </h1>

            <p className="text-slate-600 text-lg leading-8 mt-6">
              At Nathsagar English Medium School, we provide
              quality education, safe transport, sports,
              discipline and a nurturing environment for
              every student.
            </p>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>

            <img
              src={schoolBuilding}
              alt="School Campus"
              className="rounded-[2rem] shadow-2xl w-full h-auto md:h-[450px] object-contain md:object-cover bg-white"
            />
          </div>

        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <span className="text-secondary uppercase tracking-wide font-semibold">
              Our Facilities
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4">
              Building Better Learning Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {facilities.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[2rem] p-8 border border-orange-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Transport Facility */}
      <section className="py-20 px-6 bg-orange-50/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div>
            <img
                src={schoolBus}
                alt="School Transport"
                className="rounded-[2rem] shadow-xl w-full h-auto md:h-[420px] object-contain md:object-cover bg-white"
            />
            </div>

            {/* Content */}
            <div>

            <span className="text-secondary uppercase tracking-wide font-semibold">
                Transport Facility
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 leading-tight">
                Safe &
                <span className="text-secondary">
                {" "}Reliable School Transport
                </span>
            </h2>

            <p className="text-slate-600 text-lg leading-8 mt-6">
                We provide transport facilities to help students
                travel safely and comfortably. Parents can rely on
                our transportation support for a convenient school journey.
            </p>

            <div className="mt-8 space-y-4">

                {[
                "Safe student travel",
                "Reliable transportation",
                "Comfortable commute",
                "Parent-friendly facility",
                ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-slate-700 font-medium">
                    {item}
                    </span>
                </div>
                ))}

            </div>
            </div>
        </div>
      </section>

      {/* Sports & Activities */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

            {/* Content */}
            <div>

            <span className="text-secondary uppercase tracking-wide font-semibold">
                Sports & Activities
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 leading-tight">
                Encouraging
                <span className="text-secondary">
                {" "}Learning Beyond Classrooms
                </span>
            </h2>

            <p className="text-slate-600 text-lg leading-8 mt-6">
                We believe education is not limited to classrooms.
                Students actively participate in sports, cultural
                programs, competitions, Olympiad and scholarship
                examinations for holistic growth.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

                {[
                "Sports Activities",
                "Cultural Programs",
                "Olympiad Exams",
                "Scholarship Guidance",
                "Annual Functions",
                "Activity-Based Learning",
                ].map((item) => (
                <div
                    key={item}
                    className="bg-orange-50 rounded-2xl px-5 py-4 border border-orange-100 font-medium text-slate-700"
                >
                    {item}
                </div>
                ))}

            </div>
            </div>

            {/* Image */}
            <div>
            <img
                src={schoolMoments}
                alt="Sports and Activities"
                className="rounded-[2rem] shadow-xl w-full h-auto md:h-[450px] object-contain md:object-cover bg-white"
            />
            </div>

        </div>
      </section>

      {/* Safety & Discipline */}
      <section className="py-20 px-6 bg-orange-50/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Image */}
            <div>
            <img
                src={studentAssembly}
                alt="Safe School Environment"
                className="rounded-[2rem] shadow-xl w-full h-auto md:h-[450px] object-contain md:object-cover bg-white"
            />
            </div>

            {/* Right Content */}
            <div>

            <span className="text-secondary uppercase tracking-wide font-semibold">
                Safety & Discipline
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 leading-tight">
                A Safe &
                <span className="text-secondary">
                {" "}Disciplined Environment
                </span>
            </h2>

            <p className="text-slate-600 text-lg leading-8 mt-6">
                At Nathsagar English Medium School, we believe
                discipline, values and student safety are equally
                important as academics. We nurture students in a
                caring and supportive environment.
            </p>

            <div className="mt-8 space-y-4">

                {[
                "Disciplined learning atmosphere",
                "Student-friendly environment",
                "Teacher guidance & support",
                "Value-based education",
                ].map((item) => (
                <div
                    key={item}
                    className="flex items-center gap-3"
                >
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>

                    <span className="text-slate-700 font-medium">
                    {item}
                    </span>
                </div>
                ))}

            </div>
            </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

            <div className="text-center mb-14">

            <span className="text-secondary uppercase tracking-wide font-semibold">
                Why Parents Choose Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4">
                Building Strong Foundations
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-5 leading-8">
                We focus on academic excellence, discipline,
                confidence and overall student development.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

            {[
                "Quality English Medium Education",
                "Experienced Teaching Staff",
                "Safe Transport Facility",
                "Sports & Cultural Activities",
                "Discipline & Value-Based Learning",
                "Holistic Student Development",
            ].map((item) => (
                <div
                key={item}
                className="bg-white rounded-[2rem] shadow-md border border-orange-100 p-6 flex items-center gap-4 hover:shadow-lg transition duration-300"
                >
                <div className="w-5 h-5 rounded-full bg-secondary shrink-0"></div>

                <span className="text-slate-700 font-medium text-lg">
                    {item}
                </span>
                </div>
            ))}
            </div>

        </div>
      </section>

      <AdmissionCTA />
    </div>
  );
}

export default Facilities;