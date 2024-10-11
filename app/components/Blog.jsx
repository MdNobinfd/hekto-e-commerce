import React from "react";
import BlogCartReuseable from "./allReuseableCart/BlogCartReuseable";
import Container from "./Container";

const Blog = () => {
  return (
    <section className="pt-[96px] pb-[115px]">
      <Container>
      <div className="mb-[80px]">
          <h2 className="header">Leatest Blog</h2>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-y-0 gap-y-10 gap-x-[56px] grid-cols-2">
          <BlogCartReuseable />
          <BlogCartReuseable />
          <BlogCartReuseable />
        </div>
      </Container>
    </section>
  );
};

export default Blog;
