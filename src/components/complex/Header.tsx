import React, { useEffect, useState, useCallback } from 'react'
import NavigationLinks from '../compound/NavigationLinks'
import ActionPanel from '../compound/ActionPanel'
import MobileNav from '../compound/MobileNav'
import MobileNavButton from '../compound/MobileNavButton'

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
      sectionId: string
    ) => {
      event.preventDefault()
      const targetSection = document.getElementById(sectionId)
      if (targetSection) {
        const offset = 100
        const targetPosition =
          targetSection.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        setActiveSection(sectionId)
        setOpenMenu(false)
      }
    },
    []
  )

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed z-20 w-full py-5 font-medium transition-all duration-300 ${
        isScrolled ? 'bg-customPurple shadow-md' : 'bg-[#0f0715]'
      }`}
    >
      <div className='relative mx-auto flex h-full w-full items-center justify-between px-[15px] sm:w-4/5 sm:px-0 sm:pr-0'>
        <a
          href='#herosection'
          data-testid='logo'
          className='group relative cursor-pointer text-3xl font-bold'
          onClick={e => handleScroll(e, 'herosection')}
        >
          <img
            src='/logo/cropped_image.webp'
            width={176}
            height={28} 
            className='h-7 w-32 pt-1 sm:w-44'
            alt='WebDev Logo'
            loading='lazy'
            decoding='async'
          />
        </a>

        <div className='flex items-center gap-4 sm:gap-10'>
          <div className='hidden lg:flex items-center gap-10'>
            <NavigationLinks handleScroll={handleScroll} Active={activeSection} />
          </div>
          <ActionPanel handleScroll={handleScroll} />
          <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
      </div>

      <MobileNav
        setOpenMenu={setOpenMenu}
        handleScroll={handleScroll}
        Active={activeSection}
        openMenu={openMenu}
      />
    </header>
  )
}

export default Header
