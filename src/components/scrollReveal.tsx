// components/ScrollRevealComponent.jsx
"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealComponent() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2800,
      reset: false,
    });

    sr.reveal(".animate_top", { origin: "top", interval: 100 });
    sr.reveal(".animate_left", { origin: "left", interval: 100 });
    sr.reveal(".animate_right", { origin: "right", interval: 100 });
  }, []);

  return <></>;
}
