/** @format */

import HeroSection from "../Helper/Home/HeroSection";
import LetsTalk from "../Helper/Home/LetsTalk";
import Philosophy from "../Helper/Home/Philosophy";
import WhereHeaded from "../Helper/Home/WhereHeaded";
import ScrollToTopButton from "../Helper/ScrollToTopButton";

const Home = () => {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#101115]">
      {/* hero Section */}
      <HeroSection />

      {/* project completed, upcoming project, years of experience, etc. */}
      <WhereHeaded />

      {/*My Philosophy */}
      <Philosophy />

      {/* Let’s Work Together! */}
      <LetsTalk />

      {/* ScrollToTopButton */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
