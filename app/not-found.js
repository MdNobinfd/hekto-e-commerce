import React from 'react'
import Container from './components/Container'
import Image from 'next/image'
import Link from 'next/link'
import pageimge from '#/pageimg.png'
import Brand from './components/Brand'

const notfound = () => {
  return (
    <section>
      <Container>
      <div className='w-[100%]'>
            <div className=''>
                <Image src={pageimge} alt='404pageimg' className='w-[50%] mx-auto'/>
            </div>
            <div className=' flex items-center justify-center pb-10'>
              <Link href={`/`}>
              <button className='py-[9px] px-[30px] bg-[#FB2E86] text-[16px] text-[white]'>Back To Home</button>
              </Link>
            </div>
        </div>

      </Container>
    </section>
  )
}

export default notfound