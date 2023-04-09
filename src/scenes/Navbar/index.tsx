import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const pageTags = ["Home", "Benefits", "Our Classes", "Contact Us"];
  const StyledLink = styled(Link)({
    textDecoration: "none",
    color: palette.secondary.main,
    fontWeight: 400,
    letterSpacing: "0.10rem",
    fontSize: "1.1rem",
  });
  const isNonMobileScreen = useMediaQuery("(min-width:1090px");
  const [y, setY] = useState<number>(0);

  useEffect(() => {
    const scroll = window.scrollY;
    window.addEventListener("scroll", () => setY(window.scrollY));
  });

  return (
    <Box
      sx={{
        height: "3rem",
        position: y > 0 ? "fixed" : "",
        width: "100%",
        color: "white",
        backgroundColor: y > 0 ? `${palette.primary.dark}` : "",
        zIndex: 99,
        padding: "1rem 0",
        transition: "0 0.5s background-color",
        margin: "auto",
      }}
    >
      {isNonMobileScreen ? (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginRight: "2rem" }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={Logo} alt="logo" />
              </motion.div>
            </Box>
            {pageTags.map((page) => (
              <Typography key={page} sx={{ marginRight: "1rem" }}>
                <StyledLink to={`/${page}`}>{page}</StyledLink>
              </Typography>
            ))}
          </Box>
          <Box display="flex">
            <Button sx={{ letterSpacing: "0.10rem" }}>Sign in</Button>
            <Button sx={{ letterSpacing: "0.10rem" }}>Become a member</Button>
          </Box>
        </Container>
      ) : (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <img src={Logo} alt="logo" />
            </motion.div>
          </Box>
          <MenuIcon />
        </Container>
      )}
    </Box>
  );
};

export default Navbar;
