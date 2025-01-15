import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import FooterApp from "./_components/Footer"; import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Doctor Appointment Management System",
  description: "A web application to manage doctor appointments, built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <div className="px-3 md:px-6">{children}</div>
        <Toaster  />
        <FooterApp /></body>
    </html>
  );
}
