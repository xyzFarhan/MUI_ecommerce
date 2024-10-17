import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Container, Drawer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminNavbar } from "../AdminNavbar/AdminNavbar";
import AddIcon from "@mui/icons-material/Add";
import { useProduct } from "../../Api/Hooks/useProduct";
import { InventoryForm } from "./InventoryForm";

const productPlaceholder = {
	id: "",
	name: "",
	price: 0,
	quantity: 0,
	image: "",
	categories: [],
};

const defaultTheme = createTheme();

export const InventoryDashboard = () => {
	const { isLoading, products, addOrUpdateProduct, refreshProducts } =
		useProduct();
	const [openForm, setOpenForm] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(productPlaceholder);

	const getFormattedRows = () =>
		products.map((product) => ({
			id: product.id,
			name: product.name,
			price: product.price,
			categories: product.categories,
			quantity: product.quantity,
			data: product,
		}));

	const onCloseForm = () => setOpenForm(false);

	const onAddProduct = (product) => {
		if (product.price < 10) {
			alert("Price can not be less than 10$");
			return;
		}
		addOrUpdateProduct(product).then(() => {
			onCloseForm();
			refreshProducts();
		});
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AdminNavbar />
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
						padding: 3,
					}}
				>
					<Container maxWidth="lg" sx={{ mt: 10 }}>
						<Button
							variant="contained"
							size="medium"
							onClick={() => setOpenForm(true)}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mb: 4,
							}}
						>
							<AddIcon
								sx={{
									mr: 1,
								}}
							/>
							Add Product
						</Button>
						<Box sx={{ minHeight: 400, width: "100%", py: 2 }}>
							<DataGrid
								columns={[
									{
										field: "id",
										headerName: "ID",
										width: 90,
									},
									{
										field: "name",
										headerName: "Product Name",
										flex: 1,
										minWidth: 150,
									},
									{
										field: "quantity",
										headerName: "Quantity",
										width: 150,
									},
									{ field: "price", headerName: "Price", width: 150 },
									{
										field: "vendor",
										headerName: "Vendor",
										width: 150,
									},
									{
										field: "category",
										headerName: "Category",
										width: 150,
									},
									{
										field: "actions",
										renderCell: ({ row }) => (
											<Box>
												<Button
													onClick={() => {
														setSelectedProduct(row.data);
														setOpenForm(true);
													}}
												>
													Edit
												</Button>
											</Box>
										),
									},
								]}
								loading={isLoading}
								rows={getFormattedRows()}
								initialState={{
									pagination: {
										paginationModel: {
											pageSize: 10,
										},
									},
								}}
								pageSizeOptions={[5, 10]}
							/>

							<Drawer
								anchor="right"
								open={openForm}
								onClose={onCloseForm}
							>
								<Box sx={{ width: 600, px: 2, py: 2 }}>
									<InventoryForm
										productPlaceholder={selectedProduct}
										onSubmit={onAddProduct}
										onClose={onCloseForm}
									/>
								</Box>
							</Drawer>
						</Box>
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
};
