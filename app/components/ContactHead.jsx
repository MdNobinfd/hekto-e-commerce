import React from "react";
import { FaCircle } from "react-icons/fa";
import Container from "./Container";
import { Lato } from "next/font/google";
import Contactmeddle from "./Contactmeddle";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ContactHead = () => {
  return (
    <section className="pt-[120px] pb-[139px]">
      <Container>
        <div className="lg:grid grid-cols-2 gap-x-[117px] mb-[120px]">
          <div className="">
            <h2 className="font-bold leading-[48px]">Information About us</h2>
            <p
              className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9] pt-[13px] pb-[50px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex gap-x-[14px]">
              <FaCircle size={25} className="text-[#5625DF]" />
              <FaCircle size={25} className="text-[#FF27B7]" />
              <FaCircle size={25} className="text-[#37DAF3]" />
            </div>
          </div>
          <div className="">
            <h2 className="font-bold leading-[48px] pb-[26px]">Contact Way</h2>
            <div className="grid grid-cols-2 items-center gap-x-[32] gap-y-[49px]">
              <div className="flex items-center gap-x-[15px]">
                <div className="">
                  <FaCircle className="text-[#5726DF]" size={45} />
                </div>
                <div className="">
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    Tel: 877-67-88-99
                  </h4>
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    E-Mail: shop@store.com
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-x-[15px]">
                <div className="">
                  <FaCircle className="text-[#FB2E86]" size={45} />
                </div>
                <div className="">
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    Tel: 877-67-88-99
                  </h4>
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    E-Mail: shop@store.com
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-x-[15px]">
                <div className="">
                  <FaCircle className="text-[#FFB265]" size={45} />
                </div>
                <div className="">
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    Tel: 877-67-88-99
                  </h4>
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    E-Mail: shop@store.com
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-x-[15px]">
                <div className="">
                  <FaCircle className="text-[#1BE982]" size={45} />
                </div>
                <div className="">
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    Tel: 877-67-88-99
                  </h4>
                  <h4
                    className={`${lato.className} font-semibold leading-[25px] text-[#8A8FB9]`}
                  >
                    E-Mail: shop@store.com
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contactmeddle />
      </Container>
    </section>
  );
};

export default ContactHead;
