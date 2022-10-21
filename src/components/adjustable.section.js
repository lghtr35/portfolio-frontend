import { Box } from "@mui/material";
import { colors } from "../helpers/conf";
export const AdjustableSection = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        width: props.maxWidth ? props.maxWidth : "100%",
        height: props.maxHeight ? props.maxHeight : 350,
      }}
    >
      {props.children}
    </Box>
  );
};
