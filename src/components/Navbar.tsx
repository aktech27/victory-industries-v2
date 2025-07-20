"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { key: 1, name: "Home", link: "#" },
  { key: 2, name: "About", link: "#about" },
  { key: 3, name: "Products", link: "#products" },
  { key: 4, name: "Gallery", link: "#gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12 md:h-14">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="Victory Industries Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="hidden md:block text-xl font-semibold dark:text-white">
            Victory Industries
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(({ key, link, name }) => (
            <Link
              key={key}
              href={link}
              className="text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button className="hidden sm:inline-block px-4 py-2 text-sm bg-blue-700 hover:bg-blue-800 text-white rounded-md transition">
            Contact Us
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center text-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 pt-4 pb-6 space-y-4">
          {NAV_LINKS.map(({ key, link, name }) => (
            <Link
              key={key}
              href={link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {name}
            </Link>
          ))}
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition text-sm">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
