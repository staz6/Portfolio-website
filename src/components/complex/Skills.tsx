import React from 'react'
import Wrapper from '../shared/Wrapper'
import { useUserDetails } from '../Context/UserDetailsContext'
import SanityImage from 'gatsby-plugin-sanity-image'
import { motion } from 'framer-motion'
import SkillCard from '../compound/SkillCard'

const Skills: React.FC = () => {
  const { skillSet } = useUserDetails()
  return (
    <div className='py-24 bg-[#0f0715]' data-testid='Skills'>
      <h1 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        My Skills
      </h1>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
        {skillSet.map((skill, index) => (
          <SkillCard
            name={skill.name}
            excellency={skill.excellency}
            image={skill.image}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
