import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import logo from '#/Hekto.png';
import Menu from './Menu';
import SearchBar from './SearchBar';
import getAlldata from '@/lib/getAlldata';

const Navbar = async () => {

  const data = await getAlldata()

  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='h-[90px]'>
          {/* Mobile Navbar */}
          <div className="lg:hidden h-full pt-2 pb-5">
          <div className=' flex items-center justify-between'>
            <Image src={logo} alt='Logo'  width={100} />
            <Menu />
          </div>
          <div className="flex justify-center md:pt-0 pt-2">
          <SearchBar data={data}/>
          </div>
          </div>

          {/* Larger Screen Navbar */}
          <div className='hidden lg:flex items-center justify-between gap-8 h-full'>
            <div className='flex items-center justify-between w-full lg:w-[50%] gap-6'>
              <Image src={logo} alt='Logo' width={100} />
              <div className='hidden lg:flex gap-6'>
                <Link href="/" prefetch={false} className="hover:text-blue-500 transition-colors">Home</Link>
                <Link href="/product" prefetch={false} className="hover:text-blue-500 transition-colors">Products</Link>
                <Link href="/blog" prefetch={false} className="hover:text-blue-500 transition-colors">Blog </Link>
                <Link href="/shop" prefetch={false} className="hover:text-blue-500 transition-colors">Shop</Link>
                <Link href="/about" prefetch={false} className="hover:text-blue-500 transition-colors">About</Link>
                <Link href="/contact" prefetch={false} className="hover:text-blue-500 transition-colors">Contact</Link>
                <Link href="/faq" prefetch={false} className="hover:text-blue-500 transition-colors">FAQ</Link>
              </div>
            </div>
            <div className='hidden lg:flex w-full lg:w-[50%] justify-end'>
              <SearchBar data={data}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;