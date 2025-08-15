// product page updated
import React from "react";
import PageHeaderReusable from "../components/allReuseableCart/PageHeaderReusable";
import ProductGrid from "../components/ProductGrid";
import getAlldata from "@/lib/getAlldata";
import Brand from "../components/Brand";

const page = async () => {
  const data = await getAlldata()
  return (
    <>
      <PageHeaderReusable title='Shop Grid Default' />
      <ProductGrid data={data} />
      <Brand />
    </>
  );
};

export default page;
