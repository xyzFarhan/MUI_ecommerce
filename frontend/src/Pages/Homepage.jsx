
import React from 'react'

import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom'
import { ProductFilter } from '../Components/Products'


export const Homepage = () => {
  return(
 <Box>
  <ProductFilter />
  <Box>
    <Outlet />
  </Box>
 </Box>

)
  
}
