"use client";
import React, { useEffect } from "react";
import Container from "./Container";
import details1 from '#/details1.png'
import details2 from '#/details2.png'
import Image from "next/image";
import ProductDetailsSlider from "./ProductDetailsSlider";

const ProductDeatilsImage = ({ data }) => {
  

  return (
    <section className="mt-[121px] mb-[131px]">
      <Container>
        <h2>{data.title}</h2>
        <ProductDetailsSlider />
      </Container>
    </section>
  );
};

export default ProductDeatilsImage;
