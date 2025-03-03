import './App.css'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VistaProducto from './pages/VistaProducto'
import Carrito from './pages/Carrito'
import Register from './pages/Register'
import HomeAdmin from './pages/HomeAdmin'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Catalogo />} />
        <Route path="/producto/:id" element={<VistaProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<HomeAdmin />} />
      </Routes>
    </Router>
  )
}

export default App
