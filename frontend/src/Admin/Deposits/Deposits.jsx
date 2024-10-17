import * as React from 'react';
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";

const getCurrentDate = () => {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const Deposits = () => {
  return (
    <>
      <Typography component="h2" variant="body" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {getCurrentDate()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={(event) => event.preventDefault()}>
          View balance
        </Link>
      </div>
    </>
  );
};
