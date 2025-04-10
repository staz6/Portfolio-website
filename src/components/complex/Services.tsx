import React from 'react'
import ServiceCard from '../compound/ServiceCard'
import { useUserDetails } from '../Context/UserDetailsContext'

type Props = {}

const Services = (props: Props) => {
  const { Serivces } = useUserDetails()
  return (
    <div data-testid="services" id='Services' className='py-24 bg-[#0f0715] overflow-hidden'>
      <h2 className=' bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl  uppercase -rotate-6'>
        Services
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-[15px] sm:px-0 sm:w-4/5  mx-auto items-center mt-20 '>
        {Serivces.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Services
