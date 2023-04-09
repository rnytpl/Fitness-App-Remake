import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  useTheme,
  Divider
} from "@mui/material";
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import Diversity3SharpIcon from "@mui/icons-material/Diversity3Sharp";
import BenefitGraphic from "@/assets/BenefitsPageGraphic.png";
import AbstractWaves from "@/assets/AbstractWaves.png";
import Sparkles from "@/assets/Sparkles.png";

import StyledLink from "@/shared/StyledLink";

type Props = {};

const Benefits = (props: Props) => {
  const { palette } = useTheme();

  return (
    <Container
      sx={{
        width: "100vw",
        marginTop: "2rem",
      }}
    >
      <Grid
        container
        gap="2rem"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        color={palette.primary.dark}
        fontSize="1.5rem"
      >
        <Grid
          item
          maxWidth="288px"
          border={`1px solid ${palette.primary.dark}`}
          padding="2rem"
        >
          <Box padding="1rem 0" textAlign="center">
            <RocketLaunchSharpIcon sx={{ fontSize: "2.25rem" }} />
          </Box>
          <Box marginBottom="1rem">
            <Typography variant="h5">State of the Art Facilities</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet,earum incidunt.
            </Typography>
          </Box>
          <StyledLink to="/learnmore" children="Learn More" />
        </Grid>
        <Grid
          item
          maxWidth="288px"
          gap="2rem"
          border={`1px solid ${palette.primary.dark}`}
          padding="2rem"
        >
          <Box padding="1rem 0" textAlign="center">
            <SchoolSharpIcon sx={{ fontSize: "2.25rem" }} />
          </Box>
          <Box marginBottom="1rem">
            <Typography variant="h5">State of the Art Facilities</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet,earum incidunt.
            </Typography>
          </Box>
          <StyledLink to="/learnmore" children="Learn More" />
        </Grid>
        <Grid
          item
          maxWidth="288px"
          gap="2rem"
          border={`1px solid ${palette.primary.dark}`}
          padding="2rem"
        >
          <Box padding="1rem 0" textAlign="center">
            <Diversity3SharpIcon sx={{ fontSize: "2.25rem" }} />
          </Box>
          <Box marginBottom="1rem">
            <Typography variant="h5">State of the Art Facilities</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet,earum incidunt.
            </Typography>
          </Box>
          <StyledLink to="/learnmore" children="Learn More" />
        </Grid>
      </Grid>
      <Grid
        container
        marginTop="3rem"
        marginBottom="3rem"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6}>
          <img src={BenefitGraphic} style={{ width: "100%" }} />
        </Grid>
        <Grid item md={6} textAlign="center" position="relative">
          <img
            style={{ position: "absolute", top: -80, left: -30, zIndex: -1 }}
            src={AbstractWaves}
          />
          <Typography position="relative" variant="h4">
            MILLIONS OF HAPPY MEMBERS GETTING FIT
          </Typography>
          <Typography position="relative">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptatem odit excepturi placeat totam adipisci
            veritatis eligendi reiciendis vitae, a cumque eum nisi mollitia in
            laudantium praesentium, incidunt ipsa similique! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Nemo, obcaecati, sunt, aut
            perferendis neque voluptates ipsam perspiciatis a iusto atque
            corporis recusandae consequatur voluptatem expedita?
          </Typography>
          <img
            style={{
              position: "absolute",
              bottom: -100,
              right: 10,
              zIndex: -1,
            }}
            src={Sparkles}
          />
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
};

export default Benefits;
