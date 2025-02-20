import React from 'react'
import ServiceCard from '../compound/ServiceCard'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <h1 className=' bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        Services
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20 '>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  )
}

export default Services
