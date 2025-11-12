/** @format */

import FinishedProject from "../Helper/Projects/FinishedProject";
import ProjectsHero from "../Helper/Projects/ProjectsHero";
// import WebsiteRequestForm from "../Helper/Projects/WebsiteRequestForm";

const Projects = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#101115]">
      {/* hero Section */}
      <ProjectsHero />

      {/* <div className="h-40 lg:h-48"></div> */}

      {/* Projects */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-[10vw] py-8 sm:py-12">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-black dark:text-white text-center mb-10 tracking-tight">
          Projects
        </h2>

        <div className="space-y-16">
          {/* Finished & Takeaways */}
          <div>
            <FinishedProject />
          </div>

          {/* <WebsiteRequestForm /> */}
        </div>
      </section>
    </div>
  );
};

export default Projects;

