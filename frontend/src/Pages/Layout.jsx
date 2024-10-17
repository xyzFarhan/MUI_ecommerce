import { Box } from "@mui/material";
import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../Context/ShopContext";


export const Layout = () => {
	return (
    <CartProvider>
		<Box>
			<Navbar />
			<Box component="main">
				<Outlet />
			</Box>

			<Footer />
		</Box>
    </CartProvider>
	);
};
