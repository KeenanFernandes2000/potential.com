import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Potential.com - AI Agents for Business Growth",
  description:
    "Expand your human team with specialized AI agents. Deploy powerful AI team members who seamlessly integrate with your existing systems—backed by dedicated support to ensure instant ROI.",
  openGraph: {
    title: "Potential.com - AI Agents for Business Growth",
    description:
      "Expand your human team with specialized AI agents. Deploy powerful AI team members who seamlessly integrate with your existing systems.",
    type: "website",
    images: [
      {
        url: "/newimages/Hero.png",
        width: 1200,
        height: 630,
        alt: "Potential.com AI Agents",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Potential.com - AI Agents for Business Growth",
    description:
      "Expand your human team with specialized AI agents. Deploy powerful AI team members who seamlessly integrate with your existing systems.",
    images: ["/newimages/Hero.png"],
  },
  keywords: [
    "AI Agents",
    "Business Growth",
    "AI Solutions",
    "Enterprise AI",
    "Digital Transformation",
  ],
  alternates: {
    canonical: "https://potential.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black`}>
        <ThemeProvider>
          <Lines />
          <Navigation />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
