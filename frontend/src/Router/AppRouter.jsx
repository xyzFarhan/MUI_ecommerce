import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage, Layout, LoginPage } from "../Pages";
import { CartPage } from "../Components/Cart";
import { DashboardPage } from "../Pages/admin";
import { InventoryDashboard } from "../Admin/Inventory";
import { EmployeeDashboard } from "../Admin/EmployeeManagement";


const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Layout />,
	  children: [
		{
		  index: true,
		  element: <Homepage />,
		},

		{
			path: '/cart',
			element: <CartPage />,
		  },
	  ],
	},
	{
	  path: '/login',
	  element: <LoginPage />,
	},

	{
		path: '/admin',
		element: <DashboardPage />,
	},

	{
		path: '/admin/employee-management',
		element: <EmployeeDashboard />
	},
	{
		path: '/admin/inventory-management',
		element: <InventoryDashboard />
	}
	
  ]);

export function AppRouter({ children }) {
	return <RouterProvider router={router}>{children}</RouterProvider>;
}
