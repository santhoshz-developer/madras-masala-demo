import React, { useState } from "react";
import { Box, Typography, IconButton, TextField, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  ActionContainer,
  CardWrapper,
  CartButton,
  DiscountBadge,
  ImageStyled,
  ImageWrapper,
  NewPrice,
  OldPrice,
  PriceWrapper,
} from "./ProductCard.styled";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

interface ProductListType {
  id: string | number;
  name: string;
  path: string;
  src: string;
  originalPrice: number;
  discountedPrice: number;
}
const ProductCard = ({ product }: { product: ProductListType }) => {
  const { src, name, originalPrice, discountedPrice } = product;
  const [quantity, setQuantity] = useState(1);
  const randomRating = Math.floor(Math.random() * 5) + 1;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };
  const { t } = useTranslation();

  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <CardWrapper onClick={handleNavigate}>
      <ImageWrapper>
        <ImageStyled src={src} alt={name} width={200} height={180} />
      </ImageWrapper>

      <Typography variant="h6" fontWeight={400} sx={{ marginTop: "8px" }}>
        {t(name)}
      </Typography>

      <Box>
        <Rating name="read-only" value={randomRating} readOnly />
      </Box>

      <PriceWrapper>
        <OldPrice>Rs {originalPrice}</OldPrice>
        <NewPrice>Rs {discountedPrice}</NewPrice>
        {discountedPrice && (
          <DiscountBadge>
            {((1 - discountedPrice / originalPrice) * 100).toFixed(0)}% OFF
          </DiscountBadge>
        )}
      </PriceWrapper>

      <ActionContainer className="action-container">
        <TextField
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          size="small"
          sx={{ width: "60px", height: "36px" }}
          inputProps={{ min: 1 }}
        />

        <CartButton
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartIcon />}
          sx={{
            
            height: "36px",
            fontSize: "14px",
            textTransform: "none",
          }}
        >
          {t("Add_to_cart")}
        </CartButton>

        <IconButton color="secondary">
          <FavoriteBorderIcon />
        </IconButton>
      </ActionContainer>
    </CardWrapper>
  );
};

export default ProductCard;
