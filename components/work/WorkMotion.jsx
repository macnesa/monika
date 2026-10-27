"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import { editorialLines, editorialRoute } from "@/lib/motion/editorial";

// Interaction contract: Figma's "Interaction notes (for dev)".
// No Pinterest-style image expansion. The /work route owns one pinned timeline.
const ENHANCED =
  "(min-width: 1024px) and (min-height: 800px) and (prefers-reduced-motion: no-preference)";
const DEFAULT_SIZE = "text-[clamp(3.75rem,9vw,10rem)]";
const PREVIEW_SIZE = "text-[clamp(2.4rem,6.8vw,7.5rem)]";
const EASE = { enter: "power3.out", hover: "power2.out", scroll: "sine.inOut" };

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function WorkMotion({ children, projects }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const one = (selector) => root.querySelector(selector);
    const all = (selector) => [...root.querySelectorAll(selector)];
    const total = String(projects.length).padStart(2, "0");
    const tiles = all("[data-scatter-tile]");
    const thumbs = tiles.map((tile) => tile.querySelector("[data-scatter-depth]"));
    const heading = one("#work-heading");
    const defaultTitle = one("[data-work-heading-default]");
    const previewTitle = one("[data-work-heading-preview]");
    const count = one("[data-work-count]");
    const caption = one("[data-work-context-copy]");
    const cursor = one("[data-work-cursor]");
    const dialog = one("[data-work-gallery]");
    const galleryImage = one("[data-gallery-image]");
    if (
      !tiles.length || !heading || !defaultTitle || !previewTitle ||
      !count || !caption || !cursor || !dialog || !galleryImage
    ) return;

    const galleryTitle = one("[data-gallery-title]");
    const galleryCount = one("[data-gallery-count]");
    const galleryCredit = one("[data-gallery-credit]");
    let hoveredId = null;
    let gallery = null;
    let touchStart = null;
    let photoTween = null;
    let requestId = 0;
    let scrollLocked = false;
    let ownsOverflow = false;
    const html = document.documentElement;

    const setScrollLock = (locked) => {
      if (scrollLocked === locked) return;
      scrollLocked = locked;
      if (locked) {
        ownsOverflow = !html.classList.contains("overflow-hidden");
        if (ownsOverflow) html.classList.add("overflow-hidden");
      } else {
        if (ownsOverflow) html.classList.remove("overflow-hidden");
        ownsOverflow = false;
      }
      window.dispatchEvent(new CustomEvent("omnikaflow:work-scroll-lock", {
        detail: { locked },
      }));
    };

    // The scatter stays on the site's ivory background; no tile shadows/scrims.
    const previousTileStyles = tiles.map((tile) => ({
      tile, background: tile.style.backgroundColor, shadow: tile.style.boxShadow,
    }));
    tiles.forEach((tile) => {
      tile.style.backgroundColor = "transparent";
      tile.style.boxShadow = "none";
    });

    let onScrollAway = () => {};
    const controller = createWorkController({
      root, projects, tiles, thumbs, onScrollAway: () => onScrollAway(),
    });

    const identify = (id, isPointer = false, immediate = false) => {
      const project = projects.find((item) => item.id === id) ?? null;
      const next = project?.id ?? null;
      const duration = immediate || reducedMotion() ? 0 : 0.35;
      gsap.to(cursor, {
        autoAlpha: project && isPointer && controller.enhanced() ? 1 : 0,
        duration: duration * 0.65, overwrite: "auto",
      });
      if (hoveredId === next) return;
      hoveredId = next;

      // Exact Figma behavior: other projects fall to 12% opacity on hover.
      // Dim the image inside the tile, never its background or a dark overlay.
      gsap.to(thumbs, {
        opacity: (index) => !project || tiles[index].dataset.project === project.id ? 1 : 0.12,
        duration, ease: EASE.hover, overwrite: "auto",
      });

      heading.classList.toggle(DEFAULT_SIZE, !project);
      heading.classList.toggle(PREVIEW_SIZE, Boolean(project));
      if (project) {
        previewTitle.textContent = project.title;
        defaultTitle.hidden = true;
        previewTitle.hidden = false;
      } else {
        defaultTitle.hidden = false;
        previewTitle.hidden = true;
      }
      count.textContent = `(${project?.number ?? total})`;
      caption.hidden = !project;
      if (project) {
        caption.querySelector("[data-work-context-number]").textContent = `${project.number} / ${total}`;
        caption.querySelector("[data-work-context-title]").textContent = project.title;
        caption.querySelector("[data-work-context-scope]").textContent = ` — ${project.scope}`;
        gsap.fromTo(caption, { y: 8, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: Math.max(0.01, duration),
          ease: EASE.enter, overwrite: "auto",
        });
      }
    };

    onScrollAway = () => {
      if (hoveredId) identify(null, false, true);
    };

    const renderPhoto = (offset = 0) => {
      if (!gallery) return;
      const photos = gallery.project.images;
      gallery.index = (gallery.index + offset + photos.length) % photos.length;
      const photo = photos[gallery.index];
      const token = ++requestId;
      galleryCount.textContent = `${String(gallery.index + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;
      galleryCredit.textContent = photo.supplied ? "Photograph supplied for MINDZERO." : `Temporary Unsplash imagery — not project photographs. Photo: ${photo.credit} / Unsplash.`;
      galleryImage.alt = photo.supplied ? photo.alt : `Placeholder photograph: ${photo.alt}`;
      galleryImage.dataset.fallbackSrc = photo.downloadUrl;
      delete galleryImage.dataset.fallback;
      photoTween?.kill();

      const commit = (src) => {
        if (token !== requestId || !gallery) return;
        const duration = reducedMotion() || offset === 0 ? 0 : 0.2;
        photoTween = gsap.to(galleryImage, {
          autoAlpha: 0, duration, ease: "sine.in", overwrite: "auto",
          onComplete: () => {
            if (token !== requestId || !gallery) return;
            galleryImage.src = src;
            gsap.to(galleryImage, {
              autoAlpha: 1, duration: duration ? 0.38 : 0,
              ease: EASE.enter, overwrite: "auto",
            });
          },
        });
      };
      // Decode before swapping, so gallery navigation does not show a blank frame.
      const probe = new Image();
      probe.src = photo.src;
      if (probe.decode) {
        probe.decode().then(() => commit(photo.src), () => commit(photo.downloadUrl));
      } else {
        commit(photo.src);
      }
    };

    const closeGallery = (restoreFocus = true) => {
      if (!gallery) return;
      const trigger = gallery.trigger;
      gallery = null;
      touchStart = null;
      ++requestId;
      photoTween?.kill();
      if (dialog.open) dialog.close();
      setScrollLock(false);
      if (restoreFocus && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
    const openGallery = (index, trigger) => {
      if (gallery || !projects[index]) return;
      gallery = { project: projects[index], index: 0, trigger };
      dialog.setAttribute("aria-label", `${gallery.project.title} image gallery`);
      galleryTitle.textContent = gallery.project.title;
      setScrollLock(true);
      try {
        gsap.set(galleryImage, { autoAlpha: 0 });
        dialog.showModal();
        renderPhoto();
        dialog.querySelector('[data-gallery-action="close"]')?.focus();
      } catch {
        closeGallery(false);
      }
    };

    const click = (event) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target;
      const galleryAction = element.closest("[data-gallery-action]")?.dataset.galleryAction;
      if (galleryAction) {
        if (galleryAction === "close") closeGallery();
        else renderPhoto(galleryAction === "next" ? 1 : -1);
        return;
      }
      const discover = element.closest("[data-work-discover]");
      if (discover) {
        openGallery(Number(discover.dataset.workDiscover), discover);
        return;
      }
      const cue = element.closest("[data-work-scroll-cue]");
      if (cue && controller.enhanced()) {
        event.preventDefault();
        identify(null, false, true);
        controller.explore();
        return;
      }
      const tile = element.closest("[data-scatter-tile]");
      const selection = element.closest("[data-work-select]");
      if (!tile && !selection) return;
      event.preventDefault();
      identify(null, false, true);
      controller.select(tile ? tile.dataset.project : selection.dataset.workSelect);
    };

    const enter = (event) => {
      if (!(event.target instanceof Element)) return;
      const tile = event.target.closest("[data-scatter-tile]");
      if (tile && !(event.relatedTarget instanceof Node && tile.contains(event.relatedTarget))) {
        identify(tile.dataset.project, event.type === "pointerover");
      }
    };
    const leave = (event) => {
      if (!(event.target instanceof Element)) return;
      const tile = event.target.closest("[data-scatter-tile]");
      if (tile && !(event.relatedTarget instanceof Node && tile.contains(event.relatedTarget))) {
        identify(null);
      }
    };
    const imageError = (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement) || !img.dataset.fallbackSrc || img.dataset.fallback) return;
      img.dataset.fallback = "true";
      img.src = img.dataset.fallbackSrc;
    };
    const cancel = (event) => { event.preventDefault(); closeGallery(); };
    const keydown = (event) => {
      if (!gallery || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
      event.preventDefault();
      renderPhoto(event.key === "ArrowRight" ? 1 : -1);
    };
    const pointerDown = (event) => {
      if (event.pointerType === "touch" && !(event.target instanceof Element && event.target.closest("button"))) {
        touchStart = { x: event.clientX, y: event.clientY };
      }
    };
    const pointerUp = (event) => {
      if (!touchStart) return;
      const dx = event.clientX - touchStart.x;
      const dy = event.clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        renderPhoto(dx < 0 ? 1 : -1);
      }
    };
    const pointerCancel = () => { touchStart = null; };
    const listeners = [
      [root, "click", click], [root, "pointerover", enter],
      [root, "pointerout", leave], [root, "focusin", enter],
      [root, "focusout", leave], [root, "error", imageError, true],
      [dialog, "cancel", cancel], [dialog, "keydown", keydown],
      [dialog, "pointerdown", pointerDown], [dialog, "pointerup", pointerUp],
      [dialog, "pointercancel", pointerCancel],
    ];
    listeners.forEach(([node, type, handler, capture]) => node.addEventListener(type, handler, capture));

    return () => {
      listeners.forEach(([node, type, handler, capture]) => node.removeEventListener(type, handler, capture));
      closeGallery(false);
      controller.destroy();
      gsap.killTweensOf([...tiles, ...thumbs, defaultTitle, previewTitle, caption, cursor, galleryImage]);
      previousTileStyles.forEach(({ tile, background, shadow }) => {
        tile.style.backgroundColor = background;
        tile.style.boxShadow = shadow;
      });
      setScrollLock(false);
      hoveredId = null;
      heading.classList.add(DEFAULT_SIZE);
      heading.classList.remove(PREVIEW_SIZE);
      defaultTitle.hidden = false;
      previewTitle.hidden = true;
      previewTitle.textContent = "";
      caption.hidden = true;
      count.textContent = `(${total})`;
    };
  }, [projects]);

  return <div ref={rootRef} className="group/work relative">{children}</div>;
}

function createWorkController({ root, projects, tiles, thumbs, onScrollAway }) {
  const stage = root.querySelector("[data-work-pin]");
  const scatter = root.querySelector("[data-work-scatter]");
  const copy = root.querySelector("[data-scatter-copy]");
  const chapters = root.querySelector("[data-work-chapters]");
  const panels = [...root.querySelectorAll("[data-project-chapter]")];
  const titles = [...root.querySelectorAll("[data-rail-title]")];
  const rail = root.querySelector("[data-title-rail]");
  const cursor = root.querySelector("[data-work-cursor]");
  const header = document.querySelector("[data-site-header]");
  const contact = root.nextElementSibling;
  const media = gsap.matchMedia();
  let enhanced = null;
  let disposed = false;
  let headerFrame = 0;

  const updateNormalHeader = () => {
    headerFrame = 0;
    if (!header || disposed || enhanced) return;
    const probe = Math.min(150, window.innerHeight * 0.17);
    const inDarkChapter = panels.some((panel) => {
      const rect = panel.getBoundingClientRect();
      return rect.top <= probe && rect.bottom > probe;
    });
    header.dataset.workTheme = inDarkChapter ? "dark" : "light";
    if (contact && contact.getBoundingClientRect().top <= probe) header.dataset.workEnding = "true";
    else delete header.dataset.workEnding;
  };
  const scheduleHeader = () => {
    if (!headerFrame) headerFrame = window.requestAnimationFrame(updateNormalHeader);
  };
  window.addEventListener("scroll", scheduleHeader, { passive: true });
  window.addEventListener("resize", scheduleHeader);

  const normalSelect = (id) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index < 0) return;
    panels[index].scrollIntoView({
      behavior: reducedMotion() ? "instant" : "smooth", block: "start",
    });
  };

  const normalTypography = () => editorialRoute(root, [
    { scope: "[data-project-chapter]", heading: "[data-project-headline]", support: "[data-project-narrative]" },
  ]);
  const stopContact = editorialRoute(contact, [{ heading: "h2", action: "a", display: false }]);
  const start = () => {
    if (disposed) return;
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(root.querySelectorAll("[data-work-word]"), { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: EASE.enter,
        clearProps: "opacity,transform",
      });
    });
    media.add("(max-width: 1023px), (max-height: 799px)", normalTypography);
    media.add(ENHANCED, () => {
      if (disposed) return;
      root.dataset.enhanced = "true";
      // Avoid cutting off Infinit's long narrative on short desktop windows.
      const fits = panels.every((panel) => panel.scrollHeight <= panel.clientHeight + 3);
      if (!fits) {
        delete root.dataset.enhanced;
        scheduleHeader();
        return normalTypography();
      }
      enhanced = createEnhanced({
        root, stage, scatter, copy, tiles, thumbs, chapters,
        panels, titles, rail, cursor, header, projects, onScrollAway,
      });
      return () => {
        enhanced?.destroy();
        enhanced = null;
        delete root.dataset.enhanced;
        scheduleHeader();
      };
    });
  };
  if (document.fonts.status === "loaded") start();
  else document.fonts.ready.then(start);

  scheduleHeader();
  return {
    enhanced: () => Boolean(enhanced),
    select(id) { if (enhanced) enhanced.select(id); else normalSelect(id); },
    explore() { enhanced?.explore(); },
    destroy() {
      disposed = true;
      media.revert();
      stopContact();
      window.removeEventListener("scroll", scheduleHeader);
      window.removeEventListener("resize", scheduleHeader);
      if (headerFrame) window.cancelAnimationFrame(headerFrame);
      if (header) {
        delete header.dataset.workTheme;
        delete header.dataset.workEnding;
      }
    },
  };
}

function createEnhanced({
  root, stage, scatter, copy, tiles, thumbs, chapters, panels,
  titles, rail, cursor, header, projects, onScrollAway,
}) {
  const INTRO = 1.8;
  const HOLD = 2.3;
  const scrollUnits = INTRO + HOLD * projects.length;
  const fills = panels.map((panel) => panel.querySelector("[data-work-progress-fill]"));
  const depths = thumbs;
  const reveals = panels.map((panel) => editorialLines(panel.querySelector("[data-project-headline]")));
  let active = -2;
  let disposed = false;
  let pendingFocus = null;
  let fontFrame = 0;
  let didExitScatter = false;

  const semanticIndex = (time) => {
    if (time < INTRO - 0.22) return -1;
    let index = 0;
    for (let i = 1; i < projects.length; i++) {
      if (time >= INTRO + i * HOLD + 0.4) index = i;
    }
    return index;
  };
  const setSemantics = (time) => {
    const index = semanticIndex(time);
    if (index !== active) {
      active = index;
      panels.forEach((panel, i) => {
        panel.inert = i !== index;
        panel.setAttribute("aria-hidden", String(i !== index));
      });
      scatter.inert = index !== -1;
      if (header) header.dataset.workTheme = index === -1 ? "light" : "dark";
    }
    if (pendingFocus && index === pendingFocus.index && Math.abs(window.scrollY - pendingFocus.y) < 14) {
      panels[index].querySelector("h2")?.focus({ preventScroll: true });
      pendingFocus = null;
    }
  };

  const railX = (index) => stage.clientWidth * 0.05 - titles[index].offsetLeft;
  const outward = (tile) => {
    const b = tile.getBoundingClientRect();
    const s = scatter.getBoundingClientRect();
    const dx = (b.left + b.width / 2 - (s.left + s.width / 2)) / Math.max(1, s.width / 2);
    const dy = (b.top + b.height / 2 - (s.top + s.height / 2)) / Math.max(1, s.height / 2);
    return { x: dx * Math.min(s.width * 0.32, 390), y: dy * Math.min(s.height * 0.32, 270) };
  };

  // All 15 images remain real photo tiles: no shared fullscreen expansion layer.
  gsap.set(chapters, { autoAlpha: 0 });
  gsap.set(panels, { autoAlpha: 0 });
  gsap.set(panels[0], { autoAlpha: 1 });
  gsap.set(titles, { opacity: 0.28 });
  gsap.set(titles[0], { opacity: 1 });
  gsap.set(fills.filter(Boolean), { scaleX: 0, transformOrigin: "left center" });

  // Figma: fade + scale 0.92 → 1; 40ms stagger; pre-shuffled data-order.
  const ordered = [...thumbs].sort((a, b) =>
    Number(a.parentElement.dataset.order) - Number(b.parentElement.dataset.order));
  const entrance = gsap.from(ordered, {
    opacity: 0, scale: 0.92, duration: 0.86,
    stagger: 0.04, ease: EASE.enter, clearProps: "opacity,scale",
  });

  const timeline = gsap.timeline({
    onUpdate() { setSemantics(this.time()); },
    scrollTrigger: {
      trigger: stage, start: "top top",
      end: () => `+=${Math.round(window.innerHeight * 8.3 * scrollUnits / (INTRO + HOLD * 5))}`,
      pin: true, scrub: 0.45, anticipatePin: 1, invalidateOnRefresh: true,
      onRefresh(self) {
        // ScrollTrigger invalidates child startAt values during resize.
        // Restore the current chapter's line playheads after that invalidation.
        const time = self.progress * self.animation.duration();
        reveals.forEach((reveal, index) => {
          const start = index ? INTRO + index * HOLD + 0.15 : 1.6;
          reveal.progress(gsap.utils.clamp(0, 1, (time - start) / reveal.tween.duration()));
        });
      },
      onUpdate(self) {
        if (self.progress > 0.008 && !didExitScatter) {
          didExitScatter = true;
          onScrollAway();
          // Reset parallax once, not on every frame.
          resetParallax();
        } else if (self.progress <= 0.008) didExitScatter = false;
      },
      onLeave() {
        if (header) header.dataset.workEnding = "true";
      },
      onEnterBack() {
        if (header) delete header.dataset.workEnding;
      },
    },
  });

  timeline
    .to(tiles, {
      x: (_, tile) => outward(tile).x,
      y: (_, tile) => outward(tile).y,
      opacity: 0,
      scale: 0.95,
      duration: 1.22,
      ease: EASE.scroll,
      stagger: { each: 0.016, from: "center" },
    }, 0.12)
    .to(copy, { autoAlpha: 0, y: -12, duration: 0.55, ease: "sine.in" }, 1.0)
    .to(scatter, { autoAlpha: 0, duration: 0.25 }, 1.38)
    .to(chapters, { autoAlpha: 1, duration: 0.5, ease: "sine.out" }, 1.3)
    .fromTo(panels[0].querySelector("[data-project-details]"),
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.78, ease: EASE.enter }, 1.55);

  projects.forEach((_, index) => {
    const start = INTRO + index * HOLD;
    if (fills[index]) timeline.to(fills[index], {
      scaleX: 1, duration: HOLD, ease: "none",
    }, start);
    const textStart = index ? start + 0.15 : 1.6;
    timeline.add(reveals[index].tween, textStart);
    // The parent already moves 24px. Narratives only fade here.
    const narrative = panels[index].querySelectorAll("[data-project-narrative]");
    if (narrative.length) timeline.fromTo(narrative,
      { opacity: 0 }, { opacity: 1, duration: 0.65, ease: "power2.out" }, textStart + 0.36);
    if (!index) return;
    timeline
      .to(panels[index - 1], { autoAlpha: 0, duration: 0.8, ease: EASE.scroll }, start)
      .fromTo(panels[index], { autoAlpha: 0 }, {
        autoAlpha: 1, duration: 0.8, ease: EASE.scroll,
      }, start)
      .fromTo(panels[index].querySelector("[data-project-details]"),
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.75, ease: EASE.enter }, start + 0.12)
      .to(rail, { x: () => railX(index), duration: 0.95, ease: EASE.scroll }, start)
      .to(titles[index - 1], { opacity: 0.28, duration: 0.75 }, start)
      .to(titles[index], { opacity: 1, duration: 0.75 }, start + 0.07);
  });
  // Preserve the last chapter's reading time and completion of its progress.
  timeline.to({}, { duration: 0.01 }, scrollUnits);
  const trigger = timeline.scrollTrigger;
  setSemantics(timeline.time());

  // Small tiles move the most, with Figma depth range 0.02–0.08.
  const maxArea = Math.max(...tiles.map((tile) => {
    const box = tile.getBoundingClientRect();
    return box.width * box.height;
  }), 1);
  const parallax = depths.map((element, index) => {
    const rect = tiles[index].getBoundingClientRect();
    const fraction = Math.min(1, rect.width * rect.height / maxArea);
    return {
      depth: 0.02 + 0.06 * (1 - fraction),
      x: gsap.quickTo(element, "x", { duration: 0.75, ease: EASE.enter }),
      y: gsap.quickTo(element, "y", { duration: 0.75, ease: EASE.enter }),
    };
  });
  const cursorX = gsap.quickTo(cursor, "x", { duration: 0.2, ease: EASE.hover });
  const cursorY = gsap.quickTo(cursor, "y", { duration: 0.2, ease: EASE.hover });
  function resetParallax() {
    parallax.forEach((item) => { item.x(0); item.y(0); });
  }
  const move = (event) => {
    if (disposed || trigger.progress > 0.008 || event.pointerType !== "mouse") return;
    const box = scatter.getBoundingClientRect();
    const nx = ((event.clientX - box.left) / box.width - 0.5) * 2;
    const ny = ((event.clientY - box.top) / box.height - 0.5) * 2;
    const maxX = Math.min(560, box.width / 2);
    const maxY = Math.min(380, box.height / 2);
    parallax.forEach((item) => {
      item.x(nx * maxX * item.depth);
      item.y(ny * maxY * item.depth);
    });
    cursorX(event.clientX + 28);
    cursorY(event.clientY + 26);
  };
  scatter.addEventListener("pointermove", move);
  scatter.addEventListener("pointerleave", resetParallax);

  const scrollAt = (time) =>
    trigger.start + (time / timeline.duration()) * (trigger.end - trigger.start);
  const select = (id, immediate = false) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index < 0 || disposed) return;
    const target = scrollAt(INTRO + index * HOLD + 1.0);
    pendingFocus = { index, y: target };
    window.scrollTo({ top: target, behavior: immediate ? "instant" : "smooth" });
  };
  const explore = () => {
    if (disposed) return;
    window.scrollTo({ top: scrollAt(INTRO + 0.35), behavior: "smooth" });
  };

  const followHash = () => {
    const project = projects.find((item) =>
      window.location.hash === `#project-${item.id}` || window.location.hash === `#title-${item.id}`);
    if (project) select(project.id, true);
  };
  window.addEventListener("hashchange", followHash);

  document.fonts?.ready?.then(() => {
    if (disposed) return;
    fontFrame = window.requestAnimationFrame(() => {
      fontFrame = 0;
      if (!disposed) { ScrollTrigger.refresh(); followHash(); }
    });
  });

  return {
    select, explore,
    destroy() {
      disposed = true;
      if (fontFrame) window.cancelAnimationFrame(fontFrame);
      window.removeEventListener("hashchange", followHash);
      entrance.kill();
      reveals.forEach((reveal) => reveal.revert());
      scatter.removeEventListener("pointermove", move);
      scatter.removeEventListener("pointerleave", resetParallax);
      gsap.killTweensOf([...tiles, ...thumbs, cursor]);
      panels.forEach((panel) => {
        panel.inert = false;
        panel.removeAttribute("aria-hidden");
      });
      scatter.inert = false;
      if (header) delete header.dataset.workEnding;
    },
  };
}
