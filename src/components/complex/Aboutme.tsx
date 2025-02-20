import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaCheck } from 'react-icons/fa'
import { useUserDetails } from '../Context/UserDetailsContext'

const AboutMe: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  const {
    AboutmeHeading,
    AboutmeDescription,
    AboutmeCheckmark,
    yearsExperience,
    completedProjects,
    websiteLaunched,
    satisfiedCustomers
  } = useUserDetails()
  console.log(AboutmeCheckmark)
  return (
    <div id='about' data-testid="Aboutme" className='pt-16 pb-16 bg-[#050709]'>
      <h1 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        About Me
      </h1>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        <div data-aos='fade-left'>
          <h1 className='bg-linearGradientHeading to-white bg-clip-text text-transparent text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
            {AboutmeHeading}
          </h1>
          <p className='mt-6 text-base text-gray-500'>{AboutmeDescription}</p>
          <div className='mt-8'>
            {AboutmeCheckmark.map(
              ({ Text, BackgroundColorInTailwind }, index) => (
                <div key={index} className='flex items-center space-x-2 mb-6'>
                  <div
                    className={`w-7 h-7 ${BackgroundColorInTailwind} flex items-center justify-center`}
                  >
                    <FaCheck className='text-white' />
                  </div>
                  <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                    {Text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div
          data-aos='zoom-in'
          data-aos-delay='150'
          className='grid grid-cols-2 gap-16 items-center lg:mx-auto'
        >
          {[
            {
              img: 'https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Fcustomer.png&w=96&q=75',
              value: `${satisfiedCustomers}+`,
              label: 'Satisfied Customers'
            },
            {
              img: 'https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Fexperience.png&w=96&q=75',
              value: `${yearsExperience}+`,
              label: 'Years Experience'
            },
            {
              img: 'https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Fexperience.png&w=96&q=75',
              value: `${completedProjects}+`,
              label: 'Completed Projects'
            },
            {
              img: 'https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Frocket.png&w=96&q=75',
              value: `${websiteLaunched}+`,
              label: 'Website Launched'
            }
          ].map(({ img, value, label }, index) => (
            <div key={index}>
              <img className='m-auto' src={img} alt={label} />
              <p className='mt-3 font-bold text-xl text-white text-center'>
                {value}
              </p>
              <p className='text-base sm:text-lg text-gray-400 text-center'>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
