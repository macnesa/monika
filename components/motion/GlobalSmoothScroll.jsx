"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { gsap, ScrollTrigger } from "@/lib/motion/gsap";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function GlobalSmoothScroll() {
  useEffect(() => {
    const finePointer = window.matchMedia(FINE_POINTER_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

    let lenis;
    let unsubscribeScroll;

    const tick = (time) => {
      lenis?.raf(time * 1000);
    };

    const stop = () => {
      if (!lenis) return;

      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);

      unsubscribeScroll?.();
      unsubscribeScroll = undefined;

      lenis.destroy();
      lenis = undefined;
    };

    const start = () => {
      if (
        lenis ||
        reducedMotion.matches ||
        !finePointer.matches
      ) {
        return;
      }

      lenis = new Lenis({
        anchors: true,
        autoRaf: false,
        lerp: 0.1,
        respectReducedMotion: true,
        smoothWheel: true,
        syncTouch: false,
      });

      unsubscribeScroll = lenis.on(
        "scroll",
        ScrollTrigger.update,
      );

      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };

    const syncRuntime = () => {
      stop();
      start();
    };

    finePointer.addEventListener("change", syncRuntime);
    reducedMotion.addEventListener(
      "change",
      syncRuntime,
    );

    start();

    return () => {
      finePointer.removeEventListener(
        "change",
        syncRuntime,
      );

      reducedMotion.removeEventListener(
        "change",
        syncRuntime,
      );

      stop();
    };
  }, []);

  return null;
}
