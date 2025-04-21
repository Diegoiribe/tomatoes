import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Toggle from '../Toggle'

import { Link } from 'react-router-dom'

const Header = ({ color, productoCarrito, eliminarDelCarrito, fontColor = "black" }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpenToggle, setIsOpenToggle] = useState(false)
    const [isOpenAbout, setIsOpenAbout] = useState(false)

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
            className={`fixed w-full transition-colors duration-300 z-40 ${isScrolled ? 'text-white' : fontColor
                }`}
            style={{
                background: isScrolled ? 'black' : color
            }}
        >
            <div
                className="flex items-center justify-between px-20 py-5"

            ><div className='flex gap-5 items-center'>
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
                    <Link to="/">
                        <p className="text-2xl font-bold">SHOPPHONE</p>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-3">



                    <div
                        onClick={() => setIsOpen(true)}
                        className=" rounded-full cursor-pointer "
                        style={{
                            padding: '8px'
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            stroke="currentColor"
                            className=" size-6 "
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
    color: PropTypes.string.isRequired // Asegura que `color` es un string obligatorio
}

export default Header
