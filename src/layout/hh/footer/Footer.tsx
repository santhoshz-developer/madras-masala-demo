'use client';
import React from 'react';
import {
  FooterMainBox,
  FooterPadStyle,
  FooterTypoHead,
  IconLists,
  IconMainUl,
  ImageAmazon,
  ListOrganic,
  OrganicTypoHeading,
  StyledLink,
  StyledTextField,
  StyledTypo,
  SubscribeBox,
  SubscribeButton,
} from './Footer.styled';
import { Box, InputAdornment } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const HhFooterComponent = () => {
  const currentyear = new Date().getFullYear();

  return (
    <FooterPadStyle>
      <FooterMainBox>
        <Box>
          <FooterTypoHead variant="h4">
            <Image src={'/images/logo/logo.png'} alt="logo" height={130} width={130} />
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
                <ImageAmazon src="/images/footer/amazon.png" alt="amazon" height={20} width={20} />
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
                    <SubscribeButton variant="contained">Subscribe</SubscribeButton>
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
    </FooterPadStyle>
  );
};

export default HhFooterComponent;
