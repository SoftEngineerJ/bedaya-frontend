import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  GraduationCap,
  Target,
  Handshake,
  Rocket,
  User,
  Briefcase,
  Code,
} from "lucide-react";
import UiButton from "../components/UiButton";

export default function About() {
  // Calculate years of experience dynamically
  const foundingYear = 2020;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - foundingYear;
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            من نحن
          </h1>
          <p className="text-xl leading-relaxed text-slate-200">
            نساعد الطلاب العرب على تحقيق أحلامهم الدراسية في ألمانيا منذ عام
            2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-700/12 to-indigo-700/12 rounded-full blur-md animate-pulse delay-300"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  بدأت رحلتنا في عام 2020 عندما لاحظنا الصعوبات التي يواجهها
                  الطلاب العرب عند الوصول إلى ألمانيا للدراسة. معظمهم لا يملكون
                  عائلة أو أصدقاء في ألمانيا، ويجدون صعوبة في فهم النظام
                  التعليمي والإجراءات الإدارية.
                </p>
                <p>
                  قررنا أن نكون الجسر الذي يربط بين الطلاب العرب والحياة
                  الأكاديمية في ألمانيا. بدأنا بخدمات بسيطة، لكن مع مرور الوقت
                  طورنا نظاماً شاملاً يغطي جميع احتياجات الطلاب من لحظة اتخاذ
                  قرار الدراسة وحتى الوصول إلى ألمانيا.
                </p>
                <p>
                  اليوم، ساعدنا مئات الطلاب من مختلف الدول العربية في تحقيق
                  أحلامهم الدراسية. كل طالب ننجح في مساعدته هو قصة نجاح نفتخر
                  بها.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-blue-400/30">
              <div className="text-center">
                <div className="text-6xl mb-4 text-blue-400">
                  <GraduationCap className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  إحصائياتنا
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      500+
                    </div>
                    <div className="text-slate-300">طالب مساعد</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      15
                    </div>
                    <div className="text-slate-300">جامعة ألمانية</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      98%
                    </div>
                    <div className="text-slate-300">رضا العملاء</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {yearsOfExperience}
                    </div>
                    <div className="text-slate-300">سنوات خبرة</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-700/12 to-indigo-700/12 rounded-full blur-md animate-pulse delay-300"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              رسالتنا
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              نسعى لأن نكون الخيار الأول للطلاب العرب الذين يريدون الدراسة في
              ألمانيا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 text-center backdrop-blur-sm border border-blue-400/30">
              <div className="text-4xl mb-4 text-blue-400">
                <Target className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">هدفنا</h3>
              <p className="text-slate-300 leading-relaxed">
                تسهيل عملية الدراسة في ألمانيا للطلاب العرب وجعلها تجربة سلسة
                وممتعة من البداية وحتى التخرج.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 text-center backdrop-blur-sm border border-cyan-400/30">
              <div className="text-4xl mb-4 text-blue-400">
                <Handshake className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">قيمنا</h3>
              <p className="text-slate-300 leading-relaxed">
                الثقة، الشفافية، والالتزام بتقديم أفضل خدمة ممكنة لكل طالب. نضمن
                رضاك التام أو نعيد أموالك.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg shadow-md p-8 text-center backdrop-blur-sm border border-teal-400/30">
              <div className="text-4xl mb-4 text-blue-400">
                <Rocket className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">رؤيتنا</h3>
              <p className="text-slate-300 leading-relaxed">
                أن نكون المنصة الأولى التي يلجأ إليها كل طالب عربي يريد الدراسة
                في ألمانيا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-700/12 to-indigo-700/12 rounded-full blur-md animate-pulse delay-300"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              فريقنا
            </h2>
            <p className="text-xl text-slate-200">
              فريق من الخبراء المختصين في مجال التعليم والإرشاد الأكاديمي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 overflow-hidden">
                <img
                  src="/ahmad.alkhaldi.png"
                  alt="أحمد الخالدي"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                أحمد الخالدي
              </h3>
              <p className="text-blue-400 font-medium mb-3">
                مؤسس ومدير تنفيذي
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                خريج جامعة برلين الحرة، متخصص في إرشاد الطلاب الدوليين منذ 8
                سنوات.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 overflow-hidden">
                <img
                  src="/img_avatar2.png"
                  alt="لينا محمود"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">لينا محمود</h3>
              <p className="text-blue-400 font-medium mb-3">مديرة العمليات</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                مسؤولة عن تنسيق جميع الخدمات وضمان تجربة سلسة لكل طالب.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Code className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">محمد العلي</h3>
              <p className="text-blue-400 font-medium mb-3">مسؤول تقني</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                يدير منصتنا الإلكترونية ويضمن سهولة التواصل مع الطلاب.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-600/15 to-teal-600/15 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-br from-green-600/15 to-emerald-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-blue-700/12 to-indigo-700/12 rounded-full blur-md animate-pulse delay-300"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            انضم إلى عائلتنا
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-slate-200">
            هل أنت جاهز للبدء في رحلتك الدراسية في ألمانيا؟ نحن هنا لنساعدك في
            كل خطوة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <UiButton href="/contact" size="lg">
              تواصل معنا
            </UiButton>
            <UiButton
              href="/services"
              size="lg"
              className="bg-none bg-slate-700/80 hover:bg-slate-600/80 border border-blue-400/30"
            >
              خدماتنا
            </UiButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
