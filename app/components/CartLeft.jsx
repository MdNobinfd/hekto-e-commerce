'use client'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { clrearCart, prodcutDecrement, prodcutIncrement } from '@/lib/store/features/cart/cartsilce'

const CartLeft = () => {
    let dispatch = useDispatch()
    const data = useSelector((state)=>state.cart.items)
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
        <>
        {data.map((item,i)=>(
        <div key={i} className="flex justify-between items-center pb-[15px] mb-[14px] border-b border-b-[#E1E1E4]">
            <div className="w-[40%] flex items-center gap-x-[17px]">
                <div className="w-[83px]">
                    <Image width={100} height={100} className='w-full' src={item.thumbnail} alt='blog' />
                </div>
                <div className="">
                    <h5 className='text-sm text-black leading-4'>{item.title}</h5>
                    <h6 className='text-xs texxt-[#A1A8C1] leading-[14px]'>Color: <span className='text-sm'>Brown</span></h6>
                    <h6 className='text-xs texxt-[#A1A8C1] leading-[14px]'>Size: <span className='text-sm'>XL</span></h6>
                </div>
            </div>
            <div className="w-[20%]">
                <h5 className='text-sm text-[#15245E] leading-4'>${item.price}</h5>
            </div>
            <div className="w-[20%] ">
                <div className="w-[90px] text-[#BEBFC2] bg-[#F0EFF2] flex gap-x-3 items-center">
                <div className="py-1 px-2 bg-[#E7E7EF]">
                <button onClick={()=>dispatch(prodcutIncrement(i))}><FaPlus size={14} className='' /></button>
                </div>
                <div className="">{item.qun}</div>
                <div className="py-1 px-2 bg-[#E7E7EF]">
                <button onClick={()=>dispatch(prodcutDecrement(i))}><FaMinus size={14} className='' /></button>
                </div>    
                </div>
            </div>
            <div className="w-[20%]">
                <h5 className='text-sm text-[#15245E] leading-4'>£{item.price * item.qun}</h5>
            </div>
        </div>
        ))}
        </>
        <div className="flex justify-between mt-[22px]">
            <button className='font-semibold text-base text-white leading-[18px] py-[12px] px-[20px] bg-[#FB2E86]'>Update Curt</button>
            <button onClick={()=>dispatch(clrearCart())} className='font-semibold text-base text-white leading-[18px] py-[12px] px-[20px] bg-[#FB2E86]'>Clear Curt</button>
        </div>
    </section>
  )
}

export default CartLeft