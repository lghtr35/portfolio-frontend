import { AppBar, Toolbar } from "@mui/material";
import { colors } from "../helpers/conf";
import { ContactForm } from "./contact.form";

export const Footer = () => {
  const buttonStyle = { marginLeft: "4%", width: "7%", marginRight: "-1%" };
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
        <div style={buttonStyle}>
          <a
            className="hoverable-text"
            href="https://www.linkedin.com/in/serdil-cagin-cakmak"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors.textDark,
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            LinkedIn
          </a>
        </div>
        <div style={buttonStyle}>
          <a
            className="hoverable-text"
            style={{
              color: colors.textDark,
              textDecoration: "none",
              fontWeight: "bolder",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/lghtr35"
          >
            Github
          </a>
        </div>
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
