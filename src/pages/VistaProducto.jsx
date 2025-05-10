import Cuidados from '../components/Cuidados'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductosV2 from '../components/ProductosV2'
import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { getData } from '../api/http'

const VistaProducto = ({
  agregarAlCarrito,
  productoCarrito,
  eliminarDelCarrito
}) => {
  const [isProducts, setIsProducts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [variantSeleccionada, setVariantSeleccionada] = useState(null)
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null)
  const [colorSeleccionado, setColorSeleccionado] = useState(null)
  const [width, setWidth] = useState('')
  const galeriaRef = useRef(null)
  const { pathname } = useLocation()
  const { id } = useParams()

  // 🔹 Fetch de productos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('/products')
        setIsProducts(data)
        console.log('Data fetched:', data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    const screenWidth = window.innerWidth
    const newWidth = screenWidth > 765 ? '15.95%' : '70%'
    console.log('💡 Ancho aplicado:', newWidth)
    setWidth(newWidth)

    fetchData()
  }, [])

  // 🔹 Reinicia selección y scroll al cambiar ruta
  useEffect(() => {
    setColorSeleccionado(null)
    setTallaSeleccionada(null)

    if (galeriaRef.current) {
      galeriaRef.current.scrollLeft = 0
      galeriaRef.current.scrollTop = 0
    }
  }, [pathname])

  // 🔹 Obtener producto específico
  const producto = isProducts.filter((p) => p.id == id)

  useEffect(() => {
    if (producto[0]?.variants?.length && variantSeleccionada === null) {
      setVariantSeleccionada(producto[0].variants[0])
      setColorSeleccionado(producto[0].variants[0].color)
    }
  }, [producto])

  // 🔹 Colores únicos (memoizado)
  const coloresUnicos = useMemo(() => {
    if (!producto[0]?.variants) return []
    return [...new Set(producto[0].variants.map((v) => v.color))]
  }, [producto])

  // 🔹 Agregar al carrito con validación
  const manejarAgregarAlCarrito = () => {
    if (!tallaSeleccionada || !colorSeleccionado) {
      alert(
        'Por favor selecciona una talla y un color antes de añadir al carrito'
      )
      return
    }

    const productoConDetalles = {
      id: variantSeleccionada.id,
      name: producto[0].name,
      description: producto[0].description,
      price: producto[0].price,
      photo: variantSeleccionada.photoModel,
      color: variantSeleccionada.color,
      size: tallaSeleccionada,
      count: 1
    }

    agregarAlCarrito(productoConDetalles)
    console.log(productoConDetalles)
  }

  const getTailwindDarkColor = (color) => {
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
      Blue: 'bg-blue-900',
      green: 'bg-green-900',
      purple: 'bg-purple-900',
      pink: 'bg-pink-900',
      black: 'bg-black',
      white: 'bg-gray-100',
      gray: 'bg-gray-900',
      grayy: 'bg-gray-300',

      // 🔵 Personalizados en español
      'azul marino': 'bg-blue-900',
      blanco: 'bg-gray-200',
      negro: 'bg-black',
      gris: 'bg-gray-300',
      beige: 'bg-stone-300',
      marrón: 'bg-yellow-900',
      rojo: 'bg-red-900'
    }

    return colorPairs[color?.toLowerCase()] || 'bg-gray-900'
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
          {variantSeleccionada?.photos?.map((photoUrl, index) => (
            <div
              key={index}
              className="w-full sm:h-[90vh] md:h-[110vh]"
              style={{
                backgroundImage: `url(${photoUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                minHeight: '400px'
              }}
            ></div>
          ))}
        </div>

        <div className="flex justify-center sm:w-full md:w-1/2 sm:p-5 md:pt-32 ">
          {producto.map((item) => (
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
                <p className="text-xs uppercase sm:hidden md:flex">
                  {item.description}
                </p>
                <div className="flex items-center justify-center w-full gap-5">
                  {coloresUnicos.map((color, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4  cursor-pointer ${getTailwindDarkColor(
                        color
                      )} ${colorSeleccionado === color ? '' : ''}`}
                      onClick={() => {
                        setColorSeleccionado(color)
                        setTallaSeleccionada(null) // resetea la talla cuando cambia color
                        const variante = producto[0]?.variants.find(
                          (v) =>
                            v.color.toLowerCase().trim() ===
                            color.toLowerCase().trim()
                        )
                        console.log('🔁 Nueva variante encontrada:', variante)
                        setVariantSeleccionada(variante)
                      }}
                    ></div>
                  ))}
                </div>

                <div className="flex items-center justify-center w-full gap-5">
                  {variantSeleccionada &&
                    Object.entries(variantSeleccionada?.sizes).map(
                      ([size], index) => {
                        const esSeleccionada = tallaSeleccionada === size

                        return (
                          <div
                            key={index}
                            className={`
                                        w-8 rounded-md text-center py-1
                                        ${
                                          esSeleccionada
                                            ? 'font-medium'
                                            : 'font-light'
                                        }
                                        cursor-pointer
                                      `}
                            onClick={() => setTallaSeleccionada(size)}
                          >
                            {size}
                          </div>
                        )
                      }
                    )}
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
