import { colors } from "../../../helpers/conf";
import "./ProjectTile.css";

export const ProjectTile = (props) => {
  return (
    <div
      style={{
        backgroundColor: colors.primary,
        width: "95%",
        height: "95%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.58)",
        borderRadius: "6%",
        margin: "1vw",
        transition: "0.5s ease-in-out",
      }}
      className="project-tiles"
    >
      <div
        style={{
          margin: "5%",
        }}
      >
        <h1 style={{ fontSize: "1.5rem" }}>{props.projectTitle}</h1>
      </div>
      <img
        style={{
          height: "20rem",
          width: "23rem",
          objectFit: "cover",
          alignSelf: "center",
          margin: "1%",
          borderRadius: "10%",
          padding: "2%",
        }}
        src={props.src}
        alt={`project_tile_${props.projectTitle}`}
      />
    </div>
  );
};
