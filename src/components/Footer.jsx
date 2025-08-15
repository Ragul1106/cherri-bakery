import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../assets/images/logo2.png";
import footerBg from "../assets/images/F1.png";
import footerOverlay from "../assets/images/f2.png";
import insta from "../assets/images/insta.png";
import linkedIn from "../assets/images/linkdIn.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";

export default function Footer() {
  return (
    <footer className="relative py-4 overflow-hidden text-lg">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-10"
        style={{ backgroundImage: `url(${footerOverlay})` }}
      ></div>

      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">

        <div className="w-[150px] mt-2 mx-auto md:mx-0">
          <img src={logo} alt="Cherii" className="mb-2" />
        </div>

        <div className="w-full sm:w-[250px] mx-auto md:mx-20 text-center md:text-left">
          <h3 className="font-bold text-xl mb-4 md:mb-8">Quick Links</h3>
          <ul className="space-y-2 md:space-y-3 font-semibold">
            <li><Link to="/delivery" className="hover:underline">Track Your Order</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund & Cancellation Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div className="mx-auto md:mx-20 text-center md:text-left">
          <h3 className="font-bold text-xl mb-4 md:mb-8">Shop</h3>
          <ul className="space-y-2 md:space-y-3 font-semibold">
            <li><Link to="/cookies" className="hover:underline">Cookies</Link></li>
            <li><Link to="/muesli" className="hover:underline">Muesli</Link></li>
            <li><Link to="/granolabars" className="hover:underline">Granola Bars</Link></li>
            <li><Link to="/seed-mixes" className="hover:underline">Seed Mixes</Link></li>
            <li><Link to="/giftbox" className="hover:underline">Gift Boxes</Link></li>
            <li><Link to="/super-savers" className="hover:underline">Super Savers</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-4 md:mb-8">Contact</h3>
          <ul className="space-y-2 md:space-y-3 font-semibold">
            <li className="flex flex-col md:flex-row md:items-start md:gap-2">
              <IoLocationOutline size={36} className="mx-auto md:mx-0" />
              <span>No.45, anna salai, T. nagar, chennai - 600 017</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-center md:gap-2">
              <AiOutlineMail size={22} className="mx-auto md:mx-0" />
              <a href="mailto:info@cherii.com" className="hover:underline">info@cherii.com</a>
            </li>
            <li className="flex flex-col md:flex-row md:items-center md:gap-2">
              <MdOutlinePhone size={22} className="mx-auto md:mx-0" />
              <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a>
            </li>
          </ul>

          <div className="mt-4">
            <h4 className="font-bold mb-2 text-lg">Follow us</h4>
            <div className="flex justify-center md:justify-start gap-2">
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <img src={insta} alt="Instagram" className="text-black p-2 rounded" />
              </a>

              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <img src={linkedIn} alt="LinkedIn" className="text-black p-2 rounded" />
              </a>

              <a
                href="https://www.facebook.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <img src={facebook} alt="Facebook" className="text-black p-2 rounded" />
              </a>

              <a
                href="https://accounts.google.com/ServiceLogin?service=youtube"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <img src={youtube} alt="YouTube" className="text-black p-2 rounded" />
              </a>
            </div>
          </div>



        </div>
      </div>
    </footer>
  );
}