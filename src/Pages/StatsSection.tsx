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
    value: 400,
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
    <div ref={ref} className="text-center text-3xl font-bold text-[#15919B]">
      {display}
      {suffix}
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200
              bg-white p-8 shadow-sm transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:border-[#15919B]/30"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-3xl bg-[#15919B]/10
                opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative mb-6 flex justify-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl
                  bg-[#15919B]/10 transition-all duration-300
                  group-hover:scale-110 group-hover:bg-[#15919B]"
                >
                  <Icon
                    size={30}
                    className="text-[#15919B] transition-colors duration-300 group-hover:text-white"
                  />
                </div>
              </div>

              <h3 className="relative mb-3 text-center text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <div className="relative">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
