import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Carrito from './carrito'
import Toggle from './Toggle'
import About from './About'

const Header = ({ color }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpenToggle, setIsOpenToggle] = useState(false)
  const [isOpenAbout, setIsOpenAbout] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const blackSection = document.querySelector('.black-section') // Ajusta la clase según tu diseño
      if (blackSection) {
        const blackSectionPosition = blackSection.offsetTop

        if (window.scrollY >= blackSectionPosition - 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed w-full  transition-colors duration-300 ${
        isScrolled ? 'text-white' : 'text-black'
      }`}
      style={{
        background: isScrolled ? 'transparent' : color
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: '20px'
        }}
      >
        <div onClick={() => setIsOpenToggle(true)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
        <Toggle isOpen={isOpenToggle} setIsOpen={setIsOpenToggle} />
        <div>
          <p className="text-2xl font-bold">ZAYCA</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p
            className="text-sm font-medium cursor-pointer"
            onClick={() => setIsOpenAbout(true)}
          >
            About
          </p>
          <About isOpen={isOpenAbout} setIsOpen={setIsOpenAbout} />
          <p className="text-sm font-medium cursor-pointer">FAQs</p>
          <div
            onClick={() => setIsOpen(true)}
            className="border rounded-full cursor-pointer border-neutral-200"
            style={{
              padding: '8px'
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className=" size-3 text-neutral-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Carrito isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

Header.propTypes = {
  color: PropTypes.string.isRequired // Asegura que `color` es un string obligatorio
}

export default Header
