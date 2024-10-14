"use client"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import swip1 from '#/swip1.png';
import swip2 from '#/swip2.png';
import swip3 from '#/swip3.png';
import { useState } from 'react';
import Image from 'next/image';

const ProductDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className=''>
            <div className="mt-[200px] flex justify-center">
        {/* Vertical Slider */}
        <div className="h-[400px] w-[200px] mx-4"> 
        <Swiper
                //  direction={'vertical'}
                direction='vertical'
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                onSwiper={setThumbsSwiper}
                className="mySwiper md:w-[151px] md:h-[487px]  "
              >
            <SwiperSlide>
              <Image src={swip1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Horizontal Slider */}
        <div className=" h-[487px] w-[375px] mx-4"> 
          <Swiper
           direction={'vertical'}
           loop={true}
           spaceBetween={10}
           slidesPerView={1}
           navigation={true}
           thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
           modules={[Navigation, Thumbs]}
          >
            <SwiperSlide>
              <Image className='w-full' src={swip1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image className='w-full' src={swip1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsSlider