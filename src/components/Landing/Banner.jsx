import { useRef } from 'react'

const Banner = () => {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -window.innerWidth * 0.8,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: window.innerWidth * 0.8,
      behavior: 'smooth'
    })
  }

  return (
    <div className="mb-52">
      <h1 className="sm:text-2xl md:text-5xl font-medium sm:ml-5 md:ml-28 md:mt-14">Get to know Users</h1>
      {/* Contenedor visible */}
      <div className="overflow-hidden ">
        {/* Carrusel deslizable */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth py-14"
        >
          {/* Puedes mapear esto desde un array si quieres */}
          <div
            className="sm:w-[80vw] md:w-[40vw] sm:h-[60vh] sm:ml-5 md:ml-28 md:h-[60vh] sm:rounded-xl md:rounded-3xl  flex-shrink-0 shadow-2xl  "
            style={{
              backgroundImage:
                "url('https://static.massimodutti.net/assets/public/027a/67b4/1c9948369fa1/cf64af40fa01/wbanoapp3/wbanoapp3.jpg?ts=1741715570688&w=850')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='w-full h-full sm:px-5 sm:py-7 md:px-10 md:py-14 md:rounded-3xl sm:rounded-xl hover:bg-black/10 cursor-pointer text-transparent hover:text-white flex flex-col justify-between' >
              <p className='sm:text-3xl md:text-4xl font-medium'>ZAYCA</p>
              <p className='sm:text-sm md:text-xl font-medium'>Joyas que no solo se ven, se sienten.<br />
                Luce el alma. Brilla diferente.<br />
                Cada pieza, una historia eterna.</p>
            </div>
          </div>
          <div
            className="sm:w-[80vw] md:w-[40vw] sm:h-[60vh]  md:h-[60vh] sm:rounded-xl md:rounded-3xl  flex-shrink-0 shadow-2xl  "
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-50-whyswitch-202209_GEO_MX?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1661531245825')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='group w-full h-full sm:px-5 sm:py-7 md:px-10 md:py-14 md:rounded-3xl sm:rounded-xl bg-black/10 cursor-pointer flex flex-col gap-5'>
              <p className='sm:text-3xl md:text-4xl font-medium text-transparent group-hover:text-black '>Shopphone</p>
              <p className='sm:text-sm md:text-xl font-medium text-transparent group-hover:text-neutral-500'>
                Donde Apple cobra vida.<br />
                Tecnología, diseño y poder en tus manos.<br />
                Aquí, el futuro es ahora.
              </p>
            </div>
          </div>
          <div
            className="sm:w-[80vw] md:w-[40vw] sm:h-[60vh]  md:h-[60vh] sm:rounded-xl md:rounded-3xl  flex-shrink-0 shadow-2xl  "
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/2f/8c/d0/2f8cd04816703a4a406bb7e953daa6e1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='group w-full h-full sm:px-5 sm:py-7 md:px-10 md:py-14 md:rounded-3xl sm:rounded-xl hover:bg-black/20 cursor-pointer flex flex-col justify-around'>

              <p className='sm:text-4xl md:text-6xl font-bold text-transparent group-hover:text-red-100'>
                Tu rostro, tu lienzo.<br />

                Maquillaje que no cubre, revela.<br />
                Aquí nace tu brillo.
              </p>
              <p className='text-2xl font-medium text-transparent group-hover:text-white text-end '>Makeup</p>
            </div>
          </div>
          <div className="w-[4px]  sm:h-[60vh] md:h-[60vh] md:rounded-3xl  flex-shrink-0"></div>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-end gap-3 sm:mr-5 md:mr-28">
        <button onClick={scrollLeft}>
          <svg
            className="cursor-pointer size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button onClick={scrollRight}>
          <svg
            className="cursor-pointer size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner
