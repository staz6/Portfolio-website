import React from "react";
import Header from "../components/complex/Header";
import HeroSection from "../components/complex/HeroSection";
import Wrapper from "../components/shared/Wrapper";

const IndexPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
    </Wrapper>
  );
};

export default IndexPage;
