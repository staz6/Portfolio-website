import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import Button from '../shared/Button'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300) 
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <div className='fixed bottom-4 right-4 animate-pulse'>
        <Button
          onClick={scrollToTop}
          description=''
          className='bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'
          icon={<FaArrowUp />}
        />
      </div>
    )
  )
}

export default ScrollToTop
