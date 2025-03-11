import Footer from '../../Footer'

const Inventary = () => {
  const products = Array.from({ length: 4 }, (_, i) => i + 1)

  return (
    <div className="flex flex-col items-center w-full pl-52">
      <div className="flex justify-between w-full px-5 py-2 mb-5 mr-16 rounded-2xl">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex items-center justify-center w-8 h-8 bg-black border rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-white size-5"
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
            className="h-full p-2 text-sm bg-white border rounded-lg w-52 focus:outline-none"
            placeholder="Buscar"
          />
          <input
            type="text"
            className="h-full p-2 text-sm bg-white border rounded-lg w-52 focus:outline-none"
            placeholder="Buscar"
          />
        </div>
      </div>
      <div className="w-[70%] flex flex-col gap-3 pr-10 ">
        {products.map((item) => (
          <div key={item} className="flex w-full p-3 h-36 rounded-2xl">
            <div
              className="w-[17.5%] rounded-2xl mr-3"
              style={{
                backgroundImage: `url('https://static.massimodutti.net/assets/public/10ee/5427/746947f1a696/866cb37a36b9/05679701567-o1/05679701567-o1.jpg?ts=1738592246881&w=1024')`, // Corregido: usas item.url aquí
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="w-[37.5%]">
              <p className="text-sm">ZAPATO TACON PUNTA REDONDA</p>
              <div>
                <div></div>
              </div>
              <p className="text-sm uppercase">mex $2,765</p>
            </div>
            <div className="w-[40%] flex gap-2">
              <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                <p className="w-full text-sm text-center uppercase font-extralight">
                  s
                </p>
                <div className="flex items-center justify-center w-full rounded-lg h-1/2 bg-black/5">
                  <p className="text-sm">6</p>
                </div>
              </div>
              <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                <p className="w-full text-sm text-center uppercase font-extralight">
                  m
                </p>
                <div className="flex items-center justify-center w-full rounded-lg h-1/2 bg-black/5">
                  <p className="text-sm">2</p>
                </div>
              </div>
              <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                <p className="w-full text-sm text-center uppercase font-extralight">
                  l
                </p>
                <div className="flex items-center justify-center w-full rounded-lg h-1/2 bg-black/5">
                  <p className="text-sm">1</p>
                </div>
              </div>
              <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                <p className="w-full text-sm text-center uppercase font-extralight">
                  xl
                </p>
                <div className="flex items-center justify-center w-full rounded-lg h-1/2 bg-black/5">
                  <p className="text-sm">1</p>
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
      <div className="flex flex-col items-center w-full mb-20 cursor-pointer">
        <p className="text-xs font-semibold">VER MAS</p>
      </div>

      <Footer bg={'#f1f1f1'} color={'black'} />
    </div>
  )
}

export default Inventary
