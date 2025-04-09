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

export default function ContactUsPage() {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    // Initialize HubSpot form after script loads
    script.addEventListener("load", () => {
      //@ts-ignore
      if (window.hbspt) {
        //@ts-ignore
        window.hbspt.forms.create({
          portalId: "25217377",
          formId: "82949b26-d4dd-4f64-82e8-11b6c6783d3f",
          region: "eu1",
          target: "#hubspotForm",
        });
      }
    });

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollRevealComponent />

      {/* ===== Contact Start ===== */}
      <section id="support" className="px-4 md:px-8 2xl:px-0 mt-36">
        <div className="mx-auto mt-10 md:mt-0 max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
          <div className="absolute -z-1 bottom-5 left-0 w-full h-1/3">
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

          <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-8 xl:gap-20 md:justify-between">
            <div className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold">
                Contact Us
              </h2>
              <p className="text-black dark:text-waterloo text-metatitle3 mb-15">
                Need help? Leave us a message and we'll come back to you.
              </p>
              {/* HubSpot form will be loaded via external script */}
              <div id="hubspotForm"></div>
            </div>

            <div className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15 text-center md:text-left">
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">
                Find Us
              </h2>

              <div className="mb-7.5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Our Locations
                </h4>
                <div className="ml-7 mb-3">
                  <p className="font-medium">
                    UAE Office
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block"
                      fill="none"
                      viewBox="0 2 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Dubai Knowledge Park, Block 02, Dubai, UAE
                  </p>
                </div>
                <div className="ml-7">
                  <p className="font-medium">
                    USA Office
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block"
                      fill="none"
                      viewBox="0 2 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Newark, Delaware, DE 19702, USA
                  </p>
                </div>
              </div>

              <div className="mb-7.5 flex flex-col items-center md:items-start">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Phone Number
                </h4>
                <p className="ml-7 mb-2 flex items-center gap-2">
                  <img
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg"
                    alt="avatar"
                    className="h-4 w-auto object-cover object-center"
                  />
                  <a href="tel:+97143693663">+971 4 369 3663</a>
                </p>
                <p className="ml-7 flex items-center gap-2">
                  <img
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                    alt="avatar"
                    className="h-4 w-auto object-cover object-center"
                  />
                  <a href="tel:+18622679307">+1(862)267-9307</a>
                </p>
              </div>

              <div className="mb-7.5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Address
                </h4>
                <p className="ml-7">
                  <a href="mailto:info@potential.com">info@potential.com</a>
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="<?php echo home_url('/talk-to-vera'); ?>"
                  className="inline-flex items-center justify-center py-3 px-7 rounded-full bg-primary text-white font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Talk to Vera
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Contact End ===== */}

      {/* ===== Trusted by Start ===== */}
      <section className="bg-transparent py-11 my-11">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="animate_top text-center text-black dark:text-white text-3xl font-bold mb-10">
            Trusted By
          </h3>
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
      {/* ===== Trusted by End ===== */}
    </main>
  );
}
