# Monika — Design Foundation

Document status: PROPOSED  
Document version: 0.1.1  
Project: Monika / Omnikaflow  
Owner / approval authority: Project Owner  
Applies to: `/`, `/services`, `/book`  
Prototype review trigger: first rendered Homepage Header + Hero on desktop and mobile

## 1. Purpose

This document converts the chosen Monika art direction into implementable visual rules without pretending that untested values are final.

The foundation exists to prevent two failures:

1. reproducing the current Figma's generic wellness-template language;
2. replacing it with generic AI-editorial styling that is equally disconnected from Monika's actual experience.

This document is `PROPOSED`. The first Header + Hero prototype is intended to validate or revise exact typography, color, grid, spacing, and image proportions before broader implementation.

## 2. Current project direction the design must make tangible

Monika should read as:

> an experienced wellness operator + facility strategist + practitioner.

The strongest narrative distinction is the progression:

```text
reception
→ operations
→ running wellness centres
→ facility consulting / training
```

The experience should feel earned, operational, and specific rather than aspirational or influencer-led.

## 3. Creative direction

### Creative premise

**Editorial architecture × operational field notes × premium hospitality**

### Intended perception

The site should feel:

- editorial;
- architectural;
- precise;
- experienced;
- mature;
- warm but not soft;
- premium but not luxury-template;
- human but not influencer-like.

### It must not become

- a beige spa template;
- a luxury-retreat brochure;
- a SaaS landing page with wellness photography;
- a dashboard pretending to be editorial;
- a pseudo-architectural website full of fake diagrams;
- an AI portfolio composed of oversized type, random lines, coordinates, and decorative motion.

## 4. Design principles and observable consequences

| Principle | Observable consequence | Boundary / failure to avoid |
|---|---|---|
| Experience before decoration | chronology, responsibilities, process, and real operational material shape composition | decorative “field notes” without real information |
| Typography carries identity | large type establishes hierarchy; small labels clarify context | using serif everywhere to signal “premium” |
| Authored asymmetry | image, copy, labels, and proof may occupy unequal grid regions | random scattering or competing anchors |
| Strong pauses | generous negative space separates changes in narrative mode | empty space with no pacing/hierarchy job |
| Photography as evidence/atmosphere | crop and scale respond to subject and narrative role | every image using one rounded landscape component |
| Restraint | borders, accent, motion, and UI chrome are sparse | visual effects stacked merely to appear designed |
| Service-specific structure | each service visualizes its actual type of expertise | one repeated card/component with swapped copy |
| Conversion clarity | Book is quieter and more direct than Home/Services | art direction obstructing booking completion |

## 5. Typography

### 5.1 Primary decision

**PROPOSED:** `IBM Plex Sans` becomes the main visual voice for the prototype.

Use for:

- hero display;
- page headings;
- body copy;
- navigation;
- service titles;
- labels;
- CTA language;
- numerical annotations.

Reasoning: Monika's differentiation is operational expertise. A sans-led system shifts the site away from the familiar serif-heavy wellness/luxury vocabulary and lets the actual story carry the personality.

### 5.2 Existing serif

**Existing Figma reference:** `Marcellus`, weight `400`, Regular.

**PROPOSED new role:** limited signature accent only.

Potential uses:

- `Omnikaflow` wordmark;
- one deliberately selected editorial accent if later proven useful.

Do not use Marcellus by default for:

- all H1/H2 headings;
- long body copy;
- every service title;
- generic quote styling;
- numerical proof.

### 5.3 No third font by default

Do not add a monospace family merely to simulate technical or field-note language.

Operational labels should be created through scale, tracking, case, alignment, and real information—not a “technical-looking” font.

### 5.4 Proposed role hierarchy

These are relationships, not final pixel values.

| Role | Treatment |
|---|---|
| Wordmark | Marcellus 400; compact and restrained |
| Hero display | IBM Plex Sans Regular/Medium; dominant; tight but readable leading |
| Section heading | IBM Plex Sans Regular/Medium; strong scale contrast |
| Body | IBM Plex Sans Regular; comfortable reading width |
| Metadata / operational label | IBM Plex Sans Medium; small; uppercase where appropriate; tracked |
| Numerical proof | IBM Plex Sans; large enough to read as evidence but not a generic stats component |
| Navigation / controls | IBM Plex Sans Medium; compact and direct |

### 5.5 Typography validation

Before typography is LOCKED, test:

- real homepage hero copy;
- long Services copy;
- long and short navigation labels;
- mobile wrapping;
- numerals and units;
- loading and fallback behavior;
- zoom/reflow;
- font implementation against the repository's local Next.js 16.3.6 documentation.

## 6. Color system

The role system is stronger than the exact swatches. The values below are prototype starting points.

### 6.1 Proposed tokens

```text
--surface-primary:   #F1EEE7  warm mineral/off-white
--surface-dark:      #171717  near-black charcoal
--text-primary:      #1B1B1A
--text-secondary:    #625F59
--text-inverse:      #F3F0E9
--line-subtle:       #D2CCC1
--accent-oxide:      #9D5134
```

### 6.2 Color roles

- `surface-primary`: dominant light reading surface.
- `surface-dark`: strong contrast surface for selected transitions/header/footer where justified.
- `text-primary`: normal high-priority text.
- `text-secondary`: metadata/supporting copy only after contrast verification.
- `line-subtle`: structural rules and separators.
- `accent-oxide`: sparse emphasis for index/annotation/interaction; never a flood-fill brand gimmick.

### 6.3 Color boundaries

Avoid:

- beige on every surface;
- sage/green merely because the category is wellness;
- gradients without a communication role;
- multiple competing accent colors;
- color as the only carrier of meaning.

Exact values remain PROPOSED until tested against real photography, controls, focus states, and text contrast.

## 7. Grid, width, and alignment

### 7.1 Proposed scaffolding

- Desktop: 12-column composition grid.
- Tablet: 6-column composition grid.
- Mobile: 4-column composition grid.

This is scaffolding, not a stylistic obligation. If the first prototype proves a simpler grid clearer, revise it.

### 7.2 Width relationships

Prototype targets:

- wide authored composition: approximately `1360–1440px` maximum content field;
- prose reading width: approximately `620–720px`;
- page-edge spacing should scale with viewport rather than use one fixed large margin.

### 7.3 Alignment rule

Every intentional offset/asymmetry must still answer:

- what is the stable anchor?
- what is the dominant entity?
- what reads first?
- what relationship must stay visible?
- how does this transform on mobile?

No arbitrary free-floating elements.

## 8. Spacing and pacing

Do not build the site from repeated utility patterns such as identical `py-*` values on every section.

Use three pacing modes:

### Dense

For information that belongs together:

- operational labels;
- service sub-points;
- proof attached directly to a statement;
- booking instructions.

### Standard

For normal content relationships:

- heading to body;
- image caption to image;
- service explanation to supporting material.

### Pause

For a deliberate narrative transition:

- identity → biography;
- biography → expertise;
- one service mode → another;
- exploration → booking.

Large whitespace must signal a change in mode, not merely make the page look expensive.

## 9. Surface, border, radius, and elevation

### Radius

Default visual language: near-square.

- ordinary surfaces: `0–4px` equivalent range;
- larger radius only when a named object genuinely benefits from it;
- no universal rounded-card grammar.

### Border

Prefer thin, low-contrast structural rules over container boxes.

### Shadow

Avoid decorative shadows by default.

Separate content using:

- hierarchy;
- surface change;
- spacing;
- crop;
- rule;
- overlap when justified.

## 10. Image and photography treatment

Photography should alternate between human presence, operational evidence, and atmosphere according to section responsibility.

Rules:

- preserve source quality;
- crop intentionally by breakpoint;
- desktop and mobile may use different focal crops;
- do not apply one universal aspect ratio;
- do not apply one universal radius;
- avoid dark overlays merely to make white text readable if a different composition is stronger;
- do not use generated or stock photography as implied evidence of Monika's work;
- captions/annotations should carry real place, role, date, process, or operational context when available.

## 11. Operational annotation language

Allowed annotation sources:

- chronology;
- place;
- role;
- project/service category;
- facility flow;
- training module;
- operational responsibility;
- verified metric;
- process stage.

Example forms:

```text
01 / 03
FACILITY DESIGN
PRAGUE → SOUTH CAROLINA → BALI
RECEPTION → CHANGE → HEAT → COLD → RECOVERY
```

These are information structures, not decoration.

Do not add:

- fake coordinates;
- decorative crosshairs;
- fake blueprint measurements;
- random technical codes;
- giant section numbers with no navigation or orientation job.

## 12. Homepage visual grammar

Homepage is the most editorial and biographical page.

Hierarchy model:

> type-first + person-first + temporal progression.

### Proposed Hero grammar

Do not use:

> full-bleed lifestyle background + left headline + CTA.

Instead:

- navigation/header remains visually light;
- small identity/category label establishes context;
- story-led large sans headline becomes the dominant entity;
- portrait/facility image occupies a distinct offset region rather than becoming a background;
- small operational annotation attaches to the image or story;
- numerical proof is optional and must be verified before prominent use;
- generous negative space creates tension between story and image.

Conceptual composition only:

```text
OMNIKAFLOW                              HOME  SERVICES  BOOK

MONIKA
WELLNESS FACILITY CONSULTING                    01 / 03

I started on reception
at eighteen.

Fourteen years later,
I help build and run
wellness facilities.

                                      [ PORTRAIT / FACILITY ]
                                      [ real annotation ]
```

The exact copy remains governed by client-approved source material. The lines above may be used only as clearly identified prototype copy while final copy is unresolved.

## 13. Services visual grammar

Services page is the most operational/architectural page.

Do not render all services as one repeated white card component.

### 01 — Facility Design Consultation

Primary model: **spatial**.

Potential structure when supported by source material:

```text
RECEPTION → CHANGE → HEAT → COLD → RECOVERY
```

Use layout/flow relationships, annotated facility imagery, and spatial decision material.

### 02 — Sauna Master Training & Education

Primary model: **curriculum / protocol**.

Potential structure:

```text
01 AUFGUSS
02 CONTRAST THERAPY
03 SAFETY
04 GUEST EXPERIENCE
05 TRAIN THE TRAINER
06 DAILY STANDARD
```

The experience should read like structured expertise, not a feature grid.

### 03 — Wellness Facility Operations & Consulting

Primary model: **operating system / operational index**.

Potential structure:

```text
01 SYSTEMS
02 RETENTION
03 PROGRAMMING
04 PEOPLE
05 REVENUE
```

An accordion is permitted only if it genuinely improves long-content scanning and mobile disclosure. It is not the default merely because the current Figma uses expandable items.

## 14. Booking visual grammar

Book is intentionally the quietest page.

Hierarchy model:

> action-first.

Priorities:

1. what the call is;
2. duration / expectation;
3. booking action or embed;
4. what to prepare;
5. alternative contact.

Do not make Book a showcase section.

Prefer:

- strong whitespace;
- compact explanatory text;
- clear booking entity;
- minimal imagery or no hero photography when unnecessary;
- a third-party embed visually integrated without disguising its function.

Booking provider remains unverified until client confirmation.

## 15. Motion language

Motion comes after static composition proves itself.

Primary behavior:

> reveal → settle.

Potential approved families after static review:

- short text displacement + opacity;
- image mask/clip reveal;
- subtle hover response;
- section entry used to clarify hierarchy.

Avoid:

- constant parallax as a default;
- continuous movement;
- scroll pinning without a communication need;
- autoplay spectacle;
- custom cursor;
- decorative timelines that require motion to make sense.

Reduced-motion mode must preserve all meaning and action.

## 16. Responsive transformation

Mobile is a separate composition of the same hierarchy.

For every section specify:

- dominant entity;
- reading order;
- image order;
- crop/focal point;
- heading wrap/scale;
- page-edge spacing;
- CTA placement;
- annotation preservation/removal;
- interaction transformation.

For the Homepage Hero specifically:

- story remains first priority;
- image must not interrupt headline comprehension;
- annotation follows the entity it describes;
- do not preserve desktop offsets if they create awkward mobile whitespace;
- unverified metric rows should be omitted rather than forced into a cramped layout.

## 17. Explicit anti-patterns

Reject by default:

- full-site beige wellness palette;
- serif on every major heading;
- centered luxury copy over lifestyle photography;
- repetitive three-card service sections;
- pill-heavy navigation/labels;
- generic stat strip;
- random icons;
- fake-premium marketing language;
- large decorative shadows;
- universal rounded containers;
- gradient decoration;
- generic SaaS hero grammar;
- arbitrary line/crosshair/coordinate decoration;
- all sections using identical alignment/density;
- desktop merely stacked vertically on mobile;
- animation used as substitute for composition.

## 18. Prototype validation gate

Before this foundation may be promoted from `PROPOSED` toward `LOCKED`, render the first Homepage Header + Hero and evaluate at minimum:

- desktop wide viewport;
- common laptop viewport;
- narrow mobile viewport;
- one wider mobile viewport;
- actual/representative hero photography;
- real or explicitly DRAFT prototype copy;
- text wrapping;
- image crop;
- hierarchy;
- page-edge spacing;
- contrast;
- whether Marcellus remains useful as a signature accent;
- whether IBM Plex Sans produces the intended operator/strategist character;
- whether oxide accent is necessary or should be reduced/removed.

Acceptance question:

> Does the rendered result feel like an experienced wellness-facility operator with a deliberate editorial identity, rather than a wellness template or generic AI-editorial site?

Project Owner decides the answer.

## 19. Current decision classification

### Strong direction — retain unless prototype contradicts it

- editorial architecture × operational field notes × premium hospitality;
- operator/strategist identity over wellness-influencer identity;
- sans-led hierarchy;
- Marcellus no longer the default heading language;
- authored asymmetry with stable anchors;
- service-specific composition;
- near-square surfaces and minimal shadow;
- restrained motion;
- Book as conversion-first and visually quieter;
- operational annotations must contain real information.

### PROPOSED — validate in first prototype

- IBM Plex Sans as exact primary family;
- Marcellus as exact wordmark/signature family;
- exact hex values;
- oxide accent;
- 12 / 6 / 4 grid;
- exact content widths;
- exact type scale;
- exact spacing values;
- exact Header + Hero geometry.

### UNVERIFIED / unresolved input

- final public copy;
- verified numerical proof;
- final source assets and crops;
- final booking provider;
- final domain/contact/social data;
- final brand-name relationship between Monika and Omnikaflow.
