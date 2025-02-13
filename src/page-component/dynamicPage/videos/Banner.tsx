import { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
// import Image from "next/image";

const BannerVideo = () => {
  const [scrolling, setScrolling] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setKey((prevKey) => prevKey + 1), 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <BannerMainBox>
      <AppBar
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: scrolling ? 0 : -100 }}
        transition={{ type: "keyframes", stiffness: 100 }}
        position="fixed"
        sx={{
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: scrolling ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Madras Masala
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Service</MenuItem>
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Service</MenuItem>
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/images/banner/without audio.mp4" type="video/mp4" />
        </video>
      </Box>

      <TitleContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedText key={key}>
          
          </AnimatedText>
        </motion.div>
      </TitleContainer>

      <ContentBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <BannerHeadingGreen>Pure & Fresh</BannerHeadingGreen>
        <BannerHeadingBlack>Ingredients</BannerHeadingBlack>
        <BannerText>Experience the authentic taste of nature.</BannerText>
      </ContentBox>
    </BannerMainBox>
  );
};

export default BannerVideo;

// Styled Components
const BannerMainBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .background-video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const TitleContainer = styled(Box)`
  position: absolute;
  top: 10%;
  left: 15%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const AnimatedText = styled(Typography)`
  font-size: 50px;
  line-height: 1.5;
  letter-spacing: 1px;
  font-weight: 800;
  color: #4caf50;
  font-family: "Poppins", serif;
  display: flex;
  gap: 3px;
 
`;

const ContentBox = styled(motion.div)`
  position: absolute;
  top: 54%;
  left: 60%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const BannerHeadingGreen = styled(Typography)`
  font-size: 80px;
  font-weight: 700;
  color: #4caf50;
`;

const BannerHeadingBlack = styled(Typography)`
  font-size: 80px;
  font-weight: 400;
  color: #fff;
`;

const BannerText = styled(Typography)`
  font-size: 30px;
  margin-top: 20px;
  color: rgb(214, 210, 210);
`;
