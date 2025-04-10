"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define WordPress API endpoints from blog-single.js
const WP_SITE_URL = "https://potential.com/wp-json"; // WordPress REST API endpoint

// Add cache storage for posts
const postCache = new Map();

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

// Define types
interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface Author {
  id: number;
  name: string;
  avatar_urls: {
    [key: string]: string;
  };
}

interface Media {
  source_url: string;
  alt_text?: string;
}

interface Comment {
  id: number;
  author_name: string;
  author_avatar_urls: {
    [key: string]: string;
  };
  date: string;
  content: {
    rendered: string;
  };
  parent: number;
  children?: Comment[];
}

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string; protected?: boolean };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Media[];
    "wp:term"?: Category[][];
    author?: Author[];
  };
}

interface BlogPostParams {
  id: string;
}

interface BlogPostPageProps {
  params: BlogPostParams | Promise<BlogPostParams>;
}

// Add a new type for grouped search results
interface GroupedSearchResults {
  [key: string]: {
    posts: Post[];
    count: number;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  // Use React.use() to unwrap params as recommended by Next.js
  const unwrappedParams = React.use(params as Promise<BlogPostParams>);
  const postId = parseInt(unwrappedParams.id);

  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [sidebarCategories, setCategories] = useState<Category[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
    parent: "0",
  });
  const [commentStatus, setCommentStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [groupedResults, setGroupedResults] = useState<GroupedSearchResults>(
    {}
  );
  const [isSearching, setIsSearching] = useState(false);

  // Organize comments into a tree structure
  const organizeComments = useCallback((comments: Comment[]) => {
    const commentMap = new Map();
    const rootComments: Comment[] = [];

    // First pass: create a map of all comments
    comments.forEach((comment) => {
      comment.children = [];
      commentMap.set(comment.id, comment);
    });

    // Second pass: organize into tree structure
    comments.forEach((comment) => {
      if (comment.parent === 0) {
        rootComments.push(comment);
      } else {
        const parent = commentMap.get(comment.parent);
        if (parent) {
          parent.children.push(comment);
        }
      }
    });

    return rootComments;
  }, []);

  // Fetch comments function
  const fetchComments = useCallback(
    async (postId: number) => {
      try {
        const response = await fetchWithCors(
          `${WP_SITE_URL}/wp/v2/comments?post=${postId}&order=asc&per_page=100&_embed`
        );

        const commentsData = await response.json();

        if (commentsData.length === 0) {
          setComments([]);
          return;
        }

        const rootComments = organizeComments(commentsData);
        setComments(rootComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
      }
    },
    [organizeComments]
  );

  // Fetch related posts function
  const fetchRelatedPosts = useCallback(
    async (categoryIds: number[], currentPostId: number) => {
      try {
        // Fetch posts from the same categories, excluding the current post
        const response = await fetchWithCors(
          `${WP_SITE_URL}/wp/v2/posts?_embed&categories=${categoryIds.join(
            ","
          )}&exclude=${currentPostId}&per_page=3`
        );

        const data = await response.json();
        setRelatedPosts(data);
      } catch (error) {
        console.error("Error fetching related posts:", error);
        setRelatedPosts([]);
      }
    },
    []
  );

  // Fetch post function
  const fetchPost = useCallback(async () => {
    setIsLoading(true);

    try {
      // Check cache first
      if (postCache.has(`post_${postId}`)) {
        const cachedPost = postCache.get(`post_${postId}`);
        setPost(cachedPost);

        // Fetch related posts based on the current post's categories
        const categoryIds =
          cachedPost._embedded?.["wp:term"]?.[0]?.map(
            (cat: Category) => cat.id
          ) || [];
        await fetchRelatedPosts(categoryIds, postId);
        await fetchComments(postId);
        setIsLoading(false);
        return;
      }

      // If not in cache, fetch from API
      const response = await fetchWithCors(
        `${WP_SITE_URL}/wp/v2/posts/${postId}?_embed`
      );

      const data = await response.json();

      // Store in cache
      postCache.set(`post_${postId}`, data);
      setPost(data);

      // Fetch related posts
      if (data._embedded?.["wp:term"]?.[0]) {
        const categories = data._embedded["wp:term"][0].map(
          (category: Category) => category.id
        );
        await fetchRelatedPosts(categories, postId);
      }

      // Fetch comments
      await fetchComments(postId);
    } catch (error) {
      console.error("Error fetching post:", error);
      setPost(null);
    } finally {
      setIsLoading(false);
    }
  }, [postId, fetchRelatedPosts, fetchComments]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Add debounce function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Update the debounced search function
  const debouncedSearch = useCallback(
    debounce(async (term: string) => {
      if (!term.trim()) {
        setSearchResults([]);
        setGroupedResults({});
        setIsSearching(false);
        return;
      }

      try {
        setIsSearching(true);
        const response = await fetchWithCors(
          `${WP_SITE_URL}/wp/v2/posts?search=${encodeURIComponent(term)}&_embed`
        );

        if (!response.ok) {
          throw new Error(`Search failed with status: ${response.status}`);
        }

        const posts = await response.json();

        // Group posts by category
        const grouped: GroupedSearchResults = {};
        posts.forEach((post: Post) => {
          const categories = post._embedded?.["wp:term"]?.[0] || [];
          if (categories.length === 0) {
            if (!grouped["Uncategorized"]) {
              grouped["Uncategorized"] = { posts: [], count: 0 };
            }
            grouped["Uncategorized"].posts.push(post);
            grouped["Uncategorized"].count++;
          } else {
            categories.forEach((category: Category) => {
              const categoryName = category.name || "Uncategorized";
              if (!grouped[categoryName]) {
                grouped[categoryName] = { posts: [], count: 0 };
              }
              grouped[categoryName].posts.push(post);
              grouped[categoryName].count++;
            });
          }
        });

        setGroupedResults(grouped);
        setSearchResults(posts);
      } catch (error) {
        console.error("Search error:", error);
        setSearchResults([]);
        setGroupedResults({});
      } finally {
        setIsSearching(false);
      }
    }, 300),
    []
  );

  // Update handleSearchChange to immediately trigger search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsSearching(true);
    setSearchTerm(value);
    debouncedSearch(value);
  };

  // Fetch categories
  const fetchCategories = useCallback(async () => {
    try {
      const response = await fetchWithCors(`${WP_SITE_URL}/wp/v2/categories`);
      const data = await response.json();

      // Filter out 'Articles' category and uncategorized
      const filteredCategories = data.filter(
        (cat: Category) =>
          cat.name.toLowerCase() !== "articles" &&
          cat.name.toLowerCase() !== "uncategorized"
      );

      setCategories(filteredCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Handle comment form changes
  const handleCommentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle comment submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetchWithCors(`${WP_SITE_URL}/wp/v2/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: postId,
          author_name: commentForm.name,
          author_email: commentForm.email,
          content: commentForm.comment,
          parent: parseInt(commentForm.parent),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      // Clear form
      setCommentForm({
        name: "",
        email: "",
        comment: "",
        parent: "0",
      });

      // Show success message
      setCommentStatus({
        type: "success",
        message:
          "Thank you! Your comment has been submitted and is awaiting moderation.",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setCommentStatus({ type: null, message: "" });
      }, 5000);

      // Refresh comments after a short delay
      setTimeout(() => {
        fetchComments(postId);
      }, 2000);
    } catch (error) {
      console.error("Error posting comment:", error);
      setCommentStatus({
        type: "error",
        message: "Error posting comment. Please try again.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setCommentStatus({ type: null, message: "" });
      }, 5000);
    }
  };

  if (isLoading) {
    return (
      <div className="py-20 px-4 md:px-8 text-center">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto mt-4"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded mt-10"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 px-4 md:px-8 text-center">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Post not found
        </h1>
        <p className="mt-4 text-body-color dark:text-body-color-dark">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blogs"
          className="inline-flex mt-6 items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const featuredImageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/newimages/blog-01.png";
  const featuredImageAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const postCategories = post._embedded?.["wp:term"]?.[0] || [];
  const author = post._embedded?.["author"]?.[0];
  const authorAvatar = author?.avatar_urls["96"] || "/newimages/user.png";

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              {postCategories.map((category: Category) => (
                <Link
                  key={category.id}
                  href={`/blogs?category=${category.id}`}
                  className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <h1 className="hero-title text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {post.title.rendered}
            </h1>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center">
                <img
                  src={authorAvatar}
                  alt={author?.name || "Author"}
                  className="w-10 h-10 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="text-base font-medium text-black dark:text-white">
                    {author?.name || "Unknown Author"}
                  </h4>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    {formatDate(post.date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Single Start */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            {/* Sidebar */}
            <div className="w-full lg:w-[32%]">
              {/* Search */}
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-3.5 mb-10">
                <div className="blog-search relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-4 px-6"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 p-5"
                      onClick={() => debouncedSearch(searchTerm)}
                    >
                      <svg
                        className="fill-black dark:fill-white hover:fill-primary dark:hover:fill-primary transition-all duration-300"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Results */}
              {searchTerm && (
                <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-3.5 mb-10">
                  <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                    Search Results for "{searchTerm}"
                  </h4>

                  {isSearching ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
                    </div>
                  ) : searchResults.length === 0 && !isSearching ? (
                    <div className="text-body-color dark:text-body-color-dark text-center py-8">
                      No results found for "{searchTerm}"
                    </div>
                  ) : (
                    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                      {Object.entries(groupedResults).map(
                        ([category, { posts }]) => (
                          <div key={category}>
                            <h5 className="font-medium text-lg text-black dark:text-white mb-4 sticky top-0 bg-white dark:bg-blacksection py-2">
                              {category}
                            </h5>
                            <div className="space-y-4">
                              {posts.slice(0, 3).map((post) => (
                                <Link
                                  key={post.id}
                                  href={`/blogs/${post.id}`}
                                  className="block bg-white dark:bg-blacksection border border-stroke dark:border-strokedark rounded-lg p-4 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-200"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                      <img
                                        src={
                                          post._embedded?.[
                                            "wp:featuredmedia"
                                          ]?.[0]?.source_url ||
                                          "/newimages/blog-01.png"
                                        }
                                        alt={post.title.rendered}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-lg font-medium text-black dark:text-white mb-2">
                                        {post.title.rendered}
                                      </h4>
                                      <div
                                        className="text-body-color dark:text-body-color-dark line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                          __html: post.excerpt.rendered,
                                        }}
                                      />
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              {posts.length > 3 && (
                                <div className="text-center pt-2">
                                  <span className="text-sm text-body-color dark:text-body-color-dark">
                                    + {posts.length - 3} more results in this
                                    category
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Add custom scrollbar styles */}
              <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background-color: #9333ea;
                  border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background-color: rgba(var(--color-primary), 0.5);
                }
              `}</style>

              {/* Categories */}
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                  Categories
                </h4>
                <ul className="blog-categories">
                  {sidebarCategories.length === 0 ? (
                    <li className="text-body-color dark:text-body-color-dark">
                      No categories found.
                    </li>
                  ) : (
                    sidebarCategories.map((category) => (
                      <li
                        key={category.id}
                        className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary"
                      >
                        <Link
                          href={`/blogs?category=${category.id}`}
                          className="flex items-center justify-between"
                        >
                          {category.name}
                          <span className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm flex items-center justify-center">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* Related Posts */}
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9">
                <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                  Related Posts
                </h4>
                <div className="related-posts">
                  {relatedPosts.length === 0 ? (
                    <p className="text-body-color dark:text-body-color-dark">
                      No related posts found.
                    </p>
                  ) : (
                    relatedPosts.map((relatedPost) => (
                      <div
                        key={relatedPost.id}
                        className="flex xl:flex-nowrap flex-wrap gap-4 2xl:gap-6 mb-7.5 group"
                      >
                        <div className="max-w-20 rounded-lg overflow-hidden">
                          <img
                            src={
                              relatedPost._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url || "/newimages/blog-01.png"
                            }
                            alt={relatedPost.title.rendered}
                            className="w-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h5 className="flex-1 font-medium text-lg text-black dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-all duration-300">
                          <Link href={`/blogs/${relatedPost.id}`}>
                            {relatedPost.title.rendered}
                          </Link>
                        </h5>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="blog-content">
                {/* Featured Image */}
                <div className="animate_top mb-10 w-full rounded-lg overflow-hidden">
                  <img
                    src={featuredImageUrl}
                    alt={featuredImageAlt}
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="animate_top blog-content mb-10">
                  <div
                    className="prose prose-lg dark:prose-invert max-w-none blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>

                {/* Social Share */}
                <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-stroke dark:border-strokedark">
                  <span className="text-black dark:text-white font-medium">
                    Share this post:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://twitter.com/share?url=${encodeURIComponent(
                        window.location.href
                      )}&text=${encodeURIComponent(post.title.rendered)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color dark:text-body-color-dark hover:text-primary dark:hover:text-primary"
                    >
                      Twitter
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color dark:text-body-color-dark hover:text-primary dark:hover:text-primary"
                    >
                      Facebook
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                        window.location.href
                      )}&title=${encodeURIComponent(post.title.rendered)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-color dark:text-body-color-dark hover:text-primary dark:hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="animate_top mt-15 mb-15 lg:mb-20">
                  <div className="mb-8 border-b border-stroke dark:border-strokedark pb-8">
                    <h2 className="text-3xl font-semibold text-black dark:text-white mb-2">
                      Comments ({comments.length})
                    </h2>
                  </div>

                  <div className="comments-list">
                    {comments.length > 0 ? (
                      <div className="space-y-10">
                        {comments.map((comment) => (
                          <CommentItem
                            key={comment.id}
                            comment={comment}
                            formatDate={formatDate}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-body-color dark:text-body-color-dark">
                        No comments yet. Be the first to comment!
                      </p>
                    )}
                  </div>

                  {/* Comment Form */}
                  <div className="mt-12">
                    <h4 className="font-semibold text-xl text-black dark:text-white mb-6">
                      Leave a Comment
                    </h4>
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-body-color dark:text-body-color-dark mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={commentForm.name}
                            onChange={handleCommentChange}
                            required
                            className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-body-color dark:text-body-color-dark mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={commentForm.email}
                            onChange={handleCommentChange}
                            required
                            className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-body-color dark:text-body-color-dark mb-2">
                          Comment *
                        </label>
                        <textarea
                          name="comment"
                          value={commentForm.comment}
                          onChange={handleCommentChange}
                          required
                          rows={6}
                          className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-12 dark:shadow-none rounded-lg focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6 resize-none"
                        ></textarea>
                      </div>
                      {commentStatus.message && (
                        <div
                          className={`p-4 rounded-lg ${
                            commentStatus.type === "success"
                              ? "bg-green-50 text-green-600 dark:bg-green-900/10 dark:text-green-400"
                              : "bg-red-50 text-red-600 dark:bg-red-900/10 dark:text-red-400"
                          }`}
                        >
                          {commentStatus.message}
                        </div>
                      )}
                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 font-medium duration-300"
                        >
                          Post Comment
                          <svg
                            className="fill-white"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Recursive comment component
interface CommentItemProps {
  comment: Comment;
  formatDate: (date: string) => string;
}

const CommentItem = ({ comment, formatDate }: CommentItemProps) => {
  const hasReplies = comment.children && comment.children.length > 0;

  return (
    <div
      className={`comment-item ${hasReplies ? "mb-8" : ""}`}
      data-comment-id={comment.id}
    >
      <div className="flex gap-4 sm:gap-6">
        <div className="shrink-0">
          <img
            src={comment.author_avatar_urls["96"] || "/newimages/user.png"}
            alt={comment.author_name}
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <h5 className="font-medium text-black dark:text-white">
              {comment.author_name}
            </h5>
            <span className="text-sm text-body-color dark:text-body-color-dark">
              {formatDate(comment.date)}
            </span>
          </div>
          <div
            className="text-body-color dark:text-body-color-dark mb-4"
            dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
          />
        </div>
      </div>

      {hasReplies && (
        <div className="mt-8 ml-8 sm:ml-16 space-y-8">
          {comment.children?.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
