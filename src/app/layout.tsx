

import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "@/app/globals.css";
import ClientLayoutShell from "@/components/ui/ClientLayoutShell";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500"],
});

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
      <body className={`${ubuntu.className} bg-gray-50 text-gray-900`}>
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
