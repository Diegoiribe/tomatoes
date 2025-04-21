import React from 'react';
import image from "../../assets/image.png"

const Eslogan = () => {
    const persons = [
        {
            id: 1,
            name: "Charles LX",
            url: "https://i.pinimg.com/736x/7e/a9/3f/7ea93f180ea4b8030baf6863ac47f9f9.jpg",
            urlColor: "https://i.pinimg.com/736x/f3/91/4f/f3914f5f868f53163a9170e665252148.jpg",
            urlObject: "https://i.pinimg.com/736x/f7/34/00/f734007e998019a82993da59e24e5639.jpg",
            urlPerson: "https://i.pinimg.com/736x/c1/86/70/c18670f3d6ed743b1fcce132ca01ad22.jpg"
        },
        {
            id: 2,
            name: "Sam Car",
            url: "https://i.pinimg.com/736x/c0/41/8f/c0418f5967b642a1f01864409fb2f86a.jpg",
            urlColor: "https://i.pinimg.com/736x/a9/65/e2/a965e27d03d9924af99f839bf32610ee.jpg",
            urlObject: "https://i.pinimg.com/736x/f7/34/00/f734007e998019a82993da59e24e5639.jpg",
            urlPerson: "https://i.pinimg.com/736x/ff/08/24/ff082465a3c1f61cc6a025749ac8e62e.jpg"
        },
        {
            id: 3,
            name: "Samantha Woo",
            url: "https://i.pinimg.com/736x/01/ab/ec/01abec0416319215fbb74230a32714f0.jpg",
            urlColor: "https://i.pinimg.com/736x/48/3c/f3/483cf3f2b5e8001ecd3e193ba0af758f.jpg",
            urlObject: "https://i.pinimg.com/736x/f7/34/00/f734007e998019a82993da59e24e5639.jpg",
            urlPerson: "https://i.pinimg.com/736x/12/22/75/122275a550acccdad7757fd0be520c95.jpg"
        },
        {
            id: 4,
            name: "Josh Nicols",
            url: "https://i.pinimg.com/736x/cd/5b/56/cd5b566b20ea5adf37913e59ad1b5b1f.jpg",
            urlColor: "https://i.pinimg.com/736x/44/3d/29/443d29c56a3c14b2dab563aeef91c9bd.jpg",
            urlObject: "https://i.pinimg.com/736x/f7/34/00/f734007e998019a82993da59e24e5639.jpg",
            urlPerson: "https://i.pinimg.com/736x/0f/22/36/0f2236223e7b52f7141bd78c719dc467.jpg"
        },
        {
            id: 5,
            name: "Leroon Van",
            url: "https://i.pinimg.com/736x/6e/c1/56/6ec156a6367c475ed0bd49f8dcbea161.jpg",
            urlColor: "https://i.pinimg.com/736x/b1/a3/7b/b1a37bd0fa1fdc5cfa3d206311f0312b.jpg",
            urlObject: "https://i.pinimg.com/736x/f7/34/00/f734007e998019a82993da59e24e5639.jpg",
            urlPerson: "https://i.pinimg.com/736x/be/bf/ce/bebfce018861430f3aa466e9b6b61a39.jpg"
        }
    ];

    // Generamos más imágenes para rellenar
    const repeatedImages = Array.from({ length: 60 }, (_, i) => persons[i % persons.length]);

    return (
        <div className='mx-20 my-64'>
            <h1 className='text-5xl font-medium text-center'>Haz magia con ShopPhone</h1>
            <div className='w-full flex justify-center mt-4'>
                <p className='text-sm text-center font-light max-w-xl'>En ShopPhone no solo eliges un teléfono, eliges una experiencia: rápida, segura y sin rodeos. Con entrega express, garantía incluida y los modelos más buscados del mercado, comprar nunca se sintió tan bien.
                </p>
            </div>

            <div className="relative h-[500px]  rounded-3xl overflow-hidden mt-20 ">

                {/* Collage */}
                <div className="absolute inset-0 grid grid-cols-12  opacity-30">

                    {repeatedImages.map((item, idx) => (
                        <img
                            key={idx}
                            src={item.urlPerson}
                            alt=""
                            className="w-full h-full object-cover"
                        />

                    ))}
                </div>

                {/* Texto sobre el collage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    <h1 className="text-4xl font-bold text-white bg-blue-500 px-4 py-2">Descubre ShopPhone. Compra como debe ser.</h1>
                    <p className="mt-4 font-light text-lg text-black max-w-2xl">
                        Con ShopPhone, elegir tu nuevo teléfono es tan fácil como debería ser. Explora, decide y recibe. Sin distracciones, sin complicaciones, solo lo esencial.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Eslogan;