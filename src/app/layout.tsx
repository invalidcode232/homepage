import type { Metadata } from "next";
import Header from "@/components/modules/header/header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/modules/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Sungarda",
  description: "The personal website of James Sungarda",
  keywords: ["james", "sungarda", "personal website", "blog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen overflow-scroll py-10 2xl:px-72 2xl:pt-20 xl:px-20 xl:pt-16 lg:px-20 md:px-20 px-8 pt-14 flex flex-col bg-slate-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="text-white h-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
