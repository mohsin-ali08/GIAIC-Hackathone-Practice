"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const closeMenu = () => setOpen(false); // Function to close the menu

  return (
    <header className="border-b bg-neutral-100 shadow-md">
      <div className="w-full flex items-center justify-between h-[70px] px-4 md:px-10 lg:px-20">
        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Exclusive</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          <Link href="/" className="hover:text-gray-700 transition duration-300">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-700 transition duration-300">
            Contact
          </Link>
          <Link href="/about" className="hover:text-gray-700 transition duration-300">
            About
          </Link>
          <Link href="/signup" className="hover:text-gray-700 transition duration-300">
            Sign Up
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-md px-3 py-1 w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent outline-none text-sm placeholder-gray-500"
          />
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <FontAwesomeIcon icon={faHeart} className="text-xl text-gray-700 hover:text-red-500 transition duration-300" />
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-xl text-gray-700 hover:text-blue-500 transition duration-300"
          />
          {/* Hamburger Menu */}
          <button
            onClick={toggle}
            className="md:hidden text-2xl text-gray-800 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeMenu}
        >
          <div
            className="w-[90%] max-w-sm bg-white rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMenu}
              className="absolute top-2 right-2 text-xl text-gray-800"
            >
              ✕
            </button>
            <nav className="space-y-4 text-center">
              <Link href="/" className="block text-lg font-medium text-gray-700 hover:text-blue-600" onClick={closeMenu}>
                Home
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/about"
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/signup"
                className="block text-lg font-medium text-gray-700 hover:text-blue-600"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
