"use client";
import React, { useState } from "react";
import Container from "./Container";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
import ShoplistCart from "./ShoplistCart";

const Shoopmain = ({ data }) => {
  const [currentshow, setCurrentshow] = useState("grid");
  const product = data.products;
  return (
    <section>
      <Container>
        {/* title and per page sort by view etc */}
        <div className="pt-[124px] pb-[144px] lg:flex items-center justify-between">
          <div className="">
            <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
              Ecommerce Acceories & Fashion item{" "}
            </h3>
            <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
              About 9,620 results (0.62 seconds)
            </h6>
          </div>
          <div className="flex items-center  gap-x-[26px]">
            <div className="flex items-center gap-x-2">
              <h4 className="text-base text-[#3F509E] font-normal leading-5">
                Per Page
              </h4>
              <select
                className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal"
                name=""
                id=""
              >
                <option value="">12</option>
                <option value="">18</option>
                <option value="">24</option>
                <option value="">36</option>
              </select>
            </div>
            <div className="flex items-center gap-x-2">
              <h4 className="text-base text-[#3F509E] font-normal leading-5">
                Sort By:
              </h4>
              <select
                className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal"
                name=""
                id=""
              >
                <option value="Best match">Best match</option>
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Discount Low to High">
                  Discount Low to High
                </option>
                <option value="Discount Low to High">Price High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-x-3">
              <h4 className="text-base text-[#3F509E] font-normal leading-5">
                View
              </h4>
              <div
                onClick={() => setCurrentshow("grid")}
                className={`${
                  currentshow == "grid" ? " bg-black text-white rounded-sm " : ""
                } p-2 cursor-pointer text-[#3F509E]`}
              >
                <IoGrid size={20} className=" text-[16px] font-normal cursor-pointer" />
              </div>
              <div
                onClick={() => setCurrentshow("list")}
                className={`${
                  currentshow == "list" ? " bg-black text-white rounded-sm " : ""
                } p-2 cursor-pointer text-[#3F509E]`}
              >
                <FaList size={20} className="text-[16px] font-normal" />
              </div>
              <input
                className="block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* title and per page sort by view etc */}

        {/* Product show section start */}
        <div className="lg:flex gap-x-[38px]">
          {/* Left sider bar Like Category Price filter */}
          <div className="lg:w-[20%] w-full lg:mb-0 mb-8">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dicta! Quas voluptates laboriosam, architecto voluptatem porro numquam beatae incidunt itaque ea necessitatibus quibusdam, odio iusto molestiae voluptas, a corporis iste.</h3>
          </div>
          {/* grid and list product show */}
          <div className="lg:w-[80%] w-full">
            {
              currentshow == "grid" ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[53px] gap-y-[81px]">
                  {product.map((item, i) => (
                    <ProductReuseableTwo
                      key={i}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      thumbnail={item.thumbnail}
                      discountPercentage={item.discountPercentage}
                    />
                  ))}
                </div>
              ) : (
                <div className="">
                  {product.map((item, i) => (
                    <ShoplistCart key={i} item={item} />
                  ))}
                </div>
              )
            }
          </div>
        </div>
        {/* Product show section end */}
      </Container>
    </section>
  );
};

export default Shoopmain;
