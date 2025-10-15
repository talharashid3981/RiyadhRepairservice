import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiPhone, FiGlobe, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/bg_remove_logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // 🔥 FIXED: Default to Arabic on first load
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (!savedLang) {
      i18n.changeLanguage("ar");
      localStorage.setItem("lang", "ar");
    } else {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('nav')) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // 🔥 FIXED: Menu Order - Home, Services, About, Blog, Contact
  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  // 🔥 FIXED: Service links now use translation keys
  const serviceLinks = [
    { name: t("nav.refrigerator_repair"), path: "/refrigerator-repair" },
    { name: t("nav.washing_machine_repair"), path: "/washing-machine-repair" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[100%] mx-auto px-4 sm:px-5 lg:px-10 xl:px-12 2xl:px-20 py-2  flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 sm:gap-3 group transition-all duration-300 flex-shrink-0"
        >
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Riyadh Repair Services Logo"
              className="h-10 sm:h-16 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-center min-w-0">
            <h1 className="text-base sm:text-lg md:text-[24px] leading-[1.1] font-extrabold text-[#14b8a6] tracking-wide group-hover:text-[#0d9488] transition-colors whitespace-nowrap">
              RIYADH
            </h1>
            <h2 className="text-sm sm:text-base md:text-[20px] leading-[1.2] font-bold text-black whitespace-nowrap">
              REPAIR SERVICES
            </h2>
            <h3 className="text-[10px] sm:text-xs md:text-[14px] font-[600] leading-[1.2] text-gray-500 italic whitespace-nowrap">
              Don't Replace – Repair with Experts
            </h3>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-[#0C1236] text-[15px] lg:text-[17px] font-medium">
          {/* 🔥 FIXED: Home Link First */}
          <li className="relative group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-[#14b8a6] after:w-full"
                    : "hover:text-[#14b8a6]"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#14b8a6] after:transition-all after:duration-300 ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 group-hover:after:w-full"
                }`
              }
            >
              {t("nav.home")}
            </NavLink>
          </li>

          {/* 🔥 FIXED: Services Dropdown - Second Position with Professional Design */}
          <li className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 transition-all duration-300 text-[#0C1236] hover:text-[#14b8a6] cursor-pointer"
            >
              {t("nav.services")}
              <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* 🔥 FIXED: Professional Dropdown with better styling */}
            <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 border border-gray-100">
              {serviceLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) => 
                    `block px-4 py-2 text-[#0C1236] hover:bg-[#f0fffe] hover:text-[#14b8a6] transition-colors cursor-pointer ${
                      isActive ? 'bg-[#f0fffe] text-[#14b8a6] font-semibold' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </li>

          {/* Other navigation links - About, Blog, Contact */}
          {navLinks.slice(1).map((link, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#14b8a6] after:w-full"
                      : "hover:text-[#14b8a6]"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#14b8a6] after:transition-all after:duration-300 ${
                    isActive
                      ? "after:w-full"
                      : "after:w-0 group-hover:after:w-full"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 flex-shrink-0">
          <a
            href="tel:+966598001569"
            className="hidden lg:flex items-center gap-2 text-[#0C1236] font-semibold text-sm whitespace-nowrap cursor-pointer hover:text-[#14b8a6] transition-colors"
          >
            <div className="bg-[#14b8a6] text-white p-2 rounded-full">
              <FiPhone className="text-base lg:text-lg" />
            </div>
            <span className="hidden xl:inline">+966598001569</span>
          </a>

          <div
            onClick={() => changeLang(i18n.language === "en" ? "ar" : "en")}
            className="relative flex items-center w-14 sm:w-16 lg:w-18 h-6 sm:h-7 bg-gray-200 rounded-full cursor-pointer transition-all duration-300 flex-shrink-0"
          >
            <span className="absolute left-2 sm:left-3 text-[10px] sm:text-xs font-semibold text-gray-700 select-none">
              EN
            </span>
            <span className="absolute right-2 sm:right-3 text-[10px] sm:text-xs font-semibold text-gray-700 select-none">
              AR
            </span>
            <div
              className={`absolute w-6 h-6 sm:w-7 sm:h-7 bg-[#14b8a6] rounded-full shadow-md flex items-center justify-center text-white transition-all duration-300 ${
                i18n.language === "en"
                  ? "translate-x-0"
                  : "translate-x-8 sm:translate-x-9 lg:translate-x-11"
              }`}
            >
              <FiGlobe className="text-sm sm:text-base lg:text-lg" />
            </div>
          </div>

          <button
            className="md:hidden text-[#14b8a6] text-2xl flex-shrink-0 z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-5 text-[#0C1236] text-base font-medium">
          {/* Home First */}
          <li className="w-full text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#14b8a6] font-semibold bg-gray-50"
                    : "hover:text-[#14b8a6] hover:bg-gray-50"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.home")}
            </NavLink>
          </li>

          {/* Mobile Services Dropdown - Second */}
          <li className="w-full border-t border-gray-100 pt-3">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-center gap-2 w-full py-2 text-[#0C1236] hover:text-[#14b8a6] hover:bg-gray-50 cursor-pointer"
            >
              {t("nav.services")}
              <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="flex flex-col gap-2 py-2 px-4 bg-gray-50">
                {serviceLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className={({ isActive }) => 
                      `text-sm py-1 cursor-pointer transition-colors ${
                        isActive 
                          ? 'text-[#14b8a6] font-semibold' 
                          : 'text-[#0C1236] hover:text-[#14b8a6]'
                      }`
                    }
                    onClick={() => {
                      setMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          {/* Other Links */}
          {navLinks.slice(1).map((link, index) => (
            <li key={index} className="w-full text-center">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 transition-colors cursor-pointer ${
                    isActive
                      ? "text-[#14b8a6] font-semibold bg-gray-50"
                      : "hover:text-[#14b8a6] hover:bg-gray-50"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li className="w-full px-4 pt-3 border-t border-gray-100">
            <a
              href="tel:+966598001569"
              className="flex items-center justify-center gap-2 text-[#0C1236] font-semibold py-2 cursor-pointer hover:text-[#14b8a6] transition-colors"
            >
              <div className="bg-[#14b8a6] text-white p-2 rounded-full">
                <FiPhone className="text-lg" />
              </div>
              <span>+966598001569</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;