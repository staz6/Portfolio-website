import React from "react";
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


const IndexPage: React.FC = () => {
  const userDetails: UserDetails = useUserDetails();

  return (
    <UserDetailsProvider data={userDetails}>
      <Header />
      <HeroSection />
      <Aboutme />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Footer />
    </UserDetailsProvider>
  );
};

export default IndexPage;
