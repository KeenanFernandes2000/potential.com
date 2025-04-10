import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic AI - Empower Business Decision Making",
  description:
    "Transform your strategic planning with AI-powered insights. Make data-driven decisions, identify opportunities, and drive innovation with our strategic AI solutions.",
  openGraph: {
    title: "Strategic AI - Empower Business Decision Making",
    description:
      "Transform your strategic planning with AI-powered insights. Make data-driven decisions, identify opportunities, and drive innovation with our strategic AI solutions.",
    type: "website",
    images: [
      {
        url: "/newimages/leadership.png",
        width: 1200,
        height: 630,
        alt: "Strategic AI Solutions",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic AI - Empower Business Decision Making",
    description:
      "Transform your strategic planning with AI-powered insights. Make data-driven decisions and drive innovation.",
    images: ["/newimages/leadership.png"],
  },
  keywords: [
    "Strategic AI",
    "Business Strategy",
    "Decision Making",
    "Data Analytics",
    "Innovation",
    "Strategic Planning",
  ],
  alternates: {
    canonical: "https://potential.com/strategic-ai",
  },
};

export default function StrategicAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
