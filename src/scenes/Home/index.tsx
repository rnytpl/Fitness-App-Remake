import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  Grid,
  useTheme,
  Container,
} from "@mui/material";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import EvolveText from "@/assets/EvolveText.png";
import { Link } from "react-router-dom";
import { SelectedPage } from "@/shared/Types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  const isNonMobileScreen = useMediaQuery("(min-width:1200px)");
  const twoKScreen = useMediaQuery("(min-width:2000px");
  const largeScreen = useMediaQuery("(min-width:1600px");
  return (
    <Container
      id="home"
      sx={{
        width: twoKScreen ? "60%" : largeScreen ? "75%" : "80%",
      }}
    >
      <Grid
        container
        margin="auto"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6} position="relative">
          {isNonMobileScreen && (
            <img
              src={EvolveText}
              style={{
                position: "absolute",
                top: -15,
                left: -20,
                zIndex: 1,
                height: "25%",
              }}
            />
          )}
          <img
            style={{
              position: "relative",
              width: "100%",
              marginBottom: "1rem",
              zIndex: 98,
            }}
            src={HomePageText}
            alt="home-page-text"
          />
          <Box sx={{ position: "relative" }}>
            <Typography letterSpacing="0.075rem" marginBottom="1rem">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes that you Dream of.. get Your Dream
              Body Now.
            </Typography>
            <Box margin="1rem 0.75rem 1rem 1rem">
              <Button sx={{ marginRight: "2rem" }}>Join Now</Button>
              <Link to="/learnmore">Learn More</Link>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <img
            src={HomePageGraphic}
            alt="home-page-graphic"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
// sx={{
//     display: "flex",
//     justifyContent: "center",
//     width: "80%",
//     alignItems: "center",
//     height: "80vh",
//     margin: "auto",
//     gap: "1.5rem",
//   }}
