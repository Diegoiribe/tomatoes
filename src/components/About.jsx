import PropTypes from 'prop-types'

const About = ({ isOpen, setIsOpen }) => {
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
          <p className="mb-3 text-xs uppercase ">Sobre ZAYCA</p>
          <div>
            <p className="mb-2 text-xs uppercase ">Calidad en cada detalle</p>
            <p className="text-xs">
              En ZAYCA, diseñamos ropa para personas que buscan autenticidad y
              estilo. Cada prenda es el resultado de un proceso cuidadoso que
              combina calidad, confort y elegancia. Creemos en la moda atemporal
              que refleja tu esencia y te acompaña en todos tus momentos.
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase ">
              Compromiso con la sostenibilidad
            </p>
            <p className="text-xs">
              Nuestra misión va más allá de la moda. En ZAYCA, estamos
              comprometidos con la sostenibilidad y la responsabilidad social.
              Trabajamos con materiales respetuosos con el medio ambiente y
              colaboramos con proveedores que comparten nuestros valores.
              Queremos crear un impacto positivo en la industria, cuidando del
              planeta y de las personas.
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase ">Experiencia personalizada</p>
            <p className="text-xs">
              En ZAYCA, sabemos que cada persona es única. Por eso, ofrecemos
              una experiencia personalizada que se adapta a tu estilo y
              necesidades. Descubre nuestras colecciones exclusivas y recibe
              asesoría en nuestras tiendas físicas o en línea. Nuestro objetivo
              es que te sientas especial y encuentres prendas que te hagan
              destacar.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

About.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Asegura que `color` es un string obligatorio
  setIsOpen: PropTypes.bool.isRequired
}

export default About
