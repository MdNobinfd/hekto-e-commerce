import React from "react";
import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

const ShopHeader = ({handleshowproduct,handlegrid,handlelist,currentshow}) => {
  return (
    <div>
      <div className="pt-[124px] pb-[144px] lg:flex items-center justify-between">
        <div className="">
          <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
            Ecommerce Acceories & Fashion item{" "}
          </h3>
          <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
            About 9,620 results (0.62 seconds)
          </h6>
        </div>

        
        <div className="flex flex-wrap gap-y-2 items-center gap-x-[26px]">
          <div className="flex items-center gap-x-2">
            <h4 className="text-base text-[#3F509E] font-normal leading-5">
              Per Page
            </h4>
            <select
              onChange={handleshowproduct}
              className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal"
              name=""
              id=""
            >
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
              <option value="36">36</option>
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
              <option value="Discount Low to High">Discount Low to High</option>
              <option value="Discount Low to High">Price High to Low</option>
            </select>
          </div>
          <div className="flex items-center gap-x-3">
            <h4 className="text-base text-[#3F509E] font-normal leading-5">
              View
            </h4>
            <div
              onClick={handlegrid}
              className={`${
                currentshow == "grid" ? " bg-black text-white rounded-sm " : ""
              } p-2 cursor-pointer text-[#3F509E]`}
            >
              <IoGrid
                size={20}
                className=" text-[16px] font-normal cursor-pointer"
              />
            </div>
            <div
              onClick={handlelist}
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
    </div>
  );
};

export default ShopHeader;
