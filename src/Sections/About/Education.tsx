// // "use client"; // remove if you're not on Next.js App Router

// // import { motion, useReducedMotion } from "framer-motion";
// // import {
// //   GraduationCap,
// //   BookOpen,
// //   School,
// //   MapPin,
// //   type LucideIcon,
// // } from "lucide-react";

// // /**
// //  * Fonts (add once, e.g. with next/font or a <link>):
// //  *   Display: "Bricolage Grotesque" (700/800)   Body: "Hanken Grotesk" (400/500/600)
// //  * tailwind.config → theme.extend.fontFamily:
// //  *   display: ["Bricolage Grotesque", "sans-serif"], sans: ["Hanken Grotesk", "sans-serif"]
// //  */

// // interface Step {
// //   year: string;
// //   degree: string;
// //   field: string;
// //   institute: string;
// //   tag: string;
// //   icon: LucideIcon;
// //   height: string; // desktop riser height → creates the staircase
// //   featured?: boolean;
// // }

// // // Chronological: lowest step first, newest at the top.
// // const STEPS: Step[] = [
// //   {
// //     year: "2017",
// //     degree: "Secondary School Certificate (SSC)",
// //     field: "Science",
// //     institute: "Hajigonj Amin Memorial High School",
// //     tag: "Secondary education",
// //     icon: School,
// //     height: "md:min-h-[340px]",
// //   },
// //   {
// //     year: "2019",
// //     degree: "Higher Secondary Certificate (HSC)",
// //     field: "Science",
// //     institute: "Hajigonj Model Govt. College",
// //     tag: "Higher secondary",
// //     icon: BookOpen,
// //     height: "md:min-h-[430px]",
// //   },
// //   {
// //     year: "2022",
// //     degree: "Diploma in Engineering",
// //     field: "Computer Technology (CMT)",
// //     institute: "Chandpur Polytechnic Institute",
// //     tag: "Where tech began",
// //     icon: GraduationCap,
// //     height: "md:min-h-[520px]",
// //     featured: true,
// //   },
// // ];

// // export default function Education() {
// //   const reduce = useReducedMotion();

// //   return (
// //     <section
// //       id="education"
// //       className="bg-[#EEF1F6] px-6 py-24 font-sans text-[#0E1525] md:px-[6vw]"
// //     >
// //       <div className="mx-auto max-w-[1200px]">
// //         {/* Heading */}
// //         <div className="mb-16 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
// //           <h2 className="font-display text-[clamp(3.25rem,8vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
// //             My Education
// //           </h2>
// //           <p className="max-w-[44ch] text-lg leading-relaxed text-[#0E1525]/70">
// //             Three steps, each one built on the last: from school science to a
// //             diploma in computer technology, the base of my career in tech.
// //           </p>
// //         </div>

// //         {/* Staircase */}
// //         <ol className="grid items-end gap-4 md:grid-cols-3 md:gap-0">
// //           {STEPS.map((s, i) => {
// //             const Icon = s.icon;
// //             const dark = s.featured;
// //             return (
// //               <motion.li
// //                 key={s.year}
// //                 initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
// //                 whileInView={{ clipPath: "inset(0% 0 0 0)" }}
// //                 viewport={{ once: true, margin: "-60px" }}
// //                 transition={{
// //                   duration: 0.9,
// //                   delay: i * 0.22,
// //                   ease: [0.22, 1, 0.36, 1],
// //                 }}
// //                 className={`group flex flex-col justify-between gap-12 rounded-t-[2rem] p-7 md:p-9 ${s.height} ${
// //                   dark
// //                     ? "bg-[#2F4BFF] text-white"
// //                     : "border border-b-0 border-[#0E1525]/10 bg-white"
// //                 }`}
// //               >
// //                 <div className="flex items-start justify-between">
// //                   <span className="font-display text-[4.5rem] font-extrabold leading-none tracking-[-0.05em] md:text-[5.5rem]">
// //                     {s.year}
// //                   </span>
// //                   <span
// //                     className={`grid size-12 place-items-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-8deg] ${
// //                       dark
// //                         ? "bg-white text-[#2F4BFF]"
// //                         : "bg-[#2F4BFF] text-white"
// //                     }`}
// //                   >
// //                     <Icon className="size-6" strokeWidth={1.8} aria-hidden />
// //                   </span>
// //                 </div>

// //                 <div className="space-y-3">
// //                   <p
// //                     className={`text-sm font-semibold ${dark ? "text-white/80" : "text-[#2F4BFF]"}`}
// //                   >
// //                     {s.tag}
// //                   </p>
// //                   <h3 className="font-display text-[1.65rem] font-bold leading-[1.15] tracking-[-0.02em]">
// //                     {s.degree}
// //                   </h3>
// //                   <p className={dark ? "text-white/85" : "text-[#0E1525]/70"}>
// //                     {s.field}
// //                   </p>
// //                   <p className="flex items-start gap-2 pt-1 font-medium">
// //                     <MapPin
// //                       className="mt-0.5 size-5 flex-none"
// //                       strokeWidth={1.8}
// //                       aria-hidden
// //                     />
// //                     {s.institute}
// //                   </p>
// //                 </div>
// //               </motion.li>
// //             );
// //           })}
// //         </ol>

// //         {/* Ground line the steps stand on */}
// //         <div className="h-1 w-full bg-[#0E1525]" />
// //       </div>
// //     </section>
// //   );
// // }

// import { motion, useReducedMotion } from "framer-motion";
// import {
//   GraduationCap,
//   BookOpen,
//   School,
//   MapPin,
//   type LucideIcon,
// } from "lucide-react";

// /**
//  * Fonts: "Bricolage Grotesque" (display) + "Hanken Grotesk" (body)
//  * tailwind.config → theme.extend.fontFamily:
//  *   display: ["Bricolage Grotesque", "sans-serif"], sans: ["Hanken Grotesk", "sans-serif"]
//  */

// interface Step {
//   year: string;
//   degree: string;
//   field: string;
//   institute: string;
//   tag: string;
//   icon: LucideIcon;
//   height: string; // only applies from lg → staircase
//   featured?: boolean;
// }

// const STEPS: Step[] = [
//   {
//     year: "2017",
//     degree: "Secondary School Certificate (SSC)",
//     field: "Science",
//     institute: "Hajigonj Amin Memorial High School",
//     tag: "Secondary education",
//     icon: School,
//     height: "lg:min-h-[320px] xl:min-h-[340px]",
//   },
//   {
//     year: "2019",
//     degree: "Higher Secondary Certificate (HSC)",
//     field: "Science",
//     institute: "Hajigonj Model Govt. College",
//     tag: "Higher secondary",
//     icon: BookOpen,
//     height: "lg:min-h-[400px] xl:min-h-[430px]",
//   },
//   {
//     year: "2022",
//     degree: "Diploma in Engineering",
//     field: "Computer Technology (CMT)",
//     institute: "Chandpur Polytechnic Institute",
//     tag: "Where tech began",
//     icon: GraduationCap,
//     height: "lg:min-h-[480px] xl:min-h-[520px]",
//     featured: true,
//   },
// ];

// /** Right-side illustration: books + graduation cap (inline SVG, no image file needed).
//  *  Handwriting font (optional): "Caveat" — falls back to cursive. */
// function BooksIllustration({ reduce }: { reduce: boolean }) {
//   return (
//     <motion.div
//       aria-hidden
//       className="mx-auto w-full max-w-[200px] sm:max-w-[280px] lg:mx-0 lg:ml-auto lg:max-w-none"
//       initial={reduce ? false : { opacity: 0, x: 40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//     >
//       <motion.svg
//         viewBox="0 0 400 320"
//         className="h-auto w-full overflow-visible"
//         animate={reduce ? undefined : { y: [0, -8, 0] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       >
//         {/* graduation cap */}
//         <path
//           d="M138 128v28c0 14 28 24 62 24s62-10 62-24v-28l-62 20z"
//           fill="#1b2740"
//         />
//         <polygon points="200,84 322,120 200,156 78,120" fill="#0E1525" />
//         <polygon
//           points="200,84 322,120 200,126 78,120"
//           fill="#fff"
//           fillOpacity="0.08"
//         />
//         <circle cx="200" cy="120" r="6" fill="#2a7fa3" />
//         <path
//           d="M200 120 L298 128 V172"
//           fill="none"
//           stroke="#F2B544"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path d="M291 170h14l4 30h-22z" fill="#F2B544" />

//         {/* handwritten note + arrow */}
//         <g
//           fill="#2a7fa3"
//           fontFamily="Caveat, 'Comic Sans MS', cursive"
//           fontSize="24"
//         >
//           <text x="14" y="34" transform="rotate(-6 14 34)">
//             Learning builds
//           </text>
//           <text x="24" y="60" transform="rotate(-6 24 60)">
//             a better tomorrow
//           </text>
//         </g>
//         <path
//           d="M44 84 C 34 116, 56 138, 90 142"
//           fill="none"
//           stroke="#2a7fa3"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//         <path
//           d="M80 133 L91 142 L78 149"
//           fill="none"
//           stroke="#2a7fa3"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </motion.svg>
//     </motion.div>
//   );
// }

// export default function Education() {
//   const reduce = useReducedMotion();

//   return (
//     <section
//       id="education"
//       className="relative isolate overflow-hidden bg-white px-4 py-12 font-sans text-[#0E1525] sm:px-8 sm:py-16 lg:px-[5vw] lg:py-24 xl:px-[6vw] xl:py-28 border-t-2 border-amber-50"
//     >
//       <div className="mx-auto w-full max-w-[1200px]">
//         {/* Heading + illustration (right) */}
//         <div className="mb-8 grid items-center gap-6 sm:mb-12 lg:mb-16 lg:grid-cols-[1fr_minmax(300px,480px)] lg:gap-10">
//           <div className="sm:gap-5">
//             <h2 className="font-space text-2xl leading-snug text-[#584e4e] sm:text-3xl md:text-4xl">
//               My Education
//             </h2>
//             <p className="max-w-[46ch] text-sm leading-relaxed text-[#0E1525]/70 sm:text-base lg:text-lg">
//               Three steps, each built on the last: from school science to a
//               diploma in computer technology, the base of my career in tech.
//             </p>
//           </div>
//           <BooksIllustration reduce={!!reduce} />
//         </div>

//         {/* 1 col (mobile) → 2 col (tablet) → staircase (desktop) */}
//         <ol className="grid items-end gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
//           {STEPS.map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <motion.li
//                 key={s.year}
//                 initial={reduce ? false : { opacity: 0, y: 56 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{
//                   duration: 0.8,
//                   delay: i * 0.18,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className={`group relative flex min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-2xl border p-5 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 sm:gap-10 sm:rounded-3xl sm:p-7 lg:gap-12 lg:p-6 xl:p-9
//                   shadow-[0_12px_40px_rgba(42,127,163,0.16),inset_0_1px_0_rgba(255,255,255,0.9)]
//                   ${s.height}
//                   ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
//                   ${
//                     s.featured
//                       ? "border-[#2a7fa3]/30 bg-gradient-to-br from-[#2a7fa3]/20 via-white/50 to-white/30 hover:border-[#2a7fa3]/50"
//                       : "border-white/80 bg-gradient-to-br from-white/80 to-white/40 hover:border-[#2a7fa3]/30"
//                   }`}
//               >
//                 {/* soft light streak */}
//                 <span
//                   aria-hidden
//                   className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#2a7fa3]/15 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
//                 />

//                 <div className="relative flex items-start justify-between gap-3">
//                   <span className="font-display text-[2.75rem] font-extrabold leading-none tracking-[-0.05em] sm:text-[3.5rem] lg:text-[3.75rem] xl:text-[5.25rem]">
//                     {s.year}
//                   </span>
//                   <span className="grid size-10 flex-none place-items-center rounded-xl bg-[#2a7fa3] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6 sm:size-12 sm:rounded-2xl">
//                     <Icon
//                       className="size-5 sm:size-6"
//                       strokeWidth={1.8}
//                       aria-hidden
//                     />
//                   </span>
//                 </div>

//                 <div className="relative space-y-2 sm:space-y-3">
//                   <p className="inline-block rounded-full border border-[#2a7fa3]/20 bg-[#2a7fa3]/10 px-3 py-1 text-xs font-semibold text-[#2a7fa3] sm:text-sm">
//                     {s.tag}
//                   </p>
//                   <h3 className="font-display text-lg font-bold leading-[1.15] tracking-[-0.02em] sm:text-xl xl:text-2xl">
//                     {s.degree}
//                   </h3>
//                   <p className="text-sm text-[#0E1525]/70 sm:text-base">
//                     {s.field}
//                   </p>
//                   <p className="flex items-start gap-2 pt-1 text-sm font-medium text-[#0E1525] sm:text-base">
//                     <MapPin
//                       className="mt-0.5 size-4 flex-none sm:size-5"
//                       strokeWidth={1.8}
//                       aria-hidden
//                     />
//                     <span className="min-w-0 break-words">{s.institute}</span>
//                   </p>
//                 </div>
//               </motion.li>
//             );
//           })}
//         </ol>
//       </div>
//     </section>
//   );
// }

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/**
 * Fonts: "Bricolage Grotesque" (display) + "Hanken Grotesk" (body)
 * tailwind.config → theme.extend.fontFamily:
 *   display: ["Bricolage Grotesque", "sans-serif"], sans: ["Hanken Grotesk", "sans-serif"]
 *   space: [...]  ← your heading uses `font-space`, so keep that key defined too
 */

interface Step {
  year: string;
  degree: string;
  field: string;
  institute: string;
  tag: string;
  icon: LucideIcon;
  height: string; // only applies from lg → staircase
  featured?: boolean;
}

const STEPS: Step[] = [
  {
    year: "2017",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institute: "Hajigonj Amin Memorial High School",
    tag: "Secondary education",
    icon: School,
    height: "lg:min-h-[320px] xl:min-h-[340px]",
  },
  {
    year: "2019",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institute: "Hajigonj Model Govt. College",
    tag: "Higher secondary",
    icon: BookOpen,
    height: "lg:min-h-[400px] xl:min-h-[430px]",
  },
  {
    year: "2022",
    degree: "Diploma in Engineering",
    field: "Computer Technology (CMT)",
    institute: "Chandpur Polytechnic Institute",
    tag: "Where tech began",
    icon: GraduationCap,
    height: "lg:min-h-[480px] xl:min-h-[520px]",
    featured: true,
  },
];

/** Right-side illustration: graduation cap + handwritten note (inline SVG).
 *  Handwriting font (optional): "Caveat" — falls back to cursive. */
function CapIllustration({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      aria-hidden
      className="mx-auto w-full max-w-[220px] sm:max-w-[300px] lg:mx-0 lg:ml-auto lg:max-w-[380px]"
      initial={reduce ? false : { opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        /* cropped to the drawing so there is no empty space around it */
        viewBox="0 8 340 206"
        className="block h-auto w-full overflow-visible"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* graduation cap */}
        <path
          d="M138 128v28c0 14 28 24 62 24s62-10 62-24v-28l-62 20z"
          fill="#1b2740"
        />
        <polygon points="200,84 322,120 200,156 78,120" fill="#0E1525" />
        <polygon
          points="200,84 322,120 200,126 78,120"
          fill="#fff"
          fillOpacity="0.08"
        />
        <circle cx="200" cy="120" r="6" fill="#2a7fa3" />
        <path
          d="M200 120 L298 128 V172"
          fill="none"
          stroke="#F2B544"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M291 170h14l4 30h-22z" fill="#F2B544" />

        {/* handwritten note + arrow */}
        <g
          fill="#2a7fa3"
          fontFamily="Caveat, 'Comic Sans MS', cursive"
          fontSize="24"
        >
          <text x="14" y="34" transform="rotate(-6 14 34)">
            Learning builds
          </text>
          <text x="24" y="60" transform="rotate(-6 24 60)">
            a better tomorrow
          </text>
        </g>
        <path
          d="M44 84 C 34 116, 56 138, 90 142"
          fill="none"
          stroke="#2a7fa3"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M80 133 L91 142 L78 149"
          fill="none"
          stroke="#2a7fa3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default function Education() {
  const reduce = useReducedMotion();

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-white px-4 py-12 font-sans text-[#0E1525] sm:px-8 sm:py-16 lg:px-36 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl border-t border-[#42464e]/10">
        {/* Heading + illustration (right) */}
        <div className="mb-8 grid items-center gap-6 sm:mb-16 lg:mb-32 lg:grid-cols-2 lg:gap-10 mt-8 sm:mt-16 lg:mt-26">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="font-space text-2xl leading-snug text-[#584e4e] sm:text-3xl md:text-4xl">
              My Education
            </h2>
            <p className="max-w-[46ch] text-sm leading-relaxed text-[#0E1525]/70 sm:text-base lg:text-lg">
              Three steps, each built on the last: from school science to a
              diploma in computer technology, the base of my career in tech.
            </p>
          </div>
          <CapIllustration reduce={!!reduce} />
        </div>

        {/* 1 col (mobile) → 2 col (tablet) → staircase (desktop) */}
        <ol className="grid items-end gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.year}
                initial={reduce ? false : { opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-2xl border p-5 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 sm:gap-10 sm:rounded-3xl sm:p-7 lg:gap-12 lg:p-6 xl:p-9
                  shadow-[0_12px_40px_rgba(42,127,163,0.16),inset_0_1px_0_rgba(255,255,255,0.9)]
                  ${s.height}
                  ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
                  ${
                    s.featured
                      ? "border-[#2a7fa3]/30 bg-gradient-to-br from-[#2a7fa3]/20 via-white/50 to-white/30 hover:border-[#2a7fa3]/50"
                      : "border-white/80 bg-gradient-to-br from-white/80 to-white/40 hover:border-[#2a7fa3]/30"
                  }`}
              >
                {/* soft light streak */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#2a7fa3]/15 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span className="font-display text-[2.75rem] font-extrabold leading-none tracking-[-0.05em] sm:text-[3.5rem] lg:text-[3.75rem] xl:text-[5.25rem]">
                    {s.year}
                  </span>
                  <span className="grid size-10 flex-none place-items-center rounded-xl bg-[#2a7fa3] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6 sm:size-12 sm:rounded-2xl">
                    <Icon
                      className="size-5 sm:size-6"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>
                </div>

                <div className="relative space-y-2 sm:space-y-3">
                  <p className="inline-block rounded-full border border-[#2a7fa3]/20 bg-[#2a7fa3]/10 px-3 py-1 text-xs font-semibold text-[#2a7fa3] sm:text-sm">
                    {s.tag}
                  </p>
                  <h3 className="font-display text-lg font-bold leading-[1.15] tracking-[-0.02em] sm:text-xl xl:text-2xl">
                    {s.degree}
                  </h3>
                  <p className="text-sm text-[#0E1525]/70 sm:text-base">
                    {s.field}
                  </p>
                  <p className="flex items-start gap-2 pt-1 text-sm font-medium text-[#0E1525] sm:text-base">
                    <MapPin
                      className="mt-0.5 size-4 flex-none sm:size-5"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                    <span className="min-w-0 break-words">{s.institute}</span>
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
