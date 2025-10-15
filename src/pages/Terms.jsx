import React from "react";
import SEO from "../components/SEO";

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 mt-16 sm:mt-20">
      <SEO
        title="Terms & Conditions | Riyadh Appliance Repair Services"
        description="Terms and Conditions for using Riyadh Appliance Repair Services. Read our service terms and policies."
        keywords="terms of service, conditions, service agreement"
        canonical="https://riyadhrepairingservice.com/terms"
      />
      
      {/* 🔥 FIXED: Consistent Padding Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-gray-800">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#14b8a6]">
            Terms of Service
          </h1>
          <p className="mb-4 text-base sm:text-lg leading-relaxed">
            Welcome to Riyadh Repair Services. By accessing or using our website,
            you agree to comply with the following terms and conditions. Please read
            them carefully before using our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            1. Services
          </h2>
          <p className="mb-4 leading-relaxed">
            We provide appliance repair and maintenance services across Riyadh. All
            appointments and repairs are subject to availability and technician
            confirmation.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            2. Payments
          </h2>
          <p className="mb-4 leading-relaxed">
            All payments must be made as agreed during booking. Prices may vary
            depending on the type of appliance, issue severity, and required parts.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            3. Warranty
          </h2>
          <p className="mb-4 leading-relaxed">
            Some repairs may include a limited warranty period as stated at the time
            of service. Damages caused by misuse or external factors are not
            covered.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            4. Limitation of Liability
          </h2>
          <p className="mb-4 leading-relaxed">
            Riyadh Repair Services will not be liable for indirect, incidental, or
            consequential damages resulting from the use or inability to use our
            services.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 text-gray-900">
            5. Changes to Terms
          </h2>
          <p className="mb-4 leading-relaxed">
            We reserve the right to update these Terms of Service at any time. Any
            changes will be posted on this page.
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

export default Terms;