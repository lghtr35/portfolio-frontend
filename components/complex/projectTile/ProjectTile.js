import { colors } from "../../../helpers/conf";
import "./ProjectTile.css";

export const ProjectTile = (props) => {
  return (
    <div
      style={{
        backgroundColor: colors.primary,
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
          objectFit: "cover",
          alignSelf: "center",
          margin: "1%",
          borderRadius: "10%",
          padding: "2%",
          transition: "0.5s ease-in-out",
        }}
        src={props.src}
        alt={`project_tile_${props.projectTitle}`}
        className="project-tiles-image"
      />
    </div>
  );
};
