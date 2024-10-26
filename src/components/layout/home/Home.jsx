import React from "react";
import HeroSection from "./hero-section/HeroSection.jsx";
import HomePartTwo from "./home-part-two/HomePartTwo.jsx";
import HomePartThree from "./home-part-three/HomePartThree.jsx";
import HomePartFour from "./home-part-four/HomePartFour.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomePartTwo />
      <HomePartThree />
      <HomePartFour />
    </>
  );
};

export default Home;
