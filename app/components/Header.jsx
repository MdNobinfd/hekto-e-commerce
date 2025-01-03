import React from 'react'
import { CiMail } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import Addcart from './Addcart';
import Container from './Container';

const Header = () => {
  return (
    <section className='bg-[#7E33E0] lg:px-[25px] px-[15px]'>
        <Container>
        <div className="w-full md:h-[44px]  flex items-center">
        <div className="container">
          <div className="md:flex items-center justify-between">
            {/* Left part */}
            <div className="w-[100%] md:w-[50%] sm:block hidden sm:flex items-center justify-center md:justify-normal gap-10">
              {/* Email (Hidden on small screens) */}
              <div className="flex items-center">
                <CiMail className="mr-[10px] text-white text-[20px] font-bold" />
                <span className="text-white font-bold text-sm">mhhasanul@gmail.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <FiPhoneCall className="mr-[10px] text-white text-[20px] font-bold" />
                <span className="text-white font-bold text-sm">(12345) 67890</span>
              </div>
            </div>

            {/* Right part */}
            
            <div className="py-2 md:py-0 flex justify-center w-[100%] md:w-[50%] md:flex items-center md:justify-end">
                <Addcart />
            </div>
          </div>
        </div>
      </div>
        </Container>

    </section>
  )
}

export default Header