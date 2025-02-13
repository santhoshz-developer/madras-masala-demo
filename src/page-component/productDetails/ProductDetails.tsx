"use client";

import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ProductConfig } from "@/config/productList/ProductList";

const ProductDetails = ({ id }: { id: string }) => {

  const { t } = useTranslation();
  const product = ProductConfig.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6" color="error">
          {t("product_not_found")}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        p: 3,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 900,
          width: "100%",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          backgroundColor: "#ffffff",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Product Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={product.src}
                alt={t(product.name)}
                width={400}
                height={350}
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </Box>
          </Grid>

          {/* Right Side - Product Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {t(product.name)}
            </Typography>
            <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
              {t("description", { product: t(product.name) })}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {t("original price")}:{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                Rs{product.originalPrice}
              </span>
            </Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
              {t("Now")}: Rs{product.discountedPrice}
            </Typography>

            {/* Buy Now Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                borderRadius: 2,
                textTransform: "none",
                px: 4,
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onClick={() => alert(t("added_to_cart"))}
            >
              {t("Add_to_cart")}
            </Button>

          
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductDetails;
