import { useState } from 'react'

const InventaryModal = ({ setIsOpen }) => {
  const [producto, setProducto] = useState([
    {
      id: 1,
      name: 'Camiseta de algodón',
      price: 299.99,
      description: 'Camiseta de algodón para hombre',
      colors: ['white', 'black', 'gray'],
      sizes: ['S', 'M', 'L', 'XL'],
      photoPrimary:
        'https://static.zara.net/assets/public/6c5d/fabe/647d43edaeaf/1536c7043a3b/01971156710-e1/01971156710-e1.jpg?ts=1738841063717&w=563',
      photoModel:
        'https://static.zara.net/assets/public/d6cd/f364/31dd4e7cab63/c31d75e1cb39/01971156710-a4/01971156710-a4.jpg?ts=1739461428381&w=563',
      photos: [
        'https://static.zara.net/assets/public/b212/146b/96ac4e7c96f7/6c57a802ce93/01971156710-p/01971156710-p.jpg?ts=1739461428502&w=750',
        'https://static.zara.net/assets/public/f591/0a34/f89d4b248541/84f36c708476/01971156710-a1/01971156710-a1.jpg?ts=1739461428530&w=850',
        'https://static.zara.net/assets/public/e36a/4d55/25a84a85b292/07049606bcdf/01971156710-a2/01971156710-a2.jpg?ts=1739461428922&w=563',
        'https://static.zara.net/assets/public/d6cd/f364/31dd4e7cab63/c31d75e1cb39/01971156710-a4/01971156710-a4.jpg?ts=1739461428381&w=563',
        'https://static.zara.net/assets/public/6c5d/fabe/647d43edaeaf/1536c7043a3b/01971156710-e1/01971156710-e1.jpg?ts=1738841063717&w=563',
        'https://static.zara.net/assets/public/5fe5/6cd0/e36a4c0c9231/cd0c34308dcf/01971156710-e2/01971156710-e2.jpg?ts=1738841065377&w=563'
      ],
      tags: ['Camiseta', 'Hombre', 'Algodón'],
      category: 'Ropa',
      footer: 'La modelo lleva la talla M y mide 178 cm.',
      stock: 10
    }
  ])

  const handleInputChange = (key, value) => {
    setProducto([{ ...producto[0], [key]: value }])
  }

  const addDynamicField = (key) => {
    setProducto([{ ...producto[0], [key]: [...producto[0][key], ''] }])
  }

  const updateDynamicField = (key, index, value) => {
    const updatedFields = [...producto[0][key]]
    updatedFields[index] = value
    setProducto([{ ...producto[0], [key]: updatedFields }])
  }

  const getTailwindDarkColor = (color) => {
    // Mapa de colores permitidos en Tailwind
    const colorPairs = {
      red: 'bg-red-900',
      orange: 'bg-orange-900',
      amber: 'bg-amber-900',
      yellow: 'bg-yellow-900',
      lime: 'bg-lime-900',
      emerald: 'bg-emerald-900',
      teal: 'bg-teal-900',
      cyan: 'bg-cyan-900',
      sky: 'bg-sky-900',
      indigo: 'bg-indigo-900',
      violet: 'bg-violet-900',
      fuchsia: 'bg-fuchsia-900',
      rose: 'bg-rose-900',
      slate: 'bg-slate-900',
      zinc: 'bg-zinc-900',
      neutral: 'bg-neutral-900',
      stone: 'bg-stone-900',
      blue: 'bg-blue-900',
      green: 'bg-green-900',
      purple: 'bg-purple-900',
      pink: 'bg-pink-900',
      black: 'bg-black', // Tailwind no tiene bg-black-900
      white: 'bg-white', // Para evitar que desaparezca
      gray: 'bg-gray-900'
    }

    // Devolver la clase correspondiente o gris oscuro por defecto
    return colorPairs[color.toLowerCase()] || 'bg-gray-900'
  }

  return (
    <div className="shadow-2xl w-[70%]  rounded-2xl p-5 flex flex-col gap-5 mb-20">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="cursor-pointer size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <p className="text-sm font-extralight">Resumen de pedido</p>
      </div>
      <div className="flex w-full gap-5 mb-10">
        {/* Vista previa */}
        <div className="w-1/2 my-10 rounded-2xl">
          <div className="w-full  md:h-[50vh] overflow-auto rounded-2xl">
            {producto.map((item) => (
              <div key={item.id} className="w-full h-auto">
                {item.photos.map((photo, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="w-full h-[70vh]"
                    style={{
                      backgroundImage: `url(${photo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top'
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full mt-10">
            {producto.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col gap-11 md:max-w-[350px]">
                  <div>
                    <div className="flex sm:justify-between md:justify-normal md:gap-10">
                      <p className="text-sm uppercase font-extralight">
                        {item.name}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="cursor-pointer size-4 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs ">
                      MXN{' '}
                      {item.price.toLocaleString('en-US', {
                        minimumFractionDigits: 2
                      })}
                    </p>
                  </div>
                  <p className="text-xs uppercase sm:hidden md:flex">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center w-full gap-5">
                    {item.colors.map((color, index) => (
                      <div
                        key={`${item.id}-${index}`} // Clave única combinando el ID del producto y el índice
                        className={`border-2  w-5 h-5 border-[#F9F9F9] cursor-pointer ${getTailwindDarkColor(
                          color
                        )} `}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-full gap-5">
                    {item.sizes.map((size, index) => (
                      <div
                        key={index}
                        className={` w-8 rounded-md text-center py-1 cursor-pointer`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-center text-neutral-500">
                    {item.footer}
                  </p>
                  <div className="flex flex-col gap-7">
                    <div className="flex items-center justify-center px-5 py-2 bg-black cursor-pointer rounded-xl">
                      <p className="text-sm font-medium text-white">
                        Añadir al carrito
                      </p>
                    </div>
                    <p className="text-xs font-medium uppercase cursor-pointer ">
                      Ver medidas
                    </p>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <p className="text-xs uppercase ">Comp. / cuidados </p>{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer">
                      <p className="text-xs uppercase ">
                        envios, compras y devoluciones
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer">
                      <p className="text-xs uppercase ">
                        Disponibilidad en tienda
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[1px] bg-neutral-200"></div>

        <div className="w-[40%] ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 mt-5"
          >
            <label className="text-sm font-extralight ">Informacion</label>
            <input
              type="text"
              name="name"
              value={producto[0].name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300 "
              placeholder="Name"
            />
            <input
              type="text"
              name="description"
              value={producto[0].description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Description"
            />
            <input
              type="text"
              name="footer"
              value={producto[0].footer}
              onChange={(e) => handleInputChange('footer', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Pie de pagina"
            />
            <input
              type="text"
              name="category"
              value={producto[0].category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Categoria"
            />

            {/* Colores */}
            <label className="text-sm font-extralight ">Colores</label>
            <div className="flex flex-col w-full gap-1 pl-4">
              {producto[0].colors.map((color, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Ingrese un color"
                  value={color}
                  onChange={(e) =>
                    updateDynamicField('colors', index, e.target.value)
                  }
                  className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                />
              ))}
              <button
                type="button"
                onClick={() => addDynamicField('colors')}
                className="flex items-center justify-center w-8 h-8 my-2 transition rounded-full cursor-pointer bg-black/5 hover:bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* Sizes */}
            <label className="text-sm font-extralight ">Tallas</label>
            <div className="flex flex-col w-full gap-1 pl-4">
              {producto[0].sizes.map((size, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Ingrese una talla"
                  value={size}
                  onChange={(e) =>
                    updateDynamicField('sizes', index, e.target.value)
                  }
                  className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                />
              ))}
              <button
                type="button"
                onClick={() => addDynamicField('sizes')}
                className="flex items-center justify-center w-8 h-8 my-2 transition rounded-full cursor-pointer bg-black/5 hover:bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* Photos */}
            <label className="text-sm font-extralight ">Fotos</label>

            <input
              type="text"
              name="photoPrimary"
              value={producto[0].photoPrimary}
              onChange={(e) =>
                handleInputChange('photoPrimary', e.target.value)
              }
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Foto principal"
            />
            <input
              type="text"
              name="photoModel"
              value={producto[0].photoModel}
              onChange={(e) => handleInputChange('photoModel', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Foto del producto"
            />
            <div className="flex flex-col w-full gap-1 pl-4">
              {producto[0].photos.map((photo, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Ingrese una foto"
                  value={photo}
                  onChange={(e) =>
                    updateDynamicField('photos', index, e.target.value)
                  }
                  className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                />
              ))}
              <button
                type="button"
                onClick={() => addDynamicField('photos')}
                className="flex items-center justify-center w-8 h-8 my-2 transition rounded-full cursor-pointer bg-black/5 hover:bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            {/* Etiquetas */}
            <label className="text-sm font-extralight ">Etiquetas</label>
            <div className="flex flex-col w-full gap-1 pl-4">
              {producto[0].tags.map((tags, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Ingrese una foto"
                  value={tags}
                  onChange={(e) =>
                    updateDynamicField('tags', index, e.target.value)
                  }
                  className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
                />
              ))}
              <button
                type="button"
                onClick={() => addDynamicField('tags')}
                className="flex items-center justify-center w-8 h-8 my-2 transition rounded-full cursor-pointer bg-black/5 hover:bg-black/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>

            <input
              type="number"
              name="stock"
              value={producto[0].stock}
              onChange={(e) => handleInputChange('stock', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Cantidad en stock"
            />
            <input
              type="number"
              name="price"
              value={producto[0].price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              required
              className="w-full p-3 text-sm border rounded-xl font-extralight focus:outline-none border-neutral-300"
              placeholder="Precio"
            />

            <button
              className="py-3 mt-5 text-sm text-center text-black cursor-pointer font-extralight bg-black/5 rounded-xl hover:bg-black hover:text-white"
              type="button"
            >
              Continue
            </button>
            <div className="text-sm text-center cursor-pointer font-extralight">
              Go back
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InventaryModal
