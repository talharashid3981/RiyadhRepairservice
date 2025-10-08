import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Testi_Sec from "../assets/images/testi_sec.jpg";

const ClientReview = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: t("clientReview.testimonials.0.name"),
      role: t("clientReview.testimonials.0.role"),
      review: t("clientReview.testimonials.0.review"),
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: t("clientReview.testimonials.1.name"),
      role: t("clientReview.testimonials.1.role"),
      review: t("clientReview.testimonials.1.review"),
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: t("clientReview.testimonials.2.name"),
      role: t("clientReview.testimonials.2.role"),
      review: t("clientReview.testimonials.2.review"),
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: t("clientReview.testimonials.3.name"),
      role: t("clientReview.testimonials.3.role"),
      review: t("clientReview.testimonials.3.review"),
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: t("clientReview.testimonials.4.name"),
      role: t("clientReview.testimonials.4.role"),
      review: t("clientReview.testimonials.4.review"),
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: t("clientReview.testimonials.5.name"),
      role: t("clientReview.testimonials.5.role"),
      review: t("clientReview.testimonials.5.review"),
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slider after 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#0a0d2e]">
      {/* Left side - Content */}
      <div className="relative flex items-center p-8 lg:p-16">
        <div className="max-w-2xl w-full">
          {/* Certificate Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-[#14b8a6] rounded flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              </svg>
            </div>
            <span className="text-[#14b8a6] font-semibold text-lg">
              {t("clientReview.badge")}
            </span>
          </div>

          <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-8 leading-tight">
            {t("clientReview.heading")}
          </h2>

          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-[#14b8a6] text-[#14b8a6]"
              />
            ))}
          </div>

          {/* Animated Review */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {testimonials[current].review}
              </p>

              <div>
                <h3 className="text-white text-[28px] font-semibold mb-1">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-400 text-sm font-bold">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-white">
              <span className="text-2xl font-bold">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-[#14b8a6] mx-2">/</span>
              <span className="text-gray-400">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Avatar Stack */}
        <div className="absolute -right-20 z-90 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          {testimonials.map((t, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                index === current
                  ? "border-[#14b8a6] scale-110 opacity-100"
                  : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative h-full lg:min-h-screen">
        <img
          src={Testi_Sec}
          alt="Appliance Repair Technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0d2e]/20 to-[#0a0d2e]"></div>
      </div>
    </div>
  );
};

export default ClientReview;