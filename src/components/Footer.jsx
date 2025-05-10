import { useState } from 'react'
import PropTypes from 'prop-types'

const Footer = ({ color = 'white', bg = 'black' }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="w-full md:flex md:flex-row sm:flex-col md:h-screen md:px-20 sm:px-5 md:py-40 sm:py-20 black-section"
      style={{
        backgroundColor: bg,
        color: color
      }}
    >
      <div className="md:w-1/3 sm:w-full">
        <p className="overflow-hidden font-bold text-7xl">ZAYCA</p>
      </div>
      <div className="flex flex-col md:w-2/3 sm:w-full gap-22">
        <div className="flex md:flex-row sm:flex-col sm:gap-5 sm:mt-5 ">
          <div className="md:min-w-[500px]  flex flex-col gap-6">
            <p className="text-sm">NEWSLETTER</p>
            <p className="text-xs md:max-w-[400px]">
              Suscríbase a nuestra Newsletter y le enviaremos información sobre
              novedades y tendencias.
            </p>
            <div
              className="border-[1px]  rounded-xl  py-2 inline-flex items-center justify-center cursor-pointer  text-sm uppercase max-w-44"
              style={{
                borderColor: color,
                backgroundColor: isHovered ? color : bg,
                color: isHovered ? bg : color
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Suscríbete
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm">SOCIAL</p>
            <div className="flex gap-3 md:flex-col xl:flex-row">
              <p className="text-sm">Instagram</p>
              <p className="text-sm">Tiktok</p>
              <p className="text-sm">X</p>
              <p className="text-sm">Facebook</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between sm:flex-wrap md:flex-nowrap sm:gap-10 md:gap-0">
          <div className="flex flex-col sm:gap-3 md:gap-5">
            <p className="mb-2 text-sm uppercase sm:font-medium md:font-normal">
              Ayuda
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              WhatsApp
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Contacto
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Preguntas Frecuentes
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Accesibilidad
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Localizar tu pedido
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Ticket a factura
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Recuperar ticket de tienda
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 md:gap-5">
            <p className="mb-2 text-sm uppercase sm:font-medium md:font-normal">
              Servicios
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Personal tailoring
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Gift card
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Información de envío
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 md:gap-5">
            <p className="mb-2 text-sm uppercase sm:font-medium md:font-normal">
              Legal
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Condiciones de compra
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Política de privacidad
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Política de Seguridad
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Política de devoluciones
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Información sobre cookies
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Configuración de cookies
            </p>
          </div>
          <div className="flex flex-col sm:gap-3 md:gap-5">
            <p className="mb-2 text-sm uppercase sm:font-medium md:font-normal">
              Empresa
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Descargue nuestra app
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Sobre Massimo Dutti
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Localizador de tiendas
            </p>
            <p className="text-xs cursor-pointer hover:text-neutral-500">
              Prensa
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  color: PropTypes.string.isRequired, // Asegura que `color` es un string obligatorio
  bg: PropTypes.string.isRequired
}

export default Footer
