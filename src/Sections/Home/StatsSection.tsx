// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView, animate } from "framer-motion";
// import { FolderKanban, Building2, BadgeCheck } from "lucide-react";

// interface StatItem {
//   title: string;
//   value: number;
//   suffix: string;
//   icon: React.ElementType;
// }

// const stats: StatItem[] = [
//   {
//     title: "Projects Completed",
//     value: 90,
//     suffix: "+",
//     icon: FolderKanban,
//   },
//   {
//     title: "Company Projects",
//     value: 3,
//     suffix: "+",
//     icon: Building2,
//   },
//   {
//     title: "Years of Experience",
//     value: 2,
//     suffix: "+",
//     icon: BadgeCheck,
//   },
// ];

// const Counter: React.FC<{ value: number; suffix: string }> = ({
//   value,
//   suffix,
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     if (!isInView) return;
//     const controls = animate(0, value, {
//       duration: 1.5,
//       ease: "easeOut",
//       onUpdate: (v) => setDisplay(Math.floor(v)),
//     });
//     return () => controls.stop();
//   }, [isInView, value]);

//   return (
//     <div
//       ref={ref}
//       className="flex items-baseline justify-center gap-0.5 text-5xl font-bold tracking-tight text-slate-900"
//     >
//       <span>{display}</span>
//       <span className="text-[#15919B]">{suffix}</span>
//     </div>
//   );
// };

// const StatsSection: React.FC = () => {
//   return (
//     <section className="relative overflow-hidden bg-slate-50 px-4 py-20">
//       {/* Ambient background accent */}
//       <div
//         className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3
//         rounded-full bg-[#15919B]/10 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-6xl">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
//           {stats.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                   ease: "easeOut",
//                 }}
//                 className="group relative isolate overflow-hidden rounded-[28px] bg-white/80 p-8
//                 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.12)]
//                 ring-1 ring-slate-900/5 backdrop-blur-xl transition-all duration-300
//                 hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-16px_rgba(21,145,155,0.25)]"
//               >
//                 {/* Corner gradient accent */}
//                 <div
//                   className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full
//                   bg-gradient-to-br from-[#15919B]/15 to-transparent opacity-0
//                   transition-opacity duration-500 group-hover:opacity-100"
//                 />

//                 <div className="relative flex items-center gap-4">
//                   <div
//                     className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
//                     bg-gradient-to-br from-[#15919B] to-[#0d6e76] shadow-lg shadow-[#15919B]/25
//                     transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
//                   >
//                     <Icon size={26} className="text-white" strokeWidth={2} />
//                   </div>

//                   <p className="text-sm font-medium leading-snug text-slate-500">
//                     {item.title}
//                   </p>
//                 </div>

//                 <div className="relative mt-6 border-t border-slate-900/5 pt-6">
//                   <Counter value={item.value} suffix={item.suffix} />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import { FolderKanban, Building2, BadgeCheck } from "lucide-react";

interface StatItem {
  title: string;
  hint: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    title: "Projects Completed",
    hint: "Web, mobile and dashboards",
    value: 90,
    suffix: "+",
    icon: FolderKanban,
  },
  {
    title: "Company Projects",
    hint: "Shipped with real teams",
    value: 3,
    suffix: "+",
    icon: Building2,
  },
  {
    title: "Years of Experience",
    hint: "Building for the web",
    value: 2,
    suffix: "+",
    icon: BadgeCheck,
  },
];

const Counter: React.FC<{ value: number; suffix: string }> = ({
  value,
  suffix,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value, reduce]);

  return (
    <div
      ref={ref}
      className="flex items-baseline gap-1 text-6xl font-semibold tracking-tight tabular-nums"
    >
      <span className="bg-gradient-to-b from-slate-900 to-slate-600 bg-clip-text text-transparent">
        {display}
      </span>
      <span className="text-4xl text-[#15919B]">{suffix}</span>
    </div>
  );
};

const StatCard: React.FC<{ item: StatItem; index: number }> = ({
  item,
  index,
}) => {
  const Icon = item.icon;

  // cursor spotlight: updates CSS variables, no re-render
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={onMove}
      className="group relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white p-8
      shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_-20px_rgba(15,23,42,0.15)]
      transition-all duration-300 hover:-translate-y-1 hover:border-[#15919B]/40
      hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-20px_rgba(21,145,155,0.3)]"
    >
      {/* spotlight that follows the cursor */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(21,145,155,0.12), transparent 70%)",
        }}
      />

      {/* top highlight line */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#15919B]/30 to-transparent" />

      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#15919B] to-[#0d6e76] shadow-lg shadow-[#15919B]/30">
          <Icon size={22} className="text-white" strokeWidth={2} />
        </div>
      </div>

      <div className="mt-8">
        <Counter value={item.value} suffix={item.suffix} />
      </div>

      <div className="mt-4">
        <p className="text-base font-medium text-slate-900">{item.title}</p>
        <p className="mt-1 text-sm text-slate-500">{item.hint}</p>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24">
      {/* soft ambient tint */}
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#15919B]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((item, index) => (
            <StatCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
