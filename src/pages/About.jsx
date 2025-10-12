import React from "react";
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
import SEO from "../components/SEO";

const About = () => {
  const { t } = useTranslation();
   const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Riyadh Appliance Repair Services",
    "url": "https://riyadhrepairingservice.com/",
    "logo": "https://riyadhrepairingservice.com/assets/images/footer_logo.png",
    "description": "Trusted appliance repair service in Riyadh with 10+ years experience",
    "foundingDate": "2014",
    "founders": [
      {
        "@type": "Person",
        "name": "Professional Team"
      }
    ],
    "areaServed": "Riyadh, Saudi Arabia",
    "sameAs": [
      "https://www.facebook.com/riyadhrepairservices",
      "https://www.instagram.com/riyadhrepairservices",
      "https://twitter.com/riyadhrepairs"
    ]
  };

  return (
    <div className="bg-[#E1E4E5]">
       <SEO
        title="About Riyadh Appliance Repair Services | Expert Technicians Since 2014"
        description="Learn about Riyadh Appliance Repair Services. 10+ years experience, certified technicians, 100% customer satisfaction. Trusted repair experts in Riyadh."
        keywords="about appliance repair, experienced technicians Riyadh, certified repair service, professional repair company"
        canonical="https://riyadhrepairingservice.com/about"
        ogTitle="About Riyadh Appliance Repair Services - Trusted Experts"
        ogDescription="Professional appliance repair service in Riyadh with 10+ years experience"
        schema={aboutSchema}
      />
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

      {/* ===== Why Choose Us Section ===== */}
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 h-full">
            <img
              src={repairingmachine}
              alt="Technician fixing washing machine"
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
