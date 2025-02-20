import { render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import Aboutme from './../Aboutme'
import '@testing-library/jest-dom'
import { UserDetailsContext } from '../../Context/UserDetailsContext'
import { mockUserDetails } from '../../MockTestData/MockData'

describe('About Me component tests', () => {
  it('Testing rendering of UI', () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
        <Aboutme />
      </UserDetailsContext.Provider>
    )
    expect(screen.getByTestId('Aboutme')).toBeInTheDocument()
  })
})
