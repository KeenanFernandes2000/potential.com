import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - AI Business Insights & News",
  description:
    "Stay updated with the latest insights on AI solutions, digital transformation, and business innovation. Read our expert articles and case studies.",
  openGraph: {
    title: "Blog - AI Business Insights & News | Potential.com",
    description:
      "Stay updated with the latest insights on AI solutions, digital transformation, and business innovation. Read our expert articles and case studies.",
    images: [
      {
        url: "https://potential.com/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Potential.com Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - AI Business Insights & News | Potential.com",
    description:
      "Stay updated with the latest insights on AI solutions, digital transformation, and business innovation.",
    images: ["https://potential.com/blog-og-image.jpg"],
  },
};
