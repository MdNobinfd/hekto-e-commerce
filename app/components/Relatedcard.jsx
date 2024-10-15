// "use client"
// import React from 'react'
// import Image from 'next/image'
// import getAlldata from '@/lib/getAlldata'
// import Link from 'next/link'
// import Container from './Container'
// import { CiStar } from 'react-icons/ci'
// import { FaStar } from 'react-icons/fa6'
// const Relatedcard = ({relatedproduct}) => {
//   const renderRating = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => {
//       let ratingNumber = index + 0.5;
//       return rating >= index + 1 && rating > ratingNumber ? (
//         <FaStar size={20} className='text-[#FFC416]' key={index} />
//       ) : (
//         <CiStar size={20} className='text-[#FFC416]' key={index} />
//       );
//     });
//   };
  
//   return (
//     <>
//     <Container>
//     <div className='container flex justify-between flex-w'>
//     {relatedproduct.products.slice(0, 4).map((item)=>(
//         <>
//       <Link href={`/${item.id}`}>
//   <div key={item.id} className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//    {/* Product Image */}
//    <Image
//      src={item.thumbnail}
//      alt="Mens Fashion Wear"
//      width={270}
//      height={340}
//    />

//    {/* Product Details */}
//    <div className="p-4">
//      <div className='flex items-center justify-between'>
//      <h3 className="text-lg font-semibold text-blue-900">Mens Fashion Wear</h3>
//        {renderRating(relatedproduct.products.rating)}
//      {/* <div className="flex items-center mt-2">
//        <span className="text-yellow-400">★ ★ ★ ★</span>
//        <span className="text-gray-300">★</span>
//      </div> */}
//      </div>
   
//      <p className="text-gray-500 mt-2">$43.00</p>
//    </div>
//  </div>
//       </Link>
        
//         </>
 
//     ))}
//     </div>
//     </Container>
//     </>
//   )
// }

// export default Relatedcard


"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './Container';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa6';

const Relatedcard = ({ relatedproduct }) => {
  const renderRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => {
      let ratingNumber = index + 0.5;
      return rating >= index + 1 && rating > ratingNumber ? (
        <FaStar size={20} className='text-[#FFC416]' key={index} />
      ) : (
        <CiStar size={20} className='text-[#FFC416]' key={index} />
      );
    });
  };

  return (
    <Container>
      <div className='container flex justify-between flex-w'>
        {relatedproduct.products.slice(0, 4).map((item) => (
          <Link key={item.id} href={`/${item.id}`}>
            <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <Image
                src={item.thumbnail}
                alt={item.title || "Product Image"} // Added alt text for better accessibility
                width={270}
                height={340}
              />

              {/* Product Details */}
              <div className="p-4">
                <div className='flex items-center justify-between'>
                  <div className="w-1/2">
                  <h3 className="text-lg font-semibold text-blue-900">{item.title || "Mens Fashion Wear"}</h3>
                  </div>
                  <div className="w-1/2 flex justify-end">
                  {renderRating(item.rating)} {/* Accessing rating from each item */}
                  </div>
                </div>
                <p className="text-gray-500 mt-2">${item.price || '43.00'}</p> {/* Added price dynamically */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Relatedcard;
