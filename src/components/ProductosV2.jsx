

const ProductosV2 = ({ width }) => {
    const producto = [
        { url: "https://static.massimodutti.net/assets/public/276b/e9ea/60c149e3a62d/8c8dee6bd9f4/04605529303-o1/04605529303-o1.jpg?ts=173626" },
        { url: "https://static.massimodutti.net/assets/public/028d/8e3b/8afd497ab1cc/61a4a55cecb0/05715649600-o1/05715649600-o1.jpg?ts=1735303539062&w=400" },
        { url: "https://static.massimodutti.net/assets/public/7525/c9c3/e3c94a1aa145/7c4c37f7f379/05722648741-o1/05722648741-o1.jpg?ts=1738683727475&w=400" },
        { url: "https://static.massimodutti.net/assets/public/fa87/e613/c18b48ad922f/745eb9631307/11432450800-o1/11432450800-o1.jpg?ts=1733821107681&w=400" },
        { url: "https://static.massimodutti.net/assets/public/4f2a/743c/cbbf45ff972b/adcfc39e9443/06982602800-o1/06982602800-o1.jpg?ts=1726225531537&w=400" },
        { url: "https://static.massimodutti.net/assets/public/ec4c/3219/6ec34a41b4a0/bb43e6e08e5e/06246583700-o1/06246583700-o1.jpg?ts=1738592211431&w=400" },
        { url: "https://static.massimodutti.net/assets/public/085b/16e5/ab61440ebc06/7fa49d676769/05728682802-o1/05728682802-o1.jpg?ts=1736944093651&w=400" },
        { url: "https://static.massimodutti.net/assets/public/6705/54cc/f89b4e9f97f6/b0bc711c910a/05713642717-o1/05713642717-o1.jpg?ts=1736436889184&w=400" },
        { url: "https://static.massimodutti.net/assets/public/60ee/fd69/cf7242f8abf9/21d403046691/05699649401-o1/05699649401-o1.jpg?ts=1737108473806&w=400" },
        { url: "https://static.massimodutti.net/assets/public/f061/1f8a/cbd843f79b72/a2db41136291/05739696818-o1/05739696818-o1.jpg?ts=1738580820020&w=400" },
        { url: "https://static.massimodutti.net/assets/public/6ef0/557d/98e44ed9b7f2/6bb2d8d42d92/05712649717-o1/05712649717-o1.jpg?ts=1737108558851&w=400" },
        { url: "https://static.massimodutti.net/assets/public/c356/9609/05004f5c844e/ce48a3e359e7/05715649742-o1/05715649742-o1.jpg?ts=1735303535158&w=400" }
    ];

    return (
        <div className="w-full flex flex-wrap  py-5 justify-between">
            {producto.map(item => (
                <div key={item.url} className="cursor-pointer"
                    style={{
                        width: width// Corregido: usas item.w aquí
                    }}>
                    <div
                        className="rounded-2xl h-[17rem]"
                        style={{
                            backgroundImage: `url(${item.url})`, // Corregido: usas item.url aquí
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                            width: "100%" // Corregido: usas item.w aquí
                        }}
                    >
                        <div className="w-full h-full flex items-end justify-star p-5 opacity-0 hover:bg-black/10 hover:opacity-100">
                            <div className="w-8 h-8 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  px-2 py-2 ">
                        <p className=" uppercase text-xs font-extralight">Zapato tacon punta redonda</p>
                        <p className="text-xs ">MXN 2,495.00</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductosV2