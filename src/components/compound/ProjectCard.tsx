import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCardType } from '../../Types/IndexType'
import useInView from '../hooks/useInView'

interface ProjectCardProps extends ProjectCardType {
  onCardClick: (project: ProjectCardType) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  ProjectName,
  ProjectDescription,
  ProjectUrl,
  myRole,
  ProjectImage,
  ProjectImages,
  skills,
  index,
  onCardClick
}) => {
  const [hover, setHover] = useState(false)
  const { ref, isInView } = useInView<HTMLDivElement>(0.5)
  const delay = index * 0.2

  const handleCardClick = () => {
    onCardClick({
      ProjectName,
      ProjectDescription,
      ProjectUrl,
      myRole,
      ProjectImage,
      ProjectImages,
      skills,
      index
    })
  }

  return (
    <motion.div
      ref={ref}
      data-testid='ProjectCard'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className='relative bg-customDarkPurple rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-800 hover:border-customPurple'
    >
      {/* Image Section */}
      <div className='relative h-48 overflow-hidden'>
        <picture>
          <source
            srcSet={`${ProjectImage.asset.url}?w=400&h=300&fit=crop&auto=format`}
            type='image/webp'
          />
          <source
            srcSet={`${ProjectImage.asset.url}?w=400&h=300&fit=crop`}
            type='image/jpeg'
          />
          <img
            src={ProjectImage.asset.url}
            alt={ProjectName}
            loading='lazy'
            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
          />
        </picture>
        
        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center'
        >
          <div className='text-white text-center'>
            <svg className='w-8 h-8 mx-auto mb-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
            </svg>
            <p className='text-sm font-medium'>View Details</p>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className='p-6'>
        {/* Title */}
        <div className='mb-3'>
          <h3 className='text-xl font-bold text-white line-clamp-1'>
            {ProjectName}
          </h3>
          <p className='text-sm text-customYellow font-medium mt-1'>{myRole}</p>
        </div>

        {/* Description */}
        <p className='text-gray-300 text-sm mb-4 line-clamp-1 leading-relaxed'>
          {ProjectDescription}
        </p>

        {/* Skills */}
        <div className='flex flex-wrap gap-2'>
          {skills.slice(0, 4).map((skill, i) => (
            <span
              key={i}
              className='bg-customPurple text-white px-2 py-1 rounded-md text-xs font-medium'
            >
              {skill}
            </span>
          ))}
          {skills.length > 4 && (
            <span className='bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs font-medium'>
              +{skills.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
