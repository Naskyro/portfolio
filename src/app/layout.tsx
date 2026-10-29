import type { Metadata } from "next";
import { Inter, Quicksand, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/content/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.title}`,
  description: portfolio.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${quicksand.variable} ${jbmono.variable} bg-night font-sans text-mist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
