/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of the supplied production images. */
import Link from "next/link";

export const metadata = {
  title: "Services — Omnikaflow",
  description:
    "Wellness facility design consultation, sauna master training and education, and operations consulting.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F2EFE9] text-[#181619] [font-family:var(--font-ibm-plex-sans)]">
      <header className="bg-[#141217] text-[#F5F1EB]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-5 px-5 py-5 sm:flex-nowrap sm:px-8 lg:px-10 lg:py-6">
          <Link
            href="/"
            aria-label="Omnikaflow home"
            className="text-[1.5rem] leading-none outline-none hover:opacity-75 focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217] sm:text-[1.75rem] [font-family:var(--font-marcellus)]"
          >
            Omnikaflow
          </Link>

          <nav
            aria-label="Primary navigation"
            className="order-3 flex basis-full items-center justify-center gap-7 text-[0.6875rem] leading-none tracking-[0.02em] text-[#B8B3B1] sm:order-none sm:basis-auto sm:gap-8"
          >
            <Link
              href="/"
              className="outline-none hover:opacity-75 focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217]"
            >
              Home
            </Link>
            <span aria-current="page" className="text-[#F5F1EB]">
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
          aria-labelledby="services-hero-heading"
          className="relative isolate flex min-h-[640px] overflow-hidden bg-[#332D2A] text-[#F5F1EB] sm:min-h-[700px] lg:min-h-[740px]"
        >
          <img
            src="/images/services/hero.webp"
            alt=""
            width="1920"
            height="1280"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />

          <div className="mx-auto flex w-full max-w-[1240px] items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="max-w-[780px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[#C4BFBA] sm:text-xs">
                SERVICES
              </p>
              <h1
                id="services-hero-heading"
                className="mt-6 max-w-[13ch] text-[clamp(3rem,9vw,5.75rem)] font-normal leading-[0.98] tracking-[-0.035em] [font-family:var(--font-marcellus)]"
              >
                Design, training, operations.
              </h1>
              <p className="mt-7 max-w-[670px] text-base leading-7 text-[#D3CECA] sm:text-lg sm:leading-8">
                I started on reception at eighteen. A few years later I was
                running the two largest wellness centres in the group. Now I
                work on other people&apos;s facilities.
              </p>
              <span
                aria-disabled="true"
                className="mt-8 inline-flex cursor-default rounded-[4px] bg-[#F5F1EB] px-6 py-4 text-sm font-medium tracking-[0.03em] text-[#181619]"
              >
                Book a 15-minute call
              </span>
              <p className="mt-5 max-w-[590px] text-xs leading-5 text-[#C4BFBA] sm:text-sm sm:leading-6">
                Not sure which one you need? Book the call and describe the
                situation. Working that out is free.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-10 px-4 py-16 sm:space-y-14 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <article
            aria-labelledby="facility-design-heading"
            className="mx-auto max-w-[1100px] overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(38,32,28,0.08)]"
          >
            <header className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#8C8780]">
                ONE
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:items-end md:gap-12">
                <h2
                  id="facility-design-heading"
                  className="max-w-[18ch] text-[clamp(2.15rem,5vw,3.4rem)] font-normal leading-[1.08] tracking-[-0.025em] [font-family:var(--font-marcellus)]"
                >
                  Wellness Facility Design Consultation
                </h2>
                <p className="max-w-[430px] text-sm leading-6 text-[#68625D] sm:text-base sm:leading-7">
                  Design, planning and optimisation for commercial wellness
                  spaces.
                </p>
              </div>
            </header>

            <img
              src="/images/services/facility-design.webp"
              alt="A guided sauna session with guests"
              width="1920"
              height="1074"
              loading="lazy"
              className="aspect-[16/8] w-full object-cover sm:aspect-[16/7]"
            />

            <div className="grid gap-6 px-6 py-10 text-[0.9375rem] leading-7 text-[#5D5753] sm:px-10 sm:py-12 md:grid-cols-2 md:gap-x-12 lg:px-14 lg:py-14">
              <div className="space-y-5">
                <p>
                  I look at the whole route a guest takes. Where they arrive,
                  where they change, how they get from hot to cold, and where
                  they sit afterwards. That last one gets forgotten more than
                  anything else, and it&apos;s usually why people leave earlier than
                  they meant to.
                </p>
                <p>
                  Then I go room by room. Sauna bench height and position.
                  Lighting. Where the stove sits and how the air moves around
                  it.
                </p>
                <p>
                  The cold plunge and the jacuzzi, and how many people can use
                  them before it stops being pleasant.
                </p>
              </div>
              <div className="space-y-5">
                <p>
                  Plenty of this work happens in places that are already open.
                  The walls aren&apos;t moving, but almost everything else can: what
                  each room is used for, the order people move through it, where
                  the queue builds. Usually it&apos;s the changing rooms.
                </p>
                <p>
                  Bring me in before the drawings are locked and I&apos;ll work
                  alongside your architect. If the building is already up,
                  I&apos;ll tell you what can still change and what you&apos;re stuck
                  with.
                </p>
                <p>
                  I was responsible for opening Infinit Senohaby, 4,000 m² and
                  250 guests at a time, from empty site to opening day.
                </p>
              </div>
            </div>
          </article>

          <article
            aria-labelledby="training-heading"
            className="mx-auto max-w-[1100px] overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(38,32,28,0.08)]"
          >
            <header className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#8C8780]">
                TWO
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:items-end md:gap-12">
                <h2
                  id="training-heading"
                  className="max-w-[18ch] text-[clamp(2.15rem,5vw,3.4rem)] font-normal leading-[1.08] tracking-[-0.025em] [font-family:var(--font-marcellus)]"
                >
                  Sauna Master Training &amp; Education
                </h2>
                <p className="max-w-[440px] text-sm leading-6 text-[#68625D] sm:text-base sm:leading-7">
                  Equipment is easy to operate. The experience is the hard part,
                  and it&apos;s a trained skill rather than a personality trait.
                </p>
              </div>
            </header>

            <img
              src="/images/services/training.webp"
              alt="Guests stretching during a sauna session"
              width="1080"
              height="1346"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover object-center"
            />

            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="max-w-[850px] text-[0.9375rem] leading-7 text-[#5D5753]">
                There&apos;s a gap between staff who know how to run a sauna and
                staff who can hold a room of twenty strangers for fifteen
                minutes and send them out feeling like wanting to come back to
                experience it again. Closing that gap is most of this work.
              </p>

              <h3 className="mt-10 text-[1.65rem] leading-tight [font-family:var(--font-marcellus)] sm:text-[1.9rem]">
                What the training covers
              </h3>
              <ul className="mt-6 grid list-disc gap-x-12 gap-y-4 pl-5 text-[0.9375rem] leading-7 text-[#5D5753] md:grid-cols-2">
                <li>
                  Aufguss: how to move the heat and the aroma around the room so
                  every guest feels it, not just the two people nearest the stove
                </li>
                <li>
                  Contrast therapy guidance, including breathwork in the sauna
                  and in the cold plunge
                </li>
                <li>
                  Safety: who shouldn&apos;t be in the room, what to watch for, and
                  what to do when a guest starts to struggle
                </li>
                <li>
                  The basics of aromatherapy, and which oils suit which kind of
                  session
                </li>
                <li>
                  Guest experience: how you greet someone who&apos;s nervous, when
                  to explain, when to say nothing
                </li>
                <li>
                  Training your trainers, so your own team can bring the next
                  intake up to standard after I&apos;ve gone
                </li>
                <li>
                  Daily standards: the checks and habits that keep quality steady
                  on an ordinary Tuesday, not just when the owner is watching
                </li>
              </ul>

              <div className="mt-10 max-w-[850px] space-y-5 border-t border-black/10 pt-8 text-[0.9375rem] leading-7 text-[#5D5753]">
                <p>
                  Delivered online or on site, depending on where you are and
                  what stage you&apos;re at.
                </p>
                <p>
                  I&apos;ve trained teams in the Czech Republic, the United States
                  and Indonesia, most recently six in-house saunamasters for a
                  studio in Bali. At Mindzero I introduced Aufguss to a market
                  that had never seen it, and it became the most popular thing on
                  the schedule.
                </p>
              </div>
            </div>
          </article>

          <article
            aria-labelledby="operations-heading"
            className="mx-auto max-w-[1100px] overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(38,32,28,0.08)]"
          >
            <header className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-[#8C8780]">
                THREE
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:items-end md:gap-12">
                <h2
                  id="operations-heading"
                  className="max-w-[18ch] text-[clamp(2.15rem,5vw,3.4rem)] font-normal leading-[1.08] tracking-[-0.025em] [font-family:var(--font-marcellus)]"
                >
                  Wellness Facility Operations &amp; Consulting
                </h2>
                <p className="max-w-[430px] text-sm leading-6 text-[#68625D] sm:text-base sm:leading-7">
                  The part that decides whether the business works.
                </p>
              </div>
            </header>

            <img
              src="/images/services/operations.webp"
              alt="Guests gathered in a pool"
              width="1920"
              height="1080"
              loading="lazy"
              className="aspect-[16/8] w-full object-cover sm:aspect-[16/7]"
            />

            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <p className="max-w-[830px] text-[0.9375rem] leading-7 text-[#5D5753]">
                A beautiful facility with weak operations loses money quietly.
                Nobody complains, the reviews stay fine, and the numbers just
                sit there.
              </p>

              <div className="mt-9 border-b border-black/10">
                <details className="group border-t border-black/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4">
                    <span className="text-xl leading-tight [font-family:var(--font-marcellus)] sm:text-2xl">
                      Operational systems
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-black/20 text-lg leading-none group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[860px] pb-7 pr-10 text-[0.9375rem] leading-7 text-[#5D5753]">
                    SOPs, maintenance schedules, hygiene protocols, and answers
                    to the questions nobody wrote down, like how often the ice
                    bath water gets changed when it&apos;s back to back all day, or
                    what your team does when the heater dies at eleven on a
                    Saturday morning.
                  </p>
                </details>

                <details className="group border-t border-black/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4">
                    <span className="text-xl leading-tight [font-family:var(--font-marcellus)] sm:text-2xl">
                      Retention and membership
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-black/20 text-lg leading-none group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[860px] pb-7 pr-10 text-[0.9375rem] leading-7 text-[#5D5753]">
                    Where people drop out between a first visit and a second,
                    which is rarely where owners assume. Presale and onboarding
                    matter, but the first month after someone joins decides most
                    of it. The strongest retention I&apos;ve seen came from
                    community: guests who stayed and talked afterwards, and who
                    could bring a friend in for free. At Mindzero, most of our
                    new members came through someone they already knew.
                  </p>
                </details>

                <details className="group border-t border-black/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4">
                    <span className="text-xl leading-tight [font-family:var(--font-marcellus)] sm:text-2xl">
                      Programming
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-black/20 text-lg leading-none group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[860px] pb-7 pr-10 text-[0.9375rem] leading-7 text-[#5D5753]">
                    What runs, when, and why. Saturday morning fills itself; the
                    work is making Tuesday afternoon worth staffing. At Mindzero
                    I built around eighteen session formats so the schedule had
                    range.
                  </p>
                </details>

                <details className="group border-t border-black/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4">
                    <span className="text-xl leading-tight [font-family:var(--font-marcellus)] sm:text-2xl">
                      Manager and staff development
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-black/20 text-lg leading-none group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[860px] pb-7 pr-10 text-[0.9375rem] leading-7 text-[#5D5753]">
                    Training the people who run the place day to day, so
                    you&apos;re not the only one holding the standard. It also
                    covers whether your team can cover for each other when
                    someone calls in sick, which sounds small until it happens
                    on a Saturday.
                  </p>
                </details>

                <details className="group border-t border-black/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4">
                    <span className="text-xl leading-tight [font-family:var(--font-marcellus)] sm:text-2xl">
                      Revenue
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-black/20 text-lg leading-none group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="max-w-[860px] space-y-5 pb-7 pr-10 text-[0.9375rem] leading-7 text-[#5D5753]">
                    <p>
                      Pricing and capacity, mostly. Plenty of facilities are
                      busy and still not making money.
                    </p>
                    <p>
                      The clearest example I can point to: Mount Pleasant
                      reached 564 members and $85K in monthly revenue within six
                      months of opening, built on a presale that signed close to
                      200 people before the doors opened.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </article>
        </div>

        <section
          aria-labelledby="services-contact-heading"
          className="bg-[#211E25] px-5 py-24 text-center text-[#F5F1EB] sm:px-8 sm:py-32 lg:px-10 lg:py-36"
        >
          <div className="mx-auto max-w-[760px]">
            <h2
              id="services-contact-heading"
              className="text-[clamp(2.5rem,7vw,4.5rem)] font-normal leading-[1.02] tracking-[-0.025em] [font-family:var(--font-marcellus)]"
            >
              Still not sure?
            </h2>
            <p className="mx-auto mt-6 max-w-[620px] text-base leading-7 text-[#C9C3C1] sm:text-lg sm:leading-8">
              Fifteen minutes. Describe the situation and I&apos;ll tell you what
              you need, or whether you need me at all.
            </p>
            <span
              aria-disabled="true"
              className="mt-8 inline-flex cursor-default rounded-[4px] bg-[#F5F1EB] px-6 py-4 text-sm font-medium tracking-[0.03em] text-[#181619]"
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
