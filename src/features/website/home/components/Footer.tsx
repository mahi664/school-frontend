import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaYoutube
} from "react-icons/fa";
import { useSchoolConfig } from "../../../../context/SchoolConfigContext"

const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Admissions", to: "/admissions" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  const { config } = useSchoolConfig();

  return (
    <footer className="text-white pt-20 pb-8 border-t border-white/10 w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #142B6F 0%, #1E3A8A 50%, #0F172A 100%" }}>
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* School Info */}
          <div>
            <h3 className="text-2xl font-bold leading-tight break-words">
              <span className="text-secondary">
                Nathsagar English
              </span>
              <br />
              <span className="text-white">
                Medium School, Ghotan
              </span>
            </h3>

            <p className="text-slate-300 mt-5 leading-relaxed break-words text-sm sm:text-base">
              Building young minds through quality English education,
              discipline, values, and holistic development since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-slate-300 hover:text-secondary transition duration-300 hover:translate-x-1"
                  >
                    <FaChevronRight className="text-xs" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h4>

            <div className="space-y-5 text-slate-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span>{config?.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-secondary" />
                <span>{config?.phoneNumber}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-secondary" />
                <span>{config?.email}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Follow Us
            </h4>

            <p className="text-slate-300 mb-5">
              Stay connected with school updates and activities.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/nathsagarghotan"
                className="w-14 h-14 rounded-full bg-slate-500 hover:bg-secondary flex items-center justify-center text-white transition duration-300 hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.instagram.com/nemsg_2009?igsh=MWtsYWI1eWR3YmxuaA=="
                className="w-14 h-14 rounded-full bg-slate-500 hover:bg-secondary flex items-center justify-center text-white transition duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://youtube.com/@nathsagarenglishmediumschoolgh?si=tCirWCUUUa8R7Vgn"
                className="w-14 h-14 rounded-full bg-slate-500 hover:bg-secondary flex items-center justify-center text-white transition duration-300 hover:scale-110"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-16 pt-8 text-center">
          <p className="text-slate-400 mt-5 leading-relaxed text-center px-4 break-words text-sm sm:text-base">
            © 2026 Nathsagar English Medium School, Ghotan.
            <br className="sm:hidden" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;