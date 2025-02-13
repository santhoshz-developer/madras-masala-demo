"use client";
import React from "react";
import Category from "../../category/Category";

import ProductList from "../../productList/ProductList";
import Banner1 from "@/page-component/dynamicPage/circle/Banner";
import Banners from "@/page-component/dynamicPage/doubleBanner/Banner";

const Home3 = () => {
  return (
    <>
      <Banners />
      <Banner1 />
      <Category />
      <ProductList />
    </>
  );
};

export default Home3;
