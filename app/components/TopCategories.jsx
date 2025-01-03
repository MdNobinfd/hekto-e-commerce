import React from 'react'
import Container from './Container'
import TopCategoriReuseabel from './allReuseableCart/TopCategoriReuseabel'
import topnav from '#/topnav.png'
import Image from 'next/image'

const TopCategories = () => {
  return (
    <section className='md:pt-[79px]  pt-[30px] md:pb-[125px] pb-[30px] lg:px-[25px] px-[15px]  '>
        <Container>
        <div className="mb-[56px]">
          <h2 className="header">Top Categories</h2>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 sm:gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-x-5 xl:gap-x-10">
            <TopCategoriReuseabel />
            <TopCategoriReuseabel />
            <TopCategoriReuseabel />
            <TopCategoriReuseabel />
        </div>
        <div className="mt-[38px]">
            <Image className='mx-auto' src={topnav} alt='topnav' />
        </div>
        </Container>
    </section>
  )
}

export default TopCategories