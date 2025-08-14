import React from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import loginBg from "../assets/images/logImg.png";
import registerBg from "../assets/images/regist.png";

export default function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex w-full">
      {/* Login Tab */}
      <button
        onClick={() => setActiveTab("login")}
        className="flex items-center justify-center gap-2 w-1/2 py-4 text-lg font-bold transition-all"
        style={{
          backgroundImage: `url(${activeTab === "login" ? loginBg : registerBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FaSignInAlt />
        Login
      </button>

      {/* Register Tab */}
      <button
        onClick={() => setActiveTab("register")}
        className="flex items-center justify-center gap-2 w-1/2 py-4 text-lg font-bold transition-all"
        style={{
          backgroundImage: `url(${activeTab === "register" ? loginBg : registerBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FaUser />
        Register
      </button>
    </div>
  );
}
