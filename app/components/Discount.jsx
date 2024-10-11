import React from 'react'
import Container from './Container'
import Image from 'next/image'
import discount from '#/discount.png'

const Discount = () => {
  return (
    <section>
        <Container>
        <div className="mb-[33px]">
          <h2 className="header">Discount Item</h2>
        </div>
        <div className="">
            <Image className='w-full' src={discount} alt='discount image' />
        </div>
        </Container>
    </section>
  )
}

export default Discount