import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-600 font-bold text-2xl"
        >
          <Trophy size={28} />
          <span>QuickCourt</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link className="hover:text-blue-600 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-600 transition" to="/venues">
            Venues
          </Link>

          <Link className="hover:text-blue-600 transition" to="/booking">
            Booking
          </Link>

          <Link className="hover:text-blue-600 transition" to="/owner">
            Owner
          </Link>

          <Link className="hover:text-blue-600 transition" to="/admin">
            Admin
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;