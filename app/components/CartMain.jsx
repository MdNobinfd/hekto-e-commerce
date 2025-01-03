'use client'
import React from 'react'
import PageHeaderReusable from './allReuseableCart/PageHeaderReusable'
import Container from './Container'
import CartLeft from './CartLeft'
import CartRight from './CartRight'
import { useSelector } from 'react-redux'
import EmtyCart from './EmtyCart'

const CartMain = () => {
  const data = useSelector((state)=>state.cart.items)
  return (
    <section className='lg:mb-[145px] mb-[30px] md:mb-[50px] lg:px-[25px] px-[15px]'>
    <PageHeaderReusable title='Shopping Curt' />
    <Container>
      {data.length > 0
      ?
      (
        <div className="lg:flex mt-[131px] justify-between ">
            <div className="lg:w-[72%] w-full">
                <CartLeft data={data} />
            </div>
            <div className="lg:w-[23%] w-full">
                <CartRight data={data} />
            </div>
        </div>

      ) 
      :
      (
        <EmtyCart />
      )
      }
    </Container>
    </section>
  )
}

export default CartMain