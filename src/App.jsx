import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRegister from "./components/LoginAndRegister";
import {Navbar} from "./components/Navbar";
import Login from "./components/AuthPage";
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
import Sweet from "./components/Sweet";
import Savories from "./components/Savories";
import Rusk from "./components/Rusk";
import OurProducts from "./components/OurProduct";
import ScrollToTop from "./components/ScrollToTop";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


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
            {/* <Route path="/login" element={<LoginAndRegister />} />   */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/delivery" element={<DeliveryDetails />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/sweets" element={<Sweet />} />
            <Route path="/sevories" element={<Savories />} />
            <Route path="/rusk" element={<Rusk />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>
        {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      </WishlistProvider>
    </>
  );
}

export default App;