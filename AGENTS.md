<!-- BEGIN:nextjs-agent-rules -->

**# This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Monika — Repository Agent Rules

## 1. Project identity

This repository is the Monika / Omnikaflow 3-page website project.

The objective is not to reproduce the existing Figma 1:1. The existing design is a source for content, photography, current hierarchy, and client-supplied information. The new visual system is intentionally being redesigned.

The core creative thesis is:

> Editorial architecture × operational field notes × premium hospitality.

The result must feel like the website of an experienced wellness-facility operator and strategist, not a generic wellness influencer, luxury-retreat template, SaaS landing page, or AI-generated portfolio.

## 2. Mandatory context order

Before any material task:

1. Read the active Task Packet in `tasks/`.
2. Read only the sections of `MONIKA_PROJECT_KNOWLEDGE.md` named by that packet.
3. Read `MONIKA_DESIGN_FOUNDATION.md` when the task touches visual, layout, media, motion, responsive behavior, or component composition.
4. Read repository files and local Next.js documentation only as required by the active task.

Do not use chat history as authority when a repository source exists.

Do not read unrelated project files merely because they are available.

Website Delivery OS source files may be named by a Task Packet as governance provenance even when they are not copied into this repository. If those source files are unavailable to the executor, use this repository's `AGENTS.md`, the active Task Packet, and named Monika documents as the executable bounded contract; do not invent unseen OS text. Stop and ask the Project Owner only when a material ambiguity remains unresolved by the repo-local contract.

## 3. Authority and status discipline

- The Project Owner is the final decision and approval authority.
- `MONIKA_PROJECT_KNOWLEDGE.md` is canonical project context, but not every statement inside it is automatically a LOCKED decision.
- `MONIKA_DESIGN_FOUNDATION.md` begins as `PROPOSED`. Treat provisional tokens, typography choices, grid values, and compositions as prototype inputs until explicitly approved.
- An active Task Packet authorizes scope and mutations. Repository access alone does not authorize edits.
- Never silently change or broaden an approved decision.
- Never convert a recommendation, assumption, prototype result, or existing implementation into a LOCKED decision.

## 4. Facts and content

Never invent or silently improve client facts.

Do not fabricate or infer as fact:

- revenue;
- number of staff;
- years of experience;
- facility capacity;
- client names;
- member counts;
- commercial outcomes;
- testimonials;
- credentials;
- geographic history;
- service deliverables;
- booking/contact details.

If a value exists only in Figma or source material and has not been verified, treat it as source-provided/unverified. Do not increase its prominence without Project Owner approval.

Do not replace missing copy with generic wellness or luxury filler.

## 5. Implementation scope

Change only paths explicitly authorized by the active Task Packet.

Do not, unless the packet explicitly authorizes it:

- build additional pages or sections;
- refactor unrelated files;
- create a broad component system;
- add a CMS, database, authentication, backend, or state framework;
- install dependencies;
- move or delete files;
- perform cleanup unrelated to the task;
- modify deployment, DNS, analytics, booking providers, or external systems.

Preserve existing user changes. If task work overlaps unknown user changes, stop and report the conflict.

## 6. Next.js 16.3.6 rule

This repository currently uses Next.js 16.3.6 and React 19.2.8.

Before writing or changing code that depends on a Next.js API, convention, metadata behavior, font-loading method, image behavior, routing behavior, server/client boundary, or configuration option:

1. inspect the relevant local documentation in `node_modules/next/dist/docs/`;
2. follow that documentation over remembered API behavior;
3. heed local deprecation notices;
4. do not introduce an older convention merely because it is familiar.

Do not remove or rewrite the generated `nextjs-agent-rules` block above.

## 7. Design guardrails

The design must prioritize specificity, proportion, typography, photography treatment, and responsive composition over feature count.

Default prohibitions unless a named design requirement overrides them:

- repetitive rounded cards;
- pill-heavy UI;
- generic stat strips;
- generic three-column service cards;
- random icon grids;
- arbitrary gradients;
- large decorative drop shadows;
- fake architectural diagrams;
- fake coordinates or crosshairs;
- decorative field-note marks with no real information;
- generic luxury/wellness copy;
- generic SaaS layout grammar;
- motion used to compensate for weak composition;
- identical composition for every service.

Asymmetry is allowed only when it remains anchored to a clear grid or relationship. Negative space must have a hierarchy or pacing job.

Operational annotations must come from real information such as chronology, location, service category, process, facility flow, responsibilities, or verified metrics.

## 8. Typography and visual foundation

Current design direction:

- primary visual language: sans-led, editorial, precise;
- `IBM Plex Sans`: PROPOSED primary typeface for prototype evaluation;
- `Marcellus Regular 400`: existing Figma typeface and PROPOSED limited signature/wordmark accent;
- no additional type family without explicit approval;
- no monospace merely to simulate “field notes”.

Exact typography, palette, grid, and spacing values remain subject to the first rendered prototype review unless explicitly marked LOCKED elsewhere.

## 9. Motion

Static composition must work before motion is added.

When motion is authorized:

- prefer reveal → settle behavior;
- keep motion restrained and finite;
- preserve reading order and comprehension;
- provide reduced-motion behavior;
- avoid continuous decorative movement, scroll circus, custom cursors, or unnecessary pinning.

Do not install Motion or another animation dependency unless an active Task Packet authorizes it.

## 10. Responsive behavior

Do not treat mobile as `desktop columns -> flex-direction: column`.

For each implemented composition, explicitly consider:

- reading order;
- image order and crop;
- heading scale and wrapping;
- page-edge spacing;
- CTA position;
- annotation survival/removal;
- density and section pacing;
- touch behavior.

The desktop and mobile versions must preserve the same communication priority, not necessarily the same geometry.

## 11. Browser verification

Do not declare visual work complete from JSX/CSS inspection alone.

For visual implementation tasks, the required loop is:

1. implement only the authorized scope;
2. render the real page;
3. inspect desktop;
4. inspect mobile;
5. identify concrete issues in hierarchy, crop, spacing, alignment, density, wrapping, and CTA prominence;
6. correct only the observed issues;
7. render again.

A successful build is not visual approval.

## 12. Anti-Slop precedence

Anti-Slop may be used as a guardrail after a design direction exists. It is not the art director.

If a generic Anti-Slop heuristic conflicts with an intentional, explicit project-specific design rule, the project-specific design rule wins.

Run audit/report-first. Do not allow an automated audit to rewrite the design without review.

## 13. Dependency discipline

Current baseline intentionally stays small:

- Next.js;
- React;
- Tailwind CSS;
- ESLint.

Potential later dependencies such as Motion or Lucide are not authorized merely because they appear in project planning.

Before adding a dependency, state the exact requirement it solves and confirm that a simpler native solution is insufficient.

## 14. Task completion and handoff

At the end of a material task, report:

- files actually read;
- files actually changed;
- behavior implemented;
- checks run and results;
- visual/browser conditions inspected when applicable;
- deviations from the Task Packet;
- unverified content or unresolved blockers;
- what remains deliberately out of scope.

Do not claim production readiness, launch readiness, accessibility conformance, or business success from an implementation task.
