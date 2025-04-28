import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Header = ({ color, fontColor = 'black' }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isName, setName] = useState('zayca')

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
      className={` w-full transition-colors duration-300 z-40 ${
        isScrolled ? 'text-white' : fontColor
      }`}
      style={{
        background: isScrolled ? 'black' : color
      }}
    >
      <div
        className="flex items-center justify-between mr-5 ml-52"
        style={{
          padding: '20px'
        }}
      >
        <div className="cursor-pointer">
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

        <div className="flex items-center justify-center ">
          <input
            type="text"
            placeholder="Name"
            value={isName}
            onChange={(e) => setName(e.target.value)}
            className="text-2xl font-bold text-center focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-sm font-medium cursor-pointer sm:hidden md:flex">
            About
          </p>

          <div
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
              className=" size-3"
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
    </div>
  )
}

Header.propTypes = {
  color: PropTypes.string.isRequired, // Asegura que `color` es un string obligatorio
  fontColor: PropTypes.string // Asegura que `fontColor` es un string opcional
}

export default Header
