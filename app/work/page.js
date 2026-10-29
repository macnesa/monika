/* eslint-disable @next/next/no-img-element -- Locally optimized Work photographs with fixed layout bounds. */
import WorkMotion from "@/components/work/WorkMotion";
import PrimaryCta from "@/components/ui/PrimaryCta";

export const metadata = {
  title: "Work — Omnikaflow",
  description: "Six projects, three countries. Operations, facility launches, team training, and guided contrast therapy.",
};

// Project content and placeholder sources

// Temporary Unsplash photographs. None depicts the named client project.
// source is retained for replacement/credit; photo is the fixed Unsplash asset ID.
const photographs = [
  { id: "thermal", photo: "1784888433049-1d0a019c14ef", source: "Ywo3yXSVNKA", credit: "Jean Woloszczyk", alt: "Bathing guests in an outdoor geothermal pool beside modern architecture" },
  { id: "sauna-window", photo: "1759302353545-48b07c821abc", source: "z9tWdzn35xo", credit: "Auroom Wellness", alt: "Timber sauna benches surrounding a stone heater and panoramic window" },
  { id: "spa", photo: "1769011496453-d6c20730843f", source: "acIfmclr0fA", credit: "Auroom Wellness", alt: "Contemporary timber sauna interior and stone heater" },
  { id: "sauna-glow", photo: "1770573322077-ecce9b2807b9", source: "zQxPUONNUwo", credit: "Auroom Wellness", alt: "Warm light across timber sauna walls and tiered benches" },
  { id: "sauna-stove", photo: "1759302354553-cf87ceb9135c", source: "sGaeprNkO0M", credit: "Auroom Wellness", alt: "Wood-burning sauna stove beside tiered timber seating" },
  { id: "bali-villa", photo: "1752769041956-1af511b2a225", source: "lvrBUWYaiOI", credit: "Ari Kurniawan", alt: "People relaxing beside a tropical pool and planted garden wall" },
  { id: "sauna-amber", photo: "1770625467997-27b94e8b8f91", source: "cjR0lciDegY", credit: "HUUM", alt: "Amber lighting illuminating a timber sauna interior" },
  { id: "sauna-stone", photo: "1769011496453-d6c20730843f", source: "acIfmclr0fA", credit: "Auroom Wellness", alt: "Contemporary sauna benches and stone-filled heater" },
  { id: "sauna-detail", photo: "1770625468069-9393585d7113", source: "trJmlDR2_7s", credit: "HUUM", alt: "Sauna heater and timber details under soft ambient light" },
  { id: "sauna-bench", photo: "1757940113920-69e3686438d3", source: "4VmaQlznmw4", credit: "Auroom Wellness", alt: "Sculpted wooden benches inside a softly lit sauna" },
  { id: "sauna-warm", photo: "1770573318001-3cd4b266133a", source: "NgZn2-40nYY", credit: "Auroom Wellness", alt: "Horizontal timber cladding and warm sauna lighting" },
  { id: "pool-evening", photo: "1738654529364-a05099a96444", source: "-WtDBL6e4dc", credit: "Fish SUN", alt: "Palm-lined resort pool terrace at sunset" },
  { id: "bali-aerial", photo: "1770185998570-db739db7af47", source: "ruyr_SHbFuI", credit: "Egor", alt: "Aerial view of tropical resort villas beside turquoise water" },
  { id: "tropical-pool", photo: "1761744421612-339500ebc746", source: "jCPyNHjrmdY", credit: "Merve Kalafat Yılmaz", alt: "Swimming pool framed by tropical trees and foliage" },
  { id: "pool-garden", photo: "1755438938093-a29166eafde2", source: "168Xn8FVDu8", credit: "Summer Liu", alt: "A resort swimming pool surrounded by tropical planting" },
].map((image) => ({
  ...image,
  src: `/images/work/placeholders/${image.id}.webp`,
  thumbnail: `/images/work/placeholders/${image.id}-small.webp`,
  sourceUrl: image.source ? `https://unsplash.com/photos/${image.source}` : `https://images.unsplash.com/photo-${image.photo}`,
  downloadUrl: `https://images.unsplash.com/photo-${image.photo}?auto=format&fit=max&w=1600&q=76&fm=webp`,
}));

const gallery = (start) => photographs.slice(start, start + 3);
// Transcribed from the supplied Figma screenshots; not independently verified.
const narratives = {
  mindzero: "MINDZERO brought contrast therapy to a market where most people had never tried it. I moved to the US to help expand the brand, launch its flagship studio in Mount Pleasant, consulting on the layout, the sauna and cold plunge builds, and the audio and visual systems. A presale signed nearly 200 members before the doors opened, and within six months the studio reached 564 members and $85K in monthly revenue. I built the programming and hired and trained the guides and saunamasters who led the sessions. Together we introduced Aufguss to guests who had never experienced it, and it became the studio’s most popular session, alongside our community-focused guided sessions. What we built was more than a studio: it was a strong, loyal community.",
  infinit: "Infinit is one of the most respected wellness groups in the Czech Republic, and it’s where I learned everything from the beginning. I started on the wellness reception at eighteen and spent ten years growing with the company, as shift leader, general manager, operational director, and in my last few years, regional director. I ran the group’s largest branch: 8,000 m², twelve saunas, four pools, cold plunges and treatment rooms, space for 500 customers at a time. I also led the opening of Infinit Senohraby, a 4,000 m² centre for 250 guests at a time, from an empty site to opening day. I worked on the layout, the operating systems, and the hiring and training of everyone who worked there. Together, the two largest branches gave me responsibility for around 300 people. Infinit is built on exceptional customer service, beautiful and original design, and facilities made to last. That’s where my principles were born.",
  "nirvana-life": "Nirvana Life is a social club in the heart of Bali that brings fitness, recovery, clean food and community together under one roof. Our collaboration is ongoing, with several events every month: one-hour guided contrast therapy journeys between the sauna and cold plunge, with breathwork, aromatherapy, smoke rituals and Aufguss, plus sauna nights with live DJs. So far we’ve guided around 1,000 guests, from experienced regulars to people stepping into a sauna or cold plunge for the very first time. Thanks to Nirvana, many of them felt the benefits firsthand.",
  holywings: "Holywings Wellness Club is Bali's first oceanfront wellness destination, a place to train, recover and connect by the sea. It's also the first in Bali to offer Aufguss every day, led by six in-house saunamasters I trained. Alongside them, I've guided many members through contrast therapy and Aufguss sessions myself, and I've loved being part of a community that brings locals and international guests together. I also consulted on the design of the club's new ocean-view recovery area, from the layout and materials to the details of the Aufguss sauna, the stove and the cold plunges. The result is the largest Aufguss sauna in Indonesia, with space for 50 guests and built-in audio and lighting designed around the ritual.",
  omni: "Omni is a science-led social wellness club bringing together movement, recovery, nutrition, and community in one space. I host community events and guide one-hour contrast therapy sessions, combining sauna and cold exposure with breathwork, meditation, smoke rituals, and Aufguss. It’s a welcoming space for people to connect, explore new wellness practices, and experience the benefits of coming together.",
  "the-ark": "The Ark is a unique recovery spa in the heart of Pererenan, the kind of place where you can slow down and reset. A place where every detail matters and creates the most peaceful atmosphere. Together we host regular sauna nights: one-hour guided journeys with breathwork, aromatherapy, Aufguss, smoke rituals and a natural body scrub ritual in the Steam Dome to finish.",
};
const pendingNarrative = () => ({ status: "pending-figma-copy", paragraphs: [] });

const projects = [
  { id: "infinit", number: "01", title: "Infinit", location: "CZECH REPUBLIC · 2013–2023", scope: "Operations, facility launch, team leadership", headline: "8,000 m². Twelve saunas, four pools, around 300 people.", narrative: pendingNarrative(), cover: { id: "infinit-cover", src: "/images/work/projects/infinit-cover.png" }, images: gallery(0) },
  { id: "nirvana-life", number: "02", title: "Nirvana Life", location: "BERAWA, BALI · ONGOING", scope: "Guided sessions, events, saunamaster courses", headline: "Around 1,000 guests guided so far.", narrative: pendingNarrative(), images: gallery(3) },
  { id: "holywings", number: "03", title: "Holywings Wellness Club", location: "BERAWA BEACH, BALI", scope: "Saunamaster training, facility design consultation, guided sessions", headline: "The largest Aufguss sauna in Indonesia, with space for 50 guests.", narrative: pendingNarrative(), images: gallery(6) },
  { id: "the-ark", number: "04", title: "The Ark", location: "PERERENAN, BALI", scope: "Sauna nights, guided contrast therapy", headline: "Sauna nights that finish in the Steam Dome.", narrative: pendingNarrative(), images: gallery(12) },
  { id: "omni", number: "05", title: "Omni", location: "SESEH, BALI", scope: "Community events, guided contrast therapy", headline: "One-hour contrast therapy sessions, built around community.", narrative: pendingNarrative(), images: gallery(9) },
  { id: "mindzero", number: "06", title: "MINDZERO", location: "USA", scope: "Flagship launch, programming, expansion, hiring and training", headline: "MINDZERO · USA", narrative: pendingNarrative(), cover: { id: "mindzero-aufguss", src: "/images/work/projects/mindzero-aufguss.jpg" }, images: [
    { id: "mindzero-aufguss", alt: "Monika leading an Aufguss session with a white towel at MINDZERO" },
    { id: "mindzero-group", alt: "A group gathered inside the MINDZERO sauna" },
    { id: "mindzero-preparation", alt: "Monika preparing a sauna session at MINDZERO" },
    { id: "mindzero", alt: "Monika seated inside a MINDZERO sauna" },
  ].map((image) => ({ ...image, src: `/images/work/projects/${image.id}.jpg`, downloadUrl: `/images/work/projects/${image.id}.jpg`, supplied: true })), testimonial: { quote: "Monika played a key role in launching Mindzero in the US. From building our flagship studio to developing our programming and training the team, she brought a lot of experience and passion to the project. I’ve since recommended her to many projects around the world and would happily do so again.", name: "David Semerad", role: "Founder & CEO, Mindzero" } },
].map((project) => ({ ...project, cover: project.cover ?? { id: project.id, src: `/images/work/projects/${project.id}.jpg` }, narrative: narratives[project.id] ? { status: "supplied-figma-copy", paragraphs: [narratives[project.id]] } : project.narrative }));

const projectCount = String(projects.length).padStart(2, "0");

const placeholderNotice = "Temporary Unsplash imagery — not project photographs.";

// Deterministic scatter composition

// Supplied Figma artboard: 1442 × 902. Keep photograph identity and frame together.
const scatterTiles = [
  { projectId: "infinit", id: "infinit-sauna-interior", positionClass: "min-[769px]:left-[0.000%] min-[769px]:top-[12.417%] min-[769px]:w-[16.644%] min-[769px]:h-[22.284%]" },
  { projectId: "nirvana-life", id: "nirvana-towel-portrait", positionClass: "min-[769px]:left-[20.804%] min-[769px]:top-[10.643%] min-[769px]:w-[10.402%] min-[769px]:h-[24.945%]" },
  { projectId: "the-ark", id: "the-ark", positionClass: "min-[769px]:left-[39.598%] min-[769px]:top-[16.630%] min-[769px]:w-[8.877%] min-[769px]:h-[14.302%]" },
  { projectId: "holywings", id: "holywings-aerial", positionClass: "min-[769px]:left-[60.125%] min-[769px]:top-[9.313%] min-[769px]:w-[11.789%] min-[769px]:h-[23.614%]" },
  { projectId: "omni", id: "omni-session", positionClass: "min-[769px]:left-[77.739%] min-[769px]:top-[14.191%] min-[769px]:w-[22.261%] min-[769px]:h-[22.616%]" },
  { projectId: "nirvana-life", id: "nirvana-towel", positionClass: "min-[769px]:left-[3.883%] min-[769px]:top-[44.678%] min-[769px]:w-[13.870%] min-[769px]:h-[18.293%]" },
  { projectId: "infinit", id: "infinit", positionClass: "min-[769px]:left-[82.039%] min-[769px]:top-[46.341%] min-[769px]:w-[15.257%] min-[769px]:h-[16.408%]" },
  { projectId: "holywings", id: "holywings-plunge", positionClass: "min-[769px]:left-[33.148%] min-[769px]:top-[35.255%] min-[769px]:w-[4.993%] min-[769px]:h-[8.093%]" },
  { projectId: "nirvana-life", id: "nirvana-session", positionClass: "min-[769px]:left-[68.863%] min-[769px]:top-[35.033%] min-[769px]:w-[4.300%] min-[769px]:h-[10.421%]" },
  { projectId: "omni", id: "omni-fan", positionClass: "min-[769px]:left-[73.717%] min-[769px]:top-[62.860%] min-[769px]:w-[6.657%] min-[769px]:h-[5.987%]" },
  { projectId: "infinit", id: "infinit-sauna-exterior", positionClass: "min-[769px]:left-[0.000%] min-[769px]:top-[77.716%] min-[769px]:w-[11.512%] min-[769px]:h-[14.856%]" },
  { projectId: "the-ark", id: "the-ark-steam-dome", positionClass: "min-[769px]:left-[17.337%] min-[769px]:top-[66.630%] min-[769px]:w-[12.205%] min-[769px]:h-[26.164%]" },
  { projectId: "nirvana-life", id: "nirvana-pool-night", positionClass: "min-[769px]:left-[34.270%] min-[769px]:top-[66.260%] min-[769px]:w-[14.190%] min-[769px]:h-[22.960%]" },
  { projectId: "holywings", id: "holywings", positionClass: "min-[769px]:left-[53.467%] min-[769px]:top-[67.738%] min-[769px]:w-[13.245%] min-[769px]:h-[21.064%]" },
  { projectId: "nirvana-life", id: "nirvana-guidance", positionClass: "min-[769px]:left-[69.695%] min-[769px]:top-[75.055%] min-[769px]:w-[19.487%] min-[769px]:h-[17.627%]" },
  { projectId: "the-ark", id: "the-ark-lounge", positionClass: "min-[769px]:left-[90.291%] min-[769px]:top-[77.716%] min-[769px]:w-[9.709%] min-[769px]:h-[14.412%]" },

  { projectId: "mindzero", id: "mindzero-group", positionClass: "min-[769px]:left-[20.000%] min-[769px]:top-[44.000%] min-[769px]:w-[9.000%] min-[769px]:h-[17.000%]" },
  { projectId: "mindzero", id: "mindzero-preparation", positionClass: "min-[769px]:left-[50.000%] min-[769px]:top-[10.000%] min-[769px]:w-[7.500%] min-[769px]:h-[22.000%]" },
].map((tile, index) => ({
  ...tile,
  image: { id: tile.id, thumbnail: `/images/work/projects/${tile.id}.jpg` },
  depth: [18, 5, 10, 9, 5, 7, 16, 5, 8, 6, 15, 10, 7, 4, 5, 6, 8, 7][index],
  zIndex: index % 3 + 1,
  order: [3, 0, 8, 1, 12, 6, 2, 9, 5, 4, 10, 13, 7, 11, 14, 15, 16, 17][index],
}));

export default function WorkPage() {
  const tile = (record, index) => (
    <button
      key={record.image.id}
      type="button"
      data-scatter-tile=""
      data-project={record.projectId}
      data-image-id={record.image.id}
      data-image-index={index % 3}
      data-depth={record.depth}
      data-order={record.order}
      data-tile-index={index}
      aria-label={`View ${projects.find((project) => project.id === record.projectId).title} project`}
      className={`relative block aspect-[4/3] min-w-0 bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 min-[769px]:absolute min-[769px]:aspect-auto ${record.positionClass} ${record.zIndex === 1 ? "z-[1]" : record.zIndex === 2 ? "z-[2]" : "z-[3]"}`}
    >
      <span data-scatter-depth="" className="block h-full w-full overflow-hidden">
        <img src={record.image.thumbnail} data-fallback-src={record.image.downloadUrl} alt="" width="1600" height="1200" loading={index < 6 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" className="h-full w-full object-cover" />
      </span>
    </button>
  );

  return (
    <main className="bg-[#F2EFE9] text-[#181619]">
      <WorkMotion projects={projects}>
        <div data-work-pin="" className="relative isolate">
          <section
            data-work-scatter=""
            aria-labelledby="work-heading"
            className="relative grid grid-cols-3 gap-3 overflow-hidden bg-[#F2EFE9] px-5 pb-8 pt-36 text-[#181619] min-[769px]:block min-[769px]:h-[100svh] min-[769px]:min-h-[640px] min-[769px]:p-0"
          >
            {scatterTiles.slice(0, 6).map(tile)}

            <div data-scatter-copy="" className="relative z-10 col-span-3 py-9 text-center min-[769px]:pointer-events-none min-[769px]:absolute min-[769px]:inset-x-0 min-[769px]:top-[39%] min-[769px]:py-0">
              <p className="text-[0.6875rem] font-medium tracking-[0.2em]">WORK</p>
              <div className="mt-4 flex items-start justify-center gap-2 min-[769px]:mt-3 min-[769px]:gap-4">
                <h1 id="work-heading" className="text-[clamp(3.75rem,9vw,10rem)] max-w-[90%] font-normal leading-[1.02] tracking-[-0.055em] [font-family:var(--font-tiempos-headline)]"><span data-work-heading-default=""><span data-work-word="" className="inline-block">All</span>{" "}<span data-work-word="" className="inline-block text-[#A49F99]">Work</span></span><span data-work-heading-preview="" hidden /></h1>
                <span data-work-count="" className="pt-1 text-xs min-[769px]:pt-3 min-[769px]:text-sm">({projectCount})</span>
              </div>
              <p className="mx-auto mt-5 max-w-[58ch] px-2 text-[0.875rem] leading-6 text-[#625D58] min-[769px]:mt-5">
                Grateful to everyone who let me be part of their wellness vision.
              </p>
            </div>

            {scatterTiles.slice(6).map((record, index) => tile(record, index + 6))}

            <div data-scatter-context="" aria-live="polite" className="pointer-events-none absolute inset-x-5 top-28 z-20 text-center min-[769px]:inset-x-10 min-[769px]:top-auto min-[769px]:bottom-16">
              <p hidden data-work-context-copy="" className="text-xs tracking-[0.02em]"><span data-work-context-number="" className="mr-3 text-[#625D58]" /><span data-work-context-title="" /><span data-work-context-scope="" className="hidden min-[1280px]:inline" /></p>
            </div>

            <div data-scatter-footer="" className="col-span-3 mt-8 flex items-end justify-between gap-5 text-[0.5625rem] font-medium leading-5 tracking-[0.08em] min-[769px]:absolute min-[769px]:inset-x-10 min-[769px]:bottom-5 min-[769px]:z-10 min-[769px]:mt-0 min-[769px]:text-[0.625rem]">
              <div><p>CZECH REPUBLIC — BALI — USA</p></div>
              <a href="#project-infinit" data-work-select="infinit" data-work-scroll-cue="" className="shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#181619]">SCROLL TO EXPLORE ↓</a>
            </div>
          </section>
          <div data-work-chapters="" className="relative bg-[#181619] text-[#F5F1EB] group-data-[enhanced=true]/work:absolute group-data-[enhanced=true]/work:inset-0 group-data-[enhanced=true]/work:grid group-data-[enhanced=true]/work:grid-rows-[minmax(0,1fr)_auto_auto]">
            <div data-title-window="" aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-auto row-start-1 row-end-2 self-end pb-10 z-10 hidden overflow-hidden group-data-[enhanced=true]/work:block">
              <div data-title-rail="" className="flex w-max items-baseline gap-[7vw] px-[5vw]">
                {projects.map((project) => <span key={project.id} data-rail-title="" className="block shrink-0 whitespace-nowrap text-[clamp(4rem,min(9.8vw,16svh),12rem)] font-normal leading-[1.1] tracking-[-0.045em] [font-family:var(--font-tiempos-headline)]">{project.title}</span>)}
              </div>
            </div>

            {projects.map((project, index) => (
              <article
                id={`project-${project.id}`}
                key={project.id}
                data-project-chapter=""
                aria-labelledby={`title-${project.id}`}
                className="relative isolate flex min-h-[850px] scroll-mt-0 flex-col justify-end overflow-hidden px-5 pb-10 pt-36 sm:min-h-[900px] sm:px-8 sm:pb-12 group-data-[enhanced=true]/work:col-start-1 group-data-[enhanced=true]/work:row-span-3 group-data-[enhanced=true]/work:row-start-1 group-data-[enhanced=true]/work:grid group-data-[enhanced=true]/work:grid-cols-1 group-data-[enhanced=true]/work:grid-rows-subgrid group-data-[enhanced=true]/work:min-h-0 group-data-[enhanced=true]/work:px-10 group-data-[enhanced=true]/work:pb-8 group-data-[enhanced=true]/work:pt-0 lg:px-[5vw]"
              >
                <img data-project-cover="" data-project-id={project.id} data-image-id={project.cover.id} data-original-src={project.cover.src} src={project.cover.src} data-fallback-src={project.cover.downloadUrl} alt="" width="1600" height="1200" loading={index === 0 ? "eager" : "lazy"} fetchPriority="auto" decoding="async" className={`absolute inset-0 -z-20 h-full w-full object-cover ${project.id === "mindzero" ? "object-[center_25%]" : ""}`} />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,18,23,0.45)_0%,rgba(20,18,23,0.35)_30%,rgba(20,18,23,0.86)_100%)]" />
                <h2 id={`title-${project.id}`} tabIndex={-1} className="mb-10 max-w-[14ch] text-[clamp(2.5rem,8vw,6rem)] font-normal leading-[1.05] tracking-[-0.04em] outline-none [font-family:var(--font-tiempos-headline)] group-data-[enhanced=true]/work:sr-only">{project.title}</h2>

                <div data-project-details="" className="relative group-data-[enhanced=true]/work:row-start-2 border-t border-white/35 pt-5">
                  <div className="mb-8 flex justify-between text-[0.625rem] tracking-[0.12em] group-data-[enhanced=true]/work:mb-6"><span>{project.number} / {projectCount}</span><span>WORK</span></div>
                  <div className="grid gap-7 group-data-[enhanced=true]/work:grid-cols-[minmax(200px,0.65fr)_minmax(0,1.35fr)] group-data-[enhanced=true]/work:gap-12">
                    <div className={`${project.testimonial ? "max-w-[44ch]" : "max-w-[28ch]"} text-xs leading-6`}>
                      <p className="tracking-[0.08em]">{project.location}</p><p className="mt-3 text-white/70">Scope – {project.scope}</p>
                      {project.testimonial && <blockquote className="mt-6 text-white/85 leading-[1.6]">
                        <p>{project.testimonial.quote}</p>
                        <footer className="mt-4"><p className="font-medium">{project.testimonial.name}</p><p className="text-white/65">{project.testimonial.role}</p></footer>
                      </blockquote>}
                    </div>
                    <div className="max-w-[48rem]">
                      <p data-project-headline="" className="text-[clamp(1.5rem,2.1vw,2.25rem)] font-normal leading-[1.15] tracking-[-0.025em] [font-family:var(--font-tiempos-headline)]">{project.headline}</p>
                      {project.narrative.paragraphs.map((paragraph) => <p data-project-narrative="" key={paragraph} className="mt-5 max-w-[75ch] text-sm leading-[1.7] text-white/80 group-data-[enhanced=true]/work:mt-3 group-data-[enhanced=true]/work:text-[clamp(0.75rem,0.94vw,0.875rem)]">{paragraph}</p>)}
                      <button type="button" data-work-discover={index} className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-white/60 text-sm font-medium outline-none hover:border-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#181619]"><span className="text-white/65">{project.title}</span><span>Discover +</span></button>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex items-end justify-between gap-6 group-data-[enhanced=true]/work:row-start-3 group-data-[enhanced=true]/work:mt-0 group-data-[enhanced=true]/work:pt-6">
                  <div className="max-w-[27ch]">
                    {project.id === "mindzero" && <p className="text-[0.5625rem] leading-4 text-white/55">Photograph supplied for MINDZERO.</p>}
                    <div aria-hidden="true" className="mt-3 hidden h-[2px] w-32 overflow-hidden bg-white/25 group-data-[enhanced=true]/work:block">
                      <span data-work-progress-fill="" className="block h-full w-full origin-left scale-x-0 bg-[#F5F1EB]" />
                    </div>
                  </div>
                  <div aria-label="Project chapters" className="flex gap-2">
                    {projects.map((item) => <button key={item.id} type="button" aria-label={`Go to ${item.title}`} aria-current={item.id === project.id ? "step" : undefined} data-work-select={item.id} className={`min-h-8 w-8 border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-white ${item.id === project.id ? "border-white" : "border-white/30 hover:border-white/80"}`} />)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div data-work-cursor="" aria-hidden="true" className="pointer-events-none invisible fixed left-0 top-0 z-50 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#181619] px-4 py-2 text-xs text-[#F5F1EB] opacity-0 min-[769px]:pointer-fine:block">View project →</div>
<dialog data-work-gallery="" data-lenis-prevent="" aria-label="Project image gallery" className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none bg-[#141217] p-5 text-[#F5F1EB] backdrop:bg-black/90 sm:p-8">
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex items-center justify-between gap-4 text-sm"><p data-gallery-title="" /><button type="button" data-gallery-action="close" className="min-h-11 px-3 outline-none focus-visible:ring-2 focus-visible:ring-white">Close ×</button></div>
            <div className="relative my-5 min-h-0 flex-1">
              <img data-gallery-image="" src={projects[0].cover.src} data-fallback-src={projects[0].cover.downloadUrl} alt={`Placeholder photograph: ${projects[0].cover.alt}`} width="1600" height="1200" loading="lazy" decoding="async" className="h-full w-full object-contain" />
            </div>
            <div className="flex items-center justify-between gap-3 text-sm">
              <button type="button" aria-label="Previous photograph" data-gallery-action="previous" className="min-h-11 px-3 outline-none focus-visible:ring-2 focus-visible:ring-white">← Previous</button>
              <p data-gallery-count="" aria-live="polite">01 / 03</p>
              <button type="button" aria-label="Next photograph" data-gallery-action="next" className="min-h-11 px-3 outline-none focus-visible:ring-2 focus-visible:ring-white">Next →</button>
            </div>
            <p data-gallery-credit="" className="mt-4 text-center text-[0.625rem] leading-4 text-white/55">{placeholderNotice}</p>
          </div>
        </dialog>
      </WorkMotion>
      <section aria-labelledby="work-contact-heading" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-2 md:items-end md:gap-16">
          <h2 id="work-contact-heading" className="max-w-[13ch] text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none tracking-[-0.035em]">Tell me what you&apos;re working on.</h2>
          <div className="md:justify-self-end"><PrimaryCta href="/book" tone="dark">Book a 15-minute call</PrimaryCta></div>
        </div>
      </section>
    </main>
  );
}
