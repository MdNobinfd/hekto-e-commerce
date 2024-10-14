import React from "react";
import Bloogmain from "../components/Bloogmain";
import allPost from "@/lib/allPost";

const page = async () => {
  const allproduct = await allPost()

  return (
    <>
      <Bloogmain allproduct={allproduct} />
    </>
  );
};

export default page;
