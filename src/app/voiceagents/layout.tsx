import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice AI Agents - Intelligent Voice Solutions | Potential.com",
  description:
    "Transform customer interactions with our advanced Voice AI agents. Provide natural, human-like conversations and 24/7 voice support while reducing operational costs.",
  openGraph: {
    title: "Voice AI Agents - Intelligent Voice Solutions | Potential.com",
    description:
      "Transform customer interactions with our advanced Voice AI agents. Provide natural, human-like conversations and 24/7 voice support while reducing operational costs.",
    type: "website",
    images: [
      {
        url: "/newimages/Hero.png",
        width: 1200,
        height: 630,
        alt: "Voice AI Agents Solutions",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice AI Agents - Intelligent Voice Solutions | Potential.com",
    description:
      "Transform customer interactions with our advanced Voice AI agents. Provide natural, human-like conversations and 24/7 support.",
    images: ["/newimages/Hero.png"],
  },
  keywords: [
    "Voice AI",
    "Voice Agents",
    "Voice Automation",
    "Customer Service",
    "Voice Support",
    "AI Voice Solutions",
  ],
  alternates: {
    canonical: "https://potential.com/voiceagents",
  },
};

export default function VoiceAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
