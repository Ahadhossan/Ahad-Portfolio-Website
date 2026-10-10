import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronsRight,
  CircleHelp,
  FileCode2,
  Hammer,
  Home,
  Sparkles,
} from "lucide-react";
import officeImg from "../assets/beautiful-office-space-cartoon-style.jpg";

const css = `
@keyframes nf-rise   { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
@keyframes nf-fade   { from { opacity: 0; } to { opacity: 1; } }
@keyframes nf-pop    { 0% { opacity: 0; transform: scale(.4) rotate(-12deg); } 70% { transform: scale(1.08) rotate(2deg); } 100% { opacity: 1; transform: none; } }
@keyframes nf-float  { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes nf-drift  { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-24px) scale(1.12); } }
@keyframes nf-spin   { to { transform: rotate(360deg); } }
@keyframes nf-blink  { 0%,92%,100% { transform: scaleY(1); } 95% { transform: scaleY(.1); } }
@keyframes nf-shine  { from { transform: translateX(-130%) skewX(-20deg); } to { transform: translateX(260%) skewX(-20deg); } }
@keyframes nf-flow   { to { background-position: 200% center; } }
@keyframes nf-ping   { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(2.6); opacity: 0; } }
@keyframes nf-cursor { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
@keyframes nf-stripe { to { background-position: 28px 0; } }
@keyframes nf-scan   { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }

.nf-in      { opacity: 0; animation: nf-rise .8s cubic-bezier(.2,.8,.2,1) forwards; animation-delay: var(--d, 0s); }
.nf-fade    { opacity: 0; animation: nf-fade .6s ease forwards; animation-delay: var(--d, 0s); }
.nf-pop     { opacity: 0; animation: nf-pop .8s cubic-bezier(.2,.9,.3,1.2) forwards; animation-delay: var(--d, 0s); }
.nf-float   { animation: nf-float var(--t, 6s) ease-in-out infinite; animation-delay: var(--d, 0s); }
.nf-drift   { animation: nf-drift 14s ease-in-out infinite; }
.nf-spin    { animation: nf-spin 6s linear infinite; }
.nf-blink   { animation: nf-blink 4.5s ease-in-out infinite; transform-origin: center; }
.nf-flow    { background-size: 200% auto; animation: nf-flow 5s linear infinite; }
.nf-ping    { animation: nf-ping 1.8s ease-out infinite; }
.nf-cursor  { animation: nf-cursor 1s steps(1) infinite; }
.nf-stripes {
  background-image: repeating-linear-gradient(45deg, rgba(255,255,255,.28) 0 7px, transparent 7px 14px);
  background-size: 28px 28px;
  animation: nf-stripe 1s linear infinite;
}
.nf-scan    { animation: nf-scan 3.2s linear infinite; }

.nf-btn::after {
  content: ""; position: absolute; inset: 0; width: 40%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
  transform: translateX(-130%) skewX(-20deg);
}
.nf-btn:hover::after { animation: nf-shine .9s ease; }
.nf-parallax { transform: translate3d(calc(var(--px, 0) * var(--k, 10px)), calc(var(--py, 0) * var(--k, 10px)), 0); transition: transform .25s ease-out; }
.nf-grid {
  background-image: radial-gradient(rgba(99,102,241,.22) 1.2px, transparent 1.2px);
  background-size: 26px 26px;
  mask-image: radial-gradient(ellipse 70% 60% at 60% 45%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 60% 45%, #000 30%, transparent 75%);
}

@media (prefers-reduced-motion: reduce) {
  .nf-in, .nf-pop, .nf-fade { opacity: 1; animation: none; }
  .nf-float, .nf-drift, .nf-spin, .nf-blink, .nf-flow, .nf-ping, .nf-cursor, .nf-stripes, .nf-scan { animation: none; }
  .nf-btn:hover::after { animation: none; }
  .nf-parallax { transform: none; transition: none; }
}
`;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const seenKey = (path: string): string => `nf-intro:${path}`;
const hasSeenIntro = (path: string): boolean => {
  try {
    return sessionStorage.getItem(seenKey(path)) === "1";
  } catch {
    return false;
  }
};
const markIntroSeen = (path: string): void => {
  try {
    sessionStorage.setItem(seenKey(path), "1");
  } catch {
    /* storage unavailable, ignore */
  }
};
const getInitialPhase = (
  path: string,
  introOnce: boolean,
  respectReducedMotion: boolean,
): "reveal" | "search" =>
  (respectReducedMotion && prefersReducedMotion()) ||
  (introOnce && hasSeenIntro(path))
    ? "reveal"
    : "search";

const titleFromPath = (path: string): string => {
  const seg = path.split("/").filter(Boolean).pop() || "This page";
  return seg.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const clip = (s: string, n: number): string =>
  s.length > n ? s.slice(0, n) + "…" : s;

/* ------------------------------------------------------------------ */
/*  Phase 1: "searching for the page" coding animation                 */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/*  Skip button (click or press Esc)                                   */
/* ------------------------------------------------------------------ */
const SkipButton = ({ onClick }: { onClick: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClick();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClick]);

  return (
    <div className="mt-6 flex flex-col items-center gap-2.5">
      <button
        type="button"
        onClick={onClick}
        aria-label="Skip intro (or press the Esc key)"
        className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/70 py-2 pl-5 pr-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-0"
      >
        Skip
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white transition duration-300 group-hover:bg-indigo-600">
          <ChevronsRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </button>

      {/* Explains the keyboard shortcut (hidden on phones, they have no Esc key) */}
      <p className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
        Press
        <kbd className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[11px] font-medium text-slate-500 shadow-sm">
          Esc
        </kbd>
        on your keyboard to skip
      </p>
    </div>
  );
};

const toneClass: Record<string, string> = {
  cmd: "text-indigo-300",
  info: "text-slate-300",
  warn: "text-amber-300",
  error: "text-rose-400",
  success: "text-emerald-400",
};

type SearchIntroMode = "not-found" | "coming-soon";

type SearchIntroItem = {
  tone: keyof typeof toneClass;
  text: string;
  pause: number;
};

type SearchIntroProps = {
  path: string;
  mode: SearchIntroMode;
  title: string;
  onDone: () => void;
};

const SearchIntro = ({ path, mode, title, onDone }: SearchIntroProps) => {
  const script = useMemo<SearchIntroItem[]>(() => {
    const head: SearchIntroItem[] = [
      {
        tone: "cmd",
        text: `$ find-page --route "${clip(path, 28)}"`,
        pause: 450,
      },
      { tone: "info", text: "> Connecting to router...", pause: 300 },
      {
        tone: "info",
        text: "> Searching routes: /, /about, /services, /case-studies",
        pause: 350,
      },
      {
        tone: "info",
        text: "> Scanning components and build files...",
        pause: 450,
      },
    ];
    if (mode === "coming-soon") {
      return [
        ...head,
        {
          tone: "warn",
          text: `! "${clip(title, 24)}" found, but it is still under construction`,
          pause: 500,
        },
        {
          tone: "success",
          text: "✓ Good news: this page is coming very soon!",
          pause: 900,
        },
      ];
    }
    return [
      ...head,
      {
        tone: "error",
        text: "✗ Error 404: no page found at this address",
        pause: 500,
      },
      {
        tone: "success",
        text: "✓ Don't worry, the way back home is one click away",
        pause: 900,
      },
    ];
  }, [path, mode, title]);

  const [lines, setLines] = useState<SearchIntroItem[]>([]);
  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= script.length) {
      const t = window.setTimeout(onDone, 300);
      return () => window.clearTimeout(t);
    }
    const { text, pause } = script[idx];
    if (typed.length < text.length) {
      const t = window.setTimeout(
        () => setTyped(text.slice(0, typed.length + 1)),
        20,
      );
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setLines((l) => [...l, script[idx]]);
      setTyped("");
      setIdx((i) => i + 1);
    }, pause);
    return () => window.clearTimeout(t);
  }, [typed, idx, script, onDone]);

  const progress = Math.min(
    100,
    Math.round(
      ((idx + typed.length / (script[idx]?.text.length || 1)) / script.length) *
        100,
    ),
  );
  const current = script[idx];

  return (
    <section className="nf-fade relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-5 py-12">
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/95 shadow-2xl shadow-indigo-300/40 backdrop-blur">
        <div className="nf-scan pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent" />

        <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-slate-500">
            route-finder — zsh
          </span>
        </div>

        <div
          className="min-h-[250px] space-y-2 p-5 font-mono text-[13px] leading-6 sm:text-sm"
          aria-live="polite"
        >
          {lines.map((l, i) => (
            <p key={i} className={toneClass[l.tone]}>
              {l.text}
            </p>
          ))}
          {current && (
            <p className={toneClass[current.tone]}>
              {typed}
              <span className="nf-cursor ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-indigo-300" />
            </p>
          )}
        </div>

        <div className="border-t border-slate-800 px-5 py-4">
          <div className="mb-2 flex items-center justify-between font-mono text-xs text-slate-400">
            <span>
              {idx >= script.length ? "Done" : "Searching for page..."}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="nf-stripes h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <SkipButton onClick={onDone} />
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  404 pieces                                                         */
/* ------------------------------------------------------------------ */
type FourProps = {
  delay: string | number;
};

const Four = ({ delay }: FourProps) => (
  <span
    className="nf-pop inline-block bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-900 bg-clip-text text-transparent"
    style={{ "--d": delay }}
  >
    4
  </span>
);

const Zero = () => (
  <span
    aria-hidden="true"
    className="nf-pop relative mx-[0.02em] inline-block h-[0.74em] w-[0.74em] align-[-0.005em]"
    style={{ "--d": "0.25s" }}
  >
    <span
      className="nf-spin absolute inset-0 rounded-full"
      style={{
        background:
          "conic-gradient(from 0deg, #4f46e5, #3b82f6, #a5b4fc, #4f46e5)",
      }}
    />
    <span className="absolute inset-[15%] rounded-full bg-white shadow-inner">
      <span className="nf-blink absolute left-[24%] top-[34%] h-[17%] w-[17%] rounded-full bg-slate-950" />
      <span className="nf-blink absolute right-[24%] top-[34%] h-[17%] w-[17%] rounded-full bg-slate-950" />
      <span className="absolute left-1/2 top-[60%] h-[12%] w-[24%] -translate-x-1/2 rounded-b-full bg-slate-950" />
    </span>
  </span>
);

/* ------------------------------------------------------------------ */
/*  Progress card: count-up number + colour that shifts with progress  */
/* ------------------------------------------------------------------ */
type ProgressCardProps = {
  target?: number;
  delay?: number;
};

const ProgressCard = ({ target = 78, delay = 1000 }: ProgressCardProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const safeTarget = Math.min(100, Math.max(0, Number(target) || 0));

    if (prefersReducedMotion()) {
      setValue(safeTarget);
      return;
    }

    let raf: number | undefined;
    let start: number | undefined;
    let timer: ReturnType<typeof setTimeout>;

    const duration = 2800;

    const tick = (now: number) => {
      if (start === undefined) start = now;

      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(eased * safeTarget));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    timer = setTimeout(
      () => {
        raf = requestAnimationFrame(tick);
      },
      Math.max(0, delay),
    );

    return () => {
      clearTimeout(timer);

      if (raf !== undefined) {
        cancelAnimationFrame(raf);
      }
    };
  }, [target, delay]);

  const hue = Math.round((value / 100) * 145);
  const color = `hsl(${hue} 85% 42%)`;
  const colorFrom = `hsl(${Math.max(0, hue - 28)} 90% 55%)`;
  const colorTo = `hsl(${hue} 85% 45%)`;
  const glow = `hsl(${hue} 90% 55% / 0.35)`;

  const safeTarget = Math.min(100, Math.max(0, Number(target) || 0));
  const finished = value >= safeTarget;

  const label =
    value < 35
      ? "Just getting started"
      : value < 70
        ? "Building..."
        : finished
          ? "Almost there"
          : "Getting close";

  return (
    <div
      className="nf-in mt-6 w-full max-w-md rounded-2xl border border-indigo-100 bg-white/80 p-4 shadow-lg shadow-indigo-100/40 backdrop-blur"
      style={{ "--d": "0.8s" } as React.CSSProperties}
    >
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
            <Hammer
              size={16}
              className="nf-float"
              style={{ "--t": "1.6s" } as React.CSSProperties}
            />
            Coming very soon
          </span>

          <p
            className="mt-1 text-xs font-medium transition-colors duration-300"
            style={{ color }}
            aria-live="polite"
          >
            {label}
          </p>
        </div>

        <div
          className={`font-mono text-4xl font-extrabold leading-none tabular-nums ${
            finished ? "motion-safe:animate-pulse" : ""
          }`}
          style={{ color }}
          aria-label={`${value}% complete`}
        >
          {value}
          <span className="text-xl">%</span>
        </div>
      </div>

      <div
        className="h-3 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-label="Page development progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="relative h-full rounded-full transition-[width] duration-150 ease-out"
          style={{
            width: `${value}%`,
            background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
            boxShadow: `0 0 14px ${glow}`,
          }}
        >
          <div className="nf-stripes absolute inset-0 rounded-full" />
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Phase 2: main content                                              */
/* ------------------------------------------------------------------ */
type ContentProps = {
  mode: SearchIntroMode;
  title: string;
  progress: number;
  path: string;
  homeTo: string;
  projectsTo: string;
};

const Content = ({
  mode,
  title,
  progress,
  path,
  homeTo,
  projectsTo,
}: ContentProps) => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);
  const soon = mode === "coming-soon";

  const handleGoBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate(homeTo);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--px",
        ((e.clientX - r.left) / r.width - 0.5).toFixed(3),
      );
      el.style.setProperty(
        "--py",
        ((e.clientY - r.top) / r.height - 0.5).toFixed(3),
      );
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16"
    >
      {/* ---------- Left ---------- */}
      <div className="order-2 md:order-1">
        <div
          className="nf-in mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm backdrop-blur"
          style={{ "--d": "0s" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="nf-ping absolute inset-0 rounded-full bg-indigo-500" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-indigo-600" />
          </span>
          {soon ? <Hammer size={16} /> : <CircleHelp size={16} />}
          {soon ? "Coming Soon" : "404 Error"}
        </div>

        {soon ? (
          <h1
            className="nf-pop text-balance bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-900 bg-clip-text pb-2 text-[clamp(3.25rem,9vw,6.5rem)] font-black leading-[1] tracking-[-0.05em] text-transparent"
            style={{ "--d": "0.1s" }}
          >
            {title}
          </h1>
        ) : (
          <h1
            aria-label="404"
            className="whitespace-nowrap text-[clamp(6.5rem,15vw,11rem)] font-black leading-[0.9] tracking-[-0.07em]"
          >
            <Four delay="0.1s" />
            <Zero />
            <Four delay="0.4s" />
          </h1>
        )}

        <h2
          className="nf-in mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          style={{ "--d": "0.55s" }}
        >
          {soon ? "This page is " : "Oops! "}
          <span className="nf-flow bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {soon ? "coming soon" : "Page Not Found"}
          </span>
        </h2>

        <p
          className="nf-in mt-5 max-w-md text-base leading-8 text-slate-500 sm:text-lg"
          style={{ "--d": "0.7s" }}
        >
          {soon
            ? "I'm building this page right now and it will be live very soon. Thanks for your patience!"
            : "The page you are looking for doesn't exist or may have been moved. Don't worry, let's get you back to the right place!"}
        </p>

        <ProgressCard target={progress} />

        <div
          className="nf-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          style={{ "--d": "0.95s" }}
        >
          <button
            type="button"
            onClick={handleGoBack}
            className="nf-btn group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 px-7 py-4 font-semibold text-white shadow-lg shadow-indigo-300/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-300/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-0"
          >
            <ArrowLeft
              size={19}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Go Back
          </button>

          <Link
            to={homeTo}
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/70 px-7 py-4 font-semibold text-slate-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <Home
              size={18}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            Go Back Home
          </Link>

          <Link
            to={projectsTo}
            className="group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-indigo-600 transition-all hover:gap-3"
          >
            View My Projects
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div
          className="nf-in mt-10 flex items-center gap-3 text-sm text-slate-400"
          style={{ "--d": "1.1s" }}
        >
          <span className="h-px w-10 bg-gradient-to-r from-indigo-300 to-transparent" />
          <Sparkles size={14} className="text-indigo-400" />
          <span>Keep coding, keep growing :)</span>
        </div>
      </div>

      {/* ---------- Right ---------- */}
      <div
        className="nf-in order-1 flex min-h-[320px] items-center justify-center md:order-2 md:min-h-[500px]"
        style={{ "--d": "0.3s" }}
      >
        <div className="relative aspect-square w-full max-w-[490px]">
          <div className="absolute inset-[6%] rounded-[2.5rem] bg-gradient-to-br from-indigo-200/60 via-blue-100/50 to-white blur-2xl" />

          <div
            className="nf-parallax absolute inset-[4%] overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 shadow-2xl shadow-indigo-200/60 ring-1 ring-indigo-100 backdrop-blur"
            style={{ "--k": "-14px" }}
          >
            <img
              src={officeImg}
              alt="Beautiful office space"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-white/20" />
          </div>

          <div
            className="nf-parallax absolute -left-3 top-[8%] z-10"
            style={{ "--k": "26px" }}
          >
            <div
              className="nf-float rounded-2xl border border-white bg-white/90 p-4 shadow-xl shadow-indigo-200/70 backdrop-blur"
              style={{ "--t": "5.5s" }}
            >
              <FileCode2 size={36} className="-rotate-6 text-indigo-500" />
            </div>
          </div>

          <div
            className="nf-parallax absolute left-[2%] top-[46%] z-10"
            style={{ "--k": "34px" }}
          >
            <div
              className="nf-float text-5xl font-bold text-indigo-400"
              style={{ "--t": "4s" }}
            >
              ?
            </div>
          </div>
          <div
            className="nf-parallax absolute right-[2%] top-[44%] z-10"
            style={{ "--k": "-30px" }}
          >
            <div
              className="nf-float text-4xl font-bold text-blue-400"
              style={{ "--t": "4.8s", "--d": "-1.5s" }}
            >
              ?
            </div>
          </div>

          <div
            className="nf-parallax absolute -right-2 top-[2%] z-10"
            style={
              { "--k": "-22px" } as import("react").CSSProperties & {
                "--k": string;
              }
            }
          >
            <div
              className="nf-float relative max-w-[170px] rotate-6 rounded-[28px] border-2 border-indigo-200 bg-white/90 px-5 py-4 text-center text-sm font-medium leading-6 text-slate-500 shadow-lg shadow-indigo-100 backdrop-blur sm:text-base"
              style={{ "--t": "6.5s", "--d": "-2s" }}
            >
              {soon
                ? "Hang tight, this page is coming soon!"
                : "Looks like you're in the wrong place!"}
              <div className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 border-b-2 border-r-2 border-indigo-200 bg-white" />
            </div>
          </div>

          <div
            className="nf-parallax absolute -bottom-3 left-[6%] z-10"
            style={
              { "--k": "20px" } as import("react").CSSProperties & {
                "--k": string;
              }
            }
          >
            <div
              className="nf-float max-w-[220px] rounded-2xl border border-slate-700/60 bg-slate-950/90 px-4 py-3 font-mono text-xs text-slate-300 shadow-2xl shadow-slate-900/30 backdrop-blur"
              style={
                {
                  "--t": "7s",
                  "--d": "-3s",
                } as import("react").CSSProperties & {
                  "--t": string;
                  "--d": string;
                }
              }
            >
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="truncate">
                <span className="text-indigo-300">GET</span> {path}
              </p>
              <p>
                {soon ? (
                  <>
                    <span className="text-amber-300">202</span> Coming Soon
                  </>
                ) : (
                  <>
                    <span className="text-rose-400">404</span> Not Found
                  </>
                )}
                <span className="nf-cursor ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-indigo-300" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
type NotFoundProps = {
  mode?: SearchIntroMode;
  title?: string;
  progress?: number;
  introOnce?: boolean;
  respectReducedMotion?: boolean;
  homeTo?: string;
  projectsTo?: string;
};

const NotFound = ({
  mode = "not-found",
  title,
  progress = 78,
  introOnce = false,
  respectReducedMotion = false,
  homeTo = "/",
  projectsTo = "/case-studies",
}: NotFoundProps) => {
  const { pathname } = useLocation();
  const pageTitle = title || titleFromPath(pathname);

  const [phase, setPhase] = useState<"search" | "reveal">(() =>
    getInitialPhase(pathname, introOnce, respectReducedMotion),
  );

  // If the visitor lands on another unknown URL, run the logic again
  useEffect(() => {
    setPhase(getInitialPhase(pathname, introOnce, respectReducedMotion));
  }, [pathname, introOnce, respectReducedMotion]);

  const finishSearch = useCallback(() => {
    markIntroSeen(pathname);
    setPhase("reveal");
  }, [pathname]);

  return (
    <main className="relative flex min-h-[calc(100vh-var(--nav-h,0px))] flex-col overflow-hidden bg-gradient-to-b from-white via-white to-indigo-50/60 text-slate-900">
      <style>{css}</style>

      <div className="nf-grid pointer-events-none absolute inset-0" />
      <div className="nf-drift pointer-events-none absolute -right-32 top-10 h-[26rem] w-[26rem] rounded-full bg-indigo-200/50 blur-3xl" />
      <div
        className="nf-drift pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      {phase === "search" ? (
        <SearchIntro
          path={pathname}
          mode={mode}
          title={pageTitle}
          onDone={finishSearch}
        />
      ) : (
        <Content
          key={pathname}
          mode={mode}
          title={pageTitle}
          progress={progress}
          path={pathname}
          homeTo={homeTo}
          projectsTo={projectsTo}
        />
      )}
    </main>
  );
};

export default NotFound;
