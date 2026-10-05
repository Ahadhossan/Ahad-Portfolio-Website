// import React from "react";
// import AboutImage from "../../assets/About.jpeg";
// import SectionEyebrow from "../../common/SectionEyebrow";

// import { ArrowUpRight } from "lucide-react";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="mx-auto max-w-7xl border-t border-white/10 px-2 py-16 sm:px-4 sm:py-20 md:px-8 md:py-28 mt-0"
//     >
//       {/* Eyebrow */}
//       <div className="mb-6 flex items-center gap-3 md:mb-8">
//         <SectionEyebrow label="About Me" />
//       </div>

//       <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
//         {/* Text content */}
//         <div className="order-2 md:order-1">
//           <h2 className="font-space text-2xl leading-snug text-[#584e4e] sm:text-3xl md:text-4xl">
//             Passion fuels purpose.
//           </h2>

//           <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:mt-6 sm:text-base">
//             Hi, I'm <span className="text-[#194356]">Md. Ahad Hossain</span> —
//             Results-driven Web Developer with 2+ years of professional
//             experience building modern, responsive, and scalable web
//             applications using React.js, Next.js, TypeScript, JavaScript, and
//             Tailwind CSS. Experienced in frontend development, responsive UI
//             implementation, state management, software troubleshooting, product
//             support, and cross-functional collaboration.
//           </p>

//           <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:mt-6 sm:text-base">
//             Currently working as a{" "}
//             <span className="text-[#194356]">Product Excellence Engineer</span>{" "}
//             at Cubix Technology Ltd., supporting HMS/PMS products, analyzing
//             software queries, collaborating with development teams, conducting
//             client training, and contributing to product quality and user
//             experience improvements. digital experiences.
//           </p>

//           <p className="mt-4 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:text-base">
//             Previously worked as a Junior Web Developer at Imranslab, developing
//             responsive web applications and collaborating with remote teams
//             using modern development and project-management tools. Strong
//             understanding of the software development lifecycle, Agile
//             practices, Git-based workflows, and production deployment.
//           </p>

//           {/* CTA */}
//           <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 items-center md:items-baseline">
//             <a
//               href="contact"
//               className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
//     rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] px-7 py-4
//     text-sm font-semibold text-white shadow-lg shadow-[#2a7fa3]/20
//     transition-all duration-300
//     hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2a7fa3]/40
//     active:translate-y-0
//     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a7fa3] focus-visible:ring-offset-2"
//             >
//               {/* Shine sweep */}
//               <span
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12
//       bg-gradient-to-r from-transparent via-white/25 to-transparent
//       transition-transform duration-700 ease-out group-hover:translate-x-full"
//               />
//               <span className="relative">Let's Connect</span>
//               <ArrowUpRight
//                 aria-hidden="true"
//                 className="relative h-4 w-4 shrink-0 transition-transform duration-300
//       group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                 strokeWidth={2}
//               />
//             </a>

//             <a
//               href="#projects"
//               className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
//     rounded-full border border-[#2a7fa3] bg-white px-7 py-4 text-sm font-semibold text-black
//     transition-all duration-300
//     hover:-translate-y-0.5 hover:border-[#2a7fa3] hover:text-white
//     active:translate-y-0
//     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a7fa3] focus-visible:ring-offset-2"
//             >
//               {/* Gradient layer (fades in on hover) */}
//               <span
//                 aria-hidden="true"
//                 className="absolute inset-0 bg-gradient-to-r from-[#2a7fa3] to-[#2a7fa3]
//       opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//               />
//               {/* Shine sweep */}
//               <span
//                 aria-hidden="true"
//                 className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12
//       bg-gradient-to-r from-transparent via-white/25 to-transparent
//       transition-transform duration-700 ease-out group-hover:translate-x-full"
//               />
//               <span className="relative">View Work</span>
//             </a>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="order-1 md:order-2">
//           <div className="relative mx-auto max-w-xs md:max-w-lg">
//             {/* soft glow behind image */}
//             <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-white/5 via-transparent to-white/5 blur-2xl " />

//             {/* <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#151B27] ring-1 ring-white/10 cursor-pointer transition-all duration-300 hover:scale-105">
//               <img
//                 src={AboutImage}
//                 alt="Md. Ahad Hossain"
//                 loading="lazy"
//                 className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
//               />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { useRef } from "react";
import AboutImage from "../../assets/About.jpeg";
import SectionEyebrow from "../../common/SectionEyebrow";
import { ArrowUpRight } from "lucide-react";

const MAX_TILT = 14; // degrees: 8 = subtle, 20 = dramatic

/* ---------- Tilt card (follows the mouse) ---------- */
const TiltCard = ({ src, alt }: { src: string; alt: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1

    el.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT * 2}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT * 2}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="[perspective:1000px]">
      <div
        ref={cardRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#151B27]
          ring-1 ring-white/10 shadow-[0_16px_40px_-12px_rgba(42,127,163,0.35)]
          transition-[transform,box-shadow] duration-200 ease-out will-change-transform
          [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]
          hover:scale-[1.03]
          motion-reduce:transform-none motion-reduce:transition-none cursor-pointer"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className="h-full w-full select-none object-cover grayscale
            transition-[filter] duration-500 group-hover:grayscale-0"
        />

        {/* Glare that follows the cursor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_var(--gx,50%)_var(--gy,50%),rgba(255,255,255,0.25),transparent_55%)]"
        />
      </div>
    </div>
  );
};

/* ---------- About section ---------- */
const About = () => {
  return (
    <section
      id="about"
      className="mx-auto mt-0 max-w-7xl border-t border-white/10 px-2 py-16 sm:px-4 sm:py-20 md:px-8 md:py-28"
    >
      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-3 md:mb-8">
        <SectionEyebrow label="About Me" />
      </div>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <h2 className="font-space text-2xl leading-snug text-[#0F2E33] sm:text-3xl md:text-4xl">
            Passion fuels purpose.
          </h2>

          <div className="mt-4 mb-0 flex items-start justify-start gap-1.5">
            <i className="block h-[3px] w-[220px] rounded-sm bg-gradient-to-r from-[#8fc4dc] to-[#487081]" />
            <b className="h-1.5 w-1.5 rounded-full bg-[#2a7fa3]" />
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:mt-6 sm:text-base">
            Hi, I'm <span className="text-[#194356]">Md. Ahad Hossain</span> —
            Results-driven Web Developer with 2+ years of professional
            experience building modern, responsive, and scalable web
            applications using React.js, Next.js, TypeScript, JavaScript, and
            Tailwind CSS. Experienced in frontend development, responsive UI
            implementation, state management, software troubleshooting, product
            support, and cross-functional collaboration.
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:mt-6 sm:text-base">
            Currently working as a{" "}
            <span className="text-[#194356]">Product Excellence Engineer</span>{" "}
            at Cubix Technology Ltd., supporting HMS/PMS products, analyzing
            software queries, collaborating with development teams, conducting
            client training, and contributing to product quality and user
            experience improvements.
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:text-base">
            Previously worked as a Junior Web Developer at Imranslab, developing
            responsive web applications and collaborating with remote teams
            using modern development and project-management tools. Strong
            understanding of the software development lifecycle, Agile
            practices, Git-based workflows, and production deployment.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 md:items-baseline">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
                rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] px-7 py-4
                text-sm font-semibold text-white shadow-lg shadow-[#2a7fa3]/20
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2a7fa3]/40
                active:translate-y-0
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a7fa3] focus-visible:ring-offset-2"
            >
              {/* Shine sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12
                  bg-gradient-to-r from-transparent via-white/25 to-transparent
                  transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative">Let's Connect</span>
              <ArrowUpRight
                aria-hidden="true"
                className="relative h-4 w-4 shrink-0 transition-transform duration-300
                  group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>

            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden
                rounded-full border border-[#2a7fa3] bg-white px-7 py-4 text-sm font-semibold text-black
                transition-all duration-300
                hover:-translate-y-0.5 hover:text-white
                active:translate-y-0
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a7fa3] focus-visible:ring-offset-2"
            >
              {/* Fill layer (fades in on hover) */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#2a7fa3] opacity-0
                  transition-opacity duration-300 group-hover:opacity-100"
              />
              {/* Shine sweep */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12
                  bg-gradient-to-r from-transparent via-white/25 to-transparent
                  transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="relative">View Work</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative isolate mx-auto max-w-xs md:max-w-lg">
            {/* soft glow behind image */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-white/5 via-transparent to-white/5 blur-2xl" />

            <TiltCard src={AboutImage} alt="Md. Ahad Hossain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
