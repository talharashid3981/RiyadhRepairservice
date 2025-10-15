import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import breadcumb_bg from "../assets/images/breadcumb-bg.jpg";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaSnowflake } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import ContactQuote from "../components/ContactQuote.jsx";
import DarkBlue_bg from "../components/DarkBlue_bg.jsx";
import PricingPlans from "../components/PricingPlans.jsx";
import SEO from "../components/SEO.jsx";

// Gallery Images
import refrigerator_services from "../assets/images/refrigerator_services.webp";
import fridge_installation from "../assets/images/fridge_installation.webp";
import Commercial_Refrigeraion_1 from "../assets/images/Commercial_Refrigeraion_1.jpg";
import cold_storage from "../assets/images/cold_storage.jpeg";
import frdge2 from "../assets/images/frdge2.jpg";

const RefrigeratorRepair = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const whatsappNumber = "966598001569";
  const whatsappMessage = encodeURIComponent(t("refrigerator.whatsapp.message"));
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const refridgeratorSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://riyadhrepairingservice.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Refrigerator Repair",
        "item": "https://riyadhrepairingservice.com/refrigerator-repair"
      }
    ]
  };

  const refrigeratorServices = [
    {
      id: "01",
      icon: <FaSnowflake className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />,
      title: t("refrigerator.services.cooling.title"),
      description: t("refrigerator.services.cooling.desc"),
    },
    {
      id: "02",
      icon: <FaSnowflake className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />,
      title: t("refrigerator.services.iceMaker.title"),
      description: t("refrigerator.services.iceMaker.desc"),
    },
    {
      id: "03",
      icon: <FaSnowflake className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />,
      title: t("refrigerator.services.electrical.title"),
      description: t("refrigerator.services.electrical.desc"),
    },
  ];

  const images = [
    refrigerator_services,
    fridge_installation,
    Commercial_Refrigeraion_1,
    cold_storage,
    frdge2,
  ];

  return (
    <div className="bg-[#E1E4E5]">
      <SEO
        title="Refrigerator Repair in Riyadh | Professional Cooling Solutions"
        description="Expert refrigerator repair services in Riyadh. Ice maker repair, compressor issues, cooling problems. Same-day service, warranty guaranteed."
        keywords="refrigerator repair, fridge repair Riyadh, ice maker repair, cooling system, compressor repair"
        canonical="https://riyadhrepairingservice.com/refrigerator-repair"
        ogTitle="Professional Refrigerator Repair Services"
        ogDescription="Expert cooling solutions and refrigerator maintenance in Riyadh"
        schema={refridgeratorSchema}
      />

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
              {t("refrigerator.banner.title")}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[18px] text-gray-200">
              <NavLink to="/" className="hover:text-[#99f6e4] transition-colors">
                {t("refrigerator.banner.home")}
              </NavLink>
              <ArrowRight className="w-4 h-4 text-[#ccfbf1]" />
              <span className="text-[#99f6e4]">{t("refrigerator.banner.current")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 FIXED: Services Section - Consistent Padding */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-[#14b8a6] text-xl font-semibold mb-4">
              <BsTools className="text-2xl" />
              <span>{t("refrigerator.section.badge")}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {t("refrigerator.section.title")}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14">
              {t("refrigerator.section.description")}
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {refrigeratorServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl p-8 border border-[#ccfbf1] relative overflow-hidden hover:border-[#14b8a6]"
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
          </div>
        </div>
      </section>

      {/* 🔥 FIXED: Why Choose Us Section - Consistent Padding */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t("refrigerator.whyChoose.title")}
                </h2>
                <p className="text-lg text-[#ccfbf1] max-w-2xl mx-auto">
                  {t("refrigerator.whyChoose.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("refrigerator.whyChoose.features.warranty")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("refrigerator.whyChoose.features.warrantyDesc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("refrigerator.whyChoose.features.genuine")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("refrigerator.whyChoose.features.genuineDesc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("refrigerator.whyChoose.features.expert")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("refrigerator.whyChoose.features.expertDesc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("refrigerator.whyChoose.features.fast")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("refrigerator.whyChoose.features.fastDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 FIXED: Quick Apply Section - Consistent Padding */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="mb-8">
                <MessageCircle className="w-16 h-16 text-[#14b8a6] mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {t("refrigerator.quickApply.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("refrigerator.quickApply.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("refrigerator.quickApply.whatsapp")}
                </a>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  {t("refrigerator.quickApply.contact")}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <ContactQuote />
      </section>

      {/* 🔥 FIXED: Gallery Section - Consistent Padding */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="text-center mb-14 relative z-10">
            <h3 className="inline-block text-sm uppercase tracking-[5px] font-semibold px-5 py-2 rounded-full bg-[#99f6e4]/20" style={{ color: "#14b8a6" }}>
              {t("refrigerator.gallery.badge")}
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
              {t("refrigerator.gallery.title")} <span className="text-[#14b8a6]">{t("refrigerator.gallery.highlight")}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              {t("refrigerator.gallery.description")}
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
                  alt={`Refrigerator Service ${index + 1}`}
                  className="w-full rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#14b8a6]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{t("refrigerator.gallery.view")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
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
        </div>
      </section>

      {/* 🔥 FIXED: Pricing Section - Consistent Padding */}
      <section className="relative overflow-hidden pb-20">
        <DarkBlue_bg />
        <div className="relative z-10 mt-20">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm md:text-base font-semibold text-white bg-[#14b8a6] px-6 py-2 rounded-full uppercase tracking-widest inline-block shadow-md mb-6">
                {t("refrigerator.pricing.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                {t("refrigerator.pricing.title")}
              </h2>
              <p className="text-base md:text-lg text-[#ccfbf1]">
                {t("refrigerator.pricing.description")}
              </p>
            </div>

            <PricingPlans />

            <div className="text-center mt-16">
              <p className="text-white">
                {t("refrigerator.pricing.footer.text")}{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#99f6e4] font-semibold hover:text-[#ccfbf1] transition-colors"
                >
                  {t("refrigerator.pricing.footer.linkText")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefrigeratorRepair;