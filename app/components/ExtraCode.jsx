// "use client";
// import React, { useState } from "react";
// import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
// import Container from "./Container";
// import { FaList } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";

// const ProductGrid = ({ data }) => {
//   const products = data.products;
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [parePage, setParePage] = useState(12);
//   const lastpage = currentPage * parePage;
//   const firstPage = lastpage - parePage;

//   // Get unique categories for filtering
//   const categories = ["All", ...new Set(products.map((product) => product.category))];

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory === "All" 
//     ? products 
//     : products.filter((product) => product.category === selectedCategory);

//   const allPage = filteredProducts.slice(firstPage, lastpage);

//   let pageNumber = [];
//   for (let i = 0; i < filteredProducts.length / parePage; i++) {
//     pageNumber.push(i);
//   }

//   let paginate = (pageNumber) => {
//     setCurrentPage(pageNumber + 1);
//   };

//   let next = () => {
//     if (currentPage < pageNumber.length) {
//       setCurrentPage((state) => state + 1);
//     }
//   };

//   let prev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((state) => state - 1);
//     }
//   };

//   let startPage, endPage;

//   if (currentPage >= pageNumber.length - 2) {
//     startPage = pageNumber.length - 2;
//     endPage = pageNumber.length;
//   } else {
//     startPage = Math.max(currentPage - 1, 1);
//     endPage = Math.min(startPage + 3, pageNumber.length);
//   }

//   const displayedPages = pageNumber.slice(startPage - 1, endPage);

//   // Handle category change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page on category change
//   };

//   return (
//     <section>
//       <Container>
//         {/* Category Filter */}
//         <div className="mb-6">
//           <h3 className="font-bold text-[18px] text-[#151875] mb-4">Categories</h3>
//           <ul className="flex flex-wrap gap-2">
//             {categories.map((category, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleCategoryChange(category)}
//                 className={`px-4 py-2 border rounded cursor-pointer ${
//                   selectedCategory === category ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Grid Product Page Header */}
//         <div className="pt-[24px] pb-[44px] lg:flex items-center justify-between">
//           <div className="">
//             <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
//               Ecommerce Accessories & Fashion Items
//             </h3>
//             <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
//               About {filteredProducts.length} results found
//             </h6>
//           </div>
//         </div>
        
//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[53px] gap-y-[81px]">
//           {allPage.map((item, i) => (
//             <div key={i}>
//               <ProductReuseableTwo
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 thumbnail={item.thumbnail}
//                 discountPercentage={item.discountPercentage}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="ml-4 mt-8">
//           <nav aria-label="Page navigation example">
//             <ul className="inline-flex -space-x-px text-sm cursor-pointer">
//               <li>
//                 <a
//                   onClick={prev}
//                   className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
//                     ${currentPage === 1 
//                         ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
//                         : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
//                     border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//                 >
//                   Previous
//                 </a>
//               </li>
//               {displayedPages.map((item, i) => (
//                 <li onClick={() => paginate(item)} key={i}>
//                   <a
//                     className={currentPage === item + 1
//                       ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800"
//                       : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"}
//                   >
//                     {item + 1}
//                   </a>
//                 </li>
//               ))}
//               {currentPage === pageNumber.length ?
//                 ''
//                 :
//                 <a className="px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white">.....</a>
//               }
//               <li>
//                 <a
//                   onClick={next}
//                   className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
//                     ${currentPage === pageNumber.length 
//                         ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
//                         : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
//                     border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//                 >
//                   Next
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ProductGrid;


// "use client";
// import React, { useState } from "react";
// import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
// import Container from "./Container";
// import { FaList } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";

// const ProductGrid = ({ data }) => {
//   const products = data.products;
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [parePage, setParePage] = useState(12);
//   const lastpage = currentPage * parePage;
//   const firstPage = lastpage - parePage;

//   // Get unique categories and brands for filtering
//   const categories = ["All", ...new Set(products.map((product) => product.category))];
//   const brands = ["All", ...new Set(products.map((product) => product.brand))];

//   // Filter products based on the selected category and brand
//   const filteredProducts = products.filter((product) => {
//     const categoryMatches = selectedCategory === "All" || product.category === selectedCategory;
//     const brandMatches = selectedBrand === "All" || product.brand === selectedBrand;
//     return categoryMatches && brandMatches;
//   });
  
  

//   const allPage = filteredProducts.slice(firstPage, lastpage);

//   let pageNumber = [];
//   for (let i = 0; i < filteredProducts.length / parePage; i++) {
//     pageNumber.push(i);
//   }

//   let paginate = (pageNumber) => {
//     setCurrentPage(pageNumber + 1);
//   };

//   let next = () => {
//     if (currentPage < pageNumber.length) {
//       setCurrentPage((state) => state + 1);
//     }
//   };

//   let prev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((state) => state - 1);
//     }
//   };

//   let startPage, endPage;

//   if (currentPage >= pageNumber.length - 2) {
//     startPage = pageNumber.length - 2;
//     endPage = pageNumber.length;
//   } else {
//     startPage = Math.max(currentPage - 1, 1);
//     endPage = Math.min(startPage + 3, pageNumber.length);
//   }

//   const displayedPages = pageNumber.slice(startPage - 1, endPage);

//   // Handle category and brand change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page on category change
//   };

//   const handleBrandChange = (brand) => {
//     setSelectedBrand(brand);
//     setCurrentPage(1); // Reset to first page on brand change
//   };

//   return (
//     <section>
//       <Container>
//         {/* Category Filter */}
//         <div className="mb-6">
//           <h3 className="font-bold text-[18px] text-[#151875] mb-4">Categories</h3>
//           <ul className="flex flex-wrap gap-2">
//             {categories.map((category, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleCategoryChange(category)}
//                 className={`px-4 py-2 border rounded cursor-pointer ${
//                   selectedCategory === category ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Brand Filter */}
//         <div className="mb-6">
//           <h3 className="font-bold text-[18px] text-[#151875] mb-4">Brands</h3>
//           <ul className="flex flex-wrap gap-2">
//             {brands.map((brand, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleBrandChange(brand)}
//                 className={`px-4 py-2 border rounded cursor-pointer ${
//                   selectedBrand === brand ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {brand}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Grid Product Page Header */}
//         <div className="pt-[24px] pb-[44px] lg:flex items-center justify-between">
//           <div className="">
//             <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
//               Ecommerce Accessories & Fashion Items
//             </h3>
//             <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
//               About {filteredProducts.length} results found
//             </h6>
//           </div>
//         </div>
        
//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[53px] gap-y-[81px]">
//           {allPage.map((item, i) => (
//             <div key={i}>
//               <ProductReuseableTwo
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 thumbnail={item.thumbnail}
//                 discountPercentage={item.discountPercentage}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="ml-4 mt-8">
//           <nav aria-label="Page navigation example">
//             <ul className="inline-flex -space-x-px text-sm cursor-pointer">
//               <li>
//                 <a
//                   onClick={prev}
//                   className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
//                     ${currentPage === 1 
//                         ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
//                         : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
//                     border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//                 >
//                   Previous
//                 </a>
//               </li>
//               {displayedPages.map((item, i) => (
//                 <li onClick={() => paginate(item)} key={i}>
//                   <a
//                     className={currentPage === item + 1
//                       ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800"
//                       : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"}
//                   >
//                     {item + 1}
//                   </a>
//                 </li>
//               ))}
//               {currentPage === pageNumber.length ?
//                 ''
//                 :
//                 <a className="px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white">.....</a>
//               }
//               <li>
//                 <a
//                   onClick={next}
//                   className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
//                     ${currentPage === pageNumber.length 
//                         ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
//                         : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
//                     border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//                 >
//                   Next
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ProductGrid;














// "use client";
// import React, { useState } from "react";
// import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
// import Container from "./Container";

// const ProductGrid = ({ data }) => {
//   const products = data.products;
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [parePage, setParePage] = useState(12);
//   const lastpage = currentPage * parePage;
//   const firstPage = lastpage - parePage;

//   // Get unique categories and brands for filtering
//   const categories = ["All", ...new Set(products.map((product) => product.category))];
//   const brands = ["All", ...new Set(products.map((product) => product.brand))];

//   // Filter products based on the selected category and brand
//   const filteredProducts = products.filter((product) => {
//     const categoryMatches = selectedCategory === "All" || product.category === selectedCategory;
//     const brandMatches = selectedBrand === "All" || product.brand === selectedBrand;
//     return categoryMatches && brandMatches;
//   });

//   const allPage = filteredProducts.slice(firstPage, lastpage);

//   let pageNumber = [];
//   for (let i = 0; i < Math.ceil(filteredProducts.length / parePage); i++) {
//     pageNumber.push(i);
//   }

//   let paginate = (pageNumber) => {
//     setCurrentPage(pageNumber + 1);
//   };

//   let next = () => {
//     if (currentPage < pageNumber.length) {
//       setCurrentPage((state) => state + 1);
//     }
//   };

//   let prev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((state) => state - 1);
//     }
//   };

//   let startPage, endPage;

//   if (currentPage >= pageNumber.length - 2) {
//     startPage = pageNumber.length - 2;
//     endPage = pageNumber.length;
//   } else {
//     startPage = Math.max(currentPage - 1, 1);
//     endPage = Math.min(startPage + 3, pageNumber.length);
//   }

//   const displayedPages = pageNumber.slice(startPage - 1, endPage);

//   // Handle category and brand change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to first page on category change
//   };

//   const handleBrandChange = (brand) => {
//     setSelectedBrand(brand);
//     setCurrentPage(1); // Reset to first page on brand change
//   };

//   return (
//     <section>
//       <Container>
//         {/* Category Filter */}
//         <div className="mb-6">
//           <h3 className="font-bold text-[18px] text-[#151875] mb-4">Categories</h3>
//           <ul className="flex flex-wrap gap-2">
//             {categories.map((category, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleCategoryChange(category)}
//                 className={`px-4 py-2 border rounded cursor-pointer ${
//                   selectedCategory === category ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Brand Filter */}
//         <div className="mb-6">
//           <h3 className="font-bold text-[18px] text-[#151875] mb-4">Brands</h3>
//           <ul className="flex flex-wrap gap-2">
//             {brands.map((brand, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleBrandChange(brand)}
//                 className={`px-4 py-2 border rounded cursor-pointer ${
//                   selectedBrand === brand ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {brand}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Grid Product Page Header */}
//         <div className="pt-[24px] pb-[44px] lg:flex items-center justify-between">
//           <div className="">
//             <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
//               Ecommerce Accessories & Fashion Items
//             </h3>
//             <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
//               About {filteredProducts.length} results found
//             </h6>
//           </div>
//         </div>
        
//         {/* Product Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[53px] gap-y-[81px]">
//           {allPage.map((item, i) => (
//             <div key={i}>
//               <ProductReuseableTwo
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 thumbnail={item.thumbnail}
//                 discountPercentage={item.discountPercentage}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="ml-4 mt-8">
//           <nav aria-label="Page navigation example">
//             <ul className="inline-flex -space-x-px text-sm cursor-pointer">
//               <li>
//                 <a
//                   onClick={prev}
//                   className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
//                     ${currentPage === 1 
//                         ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
//                         : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
//                     border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//                 >
//                   Previous
//                 </a>
//               </li>
//               {displayedPages.map((item, i) => (
//                 <li onClick={() => paginate(item)} key={i}>
//                   <a
//                     className={currentPage === item + 1
//                       ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800"
//                       : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"}
//                   >
//                     {item + 1}
//                   </a>
//                 </li>
//               ))}
//               {currentPage === pageNumber.length ? '' : 
//                 <a className="px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white">.....</a>
//               }
//               <li>
//                 <a
//                   onClick={next}
//                   className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
//                     ${currentPage === pageNumber.length 
//                         ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
//                         : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
//                     border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
//                 >
//                   Next
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ProductGrid;



// "use client";
// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import { FaList } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";
// import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
// import ShoplistCart from "./ShoplistCart";
// import ReactPaginate from "react-paginate";

// const Shoopmain = ({ data }) => {
//   const [currentshow, setCurrentshow] = useState("grid");
//   const product = data.products;
//   const [brandshow, setBrandshow] = useState(false);
//   const [categoryShow, setcategoryShow] = useState(false);
//   const [discountShow, setDiscountShow] = useState(false);
//   const [ratingShow, setRatingShow] = useState(false);
//   const [priceShow, setPriceShow] = useState(false);
//   const [categroy, setCategory] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]); // To track selected categories

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(0);
//   const productsPerPage = 12;

//   // Filtered products based on selected categories
//   const filteredProducts = selectedCategories.length > 0 
//     ? product.filter(item => selectedCategories.includes(item.category)) 
//     : product;

//   const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   const displayedProducts = filteredProducts.slice(
//     currentPage * productsPerPage,
//     currentPage * productsPerPage + productsPerPage
//   );

//   useEffect(() => {
//     setCategory([...new Set(product.map((item) => item.category))]);
//   }, [product]);

//   const handleCategory = (citem) => {
//     setSelectedCategories([citem]); // Only select the clicked category
//   };

//   return (
//     <section>
//       <Container>
//         {/* Title and sorting options */}
//         <div className="pt-[124px] pb-[144px] lg:flex items-center justify-between">
//           <div>
//             <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
//               Ecommerce Accessories & Fashion Items
//             </h3>
//             <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
//               About {filteredProducts.length} results
//             </h6>
//           </div>
//           <div className="flex items-center gap-x-[26px]">
//             {/* Per Page and Sort By Options */}
//             <div className="flex items-center gap-x-2">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">Per Page</h4>
//               <select className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal">
//                 <option value="12">12</option>
//                 <option value="18">18</option>
//                 <option value="24">24</option>
//                 <option value="36">36</option>
//               </select>
//             </div>
//             {/* Sort By Dropdown */}
//             <div className="flex items-center gap-x-2">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">Sort By:</h4>
//               <select className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal">
//                 <option value="Best match">Best match</option>
//                 <option value="Price Low to High">Price Low to High</option>
//                 <option value="Price High to Low">Price High to Low</option>
//                 <option value="Discount Low to High">Discount Low to High</option>
//               </select>
//             </div>
//             {/* View Toggle */}
//             <div className="flex items-center gap-x-3">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">View</h4>
//               <div onClick={() => setCurrentshow("grid")} className={`p-2 cursor-pointer text-[#3F509E] ${currentshow === "grid" ? "bg-black text-white rounded-sm" : ""}`}>
//                 <IoGrid size={20} />
//               </div>
//               <div onClick={() => setCurrentshow("list")} className={`p-2 cursor-pointer text-[#3F509E] ${currentshow === "list" ? "bg-black text-white rounded-sm" : ""}`}>
//                 <FaList size={20} />
//               </div>
//               <input className="block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] border border-[#E7E6EF] outline-none" type="text" />
//             </div>
//           </div>
//         </div>

//         {/* Product Show Section */}
//         <div className="lg:flex gap-x-[38px]">
//           {/* Left Sidebar for Filters */}
//           <div className="lg:w-[20%] w-full lg:mb-0 mb-8">
//             {/* Categories Filter */}
//             <div>
//               <h3 onClick={() => setcategoryShow(!categoryShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Categories</h3>
//               {categoryShow && (
//                 <>
//                   {categroy.map((item) => (
//                     <div key={item} onClick={() => handleCategory(item)} className="flex items-center cursor-pointer">
//                       <input type="checkbox" checked={selectedCategories.includes(item)} readOnly />
//                       <h4>{item}</h4>
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Product Display Section */}
//           <div className="lg:w-[80%] w-full">
//             {currentshow === "grid" ? (
//               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[53px] gap-y-[81px]">
//                 {displayedProducts.map((item) => (
//                   <ProductReuseableTwo
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     price={item.price}
//                     thumbnail={item.thumbnail}
//                     discountPercentage={item.discountPercentage}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div>
//                 {displayedProducts.map((item) => (
//                   <ShoplistCart key={item.id} item={item} />
//                 ))}
//               </div>
//             )}
//             {/* Pagination */}
//             {displayedProducts.length >= 12 && (
//               <div className="mt-[60px] mb-[83px]">
//                 <ReactPaginate
//                   previousLabel={"< Previous"}
//                   nextLabel={"Next >"}
//                   breakLabel={"..."}
//                   pageCount={pageCount}
//                   marginPagesDisplayed={0}
//                   pageRangeDisplayed={3}
//                   onPageChange={handlePageClick}
//                   containerClassName={"pagination"}
//                   pageClassName={"page-item"}
//                   pageLinkClassName={"page-link"}
//                   previousClassName={"page-item"}
//                   previousLinkClassName={"page-link"}
//                   nextClassName={"page-item"}
//                   nextLinkClassName={"page-link"}
//                   breakClassName={"page-item"}
//                   breakLinkClassName={"page-link"}
//                   activeClassName={"active"}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Shoopmain;


// "use client";
// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import { FaList } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";
// import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
// import ShoplistCart from "./ShoplistCart";
// import ReactPaginate from "react-paginate";

// const Shoopmain = ({ data }) => {
//   const [currentshow, setCurrentshow] = useState("grid");
//   const product = data.products;
//   const [brandshow, setBrandshow] = useState(false);
//   const [categoryShow, setcategoryShow] = useState(false);
//   const [discountShow, setDiscountShow] = useState(false);
//   const [ratingShow, setRatingShow] = useState(false);
//   const [priceShow, setPriceShow] = useState(false);
//   const [categroy, setCategory] = useState([]);
//   const [cateFilter, setCateFilter] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]); // To track selected categories


//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(0);
//   const productsPerPage = 12;

//   const filteredProducts = selectedCategories.length > 0 
//     ? product.filter(item => selectedCategories.includes(item.category)) 
//     : product;

//   const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   const displayedProducts = filteredProducts.slice(
//     currentPage * productsPerPage,
//     currentPage * productsPerPage + productsPerPage
//   );

//   useEffect(() => {
//     setCategory([...new Set(product.map((item) => item.category))]);
//   }, [product]);

//   const handleCategory = (citem) => {
//     setSelectedCategories((prev) => 
//       prev.includes(citem) ? prev.filter(cat => cat !== citem) : [...prev, citem]
//     );
//   };

//   return (
//     <section>
//       <Container>
//         {/* Title and sorting options */}
//         <div className="pt-[124px] pb-[144px] lg:flex items-center justify-between">
//           <div>
//             <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
//               Ecommerce Accessories & Fashion Items
//             </h3>
//             <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
//               About {filteredProducts.length} results
//             </h6>
//           </div>
//           <div className="flex items-center gap-x-[26px]">
//             {/* Per Page and Sort By Options */}
//             <div className="flex items-center gap-x-2">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">Per Page</h4>
//               <select className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal">
//                 <option value="12">12</option>
//                 <option value="18">18</option>
//                 <option value="24">24</option>
//                 <option value="36">36</option>
//               </select>
//             </div>
//             {/* Sort By Dropdown */}
//             <div className="flex items-center gap-x-2">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">Sort By:</h4>
//               <select className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal">
//                 <option value="Best match">Best match</option>
//                 <option value="Price Low to High">Price Low to High</option>
//                 <option value="Price High to Low">Price High to Low</option>
//                 <option value="Discount Low to High">Discount Low to High</option>
//               </select>
//             </div>
//             {/* View Toggle */}
//             <div className="flex items-center gap-x-3">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">View</h4>
//               <div onClick={() => setCurrentshow("grid")} className={`p-2 cursor-pointer text-[#3F509E] ${currentshow === "grid" ? "bg-black text-white rounded-sm" : ""}`}>
//                 <IoGrid size={20} />
//               </div>
//               <div onClick={() => setCurrentshow("list")} className={`p-2 cursor-pointer text-[#3F509E] ${currentshow === "list" ? "bg-black text-white rounded-sm" : ""}`}>
//                 <FaList size={20} />
//               </div>
//               <input className="block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] border border-[#E7E6EF] outline-none" type="text" />
//             </div>
//           </div>
//         </div>

//         {/* Product Show Section */}
//         <div className="lg:flex gap-x-[38px]">
//           {/* Left Sidebar for Filters */}
//           <div className="lg:w-[20%] w-full lg:mb-0 mb-8">
//             {/* Brand Filter */}
//             <div>
//               <h3 onClick={() => setBrandshow(!brandshow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Product Brand</h3>
//               {brandshow && <div className="flex items-center"><input type="checkbox" /><h4>Coaster Furniture</h4></div>}
//             </div>
//             {/* Discount Filter */}
//             <div>
//               <h3 onClick={() => setDiscountShow(!discountShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Discount Offer</h3>
//               {discountShow && <div className="flex items-center"><input type="checkbox" /><h4>20% Cashback</h4></div>}
//             </div>
//             {/* Rating Filter */}
//             <div>
//               <h3 onClick={() => setRatingShow(!ratingShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Rating Item</h3>
//               {ratingShow && <div className="flex items-center"><input type="checkbox" /><h4>⭐⭐⭐⭐⭐</h4></div>}
//             </div>
//             {/* Categories Filter */}
//             <div>
//               <h3 onClick={() => setcategoryShow(!categoryShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Categories</h3>
//               {categoryShow && (
//                 <>
//                   {categroy.map((item) => (
//                     <div key={item} onClick={() => handleCategory(item)} className="flex items-center cursor-pointer">
//                       <input type="checkbox" checked={selectedCategories.includes(item)} readOnly />
//                       <h4>{item}</h4>
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//             {/* Price Filter */}
//             <div>
//               <h3 onClick={() => setPriceShow(!priceShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Price Filter</h3>
//               {priceShow && <div className="flex items-center"><input type="checkbox" /><h4>$0.00 - $150.00</h4></div>}
//             </div>
//             {/* Color Filter */}
//             <div>
//               <h3 className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Filter By Color</h3>
//               <div className="flex items-center"><input type="radio" /><h4>Blue</h4></div>
//             </div>
//           </div>

//           {/* Product Display Section */}
//           <div className="lg:w-[80%] w-full">
//             {currentshow === "grid" ? (
//               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[53px] gap-y-[81px]">
//                 {displayedProducts.map((item) => (
//                   <ProductReuseableTwo
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     price={item.price}
//                     thumbnail={item.thumbnail}
//                     discountPercentage={item.discountPercentage}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div>
//                 {displayedProducts.map((item) => (
//                   <ShoplistCart key={item.id} item={item} />
//                 ))}
//               </div>
//             )}
//             {/* Pagination */}
//             {displayedProducts.length >= 12 && (
//               <div className="mt-[60px] mb-[83px]">
//                 <ReactPaginate
//                   previousLabel={"< Previous"}
//                   nextLabel={"Next >"}
//                   breakLabel={"..."}
//                   pageCount={pageCount}
//                   marginPagesDisplayed={0}
//                   pageRangeDisplayed={3}
//                   onPageChange={handlePageClick}
//                   containerClassName={"pagination"}
//                   pageClassName={"page-item"}
//                   pageLinkClassName={"page-link"}
//                   previousClassName={"page-item"}
//                   previousLinkClassName={"page-link"}
//                   nextClassName={"page-item"}
//                   nextLinkClassName={"page-link"}
//                   breakClassName={"page-item"}
//                   breakLinkClassName={"page-link"}
//                   activeClassName={"active"}
//                 />
//               </div>
//             )}
//             {/* Pagination end */}
//           </div>
//         </div>
//         {/* Product show section end */}
//       </Container>
//     </section>
//   );
// };

// export default Shoopmain;


// "use client";
// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import { FaList } from "react-icons/fa";
// import { IoGrid } from "react-icons/io5";
// import ProductReuseableTwo from "./allReuseableCart/ProductReuseableTwo";
// import ShoplistCart from "./ShoplistCart";
// import ReactPaginate from "react-paginate";

// const Shoopmain = ({ data }) => {
//   const [currentshow, setCurrentshow] = useState("grid");
//   const product = data.products;
//   const [brandshow, setBrandshow] = useState(false);
//   const [categoryShow, setcategoryShow] = useState(false);
//   const [discountShow, setDiscountShow] = useState(false);
//   const [ratingShow, setRatingShow] = useState(false);
//   const [priceShow, setPriceShow] = useState(false);
//   const [categroy, setCategory] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]); // To track selected categories

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(0);
//   const productsPerPage = 12;

//   const filteredProducts = selectedCategories.length > 0 
//     ? product.filter(item => selectedCategories.includes(item.category)) 
//     : product;

//   const pageCount = Math.ceil(filteredProducts.length / productsPerPage);
//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   const displayedProducts = filteredProducts.slice(
//     currentPage * productsPerPage,
//     currentPage * productsPerPage + productsPerPage
//   );

//   useEffect(() => {
//     setCategory([...new Set(product.map((item) => item.category))]);
//   }, [product]);

//   const handleCategory = (citem) => {
//     setSelectedCategories([citem]); // Only allow one selected category
//   };

//   return (
//     <section>
//       <Container>
//         {/* Title and sorting options */}
//         <div className="pt-[124px] pb-[144px] lg:flex items-center justify-between">
//           <div>
//             <h3 className="font-bold text-[22px] leading-[25px] pb-2 text-[#151875]">
//               Ecommerce Accessories & Fashion Items
//             </h3>
//             <h6 className="text-sm text-[#8A8FB9] leading-[14px]">
//               About {filteredProducts.length} results
//             </h6>
//           </div>
//           <div className="flex items-center gap-x-[26px]">
//             {/* Per Page and Sort By Options */}
//             <div className="flex items-center gap-x-2">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">Per Page</h4>
//               <select className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal">
//                 <option value="12">12</option>
//                 <option value="18">18</option>
//                 <option value="24">24</option>
//                 <option value="36">36</option>
//               </select>
//             </div>
//             {/* Sort By Dropdown */}
//             <div className="flex items-center gap-x-2">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">Sort By:</h4>
//               <select className="w-[100px] h-[27px] pl-[11px] ml-[8px] bg-transparent border border-[#E7E6EF] text-[12px] text-[#8A8FB9] font-normal">
//                 <option value="Best match">Best match</option>
//                 <option value="Price Low to High">Price Low to High</option>
//                 <option value="Price High to Low">Price High to Low</option>
//                 <option value="Discount Low to High">Discount Low to High</option>
//               </select>
//             </div>
//             {/* View Toggle */}
//             <div className="flex items-center gap-x-3">
//               <h4 className="text-base text-[#3F509E] font-normal leading-5">View</h4>
//               <div onClick={() => setCurrentshow("grid")} className={`p-2 cursor-pointer text-[#3F509E] ${currentshow === "grid" ? "bg-black text-white rounded-sm" : ""}`}>
//                 <IoGrid size={20} />
//               </div>
//               <div onClick={() => setCurrentshow("list")} className={`p-2 cursor-pointer text-[#3F509E] ${currentshow === "list" ? "bg-black text-white rounded-sm" : ""}`}>
//                 <FaList size={20} />
//               </div>
//               <input className="block w-[162px] h-[30px] pl-[7px] text-[#8A8FB9] border border-[#E7E6EF] outline-none" type="text" />
//             </div>
//           </div>
//         </div>

//         {/* Product Show Section */}
//         <div className="lg:flex gap-x-[38px]">
//           {/* Left Sidebar for Filters */}
//           <div className="lg:w-[20%] w-full lg:mb-0 mb-8">
//             {/* Brand Filter */}
//             <div>
//               <h3 onClick={() => setBrandshow(!brandshow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Product Brand</h3>
//               {brandshow && <div className="flex items-center"><input type="checkbox" /><h4>Coaster Furniture</h4></div>}
//             </div>
//             {/* Discount Filter */}
//             <div>
//               <h3 onClick={() => setDiscountShow(!discountShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Discount Offer</h3>
//               {discountShow && <div className="flex items-center"><input type="checkbox" /><h4>20% Cashback</h4></div>}
//             </div>
//             {/* Rating Filter */}
//             <div>
//               <h3 onClick={() => setRatingShow(!ratingShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Rating Item</h3>
//               {ratingShow && <div className="flex items-center"><input type="checkbox" /><h4>⭐⭐⭐⭐⭐</h4></div>}
//             </div>
//             {/* Categories Filter */}
//             <div>
//               <h3 onClick={() => setcategoryShow(!categoryShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Categories</h3>
//               {categoryShow && (
//                 <>
//                   {categroy.map((item) => (
//                     <div key={item} onClick={() => handleCategory(item)} className="flex items-center cursor-pointer">
//                       <input type="checkbox" checked={selectedCategories.includes(item)} readOnly />
//                       <h4>{item}</h4>
//                     </div>
//                   ))}
//                 </>
//               )}
//             </div>
//             {/* Price Filter */}
//             <div>
//               <h3 onClick={() => setPriceShow(!priceShow)} className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Price Filter</h3>
//               {priceShow && <div className="flex items-center"><input type="checkbox" /><h4>$0.00 - $150.00</h4></div>}
//             </div>
//             {/* Color Filter */}
//             <div>
//               <h3 className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">Filter By Color</h3>
//               <div className="flex items-center"><input type="radio" /><h4>Blue</h4></div>
//             </div>
//           </div>

//           {/* Product Display Section */}
//           <div className="lg:w-[80%] w-full">
//             {currentshow === "grid" ? (
//               <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[53px] gap-y-[81px]">
//                 {displayedProducts.map((item) => (
//                   <ProductReuseableTwo
//                     key={item.id}
//                     id={item.id}
//                     title={item.title}
//                     price={item.price}
//                     thumbnail={item.thumbnail}
//                     discountPercentage={item.discountPercentage}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <div>
//                 {displayedProducts.map((item) => (
//                   <ShoplistCart key={item.id} item={item} />
//                 ))}
//               </div>
//             )}
//             {/* Pagination */}
//             {displayedProducts.length >= 12 && (
//               <div className="mt-[60px] mb-[83px]">
//                 <ReactPaginate
//                   previousLabel={"< Previous"}
//                   nextLabel={"Next >"}
//                   breakLabel={"..."}
//                   pageCount={pageCount}
//                   marginPagesDisplayed={0}
//                   pageRangeDisplayed={3}
//                   onPageChange={handlePageClick}
//                   containerClassName={"pagination"}
//                   pageClassName={"page-item"}
//                   pageLinkClassName={"page-link"}
//                   previousClassName={"page-item"}
//                   previousLinkClassName={"page-link"}
//                   nextClassName={"page-item"}
//                   nextLinkClassName={"page-link"}
//                   breakClassName={"page-item"}
//                   breakLinkClassName={"page-link"}
//                   activeClassName={"active"}
//                 />
//               </div>
//             )}
//             {/* Pagination end */}
//           </div>
//         </div>
//         {/* Product show section end */}
//       </Container>
//     </section>
//   );
// };

// export default Shoopmain;















