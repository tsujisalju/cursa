import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Geist, Geist_Mono, Redacted_Script } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
import { Frame } from "@/app/(v3)/frame";
import Sidebar from "./sidebar";
import { SketchBackdrop } from "./sketch-backdrop";
import { sketches } from "@/data/sketches";
import { MobileHeader } from "./_components/mobile-header";

const nyght = localFont({
  variable: "--font-nyght",
  src: [
    {
      path: "../fonts/nyght/NyghtSerif-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/nyght/NyghtSerif-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/nyght/NyghtSerif-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/nyght/NyghtSerif-Dark.otf",
      weight: "800",
      style: "extrabold",
    },
  ],
});

const isenheim = localFont({
  variable: "--font-isenheim",
  src: [
    {
      path: "../fonts/isenheim/Isenheim_Regulier.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/isenheim/Isenheim_Fin.otf",
      weight: "300",
      style: "light",
    },
  ],
});

const flareserif = localFont({
  variable: "--font-flareserif",
  src: [
    {
      path: "../fonts/flareserif/Flareserif-821-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/flareserif/Flareserif-821-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

const pilowlava = localFont({
  variable: "--font-pilowlava",
  src: [
    {
      path: "../fonts/Pilowlava-Regular.otf",
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

export default function V3Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`relative overflow-x-clip bg-bg font-mono text-fg ${geist.variable} ${geistMono.variable} ${nyght.variable} ${isenheim.variable} ${pilowlava.variable} ${flareserif.variable} ${redacted.variable} antialiased`}
      >
        <TooltipProvider>
          <SketchBackdrop sketches={sketches} />
          <Frame rail={<Sidebar />} topBar={<MobileHeader />} />
          <div className="relative z-10 mx-auto min-h-dvh max-w-(--shell-w) pt-(--band-t) pb-(--band-b) pl-(--rail-w)">
            {children}
          </div>
        </TooltipProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
