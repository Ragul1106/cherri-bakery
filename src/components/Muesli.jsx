import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import muesli1 from "../assets/images/muesli1.webp";
import muesli2 from "../assets/images/muesli2.jpg";
import muesli3 from "../assets/images/muesli3.jpg";

const Muesli = () => {
  useEffect(() => {
    document.title = 'Muesli | Cherii Bakery';
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-[#FFF8F0]">
      <h1 className="text-3xl md:text-4xl font-bold text-[#E7833C] mb-2">
        Muesli – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Updated:</span> 25/08/25
      </p>

      <p className="text-lg text-black font-semibold mb-10 leading-relaxed">
        Our wholesome Muesli blends are packed with the goodness of grains, nuts, seeds, 
        and dried fruits — the perfect way to start your morning or enjoy as a healthy snack. 
        Discover our handpicked varieties below.
      </p>

      {/* Classic Fruit & Nut Muesli */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#E7833C] mb-4">
            Classic Fruit & Nut Muesli
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            A delicious mix of rolled oats, almonds, raisins, and dried cranberries 
            for a naturally sweet and crunchy breakfast.
          </p>
        </div>
        <div>
          <img 
            src={muesli1} 
            alt="Classic Fruit & Nut Muesli" 
            className="rounded-lg w-full h-auto object-cover shadow-md" 
          />
        </div>
      </div>

      {/* Chocolate & Almond Muesli */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <img 
            src={muesli2} 
            alt="Chocolate & Almond Muesli" 
            className="rounded-lg w-full h-auto object-cover shadow-md" 
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold text-[#E7833C] mb-4">
            Chocolate & Almond Muesli
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Indulge guilt-free with a blend of whole grains, roasted almonds, and 
            rich dark chocolate chunks.
          </p>
        </div>
      </div>

      {/* Tropical Delight Muesli */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#E7833C] mb-4">
            Tropical Delight Muesli
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            A sunny mix of oats, coconut flakes, dried mango, and pineapple — 
            bringing a tropical twist to your breakfast bowl.
          </p>
        </div>
        <div>
          <img 
            src={muesli3} 
            alt="Tropical Delight Muesli" 
            className="rounded-lg w-full h-auto object-cover shadow-md" 
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/our-products')}
          className="bg-[#E7833C] hover:bg-[#d1722f] text-white cursor-pointer px-8 py-3 rounded-md text-base font-semibold transition duration-300"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Muesli;
