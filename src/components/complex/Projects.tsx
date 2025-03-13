import React from 'react'
import Merchantra from '../../images/MerchantraFinal.png'
import WeatherApp2 from '../../images/WeatherApp2.png'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div
      className='py-24 bg-[#050709] w-full overflow-hidden'
      data-testid='Projects'
    >
      <h1 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        Projects
      </h1>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='0'
          className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 aos-init aos-animate'
        >
          <a target='_blank' href='https://agency-opal-eight.vercel.app/'>
            <img
              src={Merchantra}
              alt='project'
              loading='lazy'
              width='300'
              height='200'
              decoding='async'
              data-nimg='1'
              className='md:w-[20rem] h-full w-full md:h-[13rem] xl:h-[17rem] xl:w-full  2xl:h-[25rem]'
            />
          </a>
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='0'
          className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 aos-init aos-animate'
        >
          <a target='_blank' href='https://agency-opal-eight.vercel.app/'>
            <img
              src={WeatherApp2}
              alt='project'
              loading='lazy'
              width='300'
              height='200'
              decoding='async'
              data-nimg='1'
              className='md:w-[20rem] h-full w-full md:h-[13rem] xl:h-[17rem] xl:w-full  2xl:h-[25rem]'
            />
          </a>
        </div>
        <div
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-delay='0'
          className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 aos-init aos-animate'
        >
          <a target='_blank' href='https://agency-opal-eight.vercel.app/'>
            <img
              src={WeatherApp2}
              alt='project'
              loading='lazy'
              width='300'
              height='200'
              decoding='async'
              data-nimg='1'
              className='md:w-[20rem] h-full w-full md:h-[13rem] xl:h-[17rem] xl:w-full  2xl:h-[25rem]'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
