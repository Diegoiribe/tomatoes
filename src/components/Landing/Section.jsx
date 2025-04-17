const Section = () => {
  return (
    <div className="mx-28 mb-52">
      <div className="flex mb-10">
        <div className="max-w-[55%] flex flex-col gap-3">
          <p className="text-5xl font-medium max-w-[450px]">
            <span className="block">Your business.</span>
            <span className="block">Your space.</span>
            <span className="block">Ready in seconds.</span>
          </p>
          <p className="text-lg font-light text-neutral-500">
            No more complicated designs. With Spazyo, your store is ready in
            seconds — no coding, no monthly fees, just ready to sell.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-lg font-light text-blue-500">
              Step into our world.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-blue-500 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <video
        className="rounded-3xl"
        src="https://www.notion.com/front-static/pages/product/super-duper/organize/organize-screen-desktop.mp4"
      ></video>
    </div>
  )
}

export default Section
