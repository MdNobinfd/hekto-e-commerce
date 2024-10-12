import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets:['latin'],
    weight:['400','700']
})

const CheckoutLeft = () => {
  return (
    <section>
      <div className="py-[65px]  px-[30px] bg-[#F8F8FD] rounded-sm ">
        <div className="flex justify-between items-center">
          <h4 className='font-bold text-[18px] text-[#1D3178] leading-[21px] pb-[42px] '>Contact Information</h4>
          <h5 className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4`}>Already have an account?Log in</h5>
        </div>
        <div className="">
          <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px]`} type="text" placeholder='Email or mobile phone number' />
        </div>
        <div className="flex items-center gap-x-2 pt-[32px] pb-[109px]">
          <input className='accent-[#19D16F]' type="checkbox" />
          <p className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4`}>Keep me up to date on news and excluive offers</p>
        </div>
        <div className="">
          <h4 className='font-bold text-[18px] text-[#1D3178] leading-[21px] pb-[42px] '>Shipping address</h4>
          <div className="lg:flex items-center gap-x-[30px] mb-[39px]">
            <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 lg:w-1/2 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px] lg:mb-0 mb-9`} type="text" placeholder='First name (optional)' />
            <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 lg:w-1/2 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px]`} type="text" placeholder='Last name' />
          </div> 
          <div className="mb-[39px]">
            <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px]`} type="text" placeholder='Appaetnentment,suit,e.t.c (optinal)' />
          </div>
          <div className="mb-[39px]">
            <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px]`} type="text" placeholder='City' />
          </div>
          <div className="lg:flex items-center mb-[117px] gap-x-[30px]">
            <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 lg:w-1/2 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px] lg:mb-0 mb-9`} type="text" placeholder='Bangladesh' />
            <input className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4 lg:w-1/2 w-full bg-transparent border-b-2 border-[#BFC6E0] pb-[14px]`} type="text" placeholder='Postal Code' />
          </div>
          <div className="">
            <button className='py-[14px] px-[23px] bg-[#FB2E86] rounded-sm text-base text-white leading-[18px] '>Continue Shipping</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutLeft