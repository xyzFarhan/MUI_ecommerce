import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { AppPagination } from "../Pagination";

const pageSize = 8;

export const ProductGrid = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (_event, value) => {
		setCurrentPage(value);
	};

	const productsToShow = products.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize


	);
	return (
		<Container>
			<Grid container spacing={2}>
				{productsToShow.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={3}>
						<ProductCard product={product} />
					</Grid>
				))}
			</Grid>

            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
				<AppPagination
					totalProducts={products.length}
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
			</Box>
		</Container>
	);
};
