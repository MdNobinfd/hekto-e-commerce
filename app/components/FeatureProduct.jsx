import React from 'react'
import Container from './Container'
import product from '#/productdemo.png'
import FeatureCarousel from './FeatureCarousel'
import getAlldata from '@/lib/getAlldata'

const FeatureProduct =  async () => {
  const allProduct = await getAlldata()
  return (
    <section className='mt-[129px] mb-[71px]'>
        <Container>
        <div className="mb-[48px]">
            <h2 className='header'>Featured Products</h2>
        </div>
        <FeatureCarousel allProduct={allProduct} />
        </Container>
    </section>
  )
}

export default FeatureProduct