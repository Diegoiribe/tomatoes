import { ProductoCarrito } from '../data/db'

const ProductosV3 = () => {
  const producto = ProductoCarrito

  return (
    <div className="flex flex-wrap justify-between w-full py-5">
      {producto.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
          style={{
            width: '32%' // Corregido: usas item.w aquí
          }}
        >
          <div
            className="rounded-2xl h-[60vh]"
            style={{
              backgroundImage: `url(${item.photoModel})`, // Corregido: usas item.url aquí
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              width: '100%' // Corregido: usas item.w aquí
            }}
          >
            <div className="flex items-start justify-end w-full h-full p-3 opacity-0 hover:bg-black/10 hover:opacity-100">
              <div className="flex items-center justify-center shadow-2xl cursor-pointer ">
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
            <div className="flex justify-between">
              <p className="text-xs uppercase font-extralight">{item.name}</p>
              <p className="text-xs uppercase font-extralight">
                {item.sizes} | {item.colors}
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
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>

              <p className="text-xs uppercase font-extralight">1</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="cursor-pointer size-3"
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
      ))}
    </div>
  )
}

export default ProductosV3
