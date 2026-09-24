# Task Packet — TASK-003 / Complete Book Page — Figma Baseline

Task ID: TASK-003  
Packet version: v1  
Packet profile: STANDARD  
Task status: NOT_STARTED  
Operating mode: CLIENT_PROJECT  
Task type: IMPLEMENTATION  
Secondary route: VISUAL_EXPERIENCE  
Task owner: Project Owner  
Executor: Codex / authorized coding agent  
Client/workspace: Monika / Omnikaflow  
Created / last revised: 2026-09-24

## Project Owner direction — #SIKAP LOCK for Page 3

Build ONLY PAGE 3 — `/book`.

For this task:

- follow the existing Figma Booking page;
- preserve its current visual language;
- preserve the supplied wording;
- get the page complete first;
- do not redesign it;
- do not perform browser/visual audit;
- do not invent a booking provider, booking URL, or integration.

Visual redesign and final booking integration can happen later as separate authorized tasks.

This TASK-003 packet is the active authority for Page 3.

---

# 1. Objective and boundary

## Objective

Implement the complete `/book` page from Header through Footer using:

1. the supplied Booking Figma screenshot under `references/book/`;
2. the exact source wording contained in this packet;
3. existing Page-1 and Page-2 implementation only for shared Omnikaflow Header/Footer cues where useful.

The result should be:

- route-complete;
- content-complete;
- structurally faithful to the Figma;
- responsive;
- technically clean;
- Tailwind-only for task-specific styling;
- static-image friendly with no Next/Vercel Image Optimization.

## Non-goals

Do NOT:

- redesign the Booking page;
- change Homepage or Services content/design;
- implement `/work`;
- invent or connect a booking provider without an exact authorized provider/URL;
- add a form backend;
- add analytics;
- add motion;
- install dependencies;
- perform browser audit;
- deploy.

## Final decision owner

Project Owner.

---

# 2. Required sources

Read in this order:

1. `AGENTS.md`
2. `tasks/003_BOOK.md`
3. relevant `/book` context in `MONIKA_PROJECT_KNOWLEDGE.md`
4. `references/book/figma-book-01.png`
5. current `app/page.js` and `app/services/page.js` only as needed for shared brand/header/footer consistency
6. current `app/layout.js`
7. current `app/globals.css`
8. `package.json`
9. existing `public/images/**`
10. relevant local Next.js 16.3.6 documentation under `node_modules/next/dist/docs/`

Inspect the Booking screenshot before coding.

The screenshot is the visual authority for Page 3.

---

# 3. Authorized repository scope

## Create

- `app/book/page.js`

## May modify only if strictly required

- `app/layout.js` only if a shared font already required by the Figma baseline needs to be exposed globally
- existing shared component files only if they already exist and reuse does not change Page 1 or Page 2 behavior

## Do NOT modify

- `app/page.js` unless a truly necessary shared-component import adjustment is required and Page 1 remains unchanged
- `app/services/page.js` unless a truly necessary shared-component import adjustment is required and Page 2 remains unchanged
- `app/work/**`
- unrelated project files
- package files unless a concrete existing build issue requires it; dependency installation is not authorized

Prefer implementing Page 3 without touching Page 1 or Page 2.

---

# 4. Header

Match the current Figma baseline and existing site treatment.

Brand:

> Omnikaflow

Navigation:

> Home  
> Services  
> Work

Primary action:

> Book A Call

For `/book`:

- Book A Call is the current-page action/state;
- Home may link to `/`;
- Services may link to `/services`;
- do not create `/work` merely to satisfy the label;
- keep `/work` non-destructive until separately authorized.

Do not redesign the Header.

---

# 5. Booking Hero

Use the Figma hero composition:

- dark Header;
- immersive wellness photograph;
- dark overlay;
- centered-left content block;
- serif-led headline;
- light CTA.

Eyebrow:

> BOOK A CONSULTATION

Headline:

> Book a 15-minute call

Supporting copy:

> Free, and no pitch at the end of it. Three questions before you pick a time.

CTA:

> Pick a time

Do not invent a booking destination for the CTA.

Until a real booking provider/URL is explicitly authorized, the CTA may be a non-destructive button/anchor targeting the booking placeholder section on the same page.

Preferred behavior:

- make `Pick a time` jump to the booking/embed area on the same page using a local hash target;
- no external booking URL;
- no fake route.

---

# 6. Main Booking Content

Use the warm neutral Figma section with two-column desktop composition:

- explanatory copy on the left;
- booking/embed area on the right.

## Before the call

Heading:

> Before the call

Copy:

> Where the project is, how big it is, and what you want to offer. That's the whole form.

## On the call

Heading:

> On the call

Copy:

> You talk, I ask questions. I'll say if you don't need me.

## Rather email?

Heading:

> Rather email?

Email:

> omnikaflow@gmail.com

The email should be a functional `mailto:` link.

Do not invent another email address.

---

# 7. Booking / Typeform area

The Figma currently shows a placeholder labeled:

> TYPEFORM EMBED

This screenshot is evidence that a Typeform-style embed was planned, but the exact production provider, form ID, and booking/form URL are not currently authorized in this task.

Therefore:

DO NOT:

- invent a Typeform form ID;
- invent a Typeform URL;
- install Typeform packages;
- embed a random form;
- connect Calendly/Cal.com;
- create a fake functioning booking flow;
- create backend form handling.

For this baseline implementation:

- reproduce the visible booking placeholder area;
- label it clearly as `TYPEFORM EMBED` exactly as in the Figma;
- give the container an anchor ID such as `booking`;
- let the Hero `Pick a time` CTA target this local anchor;
- keep it visually faithful to the Figma;
- report the missing real provider/form URL in the handoff.

This is intentional and should not block Page 3 code completion.

---

# 8. Footer

Match the existing Figma baseline and Page-1/Page-2 footer.

Left:

> Omnikaflow — Wellness facility consulting

Right:

> omnikaflow@gmail.com · Instagram

Use `mailto:omnikaflow@gmail.com` for the email.

Do not invent an Instagram URL if one is not present in the repository/project sources.

If no exact Instagram URL exists, keep `Instagram` as non-navigating text rather than fabricating a link.

---

# 9. Visual baseline — LOCKED for this task

Reproduce the current Figma Booking page rather than redesigning it.

Preserve:

- dark near-black Header;
- immersive dark photographic Hero;
- Marcellus-style serif display headline;
- restrained sans-serif supporting copy;
- light rectangular Hero CTA;
- warm cream/off-white main content surface;
- spacious two-column booking section;
- restrained text hierarchy;
- dotted/subtle booking-placeholder boundary if visible in Figma;
- dark minimal Footer.

Do NOT convert it into:

- the rejected all-sans editorial prototype;
- architecture-portfolio styling;
- SaaS booking UI;
- a card-heavy dashboard;
- a new design concept;
- a highly decorative booking experience.

For this task, the Figma wins over earlier redesign recommendations where they conflict.

---

# 10. Typography

Known Figma display font:

- Marcellus
- weight 400
- Regular

Use Marcellus for the serif display language shown in the Figma.

Use the same supporting sans-serif strategy already used by the implemented Homepage/Services pages where practical.

Do not install a font package without authorization.

Before changing font loading, read the relevant local Next.js 16.3.6 documentation under `node_modules/next/dist/docs/`.

---

# 11. Production hero image

The project-wide image delivery decision is:

- manually resized/compressed WebP;
- stored under `public/images/`;
- served statically;
- NO Vercel/Next.js Image Optimization.

Expected clean Booking hero path:

- `public/images/book/hero.webp`

If this exact file exists:

- use `/images/book/hero.webp` as the Booking Hero image;
- serve it with native `<img>`;
- use Tailwind for positioning/crop/overlay;
- do not route it through Next/Vercel Image Optimization.

If it does NOT exist yet:

- do not stop the whole task;
- implement the correct Hero image slot/geometry using a clearly temporary placeholder;
- do not crop photography out of the Figma screenshot and present it as production imagery;
- do not download stock imagery;
- do not generate substitute imagery;
- report the missing exact path in the handoff.

---

# 12. Tailwind-only styling — HARD REQUIREMENT

This repository uses Tailwind CSS 4.

All task-specific styling must be implemented with Tailwind utility classes in JSX.

Do NOT add:

- handcrafted CSS selectors;
- page-specific CSS in `globals.css`;
- CSS Modules;
- new CSS files;
- `<style>` blocks;
- styled-jsx;
- styled-components;
- Emotion;
- Sass/SCSS;
- inline `style={{ ... }}`;
- JavaScript style objects;
- manually authored CSS media queries.

`app/globals.css` should remain the Tailwind/global bootstrap only.

Tailwind arbitrary values are allowed where needed for Figma fidelity.

Use Tailwind variants for responsive behavior and states.

---

# 13. Responsive behavior

Implement `/book` responsively.

Where exact mobile Figma evidence is unavailable:

- preserve content order;
- preserve hierarchy;
- keep Hero copy/CTA readable;
- stack main content conservatively;
- explanatory copy should remain before the booking placeholder;
- keep the booking placeholder full-width on small screens;
- preserve useful spacing;
- do not invent a different mobile art direction.

Use Tailwind responsive variants only.

No native CSS media queries.

---

# 14. Next.js / architecture rules

Repository baseline:

- Next.js 16.3.6
- React 19.2.8
- App Router
- JavaScript
- Tailwind CSS 4

Before using Next-specific APIs/conventions, read the relevant local docs under:

`node_modules/next/dist/docs/`

Follow local docs over model memory.

Prefer Server Components.

This page does not require a client component for the current baseline.

Use a normal local anchor/hash for `Pick a time`.

Do not add Motion or Lucide.

Do not install dependencies.

---

# 15. Metadata

Add appropriate static metadata for `/book` using existing project naming and source wording.

Do not invent:

- domain;
- canonical URL;
- OG asset;
- booking provider;
- unsupported business claims.

A reasonable title/description derived directly from supplied Booking copy is allowed.

---

# 16. No browser audit — HARD REQUIREMENT

Browser/visual audit is NOT authorized.

Do NOT:

- launch/use a browser for visual review;
- use Playwright;
- use browser automation;
- take screenshots;
- inspect localhost visually;
- deploy a preview for visual review;
- ask the Project Owner for browser-audit permission.

Inspecting the supplied static Figma screenshot is required and allowed.

Browser-dependent fidelity evaluation must be marked:

`DEFERRED — requires separate Project Owner authorization.`

---

# 17. Verification

After implementation:

1. confirm `/book` exists;
2. confirm Header exists;
3. confirm Booking Hero exists;
4. confirm Hero copy is complete;
5. confirm `Pick a time` targets the local booking area;
6. confirm Before the call copy exists;
7. confirm On the call copy exists;
8. confirm Rather email copy exists;
9. confirm email is `mailto:omnikaflow@gmail.com`;
10. confirm booking placeholder exists and is clearly labeled `TYPEFORM EMBED`;
11. confirm no fake provider/form URL was invented;
12. confirm Footer exists;
13. confirm no source copy was summarized or silently omitted;
14. confirm `/work` was not created;
15. confirm Homepage and Services behavior were not intentionally altered;
16. confirm Tailwind-only styling;
17. confirm static image delivery/no Next-Vercel optimizer;
18. inspect `git diff` for scope leakage.

Run:

- `npm run lint`
- `npm run build`
- `git diff --check`

Do not perform browser visual QA.

---

# 18. Final handoff

Return:

1. files inspected;
2. local Next.js docs consulted;
3. files changed;
4. Booking sections implemented;
5. production hero asset used, or exact placeholder limitation;
6. confirmation `Pick a time` targets the local booking area;
7. confirmation real booking provider/form integration was NOT fabricated;
8. confirmation `TYPEFORM EMBED` placeholder remains until real provider details are authorized;
9. content-completeness verification;
10. `npm run lint` result;
11. `npm run build` result;
12. `git diff --check` result;
13. Tailwind-only verification:
    - custom CSS selector added: yes/no
    - inline style added: yes/no
    - CSS Module created: yes/no
    - styling dependency added: yes/no
14. confirmation Next/Vercel Image Optimization is not used for Booking imagery;
15. confirmation `/work` was not implemented;
16. confirmation Page 1 and Page 2 were not intentionally altered;
17. confirmation no browser audit/screenshots/browser automation/preview deployment occurred;
18. remaining limitations, including missing real booking provider/form URL.

STOP after the handoff.

Do not start a redesign or production-finalization task.
