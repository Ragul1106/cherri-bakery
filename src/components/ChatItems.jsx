import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chat1 from "../assets/images/chat1.jpg";
import chat2 from "../assets/images/chat2.jpg";
import chat3 from "../assets/images/chat3.jpg";

const ChatItems = () => {
  useEffect(() => {
    document.title = "Chat Items | Cherii Bakery";
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-[#fffaf5]">
      <h1 className="text-3xl md:text-4xl font-bold text-[#e07a5f] mb-2">
        Chat Items – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Updated:</span> 25/08/25
      </p>

      <p className="text-lg text-black font-semibold mb-10 leading-relaxed">
        Spice up your cravings with our freshly prepared <span className="text-[#e07a5f]">Chat Items</span>. 
        From crispy samosas to tangy pani puri and hearty chaat platters, 
        our menu is perfect for those who love bold flavors and street-style taste.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#e07a5f] mb-4">
            Crispy Samosa
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Golden fried, stuffed with spiced potatoes and peas — our samosas 
            are the perfect snack to pair with a cup of chai.
          </p>
        </div>
        <div>
          <img
            src={chat1}
            alt="Crispy Samosa"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <img
            src={chat2}
            alt="Pani Puri"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold text-[#e07a5f] mb-4">
            Tangy Pani Puri
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Hollow puris filled with spicy potato mix and tangy flavored water. 
            A burst of flavor in every bite!
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#e07a5f] mb-4">
            Chaat Platter
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            A wholesome platter with a mix of bhel puri, sev puri, and dahi chaat — 
            perfect to share with friends and family.
          </p>
        </div>
        <div>
          <img
            src={chat3}
            alt="Chaat Platter"
            className="rounded-lg w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/sevories")}
          className="bg-[#f4a261] hover:bg-[#e76f51] text-white cursor-pointer px-8 py-3 rounded-md text-base font-semibold transition"
        >
          Go to Chat Items
        </button>
      </div>
    </div>
  );
};

export default ChatItems;
