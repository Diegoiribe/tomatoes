const AdminMenu = () => {
  return (
    <div className="fixed flex flex-col items-start justify-center h-screen px-8 w-52">
      <div className="flex flex-col w-full gap-1">
        <div className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5">
          <p className="text-sm">Ingresos</p>
        </div>
        <div className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5">
          <p className="text-sm">Pedidos</p>
        </div>
        <div className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5">
          <p className="text-sm">Inventario</p>
        </div>
        <div className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5">
          <p className="text-sm">Sitio Web</p>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
