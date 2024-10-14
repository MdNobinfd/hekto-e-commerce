"use client"
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
const Addtocartbutton = () => {
  return (
    <>
    <button className="flex items-center gap-x-4 mt-6 px-6 py-2 text-[black] border-2 border-[black] rounded hover:bg-[black] hover:text-[white] ">
      Add To Cart
      <FaRegHeart />
    </button> 
    </>
  )
}

export default Addtocartbutton