import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import StyledLink from "@/shared/StyledLink";

type Props = {};

const Contact = (props: Props) => {
  const { palette } = useTheme();
  return (
    <Container
      sx={{
        width: "100vw",
        marginTop: "3rem",
      }}
    >
      <Grid
        container
        marginTop="3rem"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6}>
          hah
        </Grid>
        <Grid item md={6} textAlign="center" position="relative">
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
        </Grid>
      </Grid>
    </Container>
  );
};
export default Contact;
