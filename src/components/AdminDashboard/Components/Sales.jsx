import Footer from '../../Footer'
import SalesModal from './SalesModal'
import { useState } from 'react'

const Sales = () => {
    const sales = Array.from({ length: 6 }, (_, i) => i + 1)
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="w-full pl-52 ">
            <div className="min-h-screen w-full flex flex-col items-center">
                {isOpen ? (<div className='min-h-[80%] w-full flex items-top justify-center'>
                    <SalesModal setIsOpen={setIsOpen} />
                </div>) : (<div className="flex flex-wrap justify-center w-full gap-5 pr-10">
                    <div className="flex items-center justify-between w-full h-12 px-2 pr-10">
                        <div className="flex gap-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="font-bold cursor-pointer size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="font-bold cursor-pointer size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                        </div>
                        <div className="flex gap-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="cursor-pointer size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="cursor-pointer size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </div>
                    </div>
                    {sales.map((item) => (
                        <div className="w-[45%] flex justify-between h-42 gap-3 hover:bg-black/5 rounded-2xl p-3 cursor-pointer" key={item} onClick={() => setIsOpen(!isOpen)}>
                            <div
                                className="w-[30%] rounded-2xl"
                                style={{
                                    backgroundImage: `url('https://static.massimodutti.net/assets/public/10ee/5427/746947f1a696/866cb37a36b9/05679701567-o1/05679701567-o1.jpg?ts=1738592246881&w=1024')`, // Corregido: usas item.url aquí
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            ></div>
                            <div className=" w-[60%] flex flex-col justify-around py-1">
                                <div className="flex justify-between w-full">
                                    <p className="text-xs">ORD:789569955</p>
                                    <p className="text-xs text-green-500">Status</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs">ZAPATO TACON PUNTA REDONDA</p>
                                    <p className="text-xs text-neutral-500">Ref. 5679/701/567</p>
                                </div>

                                <div className="flex w-full gap-2 items-center">
                                    <div className="w-4 h-4 bg-black rounded-md"></div>
                                    <p className="text-xs">Black</p>
                                </div>
                                <div className="flex w-full gap-10">
                                    <p className="text-xs">Cantidad: 1</p>
                                    <p className="text-xs">Talla: S</p>
                                </div>
                                <p className="w-full text-xs text-end">MXN $2,495</p>
                            </div>
                        </div>
                    ))}
                </div>)}



            </div>
            <Footer bg={'#f1f1f1'} color={'black'} />
        </div>
    )
}

export default Sales
