import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import admissionImage from "../assets/images/school-building.jpg"
import { useSchoolConfig } from "../context/SchoolConfigContext";

const AdmissionsCTA = () => {
  const { config } = useSchoolConfig();
  
  return (
    <section className="px-6 lg:px-12 py-14 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[2rem] overflow-hidden border border-orange-100 shadow-xl bg-white">

          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-14">
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
                Admissions Open 2026–27
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary leading-tight">
                Give Your Child a
                <span className="text-secondary">
                  {" "}Brighter Future
                </span>
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                Join Nathsagar English Medium School and help your child
                grow through quality English education, discipline,
                smart classrooms, sports, cultural activities and
                activity-based learning.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={`https://wa.me/${config?.phoneNumber}`} className="w-full sm:w-auto no-underline">
                  <button className="bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition duration-300 flex items-center justify-center gap-3 shadow-md">
                    Apply For Admission
                    <FaArrowRight />
                  </button>
                </a>

                <a href={`tel:${config?.phoneNumber}`} className="w-full sm:w-auto no-underline">
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300 flex items-center justify-center gap-3">
                        <FaPhoneAlt />
                        Contact School
                    </button>
                </a>
              </div>
            </div>

            {/* Right Side School Image */}
            <div className="relative h-full min-h-[300px]">
              <img
                src={admissionImage}
                alt="Nathsagar English Medium School"
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-primary/20"></div>

              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-primary font-bold text-lg">
                  Nathsagar English Medium School
                </p>
                <p className="text-gray-600 text-sm">
                  English Medium • Discipline • Smart Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCTA;