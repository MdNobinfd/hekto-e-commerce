import Image from "next/image";
import React from "react";
import { FaMinus } from "react-icons/fa";
import { FiShoppingCart, FiZoomIn } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({
  subsets:['latin'],
  weight:['400','700']
})

const ProductReuseable1 = ({item}) => {
  return (
    <div className="group shadow-md">
      <div className="relative overflow-hidden bg-[#F6F7FB] pt-[41px] pb-[20px]">
        {/* Product hover icon */}
        <div className="absolute top-[18px] group-hover:left-[11px] left-[-200px] duration-300 ease-linear flex items-center gap-x-2">
          {/* cart icon */}
          <div className="hover:bg-[#EEEFFB] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2">
            <FiShoppingCart size={20} />
          </div>
          {/* zoom icon */}
          <div className="hover:bg-[#EEEFFB] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2">
            <CiHeart size={20} />
          </div>
          {/* Heart icon */}
          <div className="hover:bg-[#EEEFFB] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2">
            <FiZoomIn size={20} />
          </div>
        </div>
        {/* Cart image  */}
        <Image property="true" width={175} height={175} src={item.thumbnail} className="mx-auto"  alt="Mens Fashion Wear" />
        {/* Hover details button */}
        <div className="absolute group-hover:bottom-[9px] bottom-[-100px] duration-300 ease-linear left-[50%] translate-x-[-50%] ">
          <Link href={`/product/${item.id}`} prefetch={false}>
          <button className="py-[9px] px-[13px] bg-[#08D15F] rounded-sm font-medium text-xs leading-3 text-white">View Details</button>
          </Link>
        </div>
      </div>
      {/* Cart bottom */}
      <div className="pt-[15px] pb-[17px] text-center group-hover:bg-[#2F1AC4] duration-300 ease-linear">
        <h4 className={`${lato.className} font-bold text-lg text-[#FB2E86] leading-[21px] group-hover:text-white`}>{item.title}</h4>
        <div className="flex justify-center items-center gap-x-[5px] my-3">
          <FaMinus className="text-[#05E6B7]" />
          <FaMinus className="text-[#F701A8]" />
          <FaMinus className="text-[#00009D] group-hover:text-white" />
        </div>
        <h5 className="font-normal text-[#151875] leading-4 group-hover:text-white pb-3 ">Code - Y523201</h5>
        <h5 className={`${lato.className} font-normal text-[#151875] leading-4 group-hover:text-white `}>${item.price}</h5>
      </div>
    </div>
  );
};

export default ProductReuseable1;
