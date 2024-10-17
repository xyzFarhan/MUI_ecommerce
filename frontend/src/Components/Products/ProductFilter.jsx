import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ShopContext } from "../../Context/ShopContext";
import { ProductGrid } from "./ProductGrid";
import { FilterBtn } from "../Icons/CustomButton";

export function ProductFilter() {
  const { filteredProducts } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "All",
    "Desktop",
    "Laptops",
    "Monitors",
    "Software",
    "Accessories",
    "Storage",
    "Components",
    "Gadget",
    "Gaming",
    "Printers",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryFilteredProducts =
    selectedCategory === "All" || selectedCategory === ""
      ? filteredProducts
      : filteredProducts.filter((product) => product.category === selectedCategory);

  return (
    <Box>
      <Box
        sx={{
          mb: 2,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {categories.map((category) => (
          <FilterBtn
            key={category}
            onClick={() => handleCategoryClick(category)}
            active={selectedCategory === category ? 1 : 0}
          >
            {category}
          </FilterBtn>
        ))}
      </Box>
      <Box>
        {categoryFilteredProducts.length > 0 ? (
          <ProductGrid products={categoryFilteredProducts} />
        ) : (
          <Typography>No products found</Typography>
        )}
      </Box>
    </Box>
  );
}
