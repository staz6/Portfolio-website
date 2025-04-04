import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCardType } from '../../Types/IndexType'
import Services from '../complex/Services'

const ProjectCard: React.FC<ProjectCardType> = ({
  ProjectName,
  ProjectDescription,
  ProjectUrl,
  ProjectImage,
  skills,
  index
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      data-testid='ProjectCard'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className='relative bg-blue-950 p-6 rounded-lg transition-all duration-300  overflow-hidden'
        data-aos='fade-up'
        data-aos-anchor-placement='top-center'
        data-aos-delay={index * 250}
      >
        <div className='relative overflow-hidden'>
          <motion.a
            target='_blank'
            rel='noopener noreferrer'
            href={ProjectUrl}
            initial={{ y: '-100%', opacity: 0 }}
            animate={hover ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='absolute cursor-pointer inset-0 bg-black bg-opacity-80 backdrop-blur-lg flex flex-col items-center justify-center text-white p-4 '
          >
            <h3 className='text-lg font-semibold'>{ProjectName}</h3>
            <p className='text-sm text-center'>{ProjectDescription}</p>
            <div className='flex gap-2 mt-3 flex-wrap justify-center'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='bg-customPurple text-white p-1 text-sm xl:p-2 rounded-lg'
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.a>
          <a target='_blank' rel='noopener noreferrer' href={ProjectUrl}>
            <img
              src={ProjectImage.asset.url}
              alt='project'
              loading='lazy'
              width='300'
              height='200'
              decoding='async'
              className='md:w-[20rem] h-64  sm:h-full w-full md:h-[13rem] xl:h-[17rem] xl:w-full 2xl:h-[25rem] '
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
