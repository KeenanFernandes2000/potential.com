"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import SectionTitle from "@/components/SectionTitle";
import FeaturesTab from "@/components/FeaturesTab";
import dynamic from "next/dynamic";

const ScrollRevealComponent = dynamic(
  () => import("@/components/scrollReveal"),
  {
    ssr: false,
  }
);

export default function Home() {
  const features = [
    {
      id: "feature1",
      number: "01",
      title: "Simple Setup",
      heading: "Get Started in Minutes",
      description: [
        "Get your AI agent customized and trained on your data in minutes or hours—not months.",
        "Our streamlined setup process gets you up and running quickly with minimal technical overhead.",
      ],
      image: {
        light:
          "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/Step1-1.png",
        dark: "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/Step1-1.png",
      },
    },
    {
      id: "feature2",
      number: "02",
      title: "Instant Results",
      heading: "See Value from Day One",
      description: [
        "Immediately start converting website visitors into sales or reducing customer service costs from day one.",
        "Track real-time metrics as your AI agent delivers measurable business impact right from launch.",
      ],
      image: {
        light:
          "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/step-2.png",
        dark: "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/step-2.png",
      },
    },
    {
      id: "feature3",
      number: "03",
      title: "AI Adoption Support",
      heading: "Expert Guidance Every Step",
      description: [
        "Our expert team provides personalized guidance, hand-holding your organization throughout your AI adoption journey.",
        "Get dedicated support to ensure successful implementation and ongoing optimization of your AI solution.",
      ],
      image: {
        light:
          "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/step3.png",
        dark: "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/step3.png",
      },
    },
  ];

  const agentic = [
    {
      id: "agentic1",
      number: "01",
      title: "Simple Setup",
      heading: "AI Agents to Boost Revenue",
      description: [
        "Leverage AI Agents to generate leads, personalize customer interactions, and close deals faster.",
        "Businesses using AI for sales see a 50% increase in leads and appointments.",
      ],
      image: {
        light:
          "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/sales.png",
        dark: "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/sales.png",
      },
    },
    {
      id: "agentic2",
      number: "02",
      title: "Instant Results",
      heading: "AI Agents to Cut Costs",
      description: [
        "Optimize efficiency with AI-driven automation that reduces errors, streamlines workflows, and saves costs.",
        "AI in operations can cut business expenses by more than 30%.",
      ],
      image: {
        light:
          "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/operation.png",
        dark: "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/operation.png",
      },
    },
    {
      id: "agentic3",
      number: "03",
      title: "AI Adoption Support",
      heading: "AI Agents for Smarter Strategies",
      description: [
        "AI Agents empower leaders with data-driven insights for strategy, CSR, and entrepreneurship.",
        "70% of executives believe AI gives them a competitive edge in decision-making.",
      ],
      image: {
        light:
          "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/leadership.png",
        dark: "https://takeabreath.goumbook.com/wp-content/uploads/2025/04/leadership.png",
      },
    },
  ];

  return (
    <main className="min-h-screen">
      <ScrollRevealComponent />
      {/* <!-- ===== Hero Start ===== --> */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="animate_left md:w-1/2">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                Expand Your Human Team with
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Specialized AI Agents
                </span>
              </h1>
              <p>
                Rapidly deploy powerful AI team members who seamlessly integrate
                with your existing systems—backed by dedicated support to ensure
                instant ROI.
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
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
            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <img
                  src="./newimages/shape-01.png"
                  alt="shape"
                  className="absolute -left-11.5 top-0"
                />
                <img
                  src="./newimages/shape-02.svg"
                  alt="shape"
                  className="absolute right-0 bottom-0"
                />
                <img
                  src="./newimages/shape-03.svg"
                  alt="shape"
                  className="absolute -right-6.5 bottom-0"
                />
                <div>
                  <img
                    className="dark:hidden shadow-solid-l rounded-lg"
                    src="./newimages/Hero.png"
                    alt="Hero"
                  />
                  <img
                    className="hidden dark:block shadow-solid-l rounded-lg"
                    src="./newimages/Hero.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Hero End ===== --> */}

      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/AIRBUS-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/AIRBUS-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/cartier-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/cartier-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/intel-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/intel-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/hsbc-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/hsbc-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/UN-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/UN-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/DG-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/DG-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/Nestle-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/Nestle-logo.png"
                alt="Clients"
              />
            </a>
            <a className="animate_top block w-full max-w-[128px] mx-auto">
              <img
                className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                src="./newimages/pepsico-logo.png"
                alt="Clients"
              />
              <img
                className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                src="./newimages/pepsico-logo.png"
                alt="Clients"
              />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}

      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionTitle
            title="Why Businesses Choose Our AI Agents"
            description="Deploy quickly. Scale easily. Empower instantly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* <!-- Features item Start --> */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Instant Productivity
              </h3>
              <p>
                Rapid deployment ensures immediate ROI with AI agents trained
                and ready to work in hours, not months.
              </p>
            </div>
            {/* <!-- Features item End -->

            <!-- Features item Start --> */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Seamless Integration
              </h3>
              <p>
                Bolt-on AI agents easily connect to your existing systems and
                APIs—no complex replacements needed.
              </p>
            </div>
            {/* <!-- Features item End -->

            <!-- Features item Start --> */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Fully Supported Setup
              </h3>
              <p>
                No DIY headaches. Enjoy personalized support from our dedicated
                team from setup to ongoing optimization.
              </p>
            </div>
            {/* <!-- Features item End -->

            <!-- Features item Start --> */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Modular & Scalable
              </h3>
              <p>
                Start small and grow flexibly. Our modular pricing aligns with
                your business needs and complexity.
              </p>
            </div>
            {/* <!-- Features item End -->

            <!-- Features item Start --> */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2551 20.3766 17.7642 20.3766 18.295C20.3766 18.8258 20.1656 19.3349 19.79 19.71C19.4149 20.0856 18.9058 20.2966 18.375 20.2966C17.8442 20.2966 17.3351 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0642 20.2327 9.63587 19.6339 9 19.4C8.38291 19.1277 7.66219 19.2583 7.18 19.73L7.12 19.79C6.74486 20.1656 6.23582 20.3766 5.705 20.3766C5.17418 20.3766 4.66514 20.1656 4.29 19.79C3.91445 19.4149 3.70343 18.9058 3.70343 18.375C3.70343 17.8442 3.91445 17.3351 4.29 16.96L4.35 16.9C4.82167 16.4178 4.95231 15.6971 4.68 15.08C4.42093 14.4755 3.82764 14.0826 3.17 14.08H3C1.89543 14.08 1 13.1846 1 12.08C1 10.9754 1.89543 10.08 3 10.08H3.09C3.76733 10.0642 4.36613 9.63587 4.6 9C4.87231 8.38291 4.74167 7.66219 4.27 7.18L4.21 7.12C3.83445 6.74486 3.62343 6.23582 3.62343 5.705C3.62343 5.17418 3.83445 4.66514 4.21 4.29C4.58514 3.91445 5.09418 3.70343 5.625 3.70343C6.15582 3.70343 6.66486 3.91445 7.04 4.29L7.1 4.35C7.58219 4.82167 8.30291 4.95231 8.92 4.68H9C9.60447 4.42093 9.99738 3.82764 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.74764 14.3955 4.34093 15 4.6C15.6171 4.87231 16.3378 4.74167 16.82 4.27L16.88 4.21C17.2551 3.83445 17.7642 3.62343 18.295 3.62343C18.8258 3.62343 19.3349 3.83445 19.71 4.21C20.0856 4.58514 20.2966 5.09418 20.2966 5.625C20.2966 6.15582 20.0856 6.66486 19.71 7.04L19.65 7.1C19.1783 7.58219 19.0477 8.30291 19.32 8.92V9C19.5791 9.60447 20.1724 9.99738 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2524 14.0026 19.6591 14.3955 19.4 15Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Pre-built Expertise
              </h3>
              <p>
                Over 100 ready-to-use agent templates in Leadership, Sales, and
                Operations—customize easily or use immediately.
              </p>
            </div>
            {/* <!-- Features item End -->

            <!-- Features item Start --> */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                20 Years of Empowerment
              </h3>
              <p>
                Leverage our two decades of experience empowering millions, now
                augmented by cutting-edge AI capabilities.
              </p>
            </div>
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}

      {/* <!-- ===== Tool Showcase Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1390 relative px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <SectionTitle
              title="Explore Our Growing Library of Agentic AI Workflows"
              description="Get started with our collection of pre-built teams of AI Agents ready to enhance your workflows."
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12.5 xl:mt-17.5">
            {/* <!-- Product Marketing Generator --> */}
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
                  Generate AI-powered marketing content from your website URL -
                  social posts, video scripts and more.
                </p>
              </div>
            </a>

            {/* <!-- Business Idea Generator --> */}
            <a
              href="https://ai.potential.com/tools/businessidea"
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
                  Business Idea Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Turn your passion into a profitable business idea in minutes.
                </p>
              </div>
            </a>

            {/* <!-- CSR Plan Generator --> */}
            <a
              href="https://ai.potential.com/tools/csrgenerator"
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  CSR Plan Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Add your company's focus areas and let AI suggest the most
                  impactful CSR Program.
                </p>
              </div>
            </a>

            {/* <!-- Press Release Generator --> */}
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

            {/* <!-- Article Generator --> */}
            <a
              href="https://ai.potential.com/agent/article-generator"
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

            {/* <!-- Skin Expert --> */}
            <a
              href="https://ai.potential.com/agent/skinexpert/"
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
                  Skin Expert
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get personalized skin care advice and recommendations.
                </p>
              </div>
            </a>

            {/* <!-- Business Plan Generator --> */}
            <a
              href="https://ai.potential.com/tools/businessplan"
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
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm3-4H7v-2h8v2zm0-4H7V7h8v2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Business Plan Generator
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create comprehensive business plans with AI-powered insights.
                </p>
              </div>
            </a>

            {/* <!-- Fitness Planner --> */}
            <a
              href="https://ai.potential.com/agent/fitnessplanner/"
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
                    <path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Fitness Planner
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get personalized fitness and diet plans tailored to your body
                  and goals.
                </p>
              </div>
            </a>
            {/* <!-- Career Choice AI Tool --> */}
            <a
              href="https://ai.potential.com/agent/career-path/"
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-base text-black dark:text-white">
                  Career Choice AI Tool
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get personalized career advice and recommendations.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Tool Showcase End ===== --> */}

      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          <SectionTitle
            title="Get Started with AI Agents"
            description="AI Agents are ready to enhance your workflows."
          />
        </div>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-12.5 xl:mt-17.5">
          <div className="flex items-center flex-col md:flex-row gap-8 lg:gap-32.5">
            <div className="animate_left md:w-1/2">
              <img
                src="./newimages/about-light-01.svg"
                alt="About"
                className="dark:hidden"
              />
              <img
                src="./newimages/about-light-01.svg"
                alt="About"
                className="hidden dark:block"
              />
            </div>
            <div className="animate_right md:w-1/2">
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Discover How AI Agents
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Power Your Business
                </span>
              </h2>
              <p>
                Quickly understand how our specialized AI agents integrate into
                your teams and boost productivity, revenue, and
                innovation—instantly.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Select Your Agent
                  </h5>
                  <p>
                    Choose from over 100 pre-trained AI agents designed
                    specifically for Leadership, Sales, and Operations
                    functions.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Customize & Integrate
                  </h5>
                  <p>
                    Rapidly personalize and bolt on your AI agents to seamlessly
                    interact with your existing systems and workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center flex-col-reverse md:flex-row gap-8 lg:gap-32.5">
            <div className="animate_left md:w-1/2">
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Measure Immediate Impact
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                  from Day One
                </span>
              </h2>
              <p>
                Monitor real-time performance as your AI agents deliver
                measurable ROI, streamline employee workflows, and free your
                team for strategic tasks.
              </p>

              <a
                href="<?php echo home_url('/talk-to-vera'); ?>"
                className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500 talktoverabtn mt-7.5"
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
            <div className="animate_right md:w-1/2">
              <img
                src="./newimages/about-light-02.svg"
                alt="About"
                className="dark:hidden"
              />
              <img
                src="./newimages/about-light-02.svg"
                alt="About"
                className="hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== Features Tab Start ===== --> */}
      <FeaturesTab
        tabs={features}
        instanceId="setup-features"
        showBackground={true}
      />
      {/* <!-- ===== Features Tab End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Meet Vera: Your 24/7 AI Business Consultant!
              </h2>
              <p>
                Vera is your smartest business ally! She answers your questions,
                understands your needs, and proposes the perfect AI Agents and
                solutions to scale your business.
              </p>
            </div>
            <div className="animate_right lg:w-[50%]">
              <div className="flex items-center justify-end xl:justify-between">
                <img
                  src="./newimages/vera-avatar.png"
                  alt="Vera"
                  className="hidden xl:block w-[347px] h-[340px]"
                />
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
      {/* <!-- ===== CTA End ===== --> */}

      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <img
            src="./newimages/shape-04.svg"
            alt="Man"
            className="absolute hidden md:block -top-25 -left-15 lg:left-0 -z-1"
          />
          <img
            src="./newimages/shape-05.svg"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />
          <img
            src="./newimages/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <img
            src="./newimages/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />

          <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
              Trusted by Innovators Worldwide
            </h2>
            <p className="lg:w-11/12 mx-auto">
              For over 20 years, Fortune 500 leaders and top government
              organizations have relied on Potential.com to empower their teams,
              communities, and stakeholders—globally.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Empowered stakeholders</p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                1B+
              </h3>
              <p className="text-lg lg:text-para2">AI Agent tasks</p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                20
              </h3>
              <p className="text-lg lg:text-para2">Years of Innovation</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}

      {/* <!-- ===== Agentic AI Solution Start ===== --> */}
      <section>
        <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <SectionTitle title="Our Agentic AI Solutions" />
          </div>
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-12.5 xl:mt-17.5">
            <div className="flex items-center flex-col md:flex-row gap-8 lg:gap-32.5">
              <div className="animate_left md:w-1/2">
                <img
                  src="https://takeabreath.goumbook.com/wp-content/uploads/2025/04/nocode.png"
                  alt="About"
                  className="dark:hidden"
                />
                <img
                  src="https://takeabreath.goumbook.com/wp-content/uploads/2025/04/nocode.png"
                  alt="About"
                  className="hidden dark:block"
                />
              </div>
              <div className="animate_right md:w-1/2">
                <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                  No-Code AI
                  <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                    Chatbots
                  </span>
                </h2>
                <p>
                  Transform your business with AI chatbot agents that boost
                  sales, cut costs, improve customer service, and operate 24/7.
                  Easily create, train, and deploy chatbots without coding to
                  unlock new levels of efficiency and growth.
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5"
                >
                  Learn More about AI Chatbots
                  <img
                    className="dark:hidden"
                    src="./newimages/icon-arrow-light.svg"
                    alt="Arrow"
                  />
                  <img
                    className="hidden dark:block"
                    src="./newimages/icon-arrow-dark.svg"
                    alt="Arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12 lg:pb-17 xl:pb-22 overflow-hidden">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
            <div className="flex items-center flex-col-reverse md:flex-row gap-8 lg:gap-32.5">
              <div className="animate_left md:w-1/2">
                <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                  AI Voice
                  <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1">
                    Agents
                  </span>
                </h2>
                <p>
                  Automate your customer support calls and decrease your
                  operational costs with AI Voice Agents - human-like voice
                  assistants that handle phone calls, automate support, and
                  enhance customer interactions.
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5"
                >
                  Learn More about AI Voice Agents
                  <img
                    className="dark:hidden"
                    src="./newimages/icon-arrow-light.svg"
                    alt="Arrow"
                  />
                  <img
                    className="hidden dark:block"
                    src="./newimages/icon-arrow-dark.svg"
                    alt="Arrow"
                  />
                </a>
              </div>
              <div className="animate_right md:w-1/2">
                <img
                  src="https://takeabreath.goumbook.com/wp-content/uploads/2025/04/Voice-agents.png"
                  alt="About"
                  className="dark:hidden"
                />
                <img
                  src="https://takeabreath.goumbook.com/wp-content/uploads/2025/04/Voice-agents.png"
                  alt="About"
                  className="hidden dark:block"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-12.5 xl:mt-17.5">
            <div className="flex items-center flex-col md:flex-row gap-8 lg:gap-32.5">
              <div className="animate_left md:w-1/2">
                <img
                  src="https://takeabreath.goumbook.com/wp-content/uploads/2025/04/workflow.png"
                  alt="About"
                  className="dark:hidden"
                />
                <img
                  src="https://takeabreath.goumbook.com/wp-content/uploads/2025/04/workflow.png"
                  alt="About"
                  className="hidden dark:block"
                />
              </div>
              <div className="animate_right md:w-1/2">
                <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                  AI
                  <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                    Workflows
                  </span>
                </h2>
                <p>
                  Supercharge your business with Agentic AI
                  Workflows—customizable AI-powered tools where specialized
                  agents collaborate to execute complex tasks seamlessly with
                  precision and efficiency.
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5"
                >
                  Learn More about AI Workflows
                  <img
                    className="dark:hidden"
                    src="./newimages/icon-arrow-light.svg"
                    alt="Arrow"
                  />
                  <img
                    className="hidden dark:block"
                    src="./newimages/icon-arrow-dark.svg"
                    alt="Arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <!-- ===== Agentic AI Solution Start ===== --> */}

      {/* <!-- ===== Features Tab Start ===== --> */}
      <FeaturesTab
        tabs={agentic}
        instanceId="agentic-features"
        showBackground={false}
      />
      {/* <!-- ===== Features Tab End ===== --> */}

      {/* <!-- ===== Integrations Start ===== --> */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionTitle
            title="An API based Agentic AI Solution Architecture"
            description="We will guide you through connecting AI agents to each other or to your existing systems through our API architecture to boost your team's productivity."
          />
        </div>

        <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0 relative z-50 mt-15 xl:mt-20">
          <div className="absolute -top-3/4 -z-1">
            <img
              src="./newimages/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <img
              src="./newimages/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-y-10 justify-around">
            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <img src="./newimages/brand-07.svg" alt="Brand" />
              </div>
            </div>

            <div className="animate_top w-1/6"></div>

            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <img src="./newimages/brand-08.svg" alt="Brand" />
              </div>
            </div>

            <div className="animate_top w-1/6">
              <div className="bg-[#FFDB26] rounded-full w-[11px] h-[11px]"></div>
            </div>

            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <img src="./newimages/brand-09.svg" alt="Brand" />
              </div>
            </div>

            <div className="animate_top w-1/6"></div>

            <div className="animate_top w-1/6">
              <div className="bg-[#62E888] rounded-full w-[15px] h-[15px]"></div>
            </div>

            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <img src="./newimages/brand-10.svg" alt="Brand" />
              </div>
            </div>

            <div className="animate_top w-1/6">
              <div className="bg-[#EF5C00] rounded-full w-[23px] h-[23px]"></div>
            </div>

            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <img src="./newimages/brand-11.svg" alt="Brand" />
              </div>
            </div>

            <div className="animate_top w-1/6">
              <div className="bg-[#016BFF] rounded-full w-[15px] h-[15px]"></div>
            </div>

            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] shadow-solid-7 bg-white dark:bg-btndark p-4.5">
                <img src="./newimages/brand-12.svg" alt="Brand" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Integrations End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Get Started with Vera - Your AI Growth Partner!
              </h2>
              <p>
                Chat or talk—Vera is available 24/7 to answer your questions,
                match you with the right AI Agents, and even book meetings with
                human experts when needed.
              </p>
            </div>
            <div className="animate_right lg:w-[50%]">
              <div className="flex items-center justify-end xl:justify-between">
                <img
                  src="./newimages/vera-avatar.png"
                  alt="Vera"
                  className="hidden xl:block w-[347px] h-[340px]"
                />
                <a
                  href="talk-to-vera.html"
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
      {/* <!-- ===== CTA End ===== --> */}
    </main>
  );
}
