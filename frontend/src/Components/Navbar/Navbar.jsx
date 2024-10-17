import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import DeveloperModeSharpIcon from "@mui/icons-material/DeveloperModeSharp";
import { AddCart } from "../Cart";
import { StyledButton } from "../Icons/CustomButton";
import { ShopContext } from "../../Context/ShopContext";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(2),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		[theme.breakpoints.up("sm")]: {
			width: "36ch",
			"&:focus": {
				width: "48ch",
			},
		},
	},
}));

export const Navbar = () => {
	const { search, handleSearch } = useContext(ShopContext);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
						<DeveloperModeSharpIcon
							sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
						/>
						<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
							<Typography
								variant="h6"
								noWrap
								component={Link}
								to="/"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								SHIROHIGE
							</Typography>
						</Link>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search for Products, Brands and More"
                value={search}
								onChange={handleSearch}
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link to="/admin">
							<StyledButton>Admin</StyledButton>
						</Link>
						<Link to="/login">
							<StyledButton>Log In</StyledButton>
						</Link>
						<AddCart />
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
