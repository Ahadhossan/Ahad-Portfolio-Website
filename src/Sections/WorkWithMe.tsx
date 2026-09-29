import React from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Clock3,
  Code2,
  Globe2,
  Link2,
  MapPin,
  MessageCircle,
  RefreshCw,
  Send,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

type WorkOption = {
  title: string;
  description: string;
  details: string;
  icon: React.ElementType;
  accent: "blue" | "purple" | "green";
  preferred?: boolean;
  features: string[];
};

const workOptions: WorkOption[] = [
  {
    title: "Remote",
    description: "Work from anywhere, stay connected.",
    details:
      "I'm open to remote work and enjoy collaborating with teams and clients across different time zones.",
    icon: Globe2,
    accent: "blue",
    preferred: true,
    features: ["Global collaboration", "Flexible schedule", "Fully remote"],
  },
  {
    title: "On-site",
    description: "Be part of the team, in person.",
    details: "Available for on-site opportunities based in Dhaka, Bangladesh.",
    icon: Building2,
    accent: "purple",
    features: [
      "Team collaboration",
      "Direct communication",
      "Office environment",
    ],
  },
  {
    title: "Hybrid",
    description: "The best of both worlds.",
    details:
      "Open to hybrid roles that combine remote work with on-site collaboration when needed.",
    icon: RefreshCw,
    accent: "green",
    features: [
      "Flexible working style",
      "Better work-life balance",
      "On-site when required",
    ],
  },
];

const accentStyles = {
  blue: {
    icon: "border-blue-500/40 bg-blue-500/15 text-blue-300",
    border: "border-blue-500",
    glow: "bg-blue-500/20",
    button:
      "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
    check: "bg-blue-500",
  },
  purple: {
    icon: "border-purple-500/40 bg-purple-500/15 text-purple-300",
    border: "border-purple-500/50",
    glow: "bg-purple-500/20",
    button:
      "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20",
    check: "bg-purple-500",
  },
  green: {
    icon: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
    border: "border-emerald-500/50",
    glow: "bg-emerald-500/20",
    button:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
    check: "bg-emerald-500",
  },
};

function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[330px] w-full max-w-[520px]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-20 w-80 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      {/* Floating Build Together */}
      <div className="absolute left-3 top-12 z-20 rounded-xl border border-purple-500/30 bg-[#0b1424]/90 px-4 py-3 shadow-[0_10px_40px_rgba(99,102,241,0.15)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
            <Users size={19} />
          </div>

          <div>
            <p className="text-[11px] text-slate-400">Build</p>
            <p className="text-sm font-semibold text-white">Together</p>
          </div>
        </div>
      </div>

      {/* Floating Solve Problems */}
      <div className="absolute right-16 top-0 z-20 rounded-xl border border-cyan-500/30 bg-[#0b1424]/90 px-4 py-3 shadow-[0_10px_40px_rgba(34,211,238,0.12)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
            <Sparkles size={20} />
          </div>

          <div>
            <p className="text-[11px] text-slate-400">Solve</p>
            <p className="text-sm font-semibold text-white">Problems</p>
          </div>
        </div>
      </div>

      {/* Floating Impact */}
      <div className="absolute right-0 top-20 z-20 rounded-xl border border-blue-500/30 bg-[#0b1424]/90 px-4 py-3 shadow-[0_10px_40px_rgba(59,130,246,0.12)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">
            <TrendingUp size={20} />
          </div>

          <div>
            <p className="text-[11px] text-slate-400">Create</p>
            <p className="text-sm font-semibold text-white">Impact</p>
          </div>
        </div>
      </div>

      {/* Laptop */}
      <div className="absolute bottom-16 left-1/2 z-10 w-[330px] -translate-x-1/2">
        {/* Screen */}
        <div className="relative mx-auto h-[180px] w-[280px] rounded-t-2xl border-[5px] border-slate-700/80 bg-[#080e1a] shadow-[0_0_50px_rgba(59,130,246,0.25)]">
          <div className="absolute inset-2 overflow-hidden rounded-lg bg-gradient-to-br from-[#111b35] via-[#10182c] to-[#080d18]">
            {/* Code symbol */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Code2
                size={65}
                strokeWidth={1.4}
                className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]"
              />
            </div>

            {/* Screen lines */}
            <div className="absolute left-6 top-6 h-1 w-12 rounded-full bg-blue-500/30" />
            <div className="absolute left-6 top-10 h-1 w-20 rounded-full bg-purple-500/20" />
            <div className="absolute right-5 top-6 h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative mx-auto h-5 w-[350px] rounded-b-[50%] rounded-t-md bg-gradient-to-b from-slate-600 to-slate-800 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          <div className="absolute left-1/2 top-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-slate-400/40" />
        </div>
      </div>

      {/* Plant */}
      <div className="absolute bottom-12 right-4 z-10">
        <div className="relative h-24 w-20">
          <div className="absolute bottom-0 left-2 h-16 w-16 rounded-b-2xl rounded-t-lg bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg" />

          <div className="absolute bottom-14 left-8 h-16 w-6 rotate-[35deg] rounded-full bg-gradient-to-br from-emerald-300/80 to-emerald-700/60" />
          <div className="absolute bottom-16 left-3 h-14 w-7 -rotate-[40deg] rounded-full bg-gradient-to-br from-emerald-400/80 to-emerald-700/60" />
          <div className="absolute bottom-20 left-11 h-14 w-6 rotate-[5deg] rounded-full bg-gradient-to-br from-green-300/80 to-green-700/60" />
        </div>
      </div>

      {/* Handwritten note */}
      <div className="absolute bottom-24 left-20 hidden -rotate-6 text-sm leading-6 text-slate-400 sm:block">
        <span className="block">Good ideas</span>
        <span className="block">need great</span>
        <span className="block">collaboration</span>

        <svg
          className="ml-10 mt-1"
          width="55"
          height="30"
          viewBox="0 0 55 30"
          fill="none"
        >
          <path
            d="M2 2C17 23 30 25 51 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M42 13L51 19L42 25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function WorkOptionCard({ option }: { option: WorkOption }) {
  const Icon = option.icon;
  const styles = accentStyles[option.accent];

  return (
    <div
      className={`group relative flex min-h-[340px] flex-col rounded-2xl border bg-[#0a1220]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0c1627] ${
        option.preferred
          ? `${styles.border} shadow-[0_0_35px_rgba(59,130,246,0.08)]`
          : "border-slate-800"
      }`}
    >
      {/* Preferred */}
      {option.preferred && (
        <span className="absolute right-5 top-5 rounded-full border border-purple-500/40 bg-purple-500/15 px-3 py-1 text-[11px] font-semibold text-purple-300">
          Preferred
        </span>
      )}

      {/* Icon */}
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full border ${styles.icon}`}
      >
        <Icon size={27} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-white">{option.title}</h3>

        <p className="mt-1 text-sm font-medium text-slate-300">
          {option.description}
        </p>

        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
          {option.details}
        </p>
      </div>

      {/* Features */}
      <div className="mt-auto space-y-3 pt-6">
        {option.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 text-sm text-slate-300"
          >
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${styles.check}`}
            >
              <Check size={10} strokeWidth={3} className="text-white" />
            </span>

            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Arrow */}
      <button
        type="button"
        aria-label={`Select ${option.title}`}
        className={`absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${styles.button}`}
      >
        <ArrowRight
          size={19}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </div>
  );
}

export default function WorkWithMe() {
  return (
    <section
      id="work-with-me"
      className="relative overflow-hidden bg-[#050b14] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute right-[-150px] top-96 h-96 w-96 rounded-full bg-purple-600/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HERO ================= */}
        <div className="grid items-center gap-10 border-b border-slate-800/80 pb-16 lg:grid-cols-2 lg:gap-14 lg:pb-20">
          {/* Left */}
          <div>
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              <span className="text-xs font-semibold tracking-wide text-emerald-300">
                WORK WITH ME
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Let’s Build Something
              <span className="mt-1 block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Great Together
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              I’m open to opportunities that match my skills, experience, and
              passion for building impactful digital products. Whether it’s
              remote, on-site, or hybrid — I’m flexible and ready to collaborate
              with great teams and clients.
            </p>

            {/* Mini stats */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3">
                <p className="text-xs text-slate-500">Availability</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Open to Opportunities
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3">
                <p className="text-xs text-slate-500">Work Style</p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Remote · Hybrid · On-site
                </p>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div>
            <HeroIllustration />
          </div>
        </div>

        {/* ================= WORK PREFERENCES ================= */}
        <div className="pt-14 lg:pt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
              WORK PREFERENCES
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How would you like to work?
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-400">
              I’m comfortable with different work environments and always open
              to flexible collaboration.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {workOptions.map((option) => (
              <WorkOptionCard key={option.title} option={option} />
            ))}
          </div>
        </div>

        {/* ================= INFO PANEL ================= */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-[#09111e]/90 p-6 sm:p-8 lg:mt-12">
          {/* Glow */}
          <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Info */}
            <div className="grid gap-6 sm:grid-cols-3">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Timezone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Timezone</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    GMT+6 (BST)
                  </p>
                </div>
              </div>

              {/* Collaboration */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
                  <Link2 size={20} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Collaboration</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Remote · On-site · Hybrid
                  </p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden min-w-[280px] lg:block">
              <div className="relative h-32 overflow-hidden rounded-xl border border-blue-500/10 bg-[#07101d]">
                {/* World-like dotted grid */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)",
                    backgroundSize: "7px 7px",
                  }}
                />

                {/* Connection line */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 300 130"
                  fill="none"
                >
                  <path
                    d="M40 95 C100 20, 150 105, 250 45"
                    stroke="rgba(96,165,250,0.5)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Dhaka marker */}
                <div className="absolute right-14 top-8">
                  <div className="rounded-md border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold text-blue-300 backdrop-blur">
                    Dhaka, BD
                  </div>

                  <div className="absolute right-4 top-10 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,1)]" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative mt-8 flex flex-col gap-5 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MessageCircle
                size={20}
                className="mt-1 shrink-0 text-blue-400"
              />

              <p className="max-w-md text-sm leading-6 text-slate-400">
                Open to new opportunities, interesting projects, and meaningful
                collaborations.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(99,102,241,0.35)]"
            >
              <Send size={17} />

              <span>Let’s Talk</span>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
