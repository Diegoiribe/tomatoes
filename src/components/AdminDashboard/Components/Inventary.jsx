import Footer from '../../Footer'
import { useState } from 'react'
import InventaryModal from './InventaryModal'
import { ProductoPrincipal } from '../../../data/db'
const Inventary = ({ filtros, setFiltros }) => {
  const [verMas, setVerMas] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const products = ProductoPrincipal
  const handleChange = (event) => {
    setFiltros((prev) => ({
      ...prev,
      categoria: event.target.value // Se actualiza correctamente la categoría
    }))
  }

  const productosFiltrados = products.filter((p) => {
    const matchCategoria =
      !filtros.categoria || p.category === filtros.categoria
    const matchBusqueda =
      !filtros.busqueda ||
      p.name.toLowerCase().includes(filtros.busqueda.toLowerCase())

    return matchCategoria && matchBusqueda
  })

  const productosAMostrar = verMas
    ? productosFiltrados
    : productosFiltrados.slice(0, 8)

  return (
    <div className="flex flex-col items-center w-full pl-52">
      {isOpen ? (
        <InventaryModal setIsOpen={setIsOpen} />
      ) : (
        <>
          <div className="flex justify-between w-full px-5 py-2 mb-5 mr-5 rounded-2xl">
            <div className="flex items-center gap-3 cursor-pointer">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 "
                onClick={() => setIsOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <p className="text-sm">Add item</p>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                className="w-full p-2 px-5 text-sm text-black rounded-full focus:outline-none bg-black/5"
                placeholder="Buscar"
                value={filtros.busqueda}
                onChange={(e) =>
                  setFiltros((prev) => ({ ...prev, busqueda: e.target.value }))
                }
              />
              <div className="flex items-center gap-5">
                <div className="flex items-center px-5 py-2 rounded-full border-neutral-300 bg-black/5">
                  <select
                    id="options"
                    className="block pr-8 text-sm leading-tight text-black appearance-none cursor-pointer w-42 focus:outline-none "
                    value={filtros.categoria}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Categories
                    </option>
                    <option value="Jersey">Jersey</option>
                    <option value="Dress">Dress</option>
                    <option value="Pants">Pants</option>
                  </select>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="6"
                      stroke="currentColor"
                      className="size-3 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full gap-5 pr-10 mb-10">
            {productosAMostrar.map((item) => (
              <div
                key={item}
                className="flex justify-between p-3 h-36 w-[45%] rounded-2xl hover:bg-black/5"
              >
                <div
                  className="w-[25.5%] rounded-2xl mr-10"
                  style={{
                    backgroundImage: `url(${item.photoPrimary})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="flex flex-col justify-center gap-3 ">
                  <div className="">
                    <p className="mb-1 text-xs truncate">{item.name}</p>
                    <p className="text-xs uppercase">
                      mex $
                      {item.price.toLocaleString('en-US', {
                        minimumFractionDigits: 2
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2 ">
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <p className="w-full text-xs font-medium text-center uppercase">
                        s
                      </p>
                      <div className="flex items-center justify-center w-full p-2 px-5 rounded-lg h-1/2 bg-black/5">
                        <p className="text-sm">6</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <p className="w-full text-xs font-medium text-center uppercase ">
                        m
                      </p>
                      <div className="flex items-center justify-center w-full p-2 px-5 rounded-lg h-1/2 bg-black/5">
                        <p className="text-sm">2</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <p className="w-full text-xs font-medium text-center uppercase ">
                        l
                      </p>
                      <div className="flex items-center justify-center w-full p-2 px-5 rounded-lg h-1/2 bg-black/5">
                        <p className="text-sm">1</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <p className="w-full text-xs font-medium text-center uppercase ">
                        xl
                      </p>
                      <div className="flex items-center justify-center w-full p-2 px-5 rounded-lg h-1/2 bg-black/5">
                        <p className="text-sm">1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[5%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          {!verMas && products.length > 8 && (
            <div
              className="flex flex-col items-center w-full mb-20 cursor-pointer"
              onClick={() => setVerMas(true)}
            >
              <p className="text-xs font-semibold">VER MÁS</p>
            </div>
          )}
        </>
      )}

      <Footer bg={'#f1f1f1'} color={'black'} />
    </div>
  )
}

export default Inventary
