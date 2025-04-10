import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue AI - Boost Your Business Growth",
  description:
    "Accelerate revenue growth with AI-powered sales and marketing solutions. Generate more leads, close deals faster, and optimize your revenue operations with intelligent AI agents.",
  openGraph: {
    title: "Revenue AI - Boost Your Business Growth",
    description:
      "Accelerate revenue growth with AI-powered sales and marketing solutions. Generate more leads, close deals faster, and optimize your revenue operations with intelligent AI agents.",
    type: "website",
    images: [
      {
        url: "/newimages/sales.png",
        width: 1200,
        height: 630,
        alt: "Revenue AI Solutions",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue AI - Boost Your Business Growth",
    description:
      "Accelerate revenue growth with AI-powered sales and marketing solutions. Generate more leads and close deals faster.",
    images: ["/newimages/sales.png"],
  },
  keywords: [
    "Revenue AI",
    "Sales Automation",
    "Lead Generation",
    "Business Growth",
    "AI Sales",
    "Revenue Operations",
  ],
  alternates: {
    canonical: "https://potential.com/revenue-ai",
  },
};

export default function RevenueAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
