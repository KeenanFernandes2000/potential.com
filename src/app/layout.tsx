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
  title: {
    default: "Potential.com - AI Solutions for Business",
    template: "%s | Potential.com",
  },
  description:
    "Transform your business with our specialized AI agents for Leadership, Sales, and Operations. Get started in minutes with customized AI solutions.",
  keywords: [
    "AI Solutions",
    "Business AI",
    "AI Agents",
    "Digital Transformation",
    "Business Automation",
  ],
  authors: [{ name: "Potential.com" }],
  creator: "Potential.com",
  publisher: "Potential.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://potential.com",
    siteName: "Potential.com",
    title: "Potential.com - AI Solutions for Business",
    description:
      "Transform your business with our specialized AI agents for Leadership, Sales, and Operations. Get started in minutes with customized AI solutions.",
    images: [
      {
        url: "https://potential.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Potential.com - AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Potential.com - AI Solutions for Business",
    description:
      "Transform your business with our specialized AI agents for Leadership, Sales, and Operations. Get started in minutes with customized AI solutions.",
    images: ["https://potential.com/twitter-image.jpg"],
    creator: "@potential_com",
    site: "@potential_com",
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
