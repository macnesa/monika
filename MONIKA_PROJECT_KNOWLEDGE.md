# MONIKA LANDING PAGE — PROJECT KNOWLEDGE BASE

**Project status:** Starter / pre-build  
**Date:** 2026-09-24  
**Purpose of this file:** Canonical context for continuing the Monika landing-page project in a new ChatGPT/Codex tab without losing prior decisions.

---

## 1. Project Summary

Build a **3-page landing website** for Monika based on an existing Figma design, but **do not implement the current Figma 1:1**.

The current Figma is useful as:
- content reference,
- asset reference,
- information hierarchy reference,
- source of approved facts and copy,
- source of existing photography,
- source of booking/contact details.

It is **not** the final visual design system.

The current Figma direction feels too generic and template-like:
- beige wellness aesthetic,
- large serif headline,
- lifestyle photography,
- repeated white cards,
- generic stat strips,
- generic wellness/luxury visual language,
- repetitive section structures.

The goal is to produce something that feels much more deliberate, specific, premium, and distinctive.

---

## 2. Commercial Context

**Project fee:** IDR 5,000,000  
**Scope:** 3 pages

Do not inflate the feature count just to justify the price.

The value should come from:
- better art direction,
- stronger typography,
- stronger proportion,
- better photography treatment,
- responsive polish,
- interaction/motion quality,
- clean booking conversion,
- performance,
- production readiness.

The objective is **craft and specificity**, not unnecessary product complexity.

---

## 3. Pages

### `/`
Homepage

Primary jobs:
- establish Monika's identity and credibility,
- tell her professional story,
- establish operational expertise,
- make the visual identity memorable,
- drive users toward consultation.

Recommended content sequence:

1. Hero / thesis
2. Credibility / proof
3. Personal journey
4. What Monika actually does
5. Operational experience / selected proof
6. Philosophy / point of view
7. Consultation CTA

---

### `/services`
Services page

The existing design uses repeated white cards and should **not** be copied.

Services should instead read as a narrative sequence.

Example structure:

```text
01
FACILITY DESIGN CONSULTATION

[image]                    [description]
                           [problem solved]
                           [deliverables]
                           [who it is for]
                           [duration]
```

Other services can use different but related compositions.

Avoid making every section structurally identical.

Potential visual content if supported by real source material:

```text
FACILITY FLOW
Reception → Change → Heat → Cold → Recovery

CAPACITY
32 guests / cycle

STAFFING
6 operational zones
```

Important: do not invent operational facts. Only use real information supplied by Monika/client.

---

### `/book`
Booking page

This page should be intentionally simple.

Conversion is more important than visual experimentation.

Suggested structure:

```text
BOOK A CONSULTATION

15 minutes.
No pitch at the end.

[booking embed]

Before we talk
• what you're building
• where you are now
• biggest operational constraint

Alternative contact / email
```

Use the actual booking provider used by the client, e.g. Calendly or Cal.com.

---

## 4. Core Positioning

Monika should **not** feel like a generic wellness influencer or spa consultant.

Her strongest differentiation is the professional journey:

```text
reception
→ operations
→ running large wellness centres
→ facility consulting / training
```

The design should make her feel like:

> a wellness operator + facility strategist + experienced practitioner

rather than:

> a generic luxury wellness brand

---

## 5. Chosen Art Direction

### Primary direction

**Editorial architecture × operational field notes × premium hospitality**

The site should feel:
- editorial,
- architectural,
- precise,
- experienced,
- mature,
- warm but not soft,
- premium but not luxury-template,
- human but not influencer-like.

### Visual language

Prefer:
- bold editorial typography,
- strong negative space,
- asymmetric layouts,
- intentional image cropping,
- restrained but strong typography,
- small operational annotations,
- selected numeric proof,
- subtle motion,
- occasional grid / coordinate / field-note details,
- dark charcoal + warm neutral palette.

Avoid:
- excessive beige,
- generic wellness gradients,
- excessive rounded cards,
- pill UI,
- repetitive 3-card sections,
- random icon grids,
- "premium wellness" clichés,
- excessive drop shadows,
- generic SaaS layout grammar,
- decorative elements with no role.

---

## 6. Hero Direction

Do not use the current generic pattern:

```text
background lifestyle image
+ headline on left
+ CTA
```

Preferred conceptual direction:

```text
MONIKA
WELLNESS FACILITY CONSULTING                  01 — 03

I started on reception
at eighteen.

Fourteen years later,
I help build and run
wellness facilities.

                         [portrait / facility image]
                         [small operational annotation]

$138M managed     300+ staff     14 years
```

This is a **design direction only**, not final approved copy.

The story itself should become part of the composition.

---

## 7. Technology Decision

### Final stack

- **Next.js App Router**
- **JavaScript**
- **Tailwind CSS**
- **Motion** for restrained animation
- **Lucide** only if icons are genuinely needed
- **Vercel** for deployment

### Keep the architecture small

Suggested structure:

```text
app/
  page.js
  services/
    page.js
  book/
    page.js

components/
  Header.js
  Footer.js
  Hero.js
  Story.js
  Stats.js
  ServiceSection.js
  BookingCTA.js

data/
  site-content.js

styles/
  globals.css
```

Centralize key content in `data/site-content.js` so copy changes do not require hunting through JSX.

### Explicitly avoid unless requirements change

- TypeScript
- Redux
- database
- CMS
- unnecessary animation libraries
- component libraries such as shadcn/ui for the main visual system
- unnecessary backend
- unnecessary authentication
- complex state architecture

---

## 8. Image Handling

No final decision has been locked on image hosting yet.

For this project:
- Next.js built-in image optimization is acceptable unless a concrete operational reason appears to avoid it.
- Do not copy constraints from unrelated projects automatically.
- Preserve source image quality.
- Choose intentional crops per breakpoint.
- Avoid forcing the same crop on desktop and mobile where it damages composition.

---

## 9. AI / Harness Decision

### Final tool stack for this project

```text
FIGMA / EXISTING DESIGN
        ↓
CHATGPT
art direction + information architecture
        ↓
DESIGN SPEC
tokens + layout grammar + typography
        ↓
ANTI-SLOP
guardrail
        ↓
CODEX
implementation
        ↓
LIVE BROWSER
visual inspection
        ↓
CODEX ITERATION
        ↓
FINAL VISUAL AUDIT
human judgement + anti-slop
```

### Use

- ChatGPT
- Codex
- Anti-Slop
- Browser visual feedback loop
- Context7 only when needed

### Do NOT use for this project unless scope changes materially

- Superpowers
- Serena
- Repomix
- Promptfoo
- Emdash
- Container Use
- Playwright MCP

Reason:
this is a small 3-page landing site. The primary bottleneck is **design quality**, not engineering process complexity.

---

## 10. Superpowers Decision

**Final decision: DO NOT install/use Superpowers for this project.**

Why:
- project is too small,
- no complex backend,
- no complex state,
- no multi-feature dependency graph,
- no high regression surface,
- no need for subagents/worktrees/TDD-heavy workflow.

Superpowers solves:

```text
ambiguous requirements
→ brainstorming
→ specification
→ implementation plan
→ isolated work
→ TDD
→ subagents
→ review
→ verification
```

That is useful for larger engineering projects, but not the highest-leverage tool here.

Two Superpowers principles should still be adopted manually:

1. **Do not code before design direction/spec is locked.**
2. **Do not claim completion before visually verifying the real rendered result.**

---

## 11. Anti-Slop Decision

**Final decision: USE Anti-Slop.**

Anti-Slop is useful here because the largest risk is replacing the current generic Figma with another generic AI-generated design.

Use Anti-Slop as a **guardrail**, not as the art director.

Anti-Slop should help block patterns such as:
- generic cards,
- excessive rounded containers,
- generic SaaS structure,
- excessive gradients,
- excessive pills/badges,
- repetitive icon grids,
- fake-premium copy,
- generic AI copy,
- repetitive section composition,
- decorative UI without purpose.

### Important precedence rule

If Anti-Slop conflicts with the project's explicit design specification:

> **Project design specification wins.**

Example:
if one large rounded booking module is an intentional part of the design, Anti-Slop must not remove it just because rounded cards are generally discouraged.

### Anti-Slop usage phases

#### Phase 1
Do not let Anti-Slop determine art direction.

First lock:
- typography,
- color,
- spacing,
- grid,
- image treatment,
- layout grammar,
- motion,
- explicit prohibitions.

#### Phase 2
Use Anti-Slop during Codex implementation.

#### Phase 3
Use it again for a final audit.

Suggested audit prompt:

```text
Audit the entire site for generic AI-design patterns, repetitive component
structures, generic copy, decorative UI without function, unnecessary cards,
excessive rounding, and inconsistent hierarchy.

Do not modify anything yet.
Report findings only.
```

---

## 12. Context7 Decision

Context7 is **optional**, not part of the default workflow.

Use only when Codex needs current documentation for:
- Next.js,
- Motion,
- Tailwind,
- Vercel,
- another dependency whose API/version may have changed.

Repository:

https://github.com/upstash/context7

---

## 13. Anti-Slop Repository

Repository:

https://github.com/miqdadbadjuber/anti-slop

Use it as a design/output guardrail.

---

## 14. Relevant Tool / Documentation Links

### Next.js

https://nextjs.org/

Docs:

https://nextjs.org/docs

GitHub:

https://github.com/vercel/next.js

---

### Tailwind CSS

https://tailwindcss.com/

Docs:

https://tailwindcss.com/docs

GitHub:

https://github.com/tailwindlabs/tailwindcss

---

### Motion

https://motion.dev/

GitHub:

https://github.com/motiondivision/motion

---

### Lucide

https://lucide.dev/

GitHub:

https://github.com/lucide-icons/lucide

---

### Vercel

https://vercel.com/

Docs:

https://vercel.com/docs

---

### Anti-Slop

https://github.com/miqdadbadjuber/anti-slop

---

### Context7

https://github.com/upstash/context7

---

### Agent Skills reference

Not required for the first implementation, but useful background for future reusable workflows:

https://github.com/agentskills/agentskills

---

### Superpowers

Not selected for this project, but retained here for reference:

https://github.com/obra/superpowers

---

## 15. Browser Feedback Loop

This is one of the most important parts of the workflow.

Do not judge quality from JSX/CSS alone.

Required loop:

```text
implement
↓
render real page
↓
inspect desktop
↓
inspect mobile
↓
identify concrete visual issue
↓
Codex modifies
↓
render again
```

Typical issues to inspect:
- image crop,
- typography scale,
- hierarchy,
- vertical rhythm,
- section transition,
- whitespace,
- alignment,
- visual density,
- mobile ordering,
- CTA dominance,
- service-page repetition,
- footer proportion,
- motion restraint.

Browser review has higher value here than sophisticated agent infrastructure.

---

## 16. Implementation Philosophy

Do not give Codex vague prompts such as:

> "Make this look premium."

or:

> "Make this better than the Figma."

That produces generic AI design.

Instead Codex should receive:
- explicit art direction,
- specific layout rules,
- typography system,
- spacing system,
- image rules,
- forbidden patterns,
- section-level specification,
- responsive rules.

Codex should primarily be the **implementation engine**, not the primary designer.

---

## 17. Recommended Build Sequence

Build sequentially.

### Stage 1 — Content extraction
From Figma collect:
- all copy,
- all photos,
- logo,
- proof numbers,
- service information,
- contact information,
- booking details,
- any client-approved facts.

Do not invent missing content.

### Stage 2 — Design foundation
Lock:
- typography,
- color palette,
- spacing scale,
- container widths,
- grid,
- responsive breakpoints,
- border/radius rules,
- image treatment,
- motion rules.

### Stage 3 — Header + hero
Build only header and hero.

Render.

Review visually.

Do not continue until direction is correct.

### Stage 4 — Homepage
Implement remaining homepage sections.

Render desktop + mobile.

### Stage 5 — Services
Implement service narrative.

Avoid repeated generic cards.

### Stage 6 — Booking
Keep minimal and conversion-focused.

Integrate real booking provider.

### Stage 7 — Motion
Add only after static layout is strong.

Motion must not compensate for weak composition.

### Stage 8 — Responsive polish
Do not merely stack desktop layout vertically.

Mobile should be intentionally composed.

### Stage 9 — Anti-Slop audit
Report only first.

Then selectively fix legitimate findings.

### Stage 10 — Production pass
Check:
- SEO metadata,
- accessibility basics,
- page titles,
- Open Graph,
- favicon,
- image sizing,
- font loading,
- performance,
- broken links,
- booking,
- responsive behavior,
- deployment.

---

## 18. Design Rules

### Typography

Typography should carry much of the identity.

Need:
- strong display/editorial face,
- functional supporting text face,
- clear hierarchy,
- restrained number of sizes.

Do not overuse serif just because the category is wellness.

The current Figma's large serif direction feels too familiar.

---

### Color

Preferred family:

- dark charcoal,
- warm off-white / neutral,
- muted natural accent if needed.

Avoid:
- default beige-everywhere wellness palette,
- arbitrary gradients,
- too many accent colors.

---

### Cards

Use cards only when they clarify a real grouping.

Do not default to:

```text
[rounded white card]
[rounded white card]
[rounded white card]
```

for every section.

---

### Radius

Avoid excessive rounding.

Use radius as part of the design system, not as automatic decoration.

---

### Motion

Motion should feel:
- subtle,
- slow enough to feel deliberate,
- useful for hierarchy,
- not flashy.

Good candidates:
- hero image reveal,
- text stagger,
- subtle image parallax,
- section entry,
- hover details.

Avoid:
- excessive scroll choreography,
- constant movement,
- animation that hurts reading,
- decorative gimmicks.

---

## 19. Content Rules

Use client-approved facts only.

Do not fabricate:
- revenue,
- number of staff,
- years,
- facility capacity,
- clients,
- outcomes,
- testimonials,
- credentials.

If a figure appears in the existing Figma, verify it before making it prominent.

Copy should be:
- direct,
- experienced,
- human,
- precise.

Avoid:
- "elevate your wellness journey",
- "transform your space",
- "unlock your potential",
- generic luxury/wellness filler,
- meaningless brand adjectives.

---

## 20. Mobile Priority

Desktop can be expressive.

Mobile must still feel designed.

Do not merely:

```text
desktop columns
→ flex-direction: column
```

For each section decide:
- image order,
- text order,
- crop,
- spacing,
- heading scale,
- CTA position,
- whether annotations remain visible,
- whether decorative details disappear.

---

## 21. Performance

The site is small and should stay fast.

Avoid:
- huge JS bundles,
- excessive client components,
- autoplay video unless justified,
- large unoptimized images,
- unnecessary libraries,
- animation everywhere.

Default to server components where practical.

Use client components only when interaction requires them.

---

## 22. SEO / Production Baseline

Before delivery, ensure:

- unique page title per page,
- meta description,
- Open Graph image,
- favicon,
- canonical URLs if needed,
- semantic heading structure,
- accessible links/buttons,
- image alt text,
- 404 handling,
- working booking flow,
- working contact links,
- HTTPS through Vercel,
- no console errors,
- no broken assets.

---

## 23. Existing Figma Screenshot Reference

The starter conversation contains a screenshot showing three Figma frames:

- **Index**
- **Service**
- **Booking page**

The screenshot indicates:
- existing dark hero imagery,
- serif-heavy headings,
- beige/light content areas,
- dark footer/header areas,
- statistics strip,
- repeated white service cards,
- booking page with a simple form/embed zone.

The screenshot is a reference only.

**Do not reproduce its layout blindly.**

The original Figma URL has not yet been recorded in this knowledge file.  
Add it here once available:

```text
FIGMA_URL=
```

---

## 24. Outstanding Inputs Needed Before Build

Collect these before serious implementation:

- Original Figma URL
- Full-resolution source assets
- Logo files
- Fonts or current font references
- Final approved copy
- Verified stats / numbers
- Service list
- Service descriptions
- Booking provider
- Booking URL
- Contact email
- Social links
- Domain
- Analytics requirement
- Privacy/cookie requirement
- Any existing brand guidelines

Do not invent missing values.

---

## 25. Final Decision Summary

### Use

```text
Next.js
JavaScript
Tailwind
Motion
Vercel

ChatGPT
Codex
Anti-Slop
Browser visual feedback loop
Context7 when needed
```

### Do not use initially

```text
Superpowers
Serena
Repomix
Promptfoo
Emdash
Container Use
Playwright MCP
Redux
Database
CMS
Complex backend
```

### Design thesis

```text
EDITORIAL ARCHITECTURE
×
OPERATIONAL FIELD NOTES
×
PREMIUM HOSPITALITY
```

### Primary success criterion

The finished website should **not look like a Figma template or an AI-generated wellness landing page**.

It should look like the website of someone with real operational experience in the wellness-facility industry.

---

## 26. Operating Rule for the Next Chat

Before implementing:

1. Read this entire file.
2. Inspect the original Figma and assets.
3. Preserve facts/content that are approved.
4. Do not preserve weak layout decisions automatically.
5. Lock art direction and design tokens first.
6. Build hero first.
7. Render it.
8. Visually inspect it.
9. Correct it.
10. Only then continue to the rest of the site.

Do not generate the entire website in one uncontrolled pass.

---

# END
