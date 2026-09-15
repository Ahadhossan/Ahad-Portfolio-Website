import React from "react";
import Hero from "../../Sections/Hero";
import StatsSection from "../../Sections/StatsSection";
import Philosophy from "../../Sections/Philosophy";
import Test from "../../Sections/Test";

const Home = () => {
  return (
    <div>
      <Hero />
      <Test />
      <StatsSection />
      <Philosophy />
    </div>
  );
};

export default Home;
