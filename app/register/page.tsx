"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CheckCircle,
  Shield,
  Rocket,
  Calendar,
  CreditCard,
} from "lucide-react";
import UiButton from "../components/UiButton";

export default function ServiceBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    desiredService: "",
    studyLevel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store booking data in session storage for thank you page
      sessionStorage.setItem("bookingData", JSON.stringify(formData));

      // Send data to backend API
      const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

      const response = await fetch(`${apiBaseUrl}/api/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        const errorData = await response.text();
        alert("Fehler: " + (errorData || "Unbekannter Fehler"));
      }
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Fehler beim Senden: " + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Service Booking Section */}
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-blue-400/30">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                احجز خدمتك الآن
              </h1>
              <p className="text-slate-300">
                املأ النموذج أدناه وسنتواصل معك لبدء رحلتك الدراسية في ألمانيا
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    الاسم الأول *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="أدخل اسمك الأول"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    اسم العائلة *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="أدخل اسم العائلة"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    رقم الهاتف (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="+20 123 4567890"
                  />
                </div>
              </div>

              {/* Country and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    البلد الأصلي *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-blue-700/40 text-white placeholder-slate-400"
                  >
                    <option value="" className="text-gray-800">
                      اختر بلدك
                    </option>
                    <option value="سوريا" className="text-gray-800">
                      سوريا
                    </option>
                    <option value="العراق" className="text-gray-800">
                      العراق
                    </option>
                    <option value="الاردن" className="text-gray-800">
                      الاردن
                    </option>
                    <option value="لبنان" className="text-gray-800">
                      لبنان
                    </option>
                    <option value="فلسطين" className="text-gray-800">
                      فلسطين
                    </option>
                    <option value="مصر" className="text-gray-800">
                      مصر
                    </option>
                    <option value="السعودية" className="text-gray-800">
                      السعودية
                    </option>
                    <option value="الامارات" className="text-gray-800">
                      الامارات
                    </option>
                    <option value="الكويت" className="text-gray-800">
                      الكويت
                    </option>
                    <option value="قطر" className="text-gray-800">
                      قطر
                    </option>
                    <option value="البحرين" className="text-gray-800">
                      البحرين
                    </option>
                    <option value="عمان" className="text-gray-800">
                      عمان
                    </option>
                    <option value="اليمن" className="text-gray-800">
                      اليمن
                    </option>
                    <option value="ليبيا" className="text-gray-800">
                      ليبيا
                    </option>
                    <option value="تونس" className="text-gray-800">
                      تونس
                    </option>
                    <option value="الجزائر" className="text-gray-800">
                      الجزائر
                    </option>
                    <option value="المغرب" className="text-gray-800">
                      المغرب
                    </option>
                    <option value="موريتانيا" className="text-gray-800">
                      موريتانيا
                    </option>
                    <option value="السودان" className="text-gray-800">
                      السودان
                    </option>
                    <option value="أخرى" className="text-gray-800">
                      أخرى
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="desiredService"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    الخدمة المطلوبة *
                  </label>
                  <select
                    id="desiredService"
                    name="desiredService"
                    required
                    value={formData.desiredService}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-blue-700/40 text-white placeholder-slate-400"
                  >
                    <option value="" className="text-gray-800">
                      اختر الخدمة
                    </option>
                    <option value="استشارة مجانية" className="text-gray-800">
                      استشارة مجانية أولاً
                    </option>
                    <option value="دعم أساسي" className="text-gray-800">
                      دعم أساسي (توجيه مهني)
                    </option>
                    <option value="دعم شامل" className="text-gray-800">
                      دعم شامل (الأكثر طلباً)
                    </option>
                    <option value="دعم VIP" className="text-gray-800">
                      دعم VIP (خدمة شخصية)
                    </option>
                    <option value="التسجيل الجامعي" className="text-gray-800">
                      التسجيل الجامعي فقط
                    </option>
                    <option value="البحث عن سكن" className="text-gray-800">
                      البحث عن سكن
                    </option>
                    <option
                      value="دورات اللغة الألمانية"
                      className="text-gray-800"
                    >
                      دورات اللغة الألمانية
                    </option>
                    <option
                      value="الحصول على التأشيرة"
                      className="text-gray-800"
                    >
                      الحصول على التأشيرة
                    </option>
                    <option value="التأمين الصحي" className="text-gray-800">
                      التأمين الصحي والاجتماعي
                    </option>
                    <option value="الحساب البنكي" className="text-gray-800">
                      فتح الحساب البنكي
                    </option>
                    <option
                      value="الاستقبال في المطار"
                      className="text-gray-800"
                    >
                      الاستقبال في المطار
                    </option>
                    <option value="مراجعة المستندات" className="text-gray-800">
                      مراجعة المستندات
                    </option>
                    <option value="تحضير المقابلات" className="text-gray-800">
                      تحضير المقابلات
                    </option>
                    <option value="استفسار" className="text-gray-800">
                      استفسار آخر
                    </option>
                  </select>
                </div>
              </div>

              {/* Study Level */}
              <div>
                <label
                  htmlFor="studyLevel"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  مستوى الدراسة المرغوب
                </label>
                <select
                  id="studyLevel"
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-blue-700/40 text-white placeholder-slate-400"
                >
                  <option value="" className="text-gray-800">
                    اختر المستوى
                  </option>
                  <option value="بكالوريوس" className="text-gray-800">
                    بكالوريوس
                  </option>
                  <option value="ماجستير" className="text-gray-800">
                    ماجستير
                  </option>
                  <option value="دكتوراه" className="text-gray-800">
                    دكتوراه
                  </option>
                  <option value="دورة لغة" className="text-gray-800">
                    دورة لغة فقط
                  </option>
                  <option value="غير محدد" className="text-gray-800">
                    غير محدد بعد
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  رسالة إضافية (اختياري)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400 resize-vertical"
                  placeholder="اكتب أي معلومات إضافية تود مشاركتها معنا..."
                />
              </div>

              <UiButton
                type="submit"
                className="w-full cursor-pointer"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "يتم الإرسال..." : "احجز الخدمة الآن"}
              </UiButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-300">
                تفضل التحدث معنا أولاً؟{" "}
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-1 relative overflow-hidden group"
                >
                  تواصل معنا
                </Link>
              </p>
            </div>
          </div>

          {/* Service Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50/10 border border-green-400/30 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2 text-green-400">
                <CheckCircle className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-green-400">
                استشارة مجانية
              </h3>
              <p className="text-xs text-green-300">
                أول استشارة مجانية قبل الحجز
              </p>
            </div>
            <div className="bg-blue-50/10 border border-blue-400/30 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2 text-blue-400">
                <Shield className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-blue-400">
                ضمان الرضا
              </h3>
              <p className="text-xs text-blue-300">رضاك التام أو نعيد أموالك</p>
            </div>
            <div className="bg-purple-50/10 border border-purple-400/30 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="text-2xl mb-2 text-purple-400">
                <Rocket className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-purple-400">
                بدء سريع
              </h3>
              <p className="text-xs text-purple-300">
                نبدأ العمل فوراً بعد الحجز
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
