import React, { useState } from 'react'
import ProjectCard from '../compound/ProjectCard'
import ProjectModal from '../compound/ProjectModal'
import { useUserDetails } from '../Context/UserDetailsContext'
import { ProjectCardType } from '../../Types/IndexType'

const Projects: React.FC = () => {
  const { Project } = useUserDetails()
  const [selectedProject, setSelectedProject] = useState<ProjectCardType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (project: ProjectCardType) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <div
        className='py-24 bg-[#050709] w-full overflow-hidden'
        data-testid='Projects'
        id='Projects'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h2 className='bg-customPurple w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6 mb-4'>
              Projects
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Explore some of my recent work and the technologies I've used to bring ideas to life
            </p>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Project.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                ProjectName={project.ProjectName}
                ProjectDescription={project.ProjectDescription}
                ProjectUrl={project.ProjectUrl}
                myRole={project.myRole || 'Full Stack Developer'} // Fallback for existing data
                ProjectImage={project.ProjectImage}
                ProjectImages={project.ProjectImages}
                skills={project.skills}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default Projects
