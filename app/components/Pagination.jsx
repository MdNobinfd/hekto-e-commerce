'use client'
import React, { useState } from "react";
import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";

const Pagination = ({ procut }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [parePage, setParePage] = useState(12);
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

  // Get the array of pages to display (3 at a time)
  const displayedPages = pageNumber.slice(startPage - 1, endPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-[53px] gap-y-[81px]">
        {allPage.map((item, i) => (
          <div key={i}>
            <ProductReuseableTwo
              id={item.id}
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
              discountPercentage={item.discountPercentage}
            />
          </div>
        ))}
      </div>

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
    </>
  );
};

export default Pagination;
