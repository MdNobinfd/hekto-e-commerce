import Image from 'next/image'
import React from 'react'
import brand from '#/brand.png'
import Container from './Container'

const Brand = () => {
  return (
    <section className='lg:px-[25px] px-[15px]'>
    <Container>
        <Image className='mx-auto' src={brand} alt='lasdkj' />
    </Container>
    </section>
  )
}

export default Brand