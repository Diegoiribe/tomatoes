import { Link } from 'react-router-dom'
import { useState } from 'react'

const Banner = () => {
  const [isTitle, setIsTitle] = useState('We are digital meets fashions')
  const [isDescription, setIsDescription] = useState(
    'Show your vistore pride, get high-quality swag directly from they store foundation'
  )
  const [isSlogan, setIsSlogan] = useState(
    'Transformin into stylisn y functional places'
  )
  const [isImage, setIsImage] = useState(
    'https://static.massimodutti.net/assets/public/027a/67b4/1c9948369fa1/cf64af40fa01/wbanoapp3/wbanoapp3.jpg?ts=1741715570688&w=1440'
  )
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="sm:h-[100vh] md:h-[80vh] md:mb-5 md:mx-5 md:rounded-3xl px-10 py-14 overflow-hidden  sm:bg-center md:bg-top "
      style={{
        // backgroundImage:
        //   "url('https://static.massimodutti.net/assets/public/3411/d4f0/7b774b1b840a/5600b054c1a6/wnaturaltonedesktop6/wnaturaltonedesktop6.jpg?ts=1738760905703&w=1440')",
        backgroundImage: `url(${isImage})`,
        backgroundSize: 'cover' // Opcional para que la imagen cubra todo el fondo
      }}
    >
      <div className="justify-between sm:hidden md:flex ">
        <div className="max-w-md">
          <textarea
            value={isTitle}
            onChange={(e) => setIsTitle(e.target.value)}
            className="max-w-md overflow-hidden text-white resize-none focus:outline-none text-7xl font-extralight"
          />

          <div className="flex items-center gap-2 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="text-white size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>

            <textarea
              value={isDescription}
              onChange={(e) => setIsDescription(e.target.value)}
              className="overflow-hidden text-lg font-thin text-white resize-none focus:outline-none w-96"
            />
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
        <textarea
          value={isSlogan}
          onChange={(e) => setIsSlogan(e.target.value)}
          className="overflow-hidden font-thin text-white resize-none w-44 focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-center justify-center md:mt-20 sm:mt-96">
        <div className="flex items-center mb-5">
          <div className="px-10 py-3 text-sm font-bold bg-white rounded-full">
            Start shopping
          </div>
          <div className="sm:hidden md:block">
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
          </div>
        </div>
        <div className="font-thin text-white">Top collections</div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-center w-10 h-10 mt-5 bg-green-600 rounded-full cursor-pointer hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="4"
            stroke="currentColor"
            className="mt-[1px] text-white size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        {isOpen ? (
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="URL"
              className="px-4 py-2 mt-8 text-xs font-medium text-black rounded-full w-44 bg-white/70 focus:outline-none"
              onChange={(e) => setIsImage(e.target.value)}
            />
            <div
              className="px-3 py-2 mt-8 text-white rounded-full cursor-pointer bg-black/70"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-xs font-medium">Save</p>
            </div>
          </div>
        ) : (
          <div
            className="px-4 py-2 mt-8 text-white bg-black rounded-full cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <p className="text-xs font-medium">Chage photo</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Banner
