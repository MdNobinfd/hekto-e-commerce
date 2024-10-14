import React from 'react'
import blog from '#/blog.png'
import Image from 'next/image'
import { FaCalendar, FaPen } from 'react-icons/fa'
import Link from 'next/link'

const BlogCartReuseable = () => {
  return (
    <>
     <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image className='w-full' src={blog} alt='blogcard'/>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-500 mt-[5px] mb-[31px]">
          <span className="flex items-center mr-4">
           <FaPen className='text-[#FB2E86]' />
            SaberAli
          </span>
          <span className="flex items-center">
          <FaCalendar className='text-[#FFA454]' />
            21 August, 2020
          </span>
        </div>
        <h3 className="text-xl font-semibold text-blue-900">
          Top esssential Trends in 2021
        </h3>
        <p className="text-gray-500 pt-[17px] pb-[14px]">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <Link href='/blog'>
        <button className="text-blue-500 font-semibold block mb-[25px] underline">
          Read More
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default BlogCartReuseable