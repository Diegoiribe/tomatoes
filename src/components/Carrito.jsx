import PropTypes from 'prop-types'
import { ProductoCarrito } from '../data/db'

const Carrito = ({ isOpen, setIsOpen }) => {
  const producto = ProductoCarrito

  return (
    <>
      {/* Overlay oscuro cuando la sidebar está abierta */}
      {isOpen && (
        <div
          className="fixed inset-0 transition-opacity duration-300 bg-black/10"
          onClick={() => setIsOpen(false)} // Cierra la sidebar si haces clic afuera
        ></div>
      )}

      {/* Contenedor de la sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[450px] bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 overflow-y-auto`}
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

        {/* Contenido de la sidebar con scroll */}
        <div className="flex flex-col px-5 py-3 gap-7">
          <div className="flex justify-center w-full gap-5">
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs uppercase cursor-pointer ">
                Cesta ({producto.length})
              </p>
              <div className="w-1 h-1 bg-black rounded-xs"></div>
            </div>
            <p className="text-xs uppercase cursor-pointer">Wishlist</p>
          </div>
          {producto.map((item, index) => (
            <div
              key={index}
              className={`flex  pb-6 ${
                index === producto.length - 1 ? 'border-b-0' : 'border-b-[.5px]'
              }`}
            >
              <div
                className="h-20 mr-3 rounded-md"
                style={{
                  backgroundImage: `url(${item.photoPrimary})`, // Corregido: usas item.url aquí
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  width: '20%' // Corregido: usas item.w aquí
                }}
              ></div>
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <p className="text-xs uppercase">{item.name}</p>
                  <p className="text-xs uppercase">
                    MXN{' '}
                    {item.price.toLocaleString('en-US', {
                      minimumFractionDigits: 2
                    })}
                  </p>
                </div>
                <p className="text-xs text-neutral-600">Ref. 5679/701/567</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-3 h-3 bg-green-900 rounded-xs"></div>
                  <p className="text-[10px] font-light">{item.colors}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 ">
                    <p className="text-xs font-extralight">Cantidad</p>
                    <div className="border-[1px] py-2 px-5 text-xs rounded-xs">
                      {item.count}
                    </div>
                    <p className="text-xs font-extralight">Talla</p>
                    <div className="border-[1px] py-2 px-5 text-xs rounded-xs">
                      {item.sizes}
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <svg
                      className="cursor-pointer"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.66667 10.5455L12.3333 15V1H3V15L7.66667 10.5455ZM4 12.663L7.66667 9.16301L11.3333 12.663V2H4V12.663Z"
                        fill="black"
                      ></path>
                    </svg>
                    <svg
                      className="cursor-pointer"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 0.5H11.5V3.65217C11.5 3.6619 11.4997 3.67156 11.4992 3.68115H15C15.2761 3.68115 15.5 3.90501 15.5 4.18115C15.5 4.45729 15.2761 4.68115 15 4.68115H1C0.723858 4.68115 0.5 4.45729 0.5 4.18115C0.5 3.90501 0.723858 3.68115 1 3.68115H4.50083C4.50028 3.67156 4.5 3.6619 4.5 3.65217V0.5ZM5.49917 3.68115H10.5008C10.5003 3.67156 10.5 3.6619 10.5 3.65217V1.5H5.5V3.65217C5.5 3.6619 5.49972 3.67156 5.49917 3.68115ZM2 5.58696C2.27614 5.58696 2.5 5.81081 2.5 6.08696V13.1739C2.5 13.3997 2.57082 13.7484 2.76775 14.0258C2.94632 14.2774 3.24601 14.5 3.8 14.5H12.2C12.4185 14.5 12.7586 14.4293 13.0301 14.231C13.2765 14.051 13.5 13.7444 13.5 13.1739V6.08696C13.5 5.81081 13.7239 5.58696 14 5.58696C14.2761 5.58696 14.5 5.81081 14.5 6.08696V13.1739C14.5 14.0643 14.1235 14.6707 13.6199 15.0385C13.1414 15.3881 12.5815 15.5 12.2 15.5H3.8C2.91399 15.5 2.31368 15.1139 1.95225 14.6046C1.60918 14.1212 1.5 13.5568 1.5 13.1739V6.08696C1.5 5.81081 1.72386 5.58696 2 5.58696Z"
                        fill="#292929"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <div>
              <div className="flex justify-between">
                <p className="text-xs">2 Productos</p>
                <p className="text-xs">MXN 3,390.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xs">Gastos de envío</p>
                <p className="text-xs">MXN 55.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xs">Descuento Gastos de envío</p>
                <p className="text-xs">MXN -55.00</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-sm">TOTAL</p>
              <p className="text-sm">MXN 3,390.00</p>
            </div>
          </div>
          <div className="w-full py-3 text-sm font-medium text-center text-white bg-black rounded-xl">
            Acceder al carrito
          </div>
        </div>
      </div>
    </>
  )
}

Carrito.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.bool.isRequired // Asegura que `color` es un string obligatorio
}

export default Carrito
