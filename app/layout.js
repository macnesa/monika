import localFont from "next/font/local";
import SiteHeader from "@/components/layout/SiteHeader";
import GlobalSmoothScroll from "@/components/motion/GlobalSmoothScroll";
import "./globals.css";

const abcDiatype = localFont({
  src: [
    {
      path: "./fonts/local-preview/abc-diatype/ABCDiatype-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/local-preview/abc-diatype/ABCDiatype-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-abc-diatype",
  display: "swap",
});

const tiemposHeadline = localFont({
  src: "./fonts/local-preview/TiemposHeadline-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-tiempos-headline",
  display: "swap",
});

export const metadata = {
  title: "Omnikaflow — Wellness facility consulting",
  description:
    "Now I work on other people's facilities: the layout, the team, and how the place runs once the doors open.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${abcDiatype.variable} ${tiemposHeadline.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <GlobalSmoothScroll />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
