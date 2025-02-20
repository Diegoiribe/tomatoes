const ProductosV3 = () => {

    const producto = [
        { url: "https://static.zara.net/assets/public/49fa/45a4/ebbf4c56afd8/34f59c295f04/02298185800-p/02298185800-p.jpg?ts=1736861736957&w=780" },
        { url: "https://static.zara.net/assets/public/83b6/4aa2/735f47df8f3c/11834b0170c3/02136623070-p/02136623070-p.jpg?ts=1736875274443&w=780" },
        { url: "https://static.zara.net/assets/public/4132/3426/4d5c433a8b25/6367424b8096/05039156800-p/05039156800-p.jpg?ts=1736855119588&w=780" },
    ]

    return (
        <div className="w-full flex flex-wrap  py-5 justify-between">
            {producto.map(item => (
                <div className="cursor-pointer"
                    style={{
                        width: "32%"// Corregido: usas item.w aquí
                    }}>
                    <div
                        key={item.url} // Es una buena práctica agregar una key única
                        className="rounded-2xl h-[27rem]"
                        style={{
                            backgroundImage: `url(${item.url})`, // Corregido: usas item.url aquí
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            width: "100%" // Corregido: usas item.w aquí
                        }}
                    >
                        <div className="w-full h-full flex items-start justify-end p-3 opacity-0 hover:bg-black/10 hover:opacity-100">
                            <div className=" shadow-2xl flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  px-2 py-2 ">
                        <div className="flex justify-between"><p className=" uppercase text-xs font-extralight">Zapato tacon punta redonda</p>
                            <p className=" uppercase text-xs font-extralight">MX 28 (US M) | Negro</p></div>
                        <p className="text-xs ">MXN 2,495.00</p>
                        <div className="flex gap-5 mt-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>

                            <p className=" uppercase text-xs font-extralight">1</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductosV3