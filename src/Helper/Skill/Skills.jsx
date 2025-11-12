"use client";

/** @format */
import { motion, useReducedMotion } from "framer-motion";
import LanguagesFrameworks from "./SubSkills/LanguagesFrameworks";
import { Laptop } from "lucide-react";
import StylingTools from "./SubSkills/StylingTools";
import ManagementBackend from "./SubSkills/ManagementBackend";
import AnalyticsSeo from "./SubSkills/AnalyticsSeo";
import Databases from "./SubSkills/Databases";
import VersionControl from "./SubSkills/VersionControl";
import DeploymentPlatforms from "./SubSkills/DeploymentPlatforms";
import Tools from "./SubSkills/Tools";
import DesignCollaboration from "./SubSkills/DesignCollaboration";

const container = {
  hidden: { opacity: 0, y: 8 },
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  const variantsContainer = prefersReducedMotion ? undefined : container;
  const variantsItem = prefersReducedMotion ? undefined : item;

  return (
    <section
      className="relative px-4 sm:px-6 md:px-12 lg:px-[3vw] py-8 lg:py-16"
      aria-labelledby="skills-heading"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col gap-6 p-6 sm:p-10 backdrop-blur-md"
        variants={variantsContainer}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Title with icon */}
        <motion.div className="flex items-center gap-3" variants={variantsItem}>
          <Laptop
            className="text-[#15919B] dark:text-[#59dce6] text-2xl"
            aria-hidden
          />
          <h2
            id="skills-heading"
            className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-black dark:text-white"
          >
            Technical Skills
          </h2>
        </motion.div>

        {/* Separator */}
        <motion.div
          className="h-[2px] w-16 bg-[#15919B] dark:bg-[#59dce6] rounded-full"
          variants={variantsItem}
          aria-hidden
        />

        {/* Sections */}
        <motion.div variants={variantsItem}>
          <LanguagesFrameworks />
        </motion.div>
        <motion.div variants={variantsItem}>
          <StylingTools />
        </motion.div>
        <motion.div variants={variantsItem}>
          <ManagementBackend />
        </motion.div>
        <motion.div variants={variantsItem}>
          <AnalyticsSeo />
        </motion.div>
        <motion.div variants={variantsItem}>
          <Databases />
        </motion.div>
        <motion.div variants={variantsItem}>
          <VersionControl />
        </motion.div>
        <motion.div variants={variantsItem}>
          <DeploymentPlatforms />
        </motion.div>
        <motion.div variants={variantsItem}>
          <Tools />
        </motion.div>
        <motion.div variants={variantsItem}>
          <DesignCollaboration />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
