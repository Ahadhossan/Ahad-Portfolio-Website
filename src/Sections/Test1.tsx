"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FolderKanban, Building2, BadgeCheck } from "lucide-react";

interface StatItem {
  title: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    title: "Projects Completed",
    value: 90,
    suffix: "+",
    icon: FolderKanban,
  },
  {
    title: "Company Projects",
    value: 3,
    suffix: "+",
    icon: Building2,
  },
  {
    title: "Years of Experience",
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
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex items-baseline justify-center gap-0.5 text-5xl font-bold tracking-tight text-slate-900"
    >
      <span>{display}</span>
      <span className="text-[#15919B]">{suffix}</span>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20">
      {/* Ambient background accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3
        rounded-full bg-[#15919B]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative isolate overflow-hidden rounded-[28px] bg-white/80 p-8
                shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.12)]
                ring-1 ring-slate-900/5 backdrop-blur-xl transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_24px_48px_-16px_rgba(21,145,155,0.25)]"
              >
                {/* Corner gradient accent */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full
                  bg-gradient-to-br from-[#15919B]/15 to-transparent opacity-0
                  transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
                    bg-gradient-to-br from-[#15919B] to-[#0d6e76] shadow-lg shadow-[#15919B]/25
                    transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                  >
                    <Icon size={26} className="text-white" strokeWidth={2} />
                  </div>

                  <p className="text-sm font-medium leading-snug text-slate-500">
                    {item.title}
                  </p>
                </div>

                <div className="relative mt-6 border-t border-slate-900/5 pt-6">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
