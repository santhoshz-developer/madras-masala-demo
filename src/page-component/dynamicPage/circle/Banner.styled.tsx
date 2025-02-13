import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const BannerMainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url("/images/banner/image.png");
  overflow: hidden;
  padding: 0 10%;
`;

export const Overlay = styled(Box)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const GlassBox = styled(motion.div)`
  position: relative;
  z-index: 3;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  text-align: left;
`;

export const PlateContainer = styled(motion.div)`
  position: relative;
  width: 340px;
  height: 340px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NeonRing = styled(Box)`
  position: absolute;
  width: 650px;
  height: 650px;
  border-radius: 50%;
  background: white;
  border: 8px solid rgba(183, 171, 137, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  left: 150px;
`;

export const MasalaImage = styled(motion.img)`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AnimatedButton = styled(motion(Button))`
  background: linear-gradient(135deg, #ff9800, #f44336);
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 30px;
  border-radius: 30px;
  text-transform: none;
  transition: all 0.4s ease;
  box-shadow: 0px 5px 15px rgba(255, 87, 34, 0.3);

  &:hover {
    background: linear-gradient(135deg, #f57c00, #d32f2f);
    transform: translateY(-3px);
    box-shadow: 0px 10px 20px rgba(255, 87, 34, 0.5);
  }
`;

export const SecondaryButton = styled(AnimatedButton)`
  background: linear-gradient(135deg, #4caf50, #388e3c);

  &:hover {
    background: linear-gradient(135deg, #43a047, #2e7d32);
    box-shadow: 0px 10px 20px rgba(76, 175, 80, 0.5);
  }
`;
