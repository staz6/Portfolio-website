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
    <div data-testid="Experience" className='py-24 bg-[#050709] w-full'>
      <motion.div variants={textVariant()}>
        <p className='text-center '>What I have done so far</p>
        <h2 className='text-center'>Work Experience.</h2>
      </motion.div>

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
  )
}

export default Experience
