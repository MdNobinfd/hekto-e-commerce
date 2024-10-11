import React from "react";
import aboutclient from '#/aboutclient.png'
import Image from "next/image";
import { FaMinus } from "react-icons/fa";

const AboutClient = () => {
  return (
    <section className="text-center mt-[133px] mb-[305px] pt-[71px] pb-[77px] bg-[#FBFBFF]">
        <div className="lg:w-[689px] mx-auto">
      <div className=" pb-[64px]">
        <h2 className="font-bold text-[42px] leading-[25px]">Our Features</h2>
      </div>
      <div className="">
        <Image className="w-[191px] mx-auto" src={aboutclient} alt="aboutclient" />
        <div className="pt-[25px] pb-[14px]">
            <h3 className="text-[22px] text-[#151875] font-semibold leading-[25px]">Selina Gomez</h3>
            <p className="font-semibold text-[10px] text-[#8A8FB9] leading-[25px] pb-[14px]">Selina Gomez</p>
            <p className="font-semibold text-[16px] text-[#8A8FB9] leading-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
        </div>
        <div className="flex justify-center gap-x-[5px]">
            <FaMinus size={18} className="text-[#FF75B0]" />
            <FaMinus size={18} className="text-[#FB2E86]" />
            <FaMinus size={18} className="text-[#FF75B0]" />
        </div>
      </div>
        </div>
    </section>
  );
};

export default AboutClient;
