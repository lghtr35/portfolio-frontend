import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ShortInfo = (props) => {
  const findScrollPercentage = props.findScrollPercentage;
  return (
    <Typography
      id="about-text"
      fontFamily="Quicksand"
      fontSize="3vh"
      padding={8}
      style={{
        opacity: findScrollPercentage(document.getElementById("about-text")),
      }}
    >
      I am a Software Engineer with Computer Engineering (B.S.) diploma from{" "}
      <a
        className="hoverable-text"
        href="https://www.itu.edu.tr"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontWeight: "bold",
        }}
      >
        ITU
      </a>
      .
      <div />
      My interests are Full-Stack Web Development, Computer Communications and
      Big Data Applications.
      <div />
      Experiences on RESTful APIs, Web Front-Ends, Mobile Applications, Data
      Analysis and Machine Learning
      <div />
      You can see some examples of
      <Link
        className="hoverable-text"
        to="/projects"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontWeight: "bold",
        }}
      >
        {" "}
        my projects{" "}
      </Link>
      or you can find more about
      <Link
        className="hoverable-text"
        to="/about"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontWeight: "bold",
        }}
      >
        {" "}
        my experiences.
      </Link>
    </Typography>
  );
};
