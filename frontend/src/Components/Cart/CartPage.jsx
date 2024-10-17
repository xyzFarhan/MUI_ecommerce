import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import { DeleteIcon } from "../../Common/Icon";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},

	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

export const CartPage = () => {
	const {
		cart,
		removeFromCart,
		PromoCode,
		setPromoCode,
		applyPromoCode,
		subTotalPrice,
		totalPrice,
	} = useContext(ShopContext);
	return (
		<Container sx={{ mb: 30, mt: 8, height: "auto" }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Product Name</StyledTableCell>
							<StyledTableCell align="right">Price ($)</StyledTableCell>
							<StyledTableCell align="right">Quantity</StyledTableCell>
							<StyledTableCell align="right">Total ($)</StyledTableCell>
							<StyledTableCell align="right"></StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{cart.map((product) => (
							<StyledTableRow key={product.id}>
								<StyledTableCell component="th" scope="row">
									{product.name}
								</StyledTableCell>
								<StyledTableCell align="right">
									{product.price}
								</StyledTableCell>
								<StyledTableCell align="right">
									{product.quantity}
								</StyledTableCell>
								<StyledTableCell align="right">
									{(product.price * product.quantity).toFixed(2)}
								</StyledTableCell>
								<StyledTableCell align="right">
									<IconButton
										onClick={() => removeFromCart(product.id)}
									>
										<DeleteIcon />
									</IconButton>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Box
				sx={{
					mt: 3,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					bgcolor: "background.paper",
					p: 2,
					borderRadius: 2,
					boxShadow: 1,
				}}
			>
				<Typography variant="h6" gutterBottom>
					Apply Promo Code
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
					<TextField
						label="Promo Code"
						value={PromoCode}
						onChange={(e) => setPromoCode(e.target.value)}
						sx={{ mr: 2 }}
					/>
					<Button variant="contained" onClick={applyPromoCode}>
						Apply Code
					</Button>
				</Box>

				<Divider sx={{ width: "100%", mb: 2 }} />

				<Typography variant="h6" gutterBottom>
					Order Summary
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						mb: 1,
					}}
				>
					<Typography variant="subtitle1">Subtotal:</Typography>
					<Typography variant="subtitle1">
						${subTotalPrice().toFixed(2)}
					</Typography>
				</Box>
				<Divider sx={{ width: "100%", mb: 2 }} />
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						mb: 1,
					}}
				>
					<Typography
						variant="subtitle1"
						sx={{
							fontWeight: "bold",
							fontSize: 20,
						}}
					>
						Total:
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							fontSize: 24,
							fontWeight: "bold",
						}}
					>
						${totalPrice().toFixed(2)}
					</Typography>
				</Box>
			</Box>

			<>
				{cart.length > 0 && (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Button
							variant="contained"
							sx={{
								mt: 2,
								width: 500,
							}}
						>
							Proceed To Checkout
						</Button>
					</Box>
				)}
			</>
		</Container>
	);
};
