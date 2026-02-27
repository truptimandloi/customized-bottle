import { useState } from "react";

export default function Order() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    brandName: "",
    address: "",
    size: "",
    material: "",
    shape: "",
    quantity: "",
    information: "",
  });

  const [labelFile, setLabelFile] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Label Upload
  const handleLabelUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLabelFile(file);
    }
  };

  // Submit to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🧴 *New Custom Bottle Order*

👤 Name: ${form.name}
📞 Contact: ${form.contact}
🏷 Brand Name: ${form.brandName}

📍 Address:
${form.address}

🥤 Size: ${form.size}
🧱 Material: ${form.material}
🔷 Shape: ${form.shape}

📦 Quantity: ${form.quantity}

🖼 Label File: ${labelFile ? labelFile.name : "Not Uploaded"}

📝 Additional Info:
${form.information}

Please confirm order process and pricing. 
    `;

    window.open(
      `https://wa.me/917489684255?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 flex justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl">

        <h2 className="text-3xl font-bold text-black text-center mb-10">
          Custom Bottle Order Form
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="text"
            name="brandName"
            placeholder="Brand Name"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            name="address"
            placeholder="Full Address"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
          />

          <select
            name="size"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select Size</option>
            <option>250ml</option>
            <option>500ml</option>
            <option>750ml</option>
            <option>1L</option>
          </select>

          <select
            name="material"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Material</option>
            <option>PET Transparent</option>
            <option>Recycled PET</option>
            <option>Frosted Finish</option>
          </select>

          <select
            name="shape"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Bottle Shape</option>
            <option>Round</option>
            <option>Square</option>
            <option>Slim</option>
            <option>Custom Shape</option>
          </select>

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            required
            onChange={handleChange}
            className="border p-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
          />

          {/* Label Upload */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-medium text-gray-900">
              Upload Label
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleLabelUpload}
              className="w-full border p-2 rounded-lg text-gray-900"
            />
            <p className="text-sm text-gray-500 mt-1">
              Label name will be included in WhatsApp message.
            </p>
          </div>

          <textarea
            name="information"
            placeholder="Additional Information"
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            ✅ Confirm & Send Order on WhatsApp
          </button>

        </form>
      </div>
    </div>
  );
}