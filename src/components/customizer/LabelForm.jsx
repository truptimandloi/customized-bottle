"use client";

import { useCustomizer } from "../../context/CustomizerContext";

export default function LabelForm() {
  const { tagline, setTagline, price, setPrice, logoColor, setLogoColor } = useCustomizer();

  return (
    <div className="space-y-4">
      <div>
        <label className="font-semibold text-gray-900">Tagline / Slogan</label>
        <input
          type="text"
          placeholder="e.g., Pure & Fresh, Quality Guaranteed"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-900 bg-white"
          maxLength="60"
        />
        <p className="text-xs text-gray-600 mt-1">{tagline.length}/60 characters</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-semibold text-gray-900">Price per Piece ₹</label>
          <input
            type="number"
            placeholder="e.g., 25"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-gray-900 bg-white"
            min="1"
            step="0.50"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-900">Logo Accent Color</label>
          <input
            type="color"
            value={logoColor}
            onChange={(e) => setLogoColor(e.target.value)}
            className="w-full h-12 rounded-lg cursor-pointer mt-1 border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
