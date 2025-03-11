import PropTypes from 'prop-types'

const AdminMenu = ({ category, setCategory }) => {
  return (
    <div className="fixed flex flex-col items-start justify-center h-screen px-8 w-52">
      <div className="flex flex-col w-full gap-1">
        <div
          className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5"
          onClick={() => setCategory(1)}
          style={{
            backgroundColor:
              category === 1 &&
              'color-mix(in oklab, var(--color-black) 5%, transparent)'
          }}
        >
          <p className="text-sm">Ingresos</p>
        </div>
        <div
          className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5"
          onClick={() => setCategory(2)}
          style={{
            backgroundColor:
              category === 2 &&
              'color-mix(in oklab, var(--color-black) 5%, transparent)'
          }}
        >
          <p className="text-sm">Pedidos</p>
        </div>
        <div
          className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5"
          onClick={() => setCategory(3)}
          style={{
            backgroundColor:
              category === 3 &&
              'color-mix(in oklab, var(--color-black) 5%, transparent)'
          }}
        >
          <p className="text-sm">Inventario</p>
        </div>
        <div
          style={{
            backgroundColor:
              category === 4 &&
              'color-mix(in oklab, var(--color-black) 5%, transparent)'
          }}
          className="w-full p-2 rounded-lg cursor-pointer hover:bg-black/5"
          onClick={() => setCategory(4)}
        >
          <p className="text-sm">Sitio Web</p>
        </div>
      </div>
    </div>
  )
}

AdminMenu.propTypes = {
  category: PropTypes.number.isRequired, // Asegura que `color` es un string obligatorio
  setCategory: PropTypes.number.isRequired
}

export default AdminMenu
