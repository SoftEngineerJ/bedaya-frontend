"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  Home,
  Shield,
  CreditCard,
  Target,
  FileText,
  Calendar,
  RefreshCw,
} from "lucide-react";
import UiButton from "../components/UiButton";

export default function Preise() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 w-40 h-40 bg-gradient-to-br from-blue-600/25 to-cyan-600/25 rounded-full animate-pulse"></div>
          <div className="absolute top-15 right-10 w-32 h-32 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-5 left-1/3 w-48 h-48 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full animate-pulse delay-1400"></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-700/20 to-indigo-600/20 rounded-full animate-pulse delay-300"></div>

          {/* Animated Particles in Hero Section */}
          <div className="absolute top-10 left-20 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-32 right-32 w-4 h-4 bg-cyan-400/50 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-40 w-2 h-2 bg-green-400/70 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/4 right-20 w-5 h-5 bg-teal-400/40 rounded-full animate-bounce delay-900"></div>

          {/* Moving squares */}
          <div
            className="absolute top-20 left-1/4 w-6 h-6 bg-purple-400/30 transform rotate-45 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/4 w-4 h-4 bg-pink-400/30 transform rotate-45 animate-spin"
            style={{ animationDuration: "12s", animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/3 w-5 h-5 bg-yellow-400/30 transform rotate-45 animate-spin"
            style={{ animationDuration: "10s", animationDelay: "4s" }}
          ></div>

          {/* Floating logos */}
          <div
            className="absolute top-16 right-16 w-8 h-8 opacity-30 animate-pulse"
            style={{ animationDuration: "3s" }}
          >
            <img
              src="/bedaya-logo.png"
              alt="Bedaya Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="absolute bottom-16 left-16 w-12 h-12 opacity-25 animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          >
            <img
              src="/bedaya-logo.png"
              alt="Bedaya Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="absolute top-1/2 left-20 w-6 h-6 opacity-20 animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "2s" }}
          >
            <img
              src="/bedaya-logo.png"
              alt="Bedaya Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Moving triangles */}
          <div
            className="absolute top-1/4 left-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-orange-400/40 animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-red-400/40 animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            خدماتنا المخصصة لك
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed mb-8">
            كل طالب وقصته فريدة - نقدم لك استشارة مجانية وحلاً مخصصاً لتحقيق
            أحلامك الدراسية في ألمانيا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <UiButton
              href="/register"
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              استشارة مجانية الآن
            </UiButton>
            <UiButton
              href="/contact"
              size="lg"
              className="border border-white/20 bg-white/10 hover:bg-white/20 cursor-pointer"
            >
              تواصل معنا
            </UiButton>
          </div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-green-900/50 to-emerald-900/50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-green-400/30">
            <div className="text-5xl mb-6 text-green-400">
              <MessageCircle className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              استشارة أولية مجانية
            </h2>
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              نبدأ دائماً باستشارة مجانية 30 دقيقة لفهم أهدافك وتحديد أفضل طريق
              لك. بدون أي التزام!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  30 دقيقة
                </div>
                <div className="text-slate-300">مدة الاستشارة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  مجانية
                </div>
                <div className="text-slate-300">بدون تكلفة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  فورية
                </div>
                <div className="text-slate-300">حجز سريع</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              باقاتنا الخدمية
            </h2>
            <p className="text-xl text-slate-200">
              حلول مخصصة حسب احتياجاتك وأهدافك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Support */}
            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 text-blue-400">
                  <Star className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  دعم أساسي
                </h3>
                <p className="text-slate-300 mb-4">
                  للطلاب الذين يريدون توجيهاً مهنياً
                </p>
                <div className="text-2xl font-bold text-blue-400 mb-6">
                  سعر مخصص
                </div>
                <p className="text-slate-400 text-sm mb-6">
                  بناءً على احتياجاتك الفردية
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">استشارة أولية مجانية</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    تحليل الجامعات المناسبة
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    مراجعة المستندات الأساسية
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">دليل إجراءات التقديم</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">دعم عبر الإيميل</span>
                </li>
              </ul>

              <UiButton
                href="/register"
                className="w-full cursor-pointer"
                size="lg"
              >
                اطلب استشارة مجانية
              </UiButton>
            </div>

            {/* Comprehensive Support */}
            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  الأكثر طلباً
                </span>
              </div>
              <div className="text-center mb-8 mt-4">
                <div className="text-4xl mb-4 text-green-400">
                  <Award className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">دعم شامل</h3>
                <p className="text-slate-300 mb-4">
                  خدمة متكاملة للنجاح في ألمانيا
                </p>
                <div className="text-2xl font-bold text-green-400 mb-6">
                  سعر مخصص
                </div>
                <p className="text-slate-400 text-sm mb-6">مصمم خصيصاً لك</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    كل ما في الدعم الأساسي +
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    مساعدة كاملة في التقديم
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">تحضير للمقابلات</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    مساعدة في تأشيرة الطالب
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    دعم عبر WhatsApp والهاتف
                  </span>
                </li>
              </ul>

              <UiButton
                href="/register"
                className="w-full cursor-pointer bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                size="lg"
              >
                ابدأ خطة مخصصة
              </UiButton>
            </div>

            {/* VIP Support */}
            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 text-purple-400">
                  <Users className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">دعم VIP</h3>
                <p className="text-slate-300 mb-4">خدمة شخصية فاخرة</p>
                <div className="text-2xl font-bold text-purple-400 mb-6">
                  سعر مخصص
                </div>
                <p className="text-slate-400 text-sm mb-6">خبرة شخصية كاملة</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    كل ما في الدعم الشامل +
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">مستشار شخصي متخصص</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">بحث عن سكن جامعي</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">استقبال من المطار</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    مساعدة في فتح حساب بنكي
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    تأمين صحي وشبكة اجتماعية
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">دعم على مدار الساعة</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 ml-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">
                    دورات لغة ألمانية مخفضة
                  </span>
                </li>
              </ul>

              <UiButton
                href="/register"
                className="w-full cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
                size="lg"
              >
                اطلب خدمة VIP
              </UiButton>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              خدمات إضافية فردية
            </h2>
            <p className="text-xl text-slate-200">
              اختر الخدمات التي تحتاجها فقط
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-blue-400/30">
              <div className="text-3xl mb-4 text-blue-400">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                استشارات متخصصة
              </h3>
              <p className="text-slate-300 mb-4">استشارات فردية حسب احتياجك</p>
              <p className="text-blue-400 font-semibold">سعر مخصص</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-400/30">
              <div className="text-3xl mb-4 text-green-400">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                مراجعة المستندات
              </h3>
              <p className="text-slate-300 mb-4">مراجعة شاملة لجميع الأوراق</p>
              <p className="text-green-400 font-semibold">سعر مخصص</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-purple-400/30">
              <div className="text-3xl mb-4 text-purple-400">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                تحضير المقابلات
              </h3>
              <p className="text-slate-300 mb-4">تدريب شامل للمقابلات</p>
              <p className="text-purple-400 font-semibold">سعر مخصص</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-yellow-400/30">
              <div className="text-3xl mb-4 text-yellow-400">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                البحث عن سكن
              </h3>
              <p className="text-slate-300 mb-4">مساعدة في إيجاد سكن مناسب</p>
              <p className="text-yellow-400 font-semibold">سعر مخصص</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-red-400/30">
              <div className="text-3xl mb-4 text-red-400">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                التأمين الصحي
              </h3>
              <p className="text-slate-300 mb-4">مساعدة في اختيار التأمين</p>
              <p className="text-red-400 font-semibold">سعر مخصص</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-cyan-400/30">
              <div className="text-3xl mb-4 text-cyan-400">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                الحساب البنكي
              </h3>
              <p className="text-slate-300 mb-4">مساعدة في فتح حساب بنكي</p>
              <p className="text-cyan-400 font-semibold">سعر مخصص</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-green-400/30">
            <div className="text-5xl mb-6 text-green-400">
              <MessageCircle className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              كيف نحدد السعر؟
            </h2>
            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              كل طالب فريد - نحدد السعر معاً بعد الاستشارة المجانية بناءً على:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right mb-8">
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-blue-400 ml-2" />
                  <h3 className="text-lg font-semibold text-white">
                    أهدافك الأكاديمية
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">
                  المستوى الدراسي والجامعة المطلوبة
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-green-400 ml-2" />
                  <h3 className="text-lg font-semibold text-white">
                    مدى تعقيد الحالة
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">
                  المستندات المطلوبة والإجراءات
                </p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-purple-400 ml-2" />
                  <h3 className="text-lg font-semibold text-white">
                    الوقت المتاح
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">مدة الخدمة المطلوبة</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <RefreshCw className="w-5 h-5 text-yellow-400 ml-2" />
                  <h3 className="text-lg font-semibold text-white">
                    الخدمات الإضافية
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">سكن، تأمين، بنك، إلخ</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UiButton
                href="/register"
                size="lg"
                className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                استشارة مجانية الآن
              </UiButton>
              <UiButton
                href="/contact"
                size="lg"
                className="border border-white/20 bg-white/10 hover:bg-white/20 cursor-pointer"
              >
                تواصل مباشرة
              </UiButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-400/30">
            <div className="text-5xl mb-6 text-blue-400">
              <CheckCircle className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">ثقتنا مضمونة</h2>
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              نحن نضمن لك أفضل خدمة بأسعار مناسبة. رضاك هو أولويتنا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <div className="text-slate-300">طالب سعيد</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-slate-300">نسبة الرضا</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-slate-300">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
