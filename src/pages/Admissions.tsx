import { useEffect } from "react";
import AdmissionCTA from "../components/AdmissionsCTA";
import {
    Phone,
    MessageCircle,
    MapPin
} from "lucide-react";
import { contactInfo } from "../data/contactData";

const admissionSteps = [
  {
    step: "01",
    title: "Visit School",
    description:
      "Parents can visit the school campus and interact with staff to understand facilities and admission details.",
  },
  {
    step: "02",
    title: "Submit Application",
    description:
      "Fill out the admission enquiry/application form with required student details.",
  },
  {
    step: "03",
    title: "Document Verification",
    description:
      "Submit required documents for verification and class eligibility.",
  },
  {
    step: "04",
    title: "Admission Confirmation",
    description:
      "Complete admission formalities and begin your child’s learning journey.",
  },
];

const requiredDocuments = [
  "Birth Certificate",
  "Aadhar Card Copy",
  "Passport Size Photographs",
  "Previous School Leaving Certificate (if applicable)",
  "Progress Report / Marksheet",
  "Address Proof",
];


function Admissions() {
  useEffect(() => {
    document.title = "Admissions | Nathsagar English Medium School, Ghotan";
  }, []);
  
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">

          <span className="text-secondary font-semibold uppercase tracking-wide">
            Admissions Open
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4 leading-tight">
            Join
            <span className="text-secondary">
              {" "}Nathsagar English Medium School
            </span>
          </h1>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-6 leading-8">
            Admissions are open for students. Begin your child’s
            educational journey in a disciplined, caring and
            quality learning environment.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Admission Process
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4">
              Simple Steps To
              <span className="text-secondary">
                {" "}Get Started
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-[2rem] shadow-lg border border-orange-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-5xl font-bold text-orange-200">
                  {item.step}
                </span>

                <h3 className="text-xl font-bold text-primary mt-5 mb-3">
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

      {/* Required Documents */}
      <section className="py-20 px-6 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Required Documents
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4">
              Documents Needed For Admission
            </h2>
          </div>

          <div className="bg-white rounded-[2rem] shadow-lg border border-orange-100 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-5">
              {requiredDocuments.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center gap-4 bg-orange-50 rounded-2xl p-4"
                >
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>

                  <span className="text-slate-700 font-medium">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center bg-primary rounded-[2rem] text-white p-10 md:p-14 shadow-xl">

          <span className="text-orange-200 uppercase tracking-wide font-semibold">
            Eligibility
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Admissions Available
          </h2>

          <p className="text-slate-200 mt-5 text-lg leading-8">
            Admissions are currently available from
            <span className="font-semibold text-secondary">
              {" "}Nursery to Standard 5th
            </span>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-orange-50/30">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase tracking-wide">
                FAQ
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4">
                Frequently Asked Questions
            </h2>
            </div>

            <div className="space-y-5">

            {[
                {
                question: "Which classes are available?",
                answer:
                    "Admissions are available from Nursery to Standard 8th.",
                },
                {
                question: "Is transport facility available?",
                answer:
                    "Yes, school transport facility is available.",
                },
                {
                question: "Is the school English medium?",
                answer:
                    "Yes, Nathsagar English Medium School follows English medium education.",
                },
                {
                question: "How can parents enquire about admission?",
                answer:
                    "Parents can visit the school campus or contact the school through phone or WhatsApp.",
                },
            ].map((faq, index) => (
                <div
                key={index}
                className="bg-white rounded-[2rem] p-6 shadow-md border border-orange-100 hover:shadow-lg transition-allß duration-300"
                >
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                    {faq.question}
                </h3>

                <p className="text-slate-600 leading-7">
                    {faq.answer}
                </p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Admission Help */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-primary rounded-[2rem] text-white p-10 md:p-14 shadow-xl text-center">

            <span className="text-orange-200 uppercase tracking-wide font-semibold">
                Need Help?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Contact Us For Admission Guidance
            </h2>

            <p className="text-slate-200 mt-5 text-lg leading-8 max-w-2xl mx-auto">
                Our team is happy to help parents understand the
                admission process and school facilities.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mt-10">

                <a className="bg-white/10 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer block text-white no-underline" 
                   href="tel:+919890519330">
                  <h3 className="font-bold text-xl mb-2 text-orange-200">
                    <Phone className="text-orange-200" size={18} /> Call School
                  </h3>

                  <p className="text-white text-lg font-semibold">
                    +91 98905 19330
                  </p>

                  <span className="text-slate-300 text-sm mt-2 block">
                    Tap to call instantly
                  </span>
                </a>

                <a className="bg-white/10 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer block text-white no-underline" 
                   href="https://wa.me/919890519330">
                  <h3 className="font-bold text-xl mb-2 text-orange-200">
                    <MessageCircle className="text-orange-200" size={18} /> WhatsApp
                  </h3>

                  <p className="text-white text-lg font-semibold">
                      +91 98905 19330
                  </p>

                  <span className="text-slate-300 text-sm mt-2 block">
                    Quick Admission Enquiry
                  </span>
                </a>

                <a className="bg-white/10 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer block text-white no-underline" 
                   href={contactInfo.googleMapLink}>
                  <h3 className="font-bold text-xl mb-2 text-orange-200">
                    <MapPin className="text-orange-200" size={18} /> Visit School
                  </h3>

                  <p className="text-white text-lg font-semibold">
                    Ghotan, Maharashtra
                  </p>
                  
                  <span className="text-slate-300 text-sm mt-2 block">
                    Visit campus personally for admission guidance
                  </span>
                </a>

            </div>
          </div>
        </div>
      </section>

      <AdmissionCTA />
    </div>
  );
}

export default Admissions;
