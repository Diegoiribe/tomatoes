import Cuidados from "../components/Cuidados"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductosV2 from "../components/ProductosV2"
import { useState } from "react";

const VistaProducto = () => {
    const [isOpen, setIsOpen] = useState(false);

    const producto = [
        { url: "https://static.massimodutti.net/assets/public/a78c/1493/32674bfe95e3/c35c634607ac/05679701567-o6/05679701567-o6.jpg?ts=1738679506740&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/e2bf/3b07/8c554b169407/f9815a046523/05679701567-o7/05679701567-o7.jpg?ts=1738680205414&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/f4f2/8c1c/1a5840a7ada9/46bc1547cfc8/05679701567-o8/05679701567-o8.jpg?ts=1738680008618&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/1bc2/82ef/92de4ce9b98a/0d736f4c5970/05679701567-o9/05679701567-o9.jpg?ts=1738679985942&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/10ee/5427/746947f1a696/866cb37a36b9/05679701567-o1/05679701567-o1.jpg?ts=1738592246881&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/640f/93c6/ebb14fc19152/eb8e9a8eb36c/05679701567-o2/05679701567-o2.jpg?ts=1738592287785&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/93e1/2fe5/ee0d4ba589b0/96bc4fbec1c4/05679701567-o3/05679701567-o3.jpg?ts=1738592297120&w=1024" },
        { url: "https://static.massimodutti.net/assets/public/d1cb/dc93/908d425f96df/49a6c55fb960/05679701567-o4/05679701567-o4.jpg?ts=1738592277713&w=1024" }
    ]

    return (
        <div className="w-full h-full ">
            <Header />
            <div className=" w-full h-[100vh] flex mb-20">
                <div className="h-full w-1/2 overflow-auto rounded-br-2xl">
                    {producto.map(item => (
                        <div
                            key={item.url}
                            className="w-full  h-[120vh]"
                            style={{
                                backgroundImage:
                                    `url(${item.url})`,
                                backgroundSize: 'cover', // Opcional para que la imagen cubra todo el fondo
                                backgroundPosition: 'top' // Opcional para centrar la imagen
                            }} ></div>
                    ))}

                </div>

                <div className=" w-1/2 flex justify-center pt-32">
                    <div >
                        <div className="flex flex-col gap-11 max-w-[350px]">
                            <div>
                                <div className="flex gap-10">
                                    <p className="text-sm font-extralight uppercase">Jersey punto cuello polo 100% lino</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                                <p className="text-xs ">MXN 2,495.00</p>
                            </div>
                            <p className="text-xs uppercase">Knitted sweater made of 100% linen.. Manga larga. Cuello tipo polo.</p>
                            <div className="w-full flex items-center justify-center gap-5">
                                <div className="border-2 rounded-md border-[#F9F9F9] w-5 h-5 cursor-pointer bg-green-900"></div>
                                <div className=" border-2 rounded-md border-[#F9F9F9] w-5 h-5 cursor-pointer  bg-red-900"></div>

                                <div className=" border-2 rounded-md border-[#F9F9F9]  w-5 h-5 cursor-pointer bg-black"></div>
                            </div>
                            <div className="flex w-full items-center justify-center gap-5">
                                <div className="font-extralight cursor-pointer">XS</div>
                                <div className="font-extralight cursor-pointer">S</div>
                                <div className="font-extralight cursor-pointer">M</div>
                                <div className="font-extralight cursor-pointer">L</div>
                            </div>
                            <p className="text-center font-medium text-xs text-neutral-500">La modelo lleva la talla M y mide 178 cm.</p>
                            <div className="flex flex-col gap-7">
                                <div className="bg-black rounded-xl px-5 py-2 flex items-center justify-center cursor-pointer"><p className="text-white text-sm font-medium">Añadir al carrito</p></div>
                                <p className=" uppercase text-xs font-medium cursor-pointer">Ver medidas</p>
                            </div>
                            <div className="flex flex-col gap-7">
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(true)}>
                                    <p className=" uppercase text-xs ">Comp. / cuidados </p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                <Cuidados isOpen={isOpen} setIsOpen={setIsOpen} />
                                <div className="flex items-center justify-between cursor-pointer">
                                    <p className=" uppercase text-xs ">envios, compras y devoluciones</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between cursor-pointer">
                                    <p className=" uppercase text-xs ">Disponibilidad en tienda</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className=" uppercase text-xs font-medium px-10 py-4">TE PUEDE INTERESAR</p>
            <div className="px-5">
                <ProductosV2 width="16.4%" />
            </div>
            <Footer />
        </div>
    )
}

export default VistaProducto