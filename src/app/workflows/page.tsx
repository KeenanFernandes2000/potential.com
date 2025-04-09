"use client";
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

// Workflow items data
const workflowItems = [
  {
    title: "Product Marketing Generator",
    description:
      "Add your product/service and generate marketing material in minutes.",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Business Idea Generator",
    description:
      "Turn your passion into a profitable business idea in minutes.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "CSR Plan Generator",
    description:
      "Add your company's focus areas and let AI suggests the most impactful CSR Program.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Press Release Generator",
    description:
      "Generate impactful press releases with AI-powered language generation.",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
  {
    title: "Article Generator",
    description: "Generate articles on any topic with AI assistance.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Skin Expert",
    description: "Get personalized skin care advice and recommendations.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Business Plan Generator",
    description:
      "Create comprehensive business plans with AI-powered insights.",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Fitness Planner",
    description:
      "Get personalized Fitness and diet plans tailored to your body and goals.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Career Choice AI Tool",
    description:
      "Discover career paths aligned with your passions, strengths, and values.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Job Description Generator",
    description:
      "Create professional and effective job descriptions in minutes.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Financial Planning Tool",
    description: "I'm here to help you plan your finances.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Course/Lesson Planner",
    description: "Create a complete Course material for any topic in minutes.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

// Client logos data
const clientLogos = [
  "AIRBUS-logo.png",
  "cartier-logo.png",
  "intel-logo.png",
  "hsbc-logo.png",
  "UN-logo.png",
  "DG-logo.png",
  "Nestle-logo.png",
  "pepsico-logo.png",
];

// WorkflowCard component
const WorkflowCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-4 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative z-10">
        <div className="mb-3 flex justify-center">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={icon}
              />
            </svg>
          </div>
        </div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Workflows() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollRevealComponent />
      {/* <!-- ===== Hero Start ===== --> */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="animate_left max-w-3xl mx-auto">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                AI Workflows <br />
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Automate, Optimize, and Scale with AI
                </span>
              </h1>
              <p className="text-lg text-waterloolight dark:text-waterloo mb-10 max-w-2xl mx-auto">
                Boost efficiency, save time, and enhance productivity with AI
                workflows. Automate repetitive tasks, optimize decision-making,
                and integrate AI seamlessly into your business operations—all
                with zero coding required.
              </p>

              <div className="flex justify-center mt-10">
                <a
                  href="/talk-to-vera"
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
      {/* <!-- ===== Hero End ===== --> */}

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
              AI & Automation – The Future is Now
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                80%
              </h3>
              <p className="text-lg lg:text-para2">Increase in productivity</p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                87%
              </h3>
              <p className="text-lg lg:text-para2">
                Businesses use AI to gain a competitive advantage
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                47%
              </h3>
              <p className="text-lg lg:text-para2">
                Companies hiring AI Agents
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}

      {/* <!-- ===== AI chatbots business Start ===== --> */}
      <section id="aichatbotsbusiness" className="relative mx-auto p-4">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-primary/30 to-transparent blur-[120px]"></div>
          <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/30 to-transparent blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-8 xl:px-0">
          {/* Header */}
          <div className="relative mx-auto text-center mb-16">
            <SectionTitle
              title="AI Workflows to Automate & Optimize Every Business Operation"
              description="Streamline tasks, boost efficiency, and scale seamlessly with AI-powered automation"
            />
          </div>

          {/* Main content area */}
          <div className="mt-12 relative flex flex-col lg:flex-row items-center gap-8">
            {/* Left side - Grid of options */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Automate Repetitive Tasks */}
                <div
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center active"
                  data-image="https://ai.potential.com/static/UI./newimages/use-case1.gif"
                  data-option="automation"
                >
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Automate Repetitive Tasks
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Eliminate manual processes and save valuable time.
                  </p>
                </div>

                {/* Enhance Decision-Making */}
                <div
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center"
                  data-image="https://ai.potential.com/static/UI./newimages/use-case2.gif"
                  data-option="decision-making"
                >
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Enhance Decision-Making
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Leverage AI-driven insights for smarter, data-backed
                    decisions.
                  </p>
                </div>

                {/* Seamless Integration */}
                <div
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center"
                  data-image="https://ai.potential.com/static/UI./newimages/use-case3.gif"
                  data-option="integration"
                >
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Seamless Integration
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Easily connect AI workflows with your existing tools.
                  </p>
                </div>

                {/* Scale Without Limits */}
                <div
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center"
                  data-image="https://ai.potential.com/static/UI./newimages/use-case4.gif"
                  data-option="scalability"
                >
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Scale Without Limits
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    AI workflows grow with your business, ensuring effortless
                    expansion.
                  </p>
                </div>

                {/* Multilingual Support */}
                <div
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center"
                  data-image="https://ai.potential.com/static/UI./newimages/use-case5.gif"
                  data-option="multilingual"
                >
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Multilingual Support
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Generate outputs in your preferred language for a global
                    reach.
                  </p>
                </div>

                {/* Enterprise Security */}
                <div
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center"
                  data-image="https://ai.potential.com/static/UI./newimages/use-case5.gif"
                  data-option="security"
                >
                  <div className="flex justify-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Enterprise-Grade Security
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Keep your data safe with built-in AI security protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image display */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center items-center h-full">
                <img
                  id="agent-image"
                  src="https://ai.potential.com/static/UI/images/use-case1.gif"
                  alt="AI Workflow Automation"
                  className="max-h-[600px] w-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== AI chatbots business End ===== */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Put Your AI Team to Work
              </h2>
              <p>
                Deploy AI workflows as 24/7 virtual employees to boost
                efficiency. Ready to discuss with Vera?
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
                  href="/talk-to-vera"
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

      {/* <!-- ===== Workflow Library Start ===== --> */}
      <div
        id="workflowlibrary"
        className="relative mx-auto max-w-screen-2xl p-4"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-b dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"></div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0 py-24">
          <div className="mx-auto text-center mb-16">
            <SectionTitle
              title="Explore Our Growing Library of Agentic AI Workflows"
              description="Get started with our collection of pre-built teams of AI Agents ready to enhance your workflows."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {workflowItems.map((item, index) => (
              <WorkflowCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ===== Workflow Library End ===== --> */}

      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11 mt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
            {clientLogos.map((logo, index) => (
              <a
                key={index}
                className="animate_top block w-full max-w-[128px] mx-auto"
              >
                <Image
                  className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                  src={`/newimages/${logo}`}
                  alt="Client Logo"
                  width={128}
                  height={64}
                />
                <Image
                  className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                  src={`/newimages/${logo}`}
                  alt="Client Logo"
                  width={128}
                  height={64}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Boost Efficiency with AI Workflows
              </h2>
              <p>
                Start automating tasks and optimizing workflows today—no coding
                required! Talk to vera to get started.
              </p>
            </div>
            <div className="animate_right lg:w-[50%]">
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  src="/newimages/vera-avatar.png"
                  alt="Vera"
                  width={347}
                  height={340}
                  className="hidden xl:block"
                />
                <a
                  href="/talk-to-vera"
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
