import React, { useEffect } from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Cherii Bakery';
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 mt-28 md:mt-28 lg:mt-28 bg-[#FFF8F0] ">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Terms & Conditions – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-6">
        <span className="font-semibold">Effective Date:</span> 19/08/25
      </p>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Welcome to Cherii Bakery. By accessing or placing an order on our website, you agree to the terms and conditions outlined below. 
        Please read them carefully before making a purchase. If you do not agree to these terms, we kindly ask that you refrain from using our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1. General
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Cherii Bakery is committed to delivering freshly baked goods made to order. All products are subject to availability and may be substituted 
          with a similar product of equal or higher value if necessary.
        </p>
        <p>
          Prices, product descriptions, and availability are subject to change without prior notice.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2. Orders & Payments
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Orders can be placed via our official website or through our customer support team. All payments must be made in full at the time of ordering.
        </p>
        <p>
          We accept major debit/credit cards, UPI, and net banking. Payments are securely processed through trusted payment gateways.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        3. Delivery & Pickup
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          We offer delivery within our designated service areas. Delivery time slots are subject to availability and may vary during peak seasons.
        </p>
        <p>
          Customers opting for store pickup must collect their orders during operating hours on the scheduled date.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        4. Cancellation & Refunds
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          Cancellations must be made within 2 hours of placing the order. Custom cake orders cannot be cancelled once confirmed.
        </p>
        <p>
          Refunds will only be issued for incorrect or damaged products. Due to the perishable nature of our goods, taste preferences are not eligible for refunds.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        5. Allergens & Dietary Information
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          While we take precautions to avoid cross-contamination, our products may contain or come into contact with common allergens such as nuts, dairy, gluten, and eggs.
        </p>
        <p>
          Customers with severe allergies are advised to contact us before placing an order.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        6. Intellectual Property
      </h2>
      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          All content, images, and designs on the Cherii Bakery website are the intellectual property of Cherii Bakery and may not be used without prior written consent.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        7. Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        For any questions about our Terms & Conditions, please contact us at 
        <a href="mailto:support@cheriibakery.com" className="text-blue-600 hover:underline"> support@cheriibakery.com</a> 
        or call <strong>+91-98765-43210</strong>.
      </p>
    </div>
  );
};

export default TermsAndConditions;
