import React from 'react'
import Wrapper from '../shared/Wrapper'
import { LuGithub } from 'react-icons/lu'
import { FiLinkedin } from 'react-icons/fi'
import { useUserDetails } from '../Context/UserDetailsContext'

const Footer: React.FC = () => {
  const { githubLink, linkedinLink, FooterText } = useUserDetails()

  return (
    <div className='bg-[#050709]' data-testid='Footer'>
      <h1 data-aos='fade-right ' className='text-gray-300 text-center pt-10'>
      You may also find me on these platforms!
      </h1>
      <div
        data-testid='SocialLinks'
        className='flex justify-center  mt-3 gap-5'
      >
        <a
          
          className='text-gray-300 hover:text-customYellow'
          href={githubLink}
        >
          <LuGithub size={24} />
        </a>
        <a
          
          className='text-gray-300 hover:text-customYellow'
          href={linkedinLink}
        >
          <FiLinkedin size={24} />
        </a>
      </div>

      <div className='py-4 '>
        <p
          data-testid='FooterHeading'
          className='text-center font-inter  bg-linearGradientHeading to-white bg-clip-text text-transparent'
        >
          {FooterText}
        </p>
      </div>
    </div>
  )
}

export default Footer
