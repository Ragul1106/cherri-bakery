import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSignInAlt, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";

import logImg from "../assets/images/logImg.png";
import loginImage from "../assets/images/loginImage.png";
import regist from "../assets/images/regist.png";
import registImg from "../assets/images/regis.png";
import cake from "../assets/images/loginimg.jpg";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-lg overflow-hidden">
      <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "login" ? (
        <LoginForm setActiveTab={setActiveTab} />
      ) : (
        <RegisterForm setActiveTab={setActiveTab} />
      )}
    </div>
  );
}

function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <div className="mt-20 md:mt-28 lg:mt-28 flex w-full">
      <button
        onClick={() => setActiveTab("login")}
        className={`flex items-center justify-center  gap-2 w-1/2 py-4 mx-3 text-lg font-bold transition-all relative ${activeTab === "login" ? "z-20 text-white" : "z-30 text-[#E57F35]"
          }`}
        style={{
          backgroundImage: `url(${activeTab === "login" ? logImg : loginImage})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PiSignInBold className="text-2xl" /> Login
      </button>

      <button
        onClick={() => setActiveTab("register")}
        className={`flex items-center justify-center  gap-2 w-1/2 py-4 text-lg font-bold transition-all relative ${activeTab === "register" ? "z-20 text-white" : "z-10 text-[#E57F35]"
          }`}
        style={{
          backgroundImage: `url(${activeTab === "register" ? registImg : regist})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          marginLeft: "-40px",
        }}
      >
        <FaUser /> Register
      </button>
    </div>
  );
}

function LoginForm({ setActiveTab }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      toast.success("Login successful");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      navigate("/");
    } else {
      toast.error("Invalid credentials, please register");
      setTimeout(() => {
      setActiveTab("register");
      }, 2000);
    }
  };


  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col md:flex-row items-center gap-6 p-6"
    >
      <div className="w-full md:w-1/2 space-y-4">
        <label className="block font-medium">E-Mail</label>
        <input
          type="email"
          placeholder="Enter Your E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
        />

        <label className="block font-medium">Password</label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2 pr-10"
          />
          <span
            className="absolute right-3 top-4 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F4D03C] hover:bg-[#ec2049] mt-5 cursor-pointer text-white text-3xl py-4 rounded-4xl font-bold"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate("/forget-password")}
          className="text-lg font-bold text-[#E57F35] hover:underline cursor-pointer">
          Lost Your Password
        </button>
        <p className="text-lg font-bold">
            Don't Have An Account?{" "}
            <span
              onClick={() => setActiveTab("register")}
              className="text-[#E57F35] font-bold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="bg-gradient-to-br from-[#E57F35] to-[#D99A6C] p-4 mx-3 md:p-12 mb-4 rounded-xl transform rotate-[-15deg]">
          <img src={cake} alt="Cake" className="rounded-lg w-full h-52 " />
        </div>
      </div>
    </form>
  );
}

function RegisterForm({ setActiveTab }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    if (!email || !password || !firstName || !lastName) {
      toast.error("All fields are required");
      return false;
    }
    if (/\d/.test(firstName) || /\d/.test(lastName)) {
      toast.error("Name cannot contain numbers");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("Password must contain at least one number");
      return false;
    }
    if (!agree) {
      toast.error("You must agree to the terms and privacy policy");
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email)) {
      toast.error("Email already registered");
      return;
    }

    const newUser = { email, password, firstName, lastName };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    toast.success("Registration successful");
    navigate("/");
  };


  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col md:flex-row items-center gap-6 p-6"
    >
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="bg-gradient-to-br from-[#E57F35] to-[#D99A6C] p-4 md:p-12 mb-4 rounded-xl transform rotate-[-10deg]">
          <img src={cake} alt="Cake" className="rounded-lg w-full h-52" />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <label className="block font-medium mt-2">E-Mail</label>
        <input
          type="email"
          placeholder="Enter Your E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
        />

        <label className="block font-medium">Password</label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2 pr-10"
          />
          <span
            className="absolute right-3 top-4 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full py-4 border border-[#992323A6] placeholder:text-[#DAD3D3] rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="w-7 h-7 border-2 border-[#992323A6]"
          />
          <p className="text-xl font-semibold">
            I Have Read And Agree To The{" "}
            <span className="text-[#E57F35] cursor-pointer">Terms</span> And{" "}
            <span className="text-[#E57F35] cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F4D03C] hover:bg-[#ec2049] mt-5 mb-5 cursor-pointer text-white text-3xl py-4 rounded-4xl font-bold"
        >
          Register
        </button>
      </div>
    </form>
  );
}
