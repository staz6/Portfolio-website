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
    AOS.init({ duration: 500, once: true })

    document.documentElement.classList.add('custom-scrollbar')
    return () => {
      document.documentElement.classList.remove('custom-scrollbar')
    }
  }, [])

  return (
    <>
      <UserDetailsProvider data={userDetails}>
        <Helmet>
          <title>
            Muhammad Aahad | Full Stack JavaScript Developer – React, Node.js,
            Next.js
          </title>
          <link rel="icon" href="logo/TabFaviconv5.png" />
          <meta
            name='title'
            content='Muhammad Aahad | Full Stack JavaScript Developer – React, Node.js, Next.js'
          />
          <meta
            name='description'
            content='Hire Muhammad Aahad, a Full Stack JavaScript Developer with 4+ years of experience working with brands like Toyota and Deloitte. Specializes in React, Node.js, Next.js, and SEO-friendly apps.'
          />
          <meta
            name='keywords'
            content='Full Stack Developer, JavaScript Developer, React Developer, Next.js Developer, Node.js Developer, NestJS, SEO Developer, Web Developer Portfolio, Freelance Developer, Hire React Developer, Toyota Developer, Deloitte Developer, Web Performance Optimization, CI/CD Automation'
          />
          <meta name='author' content='Muhammad Aahad' />
          <meta name='robots' content='index, follow' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <script type='application/ld+json'>
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Muhammad Aahad',
              url: 'https://maahadportfolio.netlify.app/',
              sameAs: [
                'www.linkedin.com/in/muhammad-aahad-568aaa179',
                'https://github.com/staz6'
              ],
              jobTitle: 'Full Stack JavaScript Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance / Remote'
              },
              knowsAbout: [
                'React',
                'Next.js',
                'Node.js',
                'NestJS',
                'AEM',
                'JavaScript',
                'AWS',
                'SEO',
                'Performance Optimization',
                'CI/CD',
                'JavaScript'
              ]
            })}
          </script>
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
