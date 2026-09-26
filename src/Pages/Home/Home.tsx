import React from "react";
import Hero from "../../Sections/Hero";
import StatsSection from "../../Sections/StatsSection";
import Philosophy from "../../Sections/Philosophy";
import Test from "../../Sections/Test";
import Strengths from "../../Sections/STRENGTHS";

const Home = () => {
  return (
    <div>
      <Hero />
      <Test />
      <StatsSection />
      <Strengths />
      <Philosophy />
    </div>
  );
};

export default Home;
