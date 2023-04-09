import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "@/scenes/Navbar/index.js";
import Home from "@/scenes/Home/index.js";
import Sponsors from "@/scenes/Sponsors";
import Benefits from "@/scenes/Benefits";
import Contact from "@/scenes/Contact";
import OurClasses from "@/scenes/OurClasses";

function App() {
  return (
    <Box
      className="app"
      sx={{
        height: "100vh",
        width: "100vw",
        margin: "auto",
      }}
    >
      <Navbar />
      <Home />
      <Sponsors />
      <Benefits />
      <OurClasses />
      <Contact />
    </Box>
  );
}

export default App;
