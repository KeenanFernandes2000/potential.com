import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo - Experience Potential.com AI Agents",
  description:
    "Schedule a personalized demo to see how our AI agents can transform your business operations. Get hands-on experience with our cutting-edge AI solutions.",
  openGraph: {
    title: "Book a Demo - Experience Potential.com AI Agents",
    description:
      "Schedule a personalized demo to see how our AI agents can transform your business operations. Get hands-on experience with our cutting-edge AI solutions.",
    type: "website",
    images: [
      {
        url: "/newimages/Hero.png",
        width: 1200,
        height: 630,
        alt: "Book a Demo - Potential.com",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo - Experience Potential.com AI Agents",
    description:
      "Schedule a personalized demo to see how our AI agents can transform your business operations.",
    images: ["/newimages/Hero.png"],
  },
  keywords: [
    "Book Demo",
    "AI Demo",
    "Business AI",
    "AI Solutions Demo",
    "Potential.com Demo",
  ],
  alternates: {
    canonical: "https://potential.com/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
