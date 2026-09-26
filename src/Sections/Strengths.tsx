import React, { useState } from "react";

interface Strength {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const strengths: Strength[] = [
  {
    title: "Problem Solving",
    description:
      "Breaking down complex challenges into clear, workable solutions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M12 2a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26A7 7 0 0 0 12 2Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21h6M10 21v1M14 21v1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Technical Communication",
    description:
      "Translating technical concepts into clear, actionable language.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Client Support",
    description: "Building trust through responsive, dependable collaboration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description: "Working closely across roles to move shared goals forward.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="8" r="3" />
        <path
          d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1M15 13a5 5 0 0 1 5 5v1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Time Management",
    description:
      "Prioritizing tasks effectively to consistently meet deadlines.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Adaptability",
    description:
      "Adjusting quickly to new tools, teams, and shifting priorities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M4 4v5h5M20 20v-5h-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 9a9 9 0 0 1 14.7-4.7M20 15a9 9 0 0 1-14.7 4.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Leadership & Mentoring",
    description: "Guiding teammates and sharing knowledge to help others grow.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M12 2 9.5 8.5 3 9l5 4.5L6.5 20 12 16.5 17.5 20 16 13.5l5-4.5-6.5-.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Attention to Detail",
    description:
      "Catching the small things that make the difference in quality.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "User-Centric Thinking",
    description: "Designing around real needs, not assumptions about them.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "Staying curious and keeping pace with evolving tools and practices.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path
          d="M2 6.5 12 3l10 3.5-10 3.5-10-3.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 9.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3V9.5M22 6.5v7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const INITIAL_COUNT = 6;

const Strengths: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visible = showAll ? strengths : strengths.slice(0, INITIAL_COUNT);

  return (
    <section
      id="strengths"
      className="mx-auto max-w-7xl border-t border-black/10 bg-white px-5 py-14 sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6 md:mb-8">
        <span className="h-[3px] w-6 bg-black sm:w-8" />
        <span className="font-space text-[10px] uppercase tracking-[0.2em] text-black/40 sm:text-xs sm:tracking-[0.25em]">
          What I Bring
        </span>
      </div>

      <h2 className="font-space text-xl leading-snug text-black sm:text-3xl md:text-4xl">
        Professional Strengths
      </h2>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
        {visible.map((item, index) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-6"
          >
            <span className="pointer-events-none absolute right-4 top-4 font-space text-3xl font-bold text-black/[0.05] transition-colors duration-300 group-hover:text-black/10 sm:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black text-white transition-all duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
              <span className="h-5 w-5 sm:h-5.5 sm:w-5.5">{item.icon}</span>
            </div>

            <h3 className="relative mt-4 text-base font-semibold text-black sm:text-lg">
              {item.title}
            </h3>

            <p className="relative mt-2 text-sm leading-relaxed text-black/50">
              {item.description}
            </p>

            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>

      {/* Show more / less toggle */}
      {strengths.length > INITIAL_COUNT && (
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#962a2a] px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-[0.97]"
          >
            {showAll
              ? "Show Less"
              : `Show ${strengths.length - INITIAL_COUNT} More`}
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Strengths;
