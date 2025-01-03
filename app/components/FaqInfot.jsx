import React from 'react'
import Brand from './Brand'
import Container from './Container'
import FaqRight from './FaqRight'
import FaqLeft from './FaqLeft'

const FaqInfot = () => {
  return (
    <section className='lg:pt-[123px] pt-[30px] lg:pb-[90px] pb-[30px] lg:px-[25px] px-[15px]'>
        <Container>
        <div className="lg:grid grid-cols-2 gap-x-[50px] xl:gap-x-[106px] md:mb-[92px] mb-[30px] gap-y-10">
            <FaqRight />
            <FaqLeft />
        </div>
        </Container>
        <Brand />
    </section>
  )
}

export default FaqInfot