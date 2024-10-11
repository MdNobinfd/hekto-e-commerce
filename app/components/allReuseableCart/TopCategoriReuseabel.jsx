import React from 'react'
import product from "#/product.png"
import Image from 'next/image'

const TopCategoriReuseabel = () => {
  return (
    <div className='group text-center'>
        <div className="relative w-[269px] mx-auto h-[269px] py-[45px] rounded-full bg-[#F6F7FB] overflow-hidden group-hover:shadow-[rgba(149,117,230,1)_-5px_5px_1px_2px] duration-300 ease-linear">
            <Image className='w-[178px] h-[178px] mx-auto' src={product} alt='top prodcut' />
            <div className="absolute bottom-[-100px] duration-300 ease-linear group-hover:bottom-[21px] left-[50%] translate-x-[-50%]">
                <button className='text-xs text-white px-[18px] py-[9px] bg-[#08D15F] rounded-[2px]'>View Shop</button>
            </div>
        </div>
        <div className="">
            <h3 className='pt-[27px] pb-[6px] text-xl text-[#151875]'>Mini LCW Chair</h3>
            <h4 className='font-normal text-base text-[#151875]'>$56.00</h4>
        </div>
    </div>
  )
}

export default TopCategoriReuseabel