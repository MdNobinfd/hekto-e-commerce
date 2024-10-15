import Image from 'next/image'
import React from 'react'
import cartimg from '#/cart.png'
import Link from 'next/link'

const EmtyCart = () => {
  return (
    <div className='mt-[140px]'>
         <div className="lg:w-[60%] mx-auto lg:flex items-center gap-4">
          <div className="w-[40%] mx-auto">
            <Image src={cartimg} alt='cart' />
          </div>
          <div className="flex lg:justify-normal justify-center">
          <div className="rounded-md shadow-lg p-4 py-8 text-center w-[60%]">
            <h3 className='font-dm-sans text-[26px] font-bold uppercase'>Your Cart feels lonely.</h3>
            <p className='text-sm py-[15px] font-dm-sans text-center px-10 -mt-2'>Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.</p>
            <Link href="/shop">
            <button className='bg-[#262626] rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-dm-sans font-semibold text-lg text-gray-200 hover:text-white duration-300'>Continue Shopping</button>
            </Link>
          </div>
          </div>
         </div>
    </div>
  )
}

export default EmtyCart