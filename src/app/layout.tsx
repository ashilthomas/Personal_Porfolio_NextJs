import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js 13+ and TypeScript",
};

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="min-h-screen container mx-auto ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
