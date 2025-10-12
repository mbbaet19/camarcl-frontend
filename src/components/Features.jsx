import React from "react";
import { CheckCircle, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    title: "Quality Guarantee",
    text: "All our plants are carefully selected and quality-checked",
  },
  {
    icon: <Truck className="h-8 w-8 text-green-600" />,
    title: "Fast Delivery",
    text: "Free shipping on orders over $50 with 2-3 day delivery",
  },
  {
    icon: <Headphones className="h-8 w-8 text-green-600" />,
    title: "Expert Support",
    text: "Our team is here to help with care tips and advice",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <h3 className="font-semibold text-gray-800 mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
