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
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const NormalFooterComponent = () => {
  const currentyear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <FooterPadStyle>
      <FooterMainBox>
        <Box>
          <FooterTypoHead variant="h4">
            <Image src={'/images/header/image.png'} alt="logo" height={130} width={130} />
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
          <OrganicTypoHeading variant="h5">{t('organic')}</OrganicTypoHeading>
          <ul>
            <ListOrganic>
              <StyledLink href="#">{t('about_us')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('conditions')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('our_journals')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('careers')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('affiliate_programme')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('ultras_press')}</StyledLink>
            </ListOrganic>
          </ul>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">{t('quick_links')}</OrganicTypoHeading>
          <ul>
            <ListOrganic>
              <StyledLink href="#">{t('offers')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('discount_coupons')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('stores')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('track_order')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('shop')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('info')}</StyledLink>
            </ListOrganic>
          </ul>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">{t('customer_service')}</OrganicTypoHeading>
          <ul>
            <ListOrganic>
              <StyledLink href="#">{t('faq')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('contact')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('privacy_policy')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('returns_refunds')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('cookie_guidelines')}</StyledLink>
            </ListOrganic>
            <ListOrganic>
              <StyledLink href="#">{t('delivery_info')}</StyledLink>
            </ListOrganic>
          </ul>
        </Box>
        <Box>
          <OrganicTypoHeading variant="h5">{t('subscribe_us')}</OrganicTypoHeading>
          <StyledTypo variant="body1">{t('subscribe_text')}</StyledTypo>
          <SubscribeBox>
            <StyledTextField
              variant="outlined"
              placeholder={t('email_placeholder')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SubscribeButton variant="contained">{t('subscribe_button')}</SubscribeButton>
                  </InputAdornment>
                ),
              }}
            />
          </SubscribeBox>
        </Box>
        <Box>
          <StyledTypo variant="body1">
            © {currentyear} {t('copyright')}
          </StyledTypo>
        </Box>
      </FooterMainBox>
    </FooterPadStyle>
  );
};

export default NormalFooterComponent;
