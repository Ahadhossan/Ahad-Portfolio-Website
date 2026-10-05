import React, { useEffect, useRef, useState } from "react";
import { MapPin, CalendarDays } from "lucide-react";

interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  current?: boolean;
  points: string[];
}

const jobs: Job[] = [
  {
    role: "Industrial Attachment – Professional Web Development Specialist (PWDS)",
    company: "People N Tech Limited",
    location: "Dhaka, Bangladesh · On-site",
    duration: "Oct 2022 – Jan 2023",
    points: [
      "Gained practical experience in frontend and backend web development.",
      "Worked with HTML, CSS, JavaScript, PHP, and MySQL on real-world development projects.",
      "Practiced responsive web development and database-driven application development.",
      "Collaborated with team members using Agile development practices and Git-based version control.",
    ],
  },
];

/**
 * Reveals its children once the element scrolls into view, then stops
 * observing. Respects prefers-reduced-motion by skipping the animation.
 */
const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const revealClass = (visible: boolean) =>
  `transition-all duration-700 ease-out ${
    visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
  }`;

const revealStyle = (visible: boolean, delay: number): React.CSSProperties => ({
  transitionDelay: visible ? `${delay}ms` : "0ms",
});

const TimelineItem: React.FC<{ job: Job; index: number; isLast: boolean }> = ({
  job,
  index,
  isLast,
}) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={revealStyle(isVisible, index * 120)}
      className={`group relative grid grid-cols-[auto_1fr] gap-x-3 pb-8 last:pb-0 sm:gap-x-8 sm:pb-12 ${revealClass(
        isVisible,
      )}`}
    >
      {/* Node + connecting line */}
      <div className="flex flex-col items-center pt-5 sm:pt-6">
        <span
          className={`relative z-10 flex h-3 w-3 items-center justify-center rounded-full ${
            job.current
              ? "bg-[#2a7fa3]"
              : "border-2 border-[#2a7fa3]/60 bg-white"
          }`}
        >
          {job.current && (
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#2a7fa3]/80" />
          )}
        </span>
        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-linear-to-b from-[#2a7fa3]/40 via-[#42464e]/15 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div
        className="rounded-xl border border-[#42464e]/40 bg-white/70 px-4 py-4 shadow-[0_8px_24px_-12px_rgba(14,21,37,0.15)] backdrop-blur-sm
  transition-all duration-300
  group-hover:-translate-y-0.5 group-hover:border-[#2a7fa3]/30 group-hover:bg-[#2a7fa3]/[0.06] group-hover:shadow-[0_16px_40px_-12px_rgba(42,127,163,0.35)]
  sm:px-6 sm:py-5 cursor-pointer"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="flex items-center gap-1.5 font-space text-xs font-medium tracking-wide text-[#42464e]">
            <CalendarDays size={14} className="text-[#2a7fa3]" />
            {job.duration}
          </span>
          {job.current && (
            <span className="rounded-full bg-[#2a7fa3]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#2a7fa3]">
              Current
            </span>
          )}
        </div>

        <h3 className="mt-2 font-space text-lg font-semibold text-[#584e4e] transition-colors duration-300 group-hover:text-[#2a7fa3] sm:text-xl">
          {job.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#2a7fa3]">{job.company}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#8C93A0] sm:text-sm">
          <MapPin size={14} />
          {job.location}
        </p>

        <ul className="mt-4 space-y-2.5">
          {job.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#2a7fa3]/80" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Internship = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <section
      id="internship"
      aria-labelledby="internship-heading"
      className="mx-auto max-w-7xl border-t border-[#42464e]/10 px-2 py-8 sm:px-4 sm:py-12 md:px-8 md:py-16"
    >
      {/* Header */}
      <div
        ref={ref}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2
          id="internship-heading"
          style={revealStyle(isVisible, 0)}
          className={`${revealClass(
            isVisible,
          )} font-space text-2xl font-semibold tracking-tight text-[#0F2E33] sm:text-3xl md:text-4xl`}
        >
          Internship
        </h2>
        <div className="mt-2 mb-0 flex items-center justify-center gap-1.5">
          <i className="block h-[3px] w-[90px] rounded-sm bg-gradient-to-r from-[#8fc4dc] to-[#487081]" />
          <b className="h-1.5 w-1.5 rounded-full bg-[#2a7fa3]" />
        </div>
        <p
          style={revealStyle(isVisible, 100)}
          className={`${revealClass(
            isVisible,
          )} mt-4 max-w-xl text-sm leading-relaxed text-[#8C93A0] sm:text-base`}
        >
          Hands-on industrial attachment where I built real-world web projects
          using frontend and backend technologies in an Agile team.
        </p>
      </div>

      {/* Timeline */}
      <div className="mx-auto mt-10 max-w-7xl md:mt-14">
        {jobs.map((job, index) => (
          <TimelineItem
            key={`${job.role}-${job.company}`}
            job={job}
            index={index}
            isLast={index === jobs.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Internship;
