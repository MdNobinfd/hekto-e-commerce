import React from "react";
import PageHeaderReusable from "./allReuseableCart/PageHeaderReusable";
import Brand from "./Brand";
import ordercheck from '#/ordercheck.png'
import orderround from '#/orderround.png'
import ordernote from '#/ordernote.png'
import orderclock from '#/orderclock.png'
import Image from "next/image";
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets:['latin'],
    weight:['400','700']
})


const OrderComplete = () => {
  return (
    <section className="pb-[84px]">
      <PageHeaderReusable title="Order Completed" />
      <div className="relative lg:w-[625px] py-[181px] mx-auto 
      text-center">
        {/* backgound possion design start  */}
        <div className="absolute top-[28%] left-[-56%] hidden lg:block">
            <Image src={orderclock} alt="orderclock" />
            <div className="absolute top-[97px] left-[44px] w-5 h-[280px]  border-l-4 border-[#D2D1D1] border-dotted"></div>
        </div>
        <div className="absolute bottom-[10%] right-[-25%] hidden lg:block ">
        <Image src={ordernote} alt="ordernote" />
        <div className="absolute top-[40px] right-[67px] w-[1020px] h-5  border-t-4 border-[#D2D1D1] border-dotted"></div>
        </div>
        {/* backgound possion design end  */}
        <div className="">
            <div className="relative w-[60px] h-[60px] mx-auto bg-white shadow-xl rounded-full">
                <Image className="w-[46px] h-[36px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={ordercheck} alt="ordercheck" />
                <Image className="w-[87.02px] z-[-10] h-[80.44px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" src={orderround} alt="ordercheck" />
            </div>
            {/* <div className="">
                <Image src={orderround} alt="orderround" />
            </div> */}
        </div>
        <h2 className="font-bold text-[36px] text-[#101750] leading-[42px] pt-[22px]">Your Order Is Completed! </h2>
        <p className={`${lato.className} font-semibold text-base leading-[30px] text-[#8D92A7] pt-[28px] pb-[30px]`}>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <button className={`${lato.className} font-semibold text-base text-white leading-[30px] py-[14px] px-[36px] bg-[#FF1788]`}>Continue Shopping</button>
      </div>
      <Brand />
    </section>
  );
};

export default OrderComplete;
