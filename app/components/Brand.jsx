import Image from 'next/image'
import React from 'react'
import brand from '#/brand.png'

const Brand = () => {
  return (
    <div>
        <Image src={brand} />
    </div>
  )
}

export default Brand