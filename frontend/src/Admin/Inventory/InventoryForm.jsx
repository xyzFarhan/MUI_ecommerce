import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

export const InventoryForm = ({ productPlaceholder, onSubmit, onClose }) => {
	const [Product, setProduct] = useState(productPlaceholder);

	const handleChange = (e) => {
		const fieldName = e.target.name;
		const value = e.target.value;
		setProduct({ ...Product, [fieldName]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(Product);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Container>
				<Stack spacing={4}>
					<Typography variant="h5">Product Form</Typography>
					<Stack spacing={6}>
						<TextField
							required
							name="name"
							label="Product Name"
							variant="outlined"
							value={Product.name}
							onChange={handleChange}
						/>
						<TextField
							required
							name="price"
							type="number"
							variant="outlined"
							label="Product Price"
							value={Product.price}
							onChange={handleChange}
						/>
						<TextField
							required
							name="quantity"
							type="number"
							variant="outlined"
							label="Quantity"
							value={Product.quantity}
							onChange={handleChange}
						/>

						<TextField
							name="image"
							type="url"
							variant="outlined"
							label="Image URL"
							value={Product.image}
							onChange={handleChange}
						/>

						<Box display="flex" gap={2} justifyContent="flex-end">
							<Button variant="outlined" onClick={onClose}>
								Cancel
							</Button>
							<Button type="submit" variant="contained">
								Submit
							</Button>
						</Box>
					</Stack>
				</Stack>
			</Container>
		</form>
	);
};
