import Image from 'next/image'
import React from 'react'
import product from '#/product.png'
import { Lato } from 'next/font/google'

const lato =Lato({
    subsets:["latin"],
    weight:['400','700']
})

const TrendingCartReuseable = () => {
  return (
    <div className='px-[11px] pt-[11px] pb-[32px] shadow-md'>
        <div className="py-7 px-[30px] bg-[#F5F6F8]">
            <Image className='w-[187px] h-[187px] mx-auto' src={product} alt='image' />
        </div>
        <div className="text-center">
            <h4 className={`${lato.className} font-bold text-base text-[#151875] leading-6 pt-[15px] pb-2 `}>Cantilever chair</h4>
            <h5 className='text-sm leading-[14px] text-[#151875]'>$26.00 <span className='text-xs text-[#1518754D]'>$42.00</span></h5>
        </div>
    </div>
  )
}

export default TrendingCartReuseable