import React from "react";
import { Helmet } from "react-helmet-async";
import breadcumb_bg from "../assets/images/breadcumb-bg.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import ContactQuote from "../components/ContactQuote";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Riyadh Repairing Service",
    "alternateName": "تواصل مع خدمة الرياض للإصلاح",
    "url": "https://riyadhrepairingservice.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Riyadh Repairing Service",
      "telephone": "+966598001569",
      "email": "riyadhrepairingservice@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh Province",
        "addressCountry": "SA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966598001569",
        "contactType": "Customer Service",
        "email": "riyadhrepairingservice@gmail.com",
        "areaServed": "SA",
        "availableLanguage": ["English", "Arabic"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  };

  return (
    <div>
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>Contact Riyadh Repairing Service | 24/7 Support | Call +966598001569 | Washing Machine & Refrigerator Repair</title>
        <meta name="title" content="Contact Riyadh Repairing Service | 24/7 Support | Call +966598001569 | Washing Machine & Refrigerator Repair" />
        <meta name="description" content="Contact Riyadh Repairing Service for immediate washing machine and refrigerator repair help. Call +966598001569 for 24/7 emergency support. Same-day service available throughout Riyadh. Expert technicians ready to help. Book your appointment online or call now." />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="تواصل مع خدمة الرياض للإصلاح | دعم 24/7 | اتصل +966598001569 | تصليح غسالات وثلاجات" />
        <meta name="description-ar" content="تواصل مع خدمة الرياض للإصلاح للحصول على مساعدة فورية في تصليح الغسالات والثلاجات. اتصل برقم +966598001569 لدعم الطوارئ 24/7. خدمة في نفس اليوم متاحة في جميع أنحاء الرياض. فنيون خبراء جاهزون للمساعدة. احجز موعدك عبر الإنترنت أو اتصل الآن." />
        
        {/* ===== KEYWORDS - ENGLISH + ARABIC ===== */}
        <meta name="keywords" content="contact riyadh repairing service, book appliance repair appointment, emergency repair riyadh, 24/7 customer support, washing machine repair phone number, refrigerator repair contact, repair service area riyadh, same day repair booking, appliance repair emergency, contact repair technician, riyadh repair hotline, washing machine repair near me, refrigerator repair near me, appliance repair customer service, تواصل خدمة الرياض للإصلاح, حجز موعد تصليح أجهزة, إصلاح طوارئ الرياض, دعم العملاء 24/7, رقم تصليح الغسالات, تواصل تصليح الثلاجات, منطقة خدمة الإصلاح الرياض, حجز إصلاح في نفس اليوم, طوارئ إصلاح الأجهزة, تواصل مع فني الإصلاح, خط ساخن للإصلاح الرياض, تصليح غسالات قريب مني, تصليح ثلاجات قريب مني" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/contact" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/contact" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/contact" hreflang="ar" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/contact" hreflang="x-default" />
        
        {/* ===== OPEN GRAPH - ENGLISH ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riyadhrepairingservice.com/contact" />
        <meta property="og:title" content="Contact Riyadh Repairing Service - 24/7 Expert Support" />
        <meta property="og:description" content="Get in touch with our expert washing machine and refrigerator repair team. Available 24/7 for emergency repairs throughout Riyadh. Call +966598001569" />
        <meta property="og:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        <meta property="og:site_name" content="Riyadh Repairing Service" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_SA" />
        
        {/* ===== OPEN GRAPH - ARABIC ===== */}
        <meta property="og:title:ar" content="تواصل مع خدمة الرياض للإصلاح - دعم احترافي 24/7" />
        <meta property="og:description:ar" content="تواصل مع فريق خبراء تصليح الغسالات والثلاجات لدينا. متاح 24/7 لإصلاحات الطوارئ في جميع أنحاء الرياض. اتصل برقم +966598001569" />
        
        {/* ===== TWITTER CARD - ENGLISH ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Riyadh Repairing Service | 24/7 Support" />
        <meta name="twitter:description" content="Expert washing machine and refrigerator repair. Available 24/7. Call +966598001569 for immediate assistance." />
        <meta name="twitter:image" content="https://riyadhrepairingservice.com/src/assets/images/footer_logo.png" />
        
        {/* ===== TWITTER CARD - ARABIC ===== */}
        <meta name="twitter:title:ar" content="تواصل مع خدمة الرياض للإصلاح | دعم 24/7" />
        <meta name="twitter:description:ar" content="خدمة تصليح غسالات وثلاجات احترافية. متاح 24/7. اتصل برقم +966598001569 للحصول على مساعدة فورية." />
        
        {/* ===== ROBOTS & SEO ===== */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Riyadh Repairing Service" />
        
        {/* ===== CONTACT SPECIFIC TAGS ===== */}
        <meta name="contact" content="riyadhrepairingservice@gmail.com" />
        <meta name="telephone" content="+966598001569" />
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        
        {/* ===== SCHEMA MARKUP - CONTACT PAGE ===== */}
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://riyadhrepairingservice.com/contact"
              }
            ]
          })}
        </script>
      </Helmet>
      
      {/* ===== Hero Section ===== */}
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
            <h1 className="text-[38px] md:text-[52px] font-extrabold mb-3 tracking-tight">
              {t("contact.header.title")}
            </h1>
            <nav
              className="flex items-center justify-center gap-2 text-[16px] sm:text-[18px] text-gray-200"
              aria-label="Breadcrumb"
            >
              <NavLink
                to="/"
                className="hover:text-[#14b8a6] transition-colors font-medium"
              >
                {t("contact.header.home")}
              </NavLink>
              <ArrowRight className="w-4 h-4 text-[#99f6e4]" />
              <span className="text-[#14b8a6] font-semibold">
                {t("contact.header.current")}
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        className="bg-gray-50 py-16"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#14b8a6] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#14b8a6] font-semibold text-lg tracking-wide">
                  {t("contact.getInTouch")}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                {t("contact.contactInfo")}
              </h2>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Location */}
              <div
                className="bg-white border border-gray-200 rounded-2xl p-8 flex items-center gap-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/6FgEyFnvMN1KQhZX9?g_st=aw",
                    "_blank"
                  )
                }
              >
                <div className="w-16 h-16 bg-[#14b8a6] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {t("contact.location.title")}
                  </h3>
                  <p className="text-gray-600 text-sm" itemProp="streetAddress">
                    {t("contact.location.address")}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${t("contact.phone.number")}`}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
                itemProp="telephone"
                aria-label="Call Riyadh Repairing Service at +966598001569"
              >
                <div className="w-16 h-16 bg-[#14b8a6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {t("contact.phone.title")}
                  </h3>
                  <p className="text-gray-600 text-sm">{t("contact.phone.number")}</p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${t("contact.email.address")}`}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex items-center gap-6 hover:shadow-lg transition-all duration-300"
                itemProp="email"
                aria-label="Email Riyadh Repairing Service"
              >
                <div className="w-16 h-16 bg-[#14b8a6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {t("contact.email.title")}
                  </h3>
                  <p className="text-gray-600 text-sm break-all">
                    {t("contact.email.address")}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form / Quote Section */}
      <section>
        <ContactQuote />
      </section>
    </div>
  );
};

export default Contact;