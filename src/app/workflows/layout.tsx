import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflows - Automate Business Processes | Potential.com",
  description:
    "Streamline your business processes with intelligent AI workflows. Automate complex tasks, reduce manual work, and ensure consistent execution across your organization.",
  openGraph: {
    title: "AI Workflows - Automate Business Processes | Potential.com",
    description:
      "Streamline your business processes with intelligent AI workflows. Automate complex tasks, reduce manual work, and ensure consistent execution across your organization.",
    type: "website",
    images: [
      {
        url: "/newimages/operation.png",
        width: 1200,
        height: 630,
        alt: "AI Workflow Solutions",
      },
    ],
    siteName: "Potential.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflows - Automate Business Processes | Potential.com",
    description:
      "Streamline your business processes with intelligent AI workflows. Automate complex tasks and ensure consistent execution.",
    images: ["/newimages/operation.png"],
  },
  keywords: [
    "AI Workflows",
    "Process Automation",
    "Business Automation",
    "Workflow Management",
    "Task Automation",
    "Business Efficiency",
  ],
  alternates: {
    canonical: "https://potential.com/workflows",
  },
};

export default function WorkflowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
