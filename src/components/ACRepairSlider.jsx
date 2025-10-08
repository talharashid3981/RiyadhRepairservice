import React, { useState, useEffect } from "react";
import { Wrench, Snowflake, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import sliderImg1 from "../assets/images/sliderImg1.jpeg";
import hero_arrow2 from "../assets/images/hero_arrow2.png";

const ACRepairSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
      welcomeText: t("acRepairSlider.slides.0.welcomeText"),
      title: t("acRepairSlider.slides.0.title"),
      highlightText: t("acRepairSlider.slides.0.highlightText"),
      titleEnd: t("acRepairSlider.slides.0.titleEnd"),
      description: t("acRepairSlider.slides.0.description"),
      image: sliderImg1,
      alt: "Washing Machine Repair Technician in Riyadh",
    },
    {
      icon: <Snowflake className="w-5 h-5 sm:w-6 sm:h-6" />,
      welcomeText: t("acRepairSlider.slides.1.welcomeText"),
      title: t("acRepairSlider.slides.1.title"),
      highlightText: t("acRepairSlider.slides.1.highlightText"),
      titleEnd: t("acRepairSlider.slides.1.titleEnd"),
      description: t("acRepairSlider.slides.1.description"),
      image: sliderImg1,
      alt: "Professional Refrigerator Repair Services in Riyadh",
    },
    {
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      welcomeText: t("acRepairSlider.slides.2.welcomeText"),
      title: t("acRepairSlider.slides.2.title"),
      highlightText: t("acRepairSlider.slides.2.highlightText"),
      titleEnd: t("acRepairSlider.slides.2.titleEnd"),
      description: t("acRepairSlider.slides.2.description"),
      image: sliderImg1,
      alt: "Appliance Maintenance Programs in Riyadh",
    },
  ];

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative lg:mt-20 w-full h-[650px] sm:min-h-[700px] md:h-[400px] lg:min-h-[600px] overflow-hidden rounded-b-[30px] sm:rounded-b-[40px] lg:rounded-b-[50px]"
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundColor: "#f9fafb",
      }}
      aria-label="Washing Machine and Refrigerator Repair Services in Riyadh"
    >
      <h1 className="sr-only">
        Washing Machine and Refrigerator Repair Services in Riyadh – Rakar Appliance Experts
      </h1>

      {slides.map((slide, index) => (
        <article
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col justify-center ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 lg:flex-row items-center justify-between h-auto  px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
            <div className="  z-10 text-center lg:text-left ">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#14b8a6] to-[#0d9488] rounded-lg flex items-center justify-center text-white shadow-lg">
                  {slide.icon}
                </div>
                <span className="text-xs sm:text-sm text-blue-900 uppercase tracking-wider font-semibold border-b-2 border-[#14b8a6] pb-1">
                  {slide.welcomeText}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-blue-950 leading-tight mb-4 sm:mb-6">
                {slide.title} <br />
                <span className="text-[#14b8a6]">{slide.highlightText}</span>{" "}
                {slide.titleEnd}
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
                {slide.description}
              </p>

              <div className="flex flex-row sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 relative">
                <Link
                  to="/services"
                  className="w-full sm:w-auto px-2 sm:px-8 py-3 sm:py-4 bg-blue-950 text-white rounded-full font-semibold hover:bg-blue-900 transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {t("acRepairSlider.buttons.allServices")} <FaArrowRightLong />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 bg-[#14b8a6] text-white rounded-full font-semibold hover:bg-[#0f9a8a] transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {t("acRepairSlider.buttons.contactUs")} <FaArrowRightLong />
                </Link>

                <img
                  src={hero_arrow2}
                  className="absolute bottom-[15px] right-25 w-16 h-14 sm:w-20 sm:h-16 lg:w-24 lg:h-20 hidden xl:block"
                  alt="Arrow decorative graphic"
                  loading="lazy"
                />
              </div>
            </div>

            {/* --- RIGHT IMAGE --- */}
            <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] xl:w-[460px] xl:h-[460px]">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-b-[80px] sm:rounded-b-[120px] lg:rounded-b-[160px] shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* --- NEXT BUTTON --- */}
      <div className="absolute bottom-[50%] right-2 sm:right-4 z-20">
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#101840af] text-white rounded-full flex items-center justify-center hover:bg-[#101840] transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Next Slide"
        >
          <FaArrowRightLong className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* --- PAGINATION --- */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#14b8a6] w-6 sm:w-8"
                : "bg-gray-300 hover:bg-gray-400 w-2 sm:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ACRepairSlider;