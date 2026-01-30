"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Image
          src="/centuryhybridseeds.png"
          alt="Century Hybrid Seeds"
          width={160}
          height={50}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#" className="hover:text-green-700">Home</a>
          <a href="#" className="hover:text-green-700">About Us</a>
          <a href="#" className="hover:text-green-700">Products</a>
          <a href="#" className="hover:text-green-700">Contact</a>
        </nav>

        {/* Call Button Desktop */}
        <a
          href="tel:+919876543210"
          className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-md"
        >
          +91 98765 43210
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">

          <nav className="flex flex-col gap-4 pt-4 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>

            <a
              href="tel:+919876543210"
              className="bg-green-700 text-white text-center py-2 rounded-md"
            >
              Call Now
            </a>
          </nav>

        </div>
      )}
    </header>
  );
}
