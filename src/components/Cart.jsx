import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const weights = ["500 G", "1 KG", "2 KG", "3 KG", "4 KG", "5 KG"];

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, updateWeight } =
    useCart();

  return (
    <section className="mt-20 md:mt-28 lg:mt-28 bg-[#FFF8F0] py-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <div className="flex justify-end gap-3 mb-6">
          {cart.length > 0 && (
            <>
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-[#E3C46D] rounded-full font-semibold text-black"
              >
                REMOVE ALL
              </button>

              <Link
                to="/payment"
                state={{ cartItems: cart }}
                className="px-4 py-2 border border-[#E3C46D] rounded-full font-semibold text-black"
              >
                NEXT
              </Link>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight}`}
                className="bg-white rounded-xl overflow-hidden shadow-md relative flex flex-col"
              >
                <Link to={`/product/${item.id}`} className="flex-1">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </Link>

                <div
                  onClick={() => removeFromCart(item.id, item.selectedWeight)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md border border-gray-300 hover:bg-[#D99A6C] hover:text-white transition-colors cursor-pointer"
                >
                  <FaTrash className="text-red-500" />
                </div>

                <div className="p-3 bg-[#F3E5AB]">
                  <h3 className="font-bold text-lg">{item.title}</h3>

                  <p className="text-sm">
                    FROM: ₹{item.price} <span className="text-xs">PER KG</span>
                  </p>

                  {item.category && (
                    <p className="text-xs text-gray-600 mt-1">
                      Category: {item.category.toUpperCase()}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
