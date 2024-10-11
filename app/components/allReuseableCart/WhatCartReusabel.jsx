import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['400','700']
})

const WhatCartReusabel = (props) => {
  return (
    <div className='shadow-md px-6 pt-[58px] pb-[45px]'>
        <div className="">
            <Image className='w-[65px] h-[65px] mx-auto' src={props.image} alt='image' />
        </div>
        <div className="text-center">
            <h3 className='font-bold text-[#151875] text-[22px] leading-6 py-[21px]'>{props.title}</h3>
            <p className={`${lato.className} font-bold text-base text-[#1A0B5B4D]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    </div>
  )
}

export default WhatCartReusabel