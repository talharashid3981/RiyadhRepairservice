// ==================== TERMS.JSX ====================
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen py-16 mt-16 sm:mt-20">
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>Terms & Conditions | Riyadh Repairing Service | Service Agreement</title>
        <meta name="title" content="Terms & Conditions | Riyadh Repairing Service | Service Agreement" />
        <meta name="description" content="Read our terms and conditions for using Riyadh Repairing Service. Understand our service policies, payment terms, warranty information, and liability agreements." />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="الشروط والأحكام | خدمة الرياض للإصلاح | اتفاقية الخدمة" />
        <meta name="description-ar" content="اقرأ الشروط والأحكام الخاصة باستخدام خدمة الرياض للإصلاح. افهم سياسات الخدمة وشروط الدفع ومعلومات الضمان واتفاقيات المسؤولية." />
        
        {/* ===== KEYWORDS ===== */}
        <meta name="keywords" content="terms and conditions, service agreement, terms of service, warranty policy, payment terms, liability, user agreement, service policies, legal terms, الشروط والأحكام, اتفاقية الخدمة, شروط الخدمة, سياسة الضمان, شروط الدفع, المسؤولية, اتفاقية المستخدم, سياسات الخدمة, الشروط القانونية" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/terms" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/terms" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/terms" hreflang="ar" />
        
        {/* ===== ROBOTS ===== */}
        <meta name="robots" content="index, follow" />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="Terms & Conditions - Riyadh Repairing Service" />
        <meta property="og:description" content="Our service terms and conditions for appliance repair services." />
        <meta property="og:url" content="https://riyadhrepairingservice.com/terms" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-gray-800">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#14b8a6]">
            {t("terms.title")}
          </h1>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">
            {t("terms.intro")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("terms.sections.services.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("terms.sections.services.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("terms.sections.payments.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("terms.sections.payments.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("terms.sections.warranty.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("terms.sections.warranty.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("terms.sections.liability.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("terms.sections.liability.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("terms.sections.changes.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("terms.sections.changes.content")}
          </p>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              {t("terms.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;