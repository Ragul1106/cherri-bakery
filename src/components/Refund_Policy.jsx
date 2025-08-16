import React, { useEffect } from 'react';

const RefundAndCancellation = () => {
  useEffect(() => {
    document.title = 'Refund & Cancellation Policy | Cherii Bakery';
  }, []);

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 mt-28 md:mt-28 lg:mt-28 bg-[#FFF8F0] ">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Refund & Cancellation Policy – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-6">
        <span className="font-semibold">Effective Date:</span> 19/08/25
      </p>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        At Cherii Bakery, we work hard to ensure every order of fresh bakes, cakes, and treats reaches you in perfect condition. 
        Since our products are made fresh to order, we have a specific Refund and Cancellation Policy to ensure fairness and quality.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Cancellation Policy
      </h2>

      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          <strong>Order Cancellation Window:</strong> Orders can be cancelled within <strong>2 hours</strong> of placing them. 
          After this, our baking process begins, and cancellations may not be possible.
        </p>
        <p>
          <strong>Custom Orders:</strong> Special/custom cake orders cannot be cancelled once confirmed, as ingredients and preparations start immediately.
        </p>
        <p>
          <strong>How to Cancel:</strong> Contact our support team via phone or email with your order ID to request a cancellation.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Refund Policy
      </h2>

      <div className="text-lg text-gray-700 space-y-4 mb-8">
        <p>
          <strong>Eligibility:</strong> Due to the perishable nature of our bakery items, refunds are only issued in cases where:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>The wrong product was delivered</li>
          <li>The product was damaged during delivery</li>
          <li>The product was not delivered at all</li>
        </ul>
        <p>
          <strong>Damaged Products:</strong> If your order arrives damaged, please share clear photos within <strong>24 hours</strong> of delivery 
          along with your order details.
        </p>
        <p>
          <strong>Refund Process:</strong> Once approved, refunds will be processed to your original payment method within 5–7 business days.
        </p>
        <p>
          <strong>No Refunds For:</strong> Change of mind, taste preference, or delays caused by incorrect address information provided by the customer.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        For any questions regarding our refund or cancellation policy, please contact our customer support team at 
        <a href="mailto:support@cheriibakery.com" className="text-blue-600 hover:underline"> support@cheriibakery.com</a> 
        or call <strong>+91-98765-43210</strong>.
      </p>
    </div>
  );
};

export default RefundAndCancellation;
