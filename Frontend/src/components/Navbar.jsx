import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          Short.ly
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          {/* Show only when NOT logged in */}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              Login
            </Link>
          )}

          {/* Link list */}
          {isAuthenticated && (
            <Link
              to="/shortener/list"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              My Links
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
}