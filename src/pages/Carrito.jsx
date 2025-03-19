import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductosV2 from '../components/ProductosV2'
import ProductosV3 from '../components/ProductosV3'
import { ProductoCarrito } from '../data/db'
import axios from 'axios'

const Carrito = ({ agregarAlCarrito, productoCarrito, eliminarDelCarrito }) => {
  const productos = productoCarrito

  const handleBuyClick = async () => {
    try {
      // Calcula el total y organiza los productos
      const productosParaEnviar = productos.map((producto) => ({
        id: producto.id,
        name: producto.name,
        img: producto.photoPrimary,
        quantity: producto.count,
        amount: Math.round(producto.price * 100) // Convierte a centavos
      }))

      const total = productosParaEnviar.reduce(
        (acc, producto) => acc + producto.amount * producto.quantity,
        0
      )

      const { data } = await axios.post('http://localhost:3001/payment', {
        products: productosParaEnviar,
        totalAmount: total
      })

      console.log(data)

      if (data && data.sessionUrl) {
        window.location.href = data.sessionUrl // Redirecciona a Stripe Checkout
      } else {
        console.error('Session URL not provided')
      }
    } catch (error) {
      console.error('Error during payment:', error)
    }
  }

  const calcularTotal = () => {
    return productos
      .reduce((acc, producto) => acc + producto.price * producto.count, 0)
      .toFixed(2)
  }

  return (
    <div>
      <Header
        color="white"
        productoCarrito={productoCarrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />
      <div className="fixed bottom-0 left-0 flex items-start justify-end w-full gap-10 pt-6 pb-4 bg-black shadow-2xl px-25">
        <p className="text-sm text-white uppercase font-extralight">Total</p>
        <div>
          <p className="text-xs text-white uppercase font-extralight">
            ${' '}
            {calcularTotal().toLocaleString('en-US', {
              minimumFractionDigits: 2
            })}
          </p>
          <p className=" uppercase text-[8px] font-medium text-neutral-500">
            * IVA incluido
          </p>
        </div>
        <button
          onClick={handleBuyClick}
          className="px-8 py-2 text-sm font-medium text-black bg-white rounded-full cursor-pointer"
        >
          CONTINUAR
        </button>
      </div>
      <div className="pt-[72px] px-25 ">
        <p className="text-sm font-medium uppercase">
          Carrito [{productos.length}]
        </p>
        <div className="mb-20">
          <ProductosV3
            eliminarDelCarrito={eliminarDelCarrito}
            productoCarrito={productoCarrito}
          />
        </div>
        <ProductosV2 width="19.2%" agregarAlCarrito={agregarAlCarrito} />
      </div>
      <Footer />
    </div>
  )
}

export default Carrito
