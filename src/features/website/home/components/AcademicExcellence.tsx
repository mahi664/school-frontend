import {
  Award,
  Medal,
  BookMarked,
  GraduationCap,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Olympiad Exams",
    description:
      "Encouraging students to participate in Olympiad examinations for academic excellence.",
  },
  {
    icon: Medal,
    title: "Manthan Scholarship Exams",
    description:
      "Preparing students for scholarship and competitive examinations with confidence.",
  },
  {
    icon: BookMarked,
    title: "Academic Excellence",
    description:
      "Strong focus on learning, discipline, and consistent academic performance.",
  },
  {
    icon: GraduationCap,
    title: "Good Results",
    description:
      "Helping students achieve excellent academic growth and outcomes.",
  },
];

function AcademicExcellence() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold uppercase tracking-wide">
            Academic Excellence
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
            Nurturing Future
            <span className="text-secondary">
              {" "}Achievers
            </span>
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            We encourage students to excel academically through
            Olympiad participation, scholarship preparation,
            and activity-based learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-orange-100 hover:shadow-xl transition duration-300 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Icon
                    className="text-secondary"
                    size={30}
                  />
                </div>

                <h3 className="text-xl font-bold text-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AcademicExcellence;