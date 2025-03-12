import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div
      className="h-[89vh] mb-5 mx-5 rounded-3xl px-10 py-14 overflow-hidden mt-[72px]"
      style={{
        backgroundImage:
          "url('https://static.massimodutti.net/assets/public/3411/d4f0/7b774b1b840a/5600b054c1a6/wnaturaltonedesktop6/wnaturaltonedesktop6.jpg?ts=1738760905703&w=1440')",
        backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
        backgroundPosition: 'center' // Opcional para centrar la imagen
      }}
    >
      <div className="flex justify-between ">
        <div className="max-w-md ">
          <p className="overflow-hidden text-white text-7xl font-extralight">
            We are digital meets fashions
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
              Show your vistore pride, get high-quality swag directly from the
              ystore foundation
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
      <div className="flex justify-end mt-20">
        <p className="font-thin text-white max-w-44">
          Transformin into stylisn y functional places
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex items-center mb-5">
          <Link to={"/cat"} className="px-10 py-3 text-sm font-bold bg-white rounded-full">
            Start shopping
          </Link>
          <Link to={"/cat"}>
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
        <Link to={"/cat"} className="font-thin text-white">Top collections</Link>
      </div>
    </div>
  )
}

export default Banner
