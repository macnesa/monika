"use client";

import { useLayoutEffect } from "react";

import { gsap, ScrollTrigger } from "@/lib/motion/gsap";

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
    const media = gsap.matchMedia();

    /*
     * ------------------------------------------------------------
     * GLOBAL MOTION
     * ------------------------------------------------------------
     */

    media.add(MOTION_QUERY, () => {
      /*
       * HERO — entrance
       */

      const heroSection = document.querySelector(
        '[data-motion-section="hero"]',
      );

      const heroImage = heroSection?.querySelector(
        '[data-motion="hero-image"]',
      );

      const heroEyebrow = heroSection?.querySelector(
        '[data-motion="hero-eyebrow"]',
      );

      const heroTitle = heroSection?.querySelector(
        '[data-motion="hero-title"]',
      );

      const heroCopy = heroSection?.querySelector(
        '[data-motion="hero-copy"]',
      );

      const heroCta = heroSection?.querySelector(
        '[data-motion="hero-cta"]',
      );

      if (
        heroImage &&
        heroEyebrow &&
        heroTitle &&
        heroCopy &&
        heroCta
      ) {
        gsap
          .timeline()
          .fromTo(
            heroImage,
            {
              scale: 1.025,
            },
            {
              scale: 1,
              duration: 1.6,
              ease: "power2.out",
              clearProps: "transform",
            },
            0,
          )
          .fromTo(
            heroEyebrow,
            {
              autoAlpha: 0,
              y: 11,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            0.1,
          )
          .fromTo(
            heroTitle,
            {
              autoAlpha: 0,
              y: 22,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            },
            0.18,
          )
          .fromTo(
            heroCopy,
            {
              autoAlpha: 0,
              y: 14,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            },
            0.36,
          )
          .fromTo(
            heroCta,
            {
              autoAlpha: 0,
              y: 12,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              clearProps: "opacity,visibility,transform",
            },
            0.46,
          );
      }

      /*
       * BACKGROUND
       *
       * Quiet evidence-led motion.
       */

      gsap.utils
        .toArray('[data-motion="career-record"]')
        .forEach((record) => {
          gsap.fromTo(
            record,
            {
              autoAlpha: 0,
              y: 10,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",

              scrollTrigger: {
                trigger: record,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

      /*
       * SERVICES
       */

      const servicesSection = document.querySelector(
        '[data-motion-section="services"]',
      );

      const servicesIntro = servicesSection?.querySelector(
        '[data-motion="services-intro"]',
      );

      const serviceRecords = servicesSection
        ? gsap.utils.toArray(
            servicesSection.querySelectorAll(
              '[data-motion="service-record"]',
            ),
          )
        : [];

      const servicesCta = servicesSection?.querySelector(
        '[data-motion="services-cta"]',
      );

      if (servicesSection && servicesIntro) {
        gsap.fromTo(
          servicesIntro,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",

            scrollTrigger: {
              trigger: servicesSection,
              start: "top 78%",
              once: true,
            },
          },
        );
      }

      serviceRecords.forEach((record) => {
        gsap.fromTo(
          record,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",

            scrollTrigger: {
              trigger: record,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      if (servicesCta) {
        gsap.fromTo(
          servicesCta,
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",

            scrollTrigger: {
              trigger: servicesCta,
              start: "top 90%",
              once: true,
            },
          },
        );
      }

      /*
       * CONTACT
       *
       * Almost still.
       */

      const contactSection = document.querySelector(
        '[data-motion-section="contact"]',
      );

      const contactPrimary = contactSection?.querySelector(
        '[data-motion="contact-primary"]',
      );

      const contactSecondary = contactSection?.querySelector(
        '[data-motion="contact-secondary"]',
      );

      if (
        contactSection &&
        contactPrimary &&
        contactSecondary
      ) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: contactSection,
              start: "top 84%",
              once: true,
            },
          })
          .fromTo(
            contactPrimary,
            {
              autoAlpha: 0,
              y: 8,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.58,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            0,
          )
          .fromTo(
            contactSecondary,
            {
              autoAlpha: 0,
              y: 6,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.52,
              ease: "power2.out",
              clearProps: "opacity,visibility,transform",
            },
            0.1,
          );
      }
    });

    /*
     * ------------------------------------------------------------
     * INTRODUCTION — DESKTOP / TABLET
     * ------------------------------------------------------------
     */

    media.add(INTRO_DESKTOP_QUERY, () => {
      const introductionSection = document.querySelector(
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
          introHeading,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
          },
          0,
        )
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
        )
        .fromTo(
          introCopy,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "opacity,visibility,transform",
          },
          0.34,
        );
    });

    /*
     * ------------------------------------------------------------
     * INTRODUCTION — MOBILE
     * ------------------------------------------------------------
     */

    media.add(INTRO_MOBILE_QUERY, () => {
      const introductionSection = document.querySelector(
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
        introHeading,
        {
          autoAlpha: 0,
          y: 14,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.58,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",

          scrollTrigger: {
            trigger: introHeading,
            start: "top 86%",
            once: true,
          },
        },
      );

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

      gsap.fromTo(
        introCopy,
        {
          autoAlpha: 0,
          y: 12,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",

          scrollTrigger: {
            trigger: introCopy,
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
      const heroSection = document.querySelector(
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
      const backgroundSection = document.querySelector(
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
      const servicesSection = document.querySelector(
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
      media.revert();
    };
  }, []);

  return null;
}
