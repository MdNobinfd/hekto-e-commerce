import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram, CiTwitter  } from "react-icons/ci";
import Container from './Container';
import logo from '../../public/Hekto.png';
import Image from 'next/image';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400','700']
})

const Footer = () => {
  return (
   <section className='bg-[#EEEFFB]'>
    <Container>
   <div className='  py-[30px] md:py-[40px] lg:py-[90px]'>
        <div className='md:flex md:justify-between'>
          {/* Footer Logo part */}
            <div className='w-[100%] md:w-[40%] pb-4 md:pb-0'>
              <div className=''>
                <Image src={logo} width={100} alt='Footer_logo'/>
              </div>
              <div className='py-[20px]'>
                <input type='text' placeholder='Enter Email Address' className={`${lato.className} px-[30px] py-[10px] bg-[#FFFFFF] outline-none`}/>
                <button className={`${lato.className} md:mt-[12px] lg:mt-0 px-[30px] py-[10px] bg-[#FB2E86] text-[16px] text-[white] font-bold`}>Sign Up</button>
              </div>
              <div className=''>
                <p className={`${lato.className} footer_list`}>Contact Info</p>
                <p className={`${lato.className} footer_list`}>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>
            {/* Catagories part */}
            <div className='w-[100%] md:w-[20%] pb-4 md:pb-0'>
              <h4 className='
               footer_list_head'>Catagories</h4>
              <ul className={`${lato.className}`}>
                <li className='footer_list'>Laptops & Computers</li>
                <li className='footer_list'>Cameras & Photography</li>
                <li className='footer_list'>Smart Phones & Tablets</li>
                <li className='footer_list'>Video Games & Consoles</li>
                <li className='md:text-[10px] lg:text-[16px] text-[#8A8FB9]  leading-[18px]'>Waterproof Headphones</li>
              </ul>
            </div>
            {/* Customer Care part */}
            <div className='w-[100%] md:w-[20%] pb-4 md:pb-0'>
            <h4 className='footer_list_head'>Customer Care</h4>
              <ul className={`${lato.className}`}>
                <li className='footer_list'>My Account</li>
                <li className='footer_list'>Discount</li>
                <li className='footer_list'>Returns</li>
                <li className='footer_list'>Orders History</li>
                <li className='footer_list'>Order Tracking</li>
              </ul>
            </div>
            {/* Pages part */}
            <div className='w-[100%] md:w-[20%] pb-4 md:pb-0'>
            <h4 className='footer_list_head'>Pages</h4>
              <ul className={`${lato.className}`}>
                <li className='footer_list'>Blog</li>
                <li className='footer_list'>Browse the Shop</li>
                <li className='footer_list'>Category</li>
                <li className='footer_list'>Pre-Built Pages</li>
                <li className='footer_list'>Visual Composer Elements</li>
                <li className='footer_list'>WooCommerce Pages</li>
              </ul>
            </div>
        </div>
   </div>
    </Container>
   <div className='w-[100%] bg-[#E7E4F8]'>
        <div className='container flex items-center'>
            <div className='w-[50%] flex justify-center'>
                <p className='text-[14px] text-[#9DA0AE] leading-[16px] font-[600]'>©Webecy - All Rights Reserved</p>
            </div>
            <div className='w-[50%] flex justify-center'>
              <ul className='flex items-center gap-x-3'>
                <li className='w-[22px] h-[22px] rounded-full bg-[#151875] text-[white] flex items-center justify-center cursor-pointer'><TiSocialFacebook /></li>
                <li className='w-[22px] h-[22px] rounded-full bg-[#151875] text-[white] flex items-center justify-center cursor-pointer'><CiInstagram /></li>
                <li className='w-[22px] h-[22px] rounded-full bg-[#151875] text-[white] flex items-center justify-center cursor-pointer'><CiTwitter /></li>
              </ul>
            </div>
        </div>
   </div>
   </section>
  )
}

export default Footer