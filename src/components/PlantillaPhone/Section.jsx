import { useRef } from "react"

const Section = () => {

    const scrollRef = useRef(null)

    const scrollLeft = () => {
      scrollRef.current?.scrollBy({
        left: -window.innerWidth * 0.8,
        behavior: 'smooth'
      })
    }
  
    const scrollRight = () => {
      scrollRef.current?.scrollBy({
        left: window.innerWidth * 0.8,
        behavior: 'smooth'
      })
    }
  

    const Products = [
        {
            id: 1,
            url: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_large_2x.png",
            name: "iPhone 16 Pro",
            price: "Desde $25,999 de contado o 18 MSI desde $1,444.39.*"
        },
        {
            id: 2,
            url: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_large_2x.png",
            name: "iPhone 16",
            price: "Desde $19,999 de contado o 18 MSI desde $1,111.06.*"
        },
        {
            id: 3,
            url: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16e__cubm3xoy5qaa_large_2x.png",
            name: "iPhone 16e",
            price: "Desde $14,999 de contado o 18 MSI desde $833.28.*"
        },
        {
            id: 4,
            url: "https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_15__buwagff0mwwi_large_2x.png",
            name: "iPhone 15",
            price: "Desde $17,499 de contado o 18 MSI desde $972.17.*"
        },
    ]

    return (
        <div className="mx-20 mb-52 flex flex-col gap-3">
            <h1 className="text-5xl font-medium ml-1 ">iPhone</h1>
            <p className="ml-1 mb-3 text-lg font-light text-neutral-500">Diseñado para conquistarte</p>
            <video
                src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full object-cover h-[600px] rounded-3xl"
            />
            <div className="overflow-hidden ">
                {/* Carrusel deslizable */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-hidden scroll-smooth py-14"
                >
                    {Products.map((item) => (
                        <div>
                            <img src={item.url} alt="" />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <div>
                                <p>Mas informacion</p>
                                <p>Comprar</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section