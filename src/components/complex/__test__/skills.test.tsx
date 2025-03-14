import { render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import '@testing-library/jest-dom'
import Skills from '../Skills'
import { UserDetailsContext } from '../../Context/UserDetailsContext'
import { mockUserDetails } from '../../MockTestData/MockData'

jest.mock('gatsby-plugin-sanity-image', () => {
  return ({ alt, className, ...props }: { alt: string; className: string }) => (
    <img alt={alt} className={className} {...props} />
  )
})
describe('HeroSection Component tests', () => {
  it('Testing rendering of UI', () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
        <Skills />
      </UserDetailsContext.Provider>
    )
    expect(screen.getByTestId('Skills')).toBeInTheDocument()
  })
})
