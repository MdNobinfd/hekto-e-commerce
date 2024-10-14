import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import cartimge from '#/blogr1.png'
import Image from 'next/image'

const CartLeft = () => {
  return (
    <section>
        <div className="flex justify-between mb-[48px]">
            <div className="w-[40%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Product</h3>
            </div>
            <div className="w-[20%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Price</h3>
            </div>
            <div className="w-[20%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Quantity</h3>
            </div>
            <div className="w-[20%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Total</h3>
            </div>
        </div>
        <div className="flex justify-between items-center pb-[15px] mb-[14px] border-b border-b-[#E1E1E4]">
            <div className="w-[40%] flex items-center gap-x-[17px]">
                <div className="w-[83px]">
                    <Image className='w-full' src={cartimge} alt='blog' />
                </div>
                <div className="">
                    <h5 className='text-sm text-black leading-4'>Ut diam consequat</h5>
                    <h6 className='text-xs texxt-[#A1A8C1] leading-[14px]'>Color: <span className='text-sm'>Brown</span></h6>
                    <h6 className='text-xs texxt-[#A1A8C1] leading-[14px]'>Size: <span className='text-sm'>XL</span></h6>
                </div>
            </div>
            <div className="w-[20%]">
                <h5 className='text-sm text-[#15245E] leading-4'>$32.00</h5>
            </div>
            <div className="w-[20%] ">
                <div className="w-[90px] text-[#BEBFC2] bg-[#F0EFF2] flex gap-x-3 items-center">
                <div className="py-1 px-2 bg-[#E7E7EF]">
                <button><FaPlus size={14} className='' /></button>
                </div>
                <div className="">1</div>
                <div className="py-1 px-2 bg-[#E7E7EF]">
                <button><FaMinus size={14} className='' /></button>
                </div>    
                </div>
            </div>
            <div className="w-[20%]">
                <h5 className='text-sm text-[#15245E] leading-4'>£219.00</h5>
            </div>
        </div>
        <div className="flex justify-between mt-[22px]">
            <button className='font-semibold text-base text-white leading-[18px] py-[12px] px-[20px] bg-[#FB2E86]'>Update Curt</button>
            <button className='font-semibold text-base text-white leading-[18px] py-[12px] px-[20px] bg-[#FB2E86]'>Clear Curt</button>
        </div>
    </section>
  )
}

export default CartLeft