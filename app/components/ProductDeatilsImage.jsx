"use client";
import React from "react";
import Container from "./Container";
import details1 from '#/details1.png'
import details2 from '#/details2.png'
import Image from "next/image";

const ProductDeatilsImage = ({ data }) => {
  return (
    <section className="mt-[121px] mb-[131px]">
      <Container>
        <div className="shadow-[0px_0px_25px_10px_#F6F4FD] p-[13px] rounded-[2px] flex items-center justify-between">
          <div className="w-[55%] flex gap-x-[21px]">
            <div className="w-[30%]">
                <Image className='w-[151px] h-[155px] mb-[11px]' src={details1} alt='details' />
                <Image className='w-[151px] h-[155px] mb-[11px]' src={details1} alt='details' />
                <Image className='w-[151px] h-[155px]' src={details1} alt='details' />
            </div>
            <div className="w-[70%]">
            <Image src={details2} alt='details' />
            </div>
          </div>
          <div className="w-[45%]"></div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDeatilsImage;
