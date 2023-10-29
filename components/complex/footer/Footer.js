import { colors } from "../../../helpers/conf";
import { ContactForm } from "../contactForm/ContactForm";

export const Footer = () => {
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
      <ContactForm style={{ width: "25vw" }} />
      <div style={{ width: "60vw" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ marginRight: "3vw" }}>
          <a
            className="hoverable-text"
            href="https://www.linkedin.com/in/serdil-cagin-cakmak"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: colors.text,
              textDecoration: "none",
              fontWeight: "bolder",
              fontSize: "1.4rem",
            }}
          >
            LinkedIn
          </a>
        </div>

        <div>
          <a
            className="hoverable-text"
            style={{
              color: colors.text,
              textDecoration: "none",
              fontWeight: "bolder",
              fontSize: "1.4rem",
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
