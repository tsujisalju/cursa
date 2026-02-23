import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import PageTransition from "@/components/page-transition";
import LayoutProvider from "@/components/layout-provider";

const aileron = localFont({
  variable: "--font-aileron",
  src: [
    {
      path: "./fonts/Aileron-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Aileron-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Aileron-Black.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/Aileron-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Aileron-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Aileron-UltraLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Aileron-UltraLightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
});

const cooper = localFont({
  variable: "--font-cooper",
  src: [
    {
      path: "./fonts/Cooper-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cooper-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Cooper-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Cooper-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

const flareserif = localFont({
  variable: "--font-flareserif",
  src: [
    {
      path: "./fonts/Flareserif-821-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Flareserif-821-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
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
        className={`${aileron.variable} ${cooper.variable} ${flareserif.variable} antialiased`}
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
