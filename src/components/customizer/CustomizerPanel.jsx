"use client";
import { useCustomizer } from "../context/CustomizerContext";


export default function CustomizerForm() {
  const {
    shape, setShape,
    quantity, setQuantity,
    brand, setBrand,
    setLogo
  } = useCustomizer();

  return (
    <div className="space-y-6">

      <div>
        <label className="font-semibold">
          Bottle Shape <span className="text-red-500">*</span>
        </label>
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Shape</option>
          <option value="round">Round</option>
          <option value="square">Square</option>
          <option value="cylindrical">Cylindrical</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">
          Quantity <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>


      <div>
        <label className="font-semibold">
          Brand Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="font-semibold">Upload Logo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setLogo(URL.createObjectURL(e.target.files[0]))
          }
        />
      </div>

    </div>
  );
}