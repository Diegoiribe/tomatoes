import { useRef, useState } from 'react'
import Footer from '../../Landing/Footer'
import { ProductoVista } from '../../../data/db'

const Inventary = ({ filtros, setFiltros }) => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1)
  const scrollRef = useRef(null)
  const [open, setOpen] = useState({})
  const orders = ProductoVista

  const productosFiltrados = orders.filter((p) => {
    const matchBusqueda =
      !filtros.busqueda ||
      p.name.toLowerCase().includes(filtros.busqueda.toLowerCase())

    return matchBusqueda
  })

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -window.innerWidth * 0.4,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: window.innerWidth * 0.4,
      behavior: 'smooth'
    })
  }

  const toggleItem = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index]
    }))
  }
  return (
    <div className="mt-20 pl-52">
      <div className="mb-50">
        <div className="flex justify-between w-full">
          <p className=" text-lg font-light">[10]</p>

          <div className="flex flex-row-reverse items-center gap-2 pr-10">
            <input
              type="text"
              className="w-full p-2 px-2 text-sm text-black  focus:outline-none border-b-[1px] "
              placeholder="Buscar"
              value={filtros.busqueda}
              onChange={(e) =>
                setFiltros((prev) => ({ ...prev, busqueda: e.target.value }))
              }
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className=" size-6  mt-1"
              onClick={() => setIsOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div>
          {productosFiltrados.map((item, index) => (
            <div key={index} className="mt-15 ">
              <div className="flex items-center justify-between pr-10">
                <p className="text-2xl">{item.name}</p>

                <div className="flex items-center gap-2">
                  <p className="mt-1 text-xs font-medium text-neutral-400">
                    Tue 8 May 2025
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-red-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex gap-10 items-center w-full pr-10 mt-3 ">
                <div className="w-full">
                  <div className="flex justify-between w-full  ">
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Description
                      </p>
                      <p className="text-sm font-light">{item.description}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Footer
                      </p>
                      <p className="text-sm font-light">{item.footer}</p>
                    </div>
                  </div>

                  <div className="flex justify-between w-full  mt-3">
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Color:
                      </p>
                      <p className="text-sm font-light ">Black, White, Blue</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Sizes:
                      </p>
                      <p className="text-sm font-light ">S, M, L</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Tags:
                      </p>
                      <p className="text-sm font-light flex-wrap max-w-48 ">
                        Black, Tennis, Deportivo, Corto, Pantalon
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Category:
                      </p>
                      <p className="text-sm font-light ">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-neutral-500">
                        Price:
                      </p>
                      <p className="text-sm font-light ">MXN $2,600.00</p>
                    </div>
                  </div>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer size-6"
                  onClick={() => toggleItem(index)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {open[index] && (
                <div>
                  <div
                    className="flex gap-5 p-10 overflow-x-hidden scroll-smooth "
                    ref={scrollRef}
                  >
                    {arr.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="relative cursor-pointer rounded-2xl group"
                        >
                          <div
                            className="w-56 transition-all duration-300 bg-top bg-cover h-74 rounded-2xl"
                            style={{
                              backgroundImage: `url(https://static.massimodutti.net/assets/public/a78c/1493/32674bfe95e3/c35c634607ac/05679701567-o6/05679701567-o6.jpg?ts=1738679506740&w=1024)`
                            }}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex justify-between px-10">
                    <div className="flex gap-5 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="cursor-pointer size-6"
                        onClick={scrollLeft}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="cursor-pointer size-6"
                        onClick={scrollRight}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex gap-3">
                      <p className="text-lg font-light">PRICE: </p>
                      <p className="text-lg font-light">MXN $2,600.00</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer bg={'#f1f1f1'} color={'black'} />
    </div>
  )
}

export default Inventary
