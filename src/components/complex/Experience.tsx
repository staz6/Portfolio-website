import React, { useEffect, useRef, useState } from 'react'
import { useUserDetails } from '../Context/UserDetailsContext'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ExperienceCard } from '../compound/ExperienceCard'

const Experience: React.FC = () => {
  const { Experience } = useUserDetails()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <div data-testid='Experience' className='py-24 bg-[#050709] w-full overflow-x-hidden'>
      <div className='px-[15px] sm:px-0 sm:w-4/5 mx-auto'>
        <div
          ref={sectionRef}
          className={`transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className='text-center sm:text-[18px] text-lg text-secondary uppercase tracking-wide'>
            What I have done so far
          </p>
          <h2 className='text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Work Experience.
          </h2>
        </div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {Experience.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                CompanyName={experience.CompanyName}
                PositionName={experience.PositionName}
                date={experience.date}
                points={experience.points}
                icon={experience.icon}
                index={index}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default Experience
