"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UiButton from "../components/UiButton";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    alert("تم تسجيل الدخول بنجاح!");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Login Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Large pulsing circles */}
          <div className="absolute top-5 left-5 w-40 h-40 bg-gradient-to-br from-blue-600/25 to-cyan-600/25 rounded-full animate-pulse"></div>
          <div className="absolute top-15 right-10 w-32 h-32 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-5 left-1/3 w-48 h-48 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full animate-pulse delay-1400"></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-700/20 to-indigo-600/20 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-15 right-5 w-36 h-36 bg-gradient-to-br from-cyan-700/15 to-teal-700/15 rounded-full animate-pulse delay-1100"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-purple-600/12 to-blue-600/12 rounded-full animate-pulse delay-1800"></div>

          {/* Medium floating elements */}
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-rose-500/12 to-pink-500/12 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-amber-500/12 to-orange-500/12 rounded-full animate-float-delay-2"></div>
          <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-gradient-to-br from-violet-500/12 to-purple-500/12 rounded-full animate-float-delay-3"></div>

          {/* Rotating geometric shapes */}
          <div className="absolute top-1/6 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-700/20 to-cyan-700/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-emerald-700/15 to-teal-700/15 rotate-12 animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-indigo-700/12 to-purple-700/12 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-2/3 w-12 h-12 bg-gradient-to-br from-rose-700/12 to-pink-700/12 rotate-90 animate-spin-slow-reverse"></div>
        </div>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-blue-400/30">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                تسجيل الدخول
              </h1>
              <p className="text-slate-300">أدخل بياناتك للوصول إلى حسابك</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  كلمة المرور *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                  placeholder="أدخل كلمة المرور"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-slate-300"
                  >
                    تذكرني
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    نسيت كلمة المرور؟
                  </a>
                </div>
              </div>

              <UiButton type="submit" className="w-full" size="md">
                تسجيل الدخول
              </UiButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-300">
                ليس لديك حساب؟{" "}
                <Link
                  href="/register"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  سجل الآن
                </Link>
              </p>
            </div>

            {/* Social Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-800 text-slate-400">أو</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <UiButton
                  type="button"
                  className="w-full bg-none bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-slate-300"
                  size="sm"
                >
                  <span className="ml-2">🌐</span>
                  Google
                </UiButton>

                <UiButton
                  type="button"
                  className="w-full bg-none bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-slate-300"
                  size="sm"
                >
                  <span className="ml-2">📘</span>
                  Facebook
                </UiButton>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-slate-800/50 border border-blue-400/30 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-2">
              🔐 أمان حسابك
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              نحن نستخدم تشفير متقدم لحماية بياناتك. كلمة المرور الخاصة بك آمنة
              ولن نشاركها مع أي طرف ثالث.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
