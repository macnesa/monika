import Link from "next/link";

export default function SecondaryCta({
  href,
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[44px] items-center rounded-[16px] border border-white/50 px-4 py-3 text-[0.75rem] font-medium leading-none tracking-[0.01em] text-white outline-none transition-colors duration-[200ms] ease-out hover:border-white hover:bg-white/[0.08] focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black motion-reduce:transition-none ${className}`}
    >
      {children}
    </Link>
  );
}
