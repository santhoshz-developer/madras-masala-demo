import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

import { AnimatePresence, motion } from "framer-motion";
import {
    BannerMainBox,
    BannerSubBox,
    BannerHeadingGreen,
    BannerHeadingBlack,
    BannerHeadingBold,
    ButtonContainer,
    StyledButtonGreen,
    StyledButtonBlack,
    MainReviewBox,
    ReviewHeading,
    ReviewBody,
    BannerImage,
    BannerBackImage,
    BannerBackImage1,
    TextTypo,
    SubTextTypo,
} from "./Banner.styled";


const BannerSlides = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const banners = [
        {
            image: "/images/banner/BgMasala.png",
            title: "Madras Masala",
            subtitle: "at your",
            mainTitle: "Doorsteps",
            reviews: [
                { count: "14k+", text: "MASALA VARIETIES" },
                { count: "50k+", text: "HAPPY CUSTOMERS" },
                { count: "10k+", text: "STORE LOCATIONS" },
            ],
            buttons: {
                green: "START SHOPPING",
                black: "JOIN NOW",
            },
            align: "left",
        },
        {
            image: "/images/banner/offer.png",
            subImage: "/images/banner/ease out.png",
            textPosition: { top: "41%", left: "59%" },
            text: "Exclusive Offers And Special Deals For You",
            align: "center",
        },
        {
            image: "/images/banner/b.png",
            subtext: "Fast & Reliable Shipping",
            subtextPosition: { top: "43%", left: "63%" },
            align: "right",
            image1: "/images/banner/rect.png",
            image2: "/images/banner/recta.png",
        },
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
        customPaging: (i: number) => (
            <div
                style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: i === currentSlide ? "#000" : "grey",
                    margin: "5px",
                    transition: "background-color 0.3s ease-in-out",
                }}
            ></div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div style={{ position: "relative", bottom: "-6px", width: "100%", textAlign: "center" }}>
                <ul style={{ margin: "0", padding: "10", display: "flex", justifyContent: "center" }}>
                    {dots}
                </ul>
            </div>
        ),
    };

    const handleBeforeChange = (_: number, newIndex: number) => {
        setCurrentSlide(newIndex);
    };


    return (
        <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Slider {...settings} ref={sliderRef} beforeChange={handleBeforeChange}>
                {banners.map((banner, index) => (
                    <AnimatePresence mode="wait" key={index}>
                        {currentSlide === index && (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <BannerMainBox>
                                    <BannerImage src={banner.image} alt={`Banner ${index + 1}`} />
                                    <BannerSubBox align={banner.align}>
                                        <motion.div
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 50 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <BannerHeadingGreen variant="h6">
                                                {banner.title}
                                                <BannerHeadingBlack>
                                                    {" "}
                                                    {banner.subtitle}
                                                </BannerHeadingBlack>
                                            </BannerHeadingGreen>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -50 }}
                                            transition={{ delay: 0.7, duration: 1 }}
                                        >
                                            <BannerHeadingBold variant="h3">
                                                {banner.mainTitle}
                                            </BannerHeadingBold>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.2 }}
                                            transition={{ delay: 0.9, duration: 1 }}
                                        >
                                            {banner.buttons ? (
                                                <ButtonContainer>
                                                    <StyledButtonGreen>
                                                        {banner.buttons?.green}
                                                    </StyledButtonGreen>
                                                    <StyledButtonBlack>
                                                        {banner.buttons?.black}
                                                    </StyledButtonBlack>
                                                </ButtonContainer>
                                            ) : null}
                                        </motion.div>

                                        {banner.reviews && (
                                            <MainReviewBox>
                                                {banner.reviews.map((review, idx) => (
                                                    <motion.div
                                                        key={`review-${idx}`}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{
                                                            delay: 1.1 + idx * 0.2,
                                                            duration: 1,
                                                        }}
                                                    >
                                                        <ReviewHeading variant="h2">
                                                            {review.count}
                                                        </ReviewHeading>
                                                        <ReviewBody variant="body1">
                                                            {review.text}
                                                        </ReviewBody>
                                                    </motion.div>
                                                ))}
                                            </MainReviewBox>
                                        )}
                                        {banner.image1 && banner.image2 && (
                                            <Box>
                                                <BannerBackImage src={banner.image1} alt="rectange" />
                                                <BannerBackImage1 src={banner.image2} alt="rectange" />
                                            </Box>
                                        )}

                                        {banner.subImage && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -200 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 200 }}
                                                transition={{
                                                    delay: 1.1,
                                                    duration: 1,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <BannerImage
                                                    src={banner.subImage}
                                                    alt={`Sub Banner ${index + 1}`}
                                                    style={{
                                                        width: "700px",
                                                        height: "100%",
                                                    }}
                                                />
                                            </motion.div>
                                        )}

                                        {banner.subtextPosition && banner.subtext && (
                                            <SubTextTypo
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ delay: 1.1, duration: 1 }}
                                            >
                                                {banner.subtext}
                                            </SubTextTypo>
                                        )}
                                        {banner.textPosition && banner.text && (
                                            <TextTypo
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ delay: 1.1, duration: 1 }}
                                            >
                                                {banner.text}
                                            </TextTypo>
                                        )}
                                    </BannerSubBox>
                                </BannerMainBox>
                            </motion.div>
                        )}
                    </AnimatePresence>
                ))}
            </Slider>
         
        </Box>
    );
};

export default BannerSlides;
