import { ProductoPrincipal } from '../data/db'
import PropTypes from 'prop-types' // Importa el módulo de PropTypes

const ProductosV2 = ({ width }) => {
  const producto = ProductoPrincipal

  return (
    <div className="flex flex-wrap justify-between w-full py-5">
      {producto.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer"
          style={{
            width: width // Corregido: usas item.w aquí
          }}
        >
          <div
            className="rounded-2xl h-[17rem]"
            style={{
              backgroundImage: `url(${item.photoPrimary})`, // Corregido: usas item.url aquí
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              width: '100%' // Corregido: usas item.w aquí
            }}
          >
            <div className="flex items-end w-full h-full p-5 opacity-0 justify-star hover:bg-black/10 hover:opacity-100">
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-2xl cursor-pointer">
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
        </div>
      ))}
    </div>
  )
}

ProductosV2.propTypes = {
  width: PropTypes.string.isRequired // Asegura que `color` es un string obligatorio
}

export default ProductosV2
