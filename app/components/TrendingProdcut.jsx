import React from 'react'
import Container from './Container'
import TrendingCartReuseable from './allReuseableCart/TrendingCartReuseable'
import Image from 'next/image'
import trending1 from '#/trending1.png'
import trending2 from '#/trending2.png'
import trending3 from '#/trending3.png'
import trending4 from '#/trending4.png'
import trending5 from '#/trending5.png'

const TrendingProdcut = () => {
  return (
    <section className='md:pt-[132px] pt-[30px] md:pb-[126px] pb-[30px] lg:px-[25px] px-[15px]'>
        <Container>
        <div className="mb-[39px]">
          <h2 className="header">Trending Products</h2>
        </div>
        <div className="grid md:grid-cols-2  sm:grid-cols-2 gap-4 xl:gap-[29px] lg:grid-cols-4">
            <TrendingCartReuseable />
            <TrendingCartReuseable />
            <TrendingCartReuseable />
            <TrendingCartReuseable />
        </div>
        <div className="sm:flex items-center justify-between mt-[29px]">
            <div className="sm:w-[32%] w-full bg-[#fff5fa] mb-[20px] sm:mb-0">
                <Image className='w-full' src={trending1} alt='image' />
            </div>
            <div className="sm:w-[32%] w-full bg-[#EEEFFB] mb-[20px] sm:mb-0">
                <Image className='w-full' src={trending2} alt='image' />
            </div>
            <div className="sm:w-[25%] w-full ">
                <Image className='w-full mb-3' src={trending3} alt='image' />
                <Image className='w-full mb-3' src={trending4} alt='image' />
                <Image className='w-full' src={trending5} alt='image' />
            </div>
        </div>
        </Container>
    </section>
  )
}

export default TrendingProdcut