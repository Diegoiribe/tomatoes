const Price = () => {
  return (
    <div className="bg-[#FAFAFA] px-5 py-14">
      <h1 className="text-5xl font-medium mb-14">Explore the lineup.</h1>
      <div className="inline-flex gap-2 bg-white rounded-full">
        <div className="flex items-center px-6 py-2 bg-black rounded-full">
          <p className="font-light text-white">Free</p>
        </div>
        <div className="flex items-center px-6 py-2 bg-white rounded-full">
          <p className="font-light">Plus</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-20 my-18">
        <div className="">
          <div
            className="h-[170px] w-[324px]"
            style={{
              backgroundImage:
                "url('https://www.apple.com/v/mac/home/cg/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <p className="items-center text-2xl w-[324px] text-center mt-5 font-light">
            SPAZYO
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <p className="font-medium text-8xl">FREE</p>
          <div className="flex gap-5 mt-2">
            <p className="flex items-center px-6 py-2 font-light text-white bg-blue-500 rounded-full">
              Learn more
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="py-2 pl-6 font-light text-blue-500">Buy</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mt-[.5px] text-blue-500 size-5"
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
    </div>
  )
}

export default Price
