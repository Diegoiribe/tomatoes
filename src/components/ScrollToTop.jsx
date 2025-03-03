import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation() // Detecta el cambio de ruta

  useEffect(() => {
    window.scrollTo(0, 0) // Mueve el scroll al inicio cada vez que cambia la ruta
  }, [pathname])

  return null // No renderiza nada en pantalla
}

export default ScrollToTop
