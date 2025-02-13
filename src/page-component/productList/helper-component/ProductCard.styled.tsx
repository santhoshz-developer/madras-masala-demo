import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const CardWrapper = styled(Box)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  transition: all 0.3s ease-in-out;
  background: #fff;
  text-align: center;
  cursor: pointer;
  width: 100%;
  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    .action-container {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const ImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-height: 210px;
  height: auto;
`;

export const PriceWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;

export const OldPrice = styled(Typography)`
  text-decoration: line-through;
  color: #888;
  font-size: 16px;
`;

export const NewPrice = styled(Typography)`
  font-weight: bold;
  color: #1a8917;
  font-size: 18px;
`;

export const DiscountBadge = styled(Box)`
  background: #ffd700;
  color: #000;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
`;

export const ActionContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

export const CartButton = styled(Button)`
  width: 100%;
  background: orange;
`;

export const ImageStyled = styled(Image)`
  border-radius: 12px;
`;

export const ViewMoreButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  min-width: 0;
  border-radius: 6px;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
