import { Box } from "@mui/material";
import React from "react";
import {
  BannerMainBox,
  BannerHeadingGreen,
  BannerHeadingBlack,
  BannerHeadingBold,
  ButtonContainer,
  StyledButtonGreen,
  StyledButtonBlack,
  BannerSubBox,
  MainReviewBox,
  ReviewHeading,
  ReviewBody,
} from "./Banner.styled";

const BannerHeader = () => {
  return (
    <BannerMainBox>
      <BannerSubBox>
        <BannerHeadingGreen variant="h6">
          Madras Masala
          <BannerHeadingBlack>at your</BannerHeadingBlack>
        </BannerHeadingGreen>
        <BannerHeadingBold variant="h3">Doorsteps</BannerHeadingBold>
        <ButtonContainer>
          <StyledButtonGreen>START SHOPPING</StyledButtonGreen>
          <StyledButtonBlack>JOIN NOW</StyledButtonBlack>
        </ButtonContainer>
        <MainReviewBox>
          <Box>
            <ReviewHeading variant="h2">14k+</ReviewHeading>
            <ReviewBody variant="body1">MASALA VARIETIES</ReviewBody>
          </Box>
          <Box>
            <ReviewHeading variant="h2">50k+</ReviewHeading>
            <ReviewBody variant="body1">HAPPY CUSTOMERS</ReviewBody>
          </Box>
          <Box>
            <ReviewHeading variant="h2">10k+</ReviewHeading>
            <ReviewBody variant="body1">STORE LOCATIONS</ReviewBody>
          </Box>
        </MainReviewBox>
      </BannerSubBox>
    </BannerMainBox>
  );
};

export default BannerHeader;
