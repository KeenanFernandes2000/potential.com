"use client";
import { useState, useRef } from "react";

interface TabContent {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string[];
  image: {
    light: string;
    dark: string;
  };
}

interface FeaturesTabProps {
  tabs: TabContent[];
  instanceId?: string; // Optional unique identifier for multiple instances
  showBackground?: boolean; // Optional prop to control background display
}

const FeaturesTab = ({
  tabs,
  instanceId = "default",
  showBackground = false,
}: FeaturesTabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <section className="pt-18.5 pb-20 lg:pb-22.5 relative">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {showBackground && (
          <div className="absolute top-0 -z-1">
            <img
              className="dark:hidden"
              src="/newimages/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <img
              className="hidden dark:block"
              src="/newimages/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>
        )}

        {/* Tab Menus Start */}
        <div className="animate_top border border-stroke dark:border-strokedark dark:bg-blacksection shadow-solid-5 dark:shadow-solid-6 bg-white rounded-[10px] mb-0 md:mb-15 xl:mb-21.5">
          {/* Mobile Dropdown */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-6 py-4 md:border-b border-stroke dark:border-strokedark transition-colors duration-200 hover:bg-stroke/5 dark:hover:bg-strokedark/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center transition-colors duration-200">
                  <p className="text-black dark:text-white font-medium text-metatitle3">
                    {tabs.find((tab) => tab.id === activeTab)?.number ||
                      tabs[0]?.number}
                  </p>
                </div>
                <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium transition-colors duration-200">
                  {tabs.find((tab) => tab.id === activeTab)?.title ||
                    tabs[0]?.title}
                </h5>
              </div>
              <svg
                className={`w-5 h-5 text-black dark:text-white transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="relative w-full bg-white dark:bg-blacksection border border-stroke dark:border-strokedark rounded-b-[10px] shadow-lg z-50">
                {tabs.map((tab) => (
                  <div
                    key={`${instanceId}-mobile-${tab.id}`}
                    className={`cursor-pointer px-6 py-4 transition-colors duration-200 hover:bg-stroke/5 dark:hover:bg-strokedark/5 flex items-center gap-4 ${
                      activeTab === tab.id
                        ? "bg-stroke/10 dark:bg-strokedark/10"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsOpen(false);
                    }}
                  >
                    <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center transition-colors duration-200">
                      <p className="text-black dark:text-white font-medium text-metatitle3">
                        {tab.number}
                      </p>
                    </div>
                    <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium transition-colors duration-200">
                      {tab.title}
                    </h5>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex md:flex-nowrap md:items-center justify-center lg:gap-7.5 xl:gap-12.5">
            {tabs.map((tab) => (
              <div
                key={`${instanceId}-desktop-${tab.id}`}
                className={`relative cursor-pointer border-b md:border-b-0 border-stroke dark:border-strokedark flex items-center gap-4 py-5 px-6 xl:px-13.5 transition-colors duration-200 hover:bg-stroke/5 dark:hover:bg-strokedark/5 ${
                  activeTab === tab.id
                    ? "active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px] before:transition-all before:duration-300"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center transition-colors duration-200">
                  <p className="text-black dark:text-white font-medium text-metatitle3">
                    {tab.number}
                  </p>
                </div>
                <div className="lg:w-auto">
                  <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium transition-colors duration-200">
                    {tab.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Tab Menus End */}

        {/* Tab Content Start */}
        <div className="animate_top mx-auto max-w-c-1154">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <div
                  key={`${instanceId}-content-${tab.id}`}
                  className="flex items-center flex-col-reverse md:flex-row gap-8 lg:gap-19"
                >
                  <div className="md:w-1/2">
                    <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">
                      {tab.heading}
                    </h2>
                    {tab.description.map((paragraph, index) => (
                      <p
                        key={`${instanceId}-p-${tab.id}-${index}`}
                        className={`${index === 0 ? "mb-5" : "w-11/12"}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={tab.image.light}
                      alt={tab.title}
                      className="dark:hidden"
                    />
                    <img
                      src={tab.image.dark || tab.image.light}
                      alt={tab.title}
                      className="hidden dark:block"
                    />
                  </div>
                </div>
              )
          )}
        </div>
        {/* Tab Content End */}
      </div>
    </section>
  );
};

export default FeaturesTab;
