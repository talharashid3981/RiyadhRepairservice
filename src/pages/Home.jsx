import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
import fridge_installation from "../assets/images/fridge_installation.webp";
import refrigerator_services from "../assets/images/refrigerator_services.webp";
import commercial_laundry from "../assets/images/commercial_laundry.jpg";
import home_appliance_repair from "../assets/images/home_appliance_repair.webp";
import washing_machine_repear_1 from "../assets/images/washing_machine_repear_1.webp";
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

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Riyadh Repairing Service",
    "alternateName": "خدمة الرياض للإصلاح",
    "image": "https://riyadhrepairingservice.com/src/assets/images/footer_logo.png",
    "description": "24/7 Professional washing machine and refrigerator repair services in Riyadh. Expert technicians, same-day service, affordable rates.",
    "telephone": "+966598001569",
    "email": "riyadhrepairingservice@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "url": "https://riyadhrepairingservice.com/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "245"
    }
  };

  const firstSectionFeatures = [
    t("home.aboutSection.features.quality"),
    t("home.aboutSection.features.licensed"),
    t("home.aboutSection.features.pricing"),
  ];

  const servicesData = {
    commercial: t("projectsData.commercial", { returnObjects: true }).map(
      (service, index) => ({
        ...service,
        image: [
          commercial_laundry,
          Commercial_Refrigeraion_1,
          fridge_installation,
        ][index],
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
    <div className="bg-[#E1E4E5] overflow-hidden" id="home">
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>Washing Machine & Refrigerator Repair in Riyadh | Same-Day Professional Service | Expert Technicians 24/7</title>
        <meta name="title" content="Washing Machine & Refrigerator Repair in Riyadh | Same-Day Professional Service | Expert Technicians 24/7" />
        <meta name="description" content="Professional washing machine repair, automatic washing machine repair, and refrigerator repair services in Riyadh. Expert certified technicians, affordable rates, same-day service available. 24/7 emergency repairs. All brands supported including Samsung, LG, Whirlpool, Bosch. Call +966598001569 for fast repairs!" />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="تصليح غسالات وثلاجات في الرياض | خدمة احترافية في نفس اليوم | فنيون خبراء 24/7" />
        <meta name="description-ar" content="خدمات احترافية في تصليح الغسالات والغسالات الأوتوماتيكية والثلاجات في الرياض. فنيون معتمدون خبراء، أسعار معقولة، خدمة في نفس اليوم متاحة. إصلاحات طوارئ 24/7. جميع العلامات التجارية مدعومة بما في ذلك سامسونج وإل جي وويرلبول وبوش. اتصل برقم +966598001569 للإصلاح السريع!" />
        
        {/* ===== KEYWORDS - ENGLISH + ARABIC ===== */}
        <meta name="keywords" content="washing machine repair riyadh, automatic washing machine repair riyadh, refrigerator repair riyadh, fridge repair riyadh, appliance repair riyadh, washing machine service riyadh, fridge service riyadh, home appliance repair, emergency repair, 24/7 repair service, same day repair, affordable repair, samsung washing machine repair, lg washing machine repair, whirlpool repair, bosch repair, washing machine not spinning, washing machine leaking, refrigerator not cooling, ice maker repair, compressor repair, washing machine technician riyadh, fridge technician riyadh, best appliance repair riyadh, trusted repair service, licensed technicians, certified repair, commercial appliance repair, residential appliance repair, industrial appliance repair, washing machine maintenance, refrigerator maintenance, appliance installation, emergency appliance service, غسالة إصلاح الرياض, غسالة اوتوماتيك الرياض, تصليح ثلاجات الرياض, صيانة غسالات الرياض, صيانة ثلاجات الرياض, تصليح غسالات اوتوماتيك, صيانة اجهزة منزلية الرياض, فني غسالات الرياض, فني ثلاجات الرياض, إصلاح سريع الرياض, خدمة طوارئ الرياض, تصليح غسالات نص اوتوماتيك, الغسالة لا تدور, الغسالة تسرب ماء, الثلاجة لا تبرد, تصليح صانع الثلج, تصليح الضاغط, أفضل تصليح أجهزة الرياض, خدمة موثوقة, فنيون مرخصون, إصلاح معتمد, تصليح أجهزة تجارية, تصليح أجهزة سكنية, تصليح أجهزة صناعية, صيانة الغسالات, صيانة الثلاجات, تركيب الأجهزة, خدمة طوارئ الأجهزة" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/" hreflang="ar" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/" hreflang="x-default" />
        
        {/* ===== OPEN GRAPH - ENGLISH ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riyadhrepairingservice.com/" />
        <meta property="og:title" content="Riyadh Repairing Service | Expert Washing Machine & Refrigerator Repair 24/7" />
        <meta property="og:description" content="Professional washing machine and refrigerator repair in Riyadh with same-day service and affordable prices. Available 24/7! Expert technicians for all brands. Call +966598001569" />
        <meta property="og:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        <meta property="og:site_name" content="Riyadh Repairing Service" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        
        {/* ===== OPEN GRAPH - ARABIC ===== */}
        <meta property="og:title:ar" content="خدمة الرياض للإصلاح | خبراء تصليح الغسالات والثلاجات 24/7" />
        <meta property="og:description:ar" content="تصليح احترافي للغسالات والثلاجات في الرياض مع خدمة في نفس اليوم وأسعار معقولة. متاح 24/7! فنيون خبراء لجميع العلامات التجارية. اتصل برقم +966598001569" />
        
        {/* ===== TWITTER CARD - ENGLISH ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@riyadhrepairs" />
        <meta name="twitter:title" content="Riyadh Repairing Service | Washing Machine & Refrigerator Repair 24/7" />
        <meta name="twitter:description" content="Professional appliance repair in Riyadh. Same-day service, affordable rates, expert technicians. Call +966598001569" />
        <meta name="twitter:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        
        {/* ===== TWITTER CARD - ARABIC ===== */}
        <meta name="twitter:title:ar" content="خدمة الرياض للإصلاح | تصليح الغسالات والثلاجات 24/7" />
        <meta name="twitter:description:ar" content="تصليح أجهزة احترافي في الرياض. خدمة في نفس اليوم، أسعار معقولة، فنيون خبراء. اتصل برقم +966598001569" />
        
        {/* ===== ROBOTS & SEO ===== */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Riyadh Repairing Service" />
        
        {/* ===== GEOGRAPHIC & BUSINESS INFO ===== */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        <meta name="contact" content="riyadhrepairingservice@gmail.com" />
        <meta name="telephone" content="+966598001569" />
        
        {/* ===== SCHEMA MARKUP - LOCAL BUSINESS ===== */}
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
        
        {/* ===== SCHEMA MARKUP - WEBSITE ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Riyadh Repairing Service",
            "alternateName": "خدمة الرياض للإصلاح",
            "url": "https://riyadhrepairingservice.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://riyadhrepairingservice.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* ===== SCHEMA MARKUP - ORGANIZATION ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Riyadh Repairing Service",
            "url": "https://riyadhrepairingservice.com/",
            "logo": "https://riyadhrepairingservice.com/src/assets/images/footer_logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966598001569",
              "contactType": "Customer Service",
              "areaServed": "SA",
              "availableLanguage": ["English", "Arabic"]
            },
            "sameAs": [
              "https://www.facebook.com/riyadhrepairservices",
              "https://www.instagram.com/riyadhrepairservices",
              "https://twitter.com/riyadhrepairs"
            ]
          })}
        </script>
        
        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://riyadhrepairingservice.com/"
              }
            ]
          })}
        </script>
      </Helmet>

      <ACRepairSlider />

      {/* First Section */}
      <section
        style={{
          backgroundImage: `url(${pattern_bg_5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-auto w-full py-8 sm:py-12 lg:py-16"
        aria-labelledby="about-heading"
      >
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20 gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={title_icon2}
                alt="Riyadh Repairing Service Icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
                width="32"
                height="32"
              />
              <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-[22px]">
                {t("home.aboutSection.title")}
              </span>
            </div>

            <h1
              id="about-heading"
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

            <ul className="space-y-2 sm:space-y-3" role="list">
              {firstSectionFeatures.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-black"
                >
                  <FiCheckCircle
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#14b8a6] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-start sm:items-center gap-4 flex-wrap pt-3">
              <Link
                to="/about"
                className="bg-slate-900 text-white flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-slate-800 transition text-sm sm:text-base"
                aria-label="Learn more about our appliance repair services"
              >
                {t("home.aboutSection.buttons.findMore")}{" "}
                <FaArrowRightLong aria-hidden="true" />
              </Link>
              <a
                href="tel:+966598001569"
                className="flex items-center gap-2 text-[#14b8a6] cursor-pointer font-bold hover:scale-105 transition-transform"
                aria-label="Call Riyadh Repairing Service at +966598001569"
              >
                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="text-white bg-[#14b8a6] px-2 py-2 sm:px-3 sm:py-3 rounded-full text-xl sm:text-[28px]">
                    <FiPhone aria-hidden="true" />
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

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-3xl sm:rounded-[50px] p-3 sm:p-5 overflow-hidden w-full">
              <img
                src={washing_machine_repear_1}
                alt="Professional technician repairing washing machine in Riyadh - Expert appliance repair service available 24/7"
                className="w-full h-auto object-cover rounded-3xl"
                loading="eager"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Services Section */}
      <section
        style={{
          backgroundImage: `url(${pattern_bg_6})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-auto w-full py-8 sm:py-12 lg:py-16"
        aria-labelledby="services-heading"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="flex items-center gap-3">
            <img
              src={title_icon2}
              alt="Services Icon"
              className="w-6 h-6 sm:w-8 sm:h-8 brightness-0 invert"
              width="32"
              height="32"
            />
            <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-[22px]">
              {t("home.servicesSection.title")}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-center sm:justify-between text-white mt-5">
            <h2
              id="services-heading"
              className="text-[40px] font-[700] leading-[45px]"
            >
              {t("home.servicesSection.heading")}
            </h2>
            <div className="flex sm:justify-end">
              <Link
                to="/services"
                className="flex gap-4 items-center bg-[#14b8a6] rounded-3xl px-5 py-3 hover:bg-[#0f9a8a] transition"
                aria-label="View all appliance repair services"
              >
                {t("home.servicesSection.viewAll")}{" "}
                <FaArrowRightLong aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <ServiceSlider />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        style={{
          backgroundImage: `url(${pattern_bg_5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-auto w-full py-10 sm:py-12 lg:py-16"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-black">
            <div className="flex items-center gap-3">
              <img
                src={title_icon2}
                alt="Projects Icon"
                className="w-6 h-6 sm:w-8 sm:h-8 brightness-0"
                width="32"
                height="32"
              />
              <span className="text-[#14b8a6] font-bold text-lg sm:text-xl lg:text-2xl">
                {t("home.projectsSection.title")}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-4 sm:gap-6 mb-6">
            <div className="text-center mt-4 lg:text-left">
              <h2
                id="projects-heading"
                className="text-2xl sm:text-4xl font-extrabold text-black"
              >
                {t("home.projectsSection.heading")}
              </h2>
              <p className="text-xl sm:text-3xl font-semibold text-gray-800">
                {t("home.projectsSection.headingLine2")}
              </p>
            </div>

            <div
              className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4"
              role="tablist"
              aria-label="Service categories"
            >
              {["commercial", "residential", "industrial"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  aria-controls={`${cat}-services`}
                  className={`px-4 py-2 rounded-md font-medium border transition-colors cursor-pointer ${
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

          <div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            id={`${selectedCategory}-services`}
            role="tabpanel"
            aria-labelledby="projects-heading"
          >
            {servicesData[selectedCategory].map((service, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden rounded-t-3xl">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional appliance repair service in Riyadh`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="300"
                    itemProp="image"
                  />
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    style={{ height: "35px" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M0,0 Q360,130 750,60 T1440,0 L1440,120 L0,120 Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="px-5 pb-8 pt-4 text-center flex flex-col justify-between h-auto sm:h-64">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
                    itemProp="name"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm sm:text-base mb-4"
                    itemProp="description"
                  >
                    {service.description}
                  </p>
                  <button
                    className="bg-[#14b8a6] mx-auto cursor-pointer text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:bg-[#0f9a8a] shadow-md"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {t("home.projectsSection.exploreCaseStudy")}
                    <span className="text-lg" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section
        style={{
          backgroundImage: `url("${video_2}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative h-auto w-full flex flex-col justify-between items-center text-center px-6 pt-20"
        aria-labelledby="video-heading"
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="relative mb-15 mt-20 w-16 h-16 flex items-center justify-center rounded-full bg-white text-[#14b8a6] hover:bg-[#14b8a6] hover:text-white cursor-pointer duration-500"
            aria-label="Play video about our appliance repair services"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

            <span
              className="absolute inset-1 rounded-full border border-white animate-ping"
              aria-hidden="true"
            ></span>
            <span
              className="absolute inset-0 rounded-full border-2 border-white animate-ping"
              aria-hidden="true"
            ></span>
          </button>

          <h2
            id="video-heading"
            className="max-w-[700px] mx-auto text-white text-3xl sm:text-4xl md:text-[38px] font-bold leading-tight"
          >
            <span className="text-[#14b8a6]">
              {t("home.videoSection.heading1")}
            </span>{" "}
            {t("home.videoSection.heading2")}
          </h2>
          <p className="text-white mt-4 max-w-2xl text-sm md:text-base">
            {t("home.videoSection.description")}
          </p>
        </div>
        <a
          href="#"
          className="my-5 text-bold text-white hover:text-[#14b8a6]"
          aria-label="Download service catalog PDF"
        >
          {t("home.videoSection.downloadCatalog")}
        </a>

        <div className="relative z-10 w-full max-w-7xl mx-auto bg-[#101840] mt-20 rounded-t-lg overflow-hidden">
          <div
            className="grid grid-cols-2 md:grid-cols-4 py-5"
            role="list"
            aria-label="Company statistics"
          >
            <div
              className="flex flex-row items-center justify-center px-4 border-b md:border-b-0 md:border-r-2 border-gray-700"
              role="listitem"
            >
              <img
                src={counter_card_5}
                alt="Completed Projects"
                className="w-13 h-13"
                width="52"
                height="52"
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

            <div
              className="flex flex-row items-center justify-center px-4 border-b md:border-b-0 md:border-r-2 border-gray-700"
              role="listitem"
            >
              <img
                src={counter_card_2}
                alt="Happy Clients"
                className="w-13 h-13"
                width="52"
                height="52"
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

            <div
              className="flex flex-row items-center justify-center px-4 border-b md:border-b-0 md:border-r-2 border-gray-700"
              role="listitem"
            >
              <img
                src={counter_card_3}
                alt="Expert Team Members"
                className="w-13 h-13"
                width="52"
                height="52"
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

            <div
              className="flex flex-row items-center justify-center px-4"
              role="listitem"
            >
              <img
                src={counter_card_4}
                alt="Awards Won"
                className="w-13 h-13"
                width="52"
                height="52"
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

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white text-3xl hover:text-[#14b8a6] transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close video modal"
              >
                ✕
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/DyDfgMOUjCI?autoplay=1"
                  title="Riyadh Repairing Service - Company Overview Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      <section aria-labelledby="contact-heading">
        <ContactQuote />
      </section>

      <section aria-labelledby="reviews-heading">
        <ClientRevew />
      </section>

      <section
        className="relative bg-[#E1E4E5] py-20"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center max-w-2xl mx-auto px-4">
          <span className="text-sm md:text-base font-semibold text-white bg-[#14b8a6] px-5 py-2 rounded-full uppercase tracking-widest inline-block shadow-md mb-4">
            {t("pricingPlans.header.badge")}
          </span>
          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4"
          >
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
              aria-label="Contact us for custom pricing"
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