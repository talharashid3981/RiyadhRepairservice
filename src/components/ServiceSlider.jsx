import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiTool, FiWind, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TbAirConditioning } from "react-icons/tb";
import { useTranslation } from "react-i18next";

import fridge_installation from "../assets/images/fridge_installation.webp";
import Fridge_Repair_1 from "../assets/images/Fridge_Repair_1.jpg";
import emergency_services from "../assets/images/emergency_services.webp";
import washing_machine_2 from "../assets/images/washing_machine_2.jpg";
import maintenance_services_1 from "../assets/images/maintenance_services_1.jpeg";
import frdge2 from "../assets/images/frdge2.jpg";

const ServiceSlider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);
  const swiperRef = useRef(null);

  const services = [
    {
      title: t("serviceSlider.services.airConditioning.title"),
      description: t("serviceSlider.services.airConditioning.description"),
      image: washing_machine_2,
      icon: <TbAirConditioning className="text-3xl text-white" />,
    },
    {
      title: t("serviceSlider.services.heatPump.title"),
      description: t("serviceSlider.services.heatPump.description"),
      image: Fridge_Repair_1,
      icon: <FiTool className="text-3xl text-white" />,
    },
    {
      title: t("serviceSlider.services.ventilation.title"),
      description: t("serviceSlider.services.ventilation.description"),
      image: maintenance_services_1,
      icon: <FiWind className="text-3xl text-white" />,
    },
    {
      title: t("serviceSlider.services.installation.title"),
      description: t("serviceSlider.services.installation.description"),
      image: fridge_installation,
      icon: <FiWind className="text-3xl text-white" />,
    },
    {
      title: t("serviceSlider.services.maintenance.title"),
      description: t("serviceSlider.services.maintenance.description"),
      image: frdge2,
      icon: <FiWind className="text-3xl text-white" />,
    },
    {
      title: t("serviceSlider.services.repair.title"),
      description: t("serviceSlider.services.repair.description"),
      image: emergency_services,
      icon: <FiWind className="text-3xl text-white" />,
    },
  ];

  return (
    <div className="w-full py-10 flex flex-col items-center">
      {/* 🔥 FIXED: Better max-width for large screens */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="w-full max-w-7xl"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex + 1);
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white mb-5 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center min-h-[400px] group hover:shadow-2xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative w-full h-[230px] overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Circle Icon */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0a1a3c] p-4 rounded-full shadow-lg group-hover:bg-[#14b8a6] transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 pb-6 px-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0a1a3c] mb-3 group-hover:text-[#14b8a6] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed overflow-hidden line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 FIXED: Bottom Controls with better styling */}
      <div className="flex items-center gap-4 sm:gap-6 mt-6">
        {/* Prev Button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 sm:p-3 rounded-full bg-[#0a1a3c] text-white border-2 border-[#0a1a3c] hover:bg-[#14b8a6] hover:border-[#14b8a6] cursor-pointer transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Counter */}
        <div className="text-white text-xl sm:text-2xl font-semibold">
          {String(currentIndex).padStart(2, "0")} /{" "}
          <span className="text-[#14b8a6]">
            {String(services.length).padStart(2, "0")}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 sm:p-3 rounded-full bg-[#0a1a3c] text-white border-2 border-[#0a1a3c] hover:bg-[#14b8a6] hover:border-[#14b8a6] cursor-pointer transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;