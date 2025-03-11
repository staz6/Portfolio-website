import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Services from '../Services'
import { UserDetailsContext } from '../../Context/UserDetailsContext'
import { mockUserDetails } from '../../MockTestData/MockData'

describe('Testing rendering of ui', () => {
  it('Renders Service Card Succesfully', () => {
    render(

      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
    <Services />
    </UserDetailsContext.Provider>
    )
    expect(screen.getByTestId('services')).toBeInTheDocument()
  })
})
