import breakpoints from "@/themes/themes/breakpoints";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const BannerMainBox = styled(Box)`
  padding: 0 5%;
  width: 100%;
  position: relative;
  min-height: 650px;
  height: 100%;
`;

export const BannerSubBox = styled(Box) <{ align?: string }>`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) =>
    align === "right" ? "flex-end" : "flex-start"};
  justify-content: center;
  text-align:  ${({ align }) =>
    align === "right" ? "center" : "start"};
  ${breakpoints.xs} {
    padding-top: 50px;
  }
`;

export const BannerImage = styled(motion.img)<{ src: string; alt: string }>({
  width: "100%",
  height: "700px",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
});

export const BannerBackImage = styled("img")({
  width: "400px",
  height: "400px",
  marginTop: "-20px",
  position: "relative",
  top: "25%",
  right: "25%",
  zIndex: -1,
  animation: "spin 30s linear infinite",
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

export const BannerBackImage1 = styled("img")({
  width: "400px",
  height: "400px",
  objectFit: "cover",
  position: "absolute",
  top: "20%",
  right: "11%",
  zIndex: -1,
  animation: "spin2 30s linear infinite",
  "@keyframes spin2": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(-360deg)" },
  },
});

export const BannerHeadingGreen = styled(Typography)`
  font-weight: 700;
  font-size: 80px;
  color: #fff;
  width: 700px;
  line-height: 90px;
  ${breakpoints.xs} {
    font-size: 30px;
    line-height: 40px;
  }
  ${breakpoints.lg} {
    font-size: 80px;
    line-height: 90px;
  }
`;

export const BannerHeadingBlack = styled("span")`
  font-weight: 400;
  font-size: 80px;
  color: #000;
  margin-left: 30px;
  ${breakpoints.xs} {
    font-size: 30px;
    margin-left: 10px;
  }
  ${breakpoints.lg} {
    font-size: 80px;
  }
`;

export const BannerHeadingBold = styled(Typography)`
  font-weight: 700;
  font-size: 80px;
  color: #000;
  ${breakpoints.xs} {
    font-size: 30px;
    margin-top: 10px;
  }
  ${breakpoints.lg} {
    font-size: 80px;
  }
`;

export const BannerText = styled(Typography)`
  font-size: 30px;
  color: rgb(214, 210, 210);
  margin-top: 20px;
  ${breakpoints.xs} {
    font-size: 18px;
  }
  ${breakpoints.lg} {
    font-size: 30px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  gap: 15px;
  margin-top: 50px;
`;

export const StyledButtonGreen = styled(Button)`
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 30px;
  text-transform: none;
  &:hover {
    background-color: #fff;
  }
  ${breakpoints.xs} {
    font-size: 10px;
  }
  ${breakpoints.lg} {
    font-size: 16px;
  }
`;

export const StyledButtonBlack = styled(Button)`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 30px;
  text-transform: none;
  &:hover {
    background-color: #000;
  }
  ${breakpoints.xs} {
    font-size: 10px;
  }
  ${breakpoints.lg} {
    font-size: 16px;
  }
`;

export const MainReviewBox = styled(Box)`
  display: flex;
  gap: 100px;
  margin-top: 50px;
  padding-bottom: 20px;
  ${breakpoints.xs} {
    flex-direction: column;
    gap: 30px;
  }
  ${breakpoints.sm} {
    flex-direction: row;
  }
`;
export const ReviewHeading = styled(Typography)`
  color: #000;
  ${breakpoints.xs} {
    font-size: 30px;
    font-weight: 700;
  }
  ${breakpoints.lg} {
    font-size: 50px;
  }
`;

export const ReviewBody = styled(Typography)`
  color: #000;
  font-size: 20px;
  margin-top: 5px;
  margin-left: 7px;
  width: 60%;
  ${breakpoints.xs} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
`;

export const MainContentDisplay = styled(Box)`
  display: flex;
  margin-top: 70px;
  ${breakpoints.xs} {
    flex-direction: column;
    row-gap: 20px;
  }
  ${breakpoints.sm} {
    flex-direction: row;
  }
`;

export const ContentHeading = styled(Typography)`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 25px;
  }
`;

export const ContentBody = styled(Typography)`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  line-height: 50px;
  ${breakpoints.xs} {
    font-size: 15px;
    margin-top: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
`;

export const FreshBox = styled(Box)`
  background-color: #43a047;
  padding: 20px 30px;
  width: 400px;
  ${breakpoints.xs} {
    width: 340px;
  }
  ${breakpoints.lg} {
    width: 400px;
  }
`;

export const OrganicBox = styled(Box)`
  background-color: #0d3618;
  padding: 20px 30px;
  width: 400px;
  ${breakpoints.xs} {
    width: 340px;
  }
  ${breakpoints.lg} {
    width: 400px;
  }
`;
export const DeliveryBox = styled(Box)`
  background-color: #de551f;
  padding: 20px 30px;
  width: 400px;
  ${breakpoints.xs} {
    width: 340px;
  }
  ${breakpoints.lg} {
    width: 400px;
  }
`;
export const TextTypo = styled(motion.div)({
  position: "absolute",
  top: "41%",
  left: "59%",
  color: "green",
  fontSize: "50px",
  fontWeight: "bold",
  width: "450px",
  textAlign: "center",
  lineHeight: "60px",
})

export const SubTextTypo = styled(motion.div)({
  position: "absolute",
  top: "41%",
  left: "63%",
  color: "#fff",
  fontSize: "50px",
  fontWeight: "bold",
  width: "450px",
  textAlign: "center",
  lineHeight: "60px",
})
