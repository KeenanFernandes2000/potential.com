import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Empowering Business with AI",
  description:
    "Learn about Potential.com's mission to transform businesses through AI innovation. Over 20 years of experience helping Fortune 500 companies and government organizations worldwide.",
  openGraph: {
    title: "About Us - Empowering Business with AI | Potential.com",
    description:
      "Learn about Potential.com's mission to transform businesses through AI innovation. Over 20 years of experience helping Fortune 500 companies and government organizations worldwide.",
    images: [
      {
        url: "https://potential.com/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Potential.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Empowering Business with AI | Potential.com",
    description:
      "Learn about Potential.com's mission to transform businesses through AI innovation. Over 20 years of experience helping Fortune 500 companies.",
    images: ["https://potential.com/about-og-image.jpg"],
  },
};
