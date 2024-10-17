import React from "react";
import { Stack, useTheme, Button } from "@mui/material";
import { IconByCategory } from "../SideBar/IconByCategory";
import { NavLink, useLocation } from "react-router-dom";

export const SideBar = ({ isDrawerOpen }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {IconByCategory.map((category) => (
        <NavLink
          to={category.path}
          key={category.name}
          style={{
            textDecoration: "none",
          }}
          isActive={() => location.pathname === category.path}
        >
          <Button
            variant="text"
            fullWidth
            sx={{
              justifyContent: isDrawerOpen ? "flex-start" : "center",
              color:
                location.pathname === category.path
                  ? theme.palette.common.white
                  : theme.palette.text.primary,
              backgroundColor:
                location.pathname === category.path
                  ? theme.palette.primary.main
                  : "primary",
              textTransform: "none",
              padding: "10px",
              margin: "5px 0",
              textAlign: "left",
              fontSize: "16px",
              fontWeight: "600",
              "&:hover": {
                backgroundColor:
                  location.pathname === category.path
                    ? theme.palette.primary.main
                    : "",
              },
            }}
          >
            <span
              style={{
                marginRight: isDrawerOpen ? "15px" : "0",
                color:
                  location.pathname === category.path
                    ? theme.palette.common.white
                    : theme.palette.primary.main,
              }}
            >
              {category.icon}
            </span>
            {isDrawerOpen && (
              <span style={{ marginLeft: "10px" }}>{category.name}</span>
            )}
          </Button>
        </NavLink>
      ))}
    </Stack>
  );
};
