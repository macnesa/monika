
"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

const NAMESPACE = "omnikaflow-booking";
const EVENT_PATH = "monika-foretova-wxhrry/15min";

const EMBED_CONFIG = {
  theme: "dark",
  layout: "month_view",
};

export default function CalEmbed() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    let api;
    let timeout;

    const onReady = () => {
      if (!active) return;

      window.clearTimeout(timeout);
      setFailed(false);
    };

    const onFailed = () => {
      if (!active) return;

      setFailed(true);
    };

    timeout = window.setTimeout(onFailed, 25000);

    getCalApi({ namespace: NAMESPACE })
      .then((cal) => {
        if (!active) return;

        api = cal;

        cal("on", {
          action: "linkReady",
          callback: onReady,
        });

        cal("on", {
          action: "linkFailed",
          callback: onFailed,
        });

        cal("ui", {
          theme: "dark",
          layout: "month_view",
          hideEventTypeDetails: false,
          cssVarsPerTheme: {
            dark: {
              "cal-bg": "#181619",
              "cal-bg-subtle": "#211E25",
              "cal-bg-emphasis": "#292529",
              "cal-text": "#F5F1EB",
              "cal-text-emphasis": "#F5F1EB",
              "cal-text-subtle": "#C4BFBA",
              "cal-brand": "#F5F1EB",
              "cal-brand-text": "#181619",
              "cal-border-booker-width": "0px",
              radius: "10px",
            },
          },
        });
      })
      .catch(onFailed);

    return () => {
      active = false;

      window.clearTimeout(timeout);

      api?.("off", {
        action: "linkReady",
        callback: onReady,
      });

      api?.("off", {
        action: "linkFailed",
        callback: onFailed,
      });
    };
  }, []);

  return (
    <section
      aria-label="Book a 15-minute call with Monika"
      className="w-full min-w-0 bg-[#181619] text-[#F5F1EB]"
    >
      <Cal
        namespace={NAMESPACE}
        calLink={EVENT_PATH}
        config={EMBED_CONFIG}
        className={failed ? "hidden" : "w-full min-w-0"}
      />

      {failed && (
        <div className="mx-auto flex min-h-[400px] max-w-[640px] flex-col items-center justify-center px-5 py-12 text-center">
          <h2 className="text-[1.75rem] font-normal leading-[1.12] tracking-[-0.025em] text-[#F5F1EB] [font-family:var(--font-abc-diatype)]">
            Booking is temporarily unavailable here.
          </h2>

          <p role="status" className="mt-4 max-w-[440px] text-[0.9375rem] leading-7 text-[#C4BFBA]">
            You can still choose a time directly through Cal.com.
          </p>

          <a
            href={`https://cal.com/${EVENT_PATH}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[16px] bg-[#F5F1EB] px-6 py-3 text-[0.8125rem] font-medium leading-none tracking-[0.01em] text-[#181619] outline-none transition-colors duration-200 ease-out hover:bg-white focus-visible:ring-2 focus-visible:ring-[#F5F1EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#181619]"
          >
            Open booking on Cal.com
          </a>
        </div>
      )}
    </section>
  );
}
