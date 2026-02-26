export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = ""
}) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30",
    secondary:
      "bg-slate-700 hover:bg-slate-600",
    success:
      "bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30",
    outline:
      "border border-slate-500 hover:bg-slate-800"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}