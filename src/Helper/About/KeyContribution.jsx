/* @format */
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion";

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

const listParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function KeyContribution() {
  return (
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-[3vw] py-8 lg:py-16">
      <motion.div
        className="max-w-7xl mx-auto bg-white/50 dark:bg-slate-900/50 border border-[#15919B] dark:border-[#59dce6] rounded-2xl shadow-lg flex flex-col gap-6 p-6 sm:p-10 backdrop-blur-md hover:shadow-xl transition-shadow duration-300"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        role="region"
        aria-labelledby="key-contrib-heading"
      >
        {/* Title with icon */}
        <motion.div className="flex items-center gap-3" variants={item}>
          <FaKey
            className="text-[#15919B] dark:text-[#59dce6] text-2xl"
            aria-hidden
          />
          <h2
            id="key-contrib-heading"
            className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-black dark:text-white"
          >
            Key Contributions
          </h2>
        </motion.div>

        {/* Separator */}
        <motion.div
          className="h-[2px] w-16 bg-[#15919B] dark:bg-[#59dce6] rounded-full"
          variants={item}
        />

        {/* Bullet list */}
        <motion.ul
          className="list-disc list-inside text-gray-800 dark:text-slate-300 space-y-2"
          variants={listParent}
        >
          <motion.li variants={item}>
            <strong>End-to-End Web Development</strong> — Designed, developed,
            and deployed full-stack web applications using React.js, Next.js,
            Tailwind CSS, and Firebase — ensuring scalability, performance, and
            maintainability.
          </motion.li>
          <motion.li variants={item}>
            <strong>Responsive & Accessible Design</strong> — Delivered
            pixel-perfect, responsive layouts that provide seamless user
            experiences across mobile, tablet, and desktop devices.
          </motion.li>
          <motion.li variants={item}>
            <strong>Project Leadership & Mentorship</strong> — Guided junior
            developers in implementing clean, reusable code practices and modern
            UI/UX standards, fostering a collaborative learning culture.
          </motion.li>
          <motion.li variants={item}>
            <strong>Agile Project Execution</strong> — Managed sprints, task
            prioritization, and code reviews using Agile/Scrum methodologies and
            tools like Jira, Confluence, Wiki and GitHub.
          </motion.li>
          <motion.li variants={item}>
            <strong>Deployment & CI/CD</strong> — Successfully deployed
            production-ready projects on Vercel, Netlify, Firebase, and Google
            Cloud, integrating CI/CD pipelines through Git and Jenkins.
          </motion.li>
          <motion.li variants={item}>
            <strong>Analytics & Optimization</strong> — Implemented Google
            Analytics to monitor user behavior and make data-driven
            improvements.
          </motion.li>
          <motion.li variants={item}>
            <strong>Cross-Functional Collaboration</strong> — Worked closely
            with designers, developers, and business teams to translate
            requirements into innovative, real-world solutions.
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
}
