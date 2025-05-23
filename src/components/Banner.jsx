import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getData } from '../api/http'

const Banner = () => {
  const [dataHome, setDataHome] = useState(null)

  // 🔹 Cargar datos de la API al iniciar la app

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('/store')
        console.log('Data :', data)
        setDataHome(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {dataHome && (
        <div
          className="sm:h-[100vh] md:h-[89vh] md:mb-5 md:mx-5 md:rounded-3xl px-10 py-14 overflow-hidden md:mt-[72px] sm:bg-center md:bg-top"
          style={{
            // backgroundImage:
            //   "url('https://static.massimodutti.net/assets/public/3411/d4f0/7b774b1b840a/5600b054c1a6/wnaturaltonedesktop6/wnaturaltonedesktop6.jpg?ts=1738760905703&w=1440')",
            backgroundImage: `url(${dataHome.designData.mainBanner})`,
            backgroundSize: 'cover' // Opcional para que la imagen cubra todo el fondo
          }}
        >
          <div className="justify-between sm:hidden md:flex ">
            <div className="max-w-md ">
              <p className="overflow-hidden text-white text-7xl font-extralight">
                {dataHome.designData.subtitle}
              </p>
              <div className="flex gap-2 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="text-white size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>

                <p className="text-lg font-thin text-white">
                  {dataHome.designData.slogan}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <div className="p-2 bg-white rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="6"
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="p-2 bg-white rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="6"
                    stroke="currentColor"
                    className="size-3"
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
          <div className="justify-end mt-20 sm:hidden md:flex">
            <p className="font-thin text-white max-w-44">
              {dataHome.designData.about}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:mt-20 sm:mt-96">
            <div className="flex items-center mb-5">
              <Link
                to={'/cat'}
                className="px-10 py-3 text-sm font-bold bg-white rounded-full"
              >
                Start shopping
              </Link>
              <Link className="sm:hidden md:block" to={'/cat'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="px-3 py-3 text-black bg-white rounded-full size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
            <Link to={'/cat'} className="font-thin text-white">
              Top collections
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
