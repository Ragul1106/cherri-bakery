import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { savories } from "../data/savoriesData";
import { useWishlist } from "../context/WishlistContext";

const Savories = () => {
  const { wishlist, addToWishlist } = useWishlist();

  return (
    <section className="bg-[#FFF8F0] py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-[#D99A6C] mb-10">
          SAVORIES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {savories.map((product) => {
            const inWishlist = wishlist.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="relative rounded-xl overflow-hidden shadow-md group"
              >
                <Link to={`/product/${product.id}`} className="block relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-100 object-cover transform group-hover:scale-105 transition duration-300 cursor-pointer"
                  />
                </Link>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToWishlist(product);
                  }}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md border border-gray-300 hover:bg-[#D99A6C] hover:text-white transition-colors cursor-pointer"
                >
                  <FaHeart
                    className={inWishlist ? "text-red-500" : "text-gray-600"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Savories;
