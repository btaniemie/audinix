import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audinix",
  description: "Discover, create, and share podcasts effortlessly with AI-powered tools",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ConvexClerkProvider>
    <html lang="en">
      <AudioProvider>
        <body className={inter.className}>
          {children}
        </body>
      </AudioProvider>
    </html>
  </ConvexClerkProvider>
  );
}
