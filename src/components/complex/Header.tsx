import React, { useEffect, useState } from 'react'
import NavigationLinks from '../compound/NavigationLinks'
import ActionPanel from '../compound/ActionPanel'
import MobileNav from '../compound/MobileNav'
import MobileNavButton from '../compound/MobileNavButton'

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [Active, setActive] = useState<string>('')
  const [isScrolled, setIsScrolled] = useState(false)
  const handleScroll = (
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
      setActive(sectionId)
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed z-20 py-5 w-full font-medium  transition-all duration-300  ${
        isScrolled ? 'bg-customPurple shadow-md' : 'bg-[#0f0715]'
      }`}
    >
      <div className=' flex  h-full justify-between w-full px-[15px] sm:px-0 sm:w-4/5 mx-auto sm:pr-0  relative  items-center  '>
        <a
          href='#herosection'
          data-testid='logo'
          className='text-3xl font-bold cursor-pointer relative group '
          onClick={e => handleScroll(e, 'herosection')}
        >
          <img src="logo/cropped_image.png" className=' w-32  sm:w-44 h-7 pt-1' alt="WebDev Logo" />

        </a>

        <div className='flex items-center gap-4 sm:gap-10'>
          <div className='hidden lg:flex items-center gap-10'>
            <NavigationLinks handleScroll={handleScroll} Active={Active} />
          </div>
          <ActionPanel handleScroll={handleScroll} />
          <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
      </div>
      <MobileNav
        setOpenMenu={setOpenMenu}
        handleScroll={handleScroll}
        Active={Active}
        openMenu={openMenu}
      />
    </header>
  )
}

export default Header
