
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { clrearCart, prodcutDecrement, prodcutIncrement, removeProduct } from '@/lib/store/features/cart/cartsilce'
import cartcross from '#/cartcross.png'

const CartLeft = ({data}) => {
    let dispatch = useDispatch()
  return (
    <section>
        <div className="flex justify-between mb-[48px]">
            <div className="sm:w-[40%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Product</h3>
            </div>
            <div className="sm:w-[20%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Price</h3>
            </div>
            <div className="sm:w-[20%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Quantity</h3>
            </div>
            <div className="sm:w-[20%]">
                <h3 className='text-xl text-[#1D3178] font-bold leading-[23px]'>Total</h3>
            </div>
        </div>
        <>
        {data.map((item,i)=>(
        <div key={i} className="flex flex-wrap gap-y-[15px] justify-between items-center pb-[15px] mb-[14px] border-b border-b-[#E1E1E4]">
            <div className="w-[70%] sm:w-[40%] flex items-center gap-x-[17px]">
                <div className="w-[83px] relative bg-[#C4C4C4]">
                    <Image width={100} height={100} className='w-full' src={item.thumbnail} alt='blog' />
                    <div onClick={()=>dispatch(removeProduct(i))} className="absolute top-[-6px] right-[-5px] cursor-pointer">
                        <Image width={13} src={cartcross} alt='caretcorss' />
                    </div>
                </div>
                <div className="">
                    <h5 className='text-sm text-black leading-4'>{item.title}</h5>
                    <h6 className='text-xs texxt-[#A1A8C1] leading-[14px]'>Color: <span className='text-sm'>Brown</span></h6>
                    <h6 className='text-xs texxt-[#A1A8C1] leading-[14px]'>Size: <span className='text-sm'>XL</span></h6>
                </div>
            </div>
            <div className="w-[20%] sm:w-[20%]">
                <h5 className='text-sm text-[#15245E] leading-4'>${item.price}</h5>
            </div>
            <div className="w-[70%] sm:w-[20%] ">
                <div className="w-[90px] text-[#BEBFC2] bg-[#F0EFF2] flex gap-x-3 items-center">
                <div onClick={()=>dispatch(prodcutDecrement(i))} className="py-1 cursor-pointer px-2 bg-[#E7E7EF]">
                <button><FaMinus size={14} className='' /></button>
                </div>    
                <div className="">{item.qun}</div>
                <div onClick={()=>dispatch(prodcutIncrement(i))} className="py-1 cursor-pointer px-2 bg-[#E7E7EF]">
                <button><FaPlus size={14} className='' /></button>
                </div>
                </div>
            </div>
            <div className="w-[20%] sm:w-[20%]">
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