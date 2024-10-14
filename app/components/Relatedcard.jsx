"use client"
import React from 'react'
import Image from 'next/image'
import getAlldata from '@/lib/getAlldata'
import Link from 'next/link'
import Container from './Container'
const Relatedcard = ({relatedproduct}) => {

  
  return (
    <>
    <Container>
    <div className='container flex justify-between flex-w'>
    {relatedproduct.products.slice(0, 4).map((item)=>(
      <Link href={`/${item.id}`}>
  <div key={item.id} className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
   {/* Product Image */}
   <Image
     src={item.thumbnail}
     alt="Mens Fashion Wear"
     width={270}
     height={340}
   />

   {/* Product Details */}
   <div className="p-4">
     <div className='flex items-center justify-between'>
     <h3 className="text-lg font-semibold text-blue-900">Mens Fashion Wear</h3>
     <div className="flex items-center mt-2">
       {/* Star Ratings */}
       <span className="text-yellow-400">★ ★ ★ ★</span>
       <span className="text-gray-300">★</span> {/* Inactive star */}
     </div>
     </div>
   
     <p className="text-gray-500 mt-2">$43.00</p>
   </div>
 </div>
      </Link>
 
    ))}
    </div>
    </Container>
    </>
  )
}

export default Relatedcard