import React, { useEffect } from "react";
import Header from "../components/complex/Header";
import HeroSection from "../components/complex/HeroSection";
import Aboutme from "../components/complex/Aboutme";
import Skills from "../components/complex/Skills";
import Experience from "../components/complex/Experience";
import Work from "../components/complex/Work";
import Testimonials from "../components/complex/Testimonials";
import Footer from "../components/complex/Footer";
import { UserDetailsProvider } from "../components/Context/UserDetailsContext";
import { UserDetails } from "../Types/IndexType";
import { useUserDetails } from "../Queries/UserDetailQuery";
import { ThemeProvider } from "../components/Context/ThemeChangerContext";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexPage: React.FC = () => {
  const userDetails: UserDetails = useUserDetails();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <UserDetailsProvider data={userDetails}>
      <ThemeProvider>
        <Header />
        <HeroSection />
        <Aboutme />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Footer />
      </ThemeProvider >
    </UserDetailsProvider>
  );
};

export default IndexPage;
