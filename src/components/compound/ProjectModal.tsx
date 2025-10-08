import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCardType } from '../../Types/IndexType'

interface ProjectModalProps {
  project: ProjectCardType | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null

  const images = project.ProjectImages && project.ProjectImages.length > 0
    ? project.ProjectImages
    : [project.ProjectImage]

  // Manual cleanup function
  const cleanupBodyScroll = () => {
    document.body.classList.remove('modal-open')
    document.body.style.top = ''
    document.body.removeAttribute('data-scroll-y')
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      
      // Add class to body to prevent scrolling
      document.body.classList.add('modal-open')
      document.body.style.top = `-${scrollY}px`
      document.body.dataset.scrollY = scrollY.toString()
    } else {
      // Ensure class is removed when modal is closed
      cleanupBodyScroll()
      
      // Restore scroll position
      const savedScrollY = parseInt(document.body.dataset.scrollY || '0')
      if (savedScrollY > 0) {
        setTimeout(() => {
          window.scrollTo(0, savedScrollY)
        }, 0)
      }
    }
    
    // Cleanup function to ensure class is always removed
    return () => {
      cleanupBodyScroll()
    }
  }, [isOpen])

  // Handle close with manual cleanup
  const handleClose = () => {
    cleanupBodyScroll()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
            style={{
              backdropFilter: 'blur(10px) saturate(1.2) contrast(1.2)',
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-customDarkPurple rounded-xl shadow-2xl w-full max-h-[95vh] overflow-y-auto lg:overflow-hidden border border-gray-800 lg:flex lg:flex-col"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 'min(1400px, 95vw)',
                minWidth: '320px',
                minHeight: 'min(720px, 90vh)',
                maxHeight: 'calc(100vh - 16px)',
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 lg:p-8 border-b border-gray-800 flex-shrink-0">
                <div className="flex-1">
                  {project.ProjectUrl ? (
                    <a
                      href={project.ProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold text-white hover:text-customYellow transition-colors"
                    >
                      {project.ProjectName}
                    </a>
                  ) : (
                    <h2 className="text-2xl font-bold text-white">
                      {project.ProjectName}
                    </h2>
                  )}
                  <p className="text-lg text-customYellow font-medium mt-1">{project.myRole}</p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row lg:flex-1 lg:min-h-0">
                {/* Left side - Text content (lg-4) */}
                <div className="lg:w-1/3 p-4 lg:p-8 lg:flex-shrink-0 lg:overflow-y-auto lg:max-h-full">
                  <div className="space-y-6 lg:space-y-8">
                    {/* Project Description */}
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-4">Project Description</h3>
                      <p className="text-gray-300 leading-relaxed">{project.ProjectDescription}</p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-3">
                        {project.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-customPurple text-white px-4 py-2 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Link */}
                    {project.ProjectUrl && (
                      <div className="pt-4">
                        <a
                          href={project.ProjectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-customPurple text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Project
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side - Image gallery (lg-8) */}
                <div className="lg:w-2/3 p-4 lg:p-8 lg:flex-1 lg:min-h-0">
                  <div className="lg:h-full lg:overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                    <div className="space-y-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                          <picture>
                            <source
                              srcSet={`${image.asset.url}?w=800&h=600&fit=crop&auto=format`}
                              type="image/webp"
                            />
                            <source
                              srcSet={`${image.asset.url}?w=800&h=600&fit=crop`}
                              type="image/jpeg"
                            />
                            <img
                              src={image.asset.url}
                              alt={`${project.ProjectName} - Image ${index + 1}`}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal