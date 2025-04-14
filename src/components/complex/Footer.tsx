import React, { useState } from 'react'
import { LuGithub } from 'react-icons/lu'
import { FiLinkedin } from 'react-icons/fi'
import { useUserDetails } from '../Context/UserDetailsContext'
import useInView from '../hooks/useInView'

const Footer: React.FC = () => {
  const { githubLink, linkedinLink, FooterText } = useUserDetails()
  const { ref, isInView } = useInView<HTMLHeadingElement>(0.5)  

  return (
    <div className='bg-[#0f0715] overflow-x-hidden' data-testid='Footer'>
      <h2
        ref={ref} 
        className={`text-gray-300 text-center pt-10 
          ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          transition-all duration-1000 ease-in-out`}
      >
        You may also find me on these platforms!
      </h2>
      <div
        data-testid='SocialLinks'
        className='flex justify-center mt-3 gap-5'
      >
        <a
          className='text-gray-300 hover:text-customYellow'
          href={githubLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <LuGithub size={24} />
        </a>
        <a
          className='text-gray-300 hover:text-customYellow'
          href={linkedinLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiLinkedin size={24} />
        </a>
      </div>

      <div className='py-4'>
        <p
          data-testid='FooterHeading'
          className='text-center font-inter bg-linearGradientHeading to-white bg-clip-text text-transparent'
        >
          {FooterText}
        </p>
      </div>
    </div>
  )
}

export default Footer
