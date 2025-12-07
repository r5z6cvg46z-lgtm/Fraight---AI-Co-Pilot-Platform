"use client";
// app/layout.tsx
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Fraight Command Center",
  description: "AI Co-Pilot for Logistics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#05090F] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
