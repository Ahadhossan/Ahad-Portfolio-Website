"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultItems = [
  {
    year: "2022",
    title: "Diploma in Engineering (CMT)",
    org: "Chandpur Polytechnic Institute",
    details: "Core courses in computer & microprocessor tech, projects, labs.",
  },
  {
    year: "2019",
    title: "HSC, Science",
    org: "Hajigonj Model Govt College",
    details: "Physics, Chemistry, Mathematics, Biology.",
  },
  {
    year: "2017",
    title: "SSC, Science",
    org: "Hajigonj Amin Memorial High School",
    details: "Foundation in general science and mathematics.",
  },
];

const container = (ease) => ({
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.08, ease },
  },
});

const item = (ease) => ({
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
});

const EducationTimeline = ({ items = defaultItems }) => {
  const prefersReducedMotion = useReducedMotion();
  const ease = prefersReducedMotion ? "linear" : [0.5, 0.496, 0.34, 1];

  return (
    <section className="py-16" aria-labelledby="education-title">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="education-title"
          className="text-4xl font-bold text-center tracking-tight text-gray-900 dark:text-white mb-6"
        >
          🎓 Education
        </h2>

        {/* Centered separator */}
        <div className="h-[2px] w-16 bg-[#15919B] dark:bg-[#59dce6] rounded-full mx-auto mb-10" />

        <motion.div
          className="relative"
          variants={prefersReducedMotion ? undefined : container(ease)}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* animated vertical line */}
          <motion.div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/60 via-teal-400/20 to-transparent origin-top"
            aria-hidden
            initial={prefersReducedMotion ? undefined : { scaleY: 0 }}
            whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.7, ease }
            }
          />

          <ul className="space-y-10">
            {items.map((itemData, idx) => (
              <motion.li
                key={idx}
                className="relative pl-12 sm:pl-16"
                variants={prefersReducedMotion ? undefined : item(ease)}
              >
                {/* node */}
                <span
                  className="absolute left-0 sm:left-2 mt-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-900 ring-2 ring-teal-500 shadow"
                  aria-hidden
                >
                  <motion.span
                    className="h-3 w-3 rounded-full bg-teal-500"
                    initial={prefersReducedMotion ? undefined : { scale: 0 }}
                    whileInView={
                      prefersReducedMotion ? undefined : { scale: 1 }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 0.35, ease, delay: 0.05 }
                    }
                  />
                </span>

                {/* card */}
                <article className="rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-teal-500">
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center rounded-full border border-teal-500 px-2.5 py-0.5 text-xs font-semibold text-teal-700 dark:text-teal-300">
                        {itemData.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {itemData.title}
                      </h3>
                    </div>
                    <p className="text-teal-700 dark:text-teal-300 font-medium">
                      {itemData.org}
                    </p>
                    {itemData.details && (
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {itemData.details}
                      </p>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeline;
