// Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-3">
      <div className="font-bold text-red-600 text-2xl flex items-center gap-2">
        {/* 🎬 TodoApp */}
      </div>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-300 font-medium hover:text-red-600 transition">Signup</Link>
        <Link to="/login" className="text-gray-300 font-medium hover:text-red-600 transition">Login</Link>
        <Link to="/dashboard" className="text-gray-300 font-medium hover:text-red-600 transition">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
