import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbots - Intelligent Customer Service Solutions",
  description:
    "Transform your customer service with our advanced AI chatbots. Provide 24/7 support, reduce response times, and enhance customer satisfaction with intelligent automation.",
  openGraph: {
    title: "AI Chatbots - Intelligent Customer Service Solutions",
    description:
      "Transform your customer service with our advanced AI chatbots. Provide 24/7 support, reduce response times, and enhance customer satisfaction with intelligent automation.",
    type: "website",
    images: [
      {
        url: "/newimages/Hero.png",
        width: 1200,
        height: 630,
        alt: "Potential.com AI Chatbots",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots - Intelligent Customer Service Solutions",
    description:
      "Transform your customer service with our advanced AI chatbots. Provide 24/7 support and enhance customer satisfaction.",
    images: ["/newimages/Hero.png"],
  },
  keywords: [
    "AI Chatbots",
    "Customer Service",
    "Business Automation",
    "24/7 Support",
    "Intelligent Chatbots",
  ],
  alternates: {
    canonical: "https://potential.com/chatbots",
  },
};

export default function ChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
