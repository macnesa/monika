/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of pre-optimized production images. */
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F2EFE9] text-[#181619] [font-family:var(--font-ibm-plex-sans)]">
      <header className="bg-[#141217] text-[#F5F1EB]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-5 px-5 py-5 sm:flex-nowrap sm:px-8 lg:px-10 lg:py-6">
          <Link
            href="/"
            aria-label="Omnikaflow home"
            className="text-[1.5rem] leading-none outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217] sm:text-[1.75rem] [font-family:var(--font-marcellus)]"
          >
            Omnikaflow
          </Link>

          <nav
            aria-label="Primary navigation"
            className="order-3 flex basis-full items-center justify-center gap-7 text-[0.6875rem] leading-none tracking-[0.02em] text-[#B8B3B1] sm:order-none sm:basis-auto sm:gap-8"
          >
            <Link
              href="/"
              aria-current="page"
              className="text-[#F5F1EB] outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217]"
            >
              Home
            </Link>
            <span aria-disabled="true" className="cursor-default">
              Services
            </span>
            <span aria-disabled="true" className="cursor-default">
              Work
            </span>
          </nav>

          <span
            aria-disabled="true"
            className="cursor-default rounded-[4px] bg-[#F5F1EB] px-4 py-3 text-[0.6875rem] font-medium leading-none tracking-[0.04em] text-[#181619] sm:px-5"
          >
            Book A Call
          </span>
        </div>
      </header>

      <main>
        <section
          aria-labelledby="hero-heading"
          className="relative isolate flex min-h-[680px] overflow-hidden bg-[#332D2A] text-[#F5F1EB] sm:min-h-[740px] lg:min-h-[760px]"
        >
          <img
            src="/images/home/hero.webp"
            alt=""
            width="1920"
            height="3412"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-black/55" />

          <div className="mx-auto flex w-full max-w-[1240px] items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="max-w-[760px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[#C4BFBA] sm:text-xs">
                MONIKA · WELLNESS FACILITY CONSULTING
              </p>
              <h1
                id="hero-heading"
                className="mt-6 max-w-[16ch] text-[clamp(2.65rem,8.8vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.025em] [font-family:var(--font-marcellus)]"
              >
                I started on reception at eighteen. A few years later I was
                running the two largest wellness centres in the group.
              </h1>
              <p className="mt-6 max-w-[610px] text-base leading-7 text-[#D3CECA] sm:text-lg sm:leading-8">
                Now I work on other people&apos;s facilities: the layout, the
                team, and how the place runs once the doors open.
              </p>
              <span
                aria-disabled="true"
                className="mt-8 inline-flex cursor-default rounded-full border border-white/35 bg-black/45 px-7 py-4 text-sm font-medium tracking-[0.025em] text-white backdrop-blur-sm sm:px-8 sm:text-base"
              >
                Book a 15-minute call
              </span>
            </div>
          </div>
        </section>

        <section
          aria-label="Experience statistics"
          className="bg-[#211E25] text-[#F5F1EB]"
        >
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
            <div className="border-b border-r border-white/10 px-3 py-7 sm:px-6 sm:py-9 lg:border-b-0 lg:first:border-l">
              <p className="text-[clamp(1.75rem,5vw,2.25rem)] leading-none [font-family:var(--font-marcellus)]">
                8,000 m²
              </p>
              <p className="mt-3 text-[0.6875rem] text-[#8F898D]">
                Facility Directed
              </p>
            </div>
            <div className="border-b border-white/10 px-3 py-7 sm:px-6 sm:py-9 lg:border-b-0 lg:border-r">
              <p className="text-[clamp(1.75rem,5vw,2.25rem)] leading-none [font-family:var(--font-marcellus)]">
                300+
              </p>
              <p className="mt-3 text-[0.6875rem] text-[#8F898D]">Staff Led</p>
            </div>
            <div className="border-r border-white/10 px-3 py-7 sm:px-6 sm:py-9">
              <p className="text-[clamp(1.75rem,5vw,2.25rem)] leading-none [font-family:var(--font-marcellus)]">
                $138M
              </p>
              <p className="mt-3 text-[0.6875rem] text-[#8F898D]">
                Group Revenue
              </p>
            </div>
            <div className="px-3 py-7 sm:px-6 sm:py-9 lg:border-r">
              <p className="text-[clamp(1.75rem,5vw,2.25rem)] leading-none [font-family:var(--font-marcellus)]">
                3
              </p>
              <p className="mt-3 text-[0.6875rem] text-[#8F898D]">Countries</p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="introduction-heading"
          className="bg-[#F2EFE9] px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
        >
          <div className="mx-auto grid max-w-[1060px] gap-12 md:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)] md:items-center lg:gap-20">
            <img
              src="/images/home/introduction.webp"
              alt="Woman moving outdoors among palm trees"
              width="1179"
              height="1754"
              loading="lazy"
              className="aspect-[3/4] w-full max-w-[390px] justify-self-center rounded-[18px] object-cover shadow-[0_8px_20px_rgba(30,25,22,0.12)] md:justify-self-start"
            />

            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#8C8780]">
                INTRODUCTION
              </p>
              <h2
                id="introduction-heading"
                className="mt-4 max-w-[18ch] text-[clamp(2.25rem,6vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)]"
              >
                I started on reception at eighteen and never left the industry.
              </h2>
              <div className="mt-7 max-w-[620px] space-y-5 text-[0.9375rem] leading-7 text-[#625D58]">
                <p>
                  That was Infinit in the Czech Republic. I took the job because
                  the building looked clean and organised, which was honestly
                  the whole reason. A few years later I was operational director
                  of the group, and somewhere in the middle of that I stopped
                  thinking of it as a job.
                </p>
                <p>
                  What I care about hasn&apos;t really changed since the reception
                  desk: whether people walk out feeling better than they walked
                  in, and whether the staff running the place are set up to make
                  that happen. Everything else, layout and systems and
                  programming, is in service of those two things.
                </p>
                <p>I work independently now, on other people&apos;s facilities.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="background-heading"
          className="bg-[#F2EFE9] px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10 lg:pb-40"
        >
          <div className="mx-auto grid max-w-[1060px] gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center lg:gap-20">
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#8C8780]">
                BACKGROUND
              </p>
              <h2
                id="background-heading"
                className="mt-4 max-w-[15ch] text-[clamp(2.35rem,6vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)]"
              >
                Fourteen years, three countries
              </h2>

              <div className="mt-10 space-y-8 text-[0.9375rem] leading-7 text-[#625D58]">
                <div>
                  <h3 className="text-lg text-[#242124] [font-family:var(--font-marcellus)]">
                    Infinit, Czech Republic
                  </h3>
                  <p className="mt-2">
                    Reception to operational director over ten years. I ran the
                    group&apos;s largest branch: 8,000 m², two saunas, four pools,
                    cold plunges and treatment rooms alongside a second site,
                    with around 300 people across both teams, inside a group
                    turning over $138M a year. I was also responsible for opening
                    Infinit Senohaby from an empty site, doing the layouts, the
                    operating systems, and the hiring and training of everyone
                    who worked there.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-[#242124] [font-family:var(--font-marcellus)]">
                    Mindzero, United States
                  </h3>
                  <p className="mt-2">
                    I moved to South Carolina to join a contrast therapy startup
                    and I was responsible for launching its flagship studio in
                    Mount Pleasant. It reached 564 members and $85K in monthly
                    revenue within six months, off a presale that signed close to
                    200 people before opening. I built the programming, around
                    eighteen session formats, and trained the guides who ran
                    them. I also brought Aufguss, the guided steam ritual, into a
                    market that had never seen it.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-[#242124] [font-family:var(--font-marcellus)]">
                    Indonesia
                  </h3>
                  <p className="mt-2">
                    I consult here now. Facility projects, operations work, and
                    staff training, including six in-house saunamasters for a
                    studio in Bali.
                  </p>
                </div>
              </div>
            </div>

            <img
              src="/images/home/portrait.webp"
              alt="Portrait of a woman standing beside stone architecture"
              width="1200"
              height="1600"
              loading="lazy"
              className="aspect-[4/5] w-full max-w-[470px] justify-self-center rounded-[18px] object-cover shadow-[0_8px_20px_rgba(30,25,22,0.12)] lg:justify-self-end"
            />
          </div>
        </section>

        <section
          aria-labelledby="services-heading"
          className="relative isolate overflow-hidden bg-[#2E2927] px-5 py-20 text-[#F5F1EB] sm:px-8 sm:py-28 lg:px-10 lg:py-32"
        >
          <img
            src="/images/home/services-bg.webp"
            alt=""
            width="1153"
            height="2048"
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-black/45" />

          <div className="mx-auto max-w-[1000px]">
            <div className="max-w-[720px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#C4BFBA]">
                WHAT I DO
              </p>
              <h2
                id="services-heading"
                className="mt-4 max-w-[18ch] text-[clamp(2.4rem,6vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)]"
              >
                Three services, and people rarely need just one.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#D3CECA] sm:text-lg">
                Someone calls about a room that empties out too fast.
                <br />
                It turns out the layout is fine and the schedule isn&apos;t.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <article className="rounded-[18px] border border-white/15 bg-white/25 p-7 backdrop-blur-md sm:p-8">
                <h3 className="text-[1.7rem] leading-[1.15] [font-family:var(--font-marcellus)]">
                  Facility design consultation
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#DDD8D4]">
                  Layout, guest flow, capacity, and how the hot and cold spaces
                  sit against each other. Best before the drawings are locked,
                  though I&apos;ll tell you honestly what&apos;s still fixable if the
                  building&apos;s already up.
                </p>
              </article>

              <article className="rounded-[18px] border border-white/15 bg-white/25 p-7 backdrop-blur-md sm:p-8">
                <h3 className="text-[1.7rem] leading-[1.15] [font-family:var(--font-marcellus)]">
                  Sauna master training and education
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#DDD8D4]">
                  Rituals, Aufguss, contrast therapy, and the difference between
                  a guest who feels looked after and one who feels processed.
                </p>
              </article>

              <article className="rounded-[18px] border border-white/15 bg-white/25 p-7 backdrop-blur-md sm:p-8">
                <h3 className="text-[1.7rem] leading-[1.15] [font-family:var(--font-marcellus)]">
                  Operations and consulting
                </h3>
                <p className="mt-5 text-sm leading-6 text-[#DDD8D4]">
                  Systems, staffing, membership, programming, revenue. The
                  unglamorous half of the business, and usually where the money
                  is.
                </p>
              </article>
            </div>

            <div className="mt-10 text-center">
              <span
                aria-disabled="true"
                className="inline-flex cursor-default rounded-[4px] bg-[#F5F1EB] px-6 py-4 text-sm font-medium tracking-[0.03em] text-[#181619]"
              >
                See All Three In Detail
              </span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className="bg-[#F2EFE9] px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-10 lg:py-36"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#4F4A46]">
              START HERE
            </p>
            <h2
              id="contact-heading"
              className="mt-5 text-[clamp(2.4rem,6vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)]"
            >
              Tell me what you&apos;re working on.
            </h2>
            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-[#393538] sm:text-lg sm:leading-8">
              Fifteen minutes. A few questions first so I turn up knowing
              something about your project instead of asking you to explain it
              twice.
            </p>
            <span
              aria-disabled="true"
              className="mt-7 inline-flex cursor-default rounded-[4px] bg-[#171419] px-6 py-4 text-sm font-medium tracking-[0.03em] text-[#F5F1EB]"
            >
              Book a 15-minute call
            </span>
          </div>
        </section>
      </main>

      <footer className="bg-[#141217] px-5 py-8 text-[#8F898D] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 text-xs tracking-[0.02em] sm:flex-row sm:items-center sm:justify-between">
          <p>Omnikaflow — Wellness facility consulting</p>
          <p>omnikaflow@gmail.com · Instagram</p>
        </div>
      </footer>
    </div>
  );
}
