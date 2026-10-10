// "use client";

// import { useEffect, useState } from "react";
// import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

// type Theme = "light" | "system" | "dark";

// const ORDER: Theme[] = ["light", "system", "dark"];

// const META: Record<
//   Theme,
//   { label: string; Icon: LucideIcon; description: string }
// > = {
//   light: {
//     label: "Light Mode",
//     Icon: Sun,
//     description: "Bright and clean appearance",
//   },
//   system: {
//     label: "System Mode",
//     Icon: Monitor,
//     description: "Follows your device preference",
//   },
//   dark: {
//     label: "Dark Mode",
//     Icon: Moon,
//     description: "Easy on the eyes",
//   },
// };

// function applyTheme(theme: Theme) {
//   const isDark =
//     theme === "dark" ||
//     (theme === "system" &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches);

//   const root = document.documentElement;

//   root.classList.toggle("dark", isDark);
//   root.style.colorScheme = isDark ? "dark" : "light";
// }

// function getSavedTheme(): Theme {
//   try {
//     const saved = localStorage.getItem("theme");

//     if (saved === "light" || saved === "system" || saved === "dark") {
//       return saved;
//     }
//   } catch {
//     // localStorage unavailable
//   }

//   return "system";
// }

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<Theme | null>(null);

//   useEffect(() => {
//     const savedTheme = getSavedTheme();

//     setTheme(savedTheme);
//     applyTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     if (theme === null) return;

//     applyTheme(theme);

//     try {
//       localStorage.setItem("theme", theme);
//     } catch {
//       // localStorage unavailable
//     }

//     if (theme !== "system") return;

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleChange = () => applyTheme("system");

//     mediaQuery.addEventListener("change", handleChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleChange);
//     };
//   }, [theme]);

//   const cycleTheme = () => {
//     const current = theme ?? "system";
//     const nextIndex = (ORDER.indexOf(current) + 1) % ORDER.length;

//     setTheme(ORDER[nextIndex]);
//   };

//   const current = theme ? META[theme] : null;

//   const nextTheme = theme
//     ? META[ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]]
//     : null;

//   const Icon = current?.Icon;

//   return (
//     <div className="group/theme relative flex items-center">
//       <button
//         type="button"
//         onClick={cycleTheme}
//         aria-label={
//           current
//             ? `${current.label}. Switch to ${nextTheme?.label}`
//             : "Change color theme"
//         }
//         aria-describedby="theme-toggle-tooltip"
//         title={current?.label ?? "Change theme"}
//         className="
//           relative grid h-10 w-10 shrink-0 place-items-center
//           overflow-hidden rounded-full
//           border border-slate-200 bg-white text-slate-700
//           shadow-sm
//           transition-all duration-300 ease-out
//           hover:-translate-y-0.5 hover:border-teal-400
//           hover:bg-teal-50 hover:text-teal-700 hover:shadow-md
//           active:scale-90
//           focus-visible:outline-none
//           focus-visible:ring-2 focus-visible:ring-teal-500
//           focus-visible:ring-offset-2
//           dark:border-slate-700 dark:bg-slate-900
//           dark:text-slate-200 dark:hover:border-teal-400
//           dark:hover:bg-teal-950 dark:hover:text-teal-300
//           dark:focus-visible:ring-offset-slate-950
//           motion-reduce:transform-none
//           motion-reduce:transition-none
//         "
//       >
//         {/* Soft hover glow */}
//         <span
//           aria-hidden="true"
//           className="
//             pointer-events-none absolute inset-0 rounded-full
//             bg-teal-500/10 opacity-0
//             transition-opacity duration-300
//             group-hover/theme:opacity-100
//           "
//         />

//         {/* Animated icon */}
//         <span
//           key={theme ?? "loading"}
//           className="
//             relative flex items-center justify-center
//             animate-theme-icon
//           "
//         >
//           {Icon && <Icon size={18} strokeWidth={2} />}
//         </span>
//       </button>

//       {/* Hover tooltip */}
//       {current && nextTheme && (
//         <div
//           id="theme-toggle-tooltip"
//           role="tooltip"
//           className="
//             pointer-events-none absolute right-0 top-full z-[100]
//             mt-3 w-56 origin-top-right
//             translate-y-1 scale-95 opacity-0
//             rounded-2xl border border-slate-200
//             bg-white p-3.5 text-left shadow-xl shadow-slate-900/10
//             transition-all duration-200 ease-out
//             group-hover/theme:translate-y-0
//             group-hover/theme:scale-100
//             group-hover/theme:opacity-100
//             group-focus-within/theme:translate-y-0
//             group-focus-within/theme:scale-100
//             group-focus-within/theme:opacity-100
//             dark:border-slate-700 dark:bg-slate-900
//             dark:shadow-black/30
//           "
//         >
//           <div className="flex items-center gap-3">
//             <div
//               className="
//                 flex h-10 w-10 shrink-0 items-center justify-center
//                 rounded-xl bg-teal-500/10 text-teal-700
//                 dark:bg-teal-400/10 dark:text-teal-300
//               "
//             >
//               <current.Icon size={20} strokeWidth={1.8} />
//             </div>

//             <div className="min-w-0">
//               <p className="text-sm font-semibold text-slate-900 dark:text-white">
//                 {current.label}
//               </p>
//               <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
//                 {current.description}
//               </p>
//             </div>
//           </div>

//           <div className="my-3 border-t border-slate-100 dark:border-slate-800" />

//           <div className="flex items-center justify-between gap-2">
//             <span className="text-xs text-slate-500 dark:text-slate-400">
//               Click to switch
//             </span>

//             <span
//               className="
//                 inline-flex items-center gap-1 rounded-full
//                 bg-teal-50 px-2 py-1 text-[11px] font-medium
//                 text-teal-700
//                 dark:bg-teal-400/10 dark:text-teal-300
//               "
//             >
//               <nextTheme.Icon size={12} />
//               {nextTheme.label}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

type Theme = "light" | "system" | "dark";

const ORDER: Theme[] = ["light", "system", "dark"];

const META: Record<
  Theme,
  {
    label: string;
    Icon: LucideIcon;
    description: string;
  }
> = {
  light: {
    label: "Light Mode",
    Icon: Sun,
    description: "Bright and clean appearance",
  },
  system: {
    label: "System Mode",
    Icon: Monitor,
    description: "Follows your device preference",
  },
  dark: {
    label: "Dark Mode",
    Icon: Moon,
    description: "Easy on the eyes",
  },
};

function applyTheme(theme: Theme) {
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const root = document.documentElement;

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
}

function getSavedTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");

    if (saved === "light" || saved === "system" || saved === "dark") {
      return saved;
    }
  } catch {
    // localStorage may be unavailable.
  }

  return "system";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Load the saved theme.
  useEffect(() => {
    const savedTheme = getSavedTheme();

    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Apply theme, save preference, and listen for system theme changes.
  useEffect(() => {
    if (theme === null) return;

    applyTheme(theme);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage errors.
    }

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const cycleTheme = () => {
    const currentTheme = theme ?? "system";
    const currentIndex = ORDER.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % ORDER.length;

    setTheme(ORDER[nextIndex]);
  };

  const current = theme ? META[theme] : null;

  const nextTheme = theme
    ? META[ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length]]
    : null;

  const Icon = current?.Icon;

  return (
    <div className="group/theme relative flex items-center">
      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={
          current
            ? `${current.label}. Switch to ${nextTheme?.label}`
            : "Change color theme"
        }
        title={current?.label ?? "Change theme"}
        className="
          relative grid h-10 w-10 shrink-0 place-items-center
          overflow-hidden rounded-full
          border border-black/70 bg-white text-slate-700
          transition-[background-color,border-color,color,transform]
          duration-300 ease-in-out 
           hover:border-teal-400
          hover:bg-teal-50 hover:text-teal-700
          active:scale-90
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-teal-500
          focus-visible:ring-offset-2
          dark:border-slate-700 dark:bg-slate-900
          dark:text-slate-200
          dark:hover:border-teal-400
          dark:hover:bg-teal-950
          dark:hover:text-teal-300
          motion-reduce:transform-none
          motion-reduce:transition-none
        "
      >
        {/* Subtle hover background */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-teal-500/10 opacity-0
            transition-opacity duration-300
            group-hover/theme:opacity-100
          "
        />

        {/* Animated Theme Icon */}
        <span
          key={theme ?? "loading"}
          className="
            relative flex items-center justify-center
            animate-theme-icon
          "
        >
          {Icon && <Icon size={18} strokeWidth={2} />}
        </span>
      </button>

      {/* Tooltip: visible only while hovering */}
      {current && nextTheme && (
        <div
          id="theme-toggle-tooltip"
          role="tooltip"
          className="
            pointer-events-none absolute right-0 top-full z-[100]
            mt-3 w-56 origin-top-right
            invisible translate-y-1 scale-95 opacity-0
            rounded-2xl border border-slate-200
            bg-white p-3.5 text-left
            transition-[opacity,transform,visibility]
            duration-200 ease-in-out
            group-hover/theme:visible
            group-hover/theme:translate-y-0
            group-hover/theme:scale-100
            group-hover/theme:opacity-100
            dark:border-slate-700 dark:bg-slate-900
          "
        >
          {/* Current Theme Information */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl bg-teal-500/10 text-teal-700
                transition-colors duration-300
                dark:bg-teal-400/10 dark:text-teal-300
              "
            >
              <current.Icon size={20} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <p
                className="
                  text-sm font-semibold text-slate-900
                  transition-colors duration-300 dark:text-white
                "
              >
                {current.label}
              </p>

              <p
                className="
                  mt-0.5 text-xs leading-relaxed text-slate-500
                  transition-colors duration-300
                  dark:text-slate-400
                "
              >
                {current.description}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-3 border-t border-slate-100 dark:border-slate-800" />

          {/* Next Theme */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Click to switch
            </span>

            <span
              className="
                inline-flex items-center gap-1 rounded-full
                bg-teal-50 px-2 py-1
                text-[11px] font-medium text-teal-700
                transition-colors duration-300
                dark:bg-teal-400/10 dark:text-teal-300
              "
            >
              <nextTheme.Icon size={12} />
              {nextTheme.label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
