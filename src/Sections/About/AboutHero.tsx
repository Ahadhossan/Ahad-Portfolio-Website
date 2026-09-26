import React from "react";
import AboutImage from "../../assets/About.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl border-t border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-3 md:mb-8">
        <span className="h-[3px] w-8 bg-[#2a7fa3]" />
        <span className="font-space text-xs uppercase tracking-[0.25em] text-[#42464e]">
          About Me
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
        {/* Text content */}
        <div className="order-2 md:order-1">
          <h2 className="font-space text-2xl leading-snug text-[#584e4e] sm:text-3xl md:text-4xl">
            Passion fuels purpose.
          </h2>

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
            experience improvements. digital experiences.
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#8C93A0] sm:text-base">
            Previously worked as a Junior Web Developer at Imranslab, developing
            responsive web applications and collaborating with remote teams
            using modern development and project-management tools. Strong
            understanding of the software development lifecycle, Agile
            practices, Git-based workflows, and production deployment.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 items-center md:items-baseline">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2
      rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] px-5 py-2.5
      text-sm font-semibold text-white shadow-lg shadow-[#2a7fa3]/20 overflow-hidden
      transition-all duration-300
      hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2a7fa3]/40
      active:translate-y-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span
                className="absolute inset-0 -translate-x-full skew-x-12
        bg-gradient-to-r from-transparent via-white/25 to-transparent
        transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              Let's Connect
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full
      border-2 border-[#272728] px-5 py-2.5 text-sm font-medium text-[#194356]
      shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset]
      transition-all duration-300
      hover:border-[#194356] hover:bg-[#194356] hover:text-[#f4f7f8]
      active:scale-[0.97]"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-xs md:max-w-lg">
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
