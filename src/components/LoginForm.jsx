import React from "react";
import cake from "../assets/images/loginimg.jpg";

export default function LoginForm() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
      {/* Form */}
      <div className="w-full md:w-1/2 space-y-4">
        <label className="block font-medium">E-Mail</label>
        <input type="email" placeholder="Enter Your E-Mail" className="w-full border rounded-md p-2" />

        <label className="block font-medium">Password</label>
        <input type="password" placeholder="Enter Your Password" className="w-full border rounded-md p-2" />

        <button className="w-full bg-yellow-400 py-2 rounded-md font-bold">Login</button>

        <p className="text-sm text-orange-500 cursor-pointer">Lost Your Password</p>
        <p className="text-sm">
          Don’t Have An Account? <span className="text-orange-500 cursor-pointer">Register</span>
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-gradient-to-br from-orange-500 to-orange-300 p-4 rounded-xl transform rotate-[-5deg]">
          <img
            src={cake}
            alt="Cake"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
