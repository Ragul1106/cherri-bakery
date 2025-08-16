import React from "react";
import aboutImg1 from "../assets/images/ab1.png"; 
import aboutImg2 from "../assets/images/ab2.png"; 
import visitImg from "../assets/images/ab3.png"; 
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import card5 from "../assets/images/card5.png";

export default function AboutUs() {
  const cards = [card1, card2, card3, card4, card5];

  return (
    <div className="mt-20 md:mt-28 lg:mt-28 bg-[#FFF8F0]  text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-center text-[#e7833c] font-bold text-2xl mb-4">ABOUT US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-center text-xl sm:text-2xl mb-4 font-semibold">
              Baking From the Heart Since 2012
              <br />
              At Cherii Bakery, every loaf, pastry, and cake tells a story. What
              started as a small kitchen passion has blossomed into a community
              favorite. We believe in using time-honored recipes, fresh local
              ingredients, and a generous sprinkle of love in every bite.
            </p>
            <p className="text-center text-xl sm:text-2xl mb-4 font-semibold">
              Our mission is to bring joy through handcrafted baked goods made
              daily with care and dedication. Whether it's your morning bread or a
              special occasion cake, we treat each creation as if it's for family.
            </p>
            <p className="text-center text-xl sm:text-2xl mb-4 font-semibold">
              We're proud to serve our neighborhood, support local farmers, and
              bake a little happiness into every day.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={aboutImg1} alt="Bake it till you make it" className="w-60 sm:w-80" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl flex flex-col md:flex-row justify-around mx-auto px-6 py-12 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img src={aboutImg2} alt="The secret ingredient is love" className="w-60 md:w-5xl" />
        </div>
        <div>
          <h2 className="text-[#e7833c] font-bold text-2xl mb-6 text-center md:text-left">OUR STORY</h2>
          <p className="text-center text-xl sm:text-2xl mb-4 font-semibold">
            Cherii Bakery began as a home kitchen dream and quickly became a beloved
            neighborhood treasure. Founded on the values of equity, community, and
            homemade charm, we bake everything fresh each day using family recipes
            and locally sourced ingredients.
          </p>
        </div>
      </section>

      <h2 className="text-[#ed904c] text-center font-bold text-2xl">WHAT WE BELIEVE IN</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 mb-10 px-4">
        {cards.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Card ${index + 1}`}
              className="w-[100px] sm:w-[150px] md:w-[200px] h-auto object-contain"
            />
          </div>
        ))}
      </div>

      <section className="bg-[#f2e396] py-2 px-4">
        <h4 className="text-center text-[#e7833c] font-bold text-2xl mb-2">MEET THE BAKERY</h4>
        <p className="text-center text-lg sm:text-xl font-semibold max-w-6xl mx-auto">
          Our team is made up of passionate bakers who bring skill, creativity, and care
          to every product. From our Head Baker to our pastry chefs, everyone shares a
          commitment to quality and customer happiness.
        </p>
      </section>

      <h2 className="text-[#e7833c] text-center font-bold text-2xl mt-6 mb-4">COME VISIT US</h2>
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 text-center font-semibold text-2xl">
            We’re serving smiles across Tamil Nadu with many franchise locations!
          </p>
          <p className="mb-4 text-center font-semibold text-2xl">
            Drop by your nearest branch and enjoy our fresh, handcrafted treats.
          </p>
          <div>
            <h3 className="text-[#e7833c] text-center md:text-left font-bold text-xl sm:text-2xl mb-2">Head office:</h3>
            <address className="font-semibold text-center md:text-left">
              Cherii bakery, <br />
              No.45, Anna Salai, T. Nagar, <br />
              Chennai - 600 017, <br />
              Tamil Nadu, India
            </address>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={visitImg} alt="Sugar butter vanilla cocoa flour" className="w-60 sm:w-80" />
        </div>
      </section>
    </div>
  );
}
