import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center sticky top-0 z-50">

      <h1 className="text-2xl font-bold text-emerald-700">
        AquaCraft
      </h1>

      <div className="flex gap-8 font-medium text-gray-700">
        <Link to="/" className="hover:text-emerald-600">Home</Link>
        <Link to="/customize" className="hover:text-emerald-600">Customize</Link>
        <Link to="/about" className="hover:text-emerald-600">About</Link>
        <Link to="/agents" className="hover:text-emerald-600">Agents</Link>
        <Link to="/order" className="hover:text-emerald-600">Order</Link>
      </div>

    </nav>
  );
}