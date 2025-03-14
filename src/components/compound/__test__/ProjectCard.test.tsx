import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectCard from '../ProjectCard'

describe('Testing rendering of ui', () => {
  it('Renders Project Card Succesfully', () => {
    render(
      <ProjectCard
        ProjectName='Test'
        ProjectDescription='Desc'
        ProjectUrl='https://example.com'
        ProjectImage={{ asset: { url: 'https://example.com/image.jpg' } }}
        skills={['React', 'TypeScript']}
        index={2}
      />
    )
    expect(screen.getByTestId('ProjectCard')).toBeInTheDocument()
  })
})
