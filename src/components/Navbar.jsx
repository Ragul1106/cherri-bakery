// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { CgBell } from "react-icons/cg";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FaSearch, FaBars, FaTimes, FaHeart, FaBell, FaShoppingBag } from "react-icons/fa";
// import logo from "../assets/images/logo.png";
// import { useCart } from "../context/CartContext";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { cart } = useCart();
//   const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
//   const navigate = useNavigate();

//   return (
//     <nav className="bg-[#D99A6C] px-8 py-4 gap-10 flex items-center justify-around h-28 z-50 relative">
//       <img src={logo} alt="logo" className="w-26 h-24" />

//       <div className="hidden md:flex sm:flex flex-col justify-between h-full py-1">
//         <div className="flex items-center justify-center space-x-8 text-black font-bold text-lg">
//           <Link to="/" className="hover:underline">HOME</Link>
//           <Link to="/about-us" className="hover:underline">ABOUT US</Link>
//           <Link to="/our-products" className="hover:underline">OUR PRODUCTS</Link>
//           <Link to="/blog" className="hover:underline">BLOG</Link>
//           <Link to="/contact" className="hover:underline">CONTACT US</Link>
//         </div>

//         <div className="flex items-center bg-[#FFF8F0] rounded-xl px-4 py-1 mt-6 shadow-md w-[550px] mx-auto">
//           <FaSearch className="text-gray-500 mr-10 cursor-pointer" />
//           <input
//             type="text"
//             placeholder="SEARCH HERE"
//             className="bg-transparent outline-none w-full text-gray-500 font-semibold uppercase placeholder-gray-400"
//           />
//         </div>
//         <div className="hidden md:flex flex-col justify-between h-full py-1 items-center">
//           <div className="flex items-center space-x-6 text-black text-xl relative">
//             <Link to="/wishlist" className="text-xl cursor-pointer">
//               <IoMdHeartEmpty />
//             </Link>
//             <Link to="/notify" className="text-xl cursor-pointer">
//               <CgBell />
//             </Link>
//             <Link to="/cart" className="relative text-xl cursor-pointer">
//               <MdOutlineShoppingBag />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>

//           <button
//             onClick={() => navigate("/login")}
//             className="bg-[#f3c744] hover:bg-[#F3E5AB] cursor-pointer px-12 py-2 mt-6 rounded-xl font-bold text-black">
//             LOGIN
//           </button>
//         </div>
//       </div>


//       <button
//         className="md:hidden text-2xl"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {menuOpen && (
//         <div className="absolute top-28 left-0 w-full bg-[#D99A6C] p-4 md:hidden">
//           <ul className="flex flex-col gap-3 text-black font-semibold">
//             <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
//             <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
//             <li><Link to="/our-products" onClick={() => setMenuOpen(false)}>OUR PRODUCTS</Link></li>
//             <li><Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
//             <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
//           </ul>

//           <div className="flex items-center gap-4 mt-4">
//             <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
//               <FaHeart className="text-xl cursor-pointer" />
//             </Link>
//             <FaBell className="text-xl cursor-pointer" />
//             <Link to="/cart" className="relative" onClick={() => setMenuOpen(false)}>
//               <FaShoppingBag className="text-xl cursor-pointer" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgBell } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSearch, FaBars, FaTimes, FaHeart, FaBell, FaShoppingBag } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useCart } from "../context/CartContext";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-[#D99A6C] px-4 lg:px-8 py-4 flex items-center justify-between h-28 z-50 relative">
      <img src={logo} alt="logo" className="w-20 h-16 lg:w-26 lg:h-24 flex-shrink-0" />

      {/* Desktop Menu */}
      <div className="hidden xl:flex flex-col justify-between h-full py-1 flex-1 mx-8">
        <div className="flex items-center justify-center space-x-8 text-black font-bold text-lg">
          <Link to="/" className="hover:underline">HOME</Link>
          <Link to="/about-us" className="hover:underline">ABOUT US</Link>
          <Link to="/our-products" className="hover:underline">OUR PRODUCTS</Link>
          <Link to="/blog" className="hover:underline">BLOG</Link>
          <Link to="/contact" className="hover:underline">CONTACT US</Link>
        </div>

        <div className="flex items-center bg-[#FFF8F0] rounded-xl px-4 py-1 mt-2 shadow-md w-[550px] mx-auto">
          <FaSearch className="text-gray-500 mr-4 cursor-pointer" />
          <input
            type="text"
            placeholder="SEARCH HERE"
            className="bg-transparent outline-none w-full text-gray-500 font-semibold uppercase placeholder-gray-400"
          />
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden xl:flex flex-col justify-between h-full py-1 items-center">
        <div className="flex items-center space-x-6 text-black text-xl">
          <Link to="/wishlist" className="text-xl cursor-pointer">
            <IoMdHeartEmpty />
          </Link>
          <Link to="/notify" className="text-xl cursor-pointer">
            <CgBell />
          </Link>
          <Link to="/cart" className="relative text-xl cursor-pointer">
            <MdOutlineShoppingBag />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {loggedInUser ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 cursor-pointer px-8 lg:px-12 py-2 mt-2 rounded-xl font-bold text-white text-sm lg:text-base"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#f3c744] hover:bg-[#F3E5AB] cursor-pointer px-8 lg:px-12 py-2 mt-2 rounded-xl font-bold text-black text-sm lg:text-base"
          >
            LOGIN
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden text-2xl flex-shrink-0"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-28 left-0 w-full bg-[#D99A6C] p-4 xl:hidden shadow-lg">
          <ul className="flex flex-col gap-3 text-black font-semibold mb-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
            <li><Link to="/our-products" onClick={() => setMenuOpen(false)}>OUR PRODUCTS</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
          </ul>

          <div className="flex items-center bg-[#FFF8F0] rounded-xl px-4 py-2 mb-4 shadow-md">
            <FaSearch className="text-gray-500 mr-3 cursor-pointer" />
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="bg-transparent outline-none w-full text-gray-500 font-semibold uppercase placeholder-gray-400"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
                <FaHeart className="text-xl cursor-pointer" />
              </Link>
              <Link to="/notify" onClick={() => setMenuOpen(false)}>
                <FaBell className="text-xl cursor-pointer" />
              </Link>
              <Link to="/cart" className="relative" onClick={() => setMenuOpen(false)}>
                <FaShoppingBag className="text-xl cursor-pointer" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {loggedInUser ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 cursor-pointer px-8 py-2 rounded-xl font-bold text-white"
              >
                LOGOUT
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                className="bg-[#f3c744] hover:bg-[#F3E5AB] cursor-pointer px-8 py-2 rounded-xl font-bold text-black"
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
