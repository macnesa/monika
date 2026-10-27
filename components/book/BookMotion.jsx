"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import { editorialRoute } from "@/lib/motion/editorial";

const MOTION_CONDITIONS = {
  isMobile: "(max-width: 767px)",
  isDesktop: "(min-width: 768px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
};

export default function BookMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector('[data-motion-section="book-hero"]')?.closest("main");
    if (!root) return;
    const stopTypography = editorialRoute(root, [
      { scope: '[data-motion-section="book-hero"]', heading: '[data-motion="book-hero-title"]', support: '[data-motion="book-hero-support"] p', action: '[data-motion="book-hero-support"] a', eyebrow: '[data-motion="book-hero-eyebrow"]', hero: true },
      { scope: '[data-motion="book-booking-info"] > div', heading: "h2", support: "p", action: "a", display: false },
    ]);
    const media = gsap.matchMedia();
    media.add(MOTION_CONDITIONS, (context) => {
      const { isMobile, reduceMotion } = context.conditions;
      if (reduceMotion) return;
      const bookingSection = root.querySelector(
        '[data-motion-section="book-booking"]',
      );

      if (bookingSection) {
        const surface = bookingSection.querySelector(
          '[data-motion="book-booking-surface"]',
        );

        const bookingTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: bookingSection,
            start: isMobile ? "top 90%" : "top 84%",
            once: true,
          },
        });

        if (surface) {
          bookingTimeline.fromTo(
            surface,
            {
              autoAlpha: 0,
              y: isMobile ? 8 : 14,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.44 : 0.56,
              ease: "power3.out",
            },
            isMobile ? 0.06 : 0.1,
          );
        }
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
