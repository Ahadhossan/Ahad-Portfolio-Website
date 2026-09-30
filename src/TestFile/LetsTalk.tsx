import type { ReactNode, SVGProps } from "react";

/* ---------- Icons (inline SVG, no extra dependencies) ---------- */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ReactIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);
const NextIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 21M12 3l8 18M8 14h8" />
  </svg>
);
const TsIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" {...p}>
    <rect width="22" height="22" x="1" y="1" rx="2" fill="#3b82c4" />
    <text
      x="12"
      y="19"
      fontSize="10"
      fontWeight="700"
      fill="#fff"
      textAnchor="middle"
    >
      TS
    </text>
  </svg>
);
const BuildingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M9 8h.01M13 8h.01M9 12h.01M13 12h.01M10 21v-4h4v4" />
  </svg>
);
const CodeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />
  </svg>
);
const DatabaseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);
// const MailIcon = (p: IconProps) => (
//   <svg {...base} {...p}>
//     <rect x="3" y="5" width="18" height="14" rx="2.5" />
//     <path d="m4 7 8 6 8-6" />
//   </svg>
// );
// const LinkedInIcon = (p: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
//     <path d="M4.5 9h3v10.5h-3V9Zm1.5-5a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 6 4Zm3.5 5h2.9v1.4h.05c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8v6h-3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8v5.4h-3V9Z" />
//   </svg>
// );
// const GitHubIcon = (p: IconProps) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
//     <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
//   </svg>
// );

/* ---------- Data ---------- */
const leftChips = [
  {
    label: "React",
    icon: <ReactIcon className="h-5 w-5 text-sky-400" />,
    pos: "left-[15%] top-[11%]",
  },
  {
    label: "Next.js",
    icon: <NextIcon className="h-5 w-5 text-white" />,
    pos: "left-[17%] top-[27%]",
  },
  {
    label: "TypeScript",
    icon: <TsIcon className="h-5 w-5" />,
    pos: "left-[18%] top-[43%]",
  },
];
const rightChips = [
  {
    label: "HMS / PMS",
    icon: <BuildingIcon className="h-5 w-5" />,
    pos: "right-[14%] top-[13%]",
  },
  {
    label: "Frontend Dev",
    icon: <CodeIcon className="h-5 w-5" />,
    pos: "right-[15%] top-[29%]",
  },
  {
    label: "Database",
    icon: <DatabaseIcon className="h-5 w-5" />,
    pos: "right-[15%] top-[44%]",
  },
];

// const contacts = [
//   {
//     title: "Email",
//     sub: "Let's connect",
//     link: "ahadm3016@gmail.com",
//     href: "mailto:ahadm3016@gmail.com",
//     badge: "bg-lime-300 text-black",
//     icon: <MailIcon className="h-5 w-5" />,
//     linkClass: "text-white",
//   },
//   {
//     title: "LinkedIn",
//     sub: "Professional network",
//     link: "Connect with me",
//     href: "https://www.linkedin.com/",
//     badge: "bg-[#0a66c2] text-white",
//     icon: <LinkedInIcon className="h-5 w-5" />,
//     linkClass: "text-sky-400",
//   },
//   {
//     title: "GitHub",
//     sub: "Open-source & projects",
//     link: "View my work",
//     href: "https://github.com/",
//     badge: "bg-violet-500 text-white",
//     icon: <GitHubIcon className="h-5 w-5" />,
//     linkClass: "text-sky-400",
//   },
// ];

/* ---------- Small pieces ---------- */
const Chip = ({
  label,
  icon,
  pos,
}: {
  label: string;
  icon: ReactNode;
  pos: string;
}) => (
  <div
    className={`absolute hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/90 shadow-lg shadow-black/40 backdrop-blur lg:flex ${pos}`}
  >
    {icon}
    {label}
  </div>
);

// const Divider = ({ children }: { children: ReactNode }) => (
//   <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/50">
//     <span className="h-px w-8 bg-white/20 sm:w-12" />
//     {children}
//     <span className="h-px w-8 bg-white/20 sm:w-12" />
//   </div>
// );

/* ---------- Component ---------- */
export default function LetsTalk() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050a08] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
      {/* Grid + glow background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(#a3e635_1px,transparent_1px),linear-gradient(90deg,#a3e635_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px] sm:h-[560px] sm:w-[560px]"
      />

      {/* Orbit arcs + dots (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[8%] -z-10 hidden h-[420px] w-[280px] rounded-full border border-lime-400/25 lg:block"
      />
      <span
        aria-hidden
        className="absolute left-[11.5%] top-[18%] hidden h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#bef264] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[18%] -z-10 hidden h-[400px] w-[280px] rounded-full border border-lime-400/25 lg:block"
      />
      <span
        aria-hidden
        className="absolute right-[8.5%] top-[17%] hidden h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_#bef264] lg:block"
      />

      {/* Floating skill chips (desktop only) */}
      {leftChips.map((c) => (
        <Chip key={c.label} {...c} />
      ))}
      {rightChips.map((c) => (
        <Chip key={c.label} {...c} />
      ))}

      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-left sm:text-center">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-lime-300 sm:mb-6 sm:justify-center sm:text-sm">
            <span className="h-px w-8 bg-lime-300/70 sm:w-14" />
            Let&apos;s Talk
            <span className="h-px w-8 bg-lime-300/70 sm:w-14" />
          </div>

          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something
            <br />
            <span className="text-lime-300">Great Together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
            Have a project, idea, or opportunity in mind?
            <br className="hidden sm:block" /> Let&apos;s turn it into something
            meaningful, modern &amp; scalable.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex sm:justify-center">
          <a
            href="mailto:ahadm3016@gmail.com"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-lime-300 px-9 py-3.5 text-base font-semibold text-black shadow-[0_0_40px_rgba(190,242,100,0.35)] transition hover:bg-lime-200 hover:shadow-[0_0_55px_rgba(190,242,100,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
          >
            Let&apos;s Talk
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Connect cards */}
        {/* <div className="mt-12 sm:mt-14">
          <Divider>Or connect with me</Divider>

          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            {contacts.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-lime-300/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-300 sm:p-5"
              >
                <div className="flex min-w-0 items-start gap-3.5">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${c.badge}`}
                  >
                    {c.icon}
                  </span>
                  <div className="min-w-0 text-sm">
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="mt-0.5 truncate text-white/60">{c.sub}</p>
                    <p
                      className={`mt-1 truncate underline underline-offset-2 ${c.linkClass}`}
                    >
                      {c.link}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-white/80 transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
