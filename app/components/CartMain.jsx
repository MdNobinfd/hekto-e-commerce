import React from 'react'
import PageHeaderReusable from './allReuseableCart/PageHeaderReusable'
import Container from './Container'
import CartLeft from './CartLeft'
import CartRight from './CartRight'

const CartMain = () => {
  return (
    <section className='mb-[145px]'>
    <PageHeaderReusable title='Shopping Curt' />
    <Container>
        <div className="lg:flex mt-[131px] justify-between ">
            <div className="lg:w-[72%] w-full">
                <CartLeft />
            </div>
            <div className="lg:w-[23%] w-full">
                <CartRight />
            </div>
        </div>
    </Container>
    </section>
  )
}

export default CartMain