import React, { useState, useEffect } from "react";
import {
	Box,
	TextField,
	Button,
	Typography,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

export const EmployeeForm = ({ employeePlaceholder, onSubmit, onClose }) => {
	const [employee, setEmployee] = useState(employeePlaceholder);

	useEffect(() => {
		setEmployee(employeePlaceholder);
	}, [employeePlaceholder]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmployee((prevEmployee) => ({
			...prevEmployee,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(employee);
	};

	return (
		<Box sx={{ mt: 2 }}>
			<Typography variant="h6" gutterBottom>
				{employee.id ? "Edit Employee" : "Add Employee"}
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="firstName"
							name="firstName"
							label="First Name"
							value={employee.firstName}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="lastName"
							name="lastName"
							label="Last Name"
							value={employee.lastName}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="email"
							name="email"
							label="Email"
							value={employee.email}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="department-label">Department</InputLabel>
							<Select
								labelId="department-label"
								id="department"
								name="department"
								value={employee.department}
								onChange={handleChange}
								label="Department"
							>
								<MenuItem value={"IT"}>IT</MenuItem>
								<MenuItem value={"HR"}>HR</MenuItem>
								<MenuItem value={"Finance"}>Finance</MenuItem>
								<MenuItem value={"Marketing"}>Marketing</MenuItem>
								<MenuItem value={"Operations"}>Operations</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Box sx={{ mt: 2 }}>
					<Button type="submit" variant="contained" color="primary">
						{employee.id ? "Update Employee" : "Add Employee"}
					</Button>
					<Button
						variant="outlined"
						color="primary"
						onClick={onClose}
						sx={{ ml: 2 }}
					>
						Cancel
					</Button>
				</Box>
			</form>
		</Box>
	);
};
