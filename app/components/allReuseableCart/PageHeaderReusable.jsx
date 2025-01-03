import React from "react";
import Container from "../Container";
import Link from "next/link";

import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PageHeaderReusable = (props) => {
  return (
    <div className="bg-[#F6F5FF] lg:pt-[96px] pt-[30px] lg:pb-[126px] pb-[30px] lg:px-[25px] px-[15px]">
      <Container>
        <div className="">
          <h2 className="leading-[42px] text-[28px] lg:text-4xl pb-[9px] ">{props.title}</h2>
          <div className="">
            <h4
              className={`${lato.className} text-black text-base font-medium leading-5`}
            >
              <Link href={"/"}> Home .</Link> pages .{" "}
              <span className="text-[#FB2E86]">{props.title} </span>
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageHeaderReusable;
