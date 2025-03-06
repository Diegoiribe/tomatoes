import { useState, useEffect } from 'react'

const AdminHeader = () => {
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
    <div className="fixed flex items-center justify-between z-10 w-full px-8 py-5">
      <h1 className="text-2xl font-bold " >ZAYCA</h1>
      <div className=" rounded-full cursor-pointer bg-white">
        <p className="px-4 py-2 text-sm bg-black/5 hover:bg-black/8" style={{
          color: isScrolled ? 'white' : "black",
          backgroundColor: isScrolled && "black"
        }}>Exit</p>
      </div>
    </div>
  )
}

export default AdminHeader
