"use client";

import { useCustomizer } from "../../context/CustomizerContext";

export default function Step4({ setStep }) {
  const { quantity, setQuantity, price, brand, tagline, labelImage } = useCustomizer();

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

    const message = `
Custom Bottle Order

Brand: ${brand}
Tagline: ${tagline}
Price: ₹${price}
Quantity: ${quantity}
Total: ₹${total}
    `.trim();

    const url = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleDownload = () => {
    if (!labelImage) return;
    const link = document.createElement("a");
    link.href = labelImage;
    link.download = `${brand || "label"}-label-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Step 4 &#8211; Review &amp; Share</h2>

      <div>
        <label className="font-semibold text-gray-900">Quantity *</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-900 bg-white"
          min="1"
        />
      </div>

      <div className="text-gray-800">
        <strong>Total:</strong> ₹{total}
      </div>

      {labelImage && (
        <div className="border rounded p-2">
          <img src={labelImage} alt="Label preview" className="w-full" />
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          disabled={!labelImage}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
        >
          Download Label
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
        >
          Share on WhatsApp
        </button>
      </div>

      <button
        onClick={() => setStep(3)}
        className="mt-4 text-sm text-blue-600 underline"
      >
        Back to edit
      </button>
    </div>
  );
}
