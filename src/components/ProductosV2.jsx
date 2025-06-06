import { Link } from 'react-router-dom'
import PropTypes from 'prop-types' // Importa el módulo de PropTypes
import { useEffect, useState } from 'react'
import { getData } from '../api/http'

const ProductosV2 = ({ width, agregarAlCarrito }) => {
  const [Tienda, setTienda] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('/products')
        console.log('Data fetched:', data)
        setTienda(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleCarrito = (producto) => {
    const productoConDetalles = {
      photo: producto.variants[0].photoModel,
      name: producto.name,
      price: producto.price,
      id: producto.id,
      count: 1
    }

    agregarAlCarrito(productoConDetalles)
  }

  return (
    <div className="flex flex-wrap w-full gap-3 py-5 mb-20 sm:justify-around md:justify-center">
      {Tienda.map((item) => (
        <Link
          to={`/producto/${item.id}`} // Corregido: usas item.id aquí
          key={item.id}
          className="cursor-pointer"
          style={{
            width: width // Corregido: usas item.w aquí
          }}
        >
          <div
            className="rounded-2xl h-[17rem]"
            style={{
              backgroundImage: `url(${item.variants[0].photoModel})`, // Corregido: usas item.url aquí
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              width: '100%' // Corregido: usas item.w aquí
            }}
          >
            <div className="flex items-end w-full h-full p-5 sm:opacity-100 md:opacity-0 justify-star md:hover:bg-black/10 rounded-2xl md:hover:opacity-100">
              <div
                onClick={(e) => {
                  e.preventDefault() // Evita que actúe como un enlace
                  e.stopPropagation() // Evita que el evento se propague al contenedor padre
                  handleCarrito(item) // Agrega el producto al carrito correctamente
                }}
                className="flex items-center justify-center w-8 h-8 rounded-full shadow-2xl cursor-pointer sm:bg-black/10 md:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2 py-2 ">
            <p className="text-xs uppercase font-extralight">{item.name}</p>
            <p className="text-xs ">
              MXN{' '}
              {item.price.toLocaleString('en-US', {
                minimumFractionDigits: 2
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

ProductosV2.propTypes = {
  width: PropTypes.string.isRequired // Asegura que `color` es un string obligatorio
}

export default ProductosV2
