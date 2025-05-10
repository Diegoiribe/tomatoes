const ProductosV3 = ({
  productoCarrito,
  eliminarDelCarrito,
  actualizarCantidad
}) => {
  return (
    <div className="flex flex-wrap w-full gap-5 py-5">
      {productoCarrito.length > 0 ? (
        productoCarrito.map((item) => (
          <div key={item.id} className="cursor-pointer md:w-[32%] sm:w-full">
            <div
              className="rounded-2xl h-[60vh]"
              style={{
                backgroundImage: `url(${item.photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                width: '100%'
              }}
            >
              <div className="flex items-start justify-end w-full h-full p-3 sm:opacity-100 md:opacity-0 hover:bg-black/10 md:hover:opacity-100 rounded-2xl">
                <div
                  className="flex items-center justify-center shadow-2xl cursor-pointer"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2 py-2 ">
              <div className="flex justify-between gap-5">
                <p className="text-xs uppercase truncate font-extralight">
                  {item.name}
                </p>
                <p className="text-xs uppercase truncate text-end font-extralight min-w-20">
                  {item.size} | {item.color}
                </p>
              </div>
              <p className="text-xs ">
                MXN{' '}
                {item.price.toLocaleString('en-US', {
                  minimumFractionDigits: 2
                })}
              </p>
              <div className="flex items-center gap-5 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="cursor-pointer size-3"
                  onClick={() => actualizarCantidad(item.id, 'restar')}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>

                <p className="text-xs uppercase font-extralight">
                  {item.count}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="cursor-pointer size-3"
                  onClick={() => actualizarCantidad(item.id, 'sumar')}
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
        ))
      ) : (
        <p className="w-full mt-10 text-2xl font-bold text-center text-gray-300">
          No hay productos en el carrito.
        </p>
      )}
    </div>
  )
}

export default ProductosV3
