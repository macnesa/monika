
/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of the supplied production image. */

import BookMotion from "../../components/book/BookMotion";
import CalEmbed from "../../components/book/CalEmbed";

export const metadata = {
  title: "Book a 15-minute call — Omnikaflow",
  description:
    "Book a free 15-minute consultation. Choose a time and share a few details about your project.",
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
              className="mt-5 max-w-[760px] text-[clamp(3.4rem,7.4vw,6.4rem)] font-medium leading-[0.96] tracking-[-0.035em] [font-family:var(--font-abc-diatype)]"
            >
              Book a 15-minute call
            </h1>
          </div>

          <div
            data-motion="book-hero-support"
            className="max-w-[440px] lg:justify-self-end"
          >
            <p className="text-[0.9375rem] leading-7 text-[#D3CECA] sm:text-base sm:leading-8">
              Free, and no pitch at the end of it. Choose a time and share a few
              details about your project.
            </p>

            <a
              href="#booking"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-[16px] bg-[#F5F1EB] px-6 py-3 text-[0.75rem] font-medium leading-none tracking-[0.02em] text-[#181619] outline-none transition-colors duration-[200ms] ease-out hover:bg-white focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-black/60"
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
      className="grid grid-cols-1 gap-x-8 lg:grid-cols-3 lg:gap-x-14"
    >
      <div className="border-t border-[#CFC8C0] pb-8 pt-7 lg:pb-0">
        <h2 className="text-[1.75rem] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[2rem] [font-family:var(--font-abc-diatype)]">
          Before the call
        </h2>

        <p className="mt-4 max-w-[460px] text-[0.9375rem] leading-7 text-[#625D58]">
          Share your project details and choose the option that best describes
          your situation.
        </p>
      </div>

      <div className="border-t border-[#CFC8C0] pb-8 pt-7 lg:pb-0">
        <h2 className="text-[1.75rem] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[2rem] [font-family:var(--font-abc-diatype)]">
          On the call
        </h2>

        <p className="mt-4 max-w-[460px] text-[0.9375rem] leading-7 text-[#625D58]">
          You talk, I ask questions. I&apos;ll say if you don&apos;t need me.
        </p>
      </div>

      <div className="border-t border-[#CFC8C0] pt-7">
        <h2 className="text-[1.75rem] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[2rem] [font-family:var(--font-abc-diatype)]">
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
      className="w-full min-w-0 scroll-mt-24 rounded-[10px] bg-[#181619] p-2"
    >
      <CalEmbed />
    </div>
  );
}

function BookingSection() {
  return (
    <section
      aria-label="Booking information"
      data-motion-section="book-booking"
      className="bg-[#F2EFE9] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 sm:gap-12">
        <BookingInfo />
        <BookingSurface />
      </div>
    </section>
  );
}

export default function BookPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F2EFE9] text-[#181619] [font-family:var(--font-abc-diatype)]">
      <main>
        <BookHero />
        <BookingSection />
      </main>

      <BookMotion />
    </div>
  );
}
