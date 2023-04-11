import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { SelectedPage } from "@/shared/Types";

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

interface User extends yup.InferType<typeof validationSchema> {
  name: string;
  message: string;
  email: string;
}

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ selectedPage, setSelectedPage }: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container
      id="contactus"
      sx={{
        width: "100vw",
        marginTop: "3rem",
        padding: "2rem 0",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h4">Contact Us!</Typography>
      </Box>
      <Grid container marginTop="3rem">
        <Grid item md={6}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                marginBottom: "1rem",
              }}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{
                marginBottom: "1rem",
              }}
            />
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              type="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              multiline
              rows={6}
              sx={{
                marginBottom: "1rem",
              }}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item md={6} padding="1rem 2rem 2rem 2rem">
          <Typography variant="h4" marginBottom="2rem">
            MILLIONS OF HAPPY MEMBERS GETTING FIT
          </Typography>
          <Typography>
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
