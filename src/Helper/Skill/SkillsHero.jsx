"use client";

import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function SkillsHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="min-h-[400px] pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-title"
    >
      <motion.div
        className="flex flex-col-reverse items-center justify-between max-w-6xl gap-12 mx-auto md:flex-row"
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Left Column (Text Content) */}
        <motion.div
          className="w-full space-y-6 text-center md:w-1/2 md:text-left"
          variants={prefersReducedMotion ? undefined : item}
        >
          <h2
            id="skills-title"
            className="leading-tight text-2xl sm:text-3xl md:text-4xl text-black dark:text-white"
          >
            Skills
          </h2>
          <p className="leading-tight sm:text-[16px] md:text-[18px] text-gray-600 dark:text-slate-500 mt-3">
            <span>
              Creative Full-Stack Web Developer skilled in building fast,
              responsive, and modern web applications using React.js, Next.js,
              TypeScript, and Tailwind CSS. Experienced in Firebase, Redux
              Toolkit, and Git/GitHub for scalable, maintainable, and
              high-performance development. Passionate about UI/UX design, clean
              code, and turning ideas into seamless digital experiences.
            </span>
          </p>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          className="flex justify-center w-full md:w-1/2 md:justify-start"
          variants={prefersReducedMotion ? undefined : item}
        >
          <motion.img
            src="/src/assets/skills.jpg"
            alt="Illustration representing technical skills and development"
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
