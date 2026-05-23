import {
    School,
    Target,
    TrendingUp,
    Star
} from 'lucide-react'

const milestones = [
  {
    year: "2009",
    title: "The Beginning",
    icon: School,
    description:
      "Nathsagar English Medium School started its journey with just two classrooms and a strong vision to provide quality English education in rural areas.",
  },
  {
    year: "Vision",
    title: "Quality Education For All",
    icon: Target,
    description:
      "Founded with the mission of providing affordable English medium education while nurturing discipline, values and confidence.",
  },
  {
    year: "Growth",
    title: "Expanding Infrastructure",
    icon: TrendingUp,
    description:
      "Over the years, the school expanded classrooms, campus facilities and student activities to support holistic development.",
  },
  {
    year: "Today",
    title: "A Thriving Institution",
    icon: Star,
    description:
      "Today, Nathsagar English Medium School proudly educates 200+ students with quality academics, activities, sports and transport facilities.",
  },
];

const SchoolJourney = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F6D] mt-4">
            Growing With
            <span className="text-orange-500">
              {" "}Purpose & Passion
            </span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-lg leading-8">
            From humble beginnings to a growing educational institution,
            our journey reflects dedication, discipline and a commitment
            to shaping brighter futures.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">

            {milestones.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white rounded-[2rem] shadow-lg border border-orange-100 p-8 hover:shadow-xl transition-all duration-300">
                    
                    <div className="flex items-center gap-4 mb-5">
                        <div className="bg-orange-100 p-3 rounded-2xl mt-8">
                            <item.icon className="text-orange-500" size={24} />
                        </div>

                        <div>
                            <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                                {item.year}
                            </span>

                            <h3 className="text-xl md:text-2xl font-bold text-[#0B1F6D]">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                    <p className="text-gray-600 leading-7">
                        {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-orange-100 shadow-md"></div>
                </div>

                {/* Empty side desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolJourney;