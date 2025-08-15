import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../assets/images/cake_pay.jpg";
import pay1Img from "../assets/images/upi.png";
import pay2Img from "../assets/images/wallet.png";
import pay3Img from "../assets/images/vector.png";
import designs from "../assets/images/faq1.png";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    product,
    selectedWeight: initWeight,
    quantity: initQty,
    unitPrice,
    category
  } = state || {};

  const [quantity, setQuantity] = useState(Number(initQty) || 1);
  const [weight, setWeight] = useState(initWeight || "500 G");
  const [pricePerKg] = useState(Number(unitPrice) || 0); 
  const [discount] = useState(0.15);
  const [deliveryFee] = useState(40);
  const [gstRate] = useState(0.05);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState("");

  const [selectedPayment, setSelectedPayment] = useState("");

  const getWeightInKg = (w) => {
    if (!w) return 1;
    const lower = w.toLowerCase().trim();
    if (lower.endsWith("kg")) {
      return parseFloat(lower.replace("kg", "").trim()); 
    }
    if (lower.endsWith("g")) {
      return parseFloat(lower.replace("g", "").trim()) / 1000;
    }
    return 1;
  };

  const weightInKg = getWeightInKg(weight);

  const totalProductPrice = pricePerKg * weightInKg * quantity;
  const discountAmount = totalProductPrice * discount;
  const gstAmount = (totalProductPrice - discountAmount) * gstRate;
  const total = totalProductPrice - discountAmount + deliveryFee + gstAmount;

  const displayCategory = category
    ? category.toUpperCase()
    : product?.category?.toUpperCase() || "";

  const validateForm = () => {
    if (!name || !location || !mobile || !notes || !address) {
      toast.error("Please fill in all address fields");
      return false;
    }
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return false;
    }
    return true;
  };

  const handleOrder = () => {
    if (!validateForm()) return;

    navigate("/delivery", { state: { productImage: product?.img } });
  };

  return (
    <div className="bg-[#FAF3E7] text-gray-800 min-h-screen p-4 sm:p-8 space-y-10">
      <section className="bg-[#fff5ec] p-6">
        <h2 className="text-md md:text-xl lg:text-2xl text-center text-orange-500 font-bold tracking-wide mb-6">
          PRODUCT DETAILS
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src={product?.img}
              alt={product?.title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="mt-10">
            <p className="text-sm text-gray-600 mb-1">Cherii bakery</p>
            <h3 className="text-2xl font-bold text-orange-600 mb-3">
              {product?.title}
            </h3>
            <p className="text-lg font-semibold leading-snug mb-4">
              {product?.description}
            </p>
            <p className="text-2xl font-bold">₹ {pricePerKg} / KG</p>
            <p className="text-sm text-gray-500 mb-6">INCL. OF ALL TAXES</p>

            <div className="mb-6">
              <p className="font-semibold">WEIGHT:</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["500 G", "1 KG", "2 KG", "3 KG", "4 KG", "5 KG"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWeight(w)}
                    className={`px-4 py-1.5 border cursor-pointer rounded text-sm font-medium transition-all
                      ${
                        weight === w
                          ? "bg-yellow-400 border-yellow-500"
                          : "bg-white border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">QUANTITY:</p>
              <div className="flex items-center border border-gray-300 rounded w-28">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 cursor-pointer text-lg font-bold hover:bg-gray-100"
                >
                  -
                </button>
                <span className="flex-1 text-center text-lg font-medium">
                  {quantity.toString().padStart(2, "0")}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-lg cursor-pointer font-bold hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff5ec] p-6">
        <h2 className="text-center text-orange-600 font-bold text-lg tracking-wide mb-4">
          ADD ADDRESS
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <div className="space-y-6">
            <label className="block text-md font-medium text-gray-700">
              Name*
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
            <label className="block text-md font-medium text-gray-700">
              Delivery Location*
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
            <label className="block text-md font-medium text-gray-700">
              Mobile No*
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
            <label className="block text-md font-medium text-gray-700">
              Add Notes*
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
            <label className="block text-md font-medium text-gray-700">
              Address*
              <textarea
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
          </div>

          <div className="flex justify-center">
            <img
              src={img}
              alt="Dessert"
              className="w-full max-w-xs rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff5ec] p-6 space-y-8">
        <h2 className="text-center text-lg text-orange-600 font-bold tracking-wide">
          PAYMENT OPTIONS
        </h2>

        <div className="max-w-4xl mx-auto border border-gray-300 rounded p-6 space-y-6">
          {[
            { img: pay1Img, label: "Pay UPI", sub: "+Upi Id", value: "upi" },
            { img: pay2Img, label: "Pay Wallet", sub: "+Wallet Id", value: "wallet" },
            { img: pay3Img, label: "Pay Credit Card", sub: "+Credit Card Id", value: "card" }
          ].map((pay, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-14 h-14 rounded-full bg-[#d99a6c] flex items-center justify-center">
                  <img src={pay.img} alt={pay.label} className="w-10 h-10" />
                </div>
                <div>
                  <p className="font-semibold">{pay.label}</p>
                  <p className="text-sm">{pay.sub}</p>
                  <input
                    type="text"
                    placeholder="Enter Id"
                    className="border border-gray-300 rounded w-40 p-1 mt-1 text-sm"
                  />
                </div>
              </div>
              <input
                type="radio"
                name="payment"
                checked={selectedPayment === pay.value}
                onChange={() => setSelectedPayment(pay.value)}
                className="w-4 h-4"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-sm font-bold">
          <div className="flex justify-between">
            <span>QUANTITY</span>
            <span>
              {quantity} {weight} {displayCategory}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TOTAL PRODUCT PRICE</span>
            <span>₹ {totalProductPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>DISCOUNT AMOUNT 15%</span>
            <span>-₹ {discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>DELIVERY FEE</span>
            <span>+₹ {deliveryFee}</span>
          </div>
          <div className="flex justify-between">
            <span>INCL.GST5%</span>
            <span>+₹ {gstAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold mt-4">
            <span>TOTAL PRICE AMOUNT</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleOrder}
            className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer w-80 py-2 rounded-full font-semibold mt-8 mx-auto block"
          >
            PAY & ORDER NOW
          </button>
        </div>
      </section>

      <div className="flex justify-center my-2">
        <img src={designs} alt="divider" className="w-2/3 md:w-2/3" />
      </div>
    </div>
  );
};

export default PaymentPage;