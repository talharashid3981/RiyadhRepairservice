import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheckCircle, FiPhone } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import pattern_bg_5 from "../assets/images/pattern_bg_5.png";
import title_icon2 from "../assets/images/title_icon2.png";
import about_3 from "../assets/images/about_3.jpg";

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
      className="h-auto w-full py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto px-7">
        <div className="w-full space-y-4 sm:space-y-5 mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center gap-3">
            <img
              src={title_icon2}
              alt="About Icon"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-[22px]">
              {t("home.secondSection.title")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="order-1 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-[700] leading-tight sm:leading-[45px] text-slate-900">
              {t("home.secondSection.heading")} <br />{" "}
              {t("home.secondSection.headingLine2")}
            </h1>
            <p className="text-sm sm:text-base lg:text-[16px] font-[500] text-gray-500 my-4 sm:my-6">
              {t("home.secondSection.description")}
            </p>
            <ul className="space-y-2 sm:space-y-3 my-6 sm:my-8">
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
            <div className="flex sm:flex-row items-start sm:items-center gap-5 flex-wrap pt-3">
              <Link
                to="/about"
                className="bg-slate-900 text-white flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-slate-800 transition text-sm sm:text-base"
              >
                {t("home.secondSection.buttons.findMore")} <FaArrowRightLong />
              </Link>
              <a
                href="tel:+966598001569"
                className="flex items-center gap-2 text-[#14b8a6] cursor-pointer font-bold"
              >
                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="text-white bg-[#14b8a6] px-2 py-2 sm:px-3 sm:py-3 rounded-full text-xl sm:text-[28px]">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[14px] text-[#14b8a6] font-[600]">
                      {t("home.secondSection.buttons.contact")}
                    </div>
                    <div className="text-black text-sm sm:text-base font-bold hover:text-[#14b8a6]">
                      +966598001569
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="order-2 lg:order-2 p-3 sm:p-5 overflow-hidden w-full h-full">
            <img
              src={about_3}
              alt="Appliance repair technician"
              className="w-full h-auto object-cover rounded-3xl sm:rounded-[50%/25%]"
            />
          </div>

          <div className="order-3 lg:order-3">
            <div className="sm:px-[13px]">
              <div className="mx-auto space-y-5 sm:space-y-12 lg:space-y-10">
                <div className="flex items-start gap-6 lg:gap-8 relative">
                  <div className="relative mt-5 flex flex-col items-center flex-shrink-0">
                    <div className="bg-[#14b8a6] z-10 text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-8 sm:ring-12 ring-[#99f6e4]">
                      {t("home.processSection.step1.number")}
                    </div>
                    <div className="absolute top-14 sm:top-16 text-[6px] sm:text-[8px] leading-tight">
                      |<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|<br />|
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">
                      {t("home.processSection.step1.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      {t("home.processSection.step1.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 lg:gap-8 relative">
                  <div className="mt-5 flex flex-col items-center flex-shrink-0">
                    <div className="bg-[#14b8a6] text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-8 sm:ring-12 ring-[#99f6e4]">
                      {t("home.processSection.step2.number")}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">
                      {t("home.processSection.step2.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
                      {t("home.processSection.step2.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 lg:gap-8 relative">
                  <div className="mt-5 flex flex-col items-center flex-shrink-0">
                    <div className="bg-[#14b8a6] text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ring-8 sm:ring-12 ring-[#99f6e4]">
                      {t("home.processSection.step3.number")}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800">
                      {t("home.processSection.step3.title")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-2">
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