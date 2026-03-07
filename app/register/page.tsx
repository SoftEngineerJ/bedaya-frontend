"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, Shield, Rocket } from "lucide-react";
import UiButton from "../components/UiButton";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    desiredService: "",
    studyLevel: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : false;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("كلمة المرور غير متطابقة!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("يجب الموافقة على الشروط والأحكام!");
      return;
    }

    // Handle registration logic here
    console.log("Registration attempt:", formData);
    alert("تم إنشاء حسابك بنجاح! يرجى التحقق من بريدك الإلكتروني.");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Register Section */}
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
                إنشاء حساب جديد
              </h1>
              <p className="text-slate-300">
                انضم إلينا لبدء رحلتك الدراسية في ألمانيا
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
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              {/* Location Information */}
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
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    المدينة
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="مدينتك"
                  />
                </div>
              </div>

              {/* Study Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <option value="البحث عن سكن" className="text-gray-800">
                      البحث عن سكن
                    </option>
                    <option value="التسجيل الجامعي" className="text-gray-800">
                      التسجيل الجامعي
                    </option>
                    <option
                      value="دورات اللغة الألمانية"
                      className="text-gray-800"
                    >
                      دورات اللغة الألمانية
                    </option>
                    <option
                      value="الاستقبال في المطار"
                      className="text-gray-800"
                    >
                      الاستقبال في المطار
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
                    <option value="الحزمة الشاملة" className="text-gray-800">
                      الحزمة الشاملة - كل شيء
                    </option>
                    <option value="استفسار" className="text-gray-800">
                      استفسار فقط
                    </option>
                  </select>
                </div>
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
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-400 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="أدخل كلمة مرور قوية"
                    minLength={8}
                  />
                  <p className="text-xs text-slate-400 mt-1">
                    على الأقل 8 أحرف
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    تأكيد كلمة المرور *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="أعد إدخال كلمة المرور"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="ml-3 block text-sm text-gray-400"
                  >
                    أوافق على{" "}
                    <a
                      href="#"
                      className="text-primary hover:text-primary-dark underline"
                    >
                      الشروط والأحكام
                    </a>{" "}
                    و{" "}
                    <a
                      href="#"
                      className="text-primary hover:text-primary-dark underline"
                    >
                      سياسة الخصوصية
                    </a>{" "}
                    *
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-3 block text-sm text-gray-400"
                  >
                    أريد تلقي النشرة الإخبارية والتحديثات
                  </label>
                </div>
              </div>

              <UiButton type="submit" className="w-full" size="lg">
                إنشاء الحساب
              </UiButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-300">
                لديك حساب بالفعل؟{" "}
                <Link
                  href="/login"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-1 relative overflow-hidden group"
                >
                  سجل الدخول
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2 text-green-600">
                <CheckCircle className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-green-900">مجاني</h3>
              <p className="text-xs text-green-800">
                إنشاء الحساب مجاني تماماً
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2 text-blue-600">
                <Shield className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-blue-900">آمن</h3>
              <p className="text-xs text-blue-800">
                بياناتك محمية بتشفير متقدم
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2 text-purple-600">
                <Rocket className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-purple-900">سريع</h3>
              <p className="text-xs text-purple-800">ابدأ رحلتك خلال دقائق</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
