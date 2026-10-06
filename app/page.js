/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of pre-optimized production images. */

import HomeMotion from "@/components/home/HomeMotion";
import AmbientSurface from "@/components/ui/AmbientSurface";
import PrimaryCta from "@/components/ui/PrimaryCta";
import SecondaryCta from "@/components/ui/SecondaryCta";

function HeroSection() {
  return (
    <section
      data-motion-section="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[680px] items-end overflow-hidden bg-[#332D2A] text-[#F5F1EB] sm:min-h-[750px] lg:min-h-[780px]"
    >
      <div
        data-motion="hero-depth"
        className="absolute inset-0 -z-30"
      >
        <img
          data-motion="hero-image"
          src="/images/home/hero.webp"
          alt=""
          width="1920"
          height="3412"
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.62)_44%,rgba(0,0,0,0.22)_74%,rgba(0,0,0,0.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.36)_50%,rgba(0,0,0,0.12)_78%,rgba(0,0,0,0.06)_100%)]" />

      <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0)_100%)]" />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-12 pt-40 sm:px-8 sm:pb-16 sm:pt-36 lg:px-10 lg:pb-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9">
            <p
              data-motion="hero-eyebrow"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/72 sm:text-xs"
            >
              MONIKA · WELLNESS FACILITY CONSULTING
            </p>

            <h1
              data-motion="hero-title"
              id="hero-heading"
              className="mt-5 max-w-[800px] text-[2.875rem] font-medium leading-[0.98] tracking-[-0.04em] sm:mt-6 sm:text-[clamp(3.25rem,5.4vw,5rem)] [font-family:var(--font-abc-diatype)]"
            >
              A few years later, I was running the two largest wellness
              centres in the group.
            </h1>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-12 gap-x-6 gap-y-6 sm:mt-9 sm:gap-y-7 lg:gap-x-10">
          <p
            data-motion="hero-copy"
            className="col-span-12 max-w-[570px] text-[0.9375rem] leading-7 text-white/80 sm:text-base lg:col-span-6"
          >
            Now I work on other people&apos;s facilities: the layout, the team,
            and how the place runs once the doors open.
          </p>

          <div className="col-span-12 flex items-start lg:col-span-4 lg:col-start-9 lg:justify-end">
            <div
              data-motion="hero-cta"
              className="inline-block"
            >
              <PrimaryCta href="/book" tone="light">
                Book a 15-minute call
              </PrimaryCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section
      aria-label="Experience statistics"
      className="bg-[#211E25] text-[#F5F1EB]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-11 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4 lg:gap-x-12">
          <div>
            <p className="text-[2rem] font-medium leading-none tracking-[-0.025em] sm:text-[2.3rem] [font-family:var(--font-abc-diatype)]">
              8,000 m²
            </p>
            <p className="mt-3 text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-white/60">
              Facility Directed
            </p>
          </div>

          <div>
            <p className="text-[2rem] font-medium leading-none tracking-[-0.025em] sm:text-[2.3rem] [font-family:var(--font-abc-diatype)]">
              300+
            </p>
            <p className="mt-3 text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-white/60">
              Staff Led
            </p>
          </div>

          <div>
            <p className="text-[2rem] font-medium leading-none tracking-[-0.025em] sm:text-[2.3rem] [font-family:var(--font-abc-diatype)]">
              $138M
            </p>
            <p className="mt-3 text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-white/60">
              Group Revenue
            </p>
          </div>

          <div>
            <p className="text-[2rem] font-medium leading-none tracking-[-0.025em] sm:text-[2.3rem] [font-family:var(--font-abc-diatype)]">
              3
            </p>
            <p className="mt-3 text-[0.6875rem] uppercase leading-5 tracking-[0.1em] text-white/60">
              Countries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section
      data-motion-section="introduction"
      aria-labelledby="introduction-heading"
      className="bg-[#F2EFE9] text-[#181619]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-9 sm:gap-y-12 lg:gap-x-10">
          <div
            data-motion="intro-heading"
            className="order-1 col-span-12 md:order-2 md:col-span-6 md:col-start-7 md:row-start-1 md:pt-14 lg:pt-24"
          >
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#665F5A]">
              INTRODUCTION
            </p>

            <h2
              id="introduction-heading"
              className="mt-4 max-w-[17ch] text-[2.25rem] font-normal leading-[1] tracking-[-0.03em] sm:text-[clamp(2.5rem,3.9vw,3.5rem)] [font-family:var(--font-abc-diatype)]"
            >
              I started on wellness reception at eighteen and never left the industry.
            </h2>
          </div>

          <div className="order-2 col-span-12 md:order-1 md:col-span-5 md:row-span-2 md:row-start-1">
            <div
              data-motion="intro-image"
              className="w-full max-w-[450px] rounded-[10px] border border-[#BFB5AB] bg-[#EEE8E0] p-[6px] sm:p-2 md:max-w-none"
            >
              <img
                src="/images/home/introduction.webp"
                alt="Woman moving outdoors among palm trees"
                width="1179"
                height="1754"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-[2px] object-cover object-center"
              />
            </div>
          </div>

          <div className="order-3 col-span-12 md:col-span-6 md:col-start-7 md:row-start-2">
            <div
              data-motion="intro-copy"
              className="max-w-[610px] space-y-5 text-[0.9375rem] leading-7 text-[#5D5752] sm:text-base sm:leading-8"
            >
              <p>
                That was Infinit in the Czech Republic. I took the job because
                the building looked clean and organised, which was honestly the
                whole reason. A few years later I was operational director of
                the group, and somewhere in the middle of that I stopped
                thinking of it as a job.
              </p>

              <p>
                What I care about hasn&apos;t really changed since the reception
                desk: whether people walk out feeling better than they walked
                in, and whether the staff running the place are set up to make
                that happen. Everything else, layout and systems and
                programming, is in service of those two things.
              </p>

              <p>
                I work independently now, on other people&apos;s facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundSection() {
  return (
    <section
      data-motion-section="background"
      aria-labelledby="background-heading"
      className="relative isolate overflow-clip bg-[#E9E2D8] text-[#181619]"
    >
      <AmbientSurface
        idPrefix="background-ambient"
        motionHook="background-ambient"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-56 bg-[linear-gradient(to_bottom,#F2EFE9_0%,rgba(242,239,233,0.72)_34%,rgba(242,239,233,0)_100%)] sm:h-72 lg:h-80"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 sm:gap-y-16 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-6">
            <div>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#665F5A]">
                BACKGROUND
              </p>

              <h2
                id="background-heading"
                className="mt-4 max-w-[12ch] text-[2.3rem] font-normal leading-[1] tracking-[-0.035em] sm:text-[clamp(2.65rem,4.2vw,3.65rem)] [font-family:var(--font-abc-diatype)]"
              >
                <span className="block text-[#514B47]">
                  Fourteen years,
                </span>

                <span className="mt-1 block text-[1.08em] text-[#181619]">
                  three countries
                </span>
              </h2>
            </div>

            <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-14 lg:mt-16 lg:space-y-16">
              <article data-motion="career-record">
                <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-[#665F5A]">
                  01
                </p>

                <h3 className="mt-3 font-medium">
                  <span className="block text-[0.75rem] font-medium leading-none tracking-[0.08em] text-[#665F5A]">
                    Infinit,
                  </span>

                  <span className="mt-2 block text-[2rem] leading-[1] tracking-[-0.03em] text-[#181619] sm:text-[clamp(2.1rem,2.8vw,2.6rem)] [font-family:var(--font-abc-diatype)]">
                    Czech Republic
                  </span>
                </h3>

                <p className="mt-4 max-w-[650px] text-[0.9375rem] leading-7 text-[#5D5752] sm:mt-5 sm:text-base sm:leading-8">
                  <span className="font-medium text-[#292527]">
                    Reception to operational director over ten years.
                  </span>{" "}
                  I ran the group&apos;s largest branch:{" "}
                  <span className="font-medium text-[#292527]">8,000 m²</span>,
                  twelve saunas, four pools, cold plunges and treatment rooms
                  alongside a second site, with{" "}
                  <span className="font-medium text-[#292527]">
                    around 300 people across both teams
                  </span>
                  , inside a group turning over $138M a year. I was also
                  responsible for opening Infinit Senohaby from an empty site,
                  doing the layouts, the operating systems, and the hiring and
                  training of everyone who worked there.
                </p>
              </article>

              <article data-motion="career-record">
                <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-[#665F5A]">
                  02
                </p>

                <h3 className="mt-3 font-medium">
                  <span className="block text-[0.75rem] font-medium leading-none tracking-[0.08em] text-[#665F5A]">
                    Mindzero,
                  </span>

                  <span className="mt-2 block text-[2rem] leading-[1] tracking-[-0.03em] text-[#181619] sm:text-[clamp(2.1rem,2.8vw,2.6rem)] [font-family:var(--font-abc-diatype)]">
                    United States
                  </span>
                </h3>

                <p className="mt-4 max-w-[650px] text-[0.9375rem] leading-7 text-[#5D5752] sm:mt-5 sm:text-base sm:leading-8">
                  I moved to South Carolina to join a contrast therapy startup
                  and I was responsible for launching its flagship studio in
                  Mount Pleasant. It reached{" "}
                  <span className="font-medium text-[#292527]">
                    564 members
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-[#292527]">
                    $85K in monthly revenue within six months
                  </span>
                  , off a presale that signed{" "}
                  <span className="font-medium text-[#292527]">
                    close to 200 people before opening
                  </span>
                  . I built the programming, around eighteen session formats,
                  and trained the guides who ran them. I also brought Aufguss,
                  the guided steam ritual, into a market that had never seen it.
                </p>
              </article>

              <article data-motion="career-record">
                <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-[#665F5A]">
                  03
                </p>

                <h3 className="mt-3">
                  <span className="block text-[2rem] font-medium leading-[1] tracking-[-0.03em] text-[#181619] sm:text-[clamp(2.1rem,2.8vw,2.6rem)] [font-family:var(--font-abc-diatype)]">
                    Indonesia
                  </span>
                </h3>

                <p className="mt-4 max-w-[650px] text-[0.9375rem] leading-7 text-[#5D5752] sm:mt-5 sm:text-base sm:leading-8">
                  I consult here now on facility projects, operations work,
                  and staff training. I&apos;ve trained teams in Indonesia, most
                  recently{" "}
                  <span className="font-medium text-[#292527]">
                    six in-house saunamasters
                  </span>{" "}
                  for a studio in Bali.
                </p>
              </article>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
            <div className="lg:sticky lg:top-24">
              <div className="w-full rounded-[10px] border border-[#BFB5AB] bg-[#EEE8E0] p-2">
                <img
                  src="/images/home/portrait.webp"
                  alt="Portrait of a woman standing beside stone architecture"
                  width="1200"
                  height="1600"
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-[2px] object-cover object-center"
                />
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      data-motion-section="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden bg-[#2E2927] text-[#F5F1EB]"
    >
      <img
        data-motion="services-bg"
        src="/images/home/services-bg.webp"
        alt=""
        width="1153"
        height="2048"
        loading="lazy"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center brightness-[0.68] contrast-[0.82] saturate-[0.78] sm:brightness-100 sm:contrast-100 sm:saturate-100"
      />

      <div className="absolute inset-0 -z-20 bg-black/40 sm:bg-black/55" />

      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 sm:gap-y-14 lg:gap-x-10">
          <div
            data-motion="services-intro"
            className="col-span-12 lg:col-span-4"
          >
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/72">
              WHAT I DO
            </p>

            <h2
              id="services-heading"
              className="mt-4 max-w-[13ch] text-[2.3rem] font-normal leading-[1] tracking-[-0.035em] sm:text-[clamp(2.55rem,4.2vw,3.6rem)] [font-family:var(--font-abc-diatype)]"
            >
              Three services, and people rarely need just one.
            </h2>

            <p className="mt-6 max-w-[410px] text-[0.9375rem] leading-7 text-white/78 sm:text-base">
              Someone calls about a room that empties out too fast.
              <br />
              It turns out the layout is fine and the schedule isn&apos;t.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <article data-motion="service-record" className="py-7 sm:py-8">
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-white/58">
                01
              </p>

              <div className="mt-3 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
                <h3 className="max-w-[14ch] text-[1.75rem] font-medium leading-[1.02] tracking-[-0.025em] text-white sm:text-[clamp(1.9rem,2.7vw,2.45rem)] [font-family:var(--font-abc-diatype)]">
                  Facility design consultation
                </h3>

                <p className="mt-4 max-w-[430px] text-[0.9375rem] leading-7 text-white/75 lg:mt-0">
                  Layout, guest flow, capacity, and how the hot and cold spaces
                  sit against each other. Best before the drawings are locked,
                  though I&apos;ll tell you honestly what&apos;s still fixable
                  if the building&apos;s already up.
                </p>
              </div>
            </article>

            <article
              data-motion="service-record"
              className="border-t border-white/30 py-7 sm:py-8"
            >
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-white/58">
                02
              </p>

              <div className="mt-3 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
                <h3 className="max-w-[14ch] text-[1.75rem] font-medium leading-[1.02] tracking-[-0.025em] text-white sm:text-[clamp(1.9rem,2.7vw,2.45rem)] [font-family:var(--font-abc-diatype)]">
                  Sauna master training and education
                </h3>

                <p className="mt-4 max-w-[430px] text-[0.9375rem] leading-7 text-white/75 lg:mt-0">
                  Rituals, Aufguss, contrast therapy, and the difference between
                  a guest who feels looked after and one who feels processed.
                </p>
              </div>
            </article>

            <article
              data-motion="service-record"
              className="border-t border-white/30 py-7 sm:py-8"
            >
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-white/58">
                03
              </p>

              <div className="mt-3 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
                <h3 className="max-w-[14ch] text-[1.75rem] font-medium leading-[1.02] tracking-[-0.025em] text-white sm:text-[clamp(1.9rem,2.7vw,2.45rem)] [font-family:var(--font-abc-diatype)]">
                  Operations and consulting
                </h3>

                <p className="mt-4 max-w-[430px] text-[0.9375rem] leading-7 text-white/75 lg:mt-0">
                  Systems, staffing, membership, programming, revenue. The
                  unglamorous half of the business, and usually where the money
                  is.
                </p>
              </div>
            </article>

            <div
              data-motion="services-cta"
              className="pt-6 sm:pt-8 lg:pl-[72px]"
            >
              <SecondaryCta href="/services">
                See All Three In Detail
              </SecondaryCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      data-motion-section="contact"
      aria-labelledby="contact-heading"
      className="bg-[#F2EFE9] text-[#181619]"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-7 sm:gap-y-10 lg:gap-x-10">
          <div
            data-motion="contact-primary"
            className="col-span-12 lg:col-span-7"
          >
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#5D5752]">
              START HERE
            </p>

            <h2
              id="contact-heading"
              className="mt-4 max-w-[13ch] text-[2.35rem] font-normal leading-[1] tracking-[-0.035em] sm:text-[clamp(2.6rem,4.5vw,3.9rem)] [font-family:var(--font-abc-diatype)]"
            >
              Tell me what you&apos;re working on.
            </h2>
          </div>

          <div
            data-motion="contact-secondary"
            className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-1"
          >
            <p className="max-w-[430px] text-[0.9375rem] leading-7 text-[#514C48] sm:text-base sm:leading-8">
              Fifteen minutes. A few questions first so I turn up knowing
              something about your project instead of asking you to explain it
              twice.
            </p>

            <PrimaryCta
              href="/book"
              tone="dark"
              className="mt-6 sm:mt-7"
            >
              Book a 15-minute call
            </PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141217] text-[#F5F1EB]">
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-11 sm:px-8 sm:pb-10 sm:pt-14 lg:px-10 lg:pt-16">
        <p className="text-[2.75rem] font-normal leading-none tracking-[-0.03em] sm:text-[clamp(2.75rem,4vw,3.5rem)] [font-family:var(--font-tiempos-headline)]">
          Omnikaflow
        </p>

        <div className="mt-8 flex flex-col gap-3 text-xs leading-5 tracking-[0.02em] text-white/55 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>Omnikaflow — Wellness facility consulting</p>
          <p>omnikaflow@gmail.com · Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F2EFE9] text-[#181619] [font-family:var(--font-abc-diatype)]">
      <HomeMotion />

      <main>
        <HeroSection />
        <ProofSection />
        <IntroductionSection />
        <BackgroundSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
