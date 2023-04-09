import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const FlexBetween = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};
export default FlexBetween;
