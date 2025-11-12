/ @format */;
import ScrollToTopButton from "../Helper/ScrollToTopButton";
import AboutHeroSection from "../Helper/About/AboutHeroSction";
import KeyContribution from "../Helper/About/KeyContribution";
import WorkExperience from "../Helper/About/WorkExperience";
import Internship from "../Helper/About/Internship";
import EducationTimeline from "../Helper/About/EducationTimeline";

const About = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#101115]">
      {/* hero Section */}
      <AboutHeroSection />

      {/* Key Contributions */}
      <KeyContribution />

      {/* Experience */}
      <WorkExperience />

      {/* Internship */}
      <Internship />

      {/* Education */}
      <EducationTimeline />
      {/* ScrollToTopButton */}
      <ScrollToTopButton />
    </div>
  );
};

export default About;
