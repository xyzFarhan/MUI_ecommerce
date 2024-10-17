import React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';

export const IconByCategory = [
  { name: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
  { name: 'Orders', icon: <ShoppingCartIcon />, path: '/orders' },
  { name: 'Products', icon: <InventoryIcon />, path: '/admin/inventory-management' },
  { name: 'Employee Management', icon: <PeopleIcon />, path: '/admin/employee-management' },
  { name: 'Calendar', icon: <CalendarMonthIcon />, path: '/calendar' },
  { name: 'Chat', icon: <ChatIcon />, path: '/chat' },
  { name: 'Email', icon: <EmailIcon />, path: '/email' },
  { name: 'Reports', icon: <AssignmentIcon />, path: '/reports' },
  { name: 'Integrations', icon: <LayersIcon />, path: '/integrations' },
];
