import Header from '../components/Header'
import { useEffect, useState } from 'react'
import Productos from '../components/Productos'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Catalogo = () => {
  const [filtros, setFiltros] = useState({
    categoria: ""
  });




  return (
    <div>
      <Header color="white" />
      <NavBar setFiltros={setFiltros} filtros={filtros} />
      <Productos filtros={filtros} />
      <Footer />
    </div>
  )
}

export default Catalogo

