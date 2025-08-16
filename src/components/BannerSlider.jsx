import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import banner1 from "../assets/images/slide1.png";
import banner2 from "../assets/images/slide2.png";
import banner3 from "../assets/images/slide3.png";
import banner4 from "../assets/images/slide4.png";
import arrow1 from "../assets/images/polygon.png";
import arrow2 from "../assets/images/polygon2.png";
import arrow3 from "../assets/images/polygon3.png";
import arrow4 from "../assets/images/polygon4.png";


const banners = [
  {
    title: "Baked with Love, Served  Joy",
    subtitle: "Freshly baked breads, cakes, and pastries made daily with the finest ingredients",
    bannerImg: banner1,
    arrowImg: arrow1,
    textClass: "text-gray-900",
  },
  {
    title: "Crafting Artisan Since 2012",
    subtitle: "Freshly baked breads, cakes, and pastries made daily with the fineExperience the rich tradition of baking with every bite.st ingredients",
    bannerImg: banner2,
    arrowImg: arrow2,
    textClass: "text-white",
  },
  {
    title: "Your Neighborhood Bakery",
    subtitle: "From oven to your table – fresh, warm, and delicious.",
    bannerImg: banner3,
    arrowImg: arrow3,
    textClass: "text-gray-900",
  },
  {
    title: "Fresh. Local. Handmade.",
    subtitle: "We bake daily so you can enjoy real flavor, every time.",
    bannerImg: banner4,
    arrowImg: arrow4,
    textClass: "text-gray-900",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-700 ${index === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <img
            src={banner.bannerImg}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-5 max-w-[90%] sm:max-w-[80%] md:max-w-[350px] lg:max-w-[500px]">
            <img
              src={banner.arrowImg}
              alt="arrow shape"
              className="w-full h-auto brightness-110 opacity-80"
            />
            <div className="absolute inset-0 flex flex-col justify-around items-center text-center px-3 sm:px-5 py-10">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold leading-snug break-words">
                {banner.title}
              </h2>
              <p
                className={`my-2 sm:my-3 text-[10px] sm:text-sm md:text-base lg:text-lg font-semibold leading-relaxed break-words ${banner.textClass}`}
              >
                {banner.subtitle}
              </p>
              <Link to="/our-products">
                <button className="px-4 sm:px-6 py-2 bg-[#F4d03c] hover:bg-yellow-100 font-semibold text-black rounded-full text-xs sm:text-sm md:text-base cursor-pointer">
                  EXPLORE NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
