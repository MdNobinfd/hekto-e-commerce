import React from "react";
import Image from "next/image";
import sale from "#/sale.png";
import { FiShoppingCart, FiZoomIn } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const ProductReuseableThree = (props) => {
  return (
    <div className="group">
      <div className="relative group-hover:bg-white duration-300 ease-linear overflow-hidden bg-[#F7F7F7] pt-[30px] pb-[7px]">
        <div className="absolute top-[15px] group-hover:left-[18px] left-[-200px] duration-300 ease-linear">
          <Image src={sale} alt="alkdjfl" />
          <div className="absolute top-[23px] left-[29px] rotate-[-15deg] text-sm text-white leading-4">
            sale
          </div>
        </div>
        <Image className="w-[220px] mx-auto" src={props.image} alt="laksdfj" />
        {/* Hover Effect div */}
        <div className="absolute bottom-[-200px] group-hover:bottom-[28px] left-[15px] duration-300 ease-linear">
          {/* cart icon */}
          <div className="hover:bg-[#FFFFFF] cursor-pointer text-[#2F1AC4] duration-300 ease-linear rounded-full p-2 my-[5px]">
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
      <div className="flex justify-between items-center pt-[15px]">
        <h4 className="border-b text-base text-[#151875] leading-[18px] pb-[3px]">
          Comfort Handy Craft
        </h4>
        <h5 className="text-sm text-[#151875] leading-4">
          $42.00 <span className="text-xs text-[#FB2448]">$65.00</span>
        </h5>
      </div>
    </div>
  );
};

export default ProductReuseableThree;
