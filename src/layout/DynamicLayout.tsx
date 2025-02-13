"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NormalHeader from "@/layout/header/Header";
import NormalFooterComponent from "@/layout/footer/Footer";
import SlideFooterComponent from "./slidesHeader/footer/Footer";
import SlideHeader from "./slidesHeader/header/Header";
import HeaderHh from "./hh/header/Header";
import HhFooterComponent from "./hh/footer/Footer";

const DynamicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Explicitly check each condition
  const isV2Layout =
    pathname === "/" ||
    pathname === "/v1" ||
    pathname === "/v4" ||
    pathname === "/v2";
  const isV2LayoutHh = pathname === "/v5";
  const isV2LayoutSilde = pathname === "/v3"; 

  return (
    <div>
      {/* Conditionally render headers */}
      {isV2Layout && <NormalHeader />}
      {isV2LayoutSilde && <SlideHeader />}
      {isV2LayoutHh && <HeaderHh />}
      <main className="p-4">{children}</main>

      {/* Conditionally render footers */}
      {isV2Layout && <NormalFooterComponent />}
      {isV2LayoutSilde && <SlideFooterComponent />}
      {isV2LayoutHh && <HhFooterComponent />}
    </div>
  );
};

export default DynamicLayout;
