import Link from "next/link";

const toneStyles = {
  light: {
    link: "border-[#181619] bg-[#F5F1EB] text-[#181619] focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-[#181619] motion-reduce:hover:bg-[#181619] motion-reduce:hover:text-[#F5F1EB] motion-reduce:focus-visible:bg-[#181619] motion-reduce:focus-visible:text-[#F5F1EB]",
    fill: "bg-[#181619]",
    rollover: "text-[#F5F1EB]",
  },
  dark: {
    link: "border-[#181619] bg-[#181619] text-[#F5F1EB] focus-visible:ring-[#181619] focus-visible:ring-offset-[#F5F1EB] motion-reduce:hover:bg-[#F5F1EB] motion-reduce:hover:text-[#181619] motion-reduce:focus-visible:bg-[#F5F1EB] motion-reduce:focus-visible:text-[#181619]",
    fill: "bg-[#F5F1EB]",
    rollover: "text-[#181619]",
  },
};

export default function PrimaryCta({
  href,
  children,
  tone = "light",
  className = "",
}) {
  const styles = toneStyles[tone] ?? toneStyles.light;

  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-[50px] items-center overflow-hidden rounded-[2px] border px-5 text-[0.75rem] font-medium leading-none tracking-[0.02em] outline-none focus-visible:ring-2 focus-visible:ring-offset-4 ${styles.link} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 translate-y-full motion-safe:transition-transform motion-safe:duration-[320ms] motion-safe:ease-[cubic-bezier(0.76,0,0.24,1)] motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0 ${styles.fill}`}
      />

      <span className="relative z-10 flex items-center gap-6 motion-safe:transition-transform motion-safe:duration-[360ms] motion-safe:ease-[cubic-bezier(0.76,0,0.24,1)] motion-safe:group-hover:-translate-y-[150%] motion-safe:group-focus-visible:-translate-y-[150%]">
        <span>{children}</span>

        <span
          aria-hidden="true"
          className="shrink-0 text-[0.9375rem] leading-none"
        >
          ↗
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`absolute inset-0 z-10 flex translate-y-full items-center justify-center px-5 motion-safe:transition-transform motion-safe:duration-[360ms] motion-safe:ease-[cubic-bezier(0.76,0,0.24,1)] motion-safe:group-hover:translate-y-0 motion-safe:group-focus-visible:translate-y-0 ${styles.rollover}`}
      >
        <span className="flex items-center gap-6">
          <span>{children}</span>

          <span className="shrink-0 text-[0.9375rem] leading-none">
            ↗
          </span>
        </span>
      </span>
    </Link>
  );
}