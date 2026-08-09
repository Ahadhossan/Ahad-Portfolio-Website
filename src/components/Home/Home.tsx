import React from "react";
import Hero from "../../Pages/Hero";
import StatsSection from "../../Pages/StatsSection";
import Philosophy from "../../Pages/Philosophy";
import Test from "../../Pages/Test";

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
