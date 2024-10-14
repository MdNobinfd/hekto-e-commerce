import React, { useState } from 'react';
const Blogpagination = ({ pageNumber, pagehandel }) => {
    const [activePage, setActivePage] = useState(0); // Default to first page being active

    const handlePageClick = (page) => {
      setActivePage(page); // Set the active page
      pagehandel(page); // Trigger the page handler function
    };
  return (
    <>
          <div className="flex justify-center my-10">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          {pageNumber.map((items, i) => (
            <li key={i} onClick={() => handlePageClick(items)}>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  activePage === items
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 bg-white'
                }`}
              >
                {items + 0}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Blogpagination