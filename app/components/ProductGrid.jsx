import React from "react";
import Container from "./Container";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import Pagination from "./Pagination";

const ProductGrid = ({ data }) => {
  const procut = data.products;

  return (
    <section className="lg:px-[25px] px-[15px]">
      <Container>
        {/* gird prodcut page hader  */}
        <div className="lg:pt-[124px] pt-[30px] lg:pb-[144px] pb-[30px] lg:flex items-center justify-between">
          <div className="">
            <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
              Ecommerce Acceories & Fashion item{" "}
            </h3>
            <h6 className="text-sm text-[#8A8FB9] leading-[14px] pb-2">
              About 9,620 results (0.62 seconds)
            </h6>
          </div>
          <div className="flex flex-wrap gap-y-2 items-center gap-x-[26px]">
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
            <div className="flex  items-center gap-x-1">
              <h4 className="text-base text-[#3F509E] font-normal leading-5">
                View
              </h4>
              <FaList
                className="text-[#3F509E] text-[16px] font-normal cursor-pointer"
              />
              <IoGrid
                className="text-[#3F509E] text-[16px] font-normal cursor-pointer"
              />
              <input
                className="hidden lg:block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* gird prodcut page hader  */}
        {/* Pagination Controls */}
        <Pagination procut={procut} />
        {/* Pagination Controls */}
      </Container>
    </section>
  );
};

export default ProductGrid;

