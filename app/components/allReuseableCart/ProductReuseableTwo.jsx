"use client";
import Image from "next/image";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { FiShoppingCart, FiZoomIn } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add } from "@/lib/store/features/cart/cartsilce";

const ProductReuseableTwo = ( props ) => {
  const dispatch = useDispatch()

  // const handeladd = (item)=>{
  //   dispatch(add({...item, qun:1}))
  // }

  return (
    <div className="group shadow-sm pb-1">
      {/* Image and hover  */}
      <div className="relative overflow-hidden group-hover:bg-[#EBF4F3] duration-300 ease-linear bg-[#F6F7FB] pt-[63px] pb-[29px]">
      <Link href={`/product/${props.id}`} prefetch={false}>
        <Image
          property="true"
          priority={true}
          width={175}
          height={175}
          src={props.thumbnail}
          className="mx-auto"
          alt="Mens Fashion Wear"
        />
      </Link>
        {/* Hover Effect div */}
        <div className="absolute group-hover:bottom-6 bottom-[-200px] left-[11px] duration-300 ease-linear">
          {/* cart icon */}
          <div
          //  onClick={()=>handeladd(props)}
          onClick={()=>dispatch(add({...props, qun:1}))}
            className="hover:bg-[#FFFFFF] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2 my-[5px]">
            <FiShoppingCart size={20} />
          </div>
          {/* zoom icon */}
          <div className="hover:bg-[#FFFFFF] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2 my-[5px]">
            <CiHeart size={20} />
          </div>
          {/* Heart icon */}
          <div className="hover:bg-[#FFFFFF] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2 my-[5px]">
            <FiZoomIn size={20} />
          </div>
        </div>
      </div>
      {/* Title and price */}
      <div className="text-center">
        <h4 className="font-bold text-lg text-[#151875] leading-[18px] pt-[18px] pb-[8px]">
          {props.title}
        </h4>
        <div className="flex justify-center propss-center gap-x-[6px] mb-[15px]">
          <FaCircle size={15} className="text-[#DE9034]" />
          <FaCircle size={15} className="text-[#EC42A2]" />
          <FaCircle size={15} className="text-[#8568FF]" />
        </div>
        <h5 className="font-normal text-[#151875] leading-[14px]">
          ${props.price}{" "}
          <del className="text-[#FB2E86]"> ${props.discountPercentage}</del>
        </h5>
      </div>
    </div>
  );
};

export default ProductReuseableTwo;
