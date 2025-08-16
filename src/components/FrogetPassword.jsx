import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
    useEffect(() => {
        document.title = "Forget Password | Cherii Bakery";
    }, []);

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!storedUser || storedUser.email !== email) {
            toast.error("Email not found", {
                position: "top-right",
                autoClose: 2000,
            });
            return;
        }

        const newPassword = "cheriibakery";

        const updatedUser = { ...storedUser, password: newPassword };
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

        toast.success(`Password sent to ${email}`, {
            position: "top-center",
            autoClose: 2000,
        });

        setTimeout(() => {
            navigate("/login");
        }, 2200);
    };

    return (
        <div className="min-h-screen flex items-center mt-20 justify-center bg-[#e2eaed] p-4">
            <div className="bg-gradient-to-r from-[#e1dde1] to-[#64b7d6] p-8 rounded-2xl shadow-md w-full max-w-xl text-center relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#6aaabc] px-10 py-2 text-white rounded-3xl text-2xl font-bold">
                    FORGET PASSWORD
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                    <div>
                        <label className="block text-left font-bold text-xl text-pink-700 mb-2">E-MAIL :</label>
                        <input
                            type="email"
                            className="w-full h-[9vh] px-4 py-2 border-2 border-red-300 rounded-full shadow-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-50 bg-gradient-to-r from-[#df477f] to-[#d6d664] text-white cursor-pointer text-lg py-2 rounded-full font-bold"
                    >
                        SUBMIT
                    </button>
                </form>

                <p className="text-gray-500 text-sm mt-6">
                    By Joining And Using EarthBubs Platform, You Agree To Our{" "}
                    <span
                        className="underline cursor-pointer text-sm"
                        onClick={() => navigate("/privacy-policy")}
                    >
                        Terms & Policies
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
