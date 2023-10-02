import { Box, Stack, Typography } from "@mui/material";
import { CustomCarousel } from "./carousel";
import { Link } from "react-router-dom";
import { colors, SERVER_URL } from "../helpers/conf";
import { useEffect, useState } from "react";
import { getRequest } from "../helpers/request";

export const ShortInfo = (props) => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [importantAbouts, setImportantAbouts] = useState([]);
  useEffect(() => {
    getRequest(`${SERVER_URL}/projects/latest`)
      .then((res) => {
        if (res) {
          setLatestProjects(res);
        }
      })
      .catch((err) => console.log(err));

    getRequest(`${SERVER_URL}/images/important-experiences`)
      .then((res) => {
        if (res) {
          setImportantAbouts(res);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  // const findScrollPercentage = props.findScrollPercentage;
  const boxStyle = {
    position: "relative",
    width: "47%",
    height: "65vh",
    backgroundColor: colors.primary,
    boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "bold",
    fontSize: "3vw",
  };
  return (
    <Box
      sx={{
        paddingInline: "4%",
        paddingBlock: "3%",
      }}
    >
      <Typography id="about-text" fontFamily="Quicksand" fontSize="3vh">
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
        . My interests are Full-Stack Web Development, Computer Communications
        and Big Data Applications. I have experiences on RESTful APIs, Web
        Front-Ends, Mobile Applications, Data Analysis and Machine Learning.
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
        // {style={{
        //   opacity: findScrollPercentage(document.getElementById("about-text")),
        // }}}
      >
        <div id="short-info-projects" style={boxStyle}>
          <Link className="hoverable-text" to="/projects" style={linkStyle}>
            Projects
          </Link>
          <div style={{ width: "90%", marginInline: "auto", marginTop: "4%" }}>
            <CustomCarousel
              fade={true}
              boxHeight="52vh"
              images={latestProjects}
            />
          </div>
        </div>
        <div id="short-info-interest-box" style={boxStyle}>
          <Link className="hoverable-text" to="/about" style={linkStyle}>
            Experiences and Skills
          </Link>
          <div style={{ width: "90%", marginInline: "auto", marginTop: "4%" }}>
            <CustomCarousel
              fade={true}
              boxHeight="52vh"
              images={importantAbouts}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
