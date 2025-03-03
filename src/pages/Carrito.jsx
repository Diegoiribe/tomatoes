import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductosV2 from '../components/ProductosV2'
import ProductosV3 from '../components/ProductosV3'

const Carrito = () => {
  return (
    <div>
      <Header color="white" />
      <div className="fixed bottom-0 left-0 flex items-start justify-end w-full gap-10 pt-6 pb-4 bg-black shadow-2xl px-25">
        <p className="text-sm text-white uppercase font-extralight">Total</p>
        <div>
          <p className="text-xs text-white uppercase font-extralight">
            $ 3.156,00
          </p>
          <p className=" uppercase text-[8px] font-medium text-neutral-500">
            * IVA incluido
          </p>
        </div>
        <button className="px-8 py-2 text-sm font-medium text-black bg-white rounded-full cursor-pointer">
          CONTINUAR
        </button>
      </div>
      <div className="pt-[72px] px-25 ">
        <p className="text-sm font-medium uppercase">Carrito [3]</p>
        <div className="mb-20">
          <ProductosV3 />
        </div>
        <ProductosV2 width="19%" />
      </div>

      <Footer />
    </div>
  )
}

export default Carrito
