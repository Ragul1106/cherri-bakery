import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import granola1 from "../assets/images/granola1.jpg";
import granola2 from "../assets/images/granola2.png";
import granola3 from "../assets/images/granola3.jpg";

const GranolaBars = () => {
  useEffect(() => {
    document.title = 'Granola Bars | Cherii Bakery';
  }, []);

  const navigate = useNavigate();

  return (
    <div className=" mt-28 md:mt-28 lg:mt-28 min-h-screen px-4 sm:px-8 lg:px-24 py-10 bg-[#FFF8F0]">
      <h1 className="text-3xl md:text-4xl font-bold text-[#E7833C] mb-2">
        Granola Bars – Cherii Bakery
      </h1>
      <p className="text-base text-gray-600 mb-8">
        <span className="font-semibold">Updated:</span> 25/08/25
      </p>

      <p className="text-lg text-black font-semibold mb-10 leading-relaxed">
        Our handmade Granola Bars are the perfect grab-and-go snack, crafted 
        with wholesome oats, nuts, seeds, and natural sweeteners. 
        Packed with flavor and energy, they’re ideal for breakfast or a mid-day boost.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#E7833C] mb-4">
            Almond & Honey Granola Bar
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            A crunchy blend of oats, roasted almonds, and golden honey — 
            a sweet and nutty treat full of natural goodness.
          </p>
        </div>
        <div>
          <img 
            src={granola1} 
            alt="Almond & Honey Granola Bar" 
            className="rounded-lg w-full h-auto object-cover shadow-md" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="order-2 md:order-1">
          <img 
            src={granola2} 
            alt="Chocolate Chip Granola Bar" 
            className="rounded-lg w-full h-auto object-cover shadow-md" 
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold text-[#E7833C] mb-4">
            Chocolate Chip Granola Bar
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            Deliciously indulgent with crunchy oats, a hint of cinnamon, and 
            rich chocolate chips in every bite.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-4xl font-semibold text-[#E7833C] mb-4">
            Fruit & Nut Granola Bar
          </h2>
          <p className="text-xl text-black font-semibold leading-relaxed">
            A perfect mix of dried cranberries, raisins, cashews, and almonds 
            — chewy, crunchy, and full of flavor.
          </p>
        </div>
        <div>
          <img 
            src={granola3} 
            alt="Fruit & Nut Granola Bar" 
            className="rounded-lg w-full h-auto object-cover shadow-md" 
          />
        </div>
      </div>

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

export default GranolaBars;
