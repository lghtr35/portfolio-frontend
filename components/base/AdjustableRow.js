import { colors } from "../../helpers/conf";
export const AdjustableRow = (props) => {
  return (
    <div
      style={{
        backgroundColor: props?.backgroundColor
          ? props?.backgroundColor
          : colors.background,
        minHeight: props?.minHeight,
        minWidth: "100%",
        ...props?.style,
      }}
    >
      {props.children}
    </div>
  );
};
