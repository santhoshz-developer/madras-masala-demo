import breakpoints from "@/themes/themes/breakpoints";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerMainBox = styled(Box)`
  position: relative;
  padding: 0 5%;
  width: 100%;
  height: 100vh; /* Ensure it takes full screen height */
  overflow: hidden;

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure the video stays behind the text */
  }

  .background-video {
    object-fit: cover; /* Ensures the video covers the container without distortion */
    width: 100%;
    height: 100%;
  }
`;
export const BannerSubBox = styled(Box)`
  padding-top: 100px;
  ${breakpoints.xs} {
    padding-top: 50px;
  }
`;

export const BannerHeadingGreen = styled(Typography)`
  font-weight: 700;
  font-size: 80px;
  color: #4caf50;
  width: 300px;
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
  color:rgb(214, 210, 210);
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
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 30px;
  text-transform: none;
  &:hover {
    background-color: #43a047;
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
