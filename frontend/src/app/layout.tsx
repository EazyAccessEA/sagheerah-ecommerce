import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { globalStyles } from "@/lib/theme";
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
  title: "Sagheerah - Luxury Modest Fashion",
  description: "Discover elegant and modest fashion pieces that celebrate your unique style. Premium quality, timeless designs, and exceptional craftsmanship.",
  keywords: ["modest fashion", "luxury clothing", "elegant dresses", "hijab fashion", "modest wear"],
};

// Apply global styles
globalStyles();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
