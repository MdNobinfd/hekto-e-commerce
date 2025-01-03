import React from 'react'

const FaqLeft = () => {
  return (
    <div className='md:pt-[66px] py-[30px] md:pb-[62px]  md:pl-[42px] md:pr-[75px] px-2 bg-[#F8F8FD]'>
      <h3 className='pb-[114px] font-bold text-[24px] text-[#1D3178] leading-[30px]'>Ask a Question</h3>
      <div className="">
        <div className="mb-[35px]">
        <input className='border border-[#CDCEDC] w-full placeholder:text-base placeholder:text-[#8990B1] placeholder:font-semibold placeholder:leading-[30px] py-[10px] pl-[8px]' type="text" placeholder='Your Name*' />
        </div>
        <div className="mb-[45px]">
        <select className='border border-[#CDCEDC] w-full text-base text-[#8990B1] font-semibold py-[10px] pl-[8px] ' name="" id="">
          <option value="">Subject*</option>
          <option value="">Subject*</option>
          <option value="">Subject</option>
          <option value="">Subject</option>
        </select>
        </div>
        <div className="mb-[41px]">
        <textarea className='border border-[#CDCEDC] w-full placeholder:text-base placeholder:text-[#8990B1] placeholder:font-semibold placeholder:leading-[30px] pl-[8px] pt-[11px] pb-[156px]' name="" id="" placeholder='Type Your Message*'></textarea>
        </div>
        <div className="">
          <button className='px-[40px] py-[9px] bg-[#FB2E86] text-base text-white leading-[30px]'>Send Mail</button>
        </div>
      </div>
    </div>
  )
}

export default FaqLeft