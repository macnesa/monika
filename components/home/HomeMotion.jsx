"use client";

import { useLayoutEffect } from "react";

import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import { editorialRoute } from "@/lib/motion/editorial";

const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

const INTRO_MOBILE_QUERY =
  "(max-width: 767px) and (prefers-reduced-motion: no-preference)";

const INTRO_DESKTOP_QUERY =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

const HERO_DEPTH_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const BACKGROUND_AMBIENT_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

const SERVICES_DEPTH_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export default function HomeMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector('[data-motion-section="hero"]')?.closest("main");
    if (!root) return;
    const stopTypography = editorialRoute(root, [
      { scope: '[data-motion-section="hero"]', heading: '[data-motion="hero-title"]', support: '[data-motion="hero-copy"]', action: '[data-motion="hero-cta"]', eyebrow: '[data-motion="hero-eyebrow"]', hero: true },
      { scope: '[data-motion-section="introduction"]', heading: "h2", support: '[data-motion="intro-copy"]', display: false },
      { scope: '[data-motion-section="background"]', heading: "h2", display: false },
      { scope: '[data-motion="career-record"]', heading: "h3 > span:last-child", support: "p:last-of-type", display: false },
      { scope: '[data-motion="services-intro"]', heading: "h2", support: "p:last-child", display: false },
      { scope: '[data-motion="service-record"]', heading: "h3", support: "div > p", display: false },
      { scope: '[data-motion-section="contact"]', heading: "h2", support: '[data-motion="contact-secondary"] > p', action: '[data-motion="contact-secondary"] a', display: false },
    ]);
    const media = gsap.matchMedia();

    /*
     * ------------------------------------------------------------
     * GLOBAL MOTION
     * ------------------------------------------------------------
     */

    media.add(MOTION_QUERY, () => {
      const image = root.querySelector('[data-motion="hero-image"]');
      if (image) gsap.fromTo(image, { scale: 1.025 }, {
        scale: 1, duration: 1.6, ease: "power2.out", clearProps: "transform",
      });
    });

    /*
     * ------------------------------------------------------------
     * INTRODUCTION — DESKTOP / TABLET
     * ------------------------------------------------------------
     */

    media.add(INTRO_DESKTOP_QUERY, () => {
      const introductionSection = root.querySelector(
        '[data-motion-section="introduction"]',
      );

      const introHeading = introductionSection?.querySelector(
        '[data-motion="intro-heading"]',
      );

      const introImage = introductionSection?.querySelector(
        '[data-motion="intro-image"]',
      );

      const introCopy = introductionSection?.querySelector(
        '[data-motion="intro-copy"]',
      );

      if (
        !introductionSection ||
        !introHeading ||
        !introImage ||
        !introCopy
      ) {
        return;
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: introductionSection,
            start: "top 78%",
            once: true,
          },
        })
        .fromTo(
          introImage,
          {
            clipPath: "inset(6% 0% 0% 0%)",
            scale: 1.015,
            y: 20,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "clipPath,transform",
          },
          0.14,
        );
    });

    /*
     * ------------------------------------------------------------
     * INTRODUCTION — MOBILE
     * ------------------------------------------------------------
     */

    media.add(INTRO_MOBILE_QUERY, () => {
      const introductionSection = root.querySelector(
        '[data-motion-section="introduction"]',
      );

      const introHeading = introductionSection?.querySelector(
        '[data-motion="intro-heading"]',
      );

      const introImage = introductionSection?.querySelector(
        '[data-motion="intro-image"]',
      );

      const introCopy = introductionSection?.querySelector(
        '[data-motion="intro-copy"]',
      );

      if (
        !introductionSection ||
        !introHeading ||
        !introImage ||
        !introCopy
      ) {
        return;
      }


      gsap.fromTo(
        introImage,
        {
          clipPath: "inset(5% 0% 0% 0%)",
          scale: 1.012,
          y: 16,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "clipPath,transform",

          scrollTrigger: {
            trigger: introImage,
            start: "top 88%",
            once: true,
          },
        },
      );

    });

    /*
     * ------------------------------------------------------------
     * HERO DEPTH
     * ------------------------------------------------------------
     *
     * Desktop fine-pointer only.
     *
     * hero-depth owns scroll transform.
     * hero-image owns entrance transform.
     *
     * They intentionally never write to the same transform.
     */

    media.add(HERO_DEPTH_QUERY, () => {
      const heroSection = root.querySelector(
        '[data-motion-section="hero"]',
      );
    
      const heroDepth = heroSection?.querySelector(
        '[data-motion="hero-depth"]',
      );
    
      if (!heroSection || !heroDepth) return;
    
      gsap.fromTo(
        heroDepth,
        {
          scale: 1.05,
          yPercent: -1.5,
        },
        {
          scale: 1.05,
          yPercent: 2.5,
          ease: "none",
    
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
          },
        },
      );
    }); 

    /*
     * ------------------------------------------------------------
     * BACKGROUND AMBIENT DRIFT
     * ------------------------------------------------------------
     *
     * Desktop fine-pointer only. The procedural filters remain static;
     * only the oversized decorative surface drifts with scroll.
     */

    media.add(BACKGROUND_AMBIENT_QUERY, () => {
      const backgroundSection = root.querySelector(
        '[data-motion-section="background"]',
      );

      const backgroundAmbient = backgroundSection?.querySelector(
        '[data-motion="background-ambient"]',
      );

      if (!backgroundSection || !backgroundAmbient) return;

      gsap.fromTo(
        backgroundAmbient,
        {
          xPercent: -1,
          yPercent: -2,
        },
        {
          xPercent: 1,
          yPercent: 2,
          ease: "none",

          scrollTrigger: {
            trigger: backgroundSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        },
      );
    });

    /*
     * ------------------------------------------------------------
     * SERVICES BACKGROUND DEPTH
     * ------------------------------------------------------------
     *
     * Desktop fine-pointer only.
     */

    media.add(SERVICES_DEPTH_QUERY, () => {
      const servicesSection = root.querySelector(
        '[data-motion-section="services"]',
      );
    
      const servicesBackground = servicesSection?.querySelector(
        '[data-motion="services-bg"]',
      );
    
      if (!servicesSection || !servicesBackground) return;
    
      gsap.fromTo(
        servicesBackground,
        {
          scale: 1.1,
          yPercent: -4,
        },
        {
          scale: 1.1,
          yPercent: 4,
          ease: "none",
    
          scrollTrigger: {
            trigger: servicesSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.75,
          },
        },
      );
    });

    /*
     * ------------------------------------------------------------
     * REFRESH
     * ------------------------------------------------------------
     */

    const refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      stopTypography();
      media.revert();
    };
  }, []);

  return null;
}
