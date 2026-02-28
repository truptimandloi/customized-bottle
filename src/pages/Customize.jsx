"use client";

import { useState } from "react";
import { useCustomizer } from "../context/CustomizerContext";
import BottleViewer from "../components/customizer/BottleViewer";
import DesignSelector from "../components/customizer/DesignSelector";
import LabelForm from "../components/customizer/LabelForm";
import LabelGenerator from "../components/customizer/LabelGenerator";
import Step4 from "../components/customizer/Step4";

export default function Customize() {
  const [step, setStep] = useState(1);
  const {
    selectedDesign,
    quantity,
    setQuantity,
    brand,
    setBrand,
    tagline,
    price,
    logo,
    setLogo,
    labelImage,
  } = useCustomizer();

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleConfirmOrder = () => {
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity before confirming.");
      return;
    }
    if (!labelImage) {
      alert("Label not generated yet. Please go back and create your label.");
      return;
    }

    const orderDetails = `
🍾 *BOTTLE ORDER CONFIRMATION*

*Design:* ${["Round", "Square", "Cylindrical", "Premium", "Eco"][selectedDesign - 1] || "Custom"}
*Brand:* ${brand}
*Tagline:* ${tagline}
*Price:* ₹${price} per piece
*Quantity:* ${quantity} pieces

*Total:* ₹${quantity * price}

Label and design are attached!
Thank you for your order! 🎉
    `.trim();

    const phoneNumber = "917489684255"; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderDetails)}`;
    window.open(url, "_blank");
  };

  const canContinue = {
    1: selectedDesign,
    2: logo && brand,
    3: tagline && price > 0,
    4: quantity > 0 && labelImage,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            Customize Your Bottle
          </h1>
          <p className="text-gray-600 text-lg">
            Follow 4 simple steps to create your perfect bottle
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8 flex justify-around items-center">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full shadow-lg ring-4 ring-white flex justify-center items-center font-bold transition-all ${
                  s === step
                    ? " from-emerald-600 to-teal-600 bg-emerald-300 text-gray-700 shadow-lg scale-110 "
                    : s < step
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {s < step ? "✓" : s}
              </div>
              {s < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    s < step ? "bg-green-600" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Titles */}
        <div className="grid grid-cols-4  gap-4 mb-12 text-center">
          <div>
            <p className={`text-sm  font-semibold ${step >= 1 ? "text-emerald-600" : "text-gray-500"}`}>
              Step 1: Pick Design
            </p>
          </div>
          <div>
            <p className={`text-sm font-semibold ${step >= 2 ? "text-emerald-600" : "text-gray-500"}`}>
              Step 2: Logo & Brand
            </p>
          </div>
          <div>
            <p className={`text-sm font-semibold ${step >= 3 ? "text-emerald-600" : "text-gray-500"}`}>
              Step 3: Generate Label
            </p>
          </div>
          <div>
            <p className={`text-sm font-semibold ${step >= 4 ? "text-emerald-600" : "text-gray-500"}`}>
              Step 4: Download & Share
            </p>
          </div>
        </div>

        <div className="grid  lg:grid-cols-2 gap-10">
          {/* LEFT - 3D BOTTLE VIEWER */}
          <div className="flex bg-white/80 backdrop-blur-xl flex-col gap-8 p-6 rounded-3xl border border-emerald-100 shadow-lg">
            <BottleViewer
              selectedDesign={selectedDesign}
              labelImage={labelImage}
              logo={logo}
            />

            {step === 4 && (
                <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900">Order Summary</h3>
                <div className="space-y-2 text-sm text-gray-800">
                  <p>
                    <strong>Design:</strong>{" "}
                    {["Round", "Square", "Cylindrical", "Premium", "Eco"][selectedDesign - 1]}
                  </p>
                  <p>
                    <strong>Brand:</strong> {brand}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {quantity} pieces
                  </p>
                  <p>
                    <strong>Price:</strong> ₹{price} per piece
                  </p>
                  <div className="border-t pt-2 mt-2">
                    <p className="font-bold text-lg">
                      Total: ₹{Number(quantity) * Number(price || 0)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - FORM CONTENT */}
          <div className="bg-white/80 backdrop-blur-xl  border-emerald-100 rounded-3xl shadow-2xl p-8 space-y-8 border border-white/40">
            {/* STEP 1 - DESIGN SELECTOR */}
            {step === 1 && (
              <div className="space-y-6">
                <DesignSelector />

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canContinue[1]}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl  duration-300 hover:bg-emerald-700 disabled:bg-gray-300 transition-all font-semibold"
                  >
                    Continue to Next Step
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 - LOGO & BRAND INFO */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Upload Logo & Enter Brand Info</h2>

                <div className="space-y-6">
                  {/* Logo Upload */}
                  <div className="border-2 border-dashed rounded-xl p-6 text-center">
                    {logo ? (
                      <div className="space-y-4">
                        <img
                          src={logo}
                          alt="Logo"
                          className="w-32 h-32 object-contain mx-auto"
                        />
                        <label className="text-sm text-emerald-600 cursor-pointer hover:underline">
                          Change Logo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    ) : (
                      <label className="cursor-pointer space-y-2 block">
                        <svg
                          className="w-12 h-12 mx-auto text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        <p className="text-gray-800">
                          Click to upload logo
                        </p>
                        <p className="text-xs text-gray-700">
                          PNG, JPG up to 10MB
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Brand Name */}
                  <div>
                    <label className="font-semibold text-gray-900">Brand Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your brand name"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-gray-900 bg-white"
                      maxLength="40"
                    />
                  </div>


                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/2 border border-gray-300 p-4 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white hover:scale-105 transition-all duration-300 "
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canContinue[2]}
                    className="w-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 - LABEL GENERATION */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Generate Product Label</h2>

                <LabelForm />

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <LabelGenerator />
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="w-1/2 border border-black-300 bg-black p-4 rounded-xl hover:bg-gray-50 transition-all font-semibold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    disabled={!canContinue[3]}
                    className="w-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-semibold"> continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 - DOWNLOAD, SHARE & CONFIRM */}
            {step === 4 && <Step4 setStep={setStep} /> }
          </div>
        </div>
      </div>
    </div>
  );
}