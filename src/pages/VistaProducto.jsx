import Cuidados from '../components/Cuidados'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductosV2 from '../components/ProductosV2'
import { useState, useEffect, useRef } from 'react'
import { ProductoVista } from '../data/db'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const VistaProducto = ({
  agregarAlCarrito,
  productoCarrito,
  eliminarDelCarrito
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { id } = useParams()

  const producto = ProductoVista

  const [tallaSeleccionada, setTallaSeleccionada] = useState(null)
  const [colorSeleccionado, setColorSeleccionado] = useState(null)
  const galeriaRef = useRef(null) // 🔹 Referencia al contenedor de imágenes
  const { pathname } = useLocation() // 🔹 Detecta el cambio de ruta
  const [width, setWidth] = useState("")


  useEffect(() => {

    const screenWidth = window.innerWidth;
    if (screenWidth > 765) return setWidth("15.95%");      // tablets o pantallas medianas
    return setWidth("70%");                           // pantallas grandes

  }, [])
  useEffect(() => {
    setColorSeleccionado(null)
    setTallaSeleccionada(null)
    if (galeriaRef.current) {
      galeriaRef.current.scrollLeft = 0 // 🔄 Restablece el scroll horizontal
      galeriaRef.current.scrollTop = 0 // 🔄 Restablece el scroll vertical (si aplica)
    }

  }, [pathname])

  const manejarAgregarAlCarrito = () => {
    if (!tallaSeleccionada || !colorSeleccionado) {
      alert(
        'Por favor selecciona una talla y un color antes de añadir al carrito'
      )
      return
    }

    const productoConDetalles = {
      ...producto.find((p) => p.id == id),
      size: tallaSeleccionada,
      color: colorSeleccionado
    }

    agregarAlCarrito(productoConDetalles)
    console.log(productoConDetalles)
  }

  const getTailwindDarkColor = (color) => {
    // Mapa de colores permitidos en Tailwind
    const colorPairs = {
      red: 'bg-red-900',
      orange: 'bg-orange-900',
      amber: 'bg-amber-900',
      yellow: 'bg-yellow-900',
      lime: 'bg-lime-900',
      emerald: 'bg-emerald-900',
      teal: 'bg-teal-900',
      cyan: 'bg-cyan-900',
      sky: 'bg-sky-900',
      indigo: 'bg-indigo-900',
      violet: 'bg-violet-900',
      fuchsia: 'bg-fuchsia-900',
      rose: 'bg-rose-900',
      slate: 'bg-slate-900',
      zinc: 'bg-zinc-900',
      neutral: 'bg-neutral-900',
      stone: 'bg-stone-900',
      blue: 'bg-blue-900',
      green: 'bg-green-900',
      purple: 'bg-purple-900',
      pink: 'bg-pink-900',
      black: 'bg-black', // Tailwind no tiene bg-black-900
      white: 'bg-white', // Para evitar que desaparezca
      gray: 'bg-gray-900'
    }

    // Devolver la clase correspondiente o gris oscuro por defecto
    return colorPairs[color.toLowerCase()] || 'bg-gray-900'
  }

  return (
    <div className="w-full h-full ">
      <Header
        color="transparent"
        productoCarrito={productoCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      <div className=" w-full sm:h-full md:h-[100vh] flex sm:flex-col md:flex-row mb-20">
        <div
          ref={galeriaRef}
          className="md:w-1/2 sm:w-full sm:h-[80vh] md:h-full overflow-auto sm:rounded-none md:rounded-br-2xl"
        >
          {producto
            .filter((p) => p.id == id) // Filtra el producto con el ID específico (devuelve un array)
            .map((item) => (
              <div key={item.id} className="w-full h-auto">
                {item.photos.map((photo, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="w-full sm:h-[90vh] md:h-[110vh]"
                    style={{
                      backgroundImage: `url(${photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top'
                    }}
                  ></div>
                ))}
              </div>
            ))}
        </div>

        <div className="flex justify-center sm:w-full md:w-1/2 sm:p-5 md:pt-32 ">
          {producto
            .filter((p) => p.id == id)
            .map((item) => (
              <div key={item.id}>
                <div className="flex flex-col gap-11 md:max-w-[350px]">
                  <div>
                    <div className="flex sm:justify-between md:justify-normal md:gap-10">
                      <p className="text-sm uppercase font-extralight">
                        {item.name}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="cursor-pointer size-4 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs ">
                      MXN{' '}
                      {item.price.toLocaleString('en-US', {
                        minimumFractionDigits: 2
                      })}
                    </p>
                  </div>
                  <p className="text-xs uppercase sm:hidden md:flex">{item.description}</p>
                  <div className="flex items-center justify-center w-full gap-5">
                    {item.colors.map((color, index) => (
                      <div
                        key={`${item.id}-${index}`} // Clave única combinando el ID del producto y el índice
                        className={`border-2  w-5 h-5 border-[#F9F9F9] cursor-pointer ${getTailwindDarkColor(
                          color
                        )} ${colorSeleccionado === color
                          ? 'rounded-full '
                          : 'rounded-md'
                          }`}
                        onClick={() => setColorSeleccionado(color)}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-full gap-5">
                    {item.sizes.map((size, index) => (
                      <div
                        key={index}
                        className={` w-8 rounded-md text-center py-1 ${tallaSeleccionada === size
                          ? 'font-medium'
                          : 'font-extralight'
                          } cursor-pointer`}
                        onClick={() => setTallaSeleccionada(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-center text-neutral-500">
                    La modelo lleva la talla M y mide 178 cm.
                  </p>
                  <div className="flex flex-col gap-7">
                    <div
                      className="flex items-center justify-center px-5 py-2 bg-black cursor-pointer rounded-xl"
                      onClick={manejarAgregarAlCarrito}
                    >
                      <p className="text-sm font-medium text-white">
                        Añadir al carrito
                      </p>
                    </div>
                    <p className="text-xs font-medium uppercase cursor-pointer ">
                      Ver medidas
                    </p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <p className="text-xs uppercase ">Comp. / cuidados </p>{' '}
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <Cuidados isOpen={isOpen} setIsOpen={setIsOpen} />
                    <div className="flex items-center justify-between cursor-pointer">
                      <p className="text-xs uppercase ">
                        envios, compras y devoluciones
                      </p>
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer">
                      <p className="text-xs uppercase ">
                        Disponibilidad en tienda
                      </p>
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
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <p className="px-10 py-4 text-xs font-medium uppercase ">
        TE PUEDE INTERESAR
      </p>
      <div className="px-5">
        <ProductosV2 width={width} agregarAlCarrito={agregarAlCarrito} />
      </div>
      <Footer />
    </div>
  )
}

export default VistaProducto
