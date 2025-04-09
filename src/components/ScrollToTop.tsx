"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`flex items-center justify-center w-10 h-10 rounded-[4px] shadow-solid-5 bg-primary hover:bg-primaryho fixed bottom-8 right-8 z-999 transition-all duration-300 transform ${
        scrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <svg
        className="fill-white w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
