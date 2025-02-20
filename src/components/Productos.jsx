const Productos = () => {

    const producto = [
        { url: "https://static.zara.net/assets/public/f53b/da0a/e12946c7a195/05d3019cfec6/02463533620-a3/02463533620-a3.jpg?ts=1739351165354&w=2632", w: "50%" },
        { url: "https://static.zara.net/assets/public/cba1/a558/131b4f71b02b/d5a6ea611811/03152340250-p/03152340250-p.jpg?ts=1739442919987&w=1254", w: "25%" },
        { url: "https://static.zara.net/assets/public/17bf/5c01/fda64f3498b6/214b0d77f7a0/02180354114-p/02180354114-p.jpg?ts=1739354851283&w=2632", w: "25%" }
    ];

    return (
        <div className="w-full flex pt-10 p-5 gap-5">
            {producto.map(item => (
                <div style={{

                    width: item.w // Corregido: usas item.w aquí
                }}>
                    <div
                        key={item.url} // Es una buena práctica agregar una key única
                        className="rounded-2xl h-[28rem]"
                        style={{
                            backgroundImage: `url(${item.url})`, // Corregido: usas item.url aquí
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            width: "100%" // Corregido: usas item.w aquí
                        }}
                    >
                        <div className="w-full h-full flex items-start justify-end p-5 opacity-0 hover:bg-black/10 hover:opacity-100">
                            <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between px-5 py-2 items-center">
                        <div className="flex gap-2">
                            <div className="inline-flex items-center justify-center w-8 h-8  border-2 rounded-full border-[#F9F9F9] cursor-pointer">
                                <p className="font-medium text-[#2f2f2f] text-xs">S</p>
                            </div><div className="inline-flex items-center justify-center w-8 h-8 border-2 rounded-full border-[#fff] bg-black cursor-pointer">
                                <p className="font-medium text-[#fff] text-xs">M</p>
                            </div><div className="inline-flex items-center justify-center w-8 h-8  border-2 rounded-full border-[#F9F9F9] cursor-pointer">
                                <p className="font-medium text-[#2f2f2f] text-xs">L</p>
                            </div><div className="inline-flex items-center justify-center border-2 rounded-full border-[#F9F9F9] w-8 h-8 cursor-pointer">
                                <p className="font-medium text-[#2f2f2f] text-xs">Xl</p>
                            </div>
                        </div>
                        <div className="text-xs font-medium">$2,389.00</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Productos;
