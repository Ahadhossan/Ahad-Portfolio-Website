/** @format */
import { Award, BarChart3, Briefcase, Locate } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Count-up number (respects reduced motion) ---------- */
function StatNumber({ target = 0, suffix = "+" }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  // base motion value -> spring -> subscribe to changes
  const base = useMotionValue(0);
  const smooth = useSpring(base, { stiffness: 120, damping: 20 });
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(smooth, "change", (v) => setDisplay(Math.round(v)));

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      base.set(target);
    } else {
      base.set(0);
      // microtask to ensure spring animates 0 -> target
      requestAnimationFrame(() => base.set(target));
    }
  }, [inView, prefersReducedMotion, target, base]);

  return (
    <span ref={ref}>
      {prefersReducedMotion ? target : display}
      {suffix}
    </span>
  );
}

/* ---------- Data ---------- */
const stats = [
  {
    title: "Projects Completed",
    value: 400, // numeric -> will count up
    suffix: "+",
    Icon: Locate,
    iconClass: "text-blue-600 group-hover:text-[#2CC295]",
  },
  {
    title: "Company Projects",
    value: 3, // numeric -> will count up
    suffix: "+",
    Icon: BarChart3,
    iconClass: "text-purple-600 group-hover:text-[#2CC295]",
  },
  {
    title: "Years of Experience",
    value: 2, // numeric -> will count up
    suffix: "+",
    Icon: Award,
    iconClass: "text-yellow-500 group-hover:text-[#2CC295]",
  },
  {
    title: "Companies Worked",
    value: (
      <div className="space-y-1">
        <p>
          imranslab{" "}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            (Jan 25–Nov 25)
          </span>
        </p>
        <p>
          Nation IT Ltd{" "}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            (2020–21)
          </span>
        </p>
      </div>
    ), // JSX -> rendered as-is
    Icon: Briefcase,
    iconClass: "text-pink-600 group-hover:text-[#2CC295]",
  },
];

/* ---------- Component ---------- */
const WhereHeaded = () => {
  const r = useReducedMotion();

  const container = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: r ? 0 : 0.08 },
      },
    }),
    [r]
  );

  const card = useMemo(
    () => ({
      hidden: { opacity: 0, y: r ? 0 : 16 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
      hover: r
        ? {}
        : {
            scale: 1.03,
            transition: { type: "spring", stiffness: 240, damping: 18 },
          },
    }),
    [r]
  );

  const StatCard = ({ Icon, title, value, iconClass, suffix }) => {
    const isNumeric = typeof value === "number";
    return (
      <motion.div
        variants={card}
        whileHover="hover"
        className="group bg-white dark:bg-[#222831] rounded-2xl shadow-lg border-2 border-[#15919B] dark:border-[#59dce6] transition-all duration-300 flex flex-col items-center p-8 hover:shadow-2xl hover:border-[#15919B] hover:ring-2 hover:ring-[#15919B]"
        role="region"
        aria-label={title}
      >
        <div className="flex items-center gap-2 mb-4">
          <Icon
            className={`w-8 h-8 transition-colors duration-300 ${iconClass}`}
            aria-hidden="true"
          />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#2CC295]">
            {title}
          </h3>
        </div>

        <div className="text-base font-bold text-center text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
          {isNumeric ? <StatNumber target={value} suffix={suffix} /> : value}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-[3vw] py-16">
      <motion.div
        className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((s, idx) => (
          <StatCard key={idx} {...s} />
        ))}
      </motion.div>
    </section>
  );
};

export default WhereHeaded;
