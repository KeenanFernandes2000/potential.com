import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Innovation Blog - Insights & Updates | Potential.com",
  description:
    "Explore the latest insights on AI technology, business innovation, and digital transformation. Read expert articles on AI agents, automation, and business growth strategies.",
  openGraph: {
    title: "AI Innovation Blog - Insights & Updates | Potential.com",
    description:
      "Explore the latest insights on AI technology, business innovation, and digital transformation. Read expert articles on AI agents, automation, and business growth strategies.",
    type: "website",
    images: [
      {
        url: "/newimages/blog-01.png",
        width: 1200,
        height: 630,
        alt: "Potential.com Blog",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Innovation Blog - Insights & Updates | Potential.com",
    description:
      "Explore the latest insights on AI technology, business innovation, and digital transformation.",
    images: ["/newimages/blog-01.png"],
  },
  keywords: [
    "AI Blog",
    "Business Innovation",
    "Digital Transformation",
    "AI Insights",
    "Technology Updates",
    "Business Growth",
  ],
  alternates: {
    canonical: "https://potential.com/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
