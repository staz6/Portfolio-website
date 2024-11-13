import React from "react";
import Header from "../components/complex/Header";
import HeroSection from "../components/complex/HeroSection";
import Wrapper from "../components/shared/Wrapper";
import Aboutme from "../components/complex/Aboutme";
import Skills from "../components/complex/Skills";
import Experience from "../components/complex/Experience";
import Work from "../components/complex/Work";
import Testimonials from "../components/complex/Testimonials";
import Footer from "../components/complex/Footer";

const IndexPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Aboutme/>
      <Skills/>
      <Experience/>
      <Work/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default IndexPage;
