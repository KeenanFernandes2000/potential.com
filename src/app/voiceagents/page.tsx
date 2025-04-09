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

export default function VoiceAgents() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ScrollRevealComponent />
      {/* <!-- ===== Hero Start ===== --> */}
      <div className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 md:mt-0 flex justify-center px-4 sm:mt-12 sm:px-6 lg:mt-20 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
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
                  <span className="relative">AI Voice Agents</span>
                </span>
              </div>
              <div className="mt-2">Smarter, Faster, AI-Powered Calls</div>
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600 dark:text-gray-300 sm:mt-5 md:mt-5">
              Enhance your customer support and call operations with AI Voice
              Agents—human-like voice assistants that handle calls, answer
              questions, and automate your support efficiently.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
              <div>
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
      </div>
      {/* <!-- ===== Hero End ===== --> */}

      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <Image
            src="/newimages/shape-04.svg"
            alt="Man"
            width={200}
            height={200}
            className="absolute hidden md:block -top-25 -left-15 lg:left-0 -z-1"
          />
          <Image
            src="/newimages/shape-05.svg"
            alt="Doodle"
            width={200}
            height={200}
            className="absolute bottom-0 right-0 -z-1"
          />
          <Image
            src="/newimages/shape-dotted-light-02.svg"
            alt="Dotted"
            width={200}
            height={200}
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <Image
            src="/newimages/shape-dotted-dark-02.svg"
            alt="Dotted"
            width={200}
            height={200}
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />

          <div className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0">
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
              The Future is Calling-Will Your AI Voice Agents Answer?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                60%
              </h3>
              <p className="text-lg lg:text-para2">
                Decrease in operational costs
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                21%
              </h3>
              <p className="text-lg lg:text-para2">
                Increase in sales conversions
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                40+
              </h3>
              <p className="text-lg lg:text-para2">Apps integrated</p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                100+
              </h3>
              <p className="text-lg lg:text-para2">Languages supported</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}

      {/* <!-- ===== AI chatbots business Start ===== --> */}
      <div id="aichatbotsbusiness" className="relative mx-auto p-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-primary/30 to-transparent blur-[120px]"></div>
          <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/30 to-transparent blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-8 xl:px-0">
          <div className="relative mx-auto text-center mb-16">
            <SectionTitle
              title="AI Voice Agents for Every Business Need"
              description="Designed for every call operation—AI Voice Agents handle diverse business needs."
            />
          </div>

          <div className="mt-12 relative flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Customer Service */}
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center">
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
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Customer Service
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Voice Agents that handle inquiries, resolve issues, and
                    provide instant support.
                  </p>
                </div>

                {/* Lead Qualification */}
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center">
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
                    Lead Qualification
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Voice Agents that filter and qualifies leads for faster
                    conversions.
                  </p>
                </div>

                {/* Appointment Booking */}
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Appointment Booking
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Voice Agents that schedule and manage bookings seamlessly.
                  </p>
                </div>

                {/* Receptionist */}
                <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 text-center">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Receptionist
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Voice Agents that greet callers and direct them efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex justify-center items-center h-full">
                <Image
                  id="agent-image"
                  src="https://ai.potential.com/static/UI/images/use-case1.gif"
                  alt="AI Voice Agent"
                  width={600}
                  height={600}
                  className="max-h-[600px] w-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== AI chatbots business End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Ready to Save 60% on Call Costs?
              </h2>
              <p>
                Automate your customer support calls with these AI Voice
                Assistants. Talk to Vera to know more!
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

      {/* <!-- ===== Shaped to Meet Your Needs Start ===== --> */}
      <div id="ShapedtoMeetYourNeeds" className="relative lg:px-10">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="mx-auto text-center mb-16">
            {/* <!-- Section Title Start --> */}
            <SectionTitle
              title="Shaped to Meet Your Needs"
              description="Enhance your call operations with Potential.com AI Voice Agents."
            />
            {/* <!-- Section Title End --> */}
          </div>

          <div className="mt-12 md:mt-16">
            <div className="relative grid rounded-3xl border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2">
              <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
                <div
                  aria-hidden="true"
                  className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl"
                >
                  <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"></div>
                  <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
                </div>
              </div>
              {/* <!-- Image Section --> */}
              <div className="order-1 lg:order-2">
                <div className="relative flex h-full flex-col items-center justify-center gap-6 md:py-12 lg:py-8">
                  <img
                    className="mb-12 md:mb-0"
                    src="https://ai.potential.com/static/UI/images/Benefits.gif"
                    alt="Chatbot In Action"
                    width="512"
                    height="512"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* <!-- Content Section --> */}
              <div className="order-2 lg:order-1 relative grid overflow-hidden rounded-[1.25rem] bg-gray-100 p-1 dark:bg-gray-800/50 sm:grid-cols-2">
                <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-blackho dark:hover:shadow-2xl">
                  <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      24/7 Call Handling & Support
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      AI Voice Agents manage calls anytime, reducing wait times
                      and improving response efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-blackho dark:hover:shadow-2xl">
                  <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Customizable, Multilingual & AI-Trained
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Easily train AI Voice Agents for your business needs and
                      support customers in multiple languages.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-blackho dark:hover:shadow-2xl">
                  <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Seamless System Integration
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Connect effortlessly with CRMs, IVRs, helpdesks, and other
                      tools for smooth workflows.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-blackho dark:hover:shadow-2xl">
                  <div className="flex h-10 w-10 rounded border border-gray-200 dark:border-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="m-auto h-6 w-6 text-gray-700 dark:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Cost-Effective & Scalable
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Reduce costs, handle high call volumes, and scale
                      effortlessly with AI-driven automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== Shaped to Meet Your Needs End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                AI-Powered Calls, Human-Like Conversations
              </h2>
              <p>
                Deliver personalized, seamless voice interactions that feel
                natural and engaging. Talk to Vera to know more!
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

      {/* <!-- ===== Build Your Chatbot Start ===== --> */}
      <section
        id="buildyourchatbot"
        className="relative mx-auto max-w-screen-2xl p-4 mt-8"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-b dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"></div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0 py-24">
          {/* Header */}
          <div className="mx-auto text-center mb-16">
            {/* Section Title Start */}
            <SectionTitle
              title="Get Your AI Voice Agents Live in Days"
              description="Launch your AI-powered voice automation—fast, seamless, and fully supported."
            />
            {/* Section Title End */}
          </div>

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-14 max-w-5xl mx-auto">
            {/* Step 01 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork1.png"
                      alt="Demo AI Voice Agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Demo
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    01
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  Book a live demo with our team and see the AI Voice Agents in
                  action
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork2.png"
                      alt="Build AI Voice Agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Build
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    02
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  Our experts customize and train AI Voice Agents to fit your
                  business needs
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork3.png"
                      alt="Test AI Voice Agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Test
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    03
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  Run real-time tests to refine responses and ensure smooth call
                  handling
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/4">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork4.png"
                      alt="Deploy AI Voice Agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Deploy
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    04
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  We assist with seamless integration into your systems and
                  tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Build Your Chatbot End ===== --> */}

      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11 mt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
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

      {/* <!-- ===== Final CTA Start ===== --> */}
      <section className="py-20 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Cut costs, save time, and scale your support effortlessly.
              </h2>
              <p>
                Talk to Vera, your 24/7 AI Consultant to guide you on the best
                AI Solutions to empower your business!
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
      {/* <!-- ===== Final CTA End ===== --> */}
    </main>
  );
}
