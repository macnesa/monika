import Link from "next/link";

const toneStyles = {
  light: {
    link: "border-[#181619] bg-[#F5F1EB] text-[#181619] hover:bg-white focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-[#181619]",
  },
  dark: {
    link: "border-[#181619] bg-[#181619] text-[#F5F1EB] hover:bg-[#292529] focus-visible:ring-[#181619] focus-visible:ring-offset-[#F5F1EB]",
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
      className={`inline-flex min-h-[50px] items-center rounded-[16px] border px-5 text-[0.8125rem] font-medium leading-none tracking-[0.01em] outline-none transition-colors duration-[200ms] ease-out focus-visible:ring-2 focus-visible:ring-offset-4 motion-reduce:transition-none ${styles.link} ${className}`}
    >
      {children}
    </Link>
  );
}
