/* eslint-disable @next/next/no-img-element -- Project Owner requires direct delivery of the supplied production images. */

import PrimaryCta from "../../components/ui/PrimaryCta";
import ServicesDeck from "../../components/services/ServicesDeck";
import ServicesMotion from "../../components/services/ServicesMotion";

export const metadata = {
  title: "Services — Omnikaflow",
  description:
    "Wellness facility design consultation, sauna master training and education, and operations consulting.",
};

function ServicesHero() {
  return (
    <section
      data-motion-section="services-hero"
      aria-labelledby="services-hero-heading"
      className="relative isolate flex min-h-[660px] items-end overflow-hidden bg-[#332D2A] text-[#F5F1EB] sm:min-h-[720px] lg:min-h-[760px]"
    >
      <img
        src="/images/services/hero.webp"
        alt=""
        width="1920"
        height="1280"
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 -z-20 bg-black/35" />

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_top,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.52)_42%,rgba(0,0,0,0.16)_76%,rgba(0,0,0,0.04)_100%)]" />

      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0)_100%)]" />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-12 pt-40 sm:px-8 sm:pb-16 sm:pt-40 lg:px-10 lg:pb-[72px]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 sm:gap-y-10 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-7">
            <p
              data-motion="hero-eyebrow"
              className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/72 sm:text-xs"
            >
              SERVICES
            </p>

            <h1
              data-motion="hero-title"
              id="services-hero-heading"
              className="mt-5 max-w-[10ch] text-[clamp(3rem,8vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.035em] sm:mt-6 [font-family:var(--font-abc-diatype)]"
            >
              Design, training, operations.
            </h1>
          </div>

          <div
            data-motion="hero-support"
            className="col-span-12 max-w-[540px] lg:col-span-4 lg:col-start-9 lg:self-end"
          >
            <p className="text-[0.9375rem] leading-7 text-white/80 sm:text-base sm:leading-8">
              A few years later, I was running the two largest wellness
              centres in the group. Now I work on other people&apos;s facilities.
              I work worldwide, online and on site.
            </p>

            <div className="mt-7">
              <PrimaryCta href="/book" tone="light">
                Book a 15-minute call
              </PrimaryCta>
            </div>

            <p className="mt-5 max-w-[470px] text-xs leading-5 text-white/62 sm:text-sm sm:leading-6">
              Not sure which one you need? Book the call and describe the
              situation. Working that out is free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      aria-label="Services"
      className="bg-[#F2EFE9] px-4 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <ServicesDeck />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      data-motion-section="services-contact"
      aria-labelledby="services-contact-heading"
      className="bg-[#F2EFE9] text-[#181619]"
    >
      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:px-10 lg:pb-32 lg:pt-14">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-10">
          <div
            data-motion="contact-primary"
            className="col-span-12 lg:col-span-7"
          >
            <h2
              id="services-contact-heading"
              className="max-w-[11ch] text-[clamp(2.5rem,5vw,4.25rem)] font-normal leading-[1.02] tracking-[-0.03em] [font-family:var(--font-abc-diatype)]"
            >
              Still not sure?
            </h2>
          </div>

          <div
            data-motion="contact-secondary"
            className="col-span-12 max-w-[520px] lg:col-span-4 lg:col-start-9 lg:self-end"
          >
            <p className="text-[0.9375rem] leading-7 text-[#5D5753] sm:text-base sm:leading-8">
              Fifteen minutes. Describe the situation and I&apos;ll tell you
              what you need, or whether you need me at all.
            </p>

            <div className="mt-7">
              <PrimaryCta href="/book">Book a 15-minute call</PrimaryCta>
            </div>
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F2EFE9] text-[#181619] [font-family:var(--font-abc-diatype)]">
      <main>
        <ServicesHero />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />

      <ServicesMotion />
    </div>
  );
}
