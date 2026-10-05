import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/**
 * Fonts: "Bricolage Grotesque" (display) + "Hanken Grotesk" (body)
 * tailwind.config → theme.extend.fontFamily:
 *   display: ["Bricolage Grotesque", "sans-serif"], sans: ["Hanken Grotesk", "sans-serif"]
 *   space: [...]  ← keep this key defined, the heading uses `font-space`
 */

interface Step {
  year: string;
  degree: string;
  field: string;
  institute: string;
  tag: string;
  icon: LucideIcon;
  height: string; // applies from lg → staircase
  featured?: boolean;
}

const STEPS: Step[] = [
  {
    year: "2017",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institute: "Hajigonj Amin Memorial High School",
    tag: "Secondary education",
    icon: School,
    height: "lg:min-h-[280px]",
  },
  {
    year: "2019",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institute: "Hajigonj Model Govt. College",
    tag: "Higher secondary",
    icon: BookOpen,
    height: "lg:min-h-[340px]",
  },
  {
    year: "2022",
    degree: "Diploma in Engineering",
    field: "Computer Technology (CMT)",
    institute: "Chandpur Polytechnic Institute",
    tag: "Where tech began",
    icon: GraduationCap,
    height: "lg:min-h-[400px]",
    featured: true,
  },
];

function CapIllustration({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="mx-auto w-full max-w-[200px] sm:max-w-[260px] lg:ml-auto lg:mr-0 lg:max-w-[340px]"
      initial={reduce ? false : { opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        viewBox="0 8 340 206"
        className="block h-auto w-full overflow-visible"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M138 128v28c0 14 28 24 62 24s62-10 62-24v-28l-62 20z"
          fill="#1b2740"
        />
        <polygon points="200,84 322,120 200,156 78,120" fill="#0E1525" />
        <polygon
          points="200,84 322,120 200,126 78,120"
          fill="#fff"
          fillOpacity="0.08"
        />
        <circle cx="200" cy="120" r="6" fill="#2a7fa3" />
        <path
          d="M200 120 L298 128 V172"
          fill="none"
          stroke="#F2B544"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M291 170h14l4 30h-22z" fill="#F2B544" />

        <g
          fill="#2a7fa3"
          fontFamily="Caveat, 'Comic Sans MS', cursive"
          fontSize="24"
        >
          <text x="14" y="34" transform="rotate(-6 14 34)">
            Learning builds
          </text>
          <text x="24" y="60" transform="rotate(-6 24 60)">
            a better tomorrow
          </text>
        </g>
        <path
          d="M44 84 C 34 116, 56 138, 90 142"
          fill="none"
          stroke="#2a7fa3"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M80 133 L91 142 L78 149"
          fill="none"
          stroke="#2a7fa3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-white font-sans text-[#0E1525] py-16 sm:py-20 md:px-8 md:py-28 *:px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl border-t border-[#0E1525]/10 pt-8 sm:pt-12 lg:pt-16">
        {/* Heading + illustration */}
        <div className="mb-8 grid items-center gap-5 sm:mb-12 lg:mb-14 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-3">
            <h2 className="font-space text-2xl leading-snug text-[#0F2E33] sm:text-3xl md:text-4xl">
              My Education
            </h2>
            <div className="mt-4 mb-0 flex items-start justify-start gap-1.5">
              <i className="block h-[3px] w-[160px] rounded-sm bg-gradient-to-r from-[#8fc4dc] to-[#487081]" />
              <b className="h-1.5 w-1.5 rounded-full bg-[#2a7fa3]" />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:text-base">
              Three steps, each built on the last: from school science to a
              diploma in computer technology, the base of my career in tech.
            </p>
          </div>
          <CapIllustration reduce={!!reduce} />
        </div>

        {/* 1 col → 2 col → staircase */}
        <ol className="grid items-end gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const f = !!s.featured;
            return (
              <motion.li
                key={s.year}
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                // className={`group relative flex min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-2xl p-5 sm:p-6 lg:gap-8 ${s.height}
                //   ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                //   ${
                //     f
                //       ? "bg-[#0E1525] text-white shadow-[0_16px_40px_-12px_rgba(14,21,37,0.5)]"
                //       : "border border-[#0E1525]/10 bg-white shadow-[0_8px_24px_-12px_rgba(14,21,37,0.15)] transition-colors duration-300 hover:border-[#2a7fa3]/70 hover:shadow-"
                //   }`}
                className={`group relative flex min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-2xl p-5 sm:p-6 lg:gap-8 ${s.height}
                  ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                  ${
                    f
                      ? "bg-[#0E1525] text-white shadow-[0_16px_40px_-12px_rgba(14,21,37,0.5)]"
                      : "border border-[#0E1525]/10 bg-white shadow-[0_8px_24px_-12px_rgba(14,21,37,0.15)] transition-[border-color,box-shadow] duration-300 hover:border-[#2a7fa3]/70 hover:shadow-[0_16px_40px_-12px_rgba(42,127,163,0.35)] cursor-pointer"
                  }`}
              >
                {/* accent glow */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-14 -top-14 size-44 rounded-full blur-3xl ${
                    f ? "bg-[#2a7fa3]/40" : "bg-[#2a7fa3]/10"
                  }`}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={`font-display text-5xl font-extrabold leading-none tracking-[-0.05em] sm:text-6xl group-hover:text-[#2a7fa3] ${
                      f ? "text-white" : "text-[#0E1525]"
                    }`}
                  >
                    {s.year}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#15919B]/10 text-[#15919B] transition-colors duration-300 group-hover:bg-[#15919B] group-hover:text-white">
                    <Icon
                      className="size-5 sm:size-[22px]"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>
                </div>

                <div className="relative space-y-2">
                  <p
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                      f
                        ? "bg-white/10 text-[#F2B544]"
                        : "bg-[#2a7fa3]/10 text-[#2a7fa3]"
                    }`}
                  >
                    {s.tag}
                  </p>
                  <h3 className="font-display text-lg font-bold leading-tight tracking-[-0.02em] sm:text-xl">
                    {s.degree}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      f ? "text-white/70" : "text-[#0E1525]/70"
                    }`}
                  >
                    {s.field}
                  </p>
                  <p
                    className={`flex items-start gap-2 border-t pt-3 text-sm font-medium ${
                      f ? "border-white/15" : "border-[#0E1525]/10"
                    }`}
                  >
                    <MapPin
                      className={`mt-0.5 size-4 flex-none ${
                        f ? "text-[#F2B544]" : "text-[#2a7fa3]"
                      }`}
                      strokeWidth={1.8}
                      aria-hidden
                    />
                    <span className="min-w-0 break-words">{s.institute}</span>
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
