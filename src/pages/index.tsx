import React from "react";
import Header from "../components/complex/Header";
import HeroSection from "../components/complex/HeroSection";
import Wrapper from "../components/shared/Wrapper";
import Aboutme from "../components/complex/Aboutme";

const IndexPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <Aboutme/>
    </Wrapper>
  );
};

export default IndexPage;
