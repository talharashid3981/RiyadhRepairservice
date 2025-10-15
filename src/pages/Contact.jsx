import React from "react";
import breadcumb_bg from "../assets/images/breadcumb-bg.jpg";
import { NavLink } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import ContactQuote from "../components/ContactQuote";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

const Contact = () => {
  const { t } = useTranslation();
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Riyadh Appliance Repair Services",
    "url": "https://riyadhrepairingservice.com/contact",
    "telephone": "+966598001569",
    "email": "riyadhrepairingservice@gmail.com"
  };

  return (
    <div>
      <SEO
        title="Contact Riyadh Appliance Repair Services | 24/7 Support | +966598001569"
        description="Contact Riyadh Appliance Repair Services for immediate help. Call +966598001569 for 24/7 emergency support. Same-day service available. Expert technicians ready to help."
        keywords="contact repair service, book appointment, emergency repair, customer support, phone number, service area Riyadh"
        canonical="https://riyadhrepairingservice.com/contact"
        ogTitle="Contact Us - Riyadh Appliance Repair Services"
        ogDescription="Get in touch with our expert repair team. Available 24/7!"
        schema={contactSchema}
      />
      
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

      {/* 🔥 FIXED: Contact Info Section - Consistent Padding */}
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

      {/* ===== Contact Form / Quote Section ===== */}
      <section>
        <ContactQuote />
      </section>
    </div>
  );
};

export default Contact;