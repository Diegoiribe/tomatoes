import HeatMap from './HeatMap'

const Ingresos = () => {
  return (
    <div className="flex justify-between w-full gap-4 pl-52 ">
      <div className=" w-[75%]">
        <div className="w-full overflow-hidden rounded-2xl">
          <HeatMap />
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <h1 className="py-1 overflow-hidden text-6xl ">
            Heat map presentation
          </h1>
          <p className="text-sm text-neutral-500">Feb 2, 2025</p>
        </div>
      </div>

      <div className="w-[25%]  mr-8 flex flex-col gap-20 mb-20">
        <div className="w-full">
          <div className="w-full bg-black h-72 rounded-2xl"></div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="py-1 overflow-hidden font-medium">Sales for day</h1>
            <p className="text-sm text-neutral-500">Feb 2, 2025</p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-black h-72 rounded-2xl"></div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="py-1 overflow-hidden font-medium">Sales for day</h1>
            <p className="text-sm text-neutral-500">Feb 2, 2025</p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full bg-black h-72 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="py-1 overflow-hidden font-medium">Sales for day</h1>
            <p className="text-sm text-neutral-500">Feb 2, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingresos
