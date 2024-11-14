"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import ShopPaginate from "./ShopPaginate";
import ShopHeader from "./ShopHeader";
import ShopRight from "./ShopRight";

const Shoopmain = ({ data }) => {
  const product = data.products; // All Product convart
  const [currentshow, setCurrentshow] = useState("grid"); // shopHeader state
  const [myPorduct, setMyPorduct] = useState(product); // ShopRight all product state
  const [currentPage, setCurrentPage] = useState(1); //panination state 
  const [parePage, setParePage] = useState(12); //panination state
  const [category, setCategory] = useState([]) //category filter state 
  const [brand, setBrand] = useState([]) //brand filter state
  const [selectedCategory, setSelectedCategory] = useState(null); //input check state
  const [low, setLow] = useState()
  const [heigh, setHeigh] = useState()

  // shopHeader funtion start
  const handleshowproduct = (e) => {
    setParePage(e.target.value);
  };
  const handlegrid = () => {
    setCurrentshow("grid");
  };
  const handlelist = () => {
    setCurrentshow("list");
  };
  // shopHeader funtion end
  // Shop Right Funtion start
  const handleAllProduct = () => {
    setMyPorduct(product);
  };
  // Shop Right Funtion end

  // Product brand and category filter start
  useEffect(() => {
    setCategory([...new Set(product.map((cateitem)=>cateitem.category))])
    setBrand([...new Set(product.map((branditem)=>branditem.brand))])
  })
  // brand Filter
  const handlebrandfilter = (brnadItem) =>{
    const brandFilter = product.filter((item) => item.brand === brnadItem)
    setMyPorduct(brandFilter)
    setCurrentPage(1)
    setSelectedCategory(prev=> (prev == brnadItem ? null : brnadItem))
  }
  // Category Filter
  const handleCatoryFilter = (categoryItme) =>{
    const catoryFilter = product.filter((item)=> item.category === categoryItme)
    setMyPorduct(catoryFilter)
    setCurrentPage(1)
    setSelectedCategory(prev =>(prev == categoryItme ? null : categoryItme ))
  }

  // Product brand and category filter end


  // const handlePriceFilter =(value) =>{
  //   setLow(value.low)
  //   setHeigh(value.heigh)
  //   const prceFilter = product.filter((item)=>item.price >= value.low && item.price <= value.heigh)
  //   setMyPorduct(prceFilter)
  //   setMyPorduct(value)
  //   setCurrentPage(1)
  //   setSelectedCategory(prev =>(prev == value ? null : value ))

  // }
  const handleRatingFilter = (rating) => {
    const filteredProducts = product.filter((item) => item.rating === rating);
    // Update the state or perform any action to display the filtered products
    setMyPorduct(filteredProducts); // For example, you can show the filtered products
  };

  const handlePriceFilter = (value) => {
    const filtered = product.filter(
      (item) => item.price >= value.low && item.price <= value.high
    );
    filtered.sort((a, b) => a.price - b.price);
    setMyPorduct(filtered);
    setCurrentPage(1)
    setSelectedCategory(prev =>(prev == value ? null : value ))
  };
  return (
    <section>
      <Container>
        {/* title and per page sort by view etc */}
        <ShopHeader
          handleshowproduct={handleshowproduct}
          handlegrid={handlegrid}
          handlelist={handlelist}
          currentshow={currentshow}
        />
        {/* title and per page sort by view etc */}
        {/* Product show section start */}
        <div className="lg:flex gap-x-[38px]">
          {/* Left sider bar Like Category Price filter */}
          <div className="lg:w-[20%] w-full lg:mb-0 mb-8">
            <ShopRight handleAllProduct={handleAllProduct} product={product} brand={brand} category={category} handlebrandfilter={handlebrandfilter} handleCatoryFilter={handleCatoryFilter} selectedCategory={selectedCategory} handlePriceFilter={handlePriceFilter} handleRatingFilter={handleRatingFilter} />
          </div>
          {/* grid and list product show */}
          <div className="lg:w-[80%] w-full">
            <ShopPaginate
              procut={myPorduct}
              currentshow={currentshow}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              parePage={parePage}
            />
            {/* pagination end */}
          </div>
        </div>
        {/* Product show section end */}
      </Container>
    </section>
  );
};

export default Shoopmain;
