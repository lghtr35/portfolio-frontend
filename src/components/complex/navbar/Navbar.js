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
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../../helpers/functions";

export const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  });
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
          <div style={{ width: isMobile ? "66px" : "70%" }}>
            <Link to="/" style={{ textDecoration: "none", color: colors.text }}>
              <Logo />
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              className="navbar-button"
              style={{
                width: isMobile ? "25px" : "10%",
                textAlign: "center",

                color: colors.text,
                textDecoration: "none",
              }}
              key={page.name}
              to={page.path}
            >
              <span
                style={{
                  fontFamily: "Quicksand",
                  fontSize: isMobile ? 12 : 20,
                }}
              >
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
