"use client"; // This must be the first line
import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
const Menu = () => {
    const [open, setOpen] = useState(false);
  return (
   <>
       <div className="">
        <div onClick={() => setOpen((prev) => !prev)} className='cursor-pointer'>
        {open ? <RxCross2 /> : <FaBarsStaggered />}
        </div>
      {open && (
        <div onClick={()=> setOpen(false)} className="absolute bg-black text-white left-0 top-[200px] w-full h-[calc(100vh- -100px)] flex flex-col items-center justify-center gap-8 text-xl py-4  z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Pages</Link>
          <Link href={"/product"}>Products</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      )}
    </div>
   </>
  )
}

export default Menu