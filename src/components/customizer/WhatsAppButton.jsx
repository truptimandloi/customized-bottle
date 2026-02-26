import { useCustomizer } from "../../context/CustomizerContext";

export default function WhatsAppButton() {
  const {
    selectedDesign,
    brand,
    tagline,
    price,
    quantity,
  } = useCustomizer();

  const handleOrder = () => {
    const totalPrice = quantity * price;
    const designNames = [
      "Round",
      "Square",
      "Cylindrical",
      "Premium",
      "Eco",
    ];

    const message = `
🍾 *New Custom Bottle Order*

🏷 Brand: ${brand || "Not Provided"}
📝 Tagline: ${tagline || "Not Provided"}
🎯 Design: ${designNames[selectedDesign - 1] || "Custom"}
💵 Price per piece: ₹${price}
📦 Quantity: ${quantity} pieces

💰 Total Price: ₹${totalPrice}

Ready for delivery!
    `.trim();

    const phoneNumber = "917489684255"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleOrder}
      className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 p-4 rounded-xl font-semibold text-lg text-white"
    >
      📱 Confirm & Order on WhatsApp
    </button>
  );
}