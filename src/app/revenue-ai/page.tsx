"use client";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import dynamic from "next/dynamic";

const ScrollRevealComponent = dynamic(
  () => import("@/components/scrollReveal"),
  {
    ssr: false,
  }
);

export default function RevenueAI() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollRevealComponent />
      {/* ===== Hero Start ===== */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="animate_left max-w-3xl mx-auto">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                AI Agents for Revenue Acceleration <br />
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Boost sales and marketing performance with specialized AI
                  agents.
                </span>
              </h1>
              <p className="text-lg text-waterloolight dark:text-waterloo mb-10 max-w-2xl mx-auto">
                Accelerate revenue growth with AI-powered automation. Our
                Revenue AI agents handle lead generation, personalized outreach,
                and sales automation—seamlessly integrating into your workflow
                to deliver measurable ROI from day one.
              </p>

              <div className="flex justify-center mt-10">
                <a
                  href="<?php echo home_url('/talk-to-vera'); ?>"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500 talktoverabtn"
                >
                  Talk to Vera
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    className=""
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Hero End ===== */}

      {/* ===== Funfact Start ===== */}
      <section className="lg:py-22.5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <img
            src="/newimages/shape-04.svg"
            alt="Man"
            className="absolute -top-25 -left-15 lg:left-0 -z-1 hidden md:block"
          />
          <img
            src="/newimages/shape-05.svg"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />
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

          <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
              The Future is AI-Driven
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                50%
              </h3>
              <p className="text-lg lg:text-para2">
                Higher lead conversions with AI
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                72%
              </h3>
              <p className="text-lg lg:text-para2">
                AI-driven personalization boosts engagement
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                40%
              </h3>
              <p className="text-lg lg:text-para2">AI speeds up deal closing</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Funfact End ===== */}

      {/* ===== Features Start ===== */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionTitle
            title="Faster Sales, Higher Conversions"
            description="Utilize AI Agents to automate lead generation, sales follow-ups, and marketing campaigns to maximize revenue growth. "
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <img src="/newimages/icon-01.svg" alt="Icon" />
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Actionable Insights
              </h3>
              <p>
                Convert website visitors and calls into qualified leads
                automatically and instantly.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <img src="/newimages/icon-02.svg" alt="Icon" />
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Impactful CSR
              </h3>
              <p>
                Enhance your community initiatives with AI-driven strategies for
                maximum positive impact.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <img src="/newimages/icon-04.svg" alt="Icon" />
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Marketing ROI Maximization
              </h3>
              <p>
                Personalize and automate campaigns at scale, maximizing
                marketing efficiency and ROI.
              </p>
            </div>
            {/* Features item End */}
          </div>
        </div>
      </section>
      {/* ===== Features End ===== */}

      {/* ===== CTA Start ===== */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Turn Visitors into Customers Instantly
              </h2>
              <p>
                Automate customer support, lead qualification and engagement
                with AI Agents. Ready to discuss with Vera?
              </p>
            </div>
            <div className="animate_right lg:w-[50%]">
              <div className="flex items-center justify-end xl:justify-between">
                <img
                  src="/newimages/vera-avatar.png"
                  alt="Vera"
                  className="hidden xl:block w-[347px] h-[340px]"
                />
                <a
                  href="/talk-to-vera"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500 talktoverabtn"
                >
                  Turn Visitors into Customers Instantly
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    className=""
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== CTA End ===== */}

      {/* ===== Tool Showcase Start ===== */}
      <section className="py-20 lg:py-25 xl:py-30 overflow-hidden">
        <div className="mx-auto max-w-c-1390 relative px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <div className="animate_top text-center">
              <SectionTitle
                title="Sample AI Agents Boosting Your Revenue"
                description="Get started with our collection of AI Agents ready to enhance your sales and marketing."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12.5 xl:mt-17.5">
            {/* Customer Service AI Chatbot */}
            <a
              href="/chatbots"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#9B1FE8]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Customer Service AI Chatbot
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Instantly respond to visitor inquiries, improving engagement.
                </p>
              </div>
            </a>

            {/* AI Voice Agent  */}
            <a
              href="/voiceagents"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#00B3B3]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  AI Voice Agent
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Handle calls, guide customers, and upsell with natural AI
                  voice.
                </p>
              </div>
            </a>

            {/* AI Sales Coach  */}
            <a
              href="https://ai.potential.com/chat/64b7b59c2d7b52ec97f3a258"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#4ADE80]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  AI Sales Coach
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Train sales teams on products, processes, and objection
                  handling.
                </p>
              </div>
            </a>

            {/* Lead Generation AI Agent */}
            <a
              href="/chatbots"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#F472B6]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Lead Generation AI Agent
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Automatically identify, qualify, and nurture high-value leads.
                </p>
              </div>
            </a>

            {/* Product Marketing Generator */}
            <a
              href="https://ai.potential.com/agent/product-marketing"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FF6B00]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Product Marketing Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add your product/service and generate marketing material in
                  minutes.
                </p>
              </div>
            </a>

            {/* Article Generator */}
            <a
              href="https://ai.potential.com/agent/article-generator"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0EA5E9]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Article Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate articles on any topic with AI assistance.
                </p>
              </div>
            </a>

            {/* Presentation Tool  */}
            <a
              href="https://ai.potential.com/tools/presentation-generation"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#9B1FE8]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Presentation Tool
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create engaging presentations for your business in minutes.
                </p>
              </div>
            </a>

            {/* Press Release Generator */}
            <a
              href="https://ai.potential.com/tools/aipressreleasetool"
              target="_blank"
              className="animate_top group relative rounded-lg p-4 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark bg-white dark:bg-blacksection border border-stroke dark:border-strokedark flex items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#7C3AED]">
                  <svg
                    className="fill-white"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Press Release Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Generate impactful press releases with AI-powered language
                  generation.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* ===== Tool Showcase End ===== */}

      {/* ===== Trusted by Start ===== */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="animate_top text-center text-black dark:text-white text-3xl font-bold mb-10">
            Trusted By
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/AIRBUS-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/AIRBUS-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/cartier-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/cartier-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/intel-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/intel-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/hsbc-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/hsbc-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/UN-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/UN-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/DG-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/DG-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/Nestle-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/Nestle-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="/newimages/pepsico-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="/newimages/pepsico-logo.png"
                alt="Clients"
              />
            </a>
          </div>
        </div>
      </section>
      {/* ===== Trusted by End ===== */}

      {/* ===== CTA Start ===== */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Close More Deals, Faster
              </h2>
              <p>
                Close More Deals, Faster Shorten sales cycles with AI-powered
                automation. Let's build your AI team!
              </p>
            </div>
            <div className="animate_right lg:w-[50%]">
              <div className="flex items-center justify-end xl:justify-between">
                <img
                  src="/newimages/vera-avatar.png"
                  alt="Vera"
                  className="hidden xl:block w-[347px] h-[340px]"
                />
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500 talktoverabtn"
                >
                  Talk to Vera
                  <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    className=""
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== CTA End ===== */}
    </main>
  );
}
