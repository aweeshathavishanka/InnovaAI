import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "InnovaAI | Innovate smarter with AI-driven SaaS and content creation tools.",
  description:
    "Discover our cutting-edge SaaS and Blog app powered by OpenAI. Enhance productivity, automate processes, and create engaging content effortlessly with AI-driven tools. Transform your business today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
