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
    <div className="md:mb-52">
      <h1 className="text-5xl font-medium ml-28 my-14">Get to know Users</h1>
      {/* Contenedor visible */}
      <div className="overflow-hidden ">
        {/* Carrusel deslizable */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth "
        >
          {/* Puedes mapear esto desde un array si quieres */}
          <div
            className="w-[40vw] sm:h-[100vh] ml-28 md:h-[60vh] md:rounded-3xl px-10 py-14 bg-red-600 flex-shrink-0"
            style={{
              backgroundImage:
                "url('https://static.massimodutti.net/assets/public/027a/67b4/1c9948369fa1/cf64af40fa01/wbanoapp3/wbanoapp3.jpg?ts=1741715570688&w=850')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div
            className="w-[40vw] sm:h-[100vh] md:h-[60vh] md:rounded-3xl px-10 py-14 bg-red-300 flex-shrink-0"
            style={{
              backgroundImage:
                "url('https://static.massimodutti.net/assets/public/cd9e/68c0/587d4765b171/02ae7f18f5fd/06669865717-o6/06669865717-o6.jpg?ts=1744199415929&w=1440')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div
            className="w-[40vw]  sm:h-[100vh] md:h-[60vh] md:rounded-3xl px-10 py-14 bg-red-100 flex-shrink-0"
            style={{
              backgroundImage:
                "url('https://static.massimodutti.net/assets/public/8b48/b79d/ff2a4822b8ac/ff2d2f5c488b/00000111800BAXS-o3/00000111800BAXS-o3.jpg?ts=1744215596518&w=850')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="w-[4px]  sm:h-[100vh] md:h-[60vh] md:rounded-3xl  flex-shrink-0"></div>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-end gap-3 mt-5 mr-28">
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
