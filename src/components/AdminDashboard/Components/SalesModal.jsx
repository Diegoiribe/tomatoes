import { ProductoVista } from "../../../data/db"
import { Link } from "react-router-dom"


const SalesModal = ({ setIsOpen }) => {

    const producto = ProductoVista

    return (
        <div className="shadow-2xl w-[70%]  rounded-2xl p-5 flex flex-col gap-5 mb-20">

            <div className="flex gap-2 items-center cursor-pointer" onClick={() => setIsOpen(false)}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4  cursor-pointer" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                <p className="text-sm font-medium">Resumen de pedido</p>
            </div>
            <div className="w-full flex flex-wrap gap-5 justify-center">
                {producto.slice(0, 6).map((item) => (
                    <Link
                        to={`/producto/${item.id}`} // Corregido: usas item.id aquí
                        key={item.id}
                        className="cursor-pointer"
                        style={{
                            width: "30%"
                        }}
                    >
                        <div
                            className="rounded-xl h-[17rem]"
                            style={{
                                backgroundImage: `url(${item.photoPrimary})`, // Corregido: usas item.url aquí
                                backgroundSize: 'cover',
                                backgroundPosition: 'top',
                                width: '100%' // Corregido: usas item.w aquí
                            }}
                        >

                        </div>
                        <div className="flex flex-col px-2 py-2 ">
                            <p className="text-xs uppercase font-extralight truncate">{item.name}</p>
                            <p className="text-xs ">
                                MXN{' '}
                                {item.price.toLocaleString('en-US', {
                                    minimumFractionDigits: 2
                                })}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex gap-1 items-center">
                                    <div
                                        className={`border-2  w-4 h-4 border-[#F9F9F9] cursor-pointer bg-black rounded-md`}

                                    >   </div>
                                    <p className="text-xs uppercase font-extralight">| Black</p>
                                </div>
                                <p className="text-xs uppercase font-extralight">M</p>
                                <div className="flex items-center gap-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        className="cursor-pointer size-3"
                                        onClick={() => actualizarCantidad(item.id, 'restar')}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h14"
                                        />
                                    </svg>

                                    <p className="text-xs uppercase font-extralight">
                                        5
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        className="cursor-pointer size-3"
                                        onClick={() => actualizarCantidad(item.id, 'sumar')}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </div>
                            </div>


                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex w-full justify-between mt-20 mb-5">

                <div className="w-[49%] flex flex-col gap-5">
                    {/* Direccion */}
                    <div className="flex flex-wrap gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-xs">Pais:</p>
                            <p className="border py-2 px-5 text-xs text-neutral-500 rounded-full">Mexico</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-xs">Estado:</p>
                            <p className="border py-2 px-5 text-xs text-neutral-500 rounded-full">Sinaloa</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-xs">Ciudad:</p>
                            <p className="border py-2 px-5 text-xs text-neutral-500 rounded-full">Culiacan</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-xs">Colonia:</p>
                            <p className="border py-2 px-5 text-xs text-neutral-500 rounded-full">Montecarlo</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="uppercase text-xs">Direccion:</p>
                            <p className="border  py-2 px-5 text-xs text-neutral-500 rounded-full">Sens 2640, Montecarlo 80054</p>
                        </div>
                    </div>

                </div>
                <div className="w-[1px] bg-neutral-500  h-full mx-5"></div>
                <div className="w-[49%]">
                    {/* Pago */}
                    <p className="text-xs uppercase font-medium mb-4">Resumen del pedido</p>
                    <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full justify-between">
                            <p className="text-xs uppercase ">Productos</p>
                            <p className="text-xs uppercase font-medium text-neutral-500">MXN 2,697.00</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <p className="text-xs uppercase ">Gastos de envios</p>
                            <p className="text-xs uppercase font-medium text-neutral-500">MXN 55.00</p>
                        </div>
                        <div className="flex w-full justify-between">
                            <p className="text-xs uppercase ">Total</p>
                            <p className="text-xs uppercase font-medium text-neutral-500">MXN 2,697.00</p>
                        </div>
                        <div className="mt-4 bg-black rounded-full flex items-center text-white text-sm font-medium justify-center py-2 hover:bg-green-700 cursor-pointer">Enviado</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SalesModal