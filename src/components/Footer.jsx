import React, { useState } from "react";
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
import emailjs from 'emailjs-com';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_46i194v', // Your EmailJS service ID
      'template_drbrr05', // Your EmailJS template ID
      {
        to_email: 'contact@riyadhrepairingservices.com',
        from_email: email,
        subject: 'New Newsletter Subscription',
        message: `New subscriber: ${email}`
      },
      '1QgmRM5GmPIm8hxUV' // Your EmailJS public key
    )
    .then(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    })
    .catch((error) => {
      console.error('Subscription Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    });
  };

  return (
    <footer className="relative text-gray-300 text-sm overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <DarkBlue_bg />
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-700 py-6 sm:py-8 text-center px-4">
        <p className="mb-3 sm:mb-4 text-gray-200 font-medium text-base sm:text-lg">
          {t("footer.subscribe.title")}
        </p>
        <form onSubmit={handleSubscribe} className="flex justify-center flex-wrap gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("footer.subscribe.placeholder")}
            className="px-3 sm:px-4 py-2 flex-1 min-w-[200px] rounded-l bg-white focus:outline-none text-black text-sm sm:text-base"
            required
          />
          <button 
            type="submit"
            className="bg-[#14b8a6] hover:bg-[#0f9a8a] px-4 sm:px-6 py-2 rounded-r text-white font-semibold text-sm sm:text-base transition-colors"
          >
            {t("footer.subscribe.button")}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-2 text-green-400 text-sm">{t("footer.subscribe.successMessage")}</p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-red-400 text-sm">{t("footer.subscribe.errorMessage")}</p>
        )}
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 border-b border-gray-700 max-w-[1600px] mx-auto">
        {/* Logo Section */}
        <div className="flex w-full sm:w-60 items-start justify-center sm:justify-start">
          <NavLink
            to="/"
            className="flex items-center gap-2 sm:gap-3 group transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Riyadh Repair Services Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-[1.1]">
              <h1 className="text-[18px] sm:text-[22px] font-extrabold text-[#14b8a6] tracking-wide group-hover:text-[#0d9488] transition-colors whitespace-nowrap">
                RIYADH
              </h1>
              <h2 className="text-[14px] sm:text-[18px] font-semibold text-white">
                REPAIR SERVICES
              </h2>
              <h3 className="hidden sm:block text-[12px] text-gray-400 italic leading-tight">
                {t("footer.tagline")}
              </h3>
            </div>
          </NavLink>
        </div>

        {/* Company Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            {t("footer.company.title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.company.items.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.company.items.services")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.company.items.about")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.company.items.contact")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            {t("footer.ourServices.title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourServices.items.refrigerator")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourServices.items.washing")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourServices.items.semiAutomatic")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourServices.items.installation")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourServices.items.maintenance")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Blog Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            {t("footer.ourBlogs.title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourBlogs.items.careTips")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourBlogs.items.maintenanceGuide")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourBlogs.items.energyEfficiency")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-[#14b8a6] transition-colors">
                {t("footer.ourBlogs.items.viewAll")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-white text-lg sm:text-[22px] font-semibold mb-3">
            {t("footer.contactUs.title")}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
              <a
                href="https://maps.app.goo.gl/6FgEyFnvMN1KQhZX9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start sm:items-center gap-2 hover:text-[#14b8a6] transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#14b8a6]" />
                <span itemProp="streetAddress">
                  {t("footer.contactUs.location")}
                </span>
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-5 h-5 text-[#14b8a6] flex-shrink-0" />
              <a 
                href="tel:+966598001569"
                className="hover:text-[#14b8a6] transition-colors text-sm sm:text-base"
              >
                {t("footer.contactUs.phone")}
              </a>
            </li>
            <li className="flex items-start sm:items-center justify-center sm:justify-start gap-2">
              <Mail className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-1 sm:mt-0" />
              <a
                href="mailto:contact@riyadhrepairingservices.com"
                className="hover:text-[#14b8a6] transition-colors text-sm sm:text-base break-all"
              >
                {t("footer.contactUs.email")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-4 text-gray-400 text-xs space-y-3 sm:space-y-0 gap-4 max-w-[1600px] mx-auto">
        <p className="text-center sm:text-left">
          {t("footer.copyright")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <NavLink to="/terms" className="hover:text-[#14b8a6] transition-colors">
            {t("footer.terms")}
          </NavLink>
          <NavLink to="/privacy" className="hover:text-[#14b8a6] transition-colors">
            {t("footer.privacy")}
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