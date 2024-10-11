import Image from 'next/image'
import React from 'react'
import unique from '#/unique.png'
import Container from './Container'

const UniqueFeature = () => {
  return (
    <section className='bg-[#F1F0FF]'>
        <Container>
            <Image className='w-[80%] mx-auto' src={unique} alt='unique' />
        </Container>
    </section>
  )
}

export default UniqueFeature