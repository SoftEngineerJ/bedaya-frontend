import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Particles from "./components/Particles";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "مساعدة الطلاب العرب في ألمانيا",
  description:
    "نحن نساعد الطلاب العرب على بدء حياتهم الأكاديمية في ألمانيا - من التقديم الجامعي إلى أول يوم في الدراسة",
  keywords: "طلاب عرب, ألمانيا, دراسة, جامعة, سكن, مساعدة",
  authors: [{ name: "Studentenhilfe Deutschland" }],
  openGraph: {
    title: "مساعدة الطلاب العرب في ألمانيا",
    description: "مرشدك الموثوق للدراسة في ألمانيا",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script src="/analytics.js" async></script>
      </head>
      <body
        className={`${cairo.variable} font-arabic antialiased bg-gray-50 text-gray-900`}
        suppressHydrationWarning={true}
      >
        <Particles />
        {children}
      </body>
    </html>
  );
}
