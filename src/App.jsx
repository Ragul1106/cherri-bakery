import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Login from "./components/LoginAndRegister";
import ForgetPassword from "./components/FrogetPassword";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blogs";
import ContactUs from "./components/Contact";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductDetails from "./components/Productsdescription";
import PaymentPage from "./components/PaymentPage";
import DeliveryDetails from "./components/DeliveryDetails";
import Cake from "./components/Cake";
import Pastries from "./components/Pastries";
import Sweet from "./components/Sweet";
import GiftBox from "./components/GiftBox";
import Sevories from "./components/Sevories";
import Bread from "./components/Bread";
import Cookie from "./components/Cookies";
import CreamRoll from "./components/CreamRoll";
import Muffins from "./components/Muffins"; 
import Chips from "./components/Chips";
import Chocolates from "./components/Chocolate";
import Rusk from "./components/Rusk";
import OurProducts from "./components/OurProduct";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./components/Privacy_Policy";
import RefundPolicy from "./components/Refund_Policy";
import TermsAndConditions from "./components/TermsAndCondition";
import Muesli from "./components/Muesli";
import GranolaBars from "./components/GranolaBars";
import SuperSavers from "./components/SuperSaver";
import SeedMixes from "./components/SeedMixes";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/delivery" element={<DeliveryDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/pastries" element={<Pastries />} />
            <Route path="/sweets" element={<Sweet />} />
            <Route path="/giftbox" element={<GiftBox />} />
            <Route path="/sevories" element={<Sevories />} />
            <Route path="/breads" element={<Bread />} />
            <Route path="/cookies" element={<Cookie />} />
            <Route path="/creamroll" element={<CreamRoll />} />
            <Route path="/muffins" element={<Muffins />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/chocolates" element={<Chocolates />} />
            <Route path="/rusk" element={<Rusk />} />
            <Route path="/muesli" element={<Muesli />} />
            <Route path="/granolabars" element={<GranolaBars />} />
            <Route path="/super-savers" element={<SuperSavers />} />
            <Route path="/seed-mixes" element={<SeedMixes />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>
        <ToastContainer position="top-center" autoClose={2000} />
      </WishlistProvider>
    </>
  );
}

export default App;