import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Image Background Remover Online - Remove BG Instantly",
  description: "Remove image background for free in seconds. No signup required. Upload JPG, PNG or WEBP and download transparent PNG instantly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="SFctGnAvGk495s9Myg05dlKqb4lZgsFYO5Jp_dejQ2Q" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
