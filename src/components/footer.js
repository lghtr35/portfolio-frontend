import { AppBar, Toolbar } from "@mui/material";
import { colors } from "../helpers/conf";
import { ContactForm } from "./contact.form";

export const Footer = () => {
  return (
    <AppBar
      sx={{
        top: "auto",
        bottom: 0,
        position: "relative",
        backgroundColor: colors.background,
      }}
      elevation={2}
    >
      <Toolbar>
        <ContactForm />
      </Toolbar>
      <div
        style={{
          float: "left",
          bottom: 0,
        }}
        id="bottom-element"
      ></div>
    </AppBar>
  );
};
