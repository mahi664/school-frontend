import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";


function AdmissionBanner() {
  const [closed, setClosed] = useState(false);

  const banner = siteConfig.admissionBanner;

  if (!banner.enabled || closed) {
    return null;
  }

  return (
    <div className="bg-[#0B1F6D] text-white border-b border-orange-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3">

        {/* Left Content */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm md:text-base">

          <span className="font-semibold text-orange-300">
            {banner.text}
          </span>

          <span className="hidden sm:block text-slate-300">
            |
          </span>

          <span className="text-slate-200">
            {banner.subtitle}
          </span>

          {/* <span className="hidden md:block text-slate-400">
            Academic Year {banner.academicYear}
          </span> */}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 shrink-0">

          <Link
            to={banner.ctaLink}
            className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white text-sm px-4 py-1.5 rounded-full font-medium transition duration-300 no-underline"
          >
            {banner.ctaText}
          </Link>

          {banner.closable && (
            <button
              onClick={() => setClosed(true)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300"
              aria-label="Close Banner"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdmissionBanner;