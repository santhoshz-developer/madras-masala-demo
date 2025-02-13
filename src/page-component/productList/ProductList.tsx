"use client";
import React, { useState } from "react";
import {
  BoxWrapper,
  ButtonContainer,
  GridContainer,
  TitleTypography,
  ViewAllButton,
} from "./ProductList.styled";
import ProductCard from "./helper-component/ProductCard";
import { ProductConfig } from "@/config/productList/ProductList";
import { useTranslation } from "react-i18next";

const INITIAL_VISIBLE_COUNT = 10;

const ProductList = () => {
  const [isViewAll, setIsViewAll] = useState(false);

  const { t } = useTranslation();

  const handleViewMore = () => {
    setIsViewAll(!isViewAll);
  };

  return (
    <BoxWrapper>
      <ButtonContainer>
        <TitleTypography variant="h4">Product List</TitleTypography>
        <ViewAllButton variant="outlined" onClick={handleViewMore}>
        {isViewAll ? t("view_less") : t("view_more")}
        </ViewAllButton>
      </ButtonContainer>

      <GridContainer>
        {(isViewAll
          ? ProductConfig
          : ProductConfig.slice(0, INITIAL_VISIBLE_COUNT)
        ).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </GridContainer>
    </BoxWrapper>
  );
};

export default ProductList;
