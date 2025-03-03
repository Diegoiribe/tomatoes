const Footer = () => {
  return (
    <div className="flex w-full px-20 py-40 text-white bg-black black-section">
      <div className="w-1/3">
        <p className="overflow-hidden font-bold text-7xl">ZAYCA</p>
      </div>
      <div className="flex flex-col w-2/3 gap-22">
        <div className="flex ">
          <div className="min-w-[500px]  flex flex-col gap-6">
            <p className="text-sm">NEWSLETTER</p>
            <p className="text-xs max-w-[400px]">
              Suscríbase a nuestra Newsletter y le enviaremos información sobre
              novedades y tendencias.
            </p>
            <div className="border-[1px] border-white rounded-xl  py-2 inline-flex items-center justify-center cursor-pointer hover:bg-white hover:text-black text-sm uppercase max-w-44">
              Suscríbete
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sm">SOCIAL</p>
            <div className="flex gap-3">
              <p className="text-sm">Instagram</p>
              <p className="text-sm">Tiktok</p>
              <p className="text-sm">X</p>
              <p className="text-sm">Facebook</p>
              <p className="text-sm">Youtube</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <p className="mb-2 text-sm uppercase">Ayuda</p>
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
          <div className="flex flex-col gap-5">
            <p className="mb-2 text-sm uppercase">Servicios</p>
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
          <div className="flex flex-col gap-5">
            <p className="mb-2 text-sm uppercase">Legal</p>
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
          <div className="flex flex-col gap-5">
            <p className="mb-2 text-sm uppercase">Empresa</p>
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

export default Footer
