// import React, { useEffect, useRef, useState } from "react";

// interface Job {
//   role: string;
//   company: string;
//   location: string;
//   duration: string;
//   current?: boolean;
//   points: string[];
// }

// const jobs: Job[] = [
//   {
//     role: "Product Excellence Engineer",
//     company: "Cubix Technology Ltd.",
//     location: "Dhaka, Bangladesh · On-site",
//     duration: "Dec 2025 – Present",
//     current: true,
//     points: [
//       "Provide software technical support for HMS & PMS (Hospitality/Property Management Systems), supporting day-to-day hotel operations.",
//       "Analyze client queries, reproduce software behavior, identify potential system-related causes, and coordinate solutions with development and product teams.",
//       "Collaborate with developers to identify bugs, validate fixes, and improve product performance, usability, and reliability.",
//       "Contribute to continuous product improvement by communicating client feedback, operational requirements, and real-world usage scenarios to internal teams.",
//       "Assist with implementation, configuration, testing, handover, and ongoing support for hotel management software solutions.",
//     ],
//   },
//   {
//     role: "Junior Web Developer",
//     company: "Imranslab",
//     location: "Montreal, Canada · Remote",
//     duration: "Feb 2025 – Nov 2025",
//     points: [
//       "Developed and maintained modern, responsive web applications using React.js, JavaScript, Tailwind CSS, and related frontend technologies.",
//       "Built reusable UI components and responsive interfaces for mobile, tablet, and desktop environments.",
//       "Improved application performance and cross-device compatibility through frontend optimization and responsive development practices.",
//       "Collaborated with remote developers and project teams using Git, GitHub, Jira, and Confluence.",
//       "Participated in development workflows including requirement understanding, implementation, testing, debugging, code review, and deployment.",
//     ],
//   },
//   {
//     role: "Digital Marketer",
//     company: "National IT Limited",
//     location: "Savar, Dhaka, Bangladesh",
//     duration: "Dec 2020 – Oct 2021",
//     points: [
//       "Managed digital marketing activities including SEO, content marketing, and social media campaigns.",
//       "Analyzed user behavior, market trends, and campaign performance to support data-driven improvements.",
//       "Improved online visibility and brand engagement through multi-channel digital marketing activities.",
//     ],
//   },
// ];

// /**
//  * Reveals its children once the element scrolls into view, then stops
//  * observing. Respects prefers-reduced-motion by skipping the animation.
//  */
// const useInView = <T extends HTMLElement>() => {
//   const ref = useRef<T | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;

//     if (prefersReducedMotion) {
//       setIsVisible(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(node);
//         }
//       },
//       { threshold: 0.15 },
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   return { ref, isVisible };
// };

// const TimelineItem: React.FC<{ job: Job; index: number; isLast: boolean }> = ({
//   job,
//   index,
//   isLast,
// }) => {
//   const { ref, isVisible } = useInView<HTMLDivElement>();

//   return (
//     <div
//       ref={ref}
//       style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
//       className={`group relative grid grid-cols-[auto_1fr] gap-x-5 pb-12 transition-all duration-700 ease-out last:pb-0 sm:gap-x-8 ${
//         isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
//       }`}
//     >
//       {/* Node + connecting line */}
//       <div className="flex flex-col items-center">
//         <span
//           className={`relative z-10 mt-1.5 flex h-3 w-3 items-center justify-center rounded-full ${
//             job.current
//               ? "bg-[#2a7fa3]"
//               : "border-2 border-[#2a7fa3]/40 bg-white"
//           }`}
//         >
//           {job.current && (
//             <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#2a7fa3]/60" />
//           )}
//         </span>
//         {!isLast && (
//           <span className="mt-1 w-px flex-1 bg-gradient-to-b from-[#2a7fa3]/40 via-[#42464e]/15 to-transparent" />
//         )}
//       </div>

//       {/* Content */}
//       <div className="-mt-1 rounded-xl px-4 py-3 transition-colors duration-300 group-hover:bg-[#2a7fa3]/5 sm:px-5">
//         <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//           <span className="font-space text-xs font-medium tracking-wide text-[#42464e]">
//             {job.duration}
//           </span>
//           {job.current && (
//             <span className="rounded-full bg-[#2a7fa3]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#2a7fa3]">
//               Current
//             </span>
//           )}
//         </div>

//         <h3 className="mt-2 font-space text-lg font-semibold text-[#584e4e] transition-colors duration-300 group-hover:text-[#2a7fa3] sm:text-xl">
//           {job.role}
//         </h3>
//         <p className="mt-1 text-sm font-medium text-[#2a7fa3]">
//           {job.company}{" "}
//           <span className="font-normal text-[#8C93A0]">— {job.location}</span>
//         </p>

//         <ul className="mt-4 space-y-2.5">
//           {job.points.map((point, i) => (
//             <li
//               key={i}
//               className="flex gap-3 text-sm leading-relaxed text-[#8C93A0] sm:text-base"
//             >
//               <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#2a7fa3]/50" />
//               <span>{point}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const Work = () => {
//   return (
//     <section
//       id="work"
//       className="mx-auto max-w-7xl border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
//     >
//       {/* Eyebrow */}
//       <div className="mb-10 flex items-center gap-3 md:mb-14">
//         <span className="h-[3px] w-8 bg-[#2a7fa3]" />
//         <span className="font-space text-xs uppercase tracking-[0.25em] text-[#42464e]">
//           Work Experience
//         </span>
//       </div>

//       {/* Timeline */}
//       <div className="max-w-3xl">
//         {jobs.map((job, index) => (
//           <TimelineItem
//             key={job.role + job.company}
//             job={job}
//             index={index}
//             isLast={index === jobs.length - 1}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Work;

import React, { useEffect, useRef, useState } from "react";

interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  current?: boolean;
  points: string[];
}

const jobs: Job[] = [
  {
    role: "Product Excellence Engineer",
    company: "Cubix Technology Ltd.",
    location: "Dhaka, Bangladesh · On-site",
    duration: "Dec 2025 – Present",
    current: true,
    points: [
      "Provide software technical support for HMS & PMS (Hospitality/Property Management Systems), supporting day-to-day hotel operations.",
      "Analyze client queries, reproduce software behavior, identify potential system-related causes, and coordinate solutions with development and product teams.",
      "Collaborate with developers to identify bugs, validate fixes, and improve product performance, usability, and reliability.",
      "Contribute to continuous product improvement by communicating client feedback, operational requirements, and real-world usage scenarios to internal teams.",
      "Assist with implementation, configuration, testing, handover, and ongoing support for hotel management software solutions.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Imranslab",
    location: "Montreal, Canada · Remote",
    duration: "Feb 2025 – Nov 2025",
    points: [
      "Developed and maintained modern, responsive web applications using React.js, JavaScript, Tailwind CSS, and related frontend technologies.",
      "Built reusable UI components and responsive interfaces for mobile, tablet, and desktop environments.",
      "Improved application performance and cross-device compatibility through frontend optimization and responsive development practices.",
      "Collaborated with remote developers and project teams using Git, GitHub, Jira, and Confluence.",
      "Participated in development workflows including requirement understanding, implementation, testing, debugging, code review, and deployment.",
    ],
  },
  {
    role: "Digital Marketer",
    company: "National IT Limited",
    location: "Savar, Dhaka, Bangladesh",
    duration: "Dec 2020 – Oct 2021",
    points: [
      "Managed digital marketing activities including SEO, content marketing, and social media campaigns.",
      "Analyzed user behavior, market trends, and campaign performance to support data-driven improvements.",
      "Improved online visibility and brand engagement through multi-channel digital marketing activities.",
    ],
  },
];

/**
 * Reveals its children once the element scrolls into view, then stops
 * observing. Respects prefers-reduced-motion by skipping the animation.
 */
const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const TimelineItem: React.FC<{ job: Job; index: number; isLast: boolean }> = ({
  job,
  index,
  isLast,
}) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
      className={`group relative grid grid-cols-[auto_1fr] gap-x-3 pb-8 transition-all duration-700 ease-out last:pb-0 sm:gap-x-8 sm:pb-12 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* Node + connecting line */}
      <div className="flex flex-col items-center pt-5 sm:pt-6">
        <span
          className={`relative z-10 flex h-3 w-3 items-center justify-center rounded-full ${
            job.current
              ? "bg-[#2a7fa3]"
              : "border-2 border-[#2a7fa3]/40 bg-white"
          }`}
        >
          {job.current && (
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#2a7fa3]/60" />
          )}
        </span>
        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-gradient-to-b from-[#2a7fa3]/40 via-[#42464e]/15 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="rounded-xl border border-[#42464e]/10 bg-white/70 px-4 py-4 shadow-sm shadow-black/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:border-[#2a7fa3]/30 group-hover:bg-[#2a7fa3]/[0.06] group-hover:shadow-md sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-space text-xs font-medium tracking-wide text-[#42464e]">
            {job.duration}
          </span>
          {job.current && (
            <span className="rounded-full bg-[#2a7fa3]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#2a7fa3]">
              Current
            </span>
          )}
        </div>

        <h3 className="mt-2 font-space text-lg font-semibold text-[#584e4e] transition-colors duration-300 group-hover:text-[#2a7fa3] sm:text-xl">
          {job.role}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#2a7fa3]">
          {job.company}{" "}
          <span className="font-normal text-[#8C93A0]">— {job.location}</span>
        </p>

        <ul className="mt-4 space-y-2.5">
          {job.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-[#8C93A0] sm:text-base"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#2a7fa3]/50" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      {/* Eyebrow */}
      <div className="mb-10 flex items-center gap-3 md:mb-14">
        <span className="h-[3px] w-8 bg-[#2a7fa3]" />
        <span className="font-space text-xs uppercase tracking-[0.25em] text-[#42464e]">
          Work Experience
        </span>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl">
        {jobs.map((job, index) => (
          <TimelineItem
            key={job.role + job.company}
            job={job}
            index={index}
            isLast={index === jobs.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
