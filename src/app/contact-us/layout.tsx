import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Potential.com - Get in Touch With Our Team",
  description:
    "Have questions about our AI solutions? Contact our team of experts today. We're here to help you transform your business with cutting-edge AI technology.",
  openGraph: {
    title: "Contact Potential.com - Get in Touch With Our Team",
    description:
      "Have questions about our AI solutions? Contact our team of experts today. We're here to help you transform your business with cutting-edge AI technology.",
    type: "website",
    images: [
      {
        url: "/newimages/Hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Potential.com",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Potential.com - Get in Touch With Our Team",
    description:
      "Have questions about our AI solutions? Contact our team of experts today.",
    images: ["/newimages/Hero.png"],
  },
  keywords: [
    "Contact Us",
    "Support",
    "Business Inquiry",
    "AI Solutions Help",
    "Get in Touch",
  ],
  alternates: {
    canonical: "https://potential.com/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
