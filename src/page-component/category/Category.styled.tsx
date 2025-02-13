import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import breakpoints from "@/themes/themes/breakpoints";

export const BoxWrapper = styled(Box)`
  margin-top: 1rem;
  padding: 0 5%;
  ${breakpoints.sm} {
    padding: 0 4%;
  }
`;

export const TitleTypography = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: #333;
  margin-left: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  ${breakpoints.md} {
    font-size: 2.5rem;
    margin-top: 40px;
  }
`;

export const RounderImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  user-select: none;
  ${breakpoints.xs} {
    margin-left: 10px;
  }
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const NavigationButton = styled(Button)`
  min-width: 35px;
  color: black;
  border: none;
  &:hover {
    background-color: orange;
    border: none;
    color: white;
  }
  ${breakpoints.xs} {
    font-size: 18px;
    height: 35px;
  }
`;

export const ViewAllButton = styled(Button)`
  border-radius: 6px;
  color: darkorange;
  font-size: 14px;
  padding: 6px 12px;
  border-color: orange;
  font-weight: 550;
  &:hover {
    color: white;
    background-color: orange;
    border-color: darkorange;
  }

  ${breakpoints.xs} {
    font-size: 13px;
    padding: 8px 10px;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SwiperContainer = styled(Box)`
  width: 100%;
  padding: 1rem 0;
`;

export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
  justify-items: center;
  ${breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const ItemNameTypography = styled(Typography)`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: rgb(16, 18, 20);
  text-align: center;
`;

export default breakpoints;
