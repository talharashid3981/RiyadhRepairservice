import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle, FiPhone } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import pattern_bg_5 from "../assets/images/pattern_bg_5.png";
import title_icon2 from "../assets/images/title_icon2.png";
import Trusted_Appliance_Repair from "../assets/images/Trusted_Appliance_Repair.webp";

const ServicesSection = () => {
  const { t } = useTranslation();

  const secondSectionFeatures = [
    t("home.secondSection.features.quality"),
    t("home.secondSection.features.licensed"),
    t("home.secondSection.features.pricing"),
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${pattern_bg_5})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-auto w-full py-8 sm:py-12 lg:py-16"
    >
      {/* 🔥 FIXED: Consistent Padding Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="w-full space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-center gap-3">
              <img
                src={title_icon2}
                alt="About Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
                width="32"
                height="32"
              />
              <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-[22px]">
                {t("home.secondSection.title")}
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Left Column - Text Content */}
            <div className="order-1 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[700] leading-tight sm:leading-[45px] text-slate-900">
                {t("home.secondSection.heading")} <br />{" "}
                {t("home.secondSection.headingLine2")}
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] font-[500] text-gray-500 my-4 sm:my-6">
                {t("home.secondSection.description")}
              </p>
              
              {/* Features List */}
              <ul className="space-y-2 sm:space-y-3 my-6 sm:my-8" role="list">
                {secondSectionFeatures.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 text-black"
                  >
                    <FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#14b8a6] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-[600]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3">
                <Link
                  to="/about"
                  className="bg-slate-900 text-white flex items-center gap-2 sm:gap-3 px-5 py-3 rounded-full hover:bg-slate-800 transition text-sm sm:text-base whitespace-nowrap"
                >
                  {t("home.secondSection.buttons.findMore")} <FaArrowRightLong />
                </Link>

                <a
                  href="tel:+966598001569"
                  className="flex items-center gap-2 sm:gap-3 text-[#14b8a6] cursor-pointer font-bold hover:scale-105 transition-transform"
                >
                  <div className="text-white bg-[#14b8a6] p-3 rounded-full text-xl sm:text-[26px] flex items-center justify-center">
                    <FiPhone />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs sm:text-sm text-[#14b8a6] font-semibold">
                      {t("home.secondSection.buttons.contact")}
                    </div>
                    <div className="text-black text-sm sm:text-base font-bold hover:text-[#14b8a6] transition-colors">
                      +966 598 001 569
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Middle Column - Image */}
            <div className="order-2 lg:order-2 p-3 sm:p-5 overflow-hidden w-full h-full">
              <img
                src={Trusted_Appliance_Repair}
                alt="Professional appliance repair technician working on equipment"
                className="w-full h-full object-cover rounded-3xl sm:rounded-[50%/25%]"
                loading="lazy"
                width="400"
                height="400"
              />
            </div>

            {/* Right Column - Process Steps */}
            <div className="order-3 lg:order-3">
              <div className="space-y-8 sm:space-y-10">
                {/* Step 1 */}
                <div className="flex items-start gap-4 sm:gap-6 relative">
                  <div className="relative mt-2 flex flex-col items-center flex-shrink-0">
                    <div className="bg-[#14b8a6] z-10 text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-8 sm:ring-12 ring-[#99f6e4]">
                      {t("home.processSection.step1.number")}
                    </div>
                    {/* Dotted Line */}
                    <div className="absolute top-12 sm:top-14 h-20 sm:h-24 border-l-2 border-dashed border-[#14b8a6]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                      {t("home.processSection.step1.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t("home.processSection.step1.description")}
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 sm:gap-6 relative">
                  <div className="relative mt-2 flex flex-col items-center flex-shrink-0">
                    <div className="bg-[#14b8a6] text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-8 sm:ring-12 ring-[#99f6e4]">
                      {t("home.processSection.step2.number")}
                    </div>
                    {/* Dotted Line */}
                    <div className="absolute top-12 sm:top-14 h-20 sm:h-24 border-l-2 border-dashed border-[#14b8a6]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                      {t("home.processSection.step2.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t("home.processSection.step2.description")}
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 sm:gap-6 relative">
                  <div className="mt-2 flex flex-col items-center flex-shrink-0">
                    <div className="bg-[#14b8a6] text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-8 sm:ring-12 ring-[#99f6e4]">
                      {t("home.processSection.step3.number")}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                      {t("home.processSection.step3.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t("home.processSection.step3.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;