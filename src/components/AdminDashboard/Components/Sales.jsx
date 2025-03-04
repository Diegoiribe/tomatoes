

const Sales = () => {

    const sales = Array.from({ length: 6 }, (_, i) => i + 1);

    return (
        <div className="w-full pl-52 pr-10">

            <div className="flex flex-wrap gap-5 w-full  justify-between">
                {sales.map(item => (
                    <div className="w-[48%] flex justify-between h-52 gap-3" key={item}>
                        <div className="bg-red-500 w-[40%] rounded-2xl" style={{
                            backgroundImage: `url('https://static.massimodutti.net/assets/public/10ee/5427/746947f1a696/866cb37a36b9/05679701567-o1/05679701567-o1.jpg?ts=1738592246881&w=1024')`, // Corregido: usas item.url aquí
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}>

                        </div>
                        <div className=" w-[60%] flex flex-col justify-around">
                            <div className="w-full flex justify-between">
                                <p className="text-xs">ORD:789569955</p>
                                <p className="text-xs text-green-500">Status</p>
                            </div>
                            <div>
                                <p className="text-sm mb-1">ZAPATO TACON PUNTA REDONDA</p>
                                <p className="text-xs text-neutral-500">Ref. 5679/701/567</p>
                            </div>

                            <div className="w-full flex gap-10">
                                <div className="h-4 w-4 bg-black rounded-md"></div>
                                <p className="text-xs">Black</p>
                            </div>
                            <div className="w-full flex gap-10">
                                <p className="text-xs">Cantidad: 1</p>
                                <p className="text-xs">Talla: S</p>
                            </div>
                            <p className="w-full text-end text-sm">MXN 2,495</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="h-12 px-2  w-full flex items-center mb-8 justify-between">
                <div className="flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 font-bold cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 font-bold cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div className="flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Sales