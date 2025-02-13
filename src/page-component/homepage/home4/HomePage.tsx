"use client";
import React from "react";
import Category from "../../category/Category";

import ProductList from "../../productList/ProductList";
import BannerSlides from "@/page-component/dynamicPage/slides/Banner";

const Home4 = () => {
  return (
    <>
      <BannerSlides />
      <Category />
      <ProductList />
    </>
  );
};

export default Home4;
