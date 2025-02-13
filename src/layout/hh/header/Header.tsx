'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate'; // Language Icon
import {
  Menu,
  Box,
  Typography,
  Dialog,
  DialogContent,
  TextField,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import {
  MainHeaderBox,
  SelectBox,
  StyledTypographyLogo,
  SubBoxes,
  DrawerContent,
  MenuHeading,
  SideHeading,
  MenuItems,
} from './Header.styled';

// Styled Box for Cart Drawer Content
const CartContent = styled(Box)({
  width: 300,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

// Dummy Cart Items
const cartItems = [
  { id: 1, name: 'Garam Masala', price: 120 },
  { id: 2, name: 'Cumin Powder', price: 90 },
  { id: 3, name: 'Carom Seeds Powder', price: 100 },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ta', label: 'Tamil' },
  { code: 'hi', label: 'Hindi' },
  { code: 'fr', label: 'French' },
];

// Navbar items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Combo', path: '/combo' },
  { label: 'Spices & Masalas', path: '/spices-masalas' },
  { label: 'Instant Kits', path: '/instant-kits' },
];

const menuItems = [
  { name: 'Garam Masala', path: '/garam-masala' },
  { name: 'Cumin Powder', path: '/cumin-powder' },
  { name: 'Carom Seeds Powder', path: '/carom-seeds-powder' },
];

const HeaderHh = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [, setLanguage] = useState('en');
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(null);

  const router = useRouter();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLangMenuAnchor(event.currentTarget);
  };

  const handleLanguageSelect = (code: string) => {
    setLanguage(code);
    setLangMenuAnchor(null);
  };

  return (
    <>
      {/* Main Header */}
      <MainHeaderBox>
        <SubBoxes>
          <StyledTypographyLogo>
            <Image src={'/images/logo/logo.png'} alt="logo" height={130} width={130} />
          </StyledTypographyLogo>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ height: 50, marginTop: '35px' }}
          >
            <MenuIcon />
          </IconButton>
        </SubBoxes>

        <SelectBox>
          <IconButton
            size="large"
            color="inherit"
            onClick={toggleSearch}
            sx={{ height: 50, marginTop: '35px' }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show cart"
            color="inherit"
            onClick={toggleCart}
            sx={{ height: 50, marginTop: '35px' }}
          >
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
            sx={{ height: 50, marginTop: '35px' }}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
            sx={{ height: 50, marginTop: '35px' }}
          >
            <AccountCircle />
          </IconButton>

          {/* Language Dropdown */}
          <IconButton
            size="large"
            color="inherit"
            onClick={handleLanguageClick}
            sx={{ height: 50, marginTop: '35px' }}
          >
            <TranslateIcon />
          </IconButton>
          <Menu
            anchorEl={langMenuAnchor}
            open={Boolean(langMenuAnchor)}
            onClose={() => setLangMenuAnchor(null)}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.code} onClick={() => handleLanguageSelect(lang.code)}>
                {lang.label}
              </MenuItem>
            ))}
          </Menu>
        </SelectBox>
      </MainHeaderBox>

      {/* Navigation Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#f3f3f3',
          py: 1,
        }}
      >
        {navItems.map((item) => (
          <Typography
            key={item.label}
            onClick={() => router.push(item.path)}
            sx={{
              color: 'black',
              mx: 1,
              cursor: 'pointer',
              paddingRight: '30px',
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Box>

      {/* Drawer for Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <DrawerContent>
          <MenuHeading>
            <SideHeading>Menu</SideHeading>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </MenuHeading>
          <Box sx={{ mt: 2 }}>
            {menuItems.map((item) => (
              <MenuItems key={item.name}>
                <MenuItem
                  onClick={() => {
                    router.push(item.path);
                    toggleDrawer(false)();
                  }}
                >
                  {item.name}
                </MenuItem>
              </MenuItems>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>

      {/* Drawer for Cart */}
      <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
        <CartContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Shopping Cart</Typography>
            <IconButton onClick={toggleCart}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />

          {cartItems.length > 0 ? (
            <>
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.name} secondary={`₹${item.price}`} />
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" textAlign="right" sx={{ mb: 2 }}>
                Total: ₹{cartItems.reduce((sum, item) => sum + item.price, 0)}
              </Typography>
              <Button variant="contained" color="success" fullWidth>
                Checkout
              </Button>
            </>
          ) : (
            <Typography textAlign="center" color="textSecondary">
              Your cart is empty
            </Typography>
          )}
        </CartContent>
      </Drawer>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onClose={toggleSearch} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <span>Search</span>
          <IconButton onClick={toggleSearch}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: 2,
            }}
          >
            <TextField
              fullWidth
              autoFocus
              placeholder="Search More Products…"
              sx={{ maxWidth: 500 }}
            />
            <Button variant="contained" color="success" sx={{ maxWidth: 200 }}>
              Search
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeaderHh;
