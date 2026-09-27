import React from "react";
import Hero from "../../Sections/Home/Hero";
import StatsSection from "../../Sections/Home/StatsSection";
import Philosophy from "../../Sections/Home/Philosophy";
import Test from "../../Sections/Home/Test";
import Strengths from "../../Sections/Home/Strengths";

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
