import React from "react";
import SEO from "../components/SEO";

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 mt-16 sm:mt-20">
      <SEO
        title="Privacy Policy | Riyadh Appliance Repair Services"
        description="Privacy Policy for Riyadh Appliance Repair Services. Learn how we protect your personal information and data."
        keywords="privacy policy, data protection, personal information"
        canonical="https://riyadhrepairingservice.com/privacy"
      />
      
      {/* 🔥 FIXED: Consistent Padding Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-gray-800">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#14b8a6]">
            Privacy Policy
          </h1>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">
            Riyadh Repair Services respects your privacy and is committed to
            protecting your personal information. This policy explains how we
            collect, use, and protect the information you share with us.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            1. Information We Collect
          </h2>
          <p className="mb-4 leading-relaxed">
            We may collect personal details such as your name, phone number, email
            address, and location for booking and communication purposes. We may
            also collect non-identifying technical data (e.g., browser type,
            device information) through cookies and analytics tools.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 leading-relaxed">
            Your information is used to schedule repairs, provide customer support,
            send service updates, process payments, and improve our website and
            services. We may also use your email for marketing if you opt in; you
            can unsubscribe at any time.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            3. Data Protection
          </h2>
          <p className="mb-4 leading-relaxed">
            We implement reasonable security measures to protect your data. Access
            to personal information is restricted to authorized personnel only.
            However, no system is 100% secure—please take care when sharing
            sensitive information online.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            4. Cookies & Third-Party Services
          </h2>
          <p className="mb-4 leading-relaxed">
            We use cookies and third-party services (e.g., EmailJS, analytics,
            mapping services) that may collect limited information to provide and
            improve functionality. These third parties have their own privacy
            policies — we recommend reviewing them.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            5. Sharing & Disclosure
          </h2>
          <p className="mb-4 leading-relaxed">
            We do not sell your personal information. We may share information with
            trusted service providers who assist in delivering our services (for
            example, payment processors or technicians). We may also disclose
            information when required by law.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            6. Your Rights
          </h2>
          <p className="mb-4 leading-relaxed">
            You have the right to access, correct, or request deletion of your
            personal information. To do so, contact us at the email below. We will
            respond in accordance with applicable laws.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            7. Children
          </h2>
          <p className="mb-4 leading-relaxed">
            Our services are not intended for children under 13. We do not knowingly
            collect personal information from children.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            8. Contact Us
          </h2>
          <p className="mb-4 leading-relaxed">
            If you have questions about this Privacy Policy or want to request
            access/deletion, contact us at{" "}
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
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;