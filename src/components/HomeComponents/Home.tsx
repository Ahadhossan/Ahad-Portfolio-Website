import React from "react";
import Hero from "../../section/Home/Hero";
import StatsSection from "../../section/Home/StatsSection";
import Philosophy from "../../section/Home/Philosophy";
import Strengths from "../../section/Home/Strengths";
import Herobottom from "../../section/Home/Herobottom";

const Home = () => {
  return (
    <div>
      <Hero />
      <Herobottom />
      <StatsSection />
      <Strengths />
      <Philosophy />
    </div>
  );
};

export default Home;
