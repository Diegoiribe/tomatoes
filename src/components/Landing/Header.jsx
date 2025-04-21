import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ color, fontColor = 'black' }) => {
  const [isScrolled, setIsScrolled] = useState(false)

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
      className={`fixed w-full transition-colors duration-300 z-40 ${isScrolled ? 'text-white ' : fontColor
        }`}
      style={{
        background: isScrolled ? 'black' : color
      }}
    >
      <div className={`flex items-center justify-between px-5 py-5 `}>
        <Link to="/">
          <p className="text-2xl font-bold">SPAZYO</p>
        </Link>
        <div className="flex items-center justify-center gap-1">
          <div className="px-3 py-2 text-sm font-medium cursor-pointer bg-black/5 rounded-xl flex">
            Get try
          </div>
          <Link to={"/register"} className="px-3 py-2 text-sm font-medium cursor-pointer rounded-xl flex">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  color: PropTypes.string.isRequired, // Asegura que `color` es un string obligatorio
  fontColor: PropTypes.string // `fontColor` es un string opcional
}

export default Header
