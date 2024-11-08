import React from "react";
import Header from "../components/complex/Header";
import HeroSection from "../components/complex/HeroSection";
import Wrapper from "../components/shared/Wrapper";
import Aboutme from "../components/complex/Aboutme";
import Skills from "../components/complex/Skills";
import Experience from "../components/complex/Experience";

const IndexPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <Aboutme/>
      <Skills/>
      <Experience/>
    </Wrapper>
  );
};

export default IndexPage;
