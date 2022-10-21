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
import "./navbar.css";

export const NavBar = (props) => {
  const pages = ["Home", "Projects", "About Me"];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
        <Toolbar
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="space-around"
        >
          {pages.map((page) => (
            <div
              class="navbar-button"
              style={{ width: "100%", textAlign: "center" }}
            >
              {page}
            </div>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
