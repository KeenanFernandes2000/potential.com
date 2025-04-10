import { Metadata, ResolvingMetadata } from "next";

// Fallback URL if environment variable is not set
const WP_SITE_URL = "https://potential.com/wp-json";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!WP_SITE_URL) {
    console.error("WordPress URL is not configured");
    return {
      title: "Blog Post | Potential.com",
      description:
        "Read our latest insights on AI and business transformation.",
    };
  }

  // Fetch the post data
  try {
    const url = `${WP_SITE_URL}/wp/v2/posts?slug=${params.slug}&_embed`;
    console.log("Fetching from URL:", url); // Debug log

    const response = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    const post = posts[0];

    if (!post) {
      return {
        title: "Blog Post Not Found | Potential.com",
        description: "The requested blog post could not be found.",
      };
    }

    // Get the featured image URL
    const featuredImage =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/newimages/blog-01.png";

    // Get the excerpt, strip HTML tags and truncate
    const excerpt = post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .slice(0, 160)
      .trim();

    // Get categories
    const categories =
      post._embedded?.["wp:term"]?.[0]?.map((cat: any) => cat.name) || [];

    return {
      title: `${post.title.rendered} | Potential.com Blog`,
      description: excerpt,
      openGraph: {
        title: post.title.rendered,
        description: excerpt,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [post._embedded?.author?.[0]?.name || "Potential.com"],
        images: [
          {
            url: featuredImage,
            width: 1200,
            height: 630,
            alt: post.title.rendered,
          },
        ],
        siteName: "Potential.com",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title.rendered,
        description: excerpt,
        images: [featuredImage],
      },
      keywords: [...categories],
      authors: [{ name: post._embedded?.author?.[0]?.name || "Potential.com" }],
      category: categories.join(", "),
      alternates: {
        canonical: `https://potential.com/blogs/${params.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Potential.com",
      description:
        "Read our latest insights on AI and business transformation.",
    };
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
