import React from "react";
import { Helmet } from "react-helmet-async";
import breadcumb_bg from "../assets/images/breadcumb-bg.jpg";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import ServicesSection from "../components/ServicesSection";
import { FaUserCheck, FaArrowRightLong } from "react-icons/fa6";
import repairingmachine from "../assets/images/repairingmachine.jpg";
import counter_card_2 from "../assets/images/counter_card_2.png";
import counter_card_3 from "../assets/images/counter_card_3.png";
import counter_card_4 from "../assets/images/counter_card_4.png";
import choose_feature_2 from "../assets/images/choose_feature_2.png";
import ImageSlider from "../components/ImageSlider";

const About = () => {
  const { t } = useTranslation();
  
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Riyadh Repairing Service",
    "alternateName": "خدمة الرياض للإصلاح",
    "url": "https://riyadhrepairingservice.com/",
    "logo": "https://riyadhrepairingservice.com/src/assets/images/footer_logo.png",
    "description": "Trusted appliance repair service in Riyadh with 10+ years experience. Expert washing machine and refrigerator repair.",
    "foundingDate": "2014",
    "founders": [{
      "@type": "Person",
      "name": "Professional Team"
    }],
    "areaServed": {
      "@type": "City",
      "name": "Riyadh",
      "containedIn": "Saudi Arabia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966598001569",
      "contactType": "Customer Service",
      "email": "riyadhrepairingservice@gmail.com",
      "areaServed": "SA",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/riyadhrepairservices",
      "https://www.instagram.com/riyadhrepairservices",
      "https://twitter.com/riyadhrepairs"
    ]
  };

  return (
    <div className="bg-[#E1E4E5]">
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>About Riyadh Repairing Service | Expert Appliance Repair Since 2014 | Trusted Technicians</title>
        <meta name="title" content="About Riyadh Repairing Service | Expert Appliance Repair Since 2014 | Trusted Technicians" />
        <meta name="description" content="Learn about Riyadh Repairing Service - trusted washing machine and refrigerator repair experts in Riyadh. 10+ years experience, certified technicians, 100% customer satisfaction. Professional appliance repair company." />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="عن خدمة الرياض للإصلاح | خبراء إصلاح الأجهزة منذ 2014 | فنيون موثوقون" />
        <meta name="description-ar" content="تعرف على خدمة الرياض للإصلاح - خبراء موثوقون في تصليح الغسالات والثلاجات في الرياض. خبرة أكثر من 10 سنوات، فنيون معتمدون، رضا العملاء 100%. شركة إصلاح أجهزة احترافية." />
        
        {/* ===== KEYWORDS - ENGLISH + ARABIC ===== */}
        <meta name="keywords" content="about riyadh repairing service, appliance repair company riyadh, experienced technicians riyadh, certified repair service, professional repair company, washing machine repair experts, refrigerator repair specialists, 10 years experience, customer satisfaction, trusted repair service riyadh, best appliance repair, licensed technicians, عن خدمة الرياض للإصلاح, شركة تصليح أجهزة الرياض, فنيون خبراء, خدمة إصلاح معتمدة, شركة إصلاح احترافية, خبراء تصليح غسالات, متخصصو تصليح ثلاجات, خبرة 10 سنوات, رضا العملاء, خدمة إصلاح موثوقة, أفضل تصليح أجهزة, فنيون مرخصون" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/about" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/about" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/about" hreflang="ar" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/about" hreflang="x-default" />
        
        {/* ===== OPEN GRAPH - ENGLISH ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riyadhrepairingservice.com/about" />
        <meta property="og:title" content="About Riyadh Repairing Service - Trusted Appliance Repair Experts" />
        <meta property="og:description" content="Professional appliance repair service in Riyadh with 10+ years experience. Certified technicians for washing machine and refrigerator repair." />
        <meta property="og:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        <meta property="og:site_name" content="Riyadh Repairing Service" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        
        {/* ===== OPEN GRAPH - ARABIC ===== */}
        <meta property="og:title:ar" content="عن خدمة الرياض للإصلاح - خبراء إصلاح أجهزة موثوقون" />
        <meta property="og:description:ar" content="خدمة إصلاح أجهزة احترافية في الرياض مع خبرة أكثر من 10 سنوات. فنيون معتمدون لتصليح الغسالات والثلاجات." />
        
        {/* ===== TWITTER CARD - ENGLISH ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Riyadh Repairing Service | Trusted Appliance Repair" />
        <meta name="twitter:description" content="10+ years experience in washing machine and refrigerator repair. Certified technicians, customer satisfaction guaranteed." />
        <meta name="twitter:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        
        {/* ===== TWITTER CARD - ARABIC ===== */}
        <meta name="twitter:title:ar" content="عن خدمة الرياض للإصلاح | خدمة إصلاح أجهزة موثوقة" />
        <meta name="twitter:description:ar" content="خبرة أكثر من 10 سنوات في تصليح الغسالات والثلاجات. فنيون معتمدون، رضا العملاء مضمون." />
        
        {/* ===== ROBOTS & SEO ===== */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Riyadh Repairing Service" />
        
        {/* ===== SCHEMA MARKUP ===== */}
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>
      
      {/* ===== Banner ===== */}
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
            <h1 className="text-[42px] md:text-[52px] font-bold mb-2">
              {t("aboutPage.banner.title")}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[18px] text-gray-200">
              <NavLink
                to="/"
                className="hover:text-[#14b8a6] transition-colors"
              >
                {t("aboutPage.banner.home")}
              </NavLink>
              <ArrowRight className="w-4 h-4" />
              <span className="text-[#99f6e4]">
                {t("aboutPage.banner.about")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section>
        <ServicesSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 h-full">
            <img
              src={repairingmachine}
              alt="Technician fixing washing machine - Expert appliance repair service"
              loading="lazy"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-[#14b8a6] font-semibold text-sm sm:text-base">
              <FaUserCheck />
              <span>{t("aboutPage.whyChooseUs.badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {t("aboutPage.whyChooseUs.heading")}
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {t("aboutPage.whyChooseUs.description")}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {[ 
                { img: counter_card_3, key: "certifiedWorkers" },
                { img: counter_card_2, key: "fastQualityService" },
                { img: choose_feature_2, key: "bestPrices" },
                { img: counter_card_4, key: "wonAwards" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={item.img}
                    alt={t(`aboutPage.whyChooseUs.features.${item.key}`)}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-slate-800 md:text-[20px] font-semibold sm:text-base">
                    {t(`aboutPage.whyChooseUs.features.${item.key}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                to={"/contact"}
                className="inline-flex items-center gap-3 bg-[#14b8a6] text-white font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-[#0f9a8a] shadow-md"
              >
                {t("aboutPage.whyChooseUs.button")} <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Image Slider ===== */}
      <section>
        <ImageSlider />
      </section>
    </div>
  );
};

export default About;