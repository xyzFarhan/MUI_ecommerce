import React, { useContext } from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
	Button,
} from "@mui/material";
import logo from "../../logo.svg";
import { ShopContext } from "../../Context/ShopContext";

export const ProductCard = ({ product }) => {
	const { addToCart } = useContext(ShopContext)

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Card
				sx={{
					maxWidth: 345,
					transition: "transform 0.2s, box-shadow 0.2s",
					"&:hover": {
						boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
					},
				}}
			>
				<CardMedia component="img" height="240" image={logo} alt={logo} />
				<CardContent
					sx={{
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography
						gutterBottom
						variant="h6"
						component="div"
						sx={{
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}
					>
						{product.name}
					</Typography>

					<Typography variant="body2" color="text.secondary">
						${product.price}
					</Typography>
				</CardContent>

				<Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
					<Button variant="contained" color="primary"
					onClick={()=> addToCart(product)}
					>
						Add To Cart
					</Button>
				</Box>
			</Card>
		</Box>
	);
};
