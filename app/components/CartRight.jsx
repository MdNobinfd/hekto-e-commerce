import React from 'react'
import { Lato } from 'next/font/google'
const lato = Lato({
  subsets:['latin'],
  weight:['400','700']
})
const CartRight = () => {
  return (
    <div>
         <h3 className='text-xl text-[#1D3178] font-bold leading-[23px] mb-[42px]'>Cart Totals</h3>
         <div className="py-[33px] px-[30px] bg-[#F4F4FC]">
        <div className="flex justify-between items-center border-b-2 border-[#E8E6F1] pb-[13px]">
          <h4 className={`${lato.className} font-semibold text-[18px] text-[#1D3178] leading-[21px]`}>Subtotals:</h4>
          <h4 className={`${lato.className} font-normal text-base text-[#15245E] leading-[19px]`}>£219.00</h4>
        </div>
        <div className="flex justify-between items-center border-b-2 border-[#E8E6F1] pb-[13px] pt-[34px]">
        <h4 className={`${lato.className} font-semibold text-[18px] text-[#1D3178] leading-[21px]`}>Totals:</h4>
        <h4 className={`${lato.className} font-normal text-base text-[#15245E] leading-[19px]`}>£325.00</h4>
        </div>
        <div className="flex items-center gap-x-2 pt-[27px] pb-[35px]">
          <input className="accent-[#19D16F]" type="checkbox" />
          <p className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4`}>
            Shipping & taxes calculated at checkout
          </p>
        </div>
        <div className="">
          <button className={`${lato.className} font-bold text-sm leading-[16px] text-white py-[12px] w-full bg-[#19D16F] rounded-[3px]`}>Proceed To Checkout</button>
        </div>
      </div>

      <h3 className='text-xl text-[#1D3178] font-bold leading-[23px] mt-[32px] mb-[26px]'>Calculate Shoppings</h3>

      <div className="pt-[44px] pb-[21px] px-[30px] bg-[#F4F4FC]">
        <div className="mb-[38px]">
          <input className='border-b border-b-[#C7CEE4] pb-2 bg-transparent w-full' type="text" placeholder='Bangladesh' />
        </div>
        <div className="mb-[38px]">
          <input className='border-b border-b-[#C7CEE4] pb-2 bg-transparent w-full' type="text" placeholder='Mirpur Dhaka - 1200' />
        </div>
        <div className="">
          <input className='border-b border-b-[#C7CEE4] pb-2 bg-transparent w-full' type="text" placeholder='Postal Code' />
        </div>
        <div className="mt-[34px]">
        <button className='font-semibold text-base text-white leading-[18px] py-[13px] px-[24px] bg-[#FB2E86]'>Calculate Shiping</button>
        </div>
      </div>
    </div>
  )
}

export default CartRight