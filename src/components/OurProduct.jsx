import React from "react";
import { Link } from "react-router-dom";
import cakeImg from "../assets/images/cakes.jpg";
import pastryImg from "../assets/images/pastries.png";
import sweetsImg from "../assets/images/sweets.jpg";
import giftboxImg from "../assets/images/sweets.jpg";
import sevoriesImg from "../assets/images/sevories.jpg";
import breadsImg from "../assets/images/sweets.jpg";
import cookiesImg from "../assets/images/sweets.jpg";
import creamrollImg from "../assets/images/sweets.jpg";
import muffinsImg from "../assets/images/sweets.jpg";
import chipsImg from "../assets/images/sweets.jpg";
import chocolatesImg from "../assets/images/sweets.jpg";
import ruskImg from "../assets/images/rusk.png";
import designs from "../assets/images/faq1.png"; 

export const products = [
  { img: cakeImg, title: "CAKES", types: "20 TYPES", link: "/cake" },
  { img: pastryImg, title: "PASTRIES", types: "12 TYPES", link: "/pastries" },
  { img: sweetsImg, title: "SWEETS", types: "25 TYPES", link: "/sweets" },
  { img: giftboxImg, title: "GIFT BOX", types: "10 TYPES", link: "/giftbox" },
  { img: sevoriesImg, title: "SEVORIES", types: "34 TYPES", link: "/sevories" },
  { img: breadsImg, title: "BREADS", types: "14 TYPES", link: "/breads" },
  { img: cookiesImg, title: "COOKIES & BISCUITS", types: "19 TYPES", link: "/cookies" },
  { img: creamrollImg, title: "CREAM ROLL", types: "4 TYPES", link: "/creamroll" },
  { img: muffinsImg, title: "MUFFINS & FRUIT CAKE", types: "18 TYPES", link: "/muffins" },
  { img: chipsImg, title: "CHIPS", types: "5 TYPES", link: "/chips" },
  { img: chocolatesImg, title: "CHOCHOLATES", types: "10 TYPES", link: "/chocolates" },
  { img: ruskImg, title: "RUSK", types: "7 TYPES", link: "/rusk" },
];

const ProductsSection = () => {
  return (
    <section className="bg-[#FFF8F0] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#D99A6C] mb-10">
          OUR PRODUCTS
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] rounded-lg overflow-hidden group flex-shrink-0"
            >
              <Link to={product.link}>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain rounded-lg cursor-pointer"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-2">
                  <img
                    src={designs}
                    alt="divider"
                    className="w-2/3 md:w-2/3"
                  />
                </div>
      </div>
    </section>
  );
};

export default ProductsSection;
