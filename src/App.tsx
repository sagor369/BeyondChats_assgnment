import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h2>hello h2</h2>
        </Grid>
        <Grid item xs={4}>
          <h3>hello h3</h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
