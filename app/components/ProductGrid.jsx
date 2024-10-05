"use client";
import React, {  useState } from "react";
import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
import Container from "./Container";
import ProductpageHeader from "./ProductpageHeader";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const ProductGrid = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
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
      <Container>
        <ProductpageHeader />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[53px] gap-y-[81px]">
          {displayedProducts.map((item, i) => (
            <div key={i}>
              <Link href={`/product/${item.id}`} prefetch={false}>
                <ProductReuseableTwo item={item} />
              </Link>
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
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
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
      </Container>
    </section>
  );
};

export default ProductGrid;
