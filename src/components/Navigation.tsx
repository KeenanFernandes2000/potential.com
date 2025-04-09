"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Mobile dropdowns
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        // Reset mobile dropdowns when switching to desktop
        setSolutionsOpen(false);
        setUseCasesOpen(false);
        setAboutOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setSolutionsOpen(false);
    setUseCasesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  const handleMobileDropdown = (
    dropdownName: "solutions" | "useCases" | "about"
  ) => {
    // Only handle mobile clicks
    if (window.innerWidth >= 1024) return;

    // Toggle the clicked dropdown, close others
    switch (dropdownName) {
      case "solutions":
        setSolutionsOpen((prev) => !prev);
        setUseCasesOpen(false);
        setAboutOpen(false);
        break;
      case "useCases":
        setSolutionsOpen(false);
        setUseCasesOpen((prev) => !prev);
        setAboutOpen(false);
        break;
      case "about":
        setSolutionsOpen(false);
        setUseCasesOpen(false);
        setAboutOpen((prev) => !prev);
        break;
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 w-full py-7 transition-all duration-75 ${
        isScrolled ? "bg-white dark:bg-black shadow !py-4" : ""
      }`}
      style={{
        zIndex: 100,
      }}
    >
      <div
        className={`mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative ${
          isOpen ? "bg-white dark:bg-black" : ""
        }`}
      >
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/newimages/potLogoLight.png"
              alt="Logo Light"
              width={150}
              height={40}
              className="dark:hidden"
            />
            <Image
              src="/newimages/potLogoDark.png"
              alt="Logo Dark"
              width={150}
              height={40}
              className="hidden dark:block"
            />
          </Link>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-4"
            >
              {theme === "light" ? (
                <Image
                  src="/newimages/icon-sun.svg"
                  alt="Sun"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/newimages/icon-moon.svg"
                  alt="Moon"
                  width={24}
                  height={24}
                />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-200"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex justify-between w-full lg:w-3/4`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 mt-4 lg:mt-0">
            {/* Solutions Dropdown */}
            <li className="relative group">
              <button
                onClick={() => handleMobileDropdown("solutions")}
                className="w-full flex items-center justify-between hover:text-primary lg:cursor-default"
              >
                <span className="lg:border-b-2 lg:border-transparent group-hover:lg:border-primary group-hover:lg:text-primary transition-all duration-300">
                  Solutions
                </span>
                <svg
                  className={`w-3 h-3 ml-2 transform transition-transform duration-300 ${
                    solutionsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Mobile dropdown */}
              <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                  solutionsOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="bg-gray-50 dark:bg-gray-900 rounded-md mt-2 space-y-2 p-4">
                  <li>
                    <Link
                      href="/chatbots"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Chatbots
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/voiceagents"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Voice Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/workflows"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Workflows
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Desktop dropdown */}
              <div className="hidden lg:group-hover:block absolute left-0 top-full pt-2">
                <ul className="bg-white dark:bg-black shadow-lg rounded-md p-4 min-w-[200px] transform transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  <li>
                    <Link
                      href="/chatbots"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Chatbots
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/voiceagents"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Voice Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/workflows"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Workflows
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Use Cases Dropdown */}
            <li className="relative group">
              <button
                onClick={() => handleMobileDropdown("useCases")}
                className="w-full flex items-center justify-between hover:text-primary lg:cursor-default"
              >
                <span className="lg:border-b-2 lg:border-transparent group-hover:lg:border-primary group-hover:lg:text-primary transition-all duration-300">
                  Use Cases
                </span>
                <svg
                  className={`w-3 h-3 ml-2 transform transition-transform duration-300 ${
                    useCasesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Mobile dropdown */}
              <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                  useCasesOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="bg-gray-50 dark:bg-gray-900 rounded-md mt-2 space-y-2 p-4">
                  <li>
                    <Link
                      href="/strategic-ai"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Strategic AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revenue-ai"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Revenue AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/operational-ai"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Operational AI
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Desktop dropdown */}
              <div className="hidden lg:group-hover:block absolute left-0 top-full pt-2">
                <ul className="bg-white dark:bg-black shadow-lg rounded-md p-4 min-w-[200px] transform transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  <li>
                    <Link
                      href="/strategic-ai"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Strategic AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/revenue-ai"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Revenue AI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/operational-ai"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Operational AI
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* About Dropdown */}
            <li className="relative group">
              <button
                onClick={() => handleMobileDropdown("about")}
                className="w-full flex items-center justify-between hover:text-primary lg:cursor-default"
              >
                <span className="lg:border-b-2 lg:border-transparent group-hover:lg:border-primary group-hover:lg:text-primary transition-all duration-300">
                  About
                </span>
                <svg
                  className={`w-3 h-3 ml-2 transform transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Mobile dropdown */}
              <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                  aboutOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="bg-gray-50 dark:bg-gray-900 rounded-md mt-2 space-y-2 p-4">
                  <li>
                    <Link
                      href="/about-us"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Desktop dropdown */}
              <div className="hidden lg:group-hover:block absolute left-0 top-full pt-2">
                <ul className="bg-white dark:bg-black shadow-lg rounded-md p-4 min-w-[200px] transform transition-all duration-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                  <li>
                    <Link
                      href="/about-us"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className="block py-2 px-4 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-6 py-7 lg:mt-0">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden lg:block"
            >
              {theme === "light" ? (
                <Image
                  src="/newimages/icon-sun.svg"
                  alt="Sun"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/newimages/icon-moon.svg"
                  alt="Moon"
                  width={24}
                  height={24}
                />
              )}
            </button>

            <Link
              href="/talk-to-vera"
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primaryho px-8 py-4 text-base font-semibold text-white transition-all duration-500"
            >
              Talk to Vera
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
