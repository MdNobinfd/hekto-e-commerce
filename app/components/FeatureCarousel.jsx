"use client";
import React from 'react'
import ProductReuseable1 from './allReuseableCart/ProductReuseable1'
import Slider from 'react-slick';

const FeatureCarousel = ({allProduct}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           dots: false
        }
      }
    ],
    appendDots: (dots) => {
      const activeIndex = dots.findIndex((dot) =>
        dot.props.className.includes("slick-active")
      );
      const dotsToShow = dots.slice(0, 4);

      return (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            position: "absolute",
            left: "50%",
            bottom: "-15px",
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-[91px] h-[4px] flex gap-x-[6px]">
            {dotsToShow.map((dot, index) => (
              <div
                key={index}
                className={`h-[4px] rounded-[2px] ${
                  index === activeIndex % 4
                    ? "w-[21px] bg-[#FB2E86]"
                    : "w-[16px] bg-[#FEBAD7]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      );
    },
    customPaging: (i) => {
      const totalDots = 4;

      return (
        <div
          style={{
            height: "4px",
            width: "16px",
            borderRadius: "2px",
            backgroundColor: i % totalDots === 0 ? "#FB2E86" : "#FEBAD7",
          }}
        />
      );
    },
  };
  return (
    <>
    <Slider {...settings}>
      {allProduct.products.map((item,i)=>(
    <div key={i} className='!w-[90%] lg:!ml-[20px] !ml-[15px]'>
        <ProductReuseable1 item={item} />
    </div>
      ))}

    </Slider>
    </>
  )
}

export default FeatureCarousel