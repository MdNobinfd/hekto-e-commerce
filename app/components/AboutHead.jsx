import React from 'react'
import Container from './Container'
import about from '#/about.png'
import Image from 'next/image'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets:['latin'],
    weight:['400','700']
})

const AboutHead = () => {
  return (
    <section className='lg:pt-[119px] pt-[30px] lg:pb-[141px] pb-[30px] lg:px-[25px] px-[15px] '>
        <Container>
            <div className="lg:grid grid-cols-2 gap-x-[30px] items-center">
                <div className="lg:mb-0 mb-[40px]">
                    <Image className='w-full' src={about} alt='about' />
                </div>
                <div className="">
                    <h2 className='font-bold md:text-4xl text-xl lg:leading-[48px]'>Know About Our Ecomerce
                    Business, History</h2>
                    <p className={`${lato.className} pt-[14px] lg:pb-[100px] pb-[20px] font-semibold md:text-base text-sm text-[#8A8FB9] leading-[25px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <button className={`${lato.className} py-[9px] px-[30px] bg-[#FB2E86] text-[18px] text-white font-semibold leading-[25px]  `}>Contact us</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutHead