"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleNewsletterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    const submitButton = form.querySelector("button") as HTMLButtonElement;
    const originalButtonContent = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>`;

    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();

      const portalId = "25217377";
      const formGuid = "a9a9f933-84e6-47e2-b674-25f493e140d1";
      const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

      const formData = {
        fields: [
          {
            name: "email",
            value: email,
          },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          ipAddress: ipData.ip,
        },
      };

      const response = await fetch(hubspotEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      emailInput.value = "";
      showMessage(
        "Thank you for subscribing! We'll keep you updated.",
        "success"
      );
    } catch (error) {
      console.error("Error:", error);
      showMessage(
        "There was an error submitting the form. Please try again.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
    }
  };

  const showMessage = (message: string, type: "error" | "success") => {
    const messageContainer = document.getElementById("newsletter-message");
    if (!messageContainer) return;

    messageContainer.innerHTML = "";

    const messageElement = document.createElement("div");
    messageElement.className = `flex items-center gap-2 text-sm transition-all duration-300 opacity-0 p-2 rounded-md ${
      type === "error"
        ? "bg-red-50 dark:bg-red-900/10"
        : "bg-green-50 dark:bg-green-900/10"
    }`;

    const icon = document.createElement("span");
    icon.className = `flex-shrink-0 ${
      type === "error"
        ? "text-red-600 dark:text-red-200"
        : "text-green-600 dark:text-green-200"
    }`;

    icon.innerHTML =
      type === "error"
        ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`
        : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>`;

    const text = document.createElement("span");
    text.className =
      type === "error"
        ? "text-sm text-red-600 dark:text-red-200"
        : "text-sm text-green-600 dark:text-green-200";
    text.innerText = message;

    messageElement.appendChild(icon);
    messageElement.appendChild(text);
    messageContainer.appendChild(messageElement);

    requestAnimationFrame(() => {
      messageElement.style.opacity = "1";
    });

    setTimeout(() => {
      messageElement.style.opacity = "0";
      messageElement.style.transform = "translateY(-10px)";
      setTimeout(() => {
        messageContainer.innerHTML = "";
      }, 300);
    }, 5000);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <footer className="bg-white dark:bg-blacksection border-t border-stroke dark:border-strokedark">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Footer Top */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-0">
            <div className="w-full lg:w-1/4">
              <Link href="https://potential.com/">
                <Image
                  src="/newimages/potLogoLight.png"
                  alt="Potential"
                  width={100}
                  height={100}
                  className="dark:hidden"
                />
                <Image
                  src="/newimages/potLogoDark.png"
                  alt="Potential"
                  width={100}
                  height={100}
                  className="hidden dark:block"
                />
              </Link>

              <p className="mt-5">
                Empowering organizations to thrive since 2005.
              </p>

              <div className="mt-8">
                <h4 className="font-medium text-black dark:text-white text-item title2 mb-4">
                  Contact
                </h4>
                <div className="font-medium">
                  <p className="mb-2">
                    US:{" "}
                    <a href="tel:+18622679307" className="hover:text-primary">
                      +1 (862) 267 9307
                    </a>
                  </p>
                  <p className="mb-2">
                    UAE:{" "}
                    <a href="tel:+97143693663" className="hover:text-primary">
                      +971 4 369 3663
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@potential.com"
                      className="hover:text-primary"
                    >
                      info@potential.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 w-full lg:w-2/3 xl:w-7/12 flex flex-wrap md:flex-row justify-between gap-8 md:gap-0">
              <div className=" w-full sm:w-1/2 md:w-1/4">
                <h4 className="font-medium text-black dark:text-white text-item title2 mb-9">
                  Quick Links
                </h4>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chatbots"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Chatbots
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/voice-agents"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Voice Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/workflows"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Workflows
                    </Link>
                  </li>
                </ul>
              </div>

              <div className=" w-full sm:w-1/2 md:w-1/4">
                <h4 className="font-medium text-black dark:text-white text-item title2 mb-9">
                  About
                </h4>
                <ul>
                  <li>
                    <Link
                      href="/about-us"
                      className="inline-block hover:text-primary mb-3"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://potential.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary mb-3 inline-flex items-center"
                    >
                      Potential.org
                      <svg
                        className="ml-1 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" w-full sm:w-1/2 md:w-1/3">
                <h4 className="font-medium text-black dark:text-white text-item title2 mb-9">
                  Newsletter
                </h4>
                <p className="mb-4">
                  The latest news, articles, and resources, sent to your inbox
                  monthly.
                </p>

                <form id="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Email address"
                      name="email"
                      className="text-sm w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-11 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6"
                    />
                    <button className="absolute right-0 p-4">
                      <svg
                        className="fill-[#757693] dark:fill-white hover:fill-primary"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_48_1487)">
                          <path d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1487">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </form>
                <div id="newsletter-message" className="mt-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-stroke dark:border-strokedark flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-0 py-7">
          <div>
            <p>&copy; 2025 Potential.com | All Rights Reserved</p>
          </div>

          <div>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/terms-of-service" className="hover:text-primary">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex items-center gap-5">
              <li>
                <a
                  href="https://www.youtube.com/c/PotentialCom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/potential"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/PotentialCom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/potentialcom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
