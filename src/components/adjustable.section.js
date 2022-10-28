import { Box } from "@mui/material";
import { colors } from "../helpers/conf";
export const AdjustableSection = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : colors.background,
        minWidth: props.minWidth ? props.minWidth : "100%",
        minHeight: props.minHeight ? props.minHeight : 400,
        maxWidth: props.maxWidth ? props.maxWidth : false,
        maxHeight: props.maxHeight ? props.maxHeight : false,
        ...props?.style,
      }}
    >
      {props.children}
    </Box>
  );
};
