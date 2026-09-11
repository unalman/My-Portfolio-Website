import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/language";
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
  title: "Sadık Ünal Çokünlü — Senior Backend Software Engineer",
  description:
    "Portfolio of Sadık Ünal Çokünlü, a backend software engineer working on distributed systems, APIs and cloud infrastructure.",
};

export const viewport: Viewport = {
  themeColor: "#05070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-zinc-300">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
