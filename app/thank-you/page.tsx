"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  CheckCircle,
  Clock,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Users,
  Star,
} from "lucide-react";
import UiButton from "../components/UiButton";

export default function ThankYou() {
  const [bookingData, setBookingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get booking data from session storage or URL params
    const storedData = sessionStorage.getItem("bookingData");
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setBookingData(data);
      } catch (error) {
        console.error("Error parsing booking data:", error);
      }
    }

    // Simulate loading and then show success
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">يتم معالجة طلبك...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Success Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900/50 to-emerald-900/50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 w-40 h-40 bg-gradient-to-br from-green-600/25 to-emerald-600/25 rounded-full animate-pulse"></div>
          <div className="absolute top-15 right-10 w-32 h-32 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-5 left-1/3 w-48 h-48 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full animate-pulse delay-1400"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-green-400/30">
            <div className="text-6xl mb-6 text-green-400">
              <CheckCircle className="w-20 h-20 mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              تم استلام طلبك بنجاح!
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              شكراً لثقتك ببداية. فريقنا سيقوم بمراجعة طلبك والتواصل معك خلال 24
              ساعة.
            </p>

            {bookingData && (
              <div className="bg-slate-700/30 rounded-lg p-6 mb-8 text-right">
                <h3 className="text-lg font-semibold text-white mb-4">
                  تفاصيل طلبك:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                  <div>
                    <span className="text-blue-400">الاسم:</span>{" "}
                    {bookingData.firstName} {bookingData.lastName}
                  </div>
                  <div>
                    <span className="text-blue-400">البريد:</span>{" "}
                    {bookingData.email}
                  </div>
                  <div>
                    <span className="text-blue-400">الخدمة:</span>{" "}
                    {bookingData.desiredService}
                  </div>
                  <div>
                    <span className="text-blue-400">المستوى:</span>{" "}
                    {bookingData.studyLevel}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              الخطوات التالية
            </h2>
            <p className="text-xl text-slate-200">
              إليك ما سيحدث بعد تقديم طلبك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-400/30 text-center">
              <div className="text-4xl mb-4 text-blue-400">
                <Clock className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                مراجعة الطلب
              </h3>
              <p className="text-slate-300 mb-4">
                سيقوم فريقنا بمراجعة طلبك وتحليل احتياجاتك
              </p>
              <div className="text-blue-400 font-semibold">خلال 2-4 ساعات</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-green-400/30 text-center">
              <div className="text-4xl mb-4 text-green-400">
                <MessageCircle className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                التواصل المباشر
              </h3>
              <p className="text-slate-300 mb-4">
                سنتواصل معك عبر WhatsApp أو الهاتف لمناقشة التفاصيل
              </p>
              <div className="text-green-400 font-semibold">خلال 24 ساعة</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-purple-400/30 text-center">
              <div className="text-4xl mb-4 text-purple-400">
                <Calendar className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                تحديد الموعد
              </h3>
              <p className="text-slate-300 mb-4">
                نحدد معاً موعد الاستشارة الأولى وبدء رحلتك الدراسية
              </p>
              <div className="text-purple-400 font-semibold">خلال 48 ساعة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-400/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              طرق التواصل معنا
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              يمكنك التواصل معنا مباشرة عبر أي من هذه الطرق
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="text-3xl mb-4 text-green-400">
                  <MessageCircle className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  WhatsApp
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  أسرع طريقة للتواصل
                </p>
                <UiButton href="#" size="sm" className="w-full cursor-pointer">
                  افتح WhatsApp
                </UiButton>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="text-3xl mb-4 text-blue-400">
                  <Phone className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  الهاتف
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  للاستشارات المباشرة
                </p>
                <UiButton
                  href="tel:+49123456789"
                  size="sm"
                  className="w-full cursor-pointer"
                >
                  اتصل الآن
                </UiButton>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6">
                <div className="text-3xl mb-4 text-purple-400">
                  <Mail className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  البريد الإلكتروني
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  للاستفسارات المفصلة
                </p>
                <UiButton
                  href="mailto:info@bedaya-study.com"
                  size="sm"
                  className="w-full cursor-pointer"
                >
                  أرسل رسالة
                </UiButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ماذا يقول طلابنا
            </h2>
            <p className="text-xl text-slate-200">
              تجارب حقيقية من طلاب نجحوا معنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-400/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 ml-1" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                "خدمة ممتازة وسريعة. ساعدوني في الحصول على قبولة في جامعة ميونخ
                خلال شهرين فقط!"
              </p>
              <div className="text-white font-semibold">أحمد محمد</div>
              <div className="text-slate-400 text-sm">هندسة مدنية - ميونخ</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-green-400/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 ml-1" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                "الفريق محترف جداً ويساعد في كل خطوة. أنصح أي طالب عربي بالتعامل
                معهم."
              </p>
              <div className="text-white font-semibold">فاطمة علي</div>
              <div className="text-slate-400 text-sm">طب - برلين</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-purple-400/30">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 ml-1" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">
                "تجربة رائعة من البداية للنهاية. ساعدوني في السكن والتأمين وكل
                شيء."
              </p>
              <div className="text-white font-semibold">خالد أحمد</div>
              <div className="text-slate-400 text-sm">
                علوم الحاسب - هامبورغ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-green-400/30">
            <h2 className="text-3xl font-bold text-white mb-6">
              هل لديك أسئلة إضافية؟
            </h2>
            <p className="text-xl text-slate-200 mb-8">
              فريقنا جاهز للإجابة على جميع استفساراتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <UiButton href="/contact" size="lg" className="cursor-pointer">
                تواصل معنا
              </UiButton>
              <UiButton
                href="/preise"
                size="lg"
                className="border border-white/20 bg-white/10 hover:bg-white/20 cursor-pointer"
              >
                شاهد الأسعار
              </UiButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
