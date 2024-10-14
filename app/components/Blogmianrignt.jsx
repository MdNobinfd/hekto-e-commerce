import React from "react";
import blogr1 from '#/blogr1.png'
import blogr2 from '#/blogr2.png'
import blogr3 from '#/blogr3.png'
import blogr4 from '#/blogr4.png'
import blogr5 from '#/blogr5.png'
import blogr6 from '#/blogr6.png'
import blogr7 from '#/blogr7.png'
import blogr8 from '#/blogr8.png'
import blogr9 from '#/blogr9.png'
import blogr10 from '#/blogr10.png'
import blogr11 from '#/blogr11.png'
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Blogmianrignt = () => {
  return (
    <div>
      <div className="mt-[48px] lg:mt-0">
        <h3 className="text-[22px] text-[#151875] font-bold leading-[25px]">Search</h3>
        <div className="flex items-center justify-between lg:w-[270px] h-[40px] leading-[38px] rounded-[2px] border border-[#BDBDD8] px-[10px] text-[#1518751A] text-[14px] font-normal mt-[15px] mb-[52px]">
          <input type="text" placeholder="Search For Posts" className="" />
          <CiSearch className="text-black font-bold" />
        </div>
        <h5>Categories</h5>
        <div className="lg:flex lg:gap-x-[10px] mt-[25px]">
          <div className="flex justify-center lg:block">
            <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
              Watches
            </div>
            <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear lg:my-[12px]">
              Laptops
            </div>
            <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
              Mobile
            </div>
          </div>
          <div className="flex justify-center lg:block">
            <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
              Accessories
            </div>
            <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear lg:my-[12px]">
              Jewelries
            </div>
            <div className="w-[100px] h-[30px] text-center leading-[30px] rounded-[3px] text-[#3F509E] text-[14px] font-normal hover:bg-[#F939BF] hover:text-[#fff] duration-300 ease-linear">
              Bags
            </div>
          </div>
        </div>
        <h5 className="py-[37px]">Recent Post</h5>
        <div className="flex gap-x-[6px]">
          <Image src={blogr1} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              It is a long established fact
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <div className="flex gap-x-[6px] py-[22px]">
        <Image src={blogr2} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              It is a long established fact
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <div className="flex gap-x-[6px]">
        <Image src={blogr3} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              It is a long established fact
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <div className="flex gap-x-[6px] pt-[22px]">
        <Image src={blogr4} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              It is a long established fact
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <h5 className="py-[37px]">Sale Product</h5>
        <div className="flex gap-x-[6px]">
        <Image src={blogr5} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              Elit ornare in enim mauris.
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <div className="flex gap-x-[6px] py-[22px]">
        <Image src={blogr6} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              Viverra pulvinar et enim.
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <div className="flex gap-x-[6px]">
        <Image src={blogr7} alt="blogr1" className="w-[70px] h-[51px]" />
          <div className="pt-[7px]">
            <div className="text-[#3F509E] text-[14px] font-normal">
              Mattis varius donec fdsfd
            </div>
            <div className="text-[#8A8FB9] text-[11px] font-semibold">
              Aug 09 2020
            </div>
          </div>
        </div>
        <h5 className="py-[37px]">Offer Product</h5>
        <div className="flex gap-x-[15px]">
          <div className="">
            <div className="">
            <Image src={blogr8} alt="blogr1" />
              <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                Duis lectus est.
              </div>
              <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                $12.00 - $15.00
              </div>
            </div>
            <div className="pt-[30px]">
            <Image src={blogr9} alt="blogr1" />
              <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                Sed placerat.
              </div>
              <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                $12.00 - $15.00
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
            <Image src={blogr10} alt="blogr1" />
              <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                Netus proin.
              </div>
              <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                $12.00 - $15.00
              </div>
            </div>
            <div className="pt-[30px]">
            <Image src={blogr11} alt="blogr1" />
              <div className="text-[#151875] text-[14px] font-semibold text-center pt-[9px] pb-[6px]">
                Platea in.
              </div>
              <div className="text-[#8A8FB9] text-[12px] font-semibold text-center">
                $12.00 - $15.00
              </div>
            </div>
          </div>
        </div>
        <h5 className="pt-[37px] pb-[23px]">Follow</h5>
        <div className="w-[130px] rounded-[3px] flex gap-x-[18px] box-shadow6 pl-[11px] px-[12px] py-[8px]">
          <div className="w-[25px] h-[25px] pl-[3px] pt-[4px] rounded-full text-[#fff] bg-[#5625DF]">
          <FaFacebookF />
          </div>
          <div className="w-[25px] h-[25px] pl-[4px] pt-[4px] rounded-full text-[#fff] bg-[#FF27B7]">
          <FaInstagram />
          </div>
          <div className="w-[25px] h-[25px] pl-[4px] pt-[4px] rounded-full text-[#fff] bg-[#37DAF3]">
          <FaTwitter />
          </div>
        </div>
        <h5 className="pt-[37px] pb-[18px]">Tags</h5>
        <div className="">
          <div className="flex gap-x-[41px]">
            <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
              General
            </div>
            <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
              Atsanil
            </div>
            <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
              Insas.
            </div>
          </div>
          <div className="flex gap-x-[41px] pt-[12px]">
            <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
              Bibsaas
            </div>
            <div className="text-[#151875] hover:text-[#FB2E86] text-[16px] font-normal underline cursor-pointer">
              Nulla.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogmianrignt;
