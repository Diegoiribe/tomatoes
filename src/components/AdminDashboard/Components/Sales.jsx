import { useRef, useState } from 'react'
import Footer from '../../Landing/Footer'

const Sales = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1)
  const scrollRef = useRef(null)
  const [open, setOpen] = useState(false)
  const orders = Array.from({ length: 10 }, (_, i) => i + 1)

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
  return (
    <div className="mt-20 pl-52">
      <div className="mb-50">
        <p className="-mb-10 text-lg font-light">[10]</p>
        <div>
          {orders.map((item, index) => (
            <div key={index} className="mt-26 ">
              <div className="flex items-center justify-between pr-10">
                <p className="text-2xl">Sergio Iribe</p>

                <div className="flex items-center gap-2">
                  <p className="mt-1 text-xs font-medium text-neutral-400">
                    Tue 6 May 2025
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-green-600 size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between w-full pr-10 mt-3 ">
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    Country
                  </p>
                  <p className="text-sm font-light">Mexico</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    State
                  </p>
                  <p className="text-sm font-light">Sinaloa</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    City
                  </p>
                  <p className="text-sm font-light">Culiacan</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    Address
                  </p>
                  <p className="text-sm font-light">Sens 2640, MonteCarlo</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    Postal Code
                  </p>
                  <p className="text-sm font-light">80054</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    Phone Number
                  </p>
                  <p className="text-sm font-light">+52 66-74-50-70-62</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-neutral-500">
                    Email Address
                  </p>
                  <p className="text-sm font-light">sergio@hotmail.com</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="cursor-pointer size-6"
                  onClick={() => setOpen(!open)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {open && (
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
                          <div className="absolute top-0 left-0 w-full h-full p-5 transition-opacity duration-300 opacity-0 bg-neutral-100 rounded-xl group-hover:opacity-100">
                            <div className="flex flex-col items-center justify-between h-full">
                              <div>
                                <p className="text-[10px] font-medium text-neutral-500">
                                  Name
                                </p>
                                <p className="text-lg font-light text-center ">
                                  Jersey punto cuello polo 100% lino
                                </p>
                              </div>
                              <div className="flex justify-center gap-5 ">
                                <div>
                                  <p className="text-[10px] font-medium text-neutral-500">
                                    Color
                                  </p>
                                  <p className="text-lg font-light">Black</p>
                                </div>
                                <div>
                                  <p className="text-[10px] font-medium text-neutral-500">
                                    Size
                                  </p>
                                  <p className="text-lg font-light">M</p>
                                </div>
                                <div>
                                  <p className="text-[10px] font-medium text-neutral-500">
                                    Count
                                  </p>
                                  <p className="text-lg font-light">5</p>
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] font-medium text-neutral-500">
                                  Price
                                </p>
                                <p className="text-lg font-light">
                                  MXN $2,650.00
                                </p>
                              </div>
                            </div>
                          </div>
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
                      <p className="text-lg font-light">TOTAL: </p>
                      <p className="text-lg font-light">MXN $13,256.00</p>
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

export default Sales
