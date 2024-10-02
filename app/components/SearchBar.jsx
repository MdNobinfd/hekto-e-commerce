"use client"; // This must be the first line
import React from 'react'
import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <>
    <div className='flex items-center'>
        <input type='text' placeholder='Search' className='w-[266px] h-[40px] px-3 bg-[#D9D9D9] outline-none'/>
        <div className='w-[51px] h-[40px] text-[white] text-[20px] font-bold bg-[#FB2E86] flex items-center justify-center'>
        <IoIosSearch />
        </div>
    </div>
    
    </>
  )
}

export default SearchBar