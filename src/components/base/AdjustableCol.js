import { colors } from "../../helpers/conf";

export const AdjustableCol = (props) => {
  return (
    <div
      style={{
        backgroundColor: props?.style?.backgroundColor
          ? props?.style?.backgroundColor
          : colors.background,
        minHeight: "100%",
        ...props?.style,
      }}
    >
      {props.children}
    </div>
  );
};
