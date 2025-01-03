import React from 'react'
import ProductReuseableThree from './allReuseableCart/ProductReuseableThree'
import Container from './Container'
import product from '#/product.png'

const LeatestProduct = () => {
  return (
    <div className="lg:px-[25px] px-[15px]">
    <Container>
      <div className="mb-[19px]">
          <h2 className="header">Leatest Products</h2>
        </div>
    <div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-6 mb-10'>
        <ProductReuseableThree image={product} />
        <ProductReuseableThree image={product} />
        <ProductReuseableThree image={product} />
        <ProductReuseableThree image={product} />
        <ProductReuseableThree image={product} />
        <ProductReuseableThree image={product} />
    </div>
    </Container>
    </div>
  )
}

export default LeatestProduct