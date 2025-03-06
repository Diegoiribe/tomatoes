import Footer from '../../Footer'
import HeatMap from './HeatMap'

const Ingresos = () => {
  return (
    <div className="w-full pl-52 ">
      <div className='w-full flex gap-8 justify-between'>
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

        <div className="w-[25%]  mr-8 flex flex-col gap-20 mb-8 ">
          <div className="w-full ">
            <div className="w-full h-72 rounded-2xl flex flex-col gap-1">
              <div className='flex gap-3 px-2 py-1 rounded-full'>
                <p className='text-white overflow-hidden w-1/5'>Item</p>
                <div className='flex w-4/5 gap'>
                  <p className='text-sm overflow-hidden w-1/3'>Name</p>
                  <p className='text-sm overflow-hidden w-1/3'>Sale</p>
                  <p className='text-sm overflow-hidden w-1/3'>Amount</p>
                </div>
              </div>
              <div className='w-full h-1/3  flex gap-1 items-center'>
                <div className='text-3xl w-1/5 rounded-xl' style={{
                }}>🇲🇽</div>
                <div className='w-4/5 flex gap-4'>
                  <p className='w-1/3 text-xs'>Mexico</p>
                  <p className='w-1/3 text-xs'>$10,000</p>
                  <p className='w-1/3 text-xs'>10</p>
                </div>
              </div>
              <div className='w-full h-1/3  flex gap-1 items-center'>
                <div className='text-3xl w-1/5 rounded-xl' style={{
                }}>🇲🇽</div>
                <div className='w-4/5 flex gap-4'>
                  <p className='w-1/3 text-xs'>Mexico</p>
                  <p className='w-1/3 text-xs'>$10,000</p>
                  <p className='w-1/3 text-xs'>10</p>
                </div>
              </div>
              <div className='w-full h-1/3  flex gap-1 items-center'>
                <div className='text-3xl w-1/5 rounded-xl' style={{
                }}>🇲🇽</div>
                <div className='w-4/5 flex gap-4'>
                  <p className='w-1/3 text-xs'>Mexico</p>
                  <p className='w-1/3 text-xs'>$10,000</p>
                  <p className='w-1/3 text-xs'>10</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className=" overflow-hidden font-medium">Items most sold</h1>
              <p className="text-sm text-neutral-500">Feb 2, 2025</p>
            </div>
          </div>
          <div className="w-full">
            <p className='text-5xl overflow-hidden items-center'>10 <span className='text-2xl'>items</span></p>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className=" overflow-hidden font-medium">Sales for day</h1>
              <p className="text-sm text-neutral-500">Feb 2, 2025</p>
            </div>
          </div>
          <div className="w-full ">
            <p className='text-5xl overflow-hidden'>$2,509.58</p>
            <div className="flex flex-col gap-1 mt-2">
              <h1 className=" overflow-hidden font-medium">Sales for day</h1>
              <p className="text-sm text-neutral-500">Feb 2, 2025</p>
            </div>
          </div>
        </div>
      </div>
      <Footer bg={"#f1f1f1"} color={"black"} />
    </div>
  )
}

export default Ingresos
