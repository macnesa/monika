import Link from "next/link";
import ArrowUpRightIcon from "@/components/ui/ArrowUpRightIcon";

export default function SecondaryCta({
  href,
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-[44px] items-center gap-4 rounded-[14px] border border-white/50 px-4 py-3 text-[0.75rem] font-medium leading-none tracking-[0.01em] text-white outline-none transition-colors duration-200 hover:border-white focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black motion-reduce:transition-none ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="shrink-0 text-[0.9375rem] leading-none motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5"
      >
        <ArrowUpRightIcon size={16} />
      </span>
    </Link>
  );
}
