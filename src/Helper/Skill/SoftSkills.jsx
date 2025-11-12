"use client";

/* @format */
import { FaLightbulb } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      duration: 0.5,
      ease: "easeOut",
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

const SoftSkills = () => {
  const prefersReducedMotion = useReducedMotion();
  const vc = prefersReducedMotion ? undefined : container;
  const vi = prefersReducedMotion ? undefined : item;

  return (
    <section
      className="relative px-4 sm:px-6 md:px-12 lg:px-[3vw] py-8 lg:py-16"
      aria-labelledby="soft-skills-heading"
    >
      <motion.div
        className="max-w-6xl mx-auto bg-white/50 dark:bg-slate-900/50 border border-[#15919B] dark:border-[#59dce6] rounded-2xl shadow-lg flex flex-col gap-6 p-6 sm:p-10 backdrop-blur-md hover:shadow-xl transition-shadow duration-300"
        variants={vc}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        role="region"
        aria-labelledby="soft-skills-heading"
      >
        {/* Title with icon */}
        <motion.div className="flex items-center gap-3" variants={vi}>
          <FaLightbulb
            className="text-[#15919B] dark:text-[#59dce6] text-2xl"
            aria-hidden
          />
          <h2
            id="soft-skills-heading"
            className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-black dark:text-white"
          >
            Soft Skills
          </h2>
        </motion.div>

        {/* Separator */}
        <motion.div
          className="h-[2px] w-16 bg-[#15919B] dark:bg-[#59dce6] rounded-full"
          variants={vi}
          aria-hidden
        />

        {/* List */}
        <motion.ul
          className="list-disc list-inside text-gray-800 dark:text-slate-300 space-y-2"
          variants={vc}
        >
          <motion.li variants={vi}>
            <strong>Communication & Teamwork</strong> — Strong verbal and
            written communication; experienced collaborating with
            cross-functional teams, designers, and QA engineers in Agile
            environments.
          </motion.li>
          <motion.li variants={vi}>
            <strong>Problem-Solving & Analytical Thinking</strong> — Able to
            identify, analyze, and solve complex technical problems efficiently
            while preserving system integrity.
          </motion.li>
          <motion.li variants={vi}>
            <strong>Adaptability & Continuous Learning</strong> — Quick to learn
            new tools and technologies; adapts to evolving project needs,
            frameworks, and workflows.
          </motion.li>
          <motion.li variants={vi}>
            <strong>Time Management & Organization</strong> — Excellent at
            prioritizing tasks, meeting deadlines, and managing multiple
            projects with attention to detail.
          </motion.li>
          <motion.li variants={vi}>
            <strong>Leadership & Mentoring</strong> — Guides junior developers,
            supports interns, and fosters a collaborative, knowledge-sharing
            culture.
          </motion.li>
          <motion.li variants={vi}>
            <strong>Creativity & Innovation</strong> — Approaches challenges
            with curiosity to find elegant, user-focused solutions.
          </motion.li>
          <motion.li variants={vi}>
            <strong>Accountability & Work Ethic</strong> — Dependable,
            self-motivated, and committed to quality, consistency, and
            reliability in every deliverable.
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default SoftSkills;
