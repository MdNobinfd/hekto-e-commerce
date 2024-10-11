import React from 'react'
import Brand from './Brand'
import Container from './Container'
import FaqRight from './FaqRight'
import FaqLeft from './FaqLeft'

const FaqInfot = () => {
  return (
    <section className='pt-[123px] pb-[90px]'>
        <Container>
        <div className="lg:grid grid-cols-2 gap-x-[106px] mb-[92px]  gap-y-10">
            <FaqRight />
            <FaqLeft />
        </div>
        </Container>
        <Brand />
    </section>
  )
}

export default FaqInfot