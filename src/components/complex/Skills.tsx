import React from 'react'
import { useUserDetails } from '../Context/UserDetailsContext'
import SkillCard from '../compound/SkillCard'

const Skills: React.FC = () => {
  const { skillSet } = useUserDetails()
  return (
    <div className='py-24 bg-[#0f0715]' data-testid='Skills'>
      <h2 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        My Skills
      </h2>
      <div className='mt-20 px-[15px] sm:px-0 sm:w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center overflow-x-hidden'>
        {skillSet.map((skill, index) => (
          <SkillCard
            name={skill.name}
            excellency={skill.excellency}
            image={skill.image}
            index={index}
            key={index}
            total={skillSet.length}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
