import React from "react";
import cake from "../assets/images/loginimg.jpg";

export default function RegisterForm() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-gradient-to-br from-orange-500 to-orange-300 p-4 rounded-xl transform rotate-[5deg]">
          <img
            src={cake}
            alt="Cake"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 space-y-4">
        <label className="block font-medium">E-Mail</label>
        <input type="email" placeholder="Enter Your E-Mail" className="w-full border rounded-md p-2" />

        <label className="block font-medium">Password</label>
        <input type="password" placeholder="Enter Your Password" className="w-full border rounded-md p-2" />

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-medium">First Name</label>
            <input type="text" placeholder="First Name" className="w-full border rounded-md p-2" />
          </div>
          <div className="w-1/2">
            <label className="block font-medium">Last Name</label>
            <input type="text" placeholder="Last Name" className="w-full border rounded-md p-2" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <p className="text-sm">
            I Have Read And Agree To The <span className="text-orange-500">Terms</span> And{" "}
            <span className="text-orange-500">Privacy Policy</span>
          </p>
        </div>

        <button className="w-full bg-yellow-400 py-2 rounded-md font-bold">Register</button>
      </div>
    </div>
  );
}
