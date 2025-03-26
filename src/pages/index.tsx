import React, { useEffect } from 'react'
import Header from '../components/complex/Header'
import HeroSection from '../components/complex/HeroSection'
import Aboutme from '../components/complex/Aboutme'
import Skills from '../components/complex/Skills'
import Experience from '../components/complex/Experience'
import Testimonials from '../components/complex/Testimonials'
import Footer from '../components/complex/Footer'
import { UserDetailsProvider } from '../components/Context/UserDetailsContext'
import { UserDetails } from '../Types/IndexType'
import { useUserDetails } from '../Queries/UserDetailQuery'
import { ThemeProvider } from '../components/Context/ThemeChangerContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'
import Services from '../components/complex/Services'
import Projects from '../components/complex/Projects'
import Hireme from '../components/complex/Hireme'
import Scroll_To_Top from '../components/complex/Scroll_To_Top'
import CustomCursor from '../components/complex/CustomCursor'
const IndexPage: React.FC = () => {
  const userDetails: UserDetails = useUserDetails()
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  
    document.documentElement.classList.add("custom-scrollbar");
    return () => {
      document.documentElement.classList.remove("custom-scrollbar"); 
    };
  }, []);
  

  return (
    <>
      <UserDetailsProvider data={userDetails}>
        <Helmet>
          <title>My Portfolio</title>
          <meta name='description' content={userDetails.MetaDescription} />
          <meta name='keywords' content={userDetails.MetaKeywords} />
          <link rel='canonical' href={userDetails.CanonicalLink} />
        </Helmet>

        <ThemeProvider>
          <Header />
          <CustomCursor />
          <HeroSection />
          <Aboutme />
          <Services />
          <Projects />
          <Skills />
          <Experience />
          <Testimonials />
          <Hireme />
          <Footer />
          <Scroll_To_Top />
        </ThemeProvider>
      </UserDetailsProvider>
    </>
  )
}

export default IndexPage
