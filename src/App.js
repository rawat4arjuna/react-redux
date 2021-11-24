import React from "react";
import { Provider } from "react-redux";
import Route from "./routes/index";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./utils/Theme/light";
import { Grid, CssBaseline } from "@mui/material";
import {Store} from "./redux/store";
function App() {
  return (
    <Provider store={Store} className="App">
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Grid
          container
          fullwidth={true}
          style={{ height: "100vh" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Route />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
