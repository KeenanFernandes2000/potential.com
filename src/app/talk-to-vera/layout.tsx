import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Vera - Your AI Assistant | Potential.com",
  description:
    "Experience Vera, our intelligent AI assistant. Get instant answers about our AI solutions, schedule demos, and learn how we can help transform your business operations.",
  openGraph: {
    title: "Talk to Vera - Your AI Assistant | Potential.com",
    description:
      "Experience Vera, our intelligent AI assistant. Get instant answers about our AI solutions, schedule demos, and learn how we can help transform your business operations.",
    type: "website",
    images: [
      {
        url: "/newimages/veraHero.png",
        width: 1200,
        height: 630,
        alt: "Talk to Vera AI Assistant",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk to Vera - Your AI Assistant | Potential.com",
    description:
      "Experience Vera, our intelligent AI assistant. Get instant answers and learn about our AI solutions.",
    images: ["/newimages/veraHero.png"],
  },
  keywords: [
    "Vera AI Assistant",
    "AI Chat",
    "Business AI Solutions",
    "Virtual Assistant",
    "AI Demo",
    "Instant Support",
  ],
  alternates: {
    canonical: "https://potential.com/talk-to-vera",
  },
};

export default function TalkToVeraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
