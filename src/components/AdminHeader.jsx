const AdminHeader = () => {
  return (
    <div className="fixed flex items-center justify-between z-10 w-full px-8 py-5">
      <h1 className="text-2xl font-bold ">ZAYCA</h1>
      <div className=" rounded-full cursor-pointer bg-white">
        <p className="px-4 py-2 text-sm bg-black/5 hover:bg-black/8">Exit</p>
      </div>
    </div>
  )
}

export default AdminHeader
