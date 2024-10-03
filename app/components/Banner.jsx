"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import banner from '#/banner.png'

const Banner = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className=''
            >
              <ul className=' absolute top-[60%] left-[10%]'> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className='w-[15px] h-[15px] rounded-full bg-[#c5bec1] my-[10px]  text-transparent '>
              {i + 1}
            </div>
          )
      };
  return (
    <section>
        <Slider {...settings}>
            <div className="">
                <Image priority className='w-full h-auto' src={banner}  alt="Mens Fashion Wear" />
            </div>
            <div className="">
                <Image priority className='w-full h-auto' src={banner}  alt="Mens Fashion Wear" />
            </div>
            <div className="">
                <Image priority className='w-full h-auto' src={banner}  alt="Mens Fashion Wear" />
            </div>
        </Slider>
    </section>
  )
}

export default Banner