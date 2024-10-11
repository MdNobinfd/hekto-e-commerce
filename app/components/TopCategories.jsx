import React from 'react'
import Container from './Container'
import TopCategoriReuseabel from './allReuseableCart/TopCategoriReuseabel'
import topnav from '#/topnav.png'
import Image from 'next/image'

const TopCategories = () => {
  return (
    <section className='pt-[79px] pb-[125px] '>
        <Container>
        <div className="mb-[56px]">
          <h2 className="header">Top Categories</h2>
        </div>
        <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4">
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