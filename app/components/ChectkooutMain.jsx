import React from 'react'
import Container from './Container'
import CheckoutRight from './CheckooutRight'
import CheckoutLeft from './CheckooutLeft'
import PageHeaderReusable from './allReuseableCart/PageHeaderReusable'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets:['latin'],
    weight:['400','700']
})

const ChectkoutMain = () => {
  return (
    <section className='pb-[326px]'>
        <PageHeaderReusable title='Check Out' />
        <Container>
            <div className="pt-[74px]">
                <h3 className='text-[24px] text-[#1D3178] leading-[28px]'>Hekto Demo</h3>
                <p className={`${lato.className} font-normal text-xs text-[#1D3178] leading-[14px]`}>Cart/ Information/ Shipping/ Payment</p>
            </div>
            <div className="lg:flex items-center gap-x-[30px]">
                <div className="lg:w-[70%] w-full">
                    <CheckoutLeft />
                </div>
                <div className="lg:w-[30%] w-full">
                    <CheckoutRight />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ChectkoutMain