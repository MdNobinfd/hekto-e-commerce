'use client'
import React from "react";
import { Lato } from 'next/font/google'
import checkout from '#/checkout.png'
import Image from "next/image";
import { useSelector } from "react-redux";
const lato = Lato({
  subsets:['latin'],
  weight:['400','700']
})
const CheckoutRight = () => {
  const data = useSelector((state)=>state.cart.items)

  return (
    <section className="lg:mt-0 mt-7">
      {/* add to cart product show */}
      {data.map((item,i)=>{
        return(
          <div key={i} className="flex justify-between items-center pb-[15px] mb-[14px] border-b border-[#E1E1E4] ">
        <div className="w-[20%]">
          <Image width={90} height={87} className="w-[90px]  bg-[#C4C4C4]" src={item.thumbnail} alt="checkout" />
        </div>
        <div className="w-[60%]">
          <h5  className="text-[#15245E] font-semibold  leading-4">{item.title}</h5>
          <h6 className="text-xs text-[#A1A8C1] leading-[14px] py-[6px]">Color:<span className="text-sm">Brown</span></h6>
          <h6  className="text-xs text-[#A1A8C1] leading-[14px]">Size:<span className="text-sm">XL</span></h6>
        </div>
        <div className="w-[10%]">
          <h5 className="text-[#15245E] font-semibold text-right leading-4">${item.price}</h5>
          </div> 
      </div>  
        )
      })}
      {/* new customaer infometion */}
      <div className="py-[33px] px-[30px] bg-[#F4F4FC]">
        <div className="flex justify-between items-center border-b-2 border-[#E8E6F1] pb-[13px]">
          <h4 className={`${lato.className} font-semibold text-[18px] text-[#1D3178] leading-[21px]`}>Subtotals:</h4>
          <h4 className={`${lato.className} font-normal text-base text-[#15245E] leading-[19px]`}>£219.00</h4>
        </div>
        <div className="flex justify-between items-center border-b-2 border-[#E8E6F1] pb-[13px] pt-[34px]">
        <h4 className={`${lato.className} font-semibold text-[18px] text-[#1D3178] leading-[21px]`}>Totals:</h4>
        <h4 className={`${lato.className} font-normal text-base text-[#15245E] leading-[19px]`}>£325.00</h4>
        </div>
        <div className="flex items-center gap-x-2 pt-[27px] pb-[35px]">
          <input className="accent-[#19D16F]" type="checkbox" />
          <p className={`${lato.className} font-medium text-sm text-[#C1C8E1] leading-4`}>
            Shipping & taxes calculated at checkout
          </p>
        </div>
        <div className="">
          <button className={`${lato.className} font-bold text-sm leading-[16px] text-white py-[12px] w-full bg-[#19D16F] rounded-[3px]`}>Proceed To Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutRight;
