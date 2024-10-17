import { Badge, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "../../Common/Icon";
import { StyledButton } from "../Icons/CustomButton";
import { ShopContext } from "../../Context/ShopContext";

export const AddCart = () => {
	const { totalCartCount } = useContext(ShopContext);

	return (
		<Link to="/cart">
			<StyledButton>
				<IconButton size="small" color="inherit">
					<Badge badgeContent={totalCartCount()} color="error">
						<ShoppingCartIcon />
					</Badge>
				</IconButton>
				<Typography variant="body1" color="inherit">
					cart
				</Typography>
			</StyledButton>
		</Link>
	);
};
