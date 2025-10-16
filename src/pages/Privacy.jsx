
// ==================== PRIVACY.JSX ====================
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen py-16 mt-16 sm:mt-20">
      {/* ==================== SEO META TAGS - ENGLISH & ARABIC ==================== */}
      <Helmet>
        {/* ===== ENGLISH TITLE ===== */}
        <title>Privacy Policy | Riyadh Repairing Service | Data Protection & Security</title>
        <meta name="title" content="Privacy Policy | Riyadh Repairing Service | Data Protection & Security" />
        <meta name="description" content="Read our privacy policy to understand how Riyadh Repairing Service collects, uses, and protects your personal information. We are committed to safeguarding your privacy and data security." />
        
        {/* ===== ARABIC TITLE ===== */}
        <meta name="title-ar" content="سياسة الخصوصية | خدمة الرياض للإصلاح | حماية البيانات والأمان" />
        <meta name="description-ar" content="اقرأ سياسة الخصوصية الخاصة بنا لفهم كيفية جمع خدمة الرياض للإصلاح واستخدام وحماية معلوماتك الشخصية. نحن ملتزمون بحماية خصوصيتك وأمان بياناتك." />
        
        {/* ===== KEYWORDS ===== */}
        <meta name="keywords" content="privacy policy, data protection, personal information, security, cookies, user rights, information collection, data privacy, GDPR, سياسة الخصوصية, حماية البيانات, المعلومات الشخصية, الأمان, ملفات تعريف الارتباط, حقوق المستخدم, جمع المعلومات, خصوصية البيانات" />
        
        {/* ===== CANONICAL URL ===== */}
        <link rel="canonical" href="https://riyadhrepairingservice.com/privacy" />
        
        {/* ===== HREFLANG TAGS ===== */}
        <link rel="alternate" href="https://riyadhrepairingservice.com/privacy" hreflang="en" />
        <link rel="alternate" href="https://riyadhrepairingservice.com/ar/privacy" hreflang="ar" />
        
        {/* ===== ROBOTS ===== */}
        <meta name="robots" content="index, follow" />
        
        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="Privacy Policy - Riyadh Repairing Service" />
        <meta property="og:description" content="Our commitment to protecting your privacy and personal information." />
        <meta property="og:url" content="https://riyadhrepairingservice.com/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-gray-800">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#14b8a6]">
            {t("privacy.title")}
          </h1>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">
            {t("privacy.intro")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.infoCollect.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.infoCollect.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.howWeUse.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.howWeUse.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.dataProtection.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.dataProtection.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.cookies.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.cookies.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.sharing.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.sharing.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.yourRights.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.yourRights.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.children.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.children.content")}
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            {t("privacy.sections.contact.title")}
          </h2>
          <p className="mb-4 leading-relaxed">
            {t("privacy.sections.contact.content")}{" "}
            <a 
              href="mailto:riyadhrepairingservice@gmail.com" 
              className="text-[#14b8a6] hover:text-[#0d9488] font-semibold transition-colors underline"
            >
              riyadhrepairingservice@gmail.com
            </a>
            .
          </p>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;