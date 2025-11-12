import { FaLightbulb } from "react-icons/fa";
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

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const listParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const Philosophy = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-[3vw] py-8 lg:py-16">
      <motion.div
        className="max-w-7xl mx-auto bg-white/50 dark:bg-slate-900/50 border border-[#15919B] dark:border-[#59dce6] rounded-2xl shadow-lg flex flex-col gap-6 p-6 sm:p-10 backdrop-blur-md hover:shadow-xl transition-shadow duration-300"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Title with icon */}
        <motion.div className="flex items-center gap-3" variants={fadeItem}>
          <FaLightbulb className="text-[#15919B] dark:text-[#59dce6] text-2xl" />
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-black dark:text-white">
            My Philosophy
          </h2>
        </motion.div>

        {/* Separator */}
        <motion.div
          className="h-[2px] w-16 bg-[#15919B] dark:bg-[#59dce6] rounded-full"
          variants={fadeItem}
        />

        {/* Text */}
        <motion.p
          className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 dark:text-slate-300 leading-relaxed"
          variants={fadeItem}
        >
          I believe that great code is more than functionality — it reflects
          clarity, structure, and long-term maintainability. Each project is an
          opportunity to think creatively, solve real problems, and make
          technology more human.
        </motion.p>

        {/* Guiding Principles */}
        <motion.ul
          className="list-disc list-inside text-gray-800 dark:text-slate-300 space-y-2"
          variants={listParent}
        >
          <motion.li variants={fadeItem}>
            <strong>Keep it simple</strong> — Elegant and maintainable solutions
            always win over unnecessary complexity.
          </motion.li>
          <motion.li variants={fadeItem}>
            <strong>User-first mindset</strong> — Technology should adapt to the
            user — not force users to adapt to it.
          </motion.li>
          <motion.li variants={fadeItem}>
            <strong>Continuous learning</strong> — The tech world evolves
            rapidly; growth means learning something new every day.
          </motion.li>
          <motion.li variants={fadeItem}>
            <strong>Collaboration over competition</strong> — The best results
            come from teamwork, shared knowledge, and mutual respect.
          </motion.li>
        </motion.ul>

        <motion.p
          className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-700 dark:text-slate-300 leading-relaxed"
          variants={fadeItem}
        >
          I aim to build software that inspires confidence, improves user
          experience, and makes a positive impact through simplicity and
          innovation.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Philosophy;
