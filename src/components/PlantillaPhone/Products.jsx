

const Products = () => {

    const Product = [
        {
            id: 1,
            name: "iPhone 16 Pro",
            url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-16-pro-202409?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1739284570852"
        },
        {
            id: 2,
            name: "iPhone 16",
            url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-16-202409?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1739284570526"
        },
        {
            id: 3,
            name: "iPhone 16e",
            url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-16e-202502?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1738323607001"
        }
    ]

    return (
        <div className="flex flex-wrap justify-center max-w-2xl mx-auto gap-y-5 pt-[76px]">
            {Product.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center justify-center  px-4 w-1/3 cursor-pointer"
                >
                    <img
                        src={item.url}
                        alt={`Client ${item.id}`}
                        className="object-contain w-auto rounded-lg max-h-26"
                    />
                    <p className="text-sm font-light py-2">{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Products