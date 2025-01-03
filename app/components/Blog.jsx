import React from "react";
import BlogCartReuseable from "./allReuseableCart/BlogCartReuseable";
import Container from "./Container";

const Blog = () => {
  return (
    <section className="md:pt-[96px] pt-[30px] md:pb-[115px] pb-[30px] lg:px-[25px] px-[15px]">
      <Container>
      <div className="md:mb-[80px] mb-[30px]">
          <h2 className="header">Leatest Blog</h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-y-0 gap-y-4 md:gap-y-10 md:gap-x-[56px] lg:gap-x-5 xl:gap-10 sm:gap-x-5 ">
          <BlogCartReuseable />
          <BlogCartReuseable />
          <BlogCartReuseable />
        </div>
      </Container>
    </section>
  );
};

export default Blog;
