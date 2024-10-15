import Image from 'next/image'
import React from 'react'
import imagep from '#/contact.png'

const Contactmeddle = () => {
  return (
   <>
   <div className='lg:grid grid-cols-2 items-center gap-x-4 '>
        {/* Search part */}
        <div className=''>
            <h2 className='font-bold text-[#151875] leading-[48px]'>Get In Touch</h2>
            <p className='pt-5 pb-[46px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
           <form action="">
            <div className='space-y-4 sm:space-y-0 flex gap-x-4'>
            <input type="text" placeholder='Your Name*' className='w-1/2 border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'  />
            <input type="text" placeholder='Your E-mail' className='w-1/2 border-2 border-[#A4B6C8B2] px-[10px] py-[13px] outline-none'/>
            </div>
            <input type="text" placeholder='Subject*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] py-[13px] my-[35px] outline-none' />
            <textarea name="Massage" id=""  placeholder='Type Your Messege*' className='w-full border-2 border-[#A4B6C8B2] px-[10px] pt-[13px] pb-[100px] outline-none'></textarea>
          
            <button className='px-[40px] mt-[33px] py-[9px] bg-[#FB2E86] text-[#FFFFFF]' >Send Mail</button>
           </form>
        </div>
        {/* Image part */}
        <div className=''>
            <Image src={imagep} alt='image'/>
        </div>
   </div>
   </>
  )
}

export default Contactmeddle