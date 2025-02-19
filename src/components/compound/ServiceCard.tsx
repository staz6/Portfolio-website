import React from 'react'
import Tilt from 'react-parallax-tilt'

const ServiceCard: React.FC = () => {
  return (
    <div
      data-aos='fade-left'
      data-aos-anchor-placement='top-center'
      data-aos-delay='0'
    >
      <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced] will-change-transform transition-[transform] duration-[400ms] ease-[cubic-bezier(0.03,0.98,0.52,0.99)] perspective-[1000px] scale-100'>
        <img
          src='https://devportfoliowebsite.vercel.app/_next/image?url=%2Fimages%2Fs1.png&w=64&q=75'
          alt=''
        />
        <h1 className='mt-4 text-lg font-bold text-gray-100'>
          Web Applications
        </h1>
        <p className='mt-3 text-sm text-white text-opacity-80'>
          Tailored web apps built with the latest technologies.
        </p>
      </Tilt>
    </div>
  )
}

export default ServiceCard
