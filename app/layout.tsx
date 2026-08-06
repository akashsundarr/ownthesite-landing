import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SplashScreen from "@/components/splash-screen";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OwnTheSite.- Web Design & Development Agency",
  description: "We design and develop modern websites that turn visitors into customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body
        className={`${manrope.className} bg-background-light text-text-light transition-colors duration-300 antialiased`}
      >
        <SplashScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
