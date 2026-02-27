"use client";
import { useCustomizer } from "../context/CustomizerContext";

export default function PlaceOrder() {
  const { shape, quantity, brand } = useCustomizer();

  const handleOrder = () => {
    if (!shape || !quantity || !brand) {
      alert("Please fill all mandatory (*) fields");
      return;
    }

    alert("Order Placed Successfully!");
  };

  return (
    <button
      onClick={handleOrder}
      className="w-full bg-emerald-500 text-white p-4 rounded-xl mt-6"
    >
      Place Order
    </button>
  );
}