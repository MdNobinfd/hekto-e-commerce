"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import banner from '#/banner.png'

const Banner = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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