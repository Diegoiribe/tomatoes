import { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { ProductoPrincipal } from '../data/db'

const NavBarActive = ({ filtros, setFiltros }) => {
  const [categorias, setCategorias] = useState([]) // Guardará categorías únicas
  const [etiquetas, setEtiquetas] = useState([]) // Guardará etiquetas únicas
  const [resultados, setResultados] = useState([]) // Etiquetas filtradas por búsqueda

  // Extraer categorías y etiquetas únicas de la DB
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(ProductoPrincipal.map((producto) => producto.category))
    ]
    const uniqueTags = [
      ...new Set(ProductoPrincipal.flatMap((producto) => producto.etiquetas))
    ]

    setCategorias(uniqueCategories)
    setEtiquetas(uniqueTags)
  }, [])

  // Configuración de Fuse.js para buscar coincidencias en etiquetas
  const fuse = new Fuse(etiquetas, { threshold: 0.3 })

  const handleSearchChange = (event) => {
    const inputValue = event.target.value
    setFiltros((prev) => ({
      ...prev,
      categoria: '', // Reiniciar la categoría
      busqueda: inputValue
    }))

    if (inputValue.trim() === '') {
      setResultados([]) // Limpiar resultados cuando no hay input
      return
    }

    // Buscar todas las etiquetas que coincidan con la búsqueda del usuario
    const result = fuse.search(inputValue).map((r) => r.item)

    // Evitar etiquetas repetidas
    setResultados([...new Set(result)])
  }

  return (
    <nav className="flex flex-col gap-3 px-5 pt-[90px]">
      {/* Selección de Categorías */}
      <div className="flex items-center gap-5">
        <div className="flex items-center py-2 px-3 bg-[#F9F9F9] rounded-full">
          <select
            id="options"
            className="block appearance-none w-64 text-[#B5B5B5] pr-8 leading-tight focus:outline-none cursor-pointer font-semibold text-sm"
            value={filtros.categoria}
            onChange={(e) =>
              setFiltros((prev) => ({ ...prev, categoria: e.target.value }))
            }
            style={{ touchAction: 'manipulation' }}
          >
            <option value="" disabled>
              Categories
            </option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
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

      {/* Input de búsqueda de etiquetas */}
      <div className="border-b-[1px] inline-flex border-black items-center justify-between cursor-pointer w-full mt-5">
        <input
          type="text"
          className="w-full px-3 py-2 text-xs uppercase focus:outline-none"
          placeholder="What are you looking for?"
          value={filtros.busqueda}
          onChange={handleSearchChange}
          style={{ touchAction: 'manipulation' }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
          onClick={() => setFiltros((prev) => ({ ...prev, busqueda: '' }))}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      {/* Etiquetas relacionadas con la búsqueda */}
      <div className="flex flex-wrap gap-2 ">
        {resultados.length > 0 &&
          resultados.map((tag) => (
            <span
              key={tag}
              className="px-3  text-xs uppercase rounded-full cursor-pointer text-[#9e9e9e] "
              onClick={() => setFiltros((prev) => ({ ...prev, busqueda: tag }))}
            >
              {tag}
            </span>
          ))}
      </div>
    </nav>
  )
}

export default NavBarActive
