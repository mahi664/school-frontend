import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {name: "Home", path: "/"},
  {name: "About", path: "/about"},
  {name: "Admissions", path: "/admissions"},
  {name: "Facilities", path: "/facilities"},
  {name: "Gallery", path: "/gallery"},
  {name: "Notices", path: "/notices"},
  {name: "Contact", path: "/contact"},
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + School Name */}
          <div className="flex items-center gap-3">
            <img
              src="/school-logo.png"
              alt="School Logo"
              className="h-14 w-14 object-contain"
            />

            <div>
              <h1 className="text-sm md:text-lg font-bold text-primary leading-tight">
                Nathsagar English Medium School
              </h1>

              <p className="text-xs text-slate-500">
                Ghotan, Tal-Shevgaon, Dist-Ahmednagar, 414502 Maharashtra
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
                <NavLink key={item.name} to={item.path} className={({ isActive }) =>
                `transition duration-300 hover:text-orange-500 ${
                    isActive ? "text-orange-500 font-semibold" : "text-slate-700"
                }`
                }>
                {item.name}
                </NavLink>
            ))}

            <button className="bg-secondary hover:bg-accent transition text-white px-5 py-2.5 rounded-full font-semibold shadow-md">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-primary" size={28} />
            ) : (
              <Menu className="text-primary" size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 hover:text-orange-500 ${
                      isActive ? "text-orange-500 font-semibold" : "text-slate-700"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                >
                  {item.name}
                </NavLink>
              ))}

              <button className="bg-secondary text-white py-3 rounded-full font-semibold mt-2">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;