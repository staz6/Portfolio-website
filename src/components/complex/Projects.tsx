import React from 'react'
import ProjectCard from '../compound/ProjectCard'
import { useUserDetails } from '../Context/UserDetailsContext'

const Projects: React.FC = () => {
  const { Project } = useUserDetails()
  return (
    <div
      className='py-24 bg-[#050709] w-full overflow-hidden'
      data-testid='Projects'
      id='Projects'
    >
      <h2 className='bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6'>
        Projects
      </h2>
      <div className='px-[15px] sm:px-0 sm:w-4/5 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {Project.map((project, index) => (
          <ProjectCard
            index={index}
            key={index}
            ProjectName={project.ProjectName}
            ProjectDescription={project.ProjectDescription}
            ProjectUrl={project.ProjectUrl}
            ProjectImage={project.ProjectImage}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
