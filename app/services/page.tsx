import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import UiButton from "../components/UiButton";
import {
  DollarSign,
  Phone,
  CheckCircle,
  Home,
  GraduationCap,
  BookOpen,
  Plane,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "البحث عن سكن",
      description: "نساعدك في العثور على السكن المناسب في مدينتك الجامعية",
      icon: "home",
      features: [
        "البحث في قواعد البيانات السكنية",
        "ترتيب جولات المشاهدة",
        "مساعدة في توقيع العقد",
        "نقل الأثاث والأمتعة",
      ],
    },
    {
      title: "التسجيل الجامعي",
      description: "نرافقك في جميع إجراءات التسجيل والقبول الجامعي",
      icon: "graduation",
      features: [
        "تقييم الوثائق الأكاديمية",
        "مساعدة في اختيار التخصص المناسب",
        "إعداد ملف التقديم الكامل",
        "متابعة حالة الطلب",
      ],
    },
    {
      title: "دورات اللغة الألمانية",
      description: "نساعدك في التسجيل في أفضل دورات اللغة الألمانية",
      icon: "book",
      features: [
        "اختيار المستوى المناسب",
        "حجز المقعد في الدورة",
        "إعداد المواد اللازمة",
        "متابعة التقدم الأكاديمي",
      ],
    },
    {
      title: "الاستقبال في المطار",
      description: "نستقبلك في المطار ونرافقك إلى سكنك الجديد",
      icon: "plane",
      features: [
        "الاستقبال في المطار",
        "المساعدة في إجراءات الجوازات",
        "النقل إلى السكن",
        "أول يوم في ألمانيا",
      ],
    },
    {
      title: "الحصول على التأشيرة",
      description: "مساعدتك في جميع إجراءات الحصول على تأشيرة الدراسة",
      icon: "plane",
      features: [
        "إعداد الملف المطلوب",
        "حجز موعد في السفارة",
        "مراجعة الوثائق",
        "متابعة حالة الطلب",
      ],
    },
    {
      title: "التأمين الصحي والاجتماعي",
      description: "نرافقك في التسجيل في التأمين الصحي والاجتماعي",
      icon: "home",
      features: [
        "اختيار أفضل شركة تأمين",
        "إجراءات التسجيل",
        "مساعدة في الاستحقاقات",
        "دعم في الحالات الطارئة",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero Section with modern background */}
      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-slate-100 py-20 overflow-hidden">
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

          {/* Small decorative dots */}
          <div className="absolute top-10 left-1/2 w-3 h-3 bg-blue-400/35 rounded-full animate-pulse-delay-4"></div>
          <div className="absolute top-20 right-1/2 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse-delay-5"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-green-400/35 rounded-full animate-pulse-delay-6"></div>
          <div className="absolute top-1/2 right-10 w-5 h-5 bg-purple-400/25 rounded-full animate-pulse-delay-7"></div>
          <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse-delay-8"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            خدماتنا
          </h1>
          <p className="text-xl leading-relaxed text-slate-200">
            نقدم مجموعة شاملة من الخدمات لتسهيل رحلتك الدراسية في ألمانيا
          </p>
        </div>
      </section>

      {/* Services Grid with modern background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-700/12 to-indigo-700/12 rounded-full blur-md animate-pulse delay-300"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-cyan-700/12 to-teal-700/12 rounded-full blur-lg animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اختر الخدمة المناسبة لك
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              نقدم خدماتنا بأسعار تنافسية مع ضمان الجودة والرضا التام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info with modern background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 w-36 h-36 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute top-15 right-15 w-28 h-28 bg-gradient-to-br from-green-600/12 to-emerald-600/12 rounded-full blur-md animate-pulse delay-600"></div>
          <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-gradient-to-br from-indigo-600/12 to-purple-600/12 rounded-full blur-xl animate-pulse delay-1200"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              معلومات مهمة حول الأسعار
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="w-8 h-8 text-green-400 ml-3" />
                الدفع والضمان
              </h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2 mt-1 flex-shrink-0" />
                  <p>الدفع فقط بعد إنجاز الخدمة بالكامل</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2 mt-1 flex-shrink-0" />
                  <p>ضمان رضاك التام أو استرداد أموالك</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2 mt-1 flex-shrink-0" />
                  <p>أسعار شفافة بدون رسوم خفية</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2 mt-1 flex-shrink-0" />
                  <p>دفع آمن عبر الإنترنت أو التحويل البنكي</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 backdrop-blur-sm border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Phone className="w-8 h-8 text-blue-400 ml-3" />
                الدعم والتواصل
              </h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 ml-2 mt-1 flex-shrink-0" />
                  <p>مساعد شخصي مخصص لكل طالب</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 ml-2 mt-1 flex-shrink-0" />
                  <p>تواصل مستمر عبر واتساب أو الهاتف</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 ml-2 mt-1 flex-shrink-0" />
                  <p>دعم فني على مدار الساعة</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 ml-2 mt-1 flex-shrink-0" />
                  <p>إجابة على استفساراتك خلال 24 ساعة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ with modern background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 right-5 w-40 h-40 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-15 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/12 to-indigo-600/12 rounded-full blur-lg animate-pulse delay-400"></div>
          <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-green-600/12 to-emerald-600/12 rounded-full blur-md animate-pulse delay-800"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              الأسئلة الشائعة
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-blue-400/30">
              <h3 className="text-lg font-bold text-white mb-3">
                هل يمكنني اختيار خدمات منفصلة؟
              </h3>
              <p className="text-slate-300">
                نعم، يمكنك اختيار الخدمات التي تحتاجها فقط. لا تحتاج لشراء
                الحزمة الكاملة إذا كنت بحاجة لخدمة واحدة فقط.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-blue-400/30">
              <h3 className="text-lg font-bold text-white mb-3">
                كم يستغرق إنجاز الخدمة؟
              </h3>
              <p className="text-slate-300">
                يعتمد ذلك على نوع الخدمة، لكن معظم خدماتنا تكتمل خلال أسبوع إلى
                أسبوعين من تاريخ الطلب.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-blue-400/30">
              <h3 className="text-lg font-bold text-white mb-3">
                هل توجد خدمات إضافية؟
              </h3>
              <p className="text-slate-300">
                نعم، نقدم خدمات إضافية مثل المساعدة في البحث عن عمل، أو المساعدة
                في إجراءات الإقامة الطويلة الأمد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with modern background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-44 h-44 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-br from-green-600/12 to-emerald-600/12 rounded-full blur-xl animate-pulse delay-600"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-indigo-600/12 to-purple-600/12 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ابدأ اليوم
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-200">
            لا تدع التعقيدات تمنعك من تحقيق حلمك الدراسي. نحن هنا لنساعدك في كل
            خطوة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <Footer />
    </div>
  );
}
