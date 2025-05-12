import { NextResponse } from "next/server";

/**
 * This API route serves as a proxy for WordPress API requests to bypass CORS issues
 * It forwards requests to the WordPress API and returns the response
 */
export async function GET(request: Request) {
  console.log("request", request.url);
  // Get the URL from the query parameter
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  // Validate the URL - make sure it points to the WordPress API
  if (!targetUrl || !targetUrl.startsWith("https://potential.com/wp-json")) {
    return NextResponse.json(
      { error: "Invalid WordPress API URL" },
      { status: 400 }
    );
  }

  try {
    // Fetch data from WordPress
    const response = await fetch(targetUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60, // Cache for 60 seconds
      },
    });

    // Get response data
    const data = await response.json();

    // Return the data with proper headers to allow our frontend to access it
    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("WordPress proxy error:", error);
    return NextResponse.json(
      { error: "Error fetching from WordPress API" },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler for preflight requests
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
