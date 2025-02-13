"use client";

import { Box, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";
import {
  BannerMainBox,
  Overlay,
  GlassBox,
  AnimatedButton,
  SecondaryButton,
  PlateContainer,
  MasalaImage,
  NeonRing,
} from "./Banner.styled";

const Banner1 = () => {
  const { t } = useTranslation();

  return (
    <BannerMainBox>
      <Overlay />

      <GlassBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "3.5rem",
            textShadow: "2px 4px 6px rgba(0,0,0,0.3)",
          }}
        >
          {t("title")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: 400,
            mt: 2,
            textShadow: "1px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {t("subtitle")}
        </Typography>

        <Box display="flex" gap={2} justifyContent="flex-start" mt={4}>
          <AnimatedButton whileHover={{ scale: 1.05 }}>
            {t("start_shopping")}
          </AnimatedButton>
          <SecondaryButton whileHover={{ scale: 1.05 }}>
            {t("join_now")}
          </SecondaryButton>
        </Box>
      </GlassBox>

      {/* Right Side - Animated Plate */}
      <PlateContainer>
        <NeonRing>
          <MasalaImage
            src="/images/banner/dals.webp"
            alt="Masala"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </NeonRing>
      </PlateContainer>
    </BannerMainBox>
  );
};

export default Banner1;
