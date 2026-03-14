"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UiButton from "../components/UiButton";

export default function ContactSuccess() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navbar />

      {/* Success Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 w-40 h-40 bg-gradient-to-br from-green-600/25 to-emerald-600/25 rounded-full animate-pulse"></div>
          <div className="absolute top-15 right-10 w-32 h-32 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-5 left-1/3 w-48 h-48 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full animate-pulse delay-1400"></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-emerald-700/20 to-green-600/20 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            تم إرسال رسالتك بنجاح!
          </h1>
          <p className="text-xl leading-relaxed text-slate-200 mb-12">
            شكراً لتواصلك معنا. لقد استلمنا رسالتك وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            ماذا يحدث الآن؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                مراجعة الرسالة
              </h3>
              <p className="text-slate-300">
                سيقوم فريقنا بمراجعة رسالتك وتحليل طلبك بالتفصيل
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                الرد الأولي
              </h3>
              <p className="text-slate-300">
                سنتواصل معك عبر البريد الإلكتروني أو الهاتف خلال 24 ساعة
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                استشارة مجانية
              </h3>
              <p className="text-slate-300">
                سنقوم بتحديد موعد لاستشارة مجانية لمناقشة احتياجاتك
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                خطة مخصصة
              </h3>
              <p className="text-slate-300">
                سنقدم لك خطة مخصصة لتحقيق أهدافك الدراسية في ألمانيا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">معلومات هامة</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg ml-4 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    الرد السريع
                  </h3>
                  <p className="text-slate-300">
                    نلتزم بالرد على جميع الرسائل خلال 24 ساعة عمل
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-500/20 text-blue-400 p-2 rounded-lg ml-4 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    تحقق من بريدك
                  </h3>
                  <p className="text-slate-300">
                    سيصلك ردنا على البريد الإلكتروني الذي قدمته
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-500/20 text-purple-400 p-2 rounded-lg ml-4 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    استشارة مجانية
                  </h3>
                  <p className="text-slate-300">
                    جميع استشاراتنا الأولية مجانية تماماً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            هل لديك أسئلة إضافية؟
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            يمكنك دائماً التواصل معنا مباشرة عبر الهاتف أو الواتساب
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700/50">
              <div className="text-blue-400 font-semibold mb-2">
                الهاتف والواتساب
              </div>
              <div className="text-white text-xl">+49 123 456789</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700/50">
              <div className="text-blue-400 font-semibold mb-2">
                البريد الإلكتروني
              </div>
              <div className="text-white text-xl">info@studentenhilfe.de</div>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/">
              <UiButton size="lg" className="w-full sm:w-auto">
                العودة إلى الصفحة الرئيسية
              </UiButton>
            </Link>
            <div className="text-slate-400">
              أو{" "}
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                إرسال رسالة أخرى
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
