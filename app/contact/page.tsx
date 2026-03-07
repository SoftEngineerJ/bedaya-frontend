"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UiButton from "../components/UiButton";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Shield,
} from "lucide-react";

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);

    // Redirect to success page using Next.js router
    router.push("/contact/success");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl leading-relaxed">
            نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنرد عليك في أقرب وقت ممكن.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                أرسل لنا رسالة
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-slate-700/50 text-white placeholder-slate-400"
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-slate-300 mb-2"
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
                      <option value="الأردن" className="text-gray-800">
                        الأردن
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
                      <option value="الإمارات" className="text-gray-800">
                        الإمارات
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
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    الخدمة المطلوبة
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
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
                    <option value="دورات اللغة" className="text-gray-800">
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
                      الحزمة الشاملة
                    </option>
                    <option value="استفسار عام" className="text-gray-800">
                      استفسار عام
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    رسالتك *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical bg-slate-700/50 text-white placeholder-slate-400"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <UiButton type="submit" className="w-full" size="lg">
                  إرسال الرسالة
                </UiButton>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                معلومات التواصل
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-3 rounded-lg ml-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-slate-300 mb-1">
                      info@studentenhilfe.de
                    </p>
                    <p className="text-sm text-slate-400">
                      نرد على جميع الرسائل خلال 24 ساعة
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-3 rounded-lg ml-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      الهاتف والواتساب
                    </h3>
                    <p className="text-slate-300 mb-1">+49 123 456789</p>
                    <p className="text-sm text-slate-400">
                      متوفر يومياً من 9 صباحاً حتى 6 مساءً
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-3 rounded-lg ml-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      الموقع
                    </h3>
                    <p className="text-slate-300 mb-1">برلين، ألمانيا</p>
                    <p className="text-sm text-slate-400">
                      نعمل مع طلاب في جميع المدن الألمانية
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-3 rounded-lg ml-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      ساعات العمل
                    </h3>
                    <div className="text-slate-300 text-sm">
                      <p>الأحد - الخميس: 9:00 - 18:00</p>
                      <p>الجمعة - السبت: 10:00 - 16:00</p>
                      <p className="text-red-400 font-medium">دعم طوارئ 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <UiButton
                  href="https://wa.me/49123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                  size="md"
                >
                  <span className="ml-2">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  راسلنا عبر واتساب
                </UiButton>
              </div>

              {/* Security Notice */}
              <div className="mt-8 bg-slate-800/50 border border-blue-400/30 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  خصوصية وأمان
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  جميع المعلومات التي ترسلها محمية بتشفير متقدم. نحن لا نشارك
                  بياناتك مع أي طرف ثالث. اتصالاتنا آمنة وموثوقة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
