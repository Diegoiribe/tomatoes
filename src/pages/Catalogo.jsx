import Header from '../components/Header'
import { useState } from 'react'
import Productos from '../components/Productos'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NavBarActive from '../components/NavBarActive'

const Catalogo = ({
  agregarAlCarrito,
  productoCarrito,
  eliminarDelCarrito
}) => {
  const [filtros, setFiltros] = useState({
    categoria: '',
    busqueda: '',
    active: false
  })

  return (
    <div>
      <Header
        color="white"
        productoCarrito={productoCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      {filtros.active ? (
        <NavBarActive filtros={filtros} setFiltros={setFiltros} />
      ) : (
        <NavBar filtros={filtros} setFiltros={setFiltros} />
      )}
      <Productos filtros={filtros} agregarAlCarrito={agregarAlCarrito} />
      <Footer />
    </div>
  )
}

export default Catalogo
