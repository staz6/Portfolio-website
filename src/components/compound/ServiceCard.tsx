import React from 'react'
import Tilt from 'react-parallax-tilt'

export type ServiceCardType = {
  ServiceName: string
  ServiceDescription: string
  ServiceImage: {
    asset: {
      url: string
    }
  }
}

const ServiceCard: React.FC<{ service: ServiceCardType; index: number }> = ({
  service,
  index
}) => {
  return (
    <div
      data-aos='fade-left'
      data-aos-anchor-placement='top-center'
      data-aos-delay={index * 100}
      data-aos-offset='-200'
      data-testid='service-card'
    >
      <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814ced] will-change-transform transition-[transform] duration-[400ms] ease-[cubic-bezier(0.03,0.98,0.52,0.99)] perspective-[1000px] scale-100'>
        <img src={service.ServiceImage.asset.url} alt='' />
        <h1 className='mt-4 text-lg font-bold text-gray-100'>
          {service.ServiceName}
        </h1>
        <p className='mt-3 text-sm text-white text-opacity-80'>
          {service.ServiceDescription}
        </p>
      </Tilt>
    </div>
  )
}

export default ServiceCard
