import Footer from '../../Footer'
import HeatMap from './HeatMap'

const Ingresos = () => {
  return (
    <div className="w-full pl-52 ">
      <div className="flex flex-col items-center h-screen overflow-hidden">
        <div className="flex justify-between w-full gap-8">
          <div className=" h-full w-[75%]">
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

          <div className="w-[25%]  mr-8 flex flex-col gap-20 mb-8 ">
            <div className="w-full ">
              <div className="flex flex-col w-full gap-1 h-72 rounded-2xl">
                <div className="flex gap-3 px-2 py-1 rounded-full">
                  <p className="w-1/5 overflow-hidden text-white">Item</p>
                  <div className="flex w-4/5 gap">
                    <p className="w-1/3 overflow-hidden text-sm">Name</p>
                    <p className="w-1/3 overflow-hidden text-sm">Sale</p>
                    <p className="w-1/3 overflow-hidden text-sm">Amount</p>
                  </div>
                </div>
                <div className="flex items-center w-full gap-1 h-1/3">
                  <div className="w-1/5 text-3xl rounded-xl" style={{}}>
                    🇲🇽
                  </div>
                  <div className="flex w-4/5 gap-4">
                    <p className="w-1/3 text-xs">Mexico</p>
                    <p className="w-1/3 text-xs">$10,000</p>
                    <p className="w-1/3 text-xs">10</p>
                  </div>
                </div>
                <div className="flex items-center w-full gap-1 h-1/3">
                  <div className="w-1/5 text-3xl rounded-xl" style={{}}>
                    🇲🇽
                  </div>
                  <div className="flex w-4/5 gap-4">
                    <p className="w-1/3 text-xs">Mexico</p>
                    <p className="w-1/3 text-xs">$10,000</p>
                    <p className="w-1/3 text-xs">10</p>
                  </div>
                </div>
                <div className="flex items-center w-full gap-1 h-1/3">
                  <div className="w-1/5 text-3xl rounded-xl" style={{}}>
                    🇲🇽
                  </div>
                  <div className="flex w-4/5 gap-4">
                    <p className="w-1/3 text-xs">Mexico</p>
                    <p className="w-1/3 text-xs">$10,000</p>
                    <p className="w-1/3 text-xs">10</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <h1 className="overflow-hidden font-medium ">
                  Items most sold
                </h1>
                <p className="text-sm text-neutral-500">Feb 2, 2025</p>
              </div>
            </div>
            <div className="w-full">
              <p className="items-center overflow-hidden text-5xl">
                10 <span className="text-2xl">items</span>
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <h1 className="overflow-hidden font-medium ">Sales for day</h1>
                <p className="text-sm text-neutral-500">Feb 2, 2025</p>
              </div>
            </div>
            <div className="w-full ">
              <p className="overflow-hidden text-5xl">$2,509.58</p>
              <div className="flex flex-col gap-1 mt-2">
                <h1 className="overflow-hidden font-medium ">Sales for day</h1>
                <p className="text-sm text-neutral-500">Feb 2, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer bg={'#f1f1f1'} color={'black'} />
    </div>
  )
}

export default Ingresos
