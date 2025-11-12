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

export default function AboutHeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="flex flex-col-reverse items-center justify-between gap-12 mx-auto md:flex-row max-w-7xl"
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Left Column (Text Content) */}
        <motion.div
          className="w-full space-y-6 md:w-1/2"
          variants={prefersReducedMotion ? undefined : item}
        >
          <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
            Passion Fuels Purpose!
          </h2>
          <p className="text-lg sm:text-[16px] md:text-[18px] font-medium text-gray-600 dark:text-slate-500 mt-6 sm:mt-8 md:mt-8">
            Hi, I’m Md. Ahad Hossain — a passionate Web Developer and Frontend
            Designer based in Dhaka, Bangladesh. With over 2 years of hands-on
            experience in web development and digital marketing, I specialize in
            building beautiful, functional, and user-centered digital
            experiences. I believe that great design is more than just
            aesthetics — it’s about solving real problems and delivering
            intuitive, enjoyable experiences for users. Throughout my career,
            I’ve worked with remote teams and forward-thinking companies to
            deliver high-quality software solutions, lead successful digital
            marketing campaigns, and collaborate effectively across disciplines.
          </p>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          className="flex justify-center w-full md:w-1/2 md:justify-start"
          variants={prefersReducedMotion ? undefined : item}
        >
          <motion.img
            src="/src/assets/about.png"
            alt="Md. Ahad Hossain — Web Developer and Frontend Designer"
            className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px] rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
