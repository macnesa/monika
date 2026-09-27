/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of the supplied production image. */

import BookMotion from "../../components/book/BookMotion";

export const metadata = {
  title: "Book a 15-minute call — Omnikaflow",
  description:
    "Book a free 15-minute consultation. Three questions before you pick a time.",
};

function BookHero() {
  return (
    <section
      aria-labelledby="booking-hero-heading"
      data-motion-section="book-hero"
      className="relative isolate flex min-h-[640px] overflow-hidden bg-[#332D2A] text-[#F5F1EB] sm:min-h-[700px] lg:min-h-[720px]"
    >
      <img
        src="/images/book/hero.webp"
        alt=""
        width="1153"
        height="2048"
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[center_70%] sm:object-[center_72%]"
      />

      <div className="absolute inset-0 -z-20 bg-black/45" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,18,23,0.48)_0%,rgba(20,18,23,0.06)_28%,rgba(20,18,23,0.14)_58%,rgba(20,18,23,0.68)_100%)]" />

      <div className="mx-auto flex w-full max-w-[1240px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-10 lg:pb-24">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.62fr)] lg:items-end lg:gap-16">
          <div>
            <p
              data-motion="book-hero-eyebrow"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[#C4BFBA] sm:text-xs"
            >
              BOOK A CONSULTATION
            </p>

            <h1
              id="booking-hero-heading"
              data-motion="book-hero-title"
              className="mt-5 max-w-[760px] text-[clamp(3.4rem,7.4vw,6.4rem)] font-normal leading-[0.96] tracking-[-0.035em] [font-family:var(--font-marcellus)]"
            >
              Book a 15-minute call
            </h1>
          </div>

          <div
            data-motion="book-hero-support"
            className="max-w-[440px] lg:justify-self-end"
          >
            <p className="text-[0.9375rem] leading-7 text-[#D3CECA] sm:text-base sm:leading-8">
              Free, and no pitch at the end of it. Three questions before you
              pick a time.
            </p>

            <a
              href="#booking"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-[2px] bg-[#F5F1EB] px-6 py-3 text-[0.75rem] font-medium leading-none tracking-[0.02em] text-[#181619] outline-none transition-colors duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-black/60"
            >
              Pick a time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingInfo() {
  return (
    <div
      data-motion="book-booking-info"
      className="border-y border-black/15"
    >
      <div className="border-b border-black/15 py-8 sm:py-9">
        <h2 className="text-[1.75rem] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)] sm:text-[2rem]">
          Before the call
        </h2>

        <p className="mt-4 max-w-[460px] text-[0.9375rem] leading-7 text-[#625D58]">
          Where the project is, how big it is, and what you want to offer.
          That&apos;s the whole form.
        </p>
      </div>

      <div className="border-b border-black/15 py-8 sm:py-9">
        <h2 className="text-[1.75rem] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)] sm:text-[2rem]">
          On the call
        </h2>

        <p className="mt-4 max-w-[460px] text-[0.9375rem] leading-7 text-[#625D58]">
          You talk, I ask questions. I&apos;ll say if you don&apos;t need me.
        </p>
      </div>

      <div className="py-8 sm:py-9">
        <h2 className="text-[1.75rem] font-normal leading-[1.08] tracking-[-0.02em] [font-family:var(--font-marcellus)] sm:text-[2rem]">
          Rather email?
        </h2>

        <a
          href="mailto:omnikaflow@gmail.com"
          className="mt-4 inline-block text-[0.9375rem] leading-7 text-[#625D58] underline decoration-black/25 underline-offset-4 outline-none transition-colors duration-200 hover:text-[#181619] focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F2EFE9]"
        >
          omnikaflow@gmail.com
        </a>
      </div>
    </div>
  );
}

function BookingSurface() {
  return (
    <div
      id="booking"
      data-motion="book-booking-surface"
      className="scroll-mt-24 rounded-[10px] border border-[#C8BEB4] bg-[#EEE8E0] p-[6px] sm:p-2"
    >
      <div className="grid min-h-[420px] place-items-center rounded-[2px] border border-[#D7CEC4] bg-[#F6F2EC] px-6 py-16 text-center sm:min-h-[500px] lg:min-h-[540px]">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[#AAA39C]">
          TYPEFORM EMBED
        </p>
      </div>
    </div>
  );
}

function BookingSection() {
  return (
    <section
      aria-label="Booking information"
      data-motion-section="book-booking"
      className="bg-[#F2EFE9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] lg:items-start lg:gap-20 xl:gap-24">
        <BookingInfo />
        <BookingSurface />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141217] text-[#F5F1EB]">
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-11 sm:px-8 sm:pb-10 sm:pt-14 lg:px-10 lg:pt-16">
        <p className="text-[2.75rem] font-normal leading-none tracking-[-0.03em] sm:text-[clamp(2.75rem,4vw,3.5rem)] [font-family:var(--font-marcellus)]">
          Omnikaflow
        </p>

        <div className="mt-8 flex flex-col gap-3 text-xs leading-5 tracking-[0.02em] text-white/55 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p>Omnikaflow — Wellness facility consulting</p>

          <p>
            <a
              href="mailto:omnikaflow@gmail.com"
              className="outline-none transition-colors duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217]"
            >
              omnikaflow@gmail.com
            </a>{" "}
            · <span>Instagram</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F2EFE9] text-[#181619] [font-family:var(--font-ibm-plex-sans)]">
      <main>
        <BookHero />
        <BookingSection />
      </main>

      <Footer />

      <BookMotion />
    </div>
  );
}
