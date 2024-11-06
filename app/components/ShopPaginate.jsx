import React, { useState } from "react";
import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
import ShoplistCart from "./ShoplistCart";

const ShopPaginate = ({ procut, currentshow,currentPage,setCurrentPage,parePage }) => {

  // pagination all state start
    const lastpage = currentPage * parePage;
    const firstPage = lastpage - parePage;
    const allPage = procut.slice(firstPage, lastpage);
  
    let pageNumber = [];
    for (let i = 0; i < procut.length / parePage; i++) {
      pageNumber.push(i);
    }
    let paginate = (pageNumber) => {
      setCurrentPage(pageNumber + 1);
    };
    let next = () => {
      if (currentPage < pageNumber.length) {
        setCurrentPage((state) => state + 1);
      }
    };
    let prev = () => {
      if (currentPage > 1) {
        setCurrentPage((state) => state - 1);
      }
    };
  
    let startPage, endPage;
  
    if (currentPage >= pageNumber.length - 2) {
      startPage = pageNumber.length - 2;
      endPage = pageNumber.length;
    } else {
      startPage = Math.max(currentPage - 1, 1);
      endPage = Math.min(startPage + 3, pageNumber.length);
    }
    const displayedPages = pageNumber.slice(startPage - 1, endPage);
  // pagination all state end
  return (
    <>
      <div className="">
        {currentshow == "grid" ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[53px] gap-y-[81px]">
            {allPage.map((item, i) => (
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
            {allPage.map((item, i) => (
              <ShoplistCart key={i} item={item} />
            ))}
          </div>
        )}
        {/* pagination start */}

        {procut.length > 12 &&
        <div>
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm cursor-pointer">
              <li>
                <a
                  onClick={prev}
                  className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
                    ${
                      currentPage === 1
                        ? "text-gray-300 bg-gray-200 cursor-not-allowed"
                        : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                    } 
                    border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  Previous
                </a>
              </li>
              {displayedPages.map((item, i) => (
                <li onClick={() => paginate(item)} key={i}>
                  <a
                    className={
                      currentPage === item + 1
                        ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800"
                        : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"
                    }
                  >
                    {item + 1}
                  </a>
                </li>
              ))}
              {currentPage === pageNumber.length ? (
                ""
              ) : (
                <a className="px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white">
                  .....
                </a>
              )}
              <li>
                <a
                  onClick={next}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
                    ${
                      currentPage === pageNumber.length
                        ? "text-gray-300 bg-gray-200 cursor-not-allowed"
                        : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                    } 
                    border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        }
        {/* pagination end */}
      </div>
    </>
  );
};

export default ShopPaginate;
