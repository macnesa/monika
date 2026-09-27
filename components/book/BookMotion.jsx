"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";

const MOTION_CONDITIONS = {
  isMobile: "(max-width: 767px)",
  isDesktop: "(min-width: 768px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
};

export default function BookMotion() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    let refreshFrame = null;

    media.add(MOTION_CONDITIONS, (context) => {
      const { isMobile, reduceMotion } = context.conditions;

      if (reduceMotion) {
        return;
      }

      const hero = document.querySelector(
        '[data-motion-section="book-hero"]',
      );

      if (hero) {
        const eyebrow = hero.querySelector(
          '[data-motion="book-hero-eyebrow"]',
        );
        const title = hero.querySelector(
          '[data-motion="book-hero-title"]',
        );
        const support = hero.querySelector(
          '[data-motion="book-hero-support"]',
        );

        const heroTimeline = gsap.timeline();

        if (eyebrow) {
          heroTimeline.fromTo(
            eyebrow,
            {
              autoAlpha: 0,
              y: isMobile ? 7 : 10,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.36 : 0.46,
              ease: "power2.out",
            },
            isMobile ? 0.04 : 0.08,
          );
        }

        if (title) {
          heroTimeline.fromTo(
            title,
            {
              autoAlpha: 0,
              y: isMobile ? 12 : 18,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.58 : 0.72,
              ease: "power3.out",
            },
            isMobile ? 0.1 : 0.16,
          );
        }

        if (support) {
          heroTimeline.fromTo(
            support,
            {
              autoAlpha: 0,
              y: isMobile ? 9 : 14,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.48 : 0.58,
              ease: "power3.out",
            },
            isMobile ? 0.23 : 0.34,
          );
        }
      }

      const bookingSection = document.querySelector(
        '[data-motion-section="book-booking"]',
      );

      if (bookingSection) {
        const info = bookingSection.querySelector(
          '[data-motion="book-booking-info"]',
        );
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

        if (info) {
          bookingTimeline.fromTo(
            info,
            {
              autoAlpha: 0,
              y: isMobile ? 10 : 16,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.46 : 0.58,
              ease: "power3.out",
            },
            0,
          );
        }

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

      refreshFrame = window.requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });

    return () => {
      if (refreshFrame !== null) {
        window.cancelAnimationFrame(refreshFrame);
      }

      media.revert();
    };
  }, []);

  return null;
}