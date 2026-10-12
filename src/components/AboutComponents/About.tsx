import React from "react";
import AboutHero from "../../section/About/AboutHero";
import Education from "../../section/About/Education";
import LetsTalk from "../../common/LetsTalk";

const About: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <Education />
      <LetsTalk />
    </div>
  );
};

export default About;
