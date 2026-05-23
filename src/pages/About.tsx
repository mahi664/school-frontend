import PrincipalMessage from "../features/website/home/components/PrincipalMessage";
import schoolImage from "../assets/images/school-building.jpg";
import FounderVision from "../features/website/home/components/FounderVision";
import SchoolJourney from "../components/SchoolJourney";
import { useEffect } from "react";

const stats = [
  {
    number: "15+",
    label: "Years of Excellence",
  },
  {
    number: "200+",
    label: "Students Learning",
  },
  {
    number: "Experienced",
    label: "Teaching Staff",
  },
  {
    number: "Holistic",
    label: "Development",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About Us | Nathsagar English Medium School, Ghotan";
  }, []);
  
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              About Our School
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-[#0B1F6D] mt-4 leading-tight">
              Shaping Young Minds With
              <span className="text-orange-500">
                {" "}Vision & Commitment
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
              Nathsagar English Medium School, Ghotan is dedicated to
              nurturing students through quality education, discipline,
              values and holistic development in a supportive learning
              environment.
            </p>
          </div>

          {/* School Image */}
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-orange-100">
            <img
              src={schoolImage}
              alt="Nathsagar English Medium School"
              className="w-full object-cover aspect-[16/9] md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="pb-20 px-6 bg-orange-50/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <h2 className="text-4xl font-bold text-[#0B1F6D] mt-4 mb-6">
              Building Bright Futures Through Quality Education
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              At Nathsagar English Medium School, we believe education
              is not only about academic excellence but also about
              nurturing discipline, creativity, confidence and moral
              values in every student.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Our mission is to create an environment where children
              can grow intellectually, socially and emotionally while
              developing leadership qualities and strong character.
            </p>

            <p className="text-gray-600 leading-8">
              Through quality teaching, extracurricular activities,
              sports and value-based education, we strive to prepare
              students for a brighter future.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-lg border border-orange-100 p-8 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 break-words">
                  {item.number}
                </h3>

                <p className="text-[#0B1F6D] font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <FounderVision />
      </section>

      <section className="pb-20 px-6 bg-orange-50/30">
        <SchoolJourney />
      </section>

      {/* Vision & Mission */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-[#0B1F6D] text-white rounded-[1.5rem] md:rounded-[2rem] p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-5">
              Our Vision
            </h3>

            <p className="text-gray-200 leading-8">
              To provide quality education that inspires knowledge,
              discipline, creativity and responsible citizenship
              among students.
            </p>
          </div>

          <div className="bg-orange-50 rounded-[2rem] p-10 border border-orange-100 shadow-xl">
            <h3 className="text-3xl font-bold text-[#0B1F6D] mb-5">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-8">
              To nurture confident, disciplined and responsible
              individuals through modern education, activities,
              sports and value-based learning.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="pb-20 px-6 bg-orange-50/30">
        <PrincipalMessage />
      </section>
    </div>
  );
};

export default About;