import { SplitText } from "gsap/SplitText";
import { gsap, ScrollTrigger } from "./gsap";

if (typeof window !== "undefined") gsap.registerPlugin(SplitText);

// Parent timelines animate a numeric playhead, never disposable SplitText lines.
// autoSplit can therefore replace its own tween without invalidating a chapter.
export function editorialLines(element, { display = true } = {}) {
  const playhead = { progress: 0 };
  let linesTween;
  let duration;
  const split = SplitText.create(element, {
    type: "lines", mask: "lines", tag: "span", aria: "auto", autoSplit: true,
    onSplit(self) {
      linesTween?.kill();
      self.lines.forEach((line) => { line.dataset.editorialLine = ""; });
      self.masks.forEach((mask) => {
        mask.dataset.editorialMask = "";
        // Keep tight leading intact while allowing room for glyph descenders.
        mask.classList.add("py-[0.12em]", "-my-[0.12em]");
      });
      linesTween = gsap.fromTo(self.lines, {
        yPercent: display ? 100 : 0, y: display ? 0 : 16, opacity: 0,
      }, {
        yPercent: 0, y: 0, opacity: 1, duration: display ? 0.98 : 0.72,
        stagger: display ? 0.12 : 0.075, ease: "power3.out", paused: true,
      });
      duration ??= linesTween.duration();
      linesTween.duration(duration).progress(playhead.progress);
      // The numeric playhead owns restoration; SplitText must not restore stale tween time.
    },
  });
  const tween = gsap.fromTo(playhead, { progress: 0 }, {
    progress: 1, duration: linesTween.duration(), ease: "none",
    onUpdate: () => linesTween.progress(playhead.progress),
  });
  return {
    tween,
    progress(value) { playhead.progress = value; linesTween.progress(value); },
    revert() { tween.kill(); linesTween.kill(); if (split.isSplit) split.revert(); },
  };
}

// Non-pinned page sections share a cadence, not a blanket animation on all text.
export function editorialRoute(root, groups) {
  if (!root) return () => {};
  const media = gsap.matchMedia();
  const seen = new WeakSet();
  let disposed = false;
  let refreshFrame = 0;
  const start = () => {
    if (disposed) return;
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const reveals = [];
      groups.forEach((group) => {
        const sections = group.scope ? [...root.querySelectorAll(group.scope)] : [root];
        sections.forEach((section) => {
          const heading = section.querySelector(group.heading);
          if (!heading || seen.has(heading)) return;
          // A route restored below a heading should not hide it to replay a reveal.
          if (section.getBoundingClientRect().bottom < 0) { seen.add(heading); return; }
          const reveal = editorialLines(heading, { display: group.display !== false });
          reveals.push(reveal);
          const timeline = gsap.timeline({
            onStart: () => seen.add(heading),
            ...(group.hero ? {} : { scrollTrigger: {
              trigger: section, start: "top 85%", once: true,
            } }),
          });
          timeline.add(reveal.tween, group.hero ? 0.12 : 0);
          const support = group.support ? [...section.querySelectorAll(group.support)] : [];
          if (support.length) timeline.fromTo(support, { opacity: 0, y: 12 }, {
            opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
            clearProps: "opacity,transform",
          }, group.hero ? 0.48 : 0.3);
          const actions = group.action ? [...section.querySelectorAll(group.action)] : [];
          if (actions.length) timeline.fromTo(actions, { opacity: 0.55, y: 8 }, {
            opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
            clearProps: "opacity,transform",
          }, group.hero ? 0.52 : 0.36);
          const eyebrow = group.eyebrow ? section.querySelector(group.eyebrow) : null;
          if (eyebrow) timeline.fromTo(eyebrow, { opacity: 0.4, y: 6 }, {
            opacity: 1, y: 0, duration: 0.45, ease: "power2.out",
            clearProps: "opacity,transform",
          }, 0);
        });
      });
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        if (refreshFrame) cancelAnimationFrame(refreshFrame);
        reveals.forEach((reveal) => reveal.revert());
      };
    });
  };
  if (document.fonts.status === "loaded") start();
  else document.fonts.ready.then(start);
  return () => { disposed = true; media.revert(); };
}
