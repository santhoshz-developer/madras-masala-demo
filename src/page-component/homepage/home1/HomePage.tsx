"use client";
import React from "react";
import Category from "../../category/Category";

import ProductList from "../../productList/ProductList";
import Banner1 from "../../dynamicPage/circle/Banner";


const Home1 = () => {
  return (
    <>
      <Banner1 />
      <Category />
      <ProductList />
    </>
  );
};

export default Home1;
