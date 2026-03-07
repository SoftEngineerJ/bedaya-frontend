"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import Testimonial from "./components/Testimonial";
import { CheckCircle, Users, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import UiButton from "./components/UiButton";

export default function Home() {
  useEffect(() => {
    const progressEl = document.querySelector<HTMLElement>(".roadmap-progress");
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(".roadmap-reveal"),
    );
    const dotEls = Array.from(
      document.querySelectorAll<HTMLElement>(".roadmap-dot"),
    );

    if (progressEl) {
      progressEl.classList.remove("is-visible");
    }
    revealEls.forEach((el) => el.classList.remove("is-visible"));
    dotEls.forEach((el) => el.classList.remove("is-active"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting) continue;

          const delayAttr = el.getAttribute("data-delay");
          const delay = delayAttr ? Number(delayAttr) : 0;
          window.setTimeout(
            () => {
              el.classList.add("is-visible");
            },
            Number.isFinite(delay) ? delay : 0,
          );

          io.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    const updateRoadmapProgress = () => {
      if (!progressEl) return;

      const rect = progressEl.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // Progress reaches 100% when CTA section becomes visible
      const sectionHeight = rect.height;
      const startAt = vh * 0.8; // Start earlier
      const endAt = vh * 0.8; // End earlier (when CTA visible)
      const total = sectionHeight + (startAt - endAt);
      const progressed = startAt - rect.top;
      const p = progressed / (total || 1);
      const clamped = Math.max(0, Math.min(1, p));
      progressEl.style.setProperty("--roadmap-progress", String(clamped));

      const activeCount = Math.min(5, Math.max(1, Math.ceil(clamped * 5)));
      for (const dot of dotEls) {
        const stepAttr = dot.getAttribute("data-step");
        const step = stepAttr ? Number(stepAttr) : NaN;
        if (Number.isFinite(step) && step <= activeCount) {
          dot.classList.add("is-active");
        } else {
          dot.classList.remove("is-active");
        }
      }
    };

    if (progressEl) {
      const lineIo = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-visible");
              lineIo.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15 },
      );
      lineIo.observe(progressEl);

      updateRoadmapProgress();
      window.addEventListener("scroll", updateRoadmapProgress, {
        passive: true,
      });
      window.addEventListener("resize", updateRoadmapProgress);

      revealEls.forEach((el) => io.observe(el));

      return () => {
        io.disconnect();
        lineIo.disconnect();
        window.removeEventListener("scroll", updateRoadmapProgress);
        window.removeEventListener("resize", updateRoadmapProgress);
      };
    }

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger timeline animation when roadmap is visible
            const timelineProgress = entry.target.querySelector(
              ".timeline-progress",
            ) as HTMLElement;
            if (timelineProgress) {
              // Trigger SVG stroke animation
              timelineProgress.style.animation =
                "drawPath 3s ease-in-out forwards";
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => {
      if (roadmapRef.current) {
        observer.unobserve(roadmapRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-slate-100 py-20 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Large pulsing circles with transparency */}
          <div className="absolute top-5 left-5 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full animate-pulse"></div>
          <div className="absolute top-15 right-10 w-32 h-32 bg-gradient-to-br from-cyan-600/25 to-teal-600/25 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-5 left-1/3 w-48 h-48 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-full animate-pulse delay-1400"></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-700/25 to-indigo-600/25 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-15 right-5 w-36 h-36 bg-gradient-to-br from-cyan-700/20 to-teal-700/20 rounded-full animate-pulse delay-1100"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-purple-600/18 to-blue-600/18 rounded-full animate-pulse delay-1800"></div>

          {/* Medium floating elements */}
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-rose-500/15 to-pink-500/15 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-amber-500/15 to-orange-500/15 rounded-full animate-float-delay-2"></div>
          <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-gradient-to-br from-violet-500/15 to-purple-500/15 rounded-full animate-float-delay-3"></div>

          {/* Rotating geometric shapes */}
          <div className="absolute top-1/6 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-700/25 to-cyan-700/25 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-emerald-700/20 to-teal-700/20 rotate-12 animate-spin-slow-reverse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-indigo-700/15 to-purple-700/15 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-2/3 w-12 h-12 bg-gradient-to-br from-rose-700/15 to-pink-700/15 rotate-90 animate-spin-slow-reverse"></div>

          {/* Small decorative dots */}
          <div className="absolute top-10 left-1/2 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse-delay-4"></div>
          <div className="absolute top-20 right-1/2 w-4 h-4 bg-cyan-400/35 rounded-full animate-pulse-delay-5"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-green-400/40 rounded-full animate-pulse-delay-6"></div>
          <div className="absolute top-1/2 right-10 w-5 h-5 bg-purple-400/30 rounded-full animate-pulse-delay-7"></div>
          <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-pink-400/35 rounded-full animate-pulse-delay-8"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              ابدأ رحلتك الدراسية في ألمانيا
            </h1>
            <p className="text-3xl md:text-4xl mb-8 max-w-5xl mx-auto leading-relaxed text-slate-200 animate-fade-in-up animate-delay-200">
              نحن نساعد الطلاب العرب على بدء حياتهم الأكاديمية في ألمانيا - من
              التقديم الجامعي إلى أول يوم في الدراسة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
              <UiButton href="/register" size="lg">
                سجل الآن
              </UiButton>
              <UiButton
                href="/services"
                size="lg"
                className="bg-none bg-slate-700/80 hover:bg-slate-600/80 border border-blue-400/30"
              >
                عرض الخدمات
              </UiButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              خدماتنا الشاملة
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              نساعدك في كل خطوة من خطوات رحلتك الدراسية في ألمانيا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <div className="animate-fade-in-left animate-delay-100">
              <ServiceCard
                title="البحث عن سكن"
                description="نساعدك في العثور على السكن المناسب في مدينتك الجامعية"
                icon="home"
                metalType="gold"
                features={["سكن آمن ومريح", "قريب من الجامعة", "أسعار معقولة"]}
              />
            </div>
            <div className="animate-fade-in-left animate-delay-200">
              <ServiceCard
                title="التسجيل الجامعي"
                description="نرافقك في جميع إجراءات التسجيل والقبول الجامعي"
                icon="graduation"
                metalType="gold"
                features={[
                  "توجيه أكاديمي",
                  "مساعدة في الأوراق",
                  "متابعة القبول",
                ]}
              />
            </div>
            <div className="animate-fade-in-right animate-delay-300">
              <ServiceCard
                title="دورات اللغة"
                description="نساعدك في التسجيل في أفضل دورات اللغة الألمانية"
                icon="book"
                metalType="gold"
                features={["مستويات مختلفة", "شهادات معتمدة", "دعم مستمر"]}
              />
            </div>
            <div className="animate-fade-in-right animate-delay-400">
              <ServiceCard
                title="الاستقبال في المطار"
                description="نستقبلك في المطار ونرافقك إلى سكنك الجديد"
                icon="plane"
                metalType="gold"
                features={["استقبال شخصي", "نقل إلى السكن", "توجيه أولي"]}
              />
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up animate-delay-500">
            <UiButton href="/services" size="md">
              عرض جميع الخدمات
            </UiButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-900 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-white">
              لماذا تختارنا؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in animate-delay-100 hover-lift bg-slate-800/50 rounded-lg p-8 shadow-lg border border-blue-400/30 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ثقة مضمونة</h3>
              <p className="text-slate-300">
                الدفع فقط بعد إنجاز الخدمة. ضمان رضاك التام عن العمل المنجز.
              </p>
            </div>

            <div className="text-center animate-scale-in animate-delay-200 hover-lift bg-slate-800/50 rounded-lg p-8 shadow-lg border border-cyan-400/30 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">مساعد شخصي</h3>
              <p className="text-slate-300">
                مساعد مخصص يرافقك في كل خطوة من رحلتك الدراسية.
              </p>
            </div>

            <div className="text-center animate-scale-in animate-delay-300 hover-lift bg-slate-800/50 rounded-lg p-8 shadow-lg border border-teal-400/30 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">خبرة واسعة</h3>
              <p className="text-slate-300">
                ساعدنا مئات الطلاب العرب على تحقيق أحلامهم الدراسية في ألمانيا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              خطواتنا معًا
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-slate-200">
              رحلتك الدراسية خطوة بخطوة مع دعم كامل
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[6px] bg-slate-100/10"></div>
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[6px] roadmap-progress"></div>

            <div className="space-y-10">
              <div className="relative pl-20 md:pl-[55%] md:pr-0">
                <div
                  data-step="1"
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-16 h-16 bg-slate-950/40 backdrop-blur-sm rounded-full border border-blue-400/40 flex items-center justify-center roadmap-dot"
                >
                  <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-md animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">1</span>
                  </div>
                </div>
                <div
                  className="bg-slate-800/50 shadow-2xl p-8 border border-blue-400/30 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl roadmap-reveal max-w-2xl text-center md:mr-auto"
                  data-delay="0"
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-3">
                    التواصل والتسجيل
                  </h3>
                  <p className="text-slate-300 mb-4">
                    أرسل طلبك عبر نموذج الاتصال أو التسجيل، وسنتواصل معك خلال 24
                    ساعة
                  </p>
                  <div className="text-sm text-slate-400">المدة: 1 يوم</div>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 md:pr-[55%]">
                <div
                  data-step="2"
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-16 h-16 bg-slate-950/40 backdrop-blur-sm rounded-full border border-cyan-400/40 flex items-center justify-center roadmap-dot"
                >
                  <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">2</span>
                  </div>
                </div>
                <div
                  className="bg-slate-800/50 shadow-2xl p-8 border border-cyan-400/30 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl roadmap-reveal max-w-2xl text-center md:ml-auto"
                  data-delay="120"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    استشارة وتقييم
                  </h3>
                  <p className="text-slate-300 mb-4">
                    نحلل ملفك الدراسي ونناقش أهدافك، ونقدم لك خيارات الجامعات
                    والتخصصات المناسبة
                  </p>
                  <div className="text-sm text-slate-400">المدة: 2-3 أيام</div>
                </div>
              </div>

              <div className="relative pl-20 md:pl-[55%] md:pr-0">
                <div
                  data-step="3"
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-16 h-16 bg-slate-950/40 backdrop-blur-sm rounded-full border border-green-400/40 flex items-center justify-center roadmap-dot"
                >
                  <div className="absolute inset-0 rounded-full bg-green-400/30 blur-md animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">3</span>
                  </div>
                </div>
                <div
                  className="bg-slate-800/50 shadow-2xl p-8 border border-green-400/30 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl roadmap-reveal max-w-2xl text-center md:mr-auto"
                  data-delay="240"
                >
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    إعداد المستندات
                  </h3>
                  <p className="text-slate-300 mb-4">
                    نتابع معك جميع إجراءات التقديم الجامعي والحصول على التأشيرة
                  </p>
                  <div className="text-sm text-slate-400">
                    المدة: 1-2 أسابيع
                  </div>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 md:pr-[55%]">
                <div
                  data-step="4"
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-16 h-16 bg-slate-950/40 backdrop-blur-sm rounded-full border border-indigo-400/40 flex items-center justify-center roadmap-dot"
                >
                  <div className="absolute inset-0 rounded-full bg-indigo-400/30 blur-md animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">4</span>
                  </div>
                </div>
                <div
                  className="bg-slate-800/50 shadow-2xl p-8 border border-indigo-400/30 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl roadmap-reveal max-w-2xl text-center md:ml-auto"
                  data-delay="360"
                >
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">
                    التقديم على الجامعات
                  </h3>
                  <p className="text-slate-300 mb-4">
                    نتقدم بطلباتك للجامعات الألمانية، ونتابع القبول، ونساعدك في
                    إجراءات التأشيرة
                  </p>
                  <div className="text-sm text-slate-400">
                    المدة: 4-12 أسابيع
                  </div>
                </div>
              </div>

              <div className="relative pl-20 md:pl-[55%] md:pr-0">
                <div
                  data-step="5"
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 -translate-x-1/2 w-16 h-16 bg-slate-950/40 backdrop-blur-sm rounded-full border border-purple-400/40 flex items-center justify-center roadmap-dot"
                >
                  <div className="absolute inset-0 rounded-full bg-purple-400/30 blur-md animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">5</span>
                  </div>
                </div>
                <div
                  className="bg-slate-800/50 shadow-2xl p-8 border border-purple-400/30 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl roadmap-reveal max-w-2xl text-center md:mr-auto"
                  data-delay="480"
                >
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    الوصول والاستقرار
                  </h3>
                  <p className="text-slate-300 mb-4">
                    نستقبلك في المطار، نساعدك في التسجيل بالبلدية، فتح حساب
                    بنكي، ونقدم الدعم في بداية دراستك
                  </p>
                  <div className="text-sm text-slate-400">المدة: مستمرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-900 to-green-900 text-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ابدأ رحلتك الدراسية اليوم
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-200 animate-fade-in-up animate-delay-200">
            لا تدع التعقيدات تمنعك من تحقيق حلمك الدراسي في ألمانيا. نحن هنا
            لنساعدك في كل خطوة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <UiButton href="/register" size="lg">
              سجل مجاناً
            </UiButton>
            <UiButton
              href="/contact"
              size="lg"
              className="bg-none bg-slate-700/80 hover:bg-slate-600/80 border border-blue-400/30"
            >
              تواصل معنا
            </UiButton>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              آراء طلابنا
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-slate-200">
              قصص نجاح حقيقية من طلاب حققوا أحلامهم في ألمانيا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  أ
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">أحمد محمد</h4>
                  <p className="text-slate-400 text-sm">سوريا</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "كانت تجربة رائعة! ساعدوني في كل شيء من العثور على السكن إلى
                التسجيل في الجامعة. الآن أنا أدرس الطب في برلين."
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  ف
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">فاطمة علي</h4>
                  <p className="text-slate-400 text-sm">العراق</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "لم أكن أعرف من أين أبدأ، لكن الفريق ساعدني في كل خطوة. الآن أنا
                في السنة الثانية من دراسة الهندسة في ميونخ."
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  م
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">محمد حسن</h4>
                  <p className="text-slate-400 text-sm">الأردن</p>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-slate-300 italic">
                "الخدمة ممتازة والتواصل مستمر. ساعدوني في الحصول على فيزا
                الدراسة وإيجاد السكن المناسب. أنصح بهم بشدة!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
