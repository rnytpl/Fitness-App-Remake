import { Box } from "@mui/material";
import Navbar from "@/scenes/Navbar/index.js";
import Home from "@/scenes/Home/index.js";
import Sponsors from "@/scenes/Sponsors";
import Benefits from "@/scenes/Benefits";
import Contact from "@/scenes/Contact";
import OurClasses from "@/scenes/OurClasses";
import { useState } from "react";
import { SelectedPage } from "./shared/Types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  console.log(selectedPage);

  return (
    <Box
      className="app"
      sx={{
        height: "100vh",
      }}
    >
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Sponsors />
      <Benefits selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <OurClasses
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Contact selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </Box>
  );
}

export default App;
