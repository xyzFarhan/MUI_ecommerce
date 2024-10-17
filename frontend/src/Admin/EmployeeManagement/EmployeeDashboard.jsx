import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Container, Drawer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AdminNavbar } from "../AdminNavbar/AdminNavbar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { EmployeeForm } from "./EmployeeForm";

const defaultTheme = createTheme();

export const EmployeeDashboard = () => {
	const [openForm, setOpenForm] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState("");
	const employees = [
		{
			id: 1,
			firstName: "John",
			lastName: "Doe",
			email: "john.doe@example.com",
			department: "IT",
		},
		{
			id: 2,
			firstName: "Jane",
			lastName: "Smith",
			email: "jane.smith@example.com",
			department: "HR",
		},
		{
			id: 3,
			firstName: "Michael",
			lastName: "Johnson",
			email: "michael.johnson@example.com",
			department: "Finance",
		},
		{
			id: 4,
			firstName: "Emily",
			lastName: "Brown",
			email: "emily.brown@example.com",
			department: "Marketing",
		},
		{
			id: 5,
			firstName: "David",
			lastName: "Lee",
			email: "david.lee@example.com",
			department: "Operations",
		},
		{
			id: 6,
			firstName: "Sarah",
			lastName: "Williams",
			email: "sarah.williams@example.com",
			department: "IT",
		},
		{
			id: 7,
			firstName: "Matthew",
			lastName: "Miller",
			email: "matthew.miller@example.com",
			department: "HR",
		},
		{
			id: 8,
			firstName: "Emma",
			lastName: "Davis",
			email: "emma.davis@example.com",
			department: "Finance",
		},
		{
			id: 9,
			firstName: "Daniel",
			lastName: "Moore",
			email: "daniel.moore@example.com",
			department: "Marketing",
		},
		{
			id: 10,
			firstName: "Olivia",
			lastName: "Wilson",
			email: "olivia.wilson@example.com",
			department: "Operations",
		},
	];

	const getFormattedRows = () =>
		employees.map((employee) => ({
			id: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			email: employee.email,
			department: employee.department,
			data: employee,
		}));

	const onCloseForm = () => {
		setOpenForm(false);
		setSelectedEmployee("");
	};

	const onAddOrUpdateEmployee = (employee) => {
		console.log("Submitting employee:", employee);
		onCloseForm();
		alert(
			employee.id
				? "Employee updated successfully"
				: "Employee added successfully"
		);
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
							onClick={() => {
								setOpenForm(true);
								setSelectedEmployee({});
							}}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mb: 4,
							}}
						>
							<PersonAddIcon sx={{ mr: 1 }} />
							Add Employee
						</Button>
						<Box sx={{ minHeight: 400, width: "100%", py: 2 }}>
							<DataGrid
								columns={[
									{ field: "id", headerName: "ID", width: 90 },
									{
										field: "firstName",
										headerName: "First Name",
										flex: 1,
									},
									{
										field: "lastName",
										headerName: "Last Name",
										flex: 1,
									},
									{ field: "email", headerName: "Email", flex: 1 },
									{
										field: "department",
										headerName: "Department",
										flex: 1,
									},
									{
										field: "actions",
										renderCell: ({ row }) => (
											<Box>
												<Button
													onClick={() => {
														setSelectedEmployee(row.data);
														setOpenForm(true);
													}}
												>
													Edit
												</Button>
											</Box>
										),
									},
								]}
								rows={getFormattedRows()}
								pageSize={10}
							/>

							<Drawer
								anchor="right"
								open={openForm}
								onClose={onCloseForm}
							>
								<Box sx={{ width: 600, px: 2, py: 2 }}>
									<EmployeeForm
										employeePlaceholder={selectedEmployee || {}}
										onSubmit={onAddOrUpdateEmployee}
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
