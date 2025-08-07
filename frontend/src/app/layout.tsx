import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from '@vercel/analytics/react';

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
  description: "Sagheerah is a luxury modest fashion house creating timeless jilbābs, khimābs, and niqābs. We craft refined garments that honour the legacy of ḥayāʾ (modesty) for the modern woman who seeks balance between faith and beauty.",
  keywords: "luxury modest fashion, jilbab, khimar, niqab, hijab, Islamic fashion, modest clothing, Sagheerah",
  authors: [{ name: "Sagheerah" }],
  creator: "Sagheerah",
  publisher: "Sagheerah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sagheerah.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagheerah.com",
    title: "Sagheerah - Luxury Modest Fashion",
    description: "Sagheerah is a luxury modest fashion house creating timeless jilbābs, khimābs, and niqābs. We craft refined garments that honour the legacy of ḥayāʾ (modesty) for the modern woman who seeks balance between faith and beauty.",
    siteName: "Sagheerah",
    images: [
      {
        url: "/Sagheerah-Logo-—-Rich-Emerald.svg",
        width: 1200,
        height: 630,
        alt: "Sagheerah - Luxury Modest Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagheerah - Luxury Modest Fashion",
    description: "Sagheerah is a luxury modest fashion house creating timeless jilbābs, khimābs, and niqābs. We craft refined garments that honour the legacy of ḥayāʾ (modesty) for the modern woman who seeks balance between faith and beauty.",
    images: ["/Sagheerah-Logo-—-Rich-Emerald.svg"],
    creator: "@sagheerah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_io (2)/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io (2)/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon_io (2)/favicon.ico",
    apple: "/favicon_io (2)/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon_io (2)/favicon.ico",
        sizes: "any",
      },
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io (2)/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io (2)/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon_io (2)/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0F2F2E",
    "theme-color": "#0F2F2E",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Sagheerah",
    "application-name": "Sagheerah",
  },
};

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
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
