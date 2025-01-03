import React from 'react'
import Container from './Container'
import WhatCartReusabel from './allReuseableCart/WhatCartReusabel'
import delivery from '#/delivery.png'
import cashback from '#/cashback.png'
import premium from '#/premium.png'
import support from '#/support.png'

const Shopex = () => {
  return (
    <section className='md:pt-[58px] md:pb-[150px] pb-[30px] lg:px-[25px] px-[15px]'>
        <Container>
        <div className="md:mb-[55px]">
          <h2 className="header">What Shopex Offer!</h2>
        </div>
        <div className="grid  lg:grid-cols-4 sm:grid-cols-2 gap-x-7 gap-y-7 ">
            <WhatCartReusabel image={delivery} title='Delivery' />
            <WhatCartReusabel image={cashback} title='Cashback' />
            <WhatCartReusabel image={premium} title='Premium' />
            <WhatCartReusabel image={support} title='24/7 Support' />
        </div>
        </Container>
    </section>
  )
}

export default Shopex