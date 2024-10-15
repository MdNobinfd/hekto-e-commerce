"use client"; // This must be the first line
import Image from "next/image";
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
const SearchBar = ({ data }) => {
  const info = data.products;
  const [searchInfo, setSearchInfo] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  let [activeIndex, setActiveIndex] = useState(-1);
  const suggestionRef = useRef(null);
  const router = useRouter()

  const handlechange = (e) => {
    setSearchInfo(e.target.value);
    if (e.target.value === "") {
      setSearchFilter([]);
    } else {
      let searchOne = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchFilter(searchOne);
    }
  };

  const handleKeyDown = (e) => {
    if (searchFilter.length > 0) {
      if (e.key === "ArrowDown") {
        setActiveIndex((prevIndex) =>
          prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (e.key === "Enter" && activeIndex >= 0) {
        handleSearchProduct(searchFilter[activeIndex].id);
      }
    }
  };

  let handleSearchProduct = (id) => {
    setSearchFilter([]);
    setSearchInfo("");
    router.push(`/product/${id}`)
  };

  useEffect(() => {
    if (suggestionRef.current) {
      const activeElement = suggestionRef.current.children[activeIndex];
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeIndex, searchFilter]);

  return (
    <>
      <div className="relative flex items-center">
        <input
          onChange={handlechange}
          onKeyDown={handleKeyDown}
          value={searchInfo}
          type="text"
          placeholder="Search"
          className="w-[266px] h-[40px] px-3 bg-[#D9D9D9] outline-none"
        />
        <div className="w-[51px] h-[40px] text-[white] text-[20px] font-bold bg-[#FB2E86] flex items-center justify-center">
          <IoIosSearch />
        </div>
        {searchFilter.length > 0 && (
          <div ref={suggestionRef} className="absolute z-50 top-[52px] overflow-y-scroll left-0 lg:h-[400px] h-[250px] w-full p-[20px] bg-[#F5F5F3] cursor-pointer">
            {searchFilter.map((item, i) => (
              <div
              
                key={i}
                onClick={() => handleSearchProduct(item.id)}
                className={` ${i === activeIndex ? "bg-gray-200" : ""}`}
              >
                <div className="w-[80px] ">
                  <Image
                    width={100}
                    height={100}
                    src={item.thumbnail}
                    alt="searce imge"
                  />
                </div>
                <div className="">
                  <h2 className="font-dm-sans font-normal text-base ">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
