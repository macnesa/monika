"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";

const MOTION_CONDITIONS = {
  isMobile: "(max-width: 767px)",
  isDesktop: "(min-width: 768px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
};

export default function ServicesMotion() {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(MOTION_CONDITIONS, (context) => {
      const { isMobile, reduceMotion } = context.conditions;

      if (reduceMotion) {
        return;
      }

      /*
       * ------------------------------------------------------------
       * MOTION DENSITY
       * ------------------------------------------------------------
       *
       * Mobile intentionally uses shorter travel and faster timing.
       */

      const heroEyebrowY = isMobile ? 7 : 10;
      const heroTitleY = isMobile ? 12 : 18;
      const heroSupportY = isMobile ? 9 : 14;

      const heroEyebrowDuration = isMobile ? 0.36 : 0.46;
      const heroTitleDuration = isMobile ? 0.58 : 0.72;
      const heroSupportDuration = isMobile ? 0.48 : 0.58;

      const deckY = isMobile ? 10 : 18;
      const deckDuration = isMobile ? 0.52 : 0.65;

      const contactPrimaryY = isMobile ? 9 : 16;
      const contactSecondaryY = isMobile ? 7 : 12;
      const contactPrimaryDuration = isMobile ? 0.44 : 0.56;
      const contactSecondaryDuration = isMobile ? 0.4 : 0.5;

      /*
       * ------------------------------------------------------------
       * HERO — entrance
       * ------------------------------------------------------------
       */

      const heroSection = document.querySelector(
        '[data-motion-section="services-hero"]',
      );

      const heroEyebrow = heroSection?.querySelector(
        '[data-motion="hero-eyebrow"]',
      );

      const heroTitle = heroSection?.querySelector(
        '[data-motion="hero-title"]',
      );

      const heroSupport = heroSection?.querySelector(
        '[data-motion="hero-support"]',
      );

      if (heroSection && heroEyebrow && heroTitle && heroSupport) {
        gsap
          .timeline()
          .fromTo(
            heroEyebrow,
            {
              autoAlpha: 0,
              y: heroEyebrowY,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: heroEyebrowDuration,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            isMobile ? 0.04 : 0.08,
          )
          .fromTo(
            heroTitle,
            {
              autoAlpha: 0,
              y: heroTitleY,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: heroTitleDuration,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            },
            isMobile ? 0.1 : 0.16,
          )
          .fromTo(
            heroSupport,
            {
              autoAlpha: 0,
              y: heroSupportY,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: heroSupportDuration,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            },
            isMobile ? 0.23 : 0.34,
          );
      }

      /*
       * ------------------------------------------------------------
       * SERVICES DECK — one-object entrance
       * ------------------------------------------------------------
       */

      const servicesDeck = document.querySelector(
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

      /*
       * ------------------------------------------------------------
       * CONTACT — restrained handoff into conversion
       * ------------------------------------------------------------
       */

      const contactSection = document.querySelector(
        '[data-motion-section="services-contact"]',
      );

      const contactPrimary = contactSection?.querySelector(
        '[data-motion="contact-primary"]',
      );

      const contactSecondary = contactSection?.querySelector(
        '[data-motion="contact-secondary"]',
      );

      if (contactSection && contactPrimary && contactSecondary) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: contactSection,
              start: isMobile ? "top 90%" : "top 84%",
              once: true,
            },
          })
          .fromTo(
            contactPrimary,
            {
              autoAlpha: 0,
              y: contactPrimaryY,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: contactPrimaryDuration,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            0,
          )
          .fromTo(
            contactSecondary,
            {
              autoAlpha: 0,
              y: contactSecondaryY,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: contactSecondaryDuration,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            isMobile ? 0.06 : 0.1,
          );
      }
    });

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      media.revert();
    };
  }, []);

  return null;
}