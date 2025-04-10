import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Potential.com - Our Mission & Vision",
  description:
    "For over 20 years, Potential.com has empowered businesses worldwide with innovative AI solutions. Learn about our mission to unlock business potential through AI agents.",
  openGraph: {
    title: "About Potential.com - Our Mission & Vision",
    description:
      "For over 20 years, Potential.com has empowered businesses worldwide with innovative AI solutions. Learn about our mission to unlock business potential through AI agents.",
    type: "website",
    images: [
      {
        url: "/newimages/veraHero.png",
        width: 1200,
        height: 630,
        alt: "About Potential.com",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Potential.com - Our Mission & Vision",
    description:
      "For over 20 years, Potential.com has empowered businesses worldwide with innovative AI solutions.",
    images: ["/newimages/veraHero.png"],
  },
  keywords: [
    "About Potential.com",
    "Company Mission",
    "Company Vision",
    "AI Innovation",
    "Business Empowerment",
  ],
  alternates: {
    canonical: "https://potential.com/about-us",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
