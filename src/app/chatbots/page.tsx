"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import SectionTitle from "@/components/SectionTitle";
import dynamic from "next/dynamic";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const ScrollRevealComponent = dynamic(
  () => import("@/components/scrollReveal"),
  {
    ssr: false,
  }
);

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen">
      <ScrollRevealComponent />
      {/* <!-- ===== Hero Start ===== --> */}
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
        <div className="mx-auto mt-10 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="animate_left max-w-3xl mx-auto">
              <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                AI Chatbots
                <br />
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  Your Companion for Sales, Support & Growth
                </span>
              </h1>
              <p className="text-lg text-waterloolight dark:text-waterloo mb-10 max-w-2xl mx-auto">
                Transform the way you engage with customers, boost sales, and
                empower teams with our AI Chatbot. Designed for businesses of
                all sizes, it enhances customer service, automates tasks, and
                even acts as a coach—no coding required.
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
      {/* <!-- ===== Hero End ===== --> */}

      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="pb-20 lg:py-22.5 px-4 md:px-8 2xl:px-0">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                50%
              </h3>
              <p className="text-lg lg:text-para2">
                Reduction in support workload
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                3x
              </h3>
              <p className="text-lg lg:text-para2">Faster response time</p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                80%
              </h3>
              <p className="text-lg lg:text-para2">
                Increase in lead engagement and qualification
              </p>
            </div>
            <div className="animate_top text-center">
              <h3 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                24/7
              </h3>
              <p className="text-lg lg:text-para2">
                Availability for seamless interactions
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}

      {/* <!-- ===== AI Chatbots Business Start ===== --> */}
      <div id="aichatbotsbusiness" className="relative mx-auto p-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-primary/30 to-transparent blur-[120px]"></div>
          <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-600/30 to-transparent blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-8 xl:px-0">
          <SectionTitle
            title="AI Chatbots for Every Business Need"
            description="Designed for every interaction—AI Chatbots handle diverse business needs."
          />

          <div className="mt-12 relative flex items-center flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Business use cases grid */}
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
                    AI Chatbots that handle inquiries, resolve issues, and
                    provide instant assistance.
                  </p>
                </div>

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
                    Sales & Lead Qualification
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    AI Chatbots that engage visitors, filter leads, and drive
                    conversions effortlessly.
                  </p>
                </div>

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
                    AI-Powered Coach
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    AI Coaches that train, guide, and support employees and
                    customers.
                  </p>
                </div>

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
                    Website & WhatsApp Integration
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    AI Chatbots that engage users via website pop-ups or
                    WhatsApp Business.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex justify-center items-center h-full">
                <img
                  id="agent-image"
                  src="https://ai.potential.com/static/UI/images/use-case1.gif"
                  alt="AI Chatbot"
                  className="max-h-[600px] w-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== AI Chatbots Business End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Reduce Your Operation Costs
              </h2>
              <p>
                Set up, train and integrate your AI Chatbot in a few minutes
                starting from $10/month only! Ready to discuss with Vera?
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
                  href="#"
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
      <div id="ShapedtoMeetYourNeeds" className="relative p-4">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="mx-auto text-center mb-16">
            <SectionTitle
              title="AI Chatbots Shaped to Meet Your Needs"
              description="Engage more effectively and save costs with our Artificial Intelligence No-code Chatbots."
            />
          </div>

          <div className="mt-12 md:mt-16">
            <div className="relative grid rounded-3xl border-gray-200 p-1 dark:border-gray-800 lg:grid-cols-2">
              <div className="absolute inset-0 hidden h-max dark:block lg:my-auto">
                <div className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-70 2xl:mx-auto 2xl:max-w-6xl">
                  <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700"></div>
                  <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
                </div>
              </div>

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
                      Fully Customizable
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Train your Ai Chatbot with your specific information and
                      offerings, ensuring it delivers the right answers every
                      time.
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
                      Seamless Integration
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Launch your AI Chatbot on your website or WhatsApp without
                      the need for coding, using our simple setup process and
                      plugins.
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
                      Multilingual Support
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Break language barriers and engage customers globally by
                      interacting in their preferred language.
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
                      Security First
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                      Our AI Chatbot includes premium security measures to keep
                      your data safe. Your data will not be used to train this
                      or any other AI model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== Shaped to Meet Your Needs End ===== --> */}

      {/* <!-- ===== Build Your Chatbot Start ===== --> */}
      <div id="buildyourchatbot" className="relative lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-b dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark"></div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-6 xl:px-0 py-24">
          <div className="mx-auto text-center mb-16">
            <SectionTitle
              title="Build Your AI Chatbot in Minutes"
              description="Customize the appearance, train with your data, and deploy across platforms."
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-14 max-w-5xl mx-auto">
            {/* Step 01 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork1.png"
                      alt="Build your AI agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Customize
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    01
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  Give your chatbot a name & greeting, and customize your
                  branding.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork2.png"
                      alt="Test your AI agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Train
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    02
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  Train your AI Chatbot on your website data and any additional
                  information.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm dark:bg-gray-900/30 border border-gray-200/20 dark:border-gray-700/30 p-8 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-xl hover:shadow-purple-500/10 w-full md:w-1/3">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 dark:from-purple-500/10 dark:via-transparent dark:to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20">
                    <img
                      src="https://ai.potential.com/static/UI/images/howitwork3.png"
                      alt="Deploy your AI agent"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Deploy
                  </h4>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium">
                    03
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                  Integrate your AI Chatbot with your website or WhatsApp in
                  clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== Build Your Chatbot End ===== --> */}

      {/* <!-- ===== See It In Action Start ===== --> */}
      <section className="pt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top text-center mb-15">
            <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl mb-4">
              See it in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience our AI Chatbot live on these websites
            </p>
          </div>

          {/* Swiper */}
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              loop={true}
              spaceBetween={32}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                enabled: false,
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="!pb-14"
            >
              {/* E100 Club Card */}
              <SwiperSlide>
                <div className="h-full p-2">
                  <div className="flex flex-col h-full bg-white dark:bg-[#1C2136] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                          E100 Club
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Popup AI Bot
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-primary dark:text-purple-300">
                        Live Demo
                      </span>
                    </div>
                    <div
                      className="flex-grow relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                      style={{ paddingTop: "2rem" }}
                    >
                      <video
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="https://ai.potential.com/static/assets/bots/videos/actionThree.webm"
                          type="video/webm"
                        />
                      </video>
                      <a
                        href="https://educate.potential.com/e100-club/"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-primary hover:bg-primaryho text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Try Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Ministry of Education Card */}
              <SwiperSlide>
                <div className="h-full p-2">
                  <div className="flex flex-col h-full bg-white dark:bg-[#1C2136] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                          Ministry of Education, UAE
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Popup AI Bot
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-primary dark:text-purple-300">
                        Live Demo
                      </span>
                    </div>
                    <div className="flex-grow relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <video
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="https://ai.potential.com/static/assets/bots/videos/actionOne.webm"
                          type="video/webm"
                        />
                      </video>
                      <a
                        href="https://gradfund.moe.gov.ae/?lang=en"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-primary hover:bg-primaryho text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Try Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Personal Website Card */}
              <SwiperSlide>
                <div className="h-full p-2">
                  <div className="flex flex-col h-full bg-white dark:bg-[#1C2136] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                          Personal Website
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Embedded AI Bot
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-primary dark:text-purple-300">
                        Live Demo
                      </span>
                    </div>
                    <div className="flex-grow relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <video
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="https://ai.potential.com/static/assets/bots/videos/actionTwo.webm"
                          type="video/webm"
                        />
                      </video>
                      <a
                        href="#"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-primary hover:bg-primaryho text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Try Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* E100 Club Card */}
              <SwiperSlide>
                <div className="h-full p-2">
                  <div className="flex flex-col h-full bg-white dark:bg-[#1C2136] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                          E100 Club
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Popup AI Bot
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-primary dark:text-purple-300">
                        Live Demo
                      </span>
                    </div>
                    <div
                      className="flex-grow relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800"
                      style={{ paddingTop: "2rem" }}
                    >
                      <video
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="https://ai.potential.com/static/assets/bots/videos/actionThree.webm"
                          type="video/webm"
                        />
                      </video>
                      <a
                        href="https://educate.potential.com/e100-club/"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-primary hover:bg-primaryho text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Try Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Ministry of Education Card */}
              <SwiperSlide>
                <div className="h-full p-2">
                  <div className="flex flex-col h-full bg-white dark:bg-[#1C2136] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                          Ministry of Education, UAE
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Popup AI Bot
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-primary dark:text-purple-300">
                        Live Demo
                      </span>
                    </div>
                    <div className="flex-grow relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <video
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="https://ai.potential.com/static/assets/bots/videos/actionOne.webm"
                          type="video/webm"
                        />
                      </video>
                      <a
                        href="https://gradfund.moe.gov.ae/?lang=en"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-primary hover:bg-primaryho text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Try Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Personal Website Card */}
              <SwiperSlide>
                <div className="h-full p-2">
                  <div className="flex flex-col h-full bg-white dark:bg-[#1C2136] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">
                          Personal Website
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Embedded AI Bot
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-primary dark:text-purple-300">
                        Live Demo
                      </span>
                    </div>
                    <div className="flex-grow relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <video
                        className="w-full h-full object-contain rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="https://ai.potential.com/static/assets/bots/videos/actionTwo.webm"
                          type="video/webm"
                        />
                      </video>
                      <a
                        href="#"
                        target="_blank"
                        className="absolute bottom-4 right-4 bg-primary hover:bg-primaryho text-white px-6 py-2.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        Try Me
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* Add custom styles for Swiper */}
        <style jsx global>{`
          .swiper {
            padding-bottom: 50px !important;
          }
          .swiper-slide {
            height: auto !important;
          }
          .swiper-pagination {
            bottom: 0 !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: #9333ea !important;
          }
          .swiper-pagination-bullet-active {
            background: #9333ea !important;
          }
        `}</style>
      </section>
      {/* <!-- ===== See It In Action End ===== --> */}

      {/* <!-- ===== CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-7.5 md:px-12.5 xl:px-17.5 py-12.5 xl:py-0 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-between gap-8 md:gap-0">
            <div className="animate_left md:w-[70%] lg:w-1/2">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle4 font-bold mb-4 w-11/12">
                Grow Your Sales & Revenue with AI
              </h2>
              <p>
                A no-code, simple, powerful AI Chatbot for your website starting
                at $10/month. Talk to Vera to get started!
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
                  href="#"
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

      {/* <!-- ===== How our AI Chatbot Transforms Your Customer Service Start ===== --> */}
      <section id="HowourAIchatbottransformsyoucustomer" className="pt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          {/* Section Title */}
          <div className="animate_top text-center mx-auto mb-15">
            <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl mb-4">
              How our AI Chatbot Transforms Your Customer Service
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Compare the difference between our AI-powered solution and
              traditional chatbots
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Potential.com AI Chatbot Column */}
            <div className="animate_left rounded-2xl bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 xl:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  With Potential.com AI Chatbot
                </h3>
              </div>

              <div className="space-y-5 ml-4">
                {[
                  "Provides 24/7 consistent and reliable service",
                  "Offers personalized responses",
                  "Understands complex questions easily",
                  "Provides accurate and relevant answers",
                  "Provides multilingual support based on user's input",
                  "Provides an engaging user experience",
                  "Handles multiple tasks simultaneously",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="mt-1 w-5 h-5 text-primary flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Everybody Else Column */}
            <div className="animate_right rounded-2xl bg-gray-50 dark:bg-gray-900 border border-stroke dark:border-strokedark p-7.5 xl:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-full bg-zumthor flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#ffffff17" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  With everybody else
                </h3>
              </div>

              <div className="space-y-5 ml-4">
                {[
                  "Can't offer personalized responses",
                  "Often create more problems than they solve",
                  "Hard and time-consuming to set up",
                  "Require frequent manual updates",
                  "Keeps you overwhelmed by a lot of support tickets",
                  "Can't remember past interactions",
                  "Struggle to handle multiple tasks at once",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="mt-1 w-5 h-5 text-gray-400 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== How our AI Chatbot Transforms Your Customer Service End ===== --> */}

      {/* <!-- ===== Final CTA Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
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
                <img
                  src="./newimages/vera-avatar.png"
                  alt="Vera"
                  className="hidden xl:block w-[347px] h-[340px]"
                />
                <a
                  href="#"
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
