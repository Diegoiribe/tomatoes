import { useState } from "react";

const NavBar = ({ filtros, setFiltros }) => {
  const handleChange = (event) => {
    setFiltros((prev) => ({
      ...prev,
      categoria: event.target.value, // Se actualiza correctamente la categoría
    }));
  };

  return (
    <nav className="flex justify-between px-5 pt-[90px] ">
      {/* Categories */}
      <div className="flex gap-5 items-center">
        <div className="flex items-center py-2 px-3 bg-[#F9F9F9] rounded-full">
          <select
            id="options"
            className="block appearance-none w-40  text-[#B5B5B5]  pr-8  leading-tight focus:outline-none cursor-pointer font-semibold text-sm"
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

        {/* New Product */}
        <div className="flex items-center py-2 px-3 bg-[#F9F9F9] rounded-full">
          <select
            id="options"
            className="block appearance-none w-52  text-[#B5B5B5]  pr-8  leading-tight focus:outline-none cursor-pointer font-semibold text-sm"

            onChange={handleChange}
          >

            <option value="" disabled>
              New product
            </option>
            <option value="opcion1">2021 Season</option>
            <option value="opcion2">Winter Season</option>
            <option value="opcion3">Summer Season</option>
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
      <div className="bg-[#F9F9F9] px-3 py-2 inline-flex rounded-full items-center justify-center gap-64">
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none text-sm font-semibold text-[#9e9e9e]"
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="size-4 text-[#9e9e9e]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
