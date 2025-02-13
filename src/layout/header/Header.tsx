"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Menu } from "@mui/material";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

import {
  IconBox,
  IconSearch,
  MainHeaderBox,
  SearchBox,
  SearchText,
  SelectBox,
  StyledInputBase,
  StyledSelect,
  StyledTypographyLogo,
  SubBoxes,
  VisibleHidden,
  DrawerContent,
  MenuHeading,
  SideHeading,
  MenuItems,
} from "./Header.styled";

const NormalHeader = () => {
  const [category, setCategory] = useState<string>("All Categories");
  const [pages, setPages] = useState<string>("pages");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    setLanguage(lang);
    setAnchorEl(null);
  };

  const handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    setCategory(event.target.value as string);
  };

  const handlePagesChange = (event: SelectChangeEvent<unknown>) => {
    setPages(event.target.value as string);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MainHeaderBox>
        <SubBoxes>
          <StyledTypographyLogo>
            <Image
              src={"/images/header/image.png"}
              alt="logo"
              height={130}
              width={130}
            />
          </StyledTypographyLogo>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginTop: { xs: "0px", md: "22px", xl: "20px" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </SubBoxes>
        <SearchBox>
          <VisibleHidden>
            <StyledSelect
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ "aria-label": "All Categories" }}
            >
              <MenuItem value="All Categories">All Categories</MenuItem>
              <MenuItem value="Powder">Masala</MenuItem>
              <MenuItem value="Fashion">Seeds</MenuItem>
              <MenuItem value="Groceries">Groceries</MenuItem>
            </StyledSelect>
          </VisibleHidden>
          <SearchText>
            <StyledInputBase placeholder="Search More Products…" />
            <IconSearch />
          </SearchText>
        </SearchBox>
        <SelectBox>
          <FormControl sx={{ minWidth: 150 }}>
            <StyledSelect
              value={pages}
              onChange={handlePagesChange}
              sx={{ fontWeight: 600, fontSize: "16px" }}
            >
              <MenuItem value="pages">PAGES</MenuItem>
              <MenuItem value="about">ABOUT US</MenuItem>
              <MenuItem value="checkout">CHECKOUT</MenuItem>
              <MenuItem value="blog">BLOG</MenuItem>
            </StyledSelect>
          </FormControl>
        </SelectBox>
        <IconBox>
          <IconButton
            size="large"
            aria-label="show 4 new items in cart"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <IconButton onClick={handleOpen} color="inherit">
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
            <MenuItem onClick={() => handleClose("ta")}>தமிழ்</MenuItem>
            <MenuItem onClick={() => handleClose("hi")}>हिन्दी</MenuItem>
          </Menu>
        </IconBox>
      </MainHeaderBox>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent>
          <MenuHeading>
            <SideHeading>Menu</SideHeading>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </MenuHeading>
          <Box sx={{ mt: 2 }}>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Garam Masala</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>
                Carom seeds Powder
              </MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Cumin Powder</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>
                Black Pepper Powder
              </MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Chili Powder</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>
                Curry Leaves Powder
              </MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>
                Coriander Powder
              </MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Dalchini Powder</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Turmeric Powder</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>
                Black Cardamom Powder
              </MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Ginger Powder</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Garlic Powder</MenuItem>
            </MenuItems>
            <MenuItems>
              <MenuItem onClick={toggleDrawer(false)}>Cloves Powder</MenuItem>
            </MenuItems>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NormalHeader;
