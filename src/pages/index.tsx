import React from "react";
import Header from "../components/complex/Header";
import HeroSection from "../components/complex/HeroSection";
import Wrapper from "../components/shared/Wrapper";
import Aboutme from "../components/complex/Aboutme";
import Skills from "../components/complex/Skills";

const IndexPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <Aboutme/>
      <Skills/>
    </Wrapper>
  );
};

export default IndexPage;
