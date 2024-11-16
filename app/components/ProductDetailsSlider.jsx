// "use client"
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import { Navigation, Thumbs, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import swip1 from '#/swip1.png';
// import swip2 from '#/swip2.png';
// import swip3 from '#/swip3.png';
// import { useState } from 'react';
// import Image from 'next/image';

// const ProductDetailsSlider = ({data}) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   console.log(data)
//   return (
//     <section className=''>
//             <div className="mt-[200px] flex justify-center">
//         {/* Vertical Slider */}
//         <div className="h-[400px] w-[200px] mx-4"> 
//         <Swiper
//                 //  direction={'vertical'}
//                 direction='vertical'
//                 loop={true}
//                 spaceBetween={10}
//                 slidesPerView={3}
//                 onSwiper={setThumbsSwiper}
//                 className="mySwiper md:w-[151px] md:h-[487px]  "
//               >
//             <SwiperSlide>
//               <Image src={swip1} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip1} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip2} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip3} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip1} alt="" />
//             </SwiperSlide>
//           </Swiper>
//         </div>

//         {/* Horizontal Slider */}
//         <div className=" h-[487px] w-[375px] mx-4"> 
//           <Swiper
//            direction={'vertical'}
//            loop={true}
//            spaceBetween={10}
//            slidesPerView={1}
//            navigation={true}
//            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
//            modules={[Navigation, Thumbs]}
//           >
//             <SwiperSlide>
//               <Image className='w-full' src={swip1} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip2} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip3} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Image className='w-full' src={swip1} alt="" />
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProductDetailsSlider




"use client"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import Image from 'next/image';

const ProductDetailsSlider = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // ডাটা থেকে ইমেজ গুলি বের করা
  const images = data?.images || [];  // `data.images` যদি থাকে তবে সেটি ব্যবহার করো, না হলে খালি অ্যারে রাখো।

  return (
    <section className="product-details-slider">
      <div className="mt-[200px] flex justify-center">
        {/* Vertical Slider */}
        <div className="h-[400px] w-[200px] mx-4"> 
          <Swiper
            direction="vertical" // Vertical direction
            loop={true} // Infinite loop
            spaceBetween={10} // Space between slides
            slidesPerView={3} // Number of slides visible at a time
            onSwiper={setThumbsSwiper} // Thumb swiper to be connected with the main swiper
            className="mySwiper md:w-[151px] md:h-[487px]"
          >
            {/* Images are mapped dynamically */}
            {images.length > 0 ? (
              images.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image src={item} alt={`image-${i}`} width={100} height={100} />
                </SwiperSlide>
              ))
            ) : (
              <div>Loading images...</div> // Show a loading message if images are not available yet
            )}
          </Swiper>
        </div>

        {/* Horizontal Slider */}
        <div className="h-[487px] w-[375px] mx-4"> 
          <Swiper
            direction="horizontal" // Corrected to horizontal direction
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Thumbs]}
          >
            {/* Images are mapped dynamically */}
            {images.length > 0 ? (
              images.map((item, i) => (
                <SwiperSlide key={i}>
                  <Image className="w-full" src={item} alt={`image-${i}`} width={500} height={500} />
                </SwiperSlide>
              ))
            ) : (
              <div>Loading images...</div> // Show a loading message if images are not available yet
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsSlider;
