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

// Prothome koyta card dekhabe (2 ar 3 column dutoi te fit hoy)
const INITIAL_COUNT = 6;

const GRID_CLASSES =
  "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3";

interface CardProps {
  item: Competency;
  number: number;
  /** Extra card er jonno: show/hide control kore */
  forceVisible?: boolean;
  /** Stagger delay (ms), shudhu show howar shomoy apply hoy */
  staggerDelay?: number;
}

const CompetencyCard: React.FC<CardProps> = ({
  item,
  number,
  forceVisible,
  staggerDelay = 0,
}) => {
  const Icon = item.icon;
  const animated = forceVisible !== undefined;
  const visible = animated ? forceVisible : true;

  return (
    // Outer wrapper: shudhu reveal animation (card er hover transition er shathe conflict hoy na)
    <div
      style={
        animated
          ? { transitionDelay: visible ? `${staggerDelay}ms` : "0ms" }
          : undefined
      }
      className={
        animated
          ? `transition-all duration-700 ease-out motion-reduce:transition-none ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`
          : undefined
      }
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-6">
        <span className="pointer-events-none absolute right-4 top-4 font-space text-3xl font-bold text-black/[0.05] transition-colors duration-300 group-hover:text-black/10 sm:text-4xl">
          {String(number).padStart(2, "0")}
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
    </div>
  );
};

const Competencies: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const hasMore = competencies.length > INITIAL_COUNT;
  const initialItems = competencies.slice(0, INITIAL_COUNT);
  const extraItems = competencies.slice(INITIAL_COUNT);

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

      <div id="competencies-list" className="mt-8 sm:mt-10">
        {/* Initial cards */}
        <div className={GRID_CLASSES}>
          {initialItems.map((item, index) => (
            <CompetencyCard key={item.title} item={item} number={index + 1} />
          ))}
        </div>

        {/* Extra cards: height expand + fade/slide-up stagger */}
        {hasMore && (
          <div
            aria-hidden={!showAll}
            className={`grid transition-[grid-template-rows] duration-700 ease-in-out motion-reduce:transition-none ${
              showAll ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            {/* -mx/px: hover shadow side e clip hoy na */}
            <div className="-mx-3 min-h-0 overflow-hidden px-3">
              {/* pt: gap, pb: bottom shadow er jonno jayga */}
              <div className="pb-6 pt-4 sm:pt-5">
                <div className={GRID_CLASSES}>
                  {extraItems.map((item, i) => (
                    <CompetencyCard
                      key={item.title}
                      item={item}
                      number={INITIAL_COUNT + i + 1}
                      forceVisible={showAll}
                      staggerDelay={200 + i * 90}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Show more / less toggle */}
      {hasMore && (
        <div
          className={`flex justify-center transition-[margin] duration-700 ease-in-out ${
            showAll ? "mt-2" : "mt-8 sm:mt-10"
          }`}
        >
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            aria-controls="competencies-list"
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
