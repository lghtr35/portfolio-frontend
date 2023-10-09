import { div, Toolbar } from "@mui/material";
import { colors } from "../../../helpers/conf";
import { ContactForm } from "../contactForm/ContactForm";
import { isMobileDevice } from "../../../helpers/functions";
import { useEffect, useState } from "react";

export const Footer = () => {
  const buttonStyle = { marginLeft: "10%", width: "100%", padding: "1% 2%" };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  });
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "row",
        zIndex: 2,
      }}
    >
      <ContactForm style={{ width: isMobile ? "150px" : "20%" }} />
      <div style={{ width: isMobile ? "60px" : "60%" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: isMobile ? "80px" : "20%",
        }}
      >
        <div style={buttonStyle}>
          <a
            className="hoverable-text"
            href="https://www.linkedin.com/in/serdil-cagin-cakmak"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors.text,
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
              color: colors.text,
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
      </div>
    </div>
  );
};
