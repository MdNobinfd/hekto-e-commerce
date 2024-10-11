import React from 'react'
import Container from './Container'
import WhatCartReusabel from './allReuseableCart/WhatCartReusabel'
import delivery from '#/delivery.png'
import cashback from '#/cashback.png'
import premium from '#/premium.png'
import support from '#/support.png'

const AboutFeatures = () => {
  return (
    <section>
        <Container>
            <div className="text-center pb-[67px]">
                <h2 className='font-bold text-[42px] leading-[25px]'>Our Features</h2>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-7 gap-y-7 ">
            <WhatCartReusabel image={delivery} title='Delivery' />
            <WhatCartReusabel image={cashback} title='Cashback' />
            <WhatCartReusabel image={premium} title='Premium' />
            <WhatCartReusabel image={support} title='24/7 Support' />
        </div>
        </Container>
    </section>
  )
}

export default AboutFeatures