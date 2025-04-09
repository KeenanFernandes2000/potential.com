"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Define WordPress API endpoints from blog-single.js
const WP_SITE_URL = "https://potential.com/wp-json"; // WordPress REST API endpoint

// Add cache storage for posts
const postCache = new Map();

// Define post and pagination types
interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Media {
  source_url: string;
}

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Media[];
    "wp:term"?: Category[][];
  };
}

// Create a helper function for fetching with CORS handling
const fetchWithCors = async (url: string) => {
  // Use our new WordPress proxy API endpoint
  const apiUrl = `/api/wordpress-proxy?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching with CORS proxy:", error);
    throw error;
  }
};

const BlogsPage = () => {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState<{
    name?: string;
    description?: string;
  }>({});
  const postsPerPage = 6;

  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");

  // Fetch category info for the header
  const fetchCategoryInfo = useCallback(async (categoryId: string) => {
    try {
      const response = await fetchWithCors(
        `${WP_SITE_URL}/wp/v2/categories/${categoryId}`
      );

      const category = await response.json();
      setCategoryInfo({
        name: category.name,
        description:
          category.description ||
          `Browse all posts in the ${category.name} category`,
      });
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  }, []);

  // Scroll to top function from blog.js
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Fetch posts based on current filters
  const fetchPosts = useCallback(async () => {
    setIsLoading(true);

    try {
      // Start scroll animation before loading (like in blog.js)
      scrollToTop();

      // If we have a category, fetch its info
      if (categoryParam) {
        await fetchCategoryInfo(categoryParam);
      } else {
        setCategoryInfo({});
      }

      // Check cache for current request
      const cacheKey = `posts_${currentPage}_${categoryParam || ""}_${
        searchParam || ""
      }`;
      if (postCache.has(cacheKey)) {
        const cachedData = postCache.get(cacheKey);
        setPosts(cachedData.posts);
        setTotalPages(cachedData.totalPages);
        setIsLoading(false);
        return;
      }

      // Build API URL with parameters - use WP_SITE_URL from the constant
      let apiUrl = `${WP_SITE_URL}/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${currentPage}`;

      if (categoryParam) {
        apiUrl += `&categories=${categoryParam}`;
      }

      if (searchParam) {
        apiUrl += `&search=${encodeURIComponent(searchParam)}`;
      }

      // Use our CORS-friendly fetch method
      const response = await fetchWithCors(apiUrl);

      // Get pagination info from headers
      const totalPagesHeader = response.headers.get("X-WP-TotalPages");
      const totalPostsHeader = response.headers.get("X-WP-Total");

      const pages = totalPagesHeader ? parseInt(totalPagesHeader) : 0;
      setTotalPages(pages);

      const data = await response.json();
      setPosts(data);

      // Cache the results
      postCache.set(cacheKey, {
        posts: data,
        totalPages: pages,
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
      // Provide fallback content if API is unreachable
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, categoryParam, searchParam, fetchCategoryInfo, scrollToTop]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Prefetch post data (similar to blog-single.js)
  const prefetchPost = useCallback(async (postId: number) => {
    // Skip if already cached
    if (postCache.has(`post_${postId}`)) return;

    try {
      const response = await fetchWithCors(
        `${WP_SITE_URL}/wp/v2/posts/${postId}?_embed`
      );

      const post = await response.json();
      postCache.set(`post_${postId}`, post);
    } catch (error) {
      console.error("Error prefetching post:", error);
    }
  }, []);

  const formatCategories = (categories?: Category[]) => {
    if (!categories || categories.length === 0) return null;

    // Filter out the 'Articles' category and get only the first 2 categories
    const filteredCategories = categories
      .filter((cat) => cat.name.toLowerCase() !== "articles")
      .slice(0, 2);

    if (filteredCategories.length === 0) return null;

    // Add count indicator if there are more categories
    const remainingCount = categories.length - 2;

    return (
      <div className="mt-4 mb-3">
        {filteredCategories.map((category) => (
          <Link
            key={category.id}
            href={`/blogs?category=${category.id}`}
            className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm mr-2 mb-2 transition-all duration-300 hover:bg-primary hover:text-white"
          >
            {category.name}
          </Link>
        ))}
        {remainingCount > 0 && (
          <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-body-color dark:text-body-color-dark rounded-full text-xs">
            +{remainingCount}
          </span>
        )}
      </div>
    );
  };

  const LoadingSkeleton = () => (
    <div className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9">
      <div className="animate-pulse relative overflow-hidden">
        {/* Loading overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent loading-shine"></div>

        {/* Image placeholder */}
        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg relative overflow-hidden"></div>

        <div className="px-4 mt-7.5">
          {/* Categories placeholder */}
          <div className="flex gap-2 mb-3">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
          </div>

          {/* Title placeholder */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>

          {/* Excerpt placeholder */}
          <div className="space-y-2 mt-3.5">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  // Add useEffect for prefetching posts on hover
  useEffect(() => {
    const prefetchLinks = () => {
      const links = document.querySelectorAll('a[href^="/blogs/"]');

      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href) {
          const postId = parseInt(href.split("/blogs/")[1]);

          if (!isNaN(postId)) {
            // Prefetch on hover
            link.addEventListener("mouseenter", () => {
              prefetchPost(postId);
            });

            // Also prefetch on touch start for mobile devices
            link.addEventListener("touchstart", () => {
              prefetchPost(postId);
            });
          }
        }
      });
    };

    if (!isLoading) {
      // Add small delay to allow DOM to update
      setTimeout(prefetchLinks, 500);
    }

    return () => {
      // Clean up event listeners if needed
    };
  }, [posts, isLoading, prefetchPost]);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center">
            <h1 className="hero-title text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <div className="mt-2 mb-6">
                <span className="relative mt-3 whitespace-nowrap text-primary dark:text-primary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-purple-400/50 dark:fill-purple-300/30"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative">
                    {categoryInfo.name ? "Category" : "Our Blog"}
                  </span>
                </span>
              </div>
              <div className="mt-2">
                {categoryInfo.name || "Insights & Updates"}
              </div>
            </h1>
            <p className="hero-subtitle mx-auto mt-3 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              {categoryInfo.description ||
                "Stay up to date with the latest news, insights, and updates from our team."}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {isLoading ? (
              // Loading skeletons
              Array(6)
                .fill(0)
                .map((_, index) => <LoadingSkeleton key={index} />)
            ) : posts.length === 0 ? (
              <p className="text-center col-span-full text-body-color dark:text-body-color-dark">
                {searchParam
                  ? `No posts found for "${searchParam}".`
                  : categoryParam
                  ? "No posts found in this category."
                  : "No posts found."}
              </p>
            ) : (
              // Blog posts
              posts.map((post) => {
                const imageUrl =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/newimages/blog-01.png";
                const title = post.title.rendered;
                const excerpt = post.excerpt.rendered
                  .replace(/<[^>]*>/g, "")
                  .slice(0, 100);
                const categories = post._embedded?.["wp:term"]?.[0];

                return (
                  <div
                    key={post.id}
                    className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9 transition-all duration-300 hover:shadow-solid-12"
                  >
                    <Link
                      href={`/blogs/${post.id}`}
                      className="block overflow-hidden rounded-lg"
                    >
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </Link>

                    <div className="px-4">
                      {formatCategories(categories)}
                      <h4 className="font-medium text-lg xl:text-itemtitle2 text-black hover:text-primary dark:text-white mt-3.5 mb-3.5 line-clamp-2">
                        <Link href={`/blogs/${post.id}`}>{title}</Link>
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark line-clamp-2">
                        {excerpt}...
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination - using enhanced pagination from the original blog.js */}
          {!isLoading && totalPages > 1 && (
            <div className="blog-pagination mt-10 lg:mt-15 xl:mt-20 relative z-1">
              <ul className="flex items-center justify-center gap-3.5">
                {/* Previous button */}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 ${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-primary dark:hover:bg-primary hover:text-white"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                    >
                      <path d="M2.93884 6.99999L7.88884 11.95L6.47484 13.364L0.11084 6.99999L6.47484 0.635986L7.88884 2.04999L2.93884 6.99999Z" />
                    </svg>
                  </button>
                </li>

                {/* Calculate visible page numbers like in the original script */}
                {(() => {
                  let startPage = Math.max(1, currentPage - 2);
                  let endPage = Math.min(totalPages, startPage + 4);

                  if (endPage - startPage < 4) {
                    startPage = Math.max(1, endPage - 4);
                  }

                  const pages = [];

                  // First page
                  if (startPage > 1) {
                    pages.push(
                      <li key="first">
                        <button
                          onClick={() => handlePageChange(1)}
                          className="group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 bg-white dark:bg-blacksection hover:bg-primary dark:hover:bg-primary hover:text-white"
                        >
                          1
                        </button>
                      </li>
                    );

                    if (startPage > 2) {
                      pages.push(
                        <li key="ellipsis1">
                          <button
                            disabled
                            className="group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 opacity-50 cursor-not-allowed"
                          >
                            ...
                          </button>
                        </li>
                      );
                    }
                  }

                  // Page numbers
                  for (let i = startPage; i <= endPage; i++) {
                    pages.push(
                      <li key={i}>
                        <button
                          onClick={() => handlePageChange(i)}
                          className={`group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 ${
                            currentPage === i
                              ? "bg-primary text-white"
                              : "bg-white dark:bg-blacksection hover:bg-primary dark:hover:bg-primary hover:text-white"
                          }`}
                        >
                          {i}
                        </button>
                      </li>
                    );
                  }

                  // Last page
                  if (endPage < totalPages) {
                    if (endPage < totalPages - 1) {
                      pages.push(
                        <li key="ellipsis2">
                          <button
                            disabled
                            className="group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 opacity-50 cursor-not-allowed"
                          >
                            ...
                          </button>
                        </li>
                      );
                    }

                    pages.push(
                      <li key="last">
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className="group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 bg-white dark:bg-blacksection hover:bg-primary dark:hover:bg-primary hover:text-white"
                        >
                          {totalPages}
                        </button>
                      </li>
                    );
                  }

                  return pages;
                })()}

                {/* Next button */}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`group flex items-center justify-center w-7.5 md:w-10 h-7.5 md:h-10 rounded-[4px] text-black dark:text-white text-xs md:text-base border border-stroke dark:border-strokedark transition-all duration-300 ${
                      currentPage === totalPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-primary dark:hover:bg-primary hover:text-white"
                    }`}
                  >
                    <svg
                      className="fill-current"
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                    >
                      <path d="M5.06116 7.00001L0.111159 2.05001L1.52516 0.636014L7.88916 7.00001L1.52516 13.364L0.11116 11.95L5.06116 7.00001Z" />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          )}

          {/* Add CSS for loading animations from blog.js */}
          <style jsx global>{`
            @keyframes shine {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            .loading-shine {
              animation: shine 1.5s infinite;
            }

            .blog-grid {
              transition: opacity 0.3s ease-in-out;
            }

            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            @keyframes pulse {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
              }
            }
          `}</style>
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;
