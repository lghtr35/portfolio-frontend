import {
  Button,
  Box,
  AppBar,
  Typography,
  MenuItem,
  Menu,
  Toolbar,
  Stack,
} from "@mui/material";
import { colors } from "../helpers/conf";
import "@fontsource/quicksand";
import "./navbar.css";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: colors.background,
        }}
        elevation={12}
      >
        <Toolbar direction="row" sx={{ justifyContent: "space-around" }}>
          <div style={{ width: "100%" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                fontSize={27}
                fontWeight={1000}
                fontFamily="Quicksand"
              >
                SCC
              </Typography>
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              className="navbar-button"
              style={{
                width: "10%",
                textAlign: "center",
                fontFamily: "Quicksand",
                fontWeight: 800,
                color: "inherit",
                textDecoration: "none",
              }}
              key={page.name}
              to={page.path}
            >
              {page.name}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
