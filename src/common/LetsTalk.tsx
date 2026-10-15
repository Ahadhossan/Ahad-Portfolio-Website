"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

/* ---------- Scroll reveal hook ---------- */
const useInView = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const reveal = (inView: boolean) =>
  `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

/* ---------- Component ---------- */
const LetsTalk = () => {
  const { ref, inView } = useInView<HTMLElement>(0.25);

  return (
    <section
      ref={ref}
      className="isolate overflow-hidden px-5 py-16 text-neutral-900 relative bg-white transition-colors duration-300 dark:bg-[#050505] dark:text-white sm:px-6 sm:py-24 md:px-10 md:py-30"
    >
      {/* Custom CSS (plain CSS so hover works on every device) */}
      <style>{`
        @keyframes lt-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .lt-float {
          animation: lt-float var(--d, 6s) ease-in-out var(--delay, 0s) infinite;
        }

        .lt-social {
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          transition: transform 0.3s ease, background-color 0.3s ease,
                      border-color 0.3s ease, color 0.3s ease;
        }
        .lt-social:hover,
        .lt-social:focus-visible {
          background-color: var(--c) !important;
          border-color: var(--c) !important;
          color: #fff !important;
          transform: scale(1.18) rotate(-8deg);
        }
        .lt-social:focus-visible {
          outline: 2px solid var(--c);
          outline-offset: 3px;
        }
        .lt-social:active { transform: scale(0.92); }

        @media (prefers-reduced-motion: reduce) {
          .lt-float { animation: none; }
          .lt-social, .lt-social:hover, .lt-social:focus-visible, .lt-social:active {
            transition: none;
            transform: none;
          }
        }
      `}</style>

      {/* Grid background (fades out toward the edges) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12] dark:opacity-[0.08] [background-image:linear-gradient(#2a7fa3_1px,transparent_1px),linear-gradient(90deg,#2a7fa3_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      {/* Center glow (slow breathing) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2a7fa3]/25 blur-[120px] motion-safe:animate-pulse dark:bg-[#2a7fa3]/35 sm:h-[560px] sm:w-[560px]"
        style={{ animationDuration: "6s" }}
      />

      {/* Orbit arcs + dots (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[8%] -z-10 hidden h-[420px] w-[280px] rounded-full border border-[#2a7fa3]/40 lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[18%] -z-10 hidden h-[400px] w-[280px] rounded-full border border-[#2a7fa3]/40 lg:block"
      />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className={`text-left sm:text-center ${reveal(inView)}`}>
          {/* Availability badge */}

          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-[#15919B] to-[#2a7fa3] bg-clip-text text-transparent dark:from-teal-300 dark:to-[#4aa3c7]">
              Great Together.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl lg:text-lg sm:mt-4 sm:text-base  text-[16px] leading-relaxed text-gray-600 transition-colors duration-300 dark:text-slate-400 sm:text-[17px]">
            Have a project, idea, or opportunity in mind?
            <br className="hidden sm:block" /> Let&apos;s turn it into something
            meaningful, modern &amp; scalable.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-8 flex sm:justify-center ${reveal(inView)}`}
          style={{ transitionDelay: inView ? "200ms" : "0ms" }}
        >
          <a
            href="contact"
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-300/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-300/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a7fa3] active:translate-y-0 sm:w-auto sm:py-4 dark:shadow-indigo-500/20 dark:hover:shadow-indigo-500/30 dark:focus-visible:outline-[#2a7fa3] "
          >
            {/* Shine sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]"
            />
            <span className="relative">Let&apos;s Talk</span>
            <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
