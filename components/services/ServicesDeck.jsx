"use client";

import { useRef, useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Wellness Facility Design Consultation",
    support:
      "Design, planning and optimisation for commercial wellness spaces.",
    triggerId: "service-trigger-01",
    panelId: "service-panel-01",
  },
  {
    number: "02",
    title: "Sauna Master Training & Education",
    support:
      "Equipment is easy to operate. The experience is the hard part, and it's a trained skill rather than a personality trait.",
    triggerId: "service-trigger-02",
    panelId: "service-panel-02",
  },
  {
    number: "03",
    title: "Wellness Facility Operations & Consulting",
    support: "The part that decides whether the business works.",
    triggerId: "service-trigger-03",
    panelId: "service-panel-03",
  },
];

function FacilityDesignContent() {
  return (
    <>
      <div className="border-y border-[#C8BEB4] bg-[#E5DDD3] p-[6px] sm:p-2">
        <img
          src="/images/services/facility-design.webp"
          alt="A guided sauna session with guests"
          width="1920"
          height="1074"
          loading="lazy"
          className="aspect-[16/8] w-full rounded-[2px] object-cover sm:aspect-[16/7]"
        />
      </div>

      <div className="grid gap-6 px-6 py-10 text-[0.9375rem] leading-7 text-[#5D5753] sm:px-8 sm:py-12 md:grid-cols-2 md:gap-x-12 lg:px-10 lg:py-14">
        <div className="space-y-5">
          <p>
            I look at the whole route a guest takes. Where they arrive, where
            they change, how they get from hot to cold, and where they sit
            afterwards. That last one gets forgotten more than anything else,
            and it&apos;s usually why people leave earlier than they meant to.
          </p>

          <p>
            Then I go room by room. Sauna bench height and position. Lighting.
            Where the stove sits and how the air moves around it.
          </p>

          <p>
            The cold plunge and the jacuzzi, and how many people can use them
            before it stops being pleasant.
          </p>
        </div>

        <div className="space-y-5">
          <p>
            Plenty of this work happens in places that are already open. The
            walls aren&apos;t moving, but almost everything else can: what each
            room is used for, the order people move through it, where the queue
            builds. Usually it&apos;s the changing rooms.
          </p>

          <p>
            Bring me in before the drawings are locked and I&apos;ll work
            alongside your architect. If the building is already up, I&apos;ll
            tell you what can still change and what you&apos;re stuck with.
          </p>

          <p>
            I was responsible for opening Infinit Senohaby, 4,000 m² and 250
            guests at a time, from empty site to opening day.
          </p>
        </div>
      </div>
    </>
  );
}

function TrainingContent() {
  return (
    <>
      <div className="border-y border-[#C8BEB4] bg-[#E5DDD3] p-[6px] sm:p-2">
        <img
          src="/images/services/training.webp"
          alt="A sauna master leading a guided sauna session with guests"
          width="1920"
          height="1577"
          loading="lazy"
          className="aspect-[16/9] w-full rounded-[2px] object-cover object-center"
        />
      </div>

      <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <p className="max-w-[850px] text-[0.9375rem] leading-7 text-[#5D5753]">
          There&apos;s a gap between staff who know how to run a sauna and
          staff who can hold a room of twenty strangers for fifteen minutes and
          send them out feeling like wanting to come back to experience it
          again. Closing that gap is most of this work.
        </p>

        <div className="mt-10 border-t border-[#C8BEB4] pt-8 sm:mt-12 sm:pt-10">
          <div className="grid gap-7 md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.28fr)] md:gap-12 lg:gap-16">
            <h3 className="max-w-[12ch] text-[1.75rem] font-medium leading-[1.08] tracking-[-0.02em] text-[#181619] sm:text-[2rem] [font-family:var(--font-abc-diatype)]">
              What the training covers
            </h3>

            <ul className="border-b border-[#C8BEB4] text-[0.9375rem] leading-7 text-[#5D5753]">
              <li className="border-t border-[#C8BEB4] py-5 first:border-t-0 md:first:border-t">
                Aufguss: how to move the heat and the aroma around the room so
                every guest feels it, not just the two people nearest the stove
              </li>

              <li className="border-t border-[#C8BEB4] py-5">
                Contrast therapy guidance, including breathwork in the sauna and
                in the cold plunge
              </li>

              <li className="border-t border-[#C8BEB4] py-5">
                Safety: who shouldn&apos;t be in the room, what to watch for,
                and what to do when a guest starts to struggle
              </li>

              <li className="border-t border-[#C8BEB4] py-5">
                The basics of aromatherapy, and which oils suit which kind of
                session
              </li>

              <li className="border-t border-[#C8BEB4] py-5">
                Guest experience: how you greet someone who&apos;s nervous, when
                to explain, when to say nothing
              </li>

              <li className="border-t border-[#C8BEB4] py-5">
                Training your trainers, so your own team can bring the next
                intake up to standard after I&apos;ve gone
              </li>

              <li className="border-t border-[#C8BEB4] py-5">
                Daily standards: the checks and habits that keep quality steady
                on an ordinary Tuesday, not just when the owner is watching
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#C8BEB4] pt-8 sm:mt-12 sm:pt-10">
          <div className="grid gap-5 text-[0.9375rem] leading-7 text-[#5D5753] md:grid-cols-2 md:gap-x-12">
            <p>
              Delivered online or on site, depending on where you are and what
              stage you&apos;re at.
            </p>

            <p>
              I&apos;ve trained teams in the Czech Republic, the United States
              and Indonesia, most recently six in-house saunamasters for a
              studio in Bali. At Mindzero I introduced Aufguss to a market that
              had never seen it, and it became the most popular thing on the
              schedule.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function OperationsContent() {
  return (
    <>
      <div className="border-y border-[#C8BEB4] bg-[#E5DDD3] p-[6px] sm:p-2">
        <img
          src="/images/services/operations.webp"
          alt="Guests gathered in a pool"
          width="1920"
          height="1080"
          loading="lazy"
          className="aspect-[16/8] w-full rounded-[2px] object-cover object-center sm:aspect-[16/7]"
        />
      </div>

      <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <p className="max-w-[830px] text-[0.9375rem] leading-7 text-[#5D5753]">
          A beautiful facility with weak operations loses money quietly. Nobody
          complains, the reviews stay fine, and the numbers just sit there.
        </p>

        <div className="mt-10 border-b border-[#C8BEB4] sm:mt-12">
          <details className="group border-t border-[#C8BEB4]">
            <summary className="service-accordion-summary flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE8E0] sm:py-7">
              <span className="text-[1.35rem] font-medium leading-tight tracking-[-0.015em] text-[#181619] sm:text-[1.65rem] [font-family:var(--font-abc-diatype)]">
                Operational systems
              </span>

              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#AFA49A] text-lg leading-none text-[#181619] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>

            <p className="max-w-[860px] pb-7 pr-12 text-[0.9375rem] leading-7 text-[#5D5753] sm:pb-8">
              SOPs, maintenance schedules, hygiene protocols, and answers to the
              questions nobody wrote down, like how often the ice bath water
              gets changed when it&apos;s back to back all day, or what your
              team does when the heater dies at eleven on a Saturday morning.
            </p>
          </details>

          <details className="group border-t border-[#C8BEB4]">
            <summary className="service-accordion-summary flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE8E0] sm:py-7">
              <span className="text-[1.35rem] font-medium leading-tight tracking-[-0.015em] text-[#181619] sm:text-[1.65rem] [font-family:var(--font-abc-diatype)]">
                Retention and membership
              </span>

              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#AFA49A] text-lg leading-none text-[#181619] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>

            <p className="max-w-[860px] pb-7 pr-12 text-[0.9375rem] leading-7 text-[#5D5753] sm:pb-8">
              Where people drop out between a first visit and a second, which is
              rarely where owners assume. Presale and onboarding matter, but the
              first month after someone joins decides most of it. The strongest
              retention I&apos;ve seen came from community: guests who stayed
              and talked afterwards, and who could bring a friend in for free.
              At Mindzero, most of our new members came through someone they
              already knew.
            </p>
          </details>

          <details className="group border-t border-[#C8BEB4]">
            <summary className="service-accordion-summary flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE8E0] sm:py-7">
              <span className="text-[1.35rem] font-medium leading-tight tracking-[-0.015em] text-[#181619] sm:text-[1.65rem] [font-family:var(--font-abc-diatype)]">
                Programming
              </span>

              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#AFA49A] text-lg leading-none text-[#181619] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>

            <p className="max-w-[860px] pb-7 pr-12 text-[0.9375rem] leading-7 text-[#5D5753] sm:pb-8">
              What runs, when, and why. Saturday morning fills itself; the work
              is making Tuesday afternoon worth staffing. At Mindzero I built
              around eighteen session formats so the schedule had range.
            </p>
          </details>

          <details className="group border-t border-[#C8BEB4]">
            <summary className="service-accordion-summary flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE8E0] sm:py-7">
              <span className="text-[1.35rem] font-medium leading-tight tracking-[-0.015em] text-[#181619] sm:text-[1.65rem] [font-family:var(--font-abc-diatype)]">
                Manager and staff development
              </span>

              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#AFA49A] text-lg leading-none text-[#181619] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>

            <p className="max-w-[860px] pb-7 pr-12 text-[0.9375rem] leading-7 text-[#5D5753] sm:pb-8">
              Training the people who run the place day to day, so you&apos;re
              not the only one holding the standard. It also covers whether your
              team can cover for each other when someone calls in sick, which
              sounds small until it happens on a Saturday.
            </p>
          </details>

          <details className="group border-t border-[#C8BEB4]">
            <summary className="service-accordion-summary flex cursor-pointer list-none items-center justify-between gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[#181619] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EEE8E0] sm:py-7">
              <span className="text-[1.35rem] font-medium leading-tight tracking-[-0.015em] text-[#181619] sm:text-[1.65rem] [font-family:var(--font-abc-diatype)]">
                Revenue
              </span>

              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#AFA49A] text-lg leading-none text-[#181619] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>

            <div className="max-w-[860px] space-y-5 pb-7 pr-12 text-[0.9375rem] leading-7 text-[#5D5753] sm:pb-8">
              <p>
                Pricing and capacity, mostly. Plenty of facilities are busy and
                still not making money.
              </p>

              <p>
                The clearest example I can point to: Mount Pleasant reached 564
                members and $85K in monthly revenue within six months of
                opening, built on a presale that signed close to 200 people
                before the doors opened.
              </p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}

function ServiceTrigger({
  service,
  index,
  isActive,
  triggerRef,
  onActivate,
  onKeyDown,
}) {
  return (
    <button
      ref={triggerRef}
      id={service.triggerId}
      type="button"
      aria-expanded={isActive}
      aria-controls={service.panelId}
      onClick={() => onActivate(index)}
      onKeyDown={(event) => onKeyDown(event, index)}
      className={`group block w-full text-left outline-none transition-[background-color,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#181619] motion-reduce:transition-none ${
        isActive
          ? "bg-[#EEE8E0] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-9"
          : "bg-[#E7E0D7] px-6 py-5 hover:bg-[#E3DBD1] sm:px-8 sm:py-5 lg:px-10"
      }`}
    >
      {isActive ? (
        <div>
          <span className="block text-[0.625rem] font-medium tracking-[0.12em] text-[#817A74]">
            {service.number}
          </span>

          <div className="mt-5 grid gap-5 md:grid-cols-[minmax(0,1.8fr)_minmax(260px,1fr)] md:items-end md:gap-x-12 lg:grid-cols-[minmax(0,1.9fr)_minmax(300px,1fr)] lg:gap-x-16">
            <h2 className="max-w-[18ch] text-[clamp(2.15rem,4.7vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.025em] text-[#181619] [font-family:var(--font-abc-diatype)]">
              {service.title}
            </h2>

            <p className="max-w-[430px] text-sm leading-6 text-[#68625D] sm:text-[0.9375rem] sm:leading-7">
              {service.support}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[42px_minmax(0,1fr)] items-center gap-3 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-4">
          <span className="text-[0.625rem] font-medium tracking-[0.12em] text-[#847C76] transition-colors duration-300 group-hover:text-[#514B47] motion-reduce:transition-none">
            {service.number}
          </span>

          <h2 className="max-w-[30ch] text-[1.05rem] font-medium leading-[1.2] tracking-[-0.012em] text-[#5F5954] transition-colors duration-300 group-hover:text-[#181619] sm:text-[1.125rem] [font-family:var(--font-abc-diatype)] motion-reduce:transition-none">
            {service.title}
          </h2>
        </div>
      )}
    </button>
  );
}

export default function ServicesDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hasTransitioned, setHasTransitioned] = useState(false);

  const serviceRefs = useRef([]);
  const touchStartRef = useRef(null);

  const activateService = (index) => {
    const nextIndex = Math.max(0, Math.min(SERVICES.length - 1, index));

    if (nextIndex === activeIndex) {
      return;
    }

    setDirection(nextIndex > activeIndex ? 1 : -1);
    setHasTransitioned(true);
    setActiveIndex(nextIndex);

    requestAnimationFrame(() => {
      serviceRefs.current[nextIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "auto",
      });
    });
  };

  const activateAndFocus = (index) => {
    const nextIndex = Math.max(0, Math.min(SERVICES.length - 1, index));

    if (nextIndex !== activeIndex) {
      setDirection(nextIndex > activeIndex ? 1 : -1);
      setHasTransitioned(true);
      setActiveIndex(nextIndex);
    }

    requestAnimationFrame(() => {
      serviceRefs.current[nextIndex]?.focus();
    });
  };

  const handleServiceKeyDown = (event, index) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      activateAndFocus(index - 1);
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      activateAndFocus(index + 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      activateAndFocus(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      activateAndFocus(SERVICES.length - 1);
    }
  };

  const handleTouchStart = (event) => {
    const interactiveTarget = event.target.closest?.(
      'button, a, summary, input, textarea, select, [role="button"], [role="link"]',
    );

    if (interactiveTarget) {
      touchStartRef.current = null;
      return;
    }

    const touch = event.touches[0];

    if (!touch) {
      touchStartRef.current = null;
      return;
    }

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];

    touchStartRef.current = null;

    if (!start || !touch) {
      return;
    }

    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    const horizontalDistance = Math.abs(deltaX);
    const verticalDistance = Math.abs(deltaY);

    if (horizontalDistance < 60) {
      return;
    }

    if (horizontalDistance <= verticalDistance * 1.2) {
      return;
    }

    if (deltaX < 0) {
      activateService(activeIndex + 1);
      return;
    }

    activateService(activeIndex - 1);
  };

  const handleTouchCancel = () => {
    touchStartRef.current = null;
  };

  const getPanelAnimationClass = (index) => {
    if (!hasTransitioned || index !== activeIndex) {
      return "";
    }

    return direction > 0
      ? "service-panel-enter-next"
      : "service-panel-enter-prev";
  };

  return (
    <>
      <article
        data-motion-section="services-deck"
        className="overflow-hidden rounded-[10px] border border-[#C8BEB4] bg-[#EEE8E0]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        {SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <section
              key={service.number}
              className={index === 0 ? "" : "border-t border-[#C8BEB4]"}
            >
              <ServiceTrigger
                service={service}
                index={index}
                isActive={isActive}
                triggerRef={(node) => {
                  serviceRefs.current[index] = node;
                }}
                onActivate={activateService}
                onKeyDown={handleServiceKeyDown}
              />

              {isActive && (
                <div
                  id={service.panelId}
                  role="region"
                  aria-labelledby={service.triggerId}
                  className={getPanelAnimationClass(index)}
                >
                  {index === 0 && <FacilityDesignContent />}
                  {index === 1 && <TrainingContent />}
                  {index === 2 && <OperationsContent />}
                </div>
              )}
            </section>
          );
        })}
      </article>

      <style jsx global>{`
        .service-accordion-summary::-webkit-details-marker {
          display: none;
        }

        .service-accordion-summary::marker {
          content: "";
        }

        @keyframes service-panel-enter-next {
          from {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes service-panel-enter-prev {
          from {
            opacity: 0;
            transform: translate3d(0, -10px, 0);
          }

          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .service-panel-enter-next {
          animation: service-panel-enter-next 340ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .service-panel-enter-prev {
          animation: service-panel-enter-prev 340ms
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-panel-enter-next,
          .service-panel-enter-prev {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
