import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DeveloperModeSharpIcon from "@mui/icons-material/DeveloperModeSharp";
import { StyledButton } from "../Icons";

export const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: "primary.main",
				color: "white",
				padding: 3,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					mb: 2,
					justifyContent: "center",
				}}
			>
				<DeveloperModeSharpIcon sx={{ mr: 1 }} />
				<Typography
					variant="h6"
					noWrap
					sx={{
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
						color: "inherit",
						textDecoration: "none",
					}}
				>
					SHIROHIGE
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					mb: 2,
				}}
			>
				{["Company", "Product", "Offices", "About", "Contact"].map(
					(text) => (
						<StyledButton key={text} sx={{ marginX: 2 }}>
							{text}
						</StyledButton>
					)
				)}
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					mb: 2,
				}}
			>
				<IconButton color="inherit" href="#">
					<InstagramIcon />
				</IconButton>
				<IconButton color="inherit" href="#">
					<PinterestIcon />
				</IconButton>
				<IconButton color="inherit" href="#">
					<WhatsAppIcon />
				</IconButton>
			</Box>
			<Divider sx={{ width: "100%", mb: 2, bgcolor: "white" }} />
			<Typography variant="body2">
				&copy; {new Date().getFullYear()} SHIROHIGE | All Rights Reserved.
			</Typography>
		</Box>
	);
};
