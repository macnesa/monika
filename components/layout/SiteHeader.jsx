"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import HeaderAction from "@/components/ui/HeaderAction";

const activeNavClass =
  "text-white outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black";

const inactiveNavClass =
  "outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices = pathname === "/services";
  const isWork = pathname === "/work";

  return (
    <header data-site-header="" data-work-theme={isWork ? "light" : undefined} className={`${isWork ? "absolute min-[769px]:fixed data-[work-ending=true]:absolute data-[work-theme=light]:text-[#181619] data-[work-theme=light]:[&_nav]:text-[#625D58] data-[work-theme=light]:[&_nav_a]:text-inherit data-[work-theme=light]:[&_a]:focus-visible:ring-[#181619] data-[work-theme=light]:[&>div>a:last-child]:border-[#181619] data-[work-theme=light]:[&>div>a:last-child]:bg-[#181619] data-[work-theme=light]:[&>div>a:last-child]:text-[#F5F1EB]" : "absolute"} inset-x-0 top-0 z-30 text-[#F5F1EB]`}>
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-6 gap-y-5 px-5 py-5 sm:flex-nowrap sm:px-8 lg:px-10 lg:py-6">
        <Link
          href="/"
          aria-label="Omnikaflow home"
          className="text-[1.5rem] leading-none outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:text-[1.75rem] [font-family:var(--font-tiempos-headline)]"
        >
          Omnikaflow
        </Link>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex basis-full items-center justify-start gap-7 text-[0.6875rem] font-medium leading-none tracking-[0.02em] text-white/70 sm:order-none sm:basis-auto sm:justify-center sm:gap-8"
        >
          <Link
            href="/"
            aria-current={isHome ? "page" : undefined}
            className={isHome ? activeNavClass : inactiveNavClass}
          >
            Home
          </Link>

          <Link
            href="/services"
            aria-current={isServices ? "page" : undefined}
            className={isServices ? activeNavClass : inactiveNavClass}
          >
            Services
          </Link>

          <Link href="/work" aria-current={isWork ? "page" : undefined} className={isWork ? activeNavClass : inactiveNavClass}>
            Work
          </Link>
        </nav>

        <HeaderAction href="/book">Book A Call</HeaderAction>
      </div>
    </header>
  );
}
