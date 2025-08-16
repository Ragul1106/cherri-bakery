import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import seed1 from '../assets/images/seedmix1.webp';
import seed2 from '../assets/images/seedmix2.webp';
import seed3 from '../assets/images/seedmix3.webp';

const SeedMixes = () => {
  useEffect(() => {
    document.title = 'Seed Mixes | Cherii Bakery';
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 mt-28 md:mt-28 lg:mt-28 bg-[#FFF8F0] ">
      <h1 className="text-3xl md:text-4xl font-bold text-[#4B7F52] mb-2">
        Seed Mixes – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Updated:</span> 25/08/25
      </p>

      <p className="text-lg text-black font-semibold mb-10 leading-relaxed">
        Packed with nutrition and flavor, our Seed Mixes are perfect for a healthy snack 
        or as an addition to your favorite meals. From omega-rich blends to energy-boosting 
        varieties, there’s something for everyone.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#4B7F52] mb-4">
            Premium Seed Mix
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            A wholesome mix of sunflower, pumpkin, and chia seeds — rich in protein and 
            essential nutrients to keep you energized throughout the day.
          </p>
        </div>
        <div>
          <img 
            src={seed1} 
            alt="Premium Seed Mix" 
            className="rounded-lg w-full h-auto object-cover" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <img 
            src={seed2} 
            alt="Omega Boost Mix" 
            className="rounded-lg w-full h-auto object-cover" 
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold text-[#4B7F52] mb-4">
            Omega Boost Mix
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Loaded with flax, hemp, and sesame seeds — a natural source of omega-3 
            fatty acids that support heart and brain health.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#4B7F52] mb-4">
            Energy Blend Mix
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Perfect for active lifestyles, this mix of pumpkin, sunflower, and quinoa 
            seeds gives you the energy boost you need for the day.
          </p>
        </div>
        <div>
          <img 
            src={seed3} 
            alt="Energy Blend Mix" 
            className="rounded-lg w-full h-auto object-cover" 
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/contact')}
          className="bg-[#d8f3dc] hover:bg-[#95d5b2] text-black cursor-pointer px-8 py-3 rounded-md text-base font-semibold"
        >
          Contact Us for More Info
        </button>
      </div>
    </div>
  );
};

export default SeedMixes;
