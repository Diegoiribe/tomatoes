import { Link } from 'react-router-dom'
import { Tienda } from '../data/db'
import { getData } from '../api/http'
import { useEffect, useState } from 'react'

const Productos = ({ filtros, agregarAlCarrito }) => {
  // Estado para almacenar los productos de la tienda
  const [isTienda, setIsTienda] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('/products')
        console.log('Data fetched:', data)
        setIsTienda(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  console.log('isTienda:', isTienda)

  // Filtrar productos por categoría y búsqueda
  const productosFiltrados = isTienda.filter((producto) => {
    // Filtrar por categoría
    const coincideCategoria =
      !filtros.categoria || producto.category === filtros.categoria

    // Filtrar por nombre o etiquetas
    const coincideBusqueda =
      !filtros.busqueda ||
      producto.name.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
      producto.tags.some((etiqueta) =>
        etiqueta.toLowerCase().includes(filtros.busqueda.toLowerCase())
      )

    return coincideCategoria && coincideBusqueda
  })

  return (
    <div className="flex flex-wrap ∫ justify-center mb-23 w-full gap-23 p-5 pt-10 min-h-[90vh]">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((item) => (
          <Link
            className="md:w-[20%] sm:w-[90%]"
            to={`/producto/${item.id}`}
            key={item.id}
          >
            <div
              className="rounded-2xl h-[24rem] cursor-pointer"
              style={{
                backgroundImage: `url(${item.photoModel})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%'
              }}
            >
              <div className="flex items-start justify-end w-full h-full p-5 sm:opacity-100 md:opacity-0 md:hover:bg-black/10 md:hover:opacity-100 rounded-2xl">
                <button
                  className="flex items-center justify-center rounded-full shadow-2xl cursor-pointer sm:bg-black/10 md:bg-white sm:w-8 sm:h-8 md:w-16 md:h-16"
                  onClick={(e) => {
                    e.preventDefault() // Evita que actúe como un enlace
                    e.stopPropagation() // Evita que el evento se propague al contenedor padre
                    agregarAlCarrito(item) // Agrega el producto al carrito correctamente
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="sm:size-4 md:size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <p className="px-3 pt-3 text-xs uppercase">{item.name}</p>
            <div className="flex items-center justify-between px-2 py-1">
              <div className="flex gap-2">
                {item.variants.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="inline-flex items-center justify-center w-7 h-7 border-2 rounded-full border-[#F9F9F9] cursor-pointer hover:bg-black font-medium text-[#2f2f2f] text-[11px] hover:text-white"
                  >
                    <p className="">{item.size}</p>
                  </div>
                ))}
              </div>
              <div className="text-xs font-medium">
                {item.price.toLocaleString('en-US', {
                  minimumFractionDigits: 2
                })}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="w-full mt-10 text-2xl font-bold text-center text-gray-300">
          No hay productos disponibles.
        </p>
      )}
    </div>
  )
}

export default Productos
