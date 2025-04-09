"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import SectionTitle from "@/components/SectionTitle";
import dynamic from "next/dynamic";

const ScrollRevealComponent = dynamic(
  () => import("@/components/scrollReveal"),
  {
    ssr: false,
  }
);

export default function BookPage() {
  useEffect(() => {
    // Load HubSpot Meetings Embed Script
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollRevealComponent />
      {/* ===== Hero Start ===== */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-5 xl:pb-5 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="animate_left max-w-3xl mx-auto">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                Thank You!
              </h1>
              <p className="text-lg text-waterloolight dark:text-waterloo mb-10 max-w-2xl mx-auto">
                Please book a suitable time for your consultation meeting in
                this calendar. You'll receive an invite with a Zoom meeting
                link.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Hero End ===== */}

      {/* ===== Meeting Room Start ===== */}
      <section id="booknow" className="py-5 lg:py-5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 py-10 xl:py-10 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <img
            src="/newimages/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <img
            src="/newimages/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />

          <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-8 lg:mb-8 px-4 md:px-0">
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3">
              Book Your Meeting{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 mb-8">
            {/* Start of Meetings Embed Container */}
            <div
              className="meetings-iframe-container"
              data-src="https://meetings-eu1.hubspot.com/rawzaba?embed=true"
            ></div>
            {/* End of Meetings Embed Container */}
          </div>
        </div>
      </section>
      {/* ===== Meeting Room End ===== */}
    </main>
  );
}
