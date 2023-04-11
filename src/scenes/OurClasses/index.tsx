import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import { ClassType, SelectedPage } from "@/shared/Types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: Image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: Image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    image: Image6,
  },
];

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ selectedPage, setSelectedPage }: Props) => {
  const { palette } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleClickPrev = () => {
    setCurrentImageIndex((currentImageIndex - 1) % classes.length);
  };
  const handleClickNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % classes.length);
  };
  console.log(currentImageIndex);

  return (
    <Container
      id="ourclasses"
      sx={{
        width: "100vw",
        marginTop: "2rem",
      }}
    >
      <Grid
        container
        marginTop="3rem"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Grid item md={6}>
          <Typography variant="h5">Our Classes</Typography>
          <Typography variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit voluptatem odit excepturi placeat totam adipisci
            veritatis eligendi reiciendis vitae, a cumque eum nisi mollitia in
            laudantium praesentium, incidunt ipsa similique!
          </Typography>
        </Grid>
        <Grid item md={6} overflow="hidden" marginBottom="3rem">
          <Box display="flex" position="relative">
            <Button
              onClick={() => handleClickPrev()}
              sx={{
                position: "absolute",
                zIndex: "99",
                top: "45%",
                left: "10%",
                color: palette.secondary.dark,
                border: "none",
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: "2.5rem" }} />
            </Button>
            <Button
              onClick={() => handleClickNext()}
              sx={{
                position: "absolute",
                zIndex: "99",
                top: "45%",
                right: "5%",
                color: palette.secondary.dark,
                border: "none",
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "2.5rem" }} />
            </Button>

            {classes.map((item: ClassType, i) => (
              <img
                src={item.image}
                style={{
                  padding: "0.5rem 1.25rem",
                  width: "100%",
                  position: "relative",
                  transition: "transform 0.5s",
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                  objectFit: "contain",
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
};
export default OurClasses;
