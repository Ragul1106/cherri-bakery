import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import saver1 from '../assets/images/cakep1.png';
import saver2 from '../assets/images/creamroll1.jpeg';
import saver3 from '../assets/images/sweet6.png';

const SuperSavers = () => {
  useEffect(() => {
    document.title = 'Super Savers | Cherii Bakery';
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-[#E57F35] mb-2">
        Super Savers – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Effective Date:</span> 25/08/25
      </p>

      <p className="text-lg text-black font-semibold mb-10 leading-relaxed">
        Enjoy unbeatable deals with our Cherii Bakery Super Savers! 
        We bring you fresh bakes, delightful snacks, and indulgent desserts 
        at prices that make your taste buds and your wallet happy. 
        Check out our current offers below!
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-5xl font-semibold text-[#E57F35] mb-4">
            Fresh Morning Bakes
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Start your day right with our fresh croissants, muffins, and bread loaves.
            Special morning deals for early risers – up to 30% off before 10 AM!
          </p>
        </div>
        <div>
          <img src={saver1} alt="Morning Bakes" className="rounded-lg w-120 h-100 object-cover shadow-md" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <img src={saver2} alt="Snack Deals" className="rounded-lg shadow-md" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-5xl font-semibold text-[#E57F35] mb-4">
            Afternoon Snack Deals
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Beat the midday cravings with our savory pastries and sweet bites.
            Bundle offers available for friends and families to enjoy together.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-5xl font-semibold text-[#E57F35] mb-4">
            Evening Dessert Bliss
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            End your day on a sweet note with cakes, tarts, and puddings at special prices.
            Perfect for celebrations or simply treating yourself.
          </p>
        </div>
        <div>
          <img src={saver3} alt="Evening Desserts" className="rounded-lg w-150 h-100 object-contain" />
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => navigate('/contact')}
          className="bg-[#ffe5b4] hover:bg-[#ffb347] text-black cursor-pointer px-8 py-3 rounded-md text-base font-semibold"
        >
          Contact Us for Offers
        </button>
      </div>
    </div>
  );
};

export default SuperSavers;
