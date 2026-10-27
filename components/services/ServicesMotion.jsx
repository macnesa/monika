"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import { editorialRoute } from "@/lib/motion/editorial";

const MOTION_CONDITIONS = {
  isMobile: "(max-width: 767px)",
  isDesktop: "(min-width: 768px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
};

export default function ServicesMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector('[data-motion-section="services-hero"]')?.closest("main");
    if (!root) return;
    const stopTypography = editorialRoute(root, [
      { scope: '[data-motion-section="services-hero"]', heading: '[data-motion="hero-title"]', support: '[data-motion="hero-support"] p', action: '[data-motion="hero-support"] a', eyebrow: '[data-motion="hero-eyebrow"]', hero: true },
      { scope: '[data-motion-section="services-contact"]', heading: "h2", support: '[data-motion="contact-secondary"] p', action: '[data-motion="contact-secondary"] a', display: false },
    ]);
    const media = gsap.matchMedia();
    media.add(MOTION_CONDITIONS, (context) => {
      const { isMobile, reduceMotion } = context.conditions;
      if (reduceMotion) return;
      const deckY = isMobile ? 10 : 18;
      const deckDuration = isMobile ? 0.52 : 0.65;
      const servicesDeck = root.querySelector(
        '[data-motion-section="services-deck"]',
      );

      if (servicesDeck) {
        gsap.fromTo(
          servicesDeck,
          {
            autoAlpha: 0,
            y: deckY,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: deckDuration,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: servicesDeck,
              start: isMobile ? "top 90%" : "top 84%",
              once: true,
            },
          },
        );
      }
    });
    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(refreshFrame);
      stopTypography();
      media.revert();
    };
  }, []);

  return null;
}
