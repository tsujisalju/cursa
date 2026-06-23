import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import Header from "./header";
import Footer from "./footer";
import PageTransition from "@/components/page-transition";
import LayoutProvider from "@/components/layout-provider";
import { Geist, Geist_Mono, Redacted_Script } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const redacted = Redacted_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-redacted",
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
        className={`${geist.variable} ${geistMono.variable} ${nyght.variable} ${isenheim.variable} ${pilowlava.variable} ${flareserif.variable} ${redacted.variable} antialiased`}
      >
        <TooltipProvider>
          <div className="flex flex-col lg:flex-row h-screen">
            <LayoutProvider>
              <Header />
              <PageTransition>{children}</PageTransition>
            </LayoutProvider>
            <Footer />
          </div>
        </TooltipProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
