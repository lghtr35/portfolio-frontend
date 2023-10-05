import { colors } from "../../helpers/conf";

export const AvatarBox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        color: colors.textDark,
        ...props.style,
      }}
    >
      <img
        style={{
          width: props.avatarSize,
          height: props.avatarSize,
          objectFit: "cover",
          borderRadius: "50%",
        }}
        src={props.src}
      />
      <div
        style={{
          marginTop: "2%",
          width: "50%",
          alignContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
};
