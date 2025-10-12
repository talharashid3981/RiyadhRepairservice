import React from "react";
import SEO from "../components/SEO";

const Terms = () => {
  return (
    
    
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
       <SEO
        title="Terms & Conditions | Riyadh Appliance Repair Services"
        description="Terms and Conditions for using Riyadh Appliance Repair Services. Read our service terms and policies."
        keywords="terms of service, conditions, service agreement"
        canonical="https://riyadhrepairingservice.com/terms"
      />
      <h1 className="text-3xl font-bold mb-6 text-[#14b8a6]">Terms of Service</h1>
      <p className="mb-4">
        Welcome to Riyadh Repair Services. By accessing or using our website,
        you agree to comply with the following terms and conditions. Please read
        them carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
      <p className="mb-4">
        We provide appliance repair and maintenance services across Riyadh. All
        appointments and repairs are subject to availability and technician
        confirmation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Payments</h2>
      <p className="mb-4">
        All payments must be made as agreed during booking. Prices may vary
        depending on the type of appliance, issue severity, and required parts.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Warranty</h2>
      <p className="mb-4">
        Some repairs may include a limited warranty period as stated at the time
        of service. Damages caused by misuse or external factors are not
        covered.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
      <p className="mb-4">
        Riyadh Repair Services will not be liable for indirect, incidental, or
        consequential damages resulting from the use or inability to use our
        services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update these Terms of Service at any time. Any
        changes will be posted on this page.
      </p>

      <p className="mt-8 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Terms;
