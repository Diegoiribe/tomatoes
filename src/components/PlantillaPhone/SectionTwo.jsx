import { useRef } from 'react'

const SectionTwo = () => {
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

  const Products = [
    {
      id: 1,
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MDGR4?wid=266&hei=291&fmt=png-alpha&.v=1740164625404',
      name: 'iPhone 16 Pro',
      price: 'Desde $25,999 de contado o 18 MSI desde $1,444.39.*'
    },
    {
      id: 2,
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=266&hei=291&fmt=png-alpha&.v=1723930332796',
      name: 'iPhone 16',
      price: 'Desde $19,999 de contado o 18 MSI desde $1,111.06.*'
    },
    {
      id: 3,
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MDGF4?wid=266&hei=291&fmt=png-alpha&.v=1744045053171',
      name: 'iPhone 16e',
      price: 'Desde $14,999 de contado o 18 MSI desde $833.28.*'
    },
    {
      id: 4,
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA6X4?wid=266&hei=291&fmt=png-alpha&.v=1723573541193',
      name: 'iPhone 15',
      price: 'Desde $17,499 de contado o 18 MSI desde $972.17.*'
    },
    {
      id: 5,
      url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_MX?wid=266&hei=291&fmt=png-alpha&.v=1542406403259',
      name: 'iPhone 15',
      price: 'Desde $17,499 de contado o 18 MSI desde $972.17.*'
    }
  ]

  return (
    <div className="flex flex-col gap-3 mb-52">
      <h1 className="pl-20 ml-1 text-5xl font-medium">Accesorios</h1>
      <p className="pl-20 mb-3 ml-1 text-lg font-light text-neutral-500">
        El complemento perfecto
      </p>
      <div className="px-20">
        <video
          src="https://www.apple.com/105/media/us/airpods-4/2024/62a51629-9227-413a-98ae-ba9e09984c00/anim/hero-airpods/xlarge.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full object-cover h-[600px] rounded-3xl"
        />
      </div>
      <div className="overflow-hidden ">
        <h1 className="ml-20 text-5xl font-medium pt-14">
          Conoce a la familia.
        </h1>
        {/* Carrusel deslizable */}
        <div
          ref={scrollRef}
          className="flex gap-4 pl-20 overflow-x-hidden scroll-smooth py-7"
        >
          {Products.map((item) => (
            <div
              key={item.id}
              className="w-[22.5vw] rounded-3xl flex-shrink-0 p-5"
            >
              <img
                src={item.url}
                alt=""
                className="object-contain w-full max-h-52"
              />
              <p className="mt-5 text-2xl font-medium text-center">
                {item.name}
              </p>
              <p className="mx-auto mt-3 text-sm text-center max-w-46">
                {item.price}
              </p>
              <div className="flex items-center justify-center gap-5 pt-7">
                <p className="px-4 py-2 text-xs font-light text-white bg-blue-500 rounded-full cursor-pointer">
                  Mas informacion
                </p>
                <p className="text-xs font-light text-blue-500 cursor-pointer">
                  Comprar
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-black/20 mx-20"></div>
        <div className="flex items-center justify-end gap-2 mt-5 mr-20">
          <div
            className="p-2 rounded-full cursor-pointer bg-black/10"
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="size-4 text-neutral-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            className="p-2 rounded-full cursor-pointer bg-black/10"
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="size-4 text-neutral-500"
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
  )
}

export default SectionTwo
