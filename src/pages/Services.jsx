import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import breadcumb_bg from "../assets/images/breadcumb-bg.jpg";
import { ArrowRight } from "lucide-react";
import { BsTools } from "react-icons/bs";
import { FaTools, FaSnowflake } from "react-icons/fa";

import ContactQuote from "../components/ContactQuote.jsx";
import DarkBlue_bg from "../components/DarkBlue_bg.jsx";
import PricingPlans from "../components/PricingPlans.jsx";

// Gallery Images
import imagesgallery1 from "../assets/images/imagesgallery1.jpeg";
import imagesgallery2 from "../assets/images/imagesgallery2.jpg";
import imagesgallery3 from "../assets/images/imagesgallery3.jpg";
import imagesgallery4 from "../assets/images/imagesgallery4.png";
import about_3 from "../assets/images/about_3.jpg";

const Services = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const services = [
    {
      id: "01",
      icon: (
        <FaTools className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Automatic Washing Machine Repair",
      description: "Expert repair services for automatic washing machines of all brands. Fast diagnosis and repair with genuine parts and warranty coverage.",
    },
    {
      id: "02",
      icon: (
        <FaTools className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Semi-Automatic Washing Machine Repair",
      description: "Professional repair and maintenance services for semi-automatic washing machines. Quick turnaround and affordable pricing.",
    },
    {
      id: "03",
      icon: (
        <FaSnowflake className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />
      ),
      title: "Refrigerator Repair Services",
      description: "Complete refrigerator repair solutions including cooling issues, compressor problems, and electrical faults. All brands serviced.",
    },
  ];

  const images = [imagesgallery1, imagesgallery2, imagesgallery3, about_3, imagesgallery4];

  return (
    <div className="bg-[#E1E4E5]">
      {/* Banner */}
      <section>
        <div
          className="mt-15 w-full h-[330px] text-white rounded-b-4xl flex flex-col items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url(${breadcumb_bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center">
            <h1 className="text-[42px] md:text-[52px] font-bold mb-2 drop-shadow-lg">
              Our Services
            </h1>
            <div className="flex items-center justify-center gap-2 text-[18px] text-gray-200">
              <NavLink to="/" className="hover:text-[#99f6e4] transition-colors">
                Home
              </NavLink>
              <ArrowRight className="w-4 h-4 text-[#ccfbf1]" />
              <span className="text-[#99f6e4]">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="flex items-center justify-center gap-2 text-[#14b8a6] text-xl font-semibold mb-4">
          <BsTools className="text-2xl" />
          <span>What We Offer</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Washing Machine & Refrigerator Repair Services
        </h1>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14">
          We provide expert washing machine and refrigerator repair services in Riyadh. Our experienced technicians ensure reliability, efficiency, and complete customer satisfaction with every service call.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 text-left border border-[#ccfbf1] relative overflow-hidden hover:border-[#14b8a6]"
            >
              <div className="absolute top-4 right-6 text-5xl font-bold text-[#a3bbb6]">
                {service.id}
              </div>
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-[22px] font-[600] text-gray-800 mb-3 group-hover:text-[#14b8a6] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <ContactQuote />
      </section>

      {/* Gallery */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="text-center mb-14 relative z-10">
          <h3
            className="inline-block text-sm uppercase tracking-[5px] font-semibold px-5 py-2 rounded-full bg-[#99f6e4]/20"
            style={{ color: "#14b8a6" }}
          >
            Our Work
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
            Service{" "}
            <span className="text-[#14b8a6]">
              Gallery
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore our completed projects and see the quality of our workmanship. We take pride in every repair and maintenance service we provide.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-6xl mx-auto relative z-10">
          {images.map((src, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#14b8a6]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl"
              />
              <button
                className="absolute top-4 right-4 bg-[#14b8a6] text-white px-3 py-1 rounded-full font-bold shadow-md hover:bg-[#0f9a8a]"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Pricing Section */}
      <section className="relative overflow-hidden pb-20">
        <DarkBlue_bg />

        <div className="relative z-10 mt-20">
          <div className="text-center max-w-3xl mx-auto px-4">
            <span className="text-sm md:text-base font-semibold text-white bg-[#14b8a6] px-6 py-2 rounded-full uppercase tracking-widest inline-block shadow-md mb-6">
              Service Packages
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Choose Your Plan
            </h2>

            <p className="text-base md:text-lg text-[#ccfbf1]">
              Select the perfect maintenance package for your needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="px-4">
            <PricingPlans />
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16">
            <p className="text-white">
              Need a custom service plan?{" "}
              <a
                href="#contact"
                className="text-[#99f6e4] font-semibold hover:text-[#ccfbf1] transition-colors"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;