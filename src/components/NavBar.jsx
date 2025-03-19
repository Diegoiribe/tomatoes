const NavBar = ({ filtros, setFiltros }) => {
  const handleChange = (event) => {
    setFiltros((prev) => ({
      ...prev,
      categoria: event.target.value // Se actualiza correctamente la categoría
    }))
  }

  return (
    <nav className="flex gap-3 px-5 pt-[90px] ">
      {/* Categories */}
      <div className="flex items-center gap-5">
        <div className="flex items-center py-2 px-3 bg-[#F9F9F9] rounded-full">
          <select
            id="options"
            className="block appearance-none w-64  text-[#B5B5B5]  pr-8  leading-tight focus:outline-none cursor-pointer font-semibold text-sm"
            value={filtros.categoria}
            onChange={handleChange}
          >
            <option value="" disabled>
              Categories
            </option>
            <option value="Jersey">Jersey</option>
            <option value="Dress">Dress</option>
            <option value="Pants">Pants</option>
          </select>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="6"
              stroke="currentColor"
              className="size-3 text-[#565656]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Search */}
      <div
        className="bg-[#F9F9F9] w-9 h-9 inline-flex rounded-full items-center justify-center cursor-pointer hover:bg-black/10 hover:text-[#565656]  text-[#9e9e9e]"
        onClick={() => setFiltros((prev) => ({ ...prev, active: true }))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="size-4 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </nav>
  )
}

export default NavBar
