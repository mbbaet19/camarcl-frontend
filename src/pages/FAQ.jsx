// src/pages/FAQ.jsx
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of plants and flowers do you offer?",
      answer:
        "We offer a wide selection of indoor and outdoor plants, succulents, ornamental greens, and fresh floral arrangements for all occasions.",
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "At the moment, delivery is available within Laguna and nearby areas. Nationwide shipping will be added soon!",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 1–2 days depending on your location. Same-day delivery is available for selected items.",
    },
    {
      question: "Can I request custom floral arrangements?",
      answer:
        "Yes! We accept custom bouquet and arrangement orders. Just message us through the Contact Us page or our Facebook page.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept GCash, bank transfer, and cash-on-delivery (COD) for selected locations.",
    },
    {
      question: "What should I do if my plant arrives damaged?",
      answer:
        "Please contact us within 24 hours with photos or videos. We’ll gladly assist with replacements or store credit.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-10">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((item, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium text-green-700"
            >
              {item.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`mt-3 text-gray-700 leading-relaxed transition-all duration-300 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
