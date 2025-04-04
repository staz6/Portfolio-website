import React from 'react'
import { useUserDetails } from '../Context/UserDetailsContext'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { ExperienceCard } from '../compound/ExperienceCard'

const Experience: React.FC = () => {
  const { Experience } = useUserDetails()
  return (
    <div data-testid='Experience' className='py-24 bg-[#050709] w-full'>
      <div className='w-4/5 mx-auto'>
        <div data-aos='fade-up' data-aos-offset='200'>
          <p className='text-center "sm:text-[18px] text-lg text-secondary uppercase tracking-wide '>
            What I have done so far
          </p>
          <h2 className='text-center text-white  font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Work Experience.
          </h2>
        </div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline >
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
