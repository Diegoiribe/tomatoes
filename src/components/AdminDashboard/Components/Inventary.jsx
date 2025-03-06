import Footer from "../../Footer";

const Inventary = () => {

    const products = Array.from({ length: 4 }, (_, i) => i + 1);

    return (
        <div className="w-full pl-52  flex flex-col items-center  mt-10">
            <div className="pr-10"></div>
            <div className="w-[70%] flex flex-col gap-3 pr-10 mb-20">
                {products.map(item => (
                    <div key={item} className="flex w-full h-36  rounded-2xl p-3">
                        <div className="w-[17.5%] rounded-2xl mr-3" style={{
                            backgroundImage: `url('https://static.massimodutti.net/assets/public/10ee/5427/746947f1a696/866cb37a36b9/05679701567-o1/05679701567-o1.jpg?ts=1738592246881&w=1024')`, // Corregido: usas item.url aquí
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}></div>
                        <div className="w-[37.5%]">
                            <p className="text-sm">ZAPATO TACON PUNTA REDONDA</p>
                            <div>
                                <div></div>
                            </div>
                            <p className="uppercase text-sm">mex $2,765</p>
                        </div>
                        <div className="w-[40%] flex gap-2">
                            <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                                <p className="w-full text-sm uppercase font-extralight text-center">s</p>
                                <div className="w-full h-1/2 bg-black/5 rounded-lg flex items-center justify-center" >
                                    <p className="text-sm">6</p>
                                </div>
                            </div>
                            <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                                <p className="w-full text-sm uppercase font-extralight text-center">m</p>
                                <div className="w-full h-1/2 bg-black/5 rounded-lg flex items-center justify-center">
                                    <p className="text-sm">2</p>
                                </div>
                            </div>
                            <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                                <p className="w-full text-sm uppercase font-extralight text-center">l</p>
                                <div className="w-full h-1/2 bg-black/5 rounded-lg flex items-center justify-center">
                                    <p className="text-sm">1</p>
                                </div>
                            </div>
                            <div className="w-[20%] flex flex-col items-center justify-center gap-2">
                                <p className="w-full text-sm uppercase font-extralight text-center">xl</p>
                                <div className="w-full h-1/2 bg-black/5 rounded-lg flex items-center justify-center">
                                    <p className="text-sm">1</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[5%]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        </div>
                    </div>
                ))}
            </div>

            <Footer bg={"#f1f1f1"} color={"black"} />
        </div>
    )
}

export default Inventary