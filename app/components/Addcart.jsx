"use client"; // This must be the first line
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser,FaRegHeart  } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Link from 'next/link';
import { useSelector } from 'react-redux';
const Addcart = () => {
    const items = useSelector((state)=>state.cart.items)
  return (
    <>
    <div className='flex items-center'>
        <div className='flex items-center md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>English</span>
            <IoIosArrowDown className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <div className='flex items-center md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>USD</span>
            <IoIosArrowDown className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <Link href='/login'>
        <div className='flex md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>Login</span>
            <FaRegUser className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        </Link>
        <div className='flex items-center md:gap-2'>
            <span className='text-[12px] md:text-[16px] text-[white] font-bold'>Wishlist</span>
            <FaRegHeart className='mr-[10px] text-[white] text-[20px] font-bold'/>
        </div>
        <div className='flex items-center relative'>
            <Link href='/shoppingcart'>
            {items.length > 0
            &&
            <div className="absolute top-[-9px] right-[-23px] h-[30px] w-[30px] bg-white text-black text-center rounded-full">
                <h4 className='leading-[30px]'>{items.length}</h4>
            </div>
            }
            <BsCart2 className='ml-[0px] md:ml-[20px] text-[white] text-[25px] font-bold'/>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Addcart