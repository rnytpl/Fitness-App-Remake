import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

type Props = {
  to: string;
  children?: ReactNode;
};
const StyledLink = ({ to, children }: Props) => {
  const Styled = styled(Link)({
    textDecoration: "none",
  });
  return <Styled to={to}>{children}</Styled>;
};
export default StyledLink;
