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

export default function StrategicAI() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollRevealComponent />
      {/* ===== Hero Start ===== */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="animate_left max-w-3xl mx-auto">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                AI Agents for Strategic Growth <br />
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Empower your strategic decisions, investments, and community
                  impact with AI.
                </span>
              </h1>
              <p className="text-lg text-waterloolight dark:text-waterloo mb-10 max-w-2xl mx-auto">
                Leverage AI-driven insights to refine leadership strategies,
                optimize investments, and enhance corporate impact. Our
                Strategic AI agents provide real-time analytics, predictive
                decision-making, and automated stakeholder engagement to drive
                long-term success.
              </p>

              <div className="flex justify-center mt-10">
                <a
                  href="#talktovera"
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
            src="./newimages/shape-04.svg"
            alt="Man"
            className="absolute -top-25 -left-15 lg:left-0 -z-1 hidden md:block"
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
              The Future is AI-Driven
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                73%
              </h3>
              <p className="text-lg lg:text-para2">
                AI is critical for long-term business strategy
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                40%
              </h3>
              <p className="text-lg lg:text-para2">
                AI improves investment decision accuracy
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                67%
              </h3>
              <p className="text-lg lg:text-para2">
                AI boosts CSR stakeholder engagement
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Funfact End ===== */}

      {/* ===== Features Start ===== */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <SectionTitle
              title="Smarter Decisions, Stronger Leadership"
              description="AI-driven insights and execution strategies to guide visionary leadership and sustainable growth."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <Image
                  src="/newimages/icon-01.svg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Actionable Insights
              </h3>
              <p>
                Instantly generate insights and strategic recommendations to
                guide leadership decisions.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <Image
                  src="/newimages/icon-04.svg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
                Performance Alignment
              </h3>
              <p>
                Align your organization around clear objectives and KPIs,
                ensuring effective execution and accountability.
              </p>
            </div>
            {/* Features item End */}

            {/* Features item Start */}
            <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection">
              <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16">
                <Image
                  src="/newimages/icon-06.svg"
                  alt="Icon"
                  width={32}
                  height={32}
                />
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
                Empower Smarter Decision-Making
              </h2>
              <p>
                Harness AI-driven insights to guide strategy with confidence.
                Ready to discuss with Vera?
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
      {/* ===== CTA End ===== */}

      {/* ===== Tool Showcase Start ===== */}
      <section className="py-20 lg:py-25 xl:py-30 overflow-hidden">
        <div className="mx-auto max-w-c-1390 relative px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <div className="animate_top text-center">
              <div>
                <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 mx-auto mb-4">
                  Explore Our Growing Library of Agentic AI Workflows
                </h2>
                <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
                  Get started with our collection of pre-built teams of AI
                  Agents ready to enhance your workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto gap-4 sm:gap-6 lg:gap-8 mt-12.5 xl:mt-17.5">
            {/* CSR Plan Generator */}
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

            {/* Business Idea Generator */}
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

            {/* Business Plan Generator */}
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
      {/* <!-- ===== Tool Showcase End ===== --> */}

      {/* ===== Trusted by Start ===== */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="animate_top text-center text-black dark:text-white text-3xl font-bold mb-10">
            Trusted By
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 justify-center items-center">
            {[
              "AIRBUS-logo.png",
              "cartier-logo.png",
              "intel-logo.png",
              "hsbc-logo.png",
              "UN-logo.png",
              "DG-logo.png",
              "Nestle-logo.png",
              "pepsico-logo.png",
            ].map((logo, index) => (
              <a
                key={index}
                className="animate_top block w-full max-w-[128px] mx-auto"
              >
                <Image
                  className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden w-full h-auto"
                  src={`/newimages/${logo}`}
                  alt="Clients"
                  width={128}
                  height={64}
                />
                <Image
                  className="hidden brightness-75 contrast-200 grayscale opacity-50 transition-all duration-300 hover:opacity-100 dark:block dark:invert w-full h-auto"
                  src={`/newimages/${logo}`}
                  alt="Clients"
                  width={128}
                  height={64}
                />
              </a>
            ))}
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
                AI for Meaningful Social Impact
              </h2>
              <p>
                Leverage AI to plan, launch, optimize and scale your CSR
                initiatives! Talk to vera to get started.
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
      {/* ===== CTA End ===== */}
    </main>
  );
}
