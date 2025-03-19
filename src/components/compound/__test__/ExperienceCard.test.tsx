import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ExperienceCard } from '../ExperienceCard'

class MockIntersectionObserver implements IntersectionObserver {
  root = null
  rootMargin = ''
  thresholds = []
  
  constructor() {}
  
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

global.IntersectionObserver = MockIntersectionObserver

describe('Testing rendering of ui', () => {
  it('Renders Experience Card Successfully', () => {
    render(
      <ExperienceCard
        CompanyName="Test"
        date="2022 March"
        icon={{ asset: { url: ' ' } }}
        index={2}
        points={['React', 'TypeScript']}
        PositionName="Frontend Developer"
      />
    )
    expect(screen.getByTestId('experience-card')).toBeInTheDocument()
  })
})
