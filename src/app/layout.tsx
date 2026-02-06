import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PYRE | The Future of Fire",
  description: "PYRE redefines outdoor cooking with revolutionary AeroCore ceramic technology, AI-powered precision, and limitless modularity. Experience the next generation of fire.",
  keywords: ["luxury grill", "ceramic smoker", "AI cooking", "pellet smoker", "kamado", "outdoor cooking", "premium BBQ"],
  openGraph: {
    title: "PYRE | The Future of Fire",
    description: "Revolutionary AeroCore ceramic technology meets AI-powered precision cooking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}
