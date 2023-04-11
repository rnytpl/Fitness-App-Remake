import Redbull from "@/assets/SponsorRedBull.png";
import Forbes from "@/assets/SponsorForbes.png";
import Fortune from "@/assets/SponsorFortune.png";
import { useTheme } from "@mui/material/styles";
import { Grid, Box, Container } from "@mui/material";

type Props = {};

const Sponsors = (props: Props) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: palette.primary.dark,
        minHeight: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: "2rem",
      }}
    >
      <Grid
        container
        columns={3}
        alignItems="center"
        justifyContent="center"
        columnSpacing={5}
      >
        <Grid item>
          <img src={Fortune} />
        </Grid>
        <Grid item>
          <img src={Redbull} />
        </Grid>
        <Grid item>
          <img src={Forbes} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Sponsors;
