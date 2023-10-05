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
import { colors } from "../../../helpers/conf";
import "@fontsource/quicksand";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: colors.primary,
        }}
        elevation={12}
      >
        <Toolbar direction="row" sx={{ justifyContent: "space-around" }}>
          <div style={{ width: "70%" }}>
            <Link to="/" style={{ textDecoration: "none", color: colors.text }}>
              <span
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  fontSize: "180%",
                }}
              >
                SCC
              </span>
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              className="navbar-button"
              style={{
                width: "10%",
                textAlign: "center",
                fontFamily: "Quicksand",
                color: colors.text,
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
