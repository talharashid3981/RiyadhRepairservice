import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiPhone } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import ACRepairSlider from "../components/ACRepairSlider";
import pattern_bg_5 from "../assets/images/pattern_bg_5.png";
import video_2 from "../assets/images/video_2.jpg";
import pattern_bg_6 from "../assets/images/pattern_bg_6.jpg";
import title_icon2 from "../assets/images/title_icon2.png";
import frdge2 from "../assets/images/frdge2.jpg";
import cold_storage from "../assets/images/cold_storage.jpeg";
import industrial_equipment from "../assets/images/industrial_equipment.jpeg";
import counter_card_2 from "../assets/images/counter_card_2.png";
import counter_card_3 from "../assets/images/counter_card_3.png";
import counter_card_4 from "../assets/images/counter_card_4.png";
import counter_card_5 from "../assets/images/counter_card_5.png";
import fridge_installation from "../assets/images/fridge_installation.jpg";
import refrigerator_services from "../assets/images/refrigerator_services.png";
import commercial_laundry from "../assets/images/commercial_laundry.jpg";
import home_appliance_repair from "../assets/images/home_appliance_repair.png";
import washing_machine_repear_1 from "../assets/images/washing_machine_repear_1.jpg";
import Commercial_Refrigeraion_1 from "../assets/images/Commercial_Refrigeraion_1.jpg";
import ServiceSlider from "../components/ServiceSlider";
import ContactQuote from "../components/ContactQuote";
import ClientRevew from "../components/ClientRevew";
import DarkBlue_bg from "../components/DarkBlue_bg";
import PricingPlans from "../components/PricingPlans";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("commercial");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Handle initial load
  useEffect(() => {
    setLoading(false);
  }, []);

  const firstSectionFeatures = [
    t("home.aboutSection.features.quality"),
    t("home.aboutSection.features.licensed"),
    t("home.aboutSection.features.pricing"),
  ];

  const servicesData = {
    commercial: t("projectsData.commercial", { returnObjects: true }).map(
      (service, index) => ({
        ...service,
        image: [commercial_laundry, Commercial_Refrigeraion_1, fridge_installation][index],
      })
    ),
    residential: t("projectsData.residential", { returnObjects: true }).map(
      (service, index) => ({
        ...service,
        image: [home_appliance_repair, refrigerator_services, frdge2][index],
      })
    ),
    industrial: t("projectsData.industrial", { returnObjects: true }).map(
      (service, index) => ({
        ...service,
        image: [industrial_equipment, cold_storage][index],
      })
    ),
  };

  // Close video modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <div className={`bg-[#E1E4E5] ${loading ? 'loading' : ''} overflow-hidden`} id="home">
      <ACRepairSlider />

      {/* ABOUT SECTION */}
      <section
        style={{
          backgroundImage: `url(${pattern_bg_5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-auto w-full py-8 sm:py-12 lg:py-16"
      >
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={title_icon2}
                alt="About Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-[22px]">
                {t("home.aboutSection.title")}
              </span>
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-[44px] font-bold leading-tight sm:leading-[40px] lg:leading-[55px] text-slate-900"
              style={{
                color: "rgb(16, 24, 64)",
                fontFamily: "sans-serif",
              }}
            >
              {t("home.aboutSection.heading")} <br />{" "}
              {t("home.aboutSection.headingLine2")}
            </h1>

            <p className="text-[#666666] text-sm sm:text-base lg:text-[16px] font-[500] pb-2">
              {t("home.aboutSection.description")}
            </p>

            <ul className="space-y-2 sm:space-y-3">
              {firstSectionFeatures.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-black"
                >
                  <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#14b8a6] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-start sm:items-center gap-4 flex-wrap pt-3">
              <Link
                to="/about"
                className="bg-slate-900 text-white flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-slate-800 transition text-sm sm:text-base"
              >
                {t("home.aboutSection.buttons.findMore")} <FaArrowRightLong />
              </Link>
              <a
                href="tel:+966598001569"
                className="flex items-center gap-2 text-[#14b8a6] cursor-pointer font-bold hover:scale-105 transition-transform"
              >
                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="text-white bg-[#14b8a6] px-2 py-2 sm:px-3 sm:py-3 rounded-full text-xl sm:text-[28px]">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[14px] text-[#14b8a6] font-[600]">
                      {t("home.aboutSection.buttons.contact")}
                    </div>
                    <div className="text-black text-sm sm:text-base font-bold hover:text-[#14b8a6] transition-colors">
                      +966 598 001 569
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-3xl sm:rounded-[50px] p-3 sm:p-5 overflow-hidden w-full">
              <img
                src={washing_machine_repear_1}
                alt="Technician repairing washing machine"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* PROJECTS SECTION */}
      <section
        style={{
          backgroundImage: `url(${pattern_bg_6})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-auto w-full py-8 sm:py-12 lg:py-16 px-5 sm:px-6 lg:px-15"
      >
        <div className="flex items-center gap-3">
          <img
            src={title_icon2}
            alt="About Icon"
            className="w-6 h-6 sm:w-8 sm:h-8 brightness-0 invert"
          />
          <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-[22px]">
            {t("home.servicesSection.title")}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center sm:justify-between text-white mt-5">
          <h1 className="text-[40px] font-[700] leading-[45px]">
            {t("home.servicesSection.heading")}
          </h1>
          <div className="flex sm:justify-end">
            <Link
              to="/services"
              className="flex gap-4 items-center bg-[#14b8a6] rounded-3xl px-5 py-3 hover:bg-[#0f9a8a] transition"
            >
              {t("home.servicesSection.viewAll")} <FaArrowRightLong />
            </Link>
          </div>
        </div>

        <div>
          <ServiceSlider />
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section
        style={{
          backgroundImage: `url(${pattern_bg_5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-auto w-full py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-black">
          <div className="flex items-center gap-3">
            <img
              src={title_icon2}
              alt="About Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 brightness-0"
            />
            <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-2xl">
              {t("home.projectsSection.title")}
            </span>
          </div>
        </div>

        {/* Heading + Buttons Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 sm:gap-6 mb-6">
          {/* Heading Section */}
          <div className="text-center mt-4 lg:text-left">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-black">
              {t("home.projectsSection.heading")}
            </h1>
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-800">
              {t("home.projectsSection.headingLine2")}
            </h2>
          </div>

          {/* Category Buttons Section */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4">
            {["commercial", "residential", "industrial"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md font-medium border transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#14b8a6] text-white border-[#14b8a6]"
                    : "bg-transparent text-gray-700 border-gray-300 hover:bg-[#14b8a6] hover:text-white"
                }`}
              >
                {t(`home.projectsSection.categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData[selectedCategory].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 1440 120"
                  preserveAspectRatio="none"
                  style={{ height: "35px" }}
                >
                  <path
                    d="M0,0 Q360,130 750,60 T1440,0 L1440,120 L0,120 Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="px-5 pb-8 pt-4 text-center flex flex-col justify-between h-auto sm:h-64">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {service.description}
                </p>
                <button className="bg-[#14b8a6] mx-auto cursor-pointer text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:bg-[#0f9a8a] shadow-md">
                  {t("home.projectsSection.exploreCaseStudy")}
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        style={{
          backgroundImage: `url("${video_2}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative h-auto w-full flex flex-col justify-between items-center text-center px-6 pt-20"
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="relative mb-15 mt-20 w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white cursor-pointer duration-500"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

            <span className="absolute inset-1 rounded-full border border-white animate-ping"></span>
            <span className="absolute inset-0 rounded-full border-2 border-white animate-ping"></span>
          </button>

          <h2 className="max-w-[700px] mx-auto text-white text-3xl sm:text-4xl md:text-[38px] font-bold leading-tight">
            <span className="text-[#14b8a6]">
              {t("home.videoSection.heading1")}
            </span>{" "}
            {t("home.videoSection.heading2")}
          </h2>
          <p className="text-white mt-4 max-w-2xl text-sm md:text-base">
            {t("home.videoSection.description")}
          </p>
        </div>
        <a href="#" className="my-5 text-bold text-white hover:text-[#14b8a6]">
          {t("home.videoSection.downloadCatalog")}
        </a>
        
        {/* Stats Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto bg-[#101840] mt-20 rounded-t-lg overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 py-5">
            <div className="flex flex-row items-center justify-center px-4 border-b md:border-b-0 md:border-r-2 border-gray-700">
              <img
                src={counter_card_5}
                alt="Projects Icon"
                className="w-13 h-13"
              />
              <div className="flex flex-col items-start pl-4">
                <h3 className="text-white text-3xl md:text-4xl font-bold">
                  1250+
                </h3>
                <p className="text-white text-xs md:text-[12px] font-[00]">
                  {t("home.videoSection.stats.projects")}
                </p>
              </div>
            </div>
            
            <div className="flex flex-row items-center justify-center px-4 border-b md:border-b-0 md:border-r-2 border-gray-700">
              <img
                src={counter_card_2}
                alt="Clients Icon"
                className="w-13 h-13"
              />
              <div className="flex flex-col items-start pl-4">
                <h3 className="text-white text-3xl md:text-4xl font-bold">
                  170+
                </h3>
                <p className="text-white text-xs md:text-[12px] font-[00]">
                  {t("home.videoSection.stats.clients")}
                </p>
              </div>
            </div>
            
            <div className="flex flex-row items-center justify-center px-4 border-b md:border-b-0 md:border-r-2 border-gray-700">
              <img
                src={counter_card_3}
                alt="Team Icon"
                className="w-13 h-13"
              />
              <div className="flex flex-col items-start pl-4">
                <h3 className="text-white text-3xl md:text-4xl font-bold">
                  80+
                </h3>
                <p className="text-white text-xs md:text-[12px] font-[00]">
                  {t("home.videoSection.stats.team")}
                </p>
              </div>
            </div>
            
            <div className="flex flex-row items-center justify-center px-4">
              <img
                src={counter_card_4}
                alt="Awards Icon"
                className="w-13 h-13"
              />
              <div className="flex flex-col items-start pl-4">
                <h3 className="text-white text-3xl md:text-4xl font-bold">
                  158+
                </h3>
                <p className="text-white text-xs md:text-[12px] font-[00]">
                  {t("home.videoSection.stats.awards")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
            onClick={() => setIsOpen(false)}
          >
            <div 
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white text-3xl hover:text-[#14b8a6] transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close video"
              >
                ✕
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DyDfgMOUjCI?autoplay=1"
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section>
        <ContactQuote />
      </section>

      {/* CLIENT REVIEW SECTION */}
      <section>
        <ClientRevew />
      </section>

      {/* PRICING SECTION */}
      <section className="relative bg-[#E1E4E5] py-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <span className="text-sm md:text-base font-semibold text-white bg-[#14b8a6] px-5 py-2 rounded-full uppercase tracking-widest inline-block shadow-md mb-4">
            {t("pricingPlans.header.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4">
            {t("pricingPlans.header.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {t("pricingPlans.header.subtitle")}
          </p>
        </div>

        <PricingPlans />
        
        <div className="text-center mt-16">
          <p className="text-gray-600">
            {t("pricingPlans.footer.text")}{" "}
            <NavLink
              to="/contact"
              className="text-[#14b8a6] font-semibold hover:underline"
            >
              {t("pricingPlans.footer.linkText")}
            </NavLink>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;