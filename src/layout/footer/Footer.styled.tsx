import breakpoints from "@/themes/themes/breakpoints";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

export const FooterPadStyle = styled(Box)`
  padding: 0 5%;
`;

export const FooterMainBox = styled(Box)`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  ${breakpoints.xl} {
    gap: 63px;
  }
  ${breakpoints["2xl"]} {
    gap: 80px;
  }
`;

export const FooterTypoHead = styled(Typography)`
  font-size: 40px;
  font-weight: 700;
  ${breakpoints.xs} {
    font-size: 25px;
  }
  ${breakpoints.lg} {
    font-size: 40px;
  }
  ${breakpoints.xl} {
    font-size: 25px;
  }
`;

export const IconMainUl = styled("ul")`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const IconLists = styled("li")`
  list-style-type: none;
  color: #747474;
  height: 40px;
  border: 1px solid #efefef;
  padding: 7px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ImageAmazon = styled(Image)`
  margin-top: 5px;
`;

export const OrganicTypoHeading = styled(Typography)`
  font-size: 27px;
  font-weight: 700;
  ${breakpoints.xs} {
    font-size: 20px;
  }
  ${breakpoints.lg} {
    font-size: 27px;
  }
  ${breakpoints.xl} {
    font-size: 20px;
  }
`;

export const ListOrganic = styled("li")`
  list-style-type: none;
`;
export const StyledLink = styled(Link)`
  color: grey;
  font-size: 20px;
  line-height: 45px;
  ${breakpoints.xs} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
  ${breakpoints.xl} {
    font-size: 15px;
  }
`;

export const StyledTypo = styled(Typography)`
  color: grey;
  font-size: 20px;
  line-height: 50px;
  width: 315px;
  ${breakpoints.xs} {
    font-size: 15px;
  }
  ${breakpoints.lg} {
    font-size: 20px;
  }
  ${breakpoints.xl} {
    font-size: 16px;
  }
`;

export const SubscribeBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  background-color: #f8f8f8;
  border-radius: 25px;
  width: 350px;
  height: 50px;
    & fieldset {
      border: none;
    }
  }
    
`;

export const SubscribeButton = styled(Button)`
  background-color: #1e1e1e;
  color: #fff;
  height: 50px;
  margin-top: -px;
  border-radius: 0 25px 25px 0;
  &:hover {
    background-color: #333;
  }
`;
