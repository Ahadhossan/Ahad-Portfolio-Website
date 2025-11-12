/** @format */
import Skills from "../Helper/Skill/Skills";
import SkillsHero from "../Helper/Skill/SkillsHero";
import SoftSkills from "../Helper/Skill/SoftSkills";

/ @format */;

const Skill = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#101115]">
      {/* Skill hero */}
      <SkillsHero />

      {/* Skills */}
      <Skills />

      {/* SoftSkills */}
      <SoftSkills />
    </div>
  );
};

export default Skill;
