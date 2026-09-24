# Task Packet — TASK-001 / Homepage Header + Hero Prototype

Task ID: TASK-001  
Packet version: v2  
Packet profile: STANDARD  
Task status: NOT_STARTED  
Operating mode: CLIENT_PROJECT  
Task type: VISUAL_EXPERIENCE
Secondary route: IMPLEMENTATION  
Task owner: Project Owner  
Executor: Codex / authorized coding agent  
Client/workspace: Monika / Omnikaflow  
Created / last revised: 2026-09-24

## Objective and boundary

**Objective:**
Implement a bounded, reviewable Homepage Header + Hero prototype that tests the proposed Monika visual direction in the real Next.js application on desktop and mobile.

**Decision or action required:**
Translate the current `PROPOSED` design foundation into one rendered Header + Hero prototype without expanding into the rest of the website. The output exists to validate typography, composition, image relationship, color, and responsive transformation before broader implementation.

**Non-goals:**

- do not implement the rest of Homepage;
- do not implement `/services`;
- do not implement `/book`;
- do not implement Footer;
- do not create the three service sections;
- do not add final motion choreography;
- do not add analytics, SEO expansion, booking integration, CMS, database, backend, or authentication;
- do not perform production deployment or Vercel configuration;
- do not redesign client copy beyond explicitly authorized prototype text;
- do not treat this prototype as final visual approval.

**Final decision owner:** Project Owner.

## Authorized working set

**Global sections:**

- Website Delivery OS `00` Sections 1–9 (governance provenance; read directly only when available to the executor);
- `01` Sections 1–10 (governance provenance; read directly only when available);
- `05` Sections 1–8 and 14–16 as applicable to foundation/layout/responsive validation (governance provenance; read directly only when available);
- `07` Sections 1–9 and 14 as applicable to repository implementation and development checks (governance provenance; read directly only when available);
- `11` Task Packet Sections 11–16 (governance provenance; read directly only when available).

**Client sections:**

- `MONIKA_PROJECT_KNOWLEDGE.md`: Sections 1–6, 15–20, 23–26;
- `MONIKA_DESIGN_FOUNDATION.md`: entire current `PROPOSED` v0.1.1 document.

**LOCKED decision/spec IDs and versions:** `NONE`.

The design foundation is intentionally `PROPOSED`. This task is a bounded prototype/implementation test and must not represent provisional values as LOCKED decisions.

**Named evidence/reference sources:**

- current Monika Figma screenshots supplied by Project Owner for Home, Services, and Book;
- existing Figma font observation: `Marcellus`, Regular 400;
- repository `AGENTS.md`;
- local Next.js 16.3.6 documentation under `node_modules/next/dist/docs/` when a Next-specific API/convention is touched.

If the original Figma screenshots are not available inside the executor environment, do not pretend they were inspected and do not block solely for that reason. Use `MONIKA_DESIGN_FOUNDATION.md` as the repo-local visual synthesis for this spike, and escalate only if a missing screenshot/asset prevents a material design decision.

**Repository/read paths:**

- `AGENTS.md`;
- `MONIKA_PROJECT_KNOWLEDGE.md`;
- `MONIKA_DESIGN_FOUNDATION.md`;
- `tasks/001_HEADER_HERO.md`;
- `package.json`;
- `app/page.js`;
- `app/layout.js`;
- `app/globals.css`;
- `next.config.mjs` only if an observed requirement makes it relevant;
- relevant local Next.js documentation only;
- specific supplied image assets only when available.

**Create/modify paths:**

- `app/page.js`;
- `app/globals.css`;
- `app/layout.js` only if required for the prototype's approved font setup and only after checking relevant local Next.js documentation.

No other source path is authorized in v2.

**Explicitly out of scope:**

- `app/services/**`;
- `app/book/**`;
- new shared component architecture unless required to keep Header/Hero code understandable;
- `public/**` mutation unless a later packet revision names exact approved source assets;
- dependency installation;
- README rewrite;
- unrelated cleanup;
- Vercel/deployment settings;
- Git history rewriting.

## Action and side-effect boundary

**Allowed actions:**

- inspect authorized repository paths;
- inspect relevant local Next.js documentation;
- replace the default `create-next-app` Homepage content within the authorized files;
- create the Header and Hero directly within the authorized implementation scope;
- define prototype CSS variables/tokens needed by Header + Hero;
- implement responsive Header + Hero behavior;
- use a clearly neutral placeholder block when no approved hero asset exists, provided it is not presented as client evidence;
- run local development/build/lint commands needed to verify the change;
- render and inspect the prototype locally.

**External side effects:** `NONE`.

**Do not do:**

- do not deploy;
- do not push or publish without separate owner instruction;
- do not install Motion, Lucide, fonts, or any dependency without packet revision/approval;
- IBM Plex Sans may be tested only through a documented built-in Next.js font mechanism that adds no package, after consulting local Next.js 16.3.6 docs; if the environment cannot load/build it reliably, report the limitation instead of substituting another named typeface;
- do not use remote stock/generated imagery as a substitute for missing client assets;
- do not invent proof metrics;
- do not add `8,000 m²`, `300+`, `$138M`, `14 years`, or other numerical proof unless the Project Owner explicitly verifies/authorizes that exact value before implementation;
- do not create a generic stat strip;
- do not use full-bleed lifestyle photography as the Hero background;
- do not reproduce the existing Figma Hero 1:1;
- do not use repeated rounded containers, pills, gradients, large decorative shadows, fake coordinates, fake blueprint marks, or random crosshairs;
- do not add motion before static composition is reviewed;
- do not create Services or Book routes in this task;
- do not change unrelated config or generated files.

**Stop/escalate when:**

- local Next.js documentation contradicts the proposed implementation method;
- implementation requires a new dependency;
- an approved source asset is required to judge the composition and none is available;
- exact public copy is materially required and existing source text is insufficient;
- current user changes overlap `app/page.js`, `app/layout.js`, or `app/globals.css` in a way that cannot be safely preserved;
- a requested visual behavior requires expanding beyond Header + Hero;
- the brand relationship between `Monika` and `Omnikaflow` must be publicly asserted beyond what current source material supports.

## Authority, evidence, and uncertainty

**Authorized project direction for this packet:**

- the existing Figma is a content/asset/reference source, not the final visual system;
- Monika should be expressed as an experienced wellness operator + facility strategist + practitioner;
- these directions are task authority from the current project context, not canonical evidence labels and not automatically LOCKED design decisions.

| Statement | Canonical label/subtype | Source | Scope/limitation | Impact if wrong |
|---|---|---|---|---|
| Existing Figma uses Marcellus Regular 400 | OBSERVATION / VISUAL | Project Owner Figma inspection | Existing Figma only; not approval for redesign | Low; affects prototype type comparison |
| IBM Plex Sans should be primary | RECOMMENDATION | `MONIKA_DESIGN_FOUNDATION.md` v0.1.1 | PROPOSED until rendered review | Medium; prototype exists to test it |
| Marcellus should become limited accent | RECOMMENDATION | `MONIKA_DESIGN_FOUNDATION.md` v0.1.1 | PROPOSED until rendered review | Medium |
| Exact palette/grid values | RECOMMENDATION | `MONIKA_DESIGN_FOUNDATION.md` v0.1.1 | Prototype starting values only | Medium |
| Numerical proof from Figma | UNVERIFIED | existing Figma/source screenshots | Do not increase prominence or publish as verified | High |
| Final hero photography | UNVERIFIED | Project source | Final approved asset/crop is not yet available; placeholder may be used only for composition | Medium |

**Material assumptions allowed:**

- Prototype may use a neutral, visibly non-evidentiary image placeholder if no approved source image is available.
- Prototype may use the Design Foundation's story lines only as DRAFT prototype copy when exact approved Hero copy is unavailable. Mark this in source comments as `DRAFT PROTOTYPE COPY — NOT APPROVED FOR PRODUCTION`.
- Exact token values may be adjusted locally during visual correction if the change remains within the same design direction and is documented in handoff; material direction changes require owner review.

**Unverified blockers:**

- final public Hero copy;
- final approved Hero image asset/crop;
- verified metrics;
- exact final relationship of `Monika` and `Omnikaflow` as public naming.

## Execution control

**Exact files authorized to read:** See `Repository/read paths` above. Do not scan the whole repository.

**Allowed tools/environments:**

- repository-local shell commands;
- local browser/render environment;
- repository-local Next.js documentation;
- Codex coding environment;
- no production/external-system mutation.

**Required format and traceability:**

- preserve repository conventions;
- keep modifications limited to authorized paths;
- source comments may identify DRAFT prototype copy/placeholders but should not narrate obvious code;
- report exact changed files and checks in handoff.

**Dependencies and known risks:**

- design values are PROPOSED, not LOCKED;
- absent final image asset may limit crop/composition judgement;
- unverified Figma metrics must remain omitted;
- introducing a new font-loading method without consulting local Next.js docs may create version-specific errors;
- over-componentization at this stage may prematurely freeze the visual grammar.

**Checks/review method, environment, and owner:**

1. `npm run lint`;
2. `npm run build` when the prototype is structurally ready;
3. browser render on desktop and mobile;
4. Project Owner visual review for direction.

**Completion authority:** Project Owner.

## Phase 7 implementation extension

**Task intent:** SPIKE. The code is a bounded, reversible visual prototype in the real repository and remains prototype-level visual authority until owner review. Do not push, merge, or expand it without separate owner instruction.

**Authorized content/experience records:** current project knowledge + Design Foundation v0.1.1 only; no invented client records.

**Repository root and exact paths:** project root; only paths listed in this packet.

**Branch/worktree:** inspect and report current branch/worktree state; do not create, switch, reset, or rewrite branches unless separately instructed.

**Known existing changes to preserve:** inspect `git status` before editing; preserve all user-owned changes.

**Included behavior:**

- responsive site Header;
- Homepage Hero only;
- active navigation presentation sufficient for Home context;
- story-led sans-dominant hierarchy;
- offset portrait/facility-image region or neutral placeholder;
- real-information annotation only when supported;
- no prominent metrics until verified.

**Explicit exclusions and prohibited changes:** all items under Non-goals, out-of-scope, and Do not do.

**Dependencies and blockers:** final image/copy may remain a review limitation but must not be fabricated.

**Checks to run:** lint; build; desktop/mobile render inspection.

**Module `08` evidence required:** none yet beyond preserving enough implementation clarity for later QA. This task does not claim QA completion.

**Escalation conditions:** any dependency, architecture, external integration, content fact, or visual direction change outside this packet.

## Header specification

The Header should:

- feel quiet and structural, not like a floating SaaS navbar;
- preserve space for `Omnikaflow` as the current brand/wordmark expression without inventing a new logo;
- use clear navigation to the known site destinations;
- avoid pill navigation and excessive chrome;
- align to the same composition grid as the Hero;
- remain legible over the chosen surface without unnecessary blur/glass effects;
- transform intentionally on mobile rather than squeezing desktop navigation.

Known intended site destinations are `/`, `/services`, and `/book`.

Because `/services` and `/book` are explicitly out of scope for this task, do not create dead links or stub routes merely to make the Header appear complete. For this visual prototype, Home may link to `/`; Services and Book may remain clearly non-interactive prototype labels until their routes are authorized. Record that limitation in handoff.

Do not create a `/work` page in this task. The existing Figma's `Work` navigation item is not sufficient authority for a fourth scoped page.

## Hero specification

### Communication job

The Hero must establish:

1. who Monika is;
2. that her authority comes from operational experience;
3. that this is wellness-facility consulting rather than generic wellness lifestyle content;
4. a memorable editorial identity without obstructing comprehension.

### Composition

Use the Design Foundation's proposed grammar:

- small category/identity label;
- large story-led sans display as dominant entity;
- image as a separate offset entity rather than full-page background;
- meaningful negative space;
- small real annotation attached to image/story when supported;
- no generic centered CTA block inside the first viewport unless source hierarchy requires it;
- no stat strip.

Conceptual prototype copy permitted only when exact Hero copy is unavailable:

```text
I started on reception
at eighteen.

Fourteen years later,
I help build and run
wellness facilities.
```

If used, mark it in source as DRAFT prototype copy and do not describe it as final client-approved public copy.

### Desktop behavior

- maintain one clear dominant text block;
- use an anchored asymmetric relation between story and image;
- image must not become a generic right-column card;
- maintain generous but purposeful negative space;
- avoid the current Figma's background-image Hero grammar.

### Mobile behavior

- preserve story-first hierarchy;
- choose image placement/crop specifically for mobile;
- do not retain desktop offsets when they create empty dead space;
- keep labels/annotations only when they remain useful and readable;
- no horizontal overflow;
- avoid cramming proof metrics into the first viewport.

## Output and acceptance

**Output and destination:**

A working local Header + Homepage Hero prototype implemented only in the authorized repository paths.

**Observable acceptance criteria:**

1. Only Header + Hero have been intentionally redesigned/implemented; no downstream page sections are added.
2. The Hero does not reproduce the existing full-bleed-background Figma pattern.
3. Typography is sans-led; Marcellus, if used, is limited to the approved signature role.
4. The layout has a clear grid/anchor even when asymmetric.
5. Image treatment is editorial and separate from the text rather than a generic background/card treatment.
6. No unverified numerical proof is rendered prominently.
7. No generic cards, pills, gradients, fake field-note decoration, large shadows, or decorative complexity is introduced.
8. Mobile is intentionally recomposed rather than mechanically stacked.
9. The implementation introduces no new dependency.
10. `npm run lint` passes or every failure is reported with exact cause.
11. `npm run build` passes or every failure is reported with exact cause.
12. Desktop and mobile renders are visually inspected before task completion.
13. The result remains explicitly a prototype until Project Owner review.

**Required check:**

After rendering, answer with evidence:

- Does the hierarchy immediately communicate operator/strategist rather than luxury-wellness template?
- Does the image/text relationship feel authored rather than componentized?
- Does IBM Plex Sans strengthen the intended character?
- Is Marcellus still useful in the limited signature role?
- Does the warm-neutral/charcoal/oxide system support the photography rather than tint the whole site beige?
- Does the mobile composition preserve the same priority without awkward stacking?

**Handoff recipient:** Project Owner.

## Required handoff

Report:

- files read;
- files changed;
- relevant local Next.js docs consulted;
- exact implementation produced;
- whether prototype copy or placeholder imagery was used;
- lint result;
- build result;
- desktop viewport(s) inspected;
- mobile viewport(s) inspected;
- concrete visual issues discovered and corrected;
- remaining uncertainties;
- recommendation on which Design Foundation items should stay PROPOSED, be revised, or be candidates for owner approval.

Do not continue to the rest of Homepage until the Project Owner reviews the rendered Header + Hero.
