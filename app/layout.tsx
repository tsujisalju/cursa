import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import PageTransition from "@/components/page-transition";
import LayoutProvider from "@/components/layout-provider";
import { Geist } from "next/font/google";

const aileron = localFont({
  variable: "--font-aileron",
  src: [
    {
      path: "./fonts/aileron/Aileron-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/aileron/Aileron-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/aileron/Aileron-Black.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/aileron/Aileron-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/aileron/Aileron-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/aileron/Aileron-UltraLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/aileron/Aileron-UltraLightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
});

const nyght = localFont({
  variable: "--font-nyght",
  src: [
    {
      path: "./fonts/nyght/NyghtSerif-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/nyght/NyghtSerif-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/nyght/NyghtSerif-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/nyght/NyghtSerif-Dark.otf",
      weight: "800",
      style: "extrabold",
    },
  ],
});

const isenheim = localFont({
  variable: "--font-isenheim",
  src: [
    {
      path: "./fonts/isenheim/Isenheim_Regulier.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/isenheim/Isenheim_Fin.otf",
      weight: "300",
      style: "light",
    },
  ],
});

const flareserif = localFont({
  variable: "--font-flareserif",
  src: [
    {
      path: "./fonts/flareserif/Flareserif-821-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/flareserif/Flareserif-821-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const pilowlava = localFont({
  variable: "--font-pilowlava",
  src: [
    {
      path: "./fonts/Pilowlava-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Tsujisalju",
  description: "Freelance Developer and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aileron.variable} ${geist.variable} ${nyght.variable} ${isenheim.variable} ${pilowlava.variable} ${flareserif.variable} antialiased`}
      >
        <div className="flex flex-col lg:flex-row h-screen">
          <LayoutProvider>
            <Header />
            <PageTransition>{children}</PageTransition>
          </LayoutProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
