import Image from 'next/image';
import React from 'react';
import blogimg from '#/blog1.webp'
import { FaPenNib } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import Link from 'next/link';

const Blogtext = ({ allproduct }) => {
  // Slice the array to limit to 15 posts
  const limitedPosts = allproduct.slice(0, 15);
  
  return (
    <>
      {limitedPosts.map((item, index) => (
        
        <div key={index} className='pb-[30px]'>
          {/* Image part */}
          <div>
            <Image src={blogimg} alt='blogimg' className='w-full' />
          </div>
          {/* Name or Date part */}
          <div className='flex items-center gap-8 py-[27px]'>
            <div className='flex items-center gap-5'>
              <FaPenNib className='text-[#FB2E86]' />
              <span className='px-[40px] py-[4px] bg-[#FFE7F9] text-[#151875]'>Surf Auxion</span>
            </div>
            <div className='flex items-center gap-5'>
              <MdOutlineDateRange className='text-[#FFA454]' />
              <span className='px-[40px] py-[4px] bg-[#FFECE2] text-[#151875]'>Aug 09 2020</span>
            </div>
          </div>
          {/* Title or p tag */}
          <div>
            <Link href={`/blog/${item.id}`}><h3>{item.title}</h3></Link>
            <p className='py-[25px] text-[16px] leading-[25px] text-[#8A8FB9]'>{item.body} Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
          </div>
          {/* Link button */}
          <Link href={`/blog/${item.id}`}><button className='text-[18px] text-[#151875] leading-[21px] font-medium'>Read More</button></Link>
          
        </div>
      ))}
    </>
  );
};

export default Blogtext;
