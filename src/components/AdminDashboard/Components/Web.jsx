import Footer from '../../Footer'

const Web = () => {
  return (
    <div className="w-full pl-52">
      <div className="h-screen">
        <div className="flex justify-between pr-10 mb-5 overflow-hidden">
          <p className="text-4xl font-semibold">Banner</p>
          <div className="px-5 py-2 overflow-hidden text-sm text-white bg-black rounded-lg cursor-pointer">
            Cargar foto
          </div>
        </div>

        <div className="flex gap-3 mb-20">
          <div className="p-[1px] border-4 border-white hover:border-green-700 rounded-2xl cursor-pointer">
            <div className="bg-black w-96 h-72 rounded-2xl"></div>
          </div>
          <div className="p-[1px] border-4 border-green-700 rounded-2xl cursor-pointer">
            <div className="bg-black w-96 h-72 rounded-2xl"></div>
          </div>
        </div>
      </div>
      <Footer bg={'#f1f1f1'} color={'black'} />
    </div>
  )
}

export default Web
