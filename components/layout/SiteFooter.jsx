export default function SiteFooter() {
  return (
    <footer className="bg-[#141217] text-[#F5F1EB]">
      <div className="mx-auto max-w-[1240px] px-5 pb-8 pt-11 sm:px-8 sm:pb-10 sm:pt-14 lg:px-10 lg:pt-16">
        <p className="text-[2.75rem] font-normal leading-none tracking-[-0.03em] sm:text-[clamp(2.75rem,4vw,3.5rem)] [font-family:var(--font-tiempos-headline)]">
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
