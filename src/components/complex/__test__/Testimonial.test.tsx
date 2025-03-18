import { render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import '@testing-library/jest-dom'
import Testimonials from '../Testimonials'
import { UserDetailsContext } from '../../Context/UserDetailsContext'
import { mockUserDetails } from '../../MockTestData/MockData'

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}))
jest.mock('swiper/modules', () => ({
  Navigation: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  )
}))

jest.mock('swiper/css', () => {})
jest.mock('swiper/css/navigation', () => {})
jest.mock('swiper/css/pagination', () => {})


describe('HeroSection Component tests', () => {
  it('Testing rendering of UI', () => {
    render(
      <UserDetailsContext.Provider value={{ userDetails: mockUserDetails }}>
        <Testimonials />
      </UserDetailsContext.Provider>
    )
    expect(screen.getByTestId('Testimonials')).toBeInTheDocument()
  })
})
