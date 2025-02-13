import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import {
  BoxWrapper,
  TitleTypography,
  RounderImage,
  HeaderContainer,
  NavigationButton,
  SwiperContainer,
  ItemNameTypography,
  ViewAllButton,
  GridContainer,
  ButtonContainer,
} from "./Category.styled";
import { Box } from "@mui/material";
import { categoryImages } from "@/config/category/Category";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Category: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isViewAll, setIsViewAll] = useState(false);

  const handleViewMore = () => {
    setIsViewAll(!isViewAll);
  };

  const { t } = useTranslation();

  return (
    <BoxWrapper>
      <HeaderContainer>
        <TitleTypography variant="h4">{t('Category')}</TitleTypography>
        <ButtonContainer>
          <ViewAllButton variant="outlined" onClick={handleViewMore}>
            {isViewAll ? t("view_less") : t("view_more")}
          </ViewAllButton>
          {!isViewAll && (
            <>
              <NavigationButton
                variant="text"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
              >
                {"❮"}
              </NavigationButton>
              <NavigationButton
                variant="text"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
              >
                {"❯"}
              </NavigationButton>
            </>
          )}
        </ButtonContainer>
      </HeaderContainer>

      {isViewAll ? (
        <GridContainer>
          {categoryImages.map((item, index) => (
            <Box key={index}>
              <Link href={`${item.path}`}>
                <RounderImage src={item.src} alt={item.name} width={150} height={150} />
                <ItemNameTypography variant="body1" align="center">
                  {t(item.name)}
                </ItemNameTypography>
              </Link>
            </Box>
          ))}
        </GridContainer>
      ) : (
        <SwiperContainer>
          <Swiper
            spaceBetween={10}
            slidesPerView={8}
            centeredSlides={false}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 5 },
              480: { slidesPerView: 3, spaceBetween: 8 },
              768: { slidesPerView: 4, spaceBetween: 10 },
              1024: { slidesPerView: 6, spaceBetween: 10 },
              1280: { slidesPerView: 8, spaceBetween: 10 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {categoryImages.map((item, index) => (
              <SwiperSlide key={index}>
                <Box>
                  <Link href={`${item.path}`}>
                    <RounderImage src={item.src} alt={item.name} width={150} height={150} />
                    <ItemNameTypography variant="body1" align="center">
                      {t(item.name)}
                    </ItemNameTypography>
                  </Link>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      )}
    </BoxWrapper>
  );
};

export default Category;