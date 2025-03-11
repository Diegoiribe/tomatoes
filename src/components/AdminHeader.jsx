import { useState, useEffect } from 'react'

const AdminHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    console.log('useEffect ejecutado') // <-- Log para verificar el montaje

    const handleScroll = () => {
      console.log('handleScroll ejecutado') // <-- Log para ver si el evento de scroll se detecta
      console.log('scrollY actual en window:', window.scrollY) // <-- Log para ver el scroll en window
      console.log(
        'scrollTop actual en document.documentElement:',
        document.documentElement.scrollTop
      ) // <-- Log alternativo para medir el scroll

      const blackSection = document.querySelector('.black-section')
      console.log('blackSection encontrada:', blackSection) // <-- Log para ver si encuentra la sección

      if (blackSection) {
        const blackSectionPosition = blackSection.offsetTop
        console.log('Posición con offsetTop:', blackSectionPosition) // <-- Log para ver la posición real en la página

        if (window.scrollY >= blackSectionPosition - 50) {
          console.log('Entrando en el IF, activando isScrolled...')
          setIsScrolled(true)
        } else {
          console.log('Entrando en el ELSE, desactivando isScrolled...')
          setIsScrolled(false)
        }
      }
    }

    document.addEventListener('scroll', handleScroll)
    console.log('Evento de scroll añadido') // <-- Log para verificar la adición del evento
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed flex items-center justify-between w-full px-8 py-5 ">
      <h1 className="text-2xl font-bold ">ZAYCA</h1>
      <div className="bg-white rounded-full cursor-pointer ">
        <p
          className={`px-4 py-2 text-sm rounded-full ${
            isScrolled ? 'text-white bg-black' : 'text-black bg-black/5'
          } hover:bg-black/8`}
        >
          Exit
        </p>
      </div>
    </div>
  )
}

export default AdminHeader
