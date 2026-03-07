import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/bedaya-logo.png"
                alt="بداية Logo"
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold">بداية</h3>
            </div>
            <p className="text-gray-300 mb-4">
              شريكك نحو المستقبل الدراسي. نرافقك خطوة بخطوة من التقديم حتى
              النجاح.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">فيسبوك</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">واتساب</span>
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">إنستغرام</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  التواصل
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@studentenhilfe.de
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +49 123 456789
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                برلين، ألمانيا
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} بداية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
