import React from "react";
import SEO from "../components/SEO";

const Privacy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <SEO
        title="Privacy Policy | Riyadh Appliance Repair Services"
        description="Privacy Policy for Riyadh Appliance Repair Services. Learn how we protect your personal information and data."
        keywords="privacy policy, data protection, personal information"
        canonical="https://riyadhrepairingservice.com/privacy"
      />
      <h1 className="text-3xl font-bold mb-6 text-[#14b8a6]">Privacy Policy</h1>
      <p className="mb-4">
        Riyadh Repair Services respects your privacy and is committed to
        protecting your personal information. This policy explains how we
        collect, use, and protect the information you share with us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, phone number, email
        address, and location for booking and communication purposes. We may
        also collect non-identifying technical data (e.g., browser type,
        device information) through cookies and analytics tools.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your information is used to schedule repairs, provide customer support,
        send service updates, process payments, and improve our website and
        services. We may also use your email for marketing if you opt in; you
        can unsubscribe at any time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your data. Access
        to personal information is restricted to authorized personnel only.
        However, no system is 100% secure—please take care when sharing
        sensitive information online.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Third-Party Services</h2>
      <p className="mb-4">
        We use cookies and third-party services (e.g., EmailJS, analytics,
        mapping services) that may collect limited information to provide and
        improve functionality. These third parties have their own privacy
        policies — we recommend reviewing them.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Sharing & Disclosure</h2>
      <p className="mb-4">
        We do not sell your personal information. We may share information with
        trusted service providers who assist in delivering our services (for
        example, payment processors or technicians). We may also disclose
        information when required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or request deletion of your
        personal information. To do so, contact us at the email below. We will
        respond in accordance with applicable laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children</h2>
      <p className="mb-4">
        Our services are not intended for children under 13. We do not knowingly
        collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy or want to request
        access/deletion, contact us at{" "}
        <a href="mailto:riyadhrepairingservice@gmail.com" className="text-[#14b8a6]">
          riyadhrepairingservice@gmail.com
        </a>
        .
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Privacy;
