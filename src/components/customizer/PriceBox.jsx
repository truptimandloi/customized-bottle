import { useCustomizer } from "../../context/CustomizerContext";

export default function PriceBox() {
  const { pricing } = useCustomizer();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 text-slate-800">

      <h6 className="text-lg font-semibold border-b border-slate-700 pb-2">
        Order Summary
      </h6>

      <div className="flex justify-between text-slate-300">
        <span>Price per Unit</span>
        <span>₹ {pricing.pricePerUnit}</span>
      </div>

      <div className="flex justify-between text-slate-300">
        <span>Subtotal</span>
        <span>₹ {pricing.subtotal}</span>
      </div>

      {pricing.discountRate > 0 && (
        <div className="flex justify-between text-green-400">
          <span>
            Discount ({pricing.discountRate * 100}%)
          </span>
          <span>- ₹ {pricing.discountAmount}</span>
        </div>
      )}

      <div className="border-t border-slate-700 pt-4 flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>₹ {pricing.total}</span>
      </div>
    </div>
  );
}