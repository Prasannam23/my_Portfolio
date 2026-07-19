import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";
import ScrollProgress from "@/components/ScrollProgress";
import DotNav from "@/components/DotNav";
import FloatContact from "@/components/FloatContact";

export const metadata: Metadata = {
  title: "Prasannam Tiwari — Systems & Backend Engineer",
  description:
    "Backend & systems engineer building real-time, high-concurrency infrastructure — webhook delivery pipelines, hand-rolled caching layers in C, and production platforms serving real users.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <BackgroundFX />
        <DotNav />
        <FloatContact />
        {children}
      </body>
    </html>
  );
}
