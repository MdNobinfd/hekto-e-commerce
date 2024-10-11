import React from "react";
import PageHeaderReusable from "./allReuseableCart/PageHeaderReusable";
import Brand from "./Brand";
import LoginForm from "./LoginForm";

const Loging = () => {
  return (
    <>
      <PageHeaderReusable title="My Account" />
      <LoginForm />
      <div className="mb-[109px]">
        <Brand />
      </div>
    </>
  );
};

export default Loging;
