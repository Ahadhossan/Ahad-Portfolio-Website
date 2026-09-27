import React, { useState } from "react";
import {
  Code2,
  Atom,
  Braces,
  MonitorSmartphone,
  Blocks,
  RefreshCw,
  Plug,
  Database,
  Wrench,
  Building2,
  GraduationCap,
  Bug,
  KanbanSquare,
  GitBranch,
  Palette,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

interface Competency {
  title: string;
  description: string;
  icon: LucideIcon;
}

const competencies: Competency[] = [
  {
    title: "Frontend Web Development",
    description:
      "Building fast, accessible interfaces from design files to production-ready code.",
    icon: Code2,
  },
  {
    title: "React.js & Next.js Development",
    description:
      "Shipping performant apps with React and Next.js, from routing to server-side rendering.",
    icon: Atom,
  },
  {
    title: "TypeScript Development",
    description:
      "Writing strictly typed code that catches bugs early and scales with the codebase.",
    icon: Braces,
  },
  {
    title: "Responsive & Cross-Browser UI Development",
    description:
      "Ensuring layouts look and behave consistently across devices, screens, and browsers.",
    icon: MonitorSmartphone,
  },
  {
    title: "Component-Based Architecture",
    description:
      "Designing reusable, composable components that keep large UIs maintainable.",
    icon: Blocks,
  },
  {
    title: "State Management with Redux Toolkit",
    description:
      "Structuring predictable, scalable application state with Redux Toolkit and RTK Query.",
    icon: RefreshCw,
  },
  {
    title: "REST/API Integration",
    description:
      "Connecting frontends to REST APIs with clean data fetching and error handling.",
    icon: Plug,
  },
  {
    title: "Database Management",
    description:
      "Modeling, querying, and maintaining databases that support reliable application data.",
    icon: Database,
  },
  {
    title: "Software Troubleshooting & Technical Support",
    description:
      "Diagnosing issues quickly and resolving them with minimal disruption to users.",
    icon: Wrench,
  },
  {
    title: "HMS/PMS Product Support",
    description:
      "Supporting hotel and property management system products for day-to-day client operations.",
    icon: Building2,
  },
  {
    title: "Client Training & Technical Guidance",
    description:
      "Onboarding clients and walking teams through features with clear, patient guidance.",
    icon: GraduationCap,
  },
  {
    title: "Bug Analysis & Product Improvement",
    description:
      "Tracing bugs to their root cause and turning fixes into lasting product improvements.",
    icon: Bug,
  },
  {
    title: "Agile/Scrum Collaboration",
    description:
      "Working within sprints, standups, and backlogs to ship consistently as a team.",
    icon: KanbanSquare,
  },
  {
    title: "Git & GitHub Workflows",
    description:
      "Managing branches, pull requests, and code reviews for clean collaborative history.",
    icon: GitBranch,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Turning design mockups into pixel-accurate, usable interfaces.",
    icon: Palette,
  },
];

const INITIAL_COUNT = 6;

const Competencies: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visible = showAll ? competencies : competencies.slice(0, INITIAL_COUNT);

  return (
    <section
      id="competencies"
      className="mx-auto max-w-7xl border-t border-black/10 bg-white px-5 py-14 sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      {/* Eyebrow */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6 md:mb-8">
        <span className="h-[3px] w-6 bg-black sm:w-8" />
        <span className="font-space text-[10px] uppercase tracking-[0.2em] text-black/40 sm:text-xs sm:tracking-[0.25em]">
          Skills & Expertise
        </span>
      </div>

      <h2 className="font-space text-xl leading-snug text-black sm:text-3xl md:text-4xl">
        CORE COMPETENCIES
      </h2>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
        {visible.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-6"
            >
              <span className="pointer-events-none absolute right-4 top-4 font-space text-3xl font-bold text-black/[0.05] transition-colors duration-300 group-hover:text-black/10 sm:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black text-white transition-all duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </div>

              <h3 className="relative mt-4 text-base font-semibold text-black sm:text-lg">
                {item.title}
              </h3>

              <p className="relative mt-2 text-sm leading-relaxed text-black/50">
                {item.description}
              </p>

              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </div>
          );
        })}
      </div>

      {/* Show more / less toggle */}
      {competencies.length > INITIAL_COUNT && (
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#962a2a] px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-[0.97]"
          >
            {showAll
              ? "Show Less"
              : `Show ${competencies.length - INITIAL_COUNT} More`}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Competencies;
