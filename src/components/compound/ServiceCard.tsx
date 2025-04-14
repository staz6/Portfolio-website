import React from 'react'
import Tilt from 'react-parallax-tilt'
import useInView from '../hooks/useInView'

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
  const { ref, isInView } = useInView<HTMLDivElement>(0.5)
  const delay = `${index * 80}ms` 

  return (
    <div
      ref={ref}
      data-testid="service-card"
      style={{
        transitionDelay: isInView ? delay : '0ms', 
      }}
      className={`${
        isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
      } transition-all duration-700 ease-out`}
    >
      <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced] will-change-transform transition-[transform] duration-[400ms] ease-[cubic-bezier(0.03,0.98,0.52,0.99)] perspective-[1000px] scale-100">
        <img src={service.ServiceImage.asset.url} alt={service.ServiceName} />
        <h3 className="mt-4 text-lg font-bold text-gray-100">
          {service.ServiceName}
        </h3>
        <p className="mt-3 text-sm text-white text-opacity-80">
          {service.ServiceDescription}
        </p>
      </Tilt>
    </div>
  )
}

export default ServiceCard
