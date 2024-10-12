import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHeart, CiStar } from 'react-icons/ci'
import { FaCircle, FaStar } from 'react-icons/fa'
import { FiShoppingCart, FiZoomIn } from 'react-icons/fi'

const ShoplistCart = ({item}) => {
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
    <div
    key={item.id}
    className={` flex items-center gap-x-[15px] lg:gap-x-[32px] my-[15px] lg:my-[34px] lg:pl-[20px] py-[10px] lg:py-[20px] box-shadow3 cursor-pointer`}
  >
    <Link href={`/product/${item.id}`}>
      <Image
        alt={item.title}
        src={item.thumbnail}
        width={250}
        height={250}
        className="w-[150px] h-[100px] lg:w-[100%] lg:h-[100%] bg-[#F6F7FB]"
      />
    </Link>
    <div className="w-[100%]">
      <Link href={`/ProductDetails/${item.id}`}>
        <div className="flex items-center gap-x-[8px] lg:gap-x-[67px]">
          <div className="text-[#111C85] text-[14px] lg:text-[19px] font-bold">
            {item.title}
          </div>
          <div className="flex justify-center propss-center gap-x-[6px]">
          <FaCircle size={15} className="text-[#DE9034]" />
          <FaCircle size={15} className="text-[#EC42A2]" />
          <FaCircle size={15} className="text-[#8568FF]" />
        </div>
        </div>
        <div className="flex items-center gap-x-[17px] my-[5px] lg:my-[15px]">
          <div className="text-[#151875] text-[12px] font-normal">
            ${item.price}
          </div>
          {item.discountPercentage > 0 && (
            <div className="text-[#FB2E86] text-[12px] font-normal line-through">
              $
              {(
                (item.price / (100 - item.discountPercentage)) *
                100
              ).toFixed(2)}
            </div>
          )}
          <div className="flex gap-x-[3px]">
            {renderRating(item.rating)}
          </div>
        </div>
        <div className="max-w-[691px] text-[#9295AA] text-[9px] lg:text-[17px] font-normal">
          {item.description}
        </div>
      </Link>
      <div
        className="lg:hidden text-[#151875] text-[14px] font-normal mt-[12px]"
      >
        Add to cart
      </div>
      <div
        className="hidden lg:flex items-center gap-x-[20px] mt-[30px]"
       
      >
        <div className="lg:w-[35px] lg:h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
        <FiShoppingCart size={20} />
        </div>
        <div className="w-[35px] h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
        <CiHeart size={20} />
        </div>
        <div className="w-[35px] h-[35px] rounded-full pt-[10px] bg-[#fff] box-shadow4">
        <FiZoomIn size={20} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ShoplistCart