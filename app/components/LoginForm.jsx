import React from 'react'
import Container from './Container'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets:['latin'],
    weight:['400','700']
})

const LoginForm = () => {
  return (
    <section className='pt-[120px] pb-[109px]'>
        <Container>
            <div className="lg:w-[544px] mx-auto py-[50px] px-[55px] shadow-[0px_0px_25px_10px_#F8F8FB] text-center">
                <h2 className='font-bold text-[32px] leading-[37px]'>Login</h2>
                <h4 className={`${lato.className} font-normal text-[17px] text-[#9096B2] leading-[20px] pt-[7px] pb-[37px]`}>Please login using account detail bellow.</h4>
                <div className="">
                  <div className="">
                  <input className='border border-[#CDCEDC] w-full placeholder:text-base placeholder:text-[#8990B1] placeholder:font-semibold placeholder:leading-[30px] pt-[15px] pb-[18px] pl-[8px] rounded-[2px]' type="email" placeholder='Email Address' />
                  </div>
                  <div className="mt-[23px] mb-[13px]">
                  <input className='border border-[#CDCEDC] w-full placeholder:text-base placeholder:text-[#8990B1] placeholder:font-semibold placeholder:leading-[30px] pt-[15px] pb-[18px] pl-[8px] rounded-[2px]' type="password" placeholder='password' />
                  </div>
                  <h4 className={`${lato.className} font-normal text-[17px] text-[#9096B2] leading-[20px]`}>Forgot Your Password?</h4>
                  <button className='w-full pt-[13px] pb-[14px] bg-[#FB2E86] font-bold text-[17px] text-white leading-[30px] rounded-[3px] mt-[23px] mb-[28px]'>Login In</button>
                  <h4 className={`${lato.className} font-normal text-[17px] text-[#9096B2] leading-[20px]`}>Don’t have an Account?Create account</h4>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default LoginForm