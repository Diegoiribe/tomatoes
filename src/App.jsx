import './App.css'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VistaProducto from './pages/VistaProducto'
import Carrito from './pages/Carrito'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Catalogo />} />
        <Route path="/producto" element={<VistaProducto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  )
}

export default App
