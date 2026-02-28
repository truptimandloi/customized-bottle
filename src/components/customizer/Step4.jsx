"use client";

import { useCustomizer } from "../../context/CustomizerContext";

export default function Step4({ setStep }) {
  const { quantity, setQuantity, price, brand, tagline, labelImage, selectedDesign, labelDataUrl } = useCustomizer();

  // Owner's WhatsApp number - update this with actual business number
  const OWNER_WHATSAPP = "917489684255"; // Business owner's number

  // ensure numeric values
  const total = (Number(quantity) || 0) * (Number(price) || 0);

  const handleWhatsApp = () => {
    if (!brand || !tagline || !price) {
      alert("Please complete label details first.");
      return;
    }
    if (!quantity || quantity <= 0) {
      alert("Please enter a quantity.");
      return;
    }

    const designNames = ["Round", "Square", "Cylindrical", "Premium", "Eco"];
    const message = `
🍾 *CUSTOM BOTTLE ORDER*

*Brand:* ${brand}
*Tagline:* ${tagline}
*Design:* ${designNames[selectedDesign - 1] || "Custom"}
*Price per piece:* ₹${price}
*Quantity:* ${quantity} pieces

💰 *Total Amount:* ₹${total}

Please download and attach the label image with this message for reference.

Thank you! 🎉
    `.trim();

    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleDownload = () => {
    if (!labelDataUrl) {
      alert("Label not ready. Please ensure label is generated.");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = labelDataUrl;
      link.download = `${brand || "label"}-label-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download label");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900"> Review &amp; Share</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          ℹ️ Complete all details below, download your label, and share your order on WhatsApp.
        </p>
      </div>

      <div>
        <label className="font-semibold text-gray-900">Quantity *</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-900 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          min="1"
          placeholder="Enter quantity"
        /> 
      </div>


      <div className="text-gray-800 bg-gray-50 p-4 rounded-lg">
        <strong className="text-lg">Total:</strong> <span className="text-2xl font-bold text-red-700">₹{total}</span>
      </div>

      {labelImage && (
        <div className="border-2 border-gray-300 rounded-lg p-3 bg-white">
          <p className="text-sm text-gray-600 mb-2 font-semibold">Label Preview:</p>
          <img src={labelImage} alt="Label preview" className="w-full rounded-md shadow-sm" />
        </div>
      )}

      <div className="flex gap-3 flex-col sm:flex-row">
        <button
          onClick={handleDownload}
          disabled={!labelImage}
          className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold transition-all"
        >
          ⬇️ Download Label
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold transition-all"
        >
          💬 Connect with Owner on WhatsApp
        </button>
      </div>

      <button
        onClick={() => setStep(3)}
        className=" flex-1  bg-black rounded-lg text-white  py-2  mt-2 hover:bg-gray-800 hover:text-white disabled:cursor-not-allowed hover:underline font-semibold transition-all"
      >
        ← Back to edit label
      </button>
    </div>
  );
}
