import Link from "next/link";

export default function HeaderAction({
  href,
  children,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[40px] items-center rounded-[16px] border border-[#F5F1EB] bg-[#F5F1EB] px-4 py-2.5 text-[0.75rem] font-medium leading-none tracking-[0.015em] text-[#181619] outline-none transition-colors duration-[200ms] ease-out hover:border-white hover:bg-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black motion-reduce:transition-none ${className}`}
    >
      {children}
    </Link>
  );
}
