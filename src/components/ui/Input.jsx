export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  min,
  className = ""
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      min={min}
      onChange={onChange}
      className={`w-full p-3 rounded-lg bg-slate-700 text-white 
      focus:outline-none focus:ring-2 focus:ring-indigo-500 
      transition-all duration-300 ${className}`}
    />
  );
}