import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FilterBtn = styled(Button)(({ theme, active }) => ({
	color: active ? "#FFF" : "#2874f0",
	backgroundColor: active ? "#2874f0" : "transparent",
	fontWeight: "bold",
	textTransform: "none",
	borderRadius: "2px",
	padding: "6px 20px",
	marginLeft: theme.spacing(1),
	marginTop: theme.spacing(1),
	marginBottom: theme.spacing(1),
	"&:hover": {
		backgroundColor: "#2874f0",
		borderRadius: "5px",
		color: "#FFF",
	},

    
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	color: "#fff",
	fontWeight: "bold",
	textTransform: "none",
	borderRadius: "2px",
	padding: "6px 20px",
	marginLeft: theme.spacing(2),
	"&:hover": {
		backgroundColor: "#fff",
		color: "#000",
	},
}));
