import Footer from '../../Footer'
import HeatMap from './HeatMap'
import Graph from './Graph'

const Ingresos = () => {
  return (
    <div className="w-full pl-52 ">
      <div className="flex flex-col items-center h-screen overflow-hidden">
        <div className="flex justify-between w-full gap-8">
          <div className=" h-full w-[75%]">
            <div className="w-full overflow-hidden rounded-2xl flex items-center justify-center bg-[#F3F9D1] h-[450px]">
              <Graph />
            </div>
            <div className="flex flex-col gap-4 mt-3">
              <h1 className="py-1 overflow-hidden text-6xl ">
                Weekly Sales Chart
              </h1>
              <p className="text-sm text-neutral-500">Feb 2, 2025</p>
            </div>
          </div>

          <div className="w-[25%] mr-8 flex flex-col gap-15 mb-8 ">
            <div className="w-full ">
              <div className="w-full overflow-hidden rounded-2xl">
                <HeatMap />
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <h1 className="overflow-hidden font-medium ">
                  Heat map presentation
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
