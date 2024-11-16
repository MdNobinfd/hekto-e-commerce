import React, { useState } from "react";

const ShopRight = ({ handleAllProduct, product, category, brand, handlebrandfilter, handleCatoryFilter, selectedCategory,handlePriceFilter,handleRatingFilter }) => {
  const [brandshow, setBrandshow] = useState(false);
  const [categoryShow, setcategoryShow] = useState(false);
  const [discountShow, setDiscountShow] = useState(false);
  const [ratingShow, setRatingShow] = useState(false);
  const [priceShow, setPriceShow] = useState(false);


  const ratings = [
    { label: "⭐⭐⭐⭐⭐", value: 4.50 },
    { label: "⭐⭐⭐⭐", value: 4 },
    { label: "⭐⭐⭐", value: 3 },
    { label: "⭐⭐", value: 2 },
    { label: "⭐", value: 1 },
  ];

  return (
    <div>
      <h3
        onClick={handleAllProduct}
        className="mb-[20px] font-semibold text-xl text-[#151875] leading-[30px]  cursor-pointer"
      >
        All Product
      </h3>
      <div className="">
        <h3
          onClick={() => setBrandshow(!brandshow)}
          className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
        >
          Product Brand
        </h3>
        {brandshow && (
          <>
          {brand.map((item,i)=>(
          <div key={i} onClick={()=>handlebrandfilter(item)} className="flex items-center  cursor-pointer">
            <input type="checkbox"
            checked={selectedCategory === item}
            readOnly
            />
            <h4>{item}</h4>
          </div>
          ))}
          </>
        )}
      </div>
      <div className="">
        <h3
          onClick={() => setDiscountShow(!discountShow)}
          className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
        >
          Discount Offer
        </h3>
        {discountShow && (
          <div className="flex items-center cursor-pointer">
            <input type="checkbox" />
            <h4>20% Cashback</h4>
          </div>
        )}
      </div>
      <div className="">
        <h3
          onClick={() => setRatingShow(!ratingShow)}
          className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
        >
          Rating Item
        </h3>
        {ratingShow && (
          <>
          {ratings.map((rating, i) => (
              <div  onClick={() => handleRatingFilter(rating.value)} key={i} className="flex items-center cursor-pointer">
                <input type="checkbox" />
                <h4>{rating.label}</h4>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="">
        <h3
          onClick={() => setcategoryShow(!categoryShow)}
          className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
        >
          Categories
        </h3>
        {categoryShow && (
          <>
          {category.map((item,i)=>(
            <div key={i} onClick={()=>handleCatoryFilter(item)} className="flex items-center cursor-pointer">
              <input type="checkbox"
              checked={selectedCategory === item}
              readOnly
              />
              <h4>{item}</h4>
            </div>
          ))}
          </>
        )}
      </div>
      <div className="">
        <h3
          onClick={() => setPriceShow(!priceShow)}
          className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
        >
          Price Filter
        </h3>
        {priceShow && (
          <>
          <div onClick={()=>handlePriceFilter({low: 0, high: 59.99})} className="flex items-center cursor-pointer">
            <input type="checkbox"
             checked={selectedCategory?.low === 0 && selectedCategory?.high === 59.99}
             readOnly
            />
            <h4>$0.00 - $99.00</h4>
          </div>
          <div onClick={()=>handlePriceFilter({low: 60, high: 299.99})} className="flex items-center cursor-pointer">
            <input type="checkbox"
                   checked={selectedCategory?.low === 60 && selectedCategory?.high === 299.99}
             readOnly
            />
            <h4>$100.00 - $199.00</h4>
          </div>
          <div onClick={()=>handlePriceFilter({low: 300, high: 2999.99})} className="flex items-center cursor-pointer">
            <input type="checkbox"
                   checked={selectedCategory?.low === 300 && selectedCategory?.high === 2999.99}
             readOnly
            />
            <h4>$200.00 - $299.00</h4>
          </div>
          <div onClick={()=>handlePriceFilter({low: 3000, high: 999999.99})} className="flex items-center cursor-pointer">
            <input type="checkbox"
                   checked={selectedCategory?.low === 3000 && selectedCategory?.high === 999999.99}
             readOnly
            />
            <h4>$3000 - $999999.99</h4>
          </div>
          </>
        )}
      </div>
      <div className="">
        <h3 className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">
          Filter By Color
        </h3>
        <div className="flex items-center cursor-pointer">
          <input type="radio" />
          <h4>Blue</h4>
        </div>
      </div>
    </div>
  );
};

export default ShopRight;



// import React, { useState } from "react";

// const ShopRight = ({ handleAllProduct, product, category, brand, handlebrandfilter, handleCatoryFilter }) => {
//   const [brandshow, setBrandshow] = useState(false);
//   const [categoryShow, setCategoryShow] = useState(false);
//   const [discountShow, setDiscountShow] = useState(false);
//   const [ratingShow, setRatingShow] = useState(false);
//   const [priceShow, setPriceShow] = useState(false);

//   // স্টেট যা ক্যাটাগরি চেকবক্সের জন্য ব্যবহৃত হবে
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const toggleCategory = (item) => {
//     setSelectedCategory(prev => (prev === item ? null : item)); // পূর্বের ক্যাটাগরি আনচেক করে নতুন ক্যাটাগরি সিলেক্ট করে
//     handleCatoryFilter(item);
//   };

//   return (
//     <div>
//       <h3
//         onClick={handleAllProduct}
//         className="mb-[20px] font-semibold text-xl text-[#151875] leading-[30px] cursor-pointer"
//       >
//         All Product
//       </h3>
//       <div>
//         <h3
//           onClick={() => setBrandshow(!brandshow)}
//           className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
//         >
//           Product Brand
//         </h3>
//         {brandshow && (
//           <>
//             {brand.map((item, i) => (
//               <div key={i} onClick={() => handlebrandfilter(item)} className="flex items-center cursor-pointer cursor-pointer">
//                 <input type="checkbox" />
//                 <h4>{item}</h4>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//       <div>
//         <h3
//           onClick={() => setDiscountShow(!discountShow)}
//           className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
//         >
//           Discount Offer
//         </h3>
//         {discountShow && (
//           <div className="flex items-center cursor-pointer">
//             <input type="checkbox" />
//             <h4>20% Cashback</h4>
//           </div>
//         )}
//       </div>
//       <div>
//         <h3
//           onClick={() => setRatingShow(!ratingShow)}
//           className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
//         >
//           Rating Item
//         </h3>
//         {ratingShow && (
//           <div className="flex items-center cursor-pointer">
//             <input type="checkbox" />
//             <h4>⭐⭐⭐⭐⭐</h4>
//           </div>
//         )}
//       </div>
//       <div>
//         <h3
//           onClick={() => setCategoryShow(!categoryShow)}
//           className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
//         >
//           Categories
//         </h3>
//         {categoryShow && (
//           <>
//             {category.map((item, i) => (
//               <div key={i} onClick={() => toggleCategory(item)} className="flex items-center cursor-pointer cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedCategory === item} // চেকবক্স চেক হবে যদি ক্যাটাগরি সিলেক্ট করা থাকে
//                   readOnly
//                 />
//                 <h4>{item}</h4>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//       <div>
//         <h3
//           onClick={() => setPriceShow(!priceShow)}
//           className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer"
//         >
//           Price Filter
//         </h3>
//         {priceShow && (
//           <div className="flex items-center cursor-pointer">
//             <input type="checkbox" />
//             <h4>$0.00 - $150.00</h4>
//           </div>
//         )}
//       </div>
//       <div>
//         <h3 className="font-semibold text-xl text-[#151875] leading-[30px] border-b border-b-[#000000] inline-block mb-[11px] cursor-pointer">
//           Filter By Color
//         </h3>
//         <div className="flex items-center cursor-pointer">
//           <input type="radio" />
//           <h4>Blue</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopRight;

