"use client";

import Link from "next/link";
import { useState } from "react";
import UiButton from "./UiButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              onClick={scrollToTop}
            >
              <img
                src="/bedaya-logo.png"
                alt="بداية Logo"
                className="h-12 w-auto"
              />
              بداية
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              <Link
                href="/"
                className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                الصفحة الرئيسية
              </Link>
              <Link
                href="/services"
                className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                الخدمات
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                التواصل
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link
              href="/login"
              className="text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              تسجيل الدخول
            </Link>
            <UiButton href="/register" size="sm">
              التسجيل
            </UiButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-slate-800/90 border-slate-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-300 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
              aria-expanded="false"
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50">
            <Link
              href="/"
              className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              الصفحة الرئيسية
            </Link>
            <Link
              href="/services"
              className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              الخدمات
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              التواصل
            </Link>
            <div className="border-t border-gray-200 pt-3 mt-3">
              <Link
                href="/login"
                className="text-blue-400 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>
              <UiButton
                href="/register"
                size="md"
                className="w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                التسجيل
              </UiButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
