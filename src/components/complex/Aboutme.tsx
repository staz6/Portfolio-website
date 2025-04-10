import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaCheck } from 'react-icons/fa'
import { useUserDetails } from '../Context/UserDetailsContext'

const AboutMe: React.FC = () => {
  const {
    AboutmeHeading,
    AboutmeDescription,
    AboutmeCheckmark,
    yearsExperience,
    completedProjects,
    websiteLaunched,
    satisfiedCustomers
  } = useUserDetails()
  const tailwindColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500'
  ]
  const getUniqueColors = (count: number) => {
    const shuffled = [...tailwindColors].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const uniqueColors = getUniqueColors(AboutmeCheckmark.length)
  return (
    <div
      id='about'
      data-testid='Aboutme'
      className='py-24 bg-[#050709] w-full overflow-hidden'
      
    >
      <h2 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        About Me
      </h2>
      <div className='px-[15px] sm:px-0 sm:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        <div data-aos='fade-left' data-aos-offset='200'>
          <h3 className='bg-linearGradientHeading to-white bg-clip-text text-transparent text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
            {AboutmeHeading}
          </h3>
          <p className='mt-6 text-base text-gray-500'>{AboutmeDescription}</p>
          <div className='mt-8'>
            {AboutmeCheckmark.map(({ Text }, index) => {
              const containerClass = `w-7 h-7 flex items-center justify-center rounded-full ${uniqueColors[index]}`

              return (
                <div key={index} className='flex items-center space-x-2 mb-6'>
                  <div className={containerClass}>
                    <FaCheck className='text-white' />
                  </div>
                  <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                    {Text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div
          data-aos='zoom-in'
          data-aos-delay='150'
          data-aos-offset='200'
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
