import { render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import Projects from './../Projects'
import '@testing-library/jest-dom'
import { UserDetailsContext } from '../../Context/UserDetailsContext'
import { mockUserDetails } from '../../MockTestData/MockData'

describe('About Me component tests', () => {
  it('Testing rendering of UI', () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
        <Projects />
      </UserDetailsContext.Provider>
    )
    expect(screen.getByTestId('Projects')).toBeInTheDocument()
  })
})
