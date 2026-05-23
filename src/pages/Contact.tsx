import { useEffect, useState } from "react";
import { contactInfo } from "../data/contactData";
import { submitEnquiry } from "../services/contactService";
import toast from "react-hot-toast";
import { useSchoolConfig } from "../context/SchoolConfigContext";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Nathsagar English Medium School, Ghotan";
  }, []);

  const { config } = useSchoolConfig();

  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    studentStandard: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.parentName.trim()){
        toast.error("Parent Name is required.");
        return;
    }
    if(!/^[0-9]{10}$/.test(formData.phoneNumber)){
        toast.error("Please enter valid 10-digit phone number.");
        return;
    }
    setIsSubmitting(true);
    try {
      const response = await submitEnquiry(formData);
      toast.success(response.message);
      setFormData({
        parentName: "",
        phoneNumber: "",
        studentStandard: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error("There was an error submitting your enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-orange-50 to-white">

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-secondary uppercase tracking-wide font-semibold">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mt-4">
            Get In
            <span className="text-secondary">
              {" "}Touch With Us
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-8 max-w-3xl mx-auto mt-6">
            We are here to help parents with
            admissions, school information and
            student enquiries.
          </p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Call */}
          <a
            href={`tel:${config?.phoneNumber}`}
            className="bg-white border border-orange-100 rounded-[2rem] p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 no-underline min-h-[280px] flex flex-col justify-center" 
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6">
                📞
            </div>

            <h3 className="text-2xl font-bold text-primary">
              Call School
            </h3>

            <p className="text-slate-600 mt-3">
              {config?.phoneNumber}
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${config?.phoneNumber}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-orange-100 rounded-[2rem] p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 no-underline min-h-[280px] flex flex-col justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6">
                💬
            </div>

            <h3 className="text-2xl font-bold text-primary">
              WhatsApp
            </h3>

            <p className="text-slate-600 mt-3">
              Quick admission enquiry
            </p>
          </a>

          {/* Address */}
          <a
            href={contactInfo.googleMapLink}
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-orange-100 rounded-[2rem] p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 no-underline min-h-[280px] flex flex-col justify-center"
          >

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6">
                📍
            </div>

            <h3 className="text-2xl font-bold text-primary">
              Visit School
            </h3>

            <p className="text-slate-600 mt-3 leading-7">
              {config?.address}
            </p>
          </a>

          {/* Timings */}
          <div className="bg-white border border-orange-100 rounded-[2rem] p-8 shadow-md min-h-[280px] flex flex-col justify-center">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6">
                ⏰
            </div>

            <h3 className="text-2xl font-bold text-primary">
              School Hours
            </h3>

            <p className="text-slate-600 mt-3">
              {config?.schoolTiming}
            </p>
          </div>

        </div>
      </section>

      {/* Map + Enquiry */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">

            {/* Map */}
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-orange-100">

            <div className="p-8 pb-6 border-b border-orange-100">
                <span className="text-secondary uppercase tracking-wide font-semibold">
                Visit Campus
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">
                Find Us Easily
                </h2>

                <p className="text-slate-600 mt-4 leading-7">
                Visit our campus to explore facilities,
                meet teachers and understand admission
                process personally.
                </p>
            </div>

            <iframe
                src={contactInfo.googleMapEmbed}
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            </div>

            {/* Form */}
            <div className="rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
                 style={{ background: "linear-gradient(135deg, #142B6F 0%, #1E3A8A 50%, #0F172A 100%)" }}>

            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

                <span className="text-orange-300 uppercase tracking-wide font-semibold">
                Admission Enquiry
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Enquire About Admissions
                </h2>

                <p className="text-slate-300 mt-4 leading-7">
                Leave your details and our team will
                contact you regarding admissions.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

                    <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Parent Name"
                        className="w-full box-border h-14 rounded-2xl px-5 bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />

                    <input
                        type="tel"
                        name="phoneNumber"
                        maxLength={10}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full box-border h-14 rounded-2xl px-5 bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />

                    <select
                        name="studentStandard"
                        value={formData.studentStandard}
                        onChange={handleChange}
                        className="w-full box-border h-14 rounded-2xl px-5 pr-5 bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition apprearance-none"
                        defaultValue=""
                    >
                        <option value="" disabled className="text-black">Student Standard</option>
                        <option className="text-black">Nursery</option>
                        <option className="text-black">Junior KG</option>
                        <option className="text-black">Senior KG</option>
                        <option className="text-black">1st Standard</option>
                        <option className="text-black">2nd Standard</option>
                        <option className="text-black">3rd Standard</option>
                        <option className="text-black">4th Standard</option>
                        <option className="text-black">5th Standard</option>
                        <option className="text-black">6th Standard</option>
                        <option className="text-black">7th Standard</option>
                        <option className="text-black">8th Standard</option>
                    </select>

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Message"
                        className="w-full box-border h-32 rounded-2xl px-5 py-4 bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-secondary hover:bg-orange-500 hover:scale-[1.02] transition duration-300 text-white font-semibold rounded-2xl py-4 shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    </button>
                    <p className="text-slate-300 text-sm text-center mt-4">Our team will contact you within 24 hours.</p>

                </form>
            </div>
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

            <div className="rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl"
                 style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #142B6F 100%)" }}>

            {/* Glow */}
            <div className="absolute -right-16 -top-16 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                <div>
                <span className="text-orange-300 uppercase tracking-wide font-semibold">
                    Need Immediate Help?
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                    Speak With Our
                    <span className="text-secondary">
                    {" "}Admission Team
                    </span>
                </h2>

                <p className="text-slate-300 mt-4 text-lg max-w-2xl">
                    Call or WhatsApp us directly for admission guidance,
                    fee details and school information.
                </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                <a
                    href={`tel:${config?.phoneNumber}`}
                    className="bg-secondary text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition text-center no-underline"
                >
                    📞 Call School
                </a>

                <a
                    href={`https://wa.me/${config?.phoneNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition text-center no-underline"
                >
                    💬 WhatsApp
                </a>

                </div>
            </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;