import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Cherii Bakery';
  }, []);
  const navigate = useNavigate();

  return (
    <div className="mt-28 md:mt-28 lg:mt-28 bg-[#FFF8F0] min-h-screen px-4 sm:px-8 lg:px-24 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Privacy Policy – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Effective Date:</span> 25/08/25
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Privacy Matters
      </h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        At Cherii Bakery, we deeply value your trust and are fully committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and safeguard your data when you shop with us.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Information We Collect
      </h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          When you visit our website, create an account, place an order, or sign up for newsletters, we may collect
          personal information such as your name, email address, shipping address, phone number, and payment details.
        </p>
        <p>
          We also collect technical data like your IP address, browser type, and device type to improve user experience
          and website performance.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        How We Use Your Information
      </h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          Your information is used to:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Process and deliver your bakery product orders</li>
          <li>Send order updates and tracking information</li>
          <li>Improve our website, services, and product offerings</li>
          <li>Respond to customer service requests and questions</li>
          <li>Send promotional offers and newsletters (only if you opt in)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Data Security
      </h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          We use industry-standard encryption and security measures to protect your personal and payment information.
          Your data is stored securely and only accessible to authorized personnel.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Sharing Your Information
      </h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          We do not sell or rent your personal information. We only share it with trusted third-party services for
          purposes like payment processing, order fulfillment, and delivery.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Your Rights
      </h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          You have the right to access, correct, or delete your data at any time. You can also unsubscribe from our
          marketing communications by clicking the unsubscribe link in emails or contacting us directly.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Changes to This Policy
      </h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p>
          We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
          effective date. We encourage you to review it regularly.
        </p>
      </div>

      <div className="mt-10">
        <button
          onClick={() => navigate('/contact')}
          className="bg-[#ffe5b4] hover:bg-[#ffb347] text-black cursor-pointer px-8 py-3 rounded-md text-base font-semibold"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
