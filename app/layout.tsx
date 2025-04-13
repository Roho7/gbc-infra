import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import WelcomeModal from "./_components/welcome-modal";
import { siteConfig } from "./_utils/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig().title,
    description: siteConfig().description,
    openGraph: {
      title: siteConfig().title,
      description: siteConfig().description,
      type: 'website',
      url: siteConfig().baseUrl,
      images: [
        {
          url: siteConfig().ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig().name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig().title,
      description: siteConfig().description,
      images: [siteConfig().ogImage],
      creator: siteConfig().twitter,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <WelcomeModal />
        {children}
        <Footer />
        </Suspense>
      </body>
    </html>
  );
}
