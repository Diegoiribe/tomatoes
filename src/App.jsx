import './App.css'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VistaProducto from './pages/VistaProducto'
import Carrito from './pages/Carrito'
import Register from './pages/Register'
import HomeAdmin from './pages/HomeAdmin'
import Landing from './pages/Landing'
import { useEffect, useState } from 'react'
import HomePhone from './pages/HomePhone'
import Login from './pages/Login'

function App() {
  const [productoCarrito, setProductoCarrito] = useState([])

  // 🔹 Cargar productos del carrito desde localStorage al iniciar la app
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito')
    if (carritoGuardado) {
      setProductoCarrito(JSON.parse(carritoGuardado))
    }
  }, [])

  // 🔹 Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(productoCarrito))
  }, [productoCarrito])

  // ✅ Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setProductoCarrito((prev) => {
      const productoExistente = prev.find((item) => item.id === producto.id)

      if (productoExistente) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, count: item.count + 1 } : item
        )
      } else {
        return [...prev, { ...producto, count: 1 }]
      }
    })
  }

  // ✅ Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setProductoCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  const actualizarCantidad = (id, operacion) => {
    setProductoCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              count:
                operacion === 'sumar'
                  ? item.count + 1
                  : item.count > 1
                  ? item.count - 1
                  : 1
            }
          : item
      )
    )
  }

  const getSubdomain = () => {
    const host = window.location.hostname
    const parts = host.split('.')

    // zayca.spazyo → ["zayca", "spazyo"]
    if (
      parts.length === 2 &&
      parts[0] !== 'spazyo' &&
      parts[0] !== 'localhost'
    ) {
      return parts[0]
    }

    return null
  }

  const subdomain = getSubdomain()
  console.log('🌐 Subdominio detectado:', subdomain)
  console.log('🔍 Hostname real:', window.location.hostname)

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {subdomain === 'zayca' ? (
          <>
            <Route path="/" element={<Home />} />
            <Route
              path="/cat"
              element={
                <Catalogo
                  productoCarrito={productoCarrito}
                  agregarAlCarrito={agregarAlCarrito}
                  eliminarDelCarrito={eliminarDelCarrito}
                />
              }
            />
            <Route
              path="/producto/:id"
              element={
                <VistaProducto
                  agregarAlCarrito={agregarAlCarrito}
                  productoCarrito={productoCarrito}
                  eliminarDelCarrito={eliminarDelCarrito}
                />
              }
            />
            <Route
              path="/carrito"
              element={
                <Carrito
                  productoCarrito={productoCarrito}
                  agregarAlCarrito={agregarAlCarrito}
                  eliminarDelCarrito={eliminarDelCarrito}
                  actualizarCantidad={actualizarCantidad}
                />
              }
            />
            <Route path="/admin" element={<HomeAdmin />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/shopphone" element={<HomePhone />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
