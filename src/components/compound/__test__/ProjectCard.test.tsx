import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectCard from '../ProjectCard'
import ProjectModal from '../ProjectModal'
import { ProjectCardType } from '../../../Types/IndexType'

const mockProject: ProjectCardType = {
  ProjectName: 'Test Project',
  ProjectDescription: 'This is a test project description that should be displayed in the card.',
  ProjectUrl: 'https://example.com',
  myRole: 'Full Stack Developer',
  skills: ['React', 'Node.js', 'TypeScript'],
  ProjectImage: {
    asset: {
      url: 'https://example.com/image.jpg'
    }
  },
  ProjectImages: [
    {
      asset: {
        url: 'https://example.com/image1.jpg'
      }
    },
    {
      asset: {
        url: 'https://example.com/image2.jpg'
      }
    }
  ],
  index: 0
}

describe('ProjectCard', () => {
  const mockOnCardClick = jest.fn()

  beforeEach(() => {
    mockOnCardClick.mockClear()
  })

  it('renders project information correctly', () => {
    render(<ProjectCard {...mockProject} onCardClick={mockOnCardClick} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
    expect(screen.getByText(/This is a test project description/)).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('calls onCardClick when card is clicked', () => {
    render(<ProjectCard {...mockProject} onCardClick={mockOnCardClick} />)
    
    fireEvent.click(screen.getByTestId('ProjectCard'))
    
    expect(mockOnCardClick).toHaveBeenCalledWith(mockProject)
  })

  it('renders external link when ProjectUrl is provided', () => {
    render(<ProjectCard {...mockProject} onCardClick={mockOnCardClick} />)
    
    const link = screen.getByRole('link', { name: 'Test Project' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('does not render external link when ProjectUrl is not provided', () => {
    const projectWithoutUrl = { ...mockProject, ProjectUrl: undefined }
    render(<ProjectCard {...projectWithoutUrl} onCardClick={mockOnCardClick} />)
    
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })
})

describe('ProjectModal', () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  it('renders when isOpen is true', () => {
    render(<ProjectModal project={mockProject} isOpen={true} onClose={mockOnClose} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
    expect(screen.getByText(/This is a test project description/)).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(<ProjectModal project={mockProject} isOpen={false} onClose={mockOnClose} />)
    
    expect(screen.queryByText('Test Project')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    render(<ProjectModal project={mockProject} isOpen={true} onClose={mockOnClose} />)
    
    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('renders external link when ProjectUrl is provided', () => {
    render(<ProjectModal project={mockProject} isOpen={true} onClose={mockOnClose} />)
    
    const link = screen.getByRole('link', { name: 'Test Project' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })
})