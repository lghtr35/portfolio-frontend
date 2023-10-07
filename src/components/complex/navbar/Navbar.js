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
import { Logo } from "../../static.components";

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
              <Logo />
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              className="navbar-button"
              style={{
                width: "10%",
                textAlign: "center",

                color: colors.text,
                textDecoration: "none",
              }}
              key={page.name}
              to={page.path}
            >
              <span style={{ fontFamily: "Quicksand", fontSize: 20 }}>
                {page.name}
              </span>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
