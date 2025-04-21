import React from 'react'

const Banner = () => {
    return (
        <div className='flex flex-col items-center bg-gray-100 gap-3 mx-20 pt-14 mt-10 rounded-3xl'>
            <p className='text-6xl font-medium'>iPhone 16 Pro Max</p>
            <p className='text-xl font-thin'>Unfold The Classic</p>
            <div className='flex flex-col gap-1 items-center'>
                <p className='text-lg font-medium'>Desde $69,999.00</p>
                <p className='text-sm font-thin text-neutral-400'>o 12 pagos</p>
            </div>
            <div className='flex gap-5'>
                <p className='text-lg font-light py-2 px-6 bg-black text-white rounded-full '>Conoce mas</p>
                <p className='text-lg font-light py-2 px-6 bg-blue-500 text-white rounded-full'>Comprar</p>
            </div>
            <div className="flex flex-col items-center justify-center  w-full mt-10">
                <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch_AV4?wid=5120&hei=2880&fmt=webp&qlt=70&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94N0JiU3pVRmREL3VYNFNGUFM4S1BsaGxjZnhHRHJyenVmME5KTm9Sd1ZaU2hpQnMxbm94Rm1tUTd1RDVsQXdjSzNEMUxkZjU3ZFUxaS91eEVpMG0vb3ZsWG55WFNZREIrcHRwdlRvMGw2S3BR&traceId=1" alt="iphone 16" className='object-contain w-auto rounded-lg max-h-84' />
            </div>
        </div>
    )
}

export default Banner