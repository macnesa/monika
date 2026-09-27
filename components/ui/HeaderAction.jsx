import Link from "next/link";

export default function HeaderAction({
  href,
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[40px] items-center gap-3 rounded-[2px] border border-[#F5F1EB] bg-[#F5F1EB] px-4 py-2.5 text-[0.6875rem] font-medium leading-none tracking-[0.035em] text-[#181619] outline-none transition-colors duration-200 hover:border-white hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black motion-reduce:transition-none ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="shrink-0 text-[0.8125rem] leading-none motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5"
      >
        ↗
      </span>
    </Link>
  );
}
