import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import DarkBlue_bg from "./DarkBlue_bg";
import logo from "../assets/images/footer_logo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative text-gray-300 text-sm overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DarkBlue_bg />
      </div>

      <div className="border-b border-gray-700 py-6 sm:py-8 text-center px-4">
        <p className="mb-3 sm:mb-4 text-gray-200 font-medium text-base sm:text-lg">
          Subscribe for service updates and special offers.
        </p>
        <div className="flex justify-center flex-wrap gap-2">
          <input
            type="email"
            placeholder="info@example.com"
            className="px-3 sm:px-4 py-2 w-full max-w-xs sm:w-64 rounded-l bg-white focus:outline-none text-black text-sm sm:text-base"
          />
          <button className="bg-[#14b8a6] hover:bg-[#0f9a8a] px-3 sm:px-4 py-2 rounded-r text-white font-semibold text-sm sm:text-base transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-6 lg:px-15 border-b border-gray-700">
        <div className="flex w-60 items-start justify-center sm:justify-start">
          <NavLink
            to="/"
            className="flex items-center gap-2 sm:gap-3 group transition-all duration-300"
          >
            {/* Logo Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Riyadh Repair Services Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col justify-center leading-[1.1]">
              <h1 className="text-[18px] sm:text-[22px] font-extrabold text-[#14b8a6] tracking-wide group-hover:text-[#0d9488] transition-colors">
                RIYADH
              </h1>
              <h2 className="text-[14px] sm:text-[18px] font-semibold text-white">
                REPAIR SERVICES
              </h2>
              <h3 className="hidden sm:block text-[12px] text-gray-400 italic leading-tight">
                Don't Replace – Repair with Experts
              </h3>
            </div>
          </NavLink>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-[#14b8a6] transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#14b8a6] transition-colors">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#14b8a6] transition-colors">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                Refrigerator Repair
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                Automatic Washing Machine
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                Semi-Automatic Washing Machine
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                Installation Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                Maintenance Plans
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            Our Blogs
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                Appliance Care Tips
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                Maintenance Guide
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                Energy Efficiency
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                View All Blogs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1 sm:mt-0" />
              <span className="text-sm sm:text-base">Rakar Service Center, Riyadh, KSA</span>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-5 h-5 text-[#14b8a6] flex-shrink-0" />
              <a 
                href="tel:+966557236549"
                className="hover:text-[#14b8a6] transition-colors text-sm sm:text-base"
              >
                +966 557 236 549
              </a>
            </li>
            <li className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
              <Mail className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1 sm:mt-0" />
              <a
                href="mailto:contact@riyadhrepairingservices.com"
                className="hover:text-[#14b8a6] transition-colors text-sm sm:text-base break-all"
              >
                contact@riyadhrepairingservices.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-16 py-4 text-gray-400 text-xs space-y-3 sm:space-y-0 gap-4">
        <p className="text-center sm:text-left">
          © 2024 Rakar Appliance Services. All Rights Reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <NavLink to="/terms" className="hover:text-[#14b8a6] transition-colors">
            Terms of Service
          </NavLink>
          <NavLink to="/privacy" className="hover:text-[#14b8a6] transition-colors">
            Privacy Policy
          </NavLink>
        </div>

        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;