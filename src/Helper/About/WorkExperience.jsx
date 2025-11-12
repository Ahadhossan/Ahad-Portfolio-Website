"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Manager",
    company: "ImransLab",
    duration: "Sep 2025 – Nov 2025",
    details: [
      "Oversee day-to-day operations, project planning, and execution to ensure timely and high-quality delivery.",
      "Lead and mentor a cross-functional team, fostering collaboration and professional growth.",
      "Manage client communications, project requirements, and resource allocation.",
      "Implement process improvements to boost productivity and efficiency.",
      "Track progress using Agile/Scrum methodologies and ensure alignment with company goals.",
      "Contribute to strategic planning, business development, and organizational decision-making.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "ImransLab (Remote)",
    duration: "Feb 2025 – Sep 2025",
    details: [
      "Developed and maintained modern, responsive web applications using React.js.",
      "Optimized performance and ensured cross-device compatibility.",
      "Implemented state management using Redux Toolkit.",
      "Collaborated with remote teams via Jira, Git, and Confluence.",
    ],
  },
  {
    role: "Digital Marketer",
    company: "National IT Limited – Savar, Dhaka, Bangladesh",
    duration: "Dec 2020 – Oct 2021",
    details: [
      "Led and managed digital marketing campaigns across SEO, content, and social media.",
      "Analyzed market trends and user behavior to improve campaign ROI.",
      "Enhanced brand visibility and engagement through multi-channel strategies.",
    ],
  },
];

const container = (ease) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      when: "beforeChildren",
      ease,
    },
  },
});

const item = (ease) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
});

const ExperienceCard = ({ exp, ease }) => {
  return (
    <motion.article
      variants={item(ease)}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300"
      aria-label={`${exp.role} at ${exp.company}`}
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {exp.role}
      </h3>
      <p className="text-sm text-teal-700 dark:text-teal-300 mb-3">
        {exp.company} · {exp.duration}
      </p>
      <ul
        role="list"
        className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1"
      >
        {exp.details.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.article>
  );
};

const WorkExperience = () => {
  const prefersReducedMotion = useReducedMotion();
  // Custom cubic-bezier; falls back to linear if reduced motion is preferred
  const ease = prefersReducedMotion ? "linear" : [0.5, 0.496, 0.34, 1];

  return (
    <section
      id="work-experience"
      className="py-16"
      aria-labelledby="work-experience-title"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="work-experience-title"
          className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          <FaBriefcase className="inline-block mr-3 align-[-2px] text-teal-500" />
          Work Experience
        </h2>

        {/* Centered separator */}
        <div className="h-[2px] w-16 bg-[#15919B] dark:bg-[#59dce6] rounded-full mx-auto mb-10" />

        <motion.div
          className="space-y-10"
          variants={container(ease)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} ease={ease} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
