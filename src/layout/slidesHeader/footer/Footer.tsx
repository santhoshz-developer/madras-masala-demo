"use client";
import React from "react";
import {
  FixedBox,
  FooterMainBox,
  FooterPadStyle,
  FooterTypoHead,
  IconLists,
  IconMainUl,
  IconWhatsApp,
  ImageAmazon,
  ListOrganic,
  OrganicTypoHeading,
  StyledLink,
  StyledTextField,
  StyledTypo,
  SubscribeBox,
  SubscribeButton,
} from "./Footer.styled";
import { Box, InputAdornment } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";

const SlideFooterComponent = () => {
  const currentyear = new Date().getFullYear();

  return (
    <FooterPadStyle>
      <FooterMainBox>
        <Box>
          <FooterTypoHead variant="h4">
            Madras Masala{" "}
            <Image
              src={"/images/header/image.png"}
              alt={"logo"}
              height={50}
              width={50}
              style={{
                position: "relative",
                top: "10px",
                left: "-10px",
              }}
            />
          </FooterTypoHead>
          <Box>
            <IconMainUl>
              <IconLists>
                <FacebookRoundedIcon />
              </IconLists>
              <IconLists>
                <TwitterIcon />
              </IconLists>
              <IconLists>
                <YouTubeIcon />
              </IconLists>
              <IconLists>
                <InstagramIcon />
              </IconLists>
              <IconLists>
                <ImageAmazon
                  src="/images/footer/amazon.png"
                  alt="amazon"
                  height={20}
                  width={20}
                />
              </IconLists>
            </IconMainUl>
          </Box>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">Organic</OrganicTypoHeading>
          <ul>
            <ListOrganic>
              <StyledLink href="#">About us</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Conditions</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Our Journals</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Careers</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Affiliate Programme</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Ultras Press</StyledLink>
            </ListOrganic>
          </ul>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">Quick Links</OrganicTypoHeading>
          <ul>
            <ListOrganic>
              <StyledLink href="#">Offers</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Discount Coupons</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Stores</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Track Order</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Shop</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Info</StyledLink>
            </ListOrganic>
          </ul>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">Customer Service</OrganicTypoHeading>
          <ul>
            <ListOrganic>
              <StyledLink href="#">FAQ</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Contact</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Privacy Policy</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Returns & Refunds</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Cookie Guidelines</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">Delivery Information</StyledLink>
            </ListOrganic>
          </ul>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">Subscribe Us</OrganicTypoHeading>
          <StyledTypo variant="body1">
            Subscribe to our newsletter to get updates about our grand offers.
          </StyledTypo>
          <SubscribeBox>
            <StyledTextField
              variant="outlined"
              placeholder="Email Address"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SubscribeButton variant="contained">
                      Subscribe
                    </SubscribeButton>
                  </InputAdornment>
                ),
              }}
            />
          </SubscribeBox>
        </Box>
        <Box>
          <StyledTypo variant="body1">
            © {currentyear} Madras Masala. All rights reserved.
          </StyledTypo>
        </Box>
      </FooterMainBox>
      <FixedBox>
        <Link
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWhatsApp />
        </Link>
      </FixedBox>
    </FooterPadStyle>
  );
};

export default SlideFooterComponent;
