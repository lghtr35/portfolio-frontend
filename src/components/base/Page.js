import { colors } from "../../helpers/conf";

export const Page = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
