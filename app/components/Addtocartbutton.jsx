"use client";
import { add } from "@/lib/store/features/cart/cartsilce";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
const Addtocartbutton = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(add({ ...product, qun: 1 }))}
        className="flex items-center gap-x-4 mt-6 px-6 py-2 text-[black] border-2 border-[black] rounded hover:bg-[black] hover:text-[white] "
      >
        Add To Cart
        <FaRegHeart />
      </button>
    </>
  );
};

export default Addtocartbutton;
