const AdminHeader = () => {
  return (
    <div className="fixed flex items-center justify-between w-full px-8 py-5">
      <h1 className="text-2xl font-bold ">ZAYCA</h1>
      <div className="px-8 py-2 text-sm rounded-full cursor-pointer bg-black/5 hover:bg-red-300">
        Exit
      </div>
    </div>
  )
}

export default AdminHeader
