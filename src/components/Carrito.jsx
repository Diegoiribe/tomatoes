import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Carrito = ({ isOpen, setIsOpen, eliminarDelCarrito }) => {
  const [productoCarrito, setProductoCarrito] = useState([])

  // 🔹 Cargar productos del carrito desde localStorage al abrir el carrito
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito')
    if (carritoGuardado) {
      setProductoCarrito(JSON.parse(carritoGuardado))
    }
  }, [isOpen]) // Se ejecuta cada vez que el carrito se abre

  // 🔹 Sincronizar cambios entre diferentes pestañas
  useEffect(() => {
    const syncCarrito = (event) => {
      if (event.key === 'carrito') {
        setProductoCarrito(JSON.parse(event.newValue) || [])
      }
    }

    window.addEventListener('storage', syncCarrito)
    return () => window.removeEventListener('storage', syncCarrito)
  }, [])

  return (
    <div className="z-40">
      {/* Overlay oscuro cuando la sidebar está abierta */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-300 bg-black/20"
          onClick={() => setIsOpen(false)}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full sm:w-full md:w-[450px] text-black bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 overflow-y-auto`}
        style={{ pointerEvents: 'auto' }}
      >
        {/* Botón de cerrar */}
        <div className="flex items-center justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido del carrito */}
        <div className="flex flex-col px-5 py-3 gap-7">
          <div className="flex justify-center w-full gap-5">
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs uppercase cursor-pointer">
                Cesta ({productoCarrito.length})
              </p>
              <div className="w-1 h-1 bg-black rounded-xs"></div>
            </div>
          </div>

          {/* Renderizar productos del carrito */}
          {productoCarrito.length > 0 ? (
            productoCarrito.map((item) => (
              <div key={item.id} className="flex pb-6 border-b-[.5px]">
                <div
                  className="h-20 mr-3 rounded-md"
                  style={{
                    backgroundImage: `url(${item.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    width: '20%'
                  }}
                ></div>
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-xs uppercase truncate">{item.name}</p>
                    <p className="text-xs uppercase">
                      MXN{' '}
                      {item.price.toLocaleString('en-US', {
                        minimumFractionDigits: 2
                      })}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-600">Ref. 5679/701/567</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs font-extralight">
                      Cantidad: {item.count}
                    </p>
                    <button
                      onClick={() => {
                        eliminarDelCarrito(item.id)
                        const nuevoCarrito = productoCarrito.filter(
                          (p) => p.id !== item.id
                        )
                        setProductoCarrito(nuevoCarrito)
                        localStorage.setItem(
                          'carrito',
                          JSON.stringify(nuevoCarrito)
                        )
                      }}
                      className="p-2 text-xs text-red-500 cursor-pointer"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-center text-gray-500">
              Tu carrito está vacío.
            </p>
          )}

          {/* Resumen del pedido */}
          {productoCarrito.length > 0 && (
            <div className="mt-8">
              <div className="flex justify-between">
                <p className="text-xs">Total productos:</p>
                <p className="text-xs">
                  MXN{' '}
                  {productoCarrito
                    .reduce((total, item) => total + item.price * item.count, 0)
                    .toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          )}

          {/* Botón de checkout */}
          <Link
            to={'/carrito'}
            className="w-full py-3 text-sm font-medium text-center text-white bg-black cursor-pointer rounded-xl"
          >
            Acceder al carrito
          </Link>
        </div>
      </div>
    </div>
  )
}

Carrito.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  eliminarDelCarrito: PropTypes.func.isRequired
}

export default Carrito
