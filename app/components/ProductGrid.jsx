"use client";
import React, { useState } from "react";
import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
import Container from "./Container";

import Link from "next/link";
import ReactPaginate from "react-paginate";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import Brand from "./Brand";
import Menu from "./Menu";

const ProductGrid = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentshow, setCurrentshow] = useState('');
  const productsPerPage = 12;

  const pageCount = Math.ceil(data.products.length / productsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayedProducts = data.products.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage
  );

  return (
    <section>
      {/* {currentshow == 'ami' ? 
      <Brand />
      :
      <Menu />
      } */}
      <Container>
        {/* gird prodcut page hader  */}
        <div className="pt-[124px] pb-[144px] lg:flex items-center justify-between">
          <div className="">
            <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
              Ecommerce Acceories & Fashion item{" "}
            </h3>
            <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
              About 9,620 results (0.62 seconds)
            </h6>
          </div>
          <div className="flex items-center gap-x-[26px]">
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
            <div className="flex items-center gap-x-1">
              <h4 className="text-base text-[#3F509E] font-normal leading-5">
                View
              </h4>
              <FaList onClick={()=>setCurrentshow('ami')} className="text-[#3F509E] text-[16px] font-normal cursor-pointer" />
              <IoGrid onClick={()=>setCurrentshow('tumi')} className="text-[#3F509E] text-[16px] font-normal cursor-pointer" />
              <input
                className="hidden lg:block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] font-normal border border-[#E7E6EF] outline-none"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* gird prodcut page hader  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-[53px] gap-y-[81px]">
          {displayedProducts.map((item, i) => (
            <div key={i}>
                <ProductReuseableTwo id={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} discountPercentage={item.discountPercentage} />
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-[60px] mb-[83px]">
          <ReactPaginate
            previousLabel={"< Previous"}
            nextLabel={"Next >"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
        {/* Pagination Controls */}
      </Container>
    </section>
  );
};

export default ProductGrid;
