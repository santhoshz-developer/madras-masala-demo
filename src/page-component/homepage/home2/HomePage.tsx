"use client";
import React from "react";
import Category from "../../category/Category";

import ProductList from "../../productList/ProductList";
import Bannerv1 from "@/page-component/dynamicPage/ladie/Banner";

const Home2 = () => {
  return (
    <>
      <Bannerv1 />
      <Category />
      <ProductList />
    </>
  );
};

export default Home2;
