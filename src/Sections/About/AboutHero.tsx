// import React from "react";
// import AboutImage from "../../assets/About.jpeg";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="mx-auto max-w-6xl border-t border-white/10 px-6 py-20 md:px-10 md:py-28"
//     >
//       <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
//         <div className="order-2 md:order-1">
//           <h2 className="font-space text-2xl text-[#EDEDED] md:text-3xl">
//             Passion fuels purpose.
//           </h2>
//           <p className="mt-6 max-w-md text-base leading-relaxed text-[#8C93A0]">
//             Hi, I'm Md. Ahad Hossain — a web developer and frontend designer
//             based in Dhaka, Bangladesh. With over 2 years of hands-on experience
//             in web development and digital marketing, I specialize in building
//             functional, user-centered digital experiences.
//           </p>
//           <p className="mt-4 max-w-md text-base leading-relaxed text-[#8C93A0]">
//             Great design is more than aesthetics — it's about solving real
//             problems and making things feel obvious to use. I've worked with
//             remote teams and forward-thinking companies to ship software, run
//             digital marketing campaigns, and collaborate across disciplines.
//           </p>

//           <ul className="mt-8 flex flex-wrap gap-2">
//             {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
//               (tag) => (
//                 <li
//                   key={tag}
//                   className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#8C93A0]"
//                 >
//                   {tag}
//                 </li>
//               ),
//             )}
//           </ul>
//         </div>

//         <div className="order-1 md:order-2">
//           <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#151B27]">
//             <img
//               src={AboutImage}
//               alt="Md. Ahad Hossain"
//               className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import AboutImage from "../../assets/About.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl border-t border-white/10 px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20"
    >
      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-3 md:mb-8">
        <span className="h-px w-8 bg-white/20" />
        <span className="font-space text-xs uppercase tracking-[0.25em] text-[#8C93A0]">
          About Me
        </span>
      </div>

      <div className="grid grid-cols-1 items- gap-10 md:grid-cols-2 md:gap-16">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <h2 className="font-space text-2xl leading-snug text-[#EDEDED] sm:text-3xl md:text-4xl">
            Passion fuels purpose.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:mt-6 sm:text-base">
            Hi, I'm <span className="text-[#EDEDED]">Md. Ahad Hossain</span> — a
            web developer and frontend designer based in Dhaka, Bangladesh. With
            over 2 years of hands-on experience in web development and digital
            marketing, I specialize in building functional, user-centered
            digital experiences.
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:text-base">
            Great design is more than aesthetics — it's about solving real
            problems and making things feel obvious to use. I've worked with
            remote teams and forward-thinking companies to ship software, run
            digital marketing campaigns, and collaborate across disciplines.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <a
              href="#contact"
              className="rounded-full bg-[#EDEDED] px-5 py-2.5 text-sm font-medium text-[#0B0F17] transition-transform duration-300 hover:scale-[1.03]"
            >
              Let's Connect
            </a>

            <a
              href="#projects"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[#EDEDED] transition-colors duration-300 hover:border-white/30"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-xs md:max-w-none">
            {/* soft glow behind image */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-white/5 via-transparent to-white/5 blur-2xl" />

            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#151B27] ring-1 ring-white/10">
              <img
                src={AboutImage}
                alt="Md. Ahad Hossain"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
