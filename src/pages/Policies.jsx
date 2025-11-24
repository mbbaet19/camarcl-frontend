// src/pages/Policies.jsx
import React from "react";

const Policies = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-10">
        
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Policies
        </h1>

        {/* Terms & Conditions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Terms & Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using Camarcl Plants and Flower Shop’s website and services, you agree
            to follow our store rules and policies. We reserve the right to update
            product prices, delivery guidelines, and service terms when necessary.
            Customers must provide accurate information upon checkout to ensure
            smooth processing and delivery.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We value your privacy. All customer information — including names,
            addresses, and contact details — is kept confidential and used only
            for order processing, communication, and customer care. We do not sell
            or share personal data with third parties.
          </p>
        </section>

        {/* Refund / Return Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Refund & Return Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We take pride in delivering healthy plants and quality floral
            arrangements. If you receive a damaged or unhealthy product, please
            contact us within <strong>24 hours</strong> with proof (photos or video).
            Eligible issues may be refunded, replaced, or compensated with store
            credit.
          </p>

          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>Refunds are processed only for valid product concerns.</li>
            <li>No refunds for change-of-mind purchases.</li>
            <li>Plants must be returned in the same condition as received.</li>
            <li>Custom floral arrangements are non-refundable.</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Policies;
