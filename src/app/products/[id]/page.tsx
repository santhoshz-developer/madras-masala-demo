"use client";

import ProductDetails from "@/page-component/productDetails/ProductDetails";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const id = params.id as string; // Ensure `id` is treated as a string

  return <ProductDetails id={id} />;
};

export default Page;
