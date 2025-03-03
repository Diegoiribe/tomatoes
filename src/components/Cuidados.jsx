import { useState } from 'react'

const Cuidados = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay oscuro cuando la sidebar está abierta */}
      {isOpen && (
        <div
          className="fixed inset-0 transition-opacity duration-300 bg-black/10"
          onClick={() => setIsOpen(false)} // Cierra la sidebar si haces clic afuera
        ></div>
      )}

      {/* Contenedor de la sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[430px] bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 overflow-y-auto`}
      >
        {/* Botón de cerrar */}
        <div className="flex items-center justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido de la sidebar con scroll */}
        <div className="flex flex-col py-5 px-11 gap-7">
          <p className="text-xs uppercase">COMP. / CUIDADOS</p>
          <div>
            <p className="text-xs uppercase">EXTERIOR</p>
            <p className="text-xs">algodón 81%, seda (morera) 19%</p>
          </div>
          <div>
            <p className="mb-4 text-xs">Which Contains At Least:</p>
            <p className="text-xs uppercase">OUTER SHELL</p>
            <p className="text-xs">
              81% ALGODÓN DE CULTIVO ORGÁNICO CERTIFICADO OCS
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase">CERTIFIED MATERIALS</p>
            <p className="text-xs ">
              ALGODÓN DE CULTIVO ORGÁNICO CERTIFICADO OCS Esta fibra se produce
              sin utilizar fertilizantes ni pesticidas artificiales y se cultiva
              a partir de semillas que no han sido modificadas genéticamente.
              Actualmente trabajamos con el Organic Content Standard (OCS) que
              supervisa el proceso desde el origen hasta el producto final.
            </p>
          </div>
          <div>
            <p className="text-xs ">Certified By Intertek 193341.</p>
            <p className="inline-block text-xs border-b">More Information</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/8.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">Lavar A Mano Max 30ºc</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/14.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">No Usar Lejía / Blanqueador</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/18.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">Planchar Maximo 110 º C</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/35.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">No Usar Secadora</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/61.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">Lavar Al Revés</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/64.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">Secar En Superficie Plana</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/65.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">Planchar Al Reves</p>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="w-4 h-4"
                style={{
                  backgroundImage:
                    "url('https://static.massimodutti.net/3/static2/itxwebstandard/images/cares/ginetex/125.png?202502180202041804138243')",
                  backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                  backgroundPosition: 'center' // Opcional para centrar la imagen
                }}
              ></div>
              <p className="text-xs">Lim.seco Tetracloroetileno</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cuidados
