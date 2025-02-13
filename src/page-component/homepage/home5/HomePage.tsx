"use client";
import React from "react";
import Category from "../../category/Category";

import ProductList from "../../productList/ProductList";
import BannerVideo from "@/page-component/dynamicPage/videos/Banner";

const Home5 = () => {
  return (
    <>
      <BannerVideo />
      <Category />
      <ProductList />
    </>
  );
};

export default Home5;
