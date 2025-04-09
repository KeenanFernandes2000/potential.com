import { Metadata } from "next";

// Define WordPress API endpoints
const WP_SITE_URL = "https://potential.com/wp-json"; // WordPress REST API endpoint

// Create a helper function for fetching with CORS handling
const fetchWithCors = async (url: string, options: RequestInit = {}) => {
  // Use our new WordPress proxy API endpoint
  const apiUrl = `/api/wordpress-proxy?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching with CORS proxy:", error);
    throw error;
  }
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const response = await fetchWithCors(
      `${WP_SITE_URL}/wp/v2/posts/${params.id}?_embed=true`
    );
    const post = await response.json();

    const featuredImage =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "https://potential.com/default-og-image.jpg";
    const excerpt = post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "";
    const categories =
      post._embedded?.["wp:term"]?.[0]?.map((cat: any) => cat.name) || [];
    const author = post._embedded?.author?.[0]?.name || "Potential.com";

    return {
      title: post.title.rendered,
      description: excerpt.slice(0, 160),
      keywords: [...categories, "AI Solutions", "Business AI", "Potential.com"],
      authors: [{ name: author }],
      openGraph: {
        title: post.title.rendered,
        description: excerpt.slice(0, 160),
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [author],
        images: [
          {
            url: featuredImage,
            width: 1200,
            height: 630,
            alt: post.title.rendered,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title.rendered,
        description: excerpt.slice(0, 160),
        images: [featuredImage],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Potential.com",
      description: "Read our latest insights on AI solutions for business.",
    };
  }
}
