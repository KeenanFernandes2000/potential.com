import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operational AI - Streamline Business Operations",
  description:
    "Transform your business operations with AI automation. Reduce costs, minimize errors, and increase efficiency with our specialized operational AI agents.",
  openGraph: {
    title: "Operational AI - Streamline Business Operations",
    description:
      "Transform your business operations with AI automation. Reduce costs, minimize errors, and increase efficiency with our specialized operational AI agents.",
    type: "website",
    images: [
      {
        url: "/newimages/operation.png",
        width: 1200,
        height: 630,
        alt: "Operational AI Solutions",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operational AI - Streamline Business Operations",
    description:
      "Transform your business operations with AI automation. Reduce costs and increase efficiency.",
    images: ["/newimages/operation.png"],
  },
  keywords: [
    "Operational AI",
    "Business Operations",
    "Process Automation",
    "Cost Reduction",
    "Efficiency Optimization",
    "AI Automation",
  ],
  alternates: {
    canonical: "https://potential.com/operational-ai",
  },
};

export default function OperationalAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
