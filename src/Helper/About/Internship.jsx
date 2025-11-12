"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const internships = [
  {
    role: "Industrial Attachment – Professional Web Development Specialist (PWDS)",
    company: "People N Tech Limited – Dhaka, Bangladesh",
    duration: "Oct 2022 – Jan 2023",
    details: [
      "Gained hands-on training in front-end and back-end web development.",
      "Worked on real-world projects using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Collaborated in a team setting practicing Agile methodologies and Git-based version control.",
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

const InternshipCard = ({ data, ease }) => (
  <motion.article
    variants={item(ease)}
    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300"
    aria-label={`${data.role} at ${data.company}`}
  >
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
      {data.role}
    </h3>
    <p className="text-sm text-teal-700 dark:text-teal-300 mb-3">
      {data.company} · {data.duration}
    </p>
    <ul
      role="list"
      className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1"
    >
      {data.details.map((d, i) => (
        <li key={i}>{d}</li>
      ))}
    </ul>
  </motion.article>
);

const Internship = () => {
  const prefersReducedMotion = useReducedMotion();
  const ease = prefersReducedMotion ? "linear" : [0.5, 0.496, 0.34, 1];

  return (
    <section className="py-16" aria-labelledby="internship-title">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="internship-title"
          className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        >
          <FaUserGraduate className="inline-block mr-3 align-[-2px] text-teal-500" />
          Internship
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
          {internships.map((it, idx) => (
            <InternshipCard key={idx} data={it} ease={ease} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
