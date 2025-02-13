import React from "react";

import "swiper/css";

import {
  BoxWrapper,
  TitleTypography,
  RounderImage,
  HeaderContainer,
  ItemNameTypography,
  GridContainer,
} from "./Category.styled";
import { Box } from "@mui/material";

import Link from "next/link";
import { categoryHhImages } from "@/config/category/CategoryHh";

const CategoryHeader: React.FC = () => {
  return (
    <BoxWrapper>
      <HeaderContainer>
        <TitleTypography variant="h4">Category</TitleTypography>
      </HeaderContainer>

      <GridContainer>
        {categoryHhImages.map((item, index) => (
          <Box key={index}>
            <Link href={`${item.path}`}>
              <RounderImage
                src={item.src}
                alt={item.name}
                width={150}
                height={150}
              />

              <ItemNameTypography variant="body1" align="center">
                {item.name}
              </ItemNameTypography>
            </Link>
          </Box>
        ))}
      </GridContainer>
    </BoxWrapper>
  );
};

export default CategoryHeader;
