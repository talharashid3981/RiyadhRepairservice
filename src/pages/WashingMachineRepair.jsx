import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import breadcumb_bg from "../assets/images/breadcumb-bg.jpg";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import ContactQuote from "../components/ContactQuote.jsx";
import DarkBlue_bg from "../components/DarkBlue_bg.jsx";
import PricingPlans from "../components/PricingPlans.jsx";

// Gallery Images
import washing_machine_repear_1 from "../assets/images/washing_machine_repear_1.webp";
import home_appliance_repair from "../assets/images/home_appliance_repair.webp";
import commercial_laundry from "../assets/images/commercial_laundry.jpg";
import industrial_equipment from "../assets/images/industrial_equipment.jpeg";

const WashingMachineRepair = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const whatsappNumber = "966598001569";
  const whatsappMessage = encodeURIComponent(t("washing.whatsapp.message"));
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const washingMachineSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Washing Machine Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Riyadh Repairing Service",
      "telephone": "+966598001569",
      "email": "riyadhrepairingservice@gmail.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Riyadh"
    },
    "description": "Professional washing machine repair services in Riyadh. We repair automatic, semi-automatic, front load, top load washing machines. Expert technicians, same-day service available.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$$",
      "priceCurrency": "SAR"
    }
  };

  const breadcrumbSchema = {
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
        "name": "Washing Machine Repair",
        "item": "https://riyadhrepairingservice.com/washing-machine-repair"
      }
    ]
  };

  const washingMachineServices = [
    {
      id: "01",
      icon: <FaTools className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />,
      title: t("washing.services.automatic.title"),
      description: t("washing.services.automatic.desc"),
    },
    {
      id: "02",
      icon: <FaTools className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />,
      title: t("washing.services.semiAutomatic.title"),
      description: t("washing.services.semiAutomatic.desc"),
    },
    {
      id: "03",
      icon: <FaTools className="text-4xl text-[#14b8a6] group-hover:scale-110 transition-transform duration-300" />,
      title: t("washing.services.drumMotor.title"),
      description: t("washing.services.drumMotor.desc"),
    },
  ];

  const images = [
    washing_machine_repear_1,
    home_appliance_repair,
    commercial_laundry,
    industrial_equipment,
  ];

  return (
    <div className="bg-[#E1E4E5]">
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>Washing Machine Repair in Riyadh | Automatic & Semi-Automatic Repair | Front Load & Top Load | 24/7</title>
        <meta name="title" content="Washing Machine Repair in Riyadh | Automatic & Semi-Automatic Repair | Front Load & Top Load | 24/7" />
        <meta name="description" content="Professional washing machine repair services in Riyadh. Expert technicians repair automatic washing machines, semi-automatic, front load, top load, drum problems, motor issues, water leakage. Same-day service available, warranty on all repairs. All brands: Samsung, LG, Whirlpool, Bosch, Siemens. Call +966598001569 for fast washing machine repair!" />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="تصليح الغسالات في الرياض | إصلاح أوتوماتيك ونصف أوتوماتيك | تحميل أمامي وعلوي | 24/7" />
        <meta name="description-ar" content="خدمات احترافية في تصليح الغسالات في الرياض. فنيون خبراء يصلحون الغسالات الأوتوماتيكية ونصف الأوتوماتيكية والتحميل الأمامي والعلوي ومشاكل الأسطوانة والمحرك وتسريب الماء. خدمة في نفس اليوم متاحة، ضمان على جميع الإصلاحات. جميع العلامات التجارية: سامسونج، إل جي، ويرلبول، بوش، سيمنس. اتصل برقم +966598001569 لتصليح غسالات سريع!" />
        
        {/* ===== KEYWORDS - ENGLISH + ARABIC ===== */}
        <meta name="keywords" content="washing machine repair riyadh, automatic washing machine repair, semi-automatic washing machine repair, front load washer repair, top load washer repair, washing machine service riyadh, washing machine not spinning, washing machine leaking water, washing machine making noise, washing machine not starting, drum repair, motor repair, belt replacement, washing machine door lock, control panel repair, samsung washing machine repair, lg washer repair, whirlpool washing machine repair, bosch washer repair, siemens washing machine repair, washing machine technician riyadh, emergency washer repair, same day washing machine repair, washing machine maintenance, commercial washing machine repair, washing machine installation, washer repair near me, affordable washing machine repair, best washer repair riyadh, trusted washing machine service, certified technicians, warranty repair, تصليح الغسالات الرياض, تصليح غسالة اوتوماتيك, تصليح غسالة نص اوتوماتيك, تصليح غسالة تحميل أمامي, تصليح غسالة تحميل علوي, خدمة الغسالات الرياض, الغسالة لا تدور, الغسالة تسرب ماء, الغسالة تصدر أصوات, الغسالة لا تعمل, تصليح أسطوانة الغسالة, تصليح محرك الغسالة, استبدال الحزام, قفل باب الغسالة, تصليح لوحة التحكم, تصليح غسالات سامسونج, تصليح غسالات إل جي, تصليح غسالات ويرلبول, تصليح غسالات بوش, تصليح غسالات سيمنس, فني غسالات الرياض, إصلاح طوارئ الغسالات, تصليح غسالة في نفس اليوم, صيانة الغسالات, تصليح غسالة تجارية, تركيب الغسالات, تصليح غسالة قريب مني, تصليح غسالات معقول, أفضل تصليح غسالات الرياض, خدمة غسالات موثوقة, فنيون معتمدون, إصلاح بضمان" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/washing-machine-repair" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/washing-machine-repair" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/washing-machine-repair" hreflang="ar" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/washing-machine-repair" hreflang="x-default" />
        
        {/* ===== OPEN GRAPH - ENGLISH ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riyadhrepairingservice.com/washing-machine-repair" />
        <meta property="og:title" content="Professional Washing Machine Repair Services in Riyadh | Same-Day Service" />
        <meta property="og:description" content="Expert washing machine repair in Riyadh. Automatic, semi-automatic, front load, top load repairs. Available 24/7. Call +966598001569" />
        <meta property="og:image" content="https://riyadhrepairingservice.com/src/assets/images/washing_machine_repear_1.webp" />
        <meta property="og:site_name" content="Riyadh Repairing Service" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        
        {/* ===== OPEN GRAPH - ARABIC ===== */}
        <meta property="og:title:ar" content="خدمات احترافية في تصليح الغسالات في الرياض | خدمة في نفس اليوم" />
        <meta property="og:description:ar" content="خدمة تصليح غسالات احترافية في الرياض. أوتوماتيك، نصف أوتوماتيك، تحميل أمامي وعلوي. متاح 24/7. اتصل برقم +966598001569" />
        
        {/* ===== TWITTER CARD - ENGLISH ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Washing Machine Repair in Riyadh | 24/7 Emergency Service" />
        <meta name="twitter:description" content="Professional washing machine repair. Automatic, semi-automatic, all brands. Same-day service available!" />
        <meta name="twitter:image" content="https://riyadhrepairingservice.com/src/assets/images/washing_machine_repear_1.webp" />
        
        {/* ===== TWITTER CARD - ARABIC ===== */}
        <meta name="twitter:title:ar" content="تصليح الغسالات في الرياض | خدمة طوارئ 24/7" />
        <meta name="twitter:description:ar" content="تصليح غسالات احترافي. أوتوماتيك، نصف أوتوماتيك، جميع العلامات التجارية. خدمة في نفس اليوم!" />
        
        {/* ===== ROBOTS & SEO ===== */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Riyadh Repairing Service" />
        
        {/* ===== GEOGRAPHIC & BUSINESS INFO ===== */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="contact" content="riyadhrepairingservice@gmail.com" />
        <meta name="telephone" content="+966598001569" />
        
        {/* ===== SCHEMA MARKUP - SERVICE ===== */}
        <script type="application/ld+json">
          {JSON.stringify(washingMachineSchema)}
        </script>
        
        {/* ===== BREADCRUMB SCHEMA ===== */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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
              {t("washing.banner.title")}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[18px] text-gray-200">
              <NavLink to="/" className="hover:text-[#99f6e4] transition-colors">
                {t("washing.banner.home")}
              </NavLink>
              <ArrowRight className="w-4 h-4 text-[#ccfbf1]" />
              <span className="text-[#99f6e4]">{t("washing.banner.current")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-[#14b8a6] text-xl font-semibold mb-4">
              <BsTools className="text-2xl" />
              <span>{t("washing.section.badge")}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {t("washing.section.title")}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-14">
              {t("washing.section.description")}
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {washingMachineServices.map((service) => (
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

      {/* Common Problems Section */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t("washing.problems.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("washing.problems.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f0fffe] border-l-4 border-[#14b8a6] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("washing.problems.notSpinning.title")}
                </h3>
                <p className="text-gray-600">
                  {t("washing.problems.notSpinning.desc")}
                </p>
              </div>
              <div className="bg-[#f0fffe] border-l-4 border-[#14b8a6] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("washing.problems.waterLeak.title")}
                </h3>
                <p className="text-gray-600">
                  {t("washing.problems.waterLeak.desc")}
                </p>
              </div>
              <div className="bg-[#f0fffe] border-l-4 border-[#14b8a6] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("washing.problems.noise.title")}
                </h3>
                <p className="text-gray-600">
                  {t("washing.problems.noise.desc")}
                </p>
              </div>
              <div className="bg-[#f0fffe] border-l-4 border-[#14b8a6] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("washing.problems.notStarting.title")}
                </h3>
                <p className="text-gray-600">
                  {t("washing.problems.notStarting.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#14b8a6] to-[#0d9488] rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t("washing.whyChoose.title")}
                </h2>
                <p className="text-lg text-[#ccfbf1] max-w-2xl mx-auto">
                  {t("washing.whyChoose.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("washing.whyChoose.features.warranty")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("washing.whyChoose.features.warrantyDesc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("washing.whyChoose.features.genuine")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("washing.whyChoose.features.genuineDesc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("washing.whyChoose.features.expert")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("washing.whyChoose.features.expertDesc")}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-2xl">✓</span> {t("washing.whyChoose.features.fast")}
                  </h3>
                  <p className="text-[#ccfbf1]">{t("washing.whyChoose.features.fastDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply Section */}
      <section className="py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="mb-8">
                <MessageCircle className="w-16 h-16 text-[#14b8a6] mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {t("washing.quickApply.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {t("washing.quickApply.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  aria-label="Contact via WhatsApp for washing machine repair"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("washing.quickApply.whatsapp")}
                </a>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-8 rounded-xl transition-all duration-300"
                  aria-label="Contact us for washing machine repair service"
                >
                  {t("washing.quickApply.contact")}
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

      {/* Gallery Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="text-center mb-14 relative z-10">
            <h3 className="inline-block text-sm uppercase tracking-[5px] font-semibold px-5 py-2 rounded-full bg-[#99f6e4]/20" style={{ color: "#14b8a6" }}>
              {t("washing.gallery.badge")}
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
              {t("washing.gallery.title")} <span className="text-[#14b8a6]">{t("washing.gallery.highlight")}</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              {t("washing.gallery.description")}
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
                  alt={`Professional washing machine repair service in Riyadh - ${index + 1}`}
                  loading="lazy"
                  className="w-full rounded-lg shadow-md transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#14b8a6]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">{t("washing.gallery.view")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4" onClick={() => setSelectedImage(null)}>
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img
                  src={selectedImage}
                  alt="Washing machine repair service gallery"
                  className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-xl"
                />
                <button
                  className="absolute top-4 right-4 bg-[#14b8a6] text-white px-3 py-1 rounded-full font-bold shadow-md hover:bg-[#0f9a8a]"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image"
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative overflow-hidden pb-20">
        <DarkBlue_bg />
        <div className="relative z-10 mt-20">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm md:text-base font-semibold text-white bg-[#14b8a6] px-6 py-2 rounded-full uppercase tracking-widest inline-block shadow-md mb-6">
                {t("washing.pricing.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                {t("washing.pricing.title")}
              </h2>
              <p className="text-base md:text-lg text-[#ccfbf1]">
                {t("washing.pricing.description")}
              </p>
            </div>

            <PricingPlans />

            <div className="text-center mt-16">
              <p className="text-white">
                {t("washing.pricing.footer.text")}{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#99f6e4] font-semibold hover:text-[#ccfbf1] transition-colors"
                >
                  {t("washing.pricing.footer.linkText")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WashingMachineRepair;