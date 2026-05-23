import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Trophy,
  HeartHandshake,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "English Medium Education",
    description:
      "Building strong communication skills through quality English medium learning.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description:
      "Dedicated and experienced teachers focused on every student’s growth.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline & Values",
    description:
      "Encouraging discipline, responsibility, and strong moral values.",
  },
  {
    icon: Trophy,
    title: "Sports & Cultural Activities",
    description:
      "Supporting all-round student development through sports and cultural events.",
  },
  {
    icon: MonitorSmartphone,
    title: "Smart Classrooms",
    description:
      "Interactive learning through projectors and LED-eanabled smart classrooms.",
  },
  {
    icon: HeartHandshake,
    title: "Activity-Based Learning",
    description:
      "Making education engaging through practical and activity-based learning.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold uppercase tracking-wide">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3">
            Why Parents Trust
            <span className="text-secondary">
              {" "}Nathsagar School
            </span>
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
            We focus on quality education, discipline,
            values, and overall development to help every
            child build a strong future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-secondary/20 rounded-[2rem] p-8 transition duration-300 hover:shadow-xl group"
              >
                <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary transition duration-300">
                  <Icon
                    size={30}
                    className="text-secondary group-hover:text-white transition duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;