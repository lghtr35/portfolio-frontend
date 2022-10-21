import { Box } from "@mui/material";
import { ContactForm } from "./contact.form";

export const Footer = () => {
  return (
    <Box sx={{ top: "auto", bottom: 0 }}>
      <ContactForm />
      <div style={{ float: "left", clear: "both" }} id="bottom-element"></div>
    </Box>
  );
};
