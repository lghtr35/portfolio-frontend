import { Link } from "react-router-dom";
import { colors } from "../../../helpers/conf";
import { useEffect, useState } from "react";
import { getRequest } from "../../../helpers/request";
import { StringToJSX } from "../../../helpers/functions";

export const ShortInfo = (props) => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [importantAbouts, setImportantAbouts] = useState([]);
  useEffect(() => {
    getRequest(`/project/latest`)
      .then((res) => {
        if (res) {
          setLatestProjects(res);
          console.log(props.content);
        }
      })
      .catch((err) => console.log(err));

    getRequest(`/images/important-experiences`)
      .then((res) => {
        if (res) {
          setImportantAbouts(res);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
    color: colors.textWhite,
  };
  return (
    <div
      style={{
        paddingInline: "4%",
        paddingBlock: "3%",
        color: colors.textDark,
      }}
    >
      <StringToJSX domString={props?.content?.payload} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div id="short-info-projects" style={boxStyle}>
          <Link className="hoverable-text" to="/projects" style={linkStyle}>
            Projects
          </Link>
          <div
            style={{ width: "90%", marginInline: "auto", marginTop: "4%" }}
          ></div>
        </div>
        <div id="short-info-interest-box" style={boxStyle}>
          <Link className="hoverable-text" to="/about" style={linkStyle}>
            Experiences and Skills
          </Link>
          <div
            style={{ width: "90%", marginInline: "auto", marginTop: "4%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
