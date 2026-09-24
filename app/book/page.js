/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of the supplied production image. */
import Link from "next/link";

export const metadata = {
  title: "Book a 15-minute call — Omnikaflow",
  description:
    "Book a free 15-minute consultation. Three questions before you pick a time.",
};

export default function BookPage() {
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
            <Link
              href="/services"
              className="outline-none hover:opacity-75 focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217]"
            >
              Services
            </Link>
            <span aria-disabled="true" className="cursor-default">
              Work
            </span>
          </nav>

          <a
            href="#booking"
            aria-current="page"
            className="rounded-[4px] bg-[#F5F1EB] px-4 py-3 text-[0.6875rem] font-medium leading-none tracking-[0.04em] text-[#181619] outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217] sm:px-5"
          >
            Book A Call
          </a>
        </div>
      </header>

      <main>
        <section
          aria-labelledby="booking-hero-heading"
          className="relative isolate flex min-h-[520px] overflow-hidden bg-[#332D2A] text-[#F5F1EB] sm:min-h-[560px]"
        >
          <img
            src="/images/book/hero.webp"
            alt=""
            width="1153"
            height="2048"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_70%] sm:object-[center_72%]"
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />

          <div className="mx-auto flex w-full max-w-[1000px] items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="max-w-[710px]">
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[#C4BFBA] sm:text-xs">
                BOOK A CONSULTATION
              </p>
              <h1
                id="booking-hero-heading"
                className="mt-5 text-[clamp(3rem,7vw,4rem)] font-normal leading-[1.02] tracking-[-0.03em] [font-family:var(--font-marcellus)]"
              >
                Book a 15-minute call
              </h1>
              <p className="mt-6 max-w-[600px] text-base leading-7 text-[#D3CECA] sm:text-lg sm:leading-8">
                Free, and no pitch at the end of it. Three questions before you
                pick a time.
              </p>
              <a
                href="#booking"
                className="mt-7 inline-flex rounded-[4px] bg-[#F5F1EB] px-6 py-4 text-sm font-medium tracking-[0.03em] text-[#181619] outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-black/60"
              >
                Pick a time
              </a>
            </div>
          </div>
        </section>

        <section
          aria-label="Booking information"
          className="bg-[#F2EFE9] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
        >
          <div className="mx-auto grid max-w-[1000px] gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(430px,1fr)] lg:items-start lg:gap-20">
            <div className="space-y-9 lg:pt-1">
              <div>
                <h2 className="text-[1.55rem] font-normal leading-tight [font-family:var(--font-marcellus)] sm:text-[1.8rem]">
                  Before the call
                </h2>
                <p className="mt-3 max-w-[440px] text-[0.9375rem] leading-7 text-[#625D58]">
                  Where the project is, how big it is, and what you want to
                  offer. That&apos;s the whole form.
                </p>
              </div>

              <div>
                <h2 className="text-[1.55rem] font-normal leading-tight [font-family:var(--font-marcellus)] sm:text-[1.8rem]">
                  On the call
                </h2>
                <p className="mt-3 max-w-[440px] text-[0.9375rem] leading-7 text-[#625D58]">
                  You talk, I ask questions. I&apos;ll say if you don&apos;t need me.
                </p>
              </div>

              <div>
                <h2 className="text-[1.55rem] font-normal leading-tight [font-family:var(--font-marcellus)] sm:text-[1.8rem]">
                  Rather email?
                </h2>
                <a
                  href="mailto:omnikaflow@gmail.com"
                  className="mt-3 inline-block text-[0.9375rem] leading-7 text-[#625D58] underline decoration-black/25 underline-offset-4 outline-none hover:text-[#181619] focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F2EFE9]"
                >
                  omnikaflow@gmail.com
                </a>
              </div>
            </div>

            <div
              id="booking"
              className="grid min-h-[300px] scroll-mt-8 place-items-center border border-dashed border-black/15 px-6 py-16 text-center sm:min-h-[320px]"
            >
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[#AAA39C]">
                TYPEFORM EMBED
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#141217] px-5 py-8 text-[#8F898D] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 text-xs tracking-[0.02em] sm:flex-row sm:items-center sm:justify-between">
          <p>Omnikaflow — Wellness facility consulting</p>
          <p>
            <a
              href="mailto:omnikaflow@gmail.com"
              className="outline-none hover:text-[#F5F1EB] focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#141217]"
            >
              omnikaflow@gmail.com
            </a>{" "}
            · <span>Instagram</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
