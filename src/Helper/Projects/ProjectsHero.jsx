import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ProjectsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section className="min-h-[400px] pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse items-center justify-between max-w-5xl gap-12 mx-auto md:flex-row">
        {/* Left Column (Text Content) */}
        <div
          className="w-full space-y-6 text-center md:w-1/2 md:text-left"
          data-aos="fade-up"
        >
          <h2 className="leading-tight text-2xl sm:text-3xl md:text-4xl text-black dark:text-white motion-safe:animate-hero-text-reveal">
            Projects.
          </h2>
          <p className="leading-tight sm:text-[16px] md:text-[18px] text-gray-600 dark:text-slate-500 mt-3 motion-safe:animate-hero-text-reveal">
            <span>
              This is a selection of projects I’ve worked on—ranging from
              full-stack systems and infrastructure to AI-focused pipelines.
              Each one reflects how I think, what I care about, and the kind of
              engineer I’m becoming.
            </span>
            <a
              className="text-secondary underlined ml-2 inline-block hover:text-team-current focus:text-team-current"
              href="#"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <title>Get my blog as RSS</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.33465 15.52C6.23018 15.52 5.33459 16.4153 5.33459 17.5199C5.33459 18.6244 6.23018 19.5201 7.33465 19.5201C8.43912 19.5201 9.33471 18.6244 9.33471 17.5199C9.33471 16.4153 8.43912 15.52 7.33465 15.52Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33472 10.52V13.0919C8.87972 13.0919 11.7639 15.9753 11.7639 19.5202H14.3347C14.3347 14.5577 10.2973 10.52 5.33472 10.52Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33472 5.52002V8.18702C11.5846 8.18702 16.6688 13.2701 16.6688 19.52H19.3347C19.3347 11.8001 13.0546 5.52002 5.33472 5.52002Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </p>
        </div>

        {/* Right Column (Image) */}
        <div
          className="flex justify-center w-full md:w-1/2 md:justify-start"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/src/assets/3062524-removebg-preview.png"
            alt="projects"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
