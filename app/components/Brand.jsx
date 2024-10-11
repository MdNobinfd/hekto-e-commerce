import Image from 'next/image'
import React from 'react'
import brand from '#/brand.png'
import Container from './Container'

const Brand = () => {
  return (
    <Container>
        <Image className='mx-auto' src={brand} alt='lasdkj' />
    </Container>
  )
}

export default Brand