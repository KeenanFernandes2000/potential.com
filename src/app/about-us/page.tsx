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

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <ScrollRevealComponent />

      {/* ===== Hero Start ===== */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5 text-center lg:text-left">
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

              <div className="mt-10 flex justify-center lg:justify-start">
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
              <div className="relative 2xl:-mr-7.5 flex justify-center">
                <img
                  className="rounded-lg w-3/4"
                  src="/newimages/veraHero.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Hero End ===== */}

      {/* ===== Mission & Vision Start ===== */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row md:items-center gap-8 text-center md:text-left">
            {/* Logo Section (1/3) */}
            <div className="md:w-1/3 animate_left flex justify-center md:justify-start">
              <div className="bg-purple-700 p-8 rounded-lg flex items-center justify-center">
                <img
                  src="/newimages/Potential.com Logo Square.png"
                  alt="Potential Logo"
                  className="w-3/4 md:w-full max-w-xs rounded-2xl"
                />
              </div>
            </div>

            {/* Text Section (2/3) */}
            <div className="md:w-2/3 animate_right">
              <div className="space-y-12">
                {/* Mission Section */}
                <div>
                  <h2 className="text-black dark:text-white text-3xl font-bold mb-5">
                    Our Mission
                  </h2>
                  <p className="text-lg">
                    To empower and enable businesses with the right AI Agents to
                    unlock their full potential, drive innovation, and achieve
                    sustainable success.
                  </p>
                </div>

                {/* Vision Section */}
                <div>
                  <h2 className="text-black dark:text-white text-3xl font-bold mb-5">
                    Our Vision
                  </h2>
                  <p className="text-lg">
                    A world where businesses of all sizes leverage AI
                    seamlessly, unlocking limitless opportunities for growth,
                    efficiency, and strategic decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Mission & Vision End ===== */}

      {/* ===== Funfact Start ===== */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
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
      {/* ===== Funfact End ===== */}

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

      {/* ===== Our Story Start ===== */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top text-center mb-10">
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
              Our Story
            </h2>
          </div>

          {/* Timeline Section */}
          <div className="animate_top mx-auto max-w-c-1235 rounded-lg mb-15">
            <div className="relative">
              {/* Timeline Image */}
              <div className="flex justify-center">
                <img
                  src="/newimages/Potential story-04.png"
                  alt="Potential.com Timeline"
                  className="w-full max-w-5xl dark:opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="animate_top mx-auto max-w-c-1235 text-center">
            <p className="text-lg mb-8">
              Founded in 2005, Potential.com started as a coaching and training
              consultancy, helping global organizations maximize performance and
              achieve business excellence. As technology evolved,
              <span className="font-bold">so did we.</span>
            </p>

            <p className="text-lg mb-8">
              We recognized that businesses needed more than just training—they
              needed scalable digital solutions to drive real-world impact.
            </p>

            <p className="text-lg font-bold mb-8">So did we.</p>

            <p className="text-lg mb-8">
              This realization led us to create a unique Empowerment &
              Innovation Platform, enabling government entities, multinational
              corporations, and large enterprises to launch large-scale programs
              that empower and uplift communities. This became a milestone in
              our journey, solidifying our role as a leader in large scale
              empowerment.
            </p>

            <p className="text-lg mb-8">
              As AI advanced,
              <span className="font-bold">we evolved again</span>—integrating AI
              Agents, AI Workflows, and automation tools into our comprehensive
              platform, designed to empower businesses with ready-to-use AI
              solutions. These tools enable companies to scale faster, reduce
              costs, and drive innovation, ensuring they stay ahead in an
              increasingly competitive landscape.
            </p>
          </div>
        </div>
      </section>
      {/* ===== Our Story End ===== */}

      {/* ===== CTA Start ===== */}
      <section className="pb-20 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0 text-center md:text-left justify-center">
            <div className="animate_left md:w-[70%] lg:w-1/2 mx-auto md:mx-0">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-full md:w-11/12">
                Meet Vera: Your 24/7 AI Business Consultant!
              </h2>
              <p>
                Vera is your smartest business ally! She answers your questions,
                understands your needs, and proposes the perfect AI Agents and
                solutions to scale your business.
              </p>
            </div>
            <div className="animate_right lg:w-[50%] flex justify-center md:justify-end">
              <div className="flex items-center justify-center md:justify-end xl:justify-between">
                <img
                  src="/newimages/shape-06.svg"
                  alt="Saly"
                  className="hidden xl:block"
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
      {/* ===== CTA End ===== */}
    </main>
  );
}
