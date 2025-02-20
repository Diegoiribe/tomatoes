import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductosV2 from "../components/ProductosV2"
import ProductosV3 from "../components/ProductosV3"

const Carrito = () => {
    return (
        <div>
            <Header color="white" />
            <div className="fixed bottom-0 left-0 w-full bg-black pb-4 pt-6 px-25 flex justify-end items-start shadow-2xl gap-10">
                <p className=" uppercase text-sm font-extralight text-white">Total</p>
                <div >
                    <p className=" uppercase text-xs font-extralight text-white">$ 3.156,00</p>
                    <p className=" uppercase text-[8px] font-medium text-neutral-500">* IVA incluido</p>
                </div>
                <button className="bg-white text-black text-sm font-medium px-8 py-2 rounded-full cursor-pointer">
                    CONTINUAR
                </button>
            </div>
            <div className="pt-[72px] px-25 ">
                <p className="uppercase text-sm font-medium">Carrito [3]</p>
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